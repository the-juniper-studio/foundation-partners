import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import { Buffer } from 'buffer'
import { useMergePrismicPreviewData } from 'gatsby-plugin-prismic-previews'

export const Seo = ({ children, datePublished, dateModified, isArticle, pageData, pathname }) => {
  const staticData = useStaticQuery(graphql`
    {
      prismicConfig {
        data {
          company_address {
            richText
            text
          }
          company_display_name
          company_logo {
            url(imgixParams: { w: 400 })
          }
          company_phone
          facebook_image {
            url
          }
          social {
            social_network_url {
              url
            }
          }
        }
      }
    }
  `)

  // Hook to fetch Backup MetaData from Gatsby
  const { companyName, description, logo, twitterUsername, siteUrl } = useSiteMetadata()

  // Declare all data points
  const data = useMergePrismicPreviewData(staticData)
  const configData = data.prismicConfig.data
  const authorData = pageData?.author?.[0]
  const url = `${siteUrl}${pathname || ''}`
  const { page_image, page_title, meta_description, meta_title } = pageData
  const { company_display_name, company_logo, company_phone, facebook_image } = configData
  const title = meta_title || page_title?.text
  const name = company_display_name || companyName
  const pageDescription = meta_description || description

  // Generate OG Image
  const base64Title = Buffer.from(meta_title || page_title?.text)
    .toString('base64')
    .replace(/\//g, '_')
  const base64ImageUrl = Buffer.from(`https://assets.imgix.net/~text?txt64=${base64Title}&txtclr=ffffff&txtlead=0&txtshad=5&txtfont=Helvetica%2CBold&txtalign=center&txtsize=48&w=1000&txtpad=20`)
    .toString('base64')
    .replace(/\//g, '_')
  const base64CompanyLogo = Buffer.from(company_logo.url || logo)
    .toString('base64')
    .replace(/\//g, '_')
  let image = facebook_image.url
  if (page_image?.url) {
    image = `${
      page_image.url?.split('?')[0]
    }?format&q=&auto=compress&fit=crop&w=1200&h=630&border=5,FFFFFF&blend-align=middle&blend-x=90&blend64=${base64ImageUrl}&mark-align=center&mark-y=50&mark64=${base64CompanyLogo}`
  }

  // Create Social Media Array
  const socialMedia = configData.social.map((obj) => obj['social_network_url'].url)

  const baseSchema = [
    {
      '@context': 'https://schema.org/',
      '@type': 'WebSite',
      url,
      name: name,
      description: description,
      sameAs: socialMedia
    },
    {
      '@context': 'https://schema.org/',
      '@type': 'Organization',
      url,
      name: name,
      sameAs: socialMedia,
      // address: {
      //   '@type': 'PostalAddress',
      //   addressLocality: 'Canterbury',
      //   postalCode: 'CT1 3SB',
      //   streetAddress: '37 Hollow Lane'
      // },
      logo: {
        '@type': 'ImageObject',
        url: company_logo.url || logo
      },
      telephone: company_phone
    }
  ]

  const schema = isArticle
    ? [
        ...baseSchema,
        {
          '@context': 'https://schema.org/',
          '@type': ['BlogPosting', 'NewsArticle', 'Article'],
          url,
          name: name,
          headline: title,
          image: [facebook_image.url],
          description: description,
          author: {
            '@type': 'Person',
            name: authorData?.name || twitterUsername,
            url: `${siteUrl}${authorData?.url}`
          },
          publisher: {
            '@type': 'Organization',
            url,
            logo: {
              '@type': 'ImageObject',
              url: authorData?.image.url
            },
            name: authorData?.name || twitterUsername
          },
          datePublished,
          dateModified
        }
      ]
    : baseSchema

  return (
    <React.Fragment key='seo'>
      <title>{title}</title>
      <meta name='author' content={authorData?.name || twitterUsername} />
      <link rel='canonical' href={url} data-baseprotocol='https:' data-basehost={siteUrl} />
      <meta name='description' content={pageDescription} />
      <meta name='image' content={image} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={pageDescription} />
      <meta property='og:image' content={image} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <meta property='og:type' content={isArticle ? 'article' : 'website'} />
      <meta property='og:url' content={url} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta property='twitter:url' content={url} />
      <meta property='twitter:domain' content={new URL(siteUrl).hostname} />
      <meta name='twitter:description' content={pageDescription} />
      <meta name='twitter:image' content={image} />
      <meta name='twitter:creator' content={twitterUsername} />
      <script type='application/ld+json'>{JSON.stringify(schema)}</script>
      {children}
    </React.Fragment>
  )
}

export default Seo
