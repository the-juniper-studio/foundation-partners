import React from 'react'
import { graphql, Slice } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { PrismicRichText } from '@prismicio/react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

// Components
import Breadcrumb from '../components/breadcrumb'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Share from '../components/share'

export const query = graphql`
  query Blogpost($id: String) {
    prismicBlogpost(id: { eq: $id }) {
      ...PrismicBlogpostFragment
    }
  }
`

const BlogpostTemplate = ({ data, location }) => {
  const page = data.prismicBlogpost
  const pageData = page.data
  const authorData = pageData.author?.document.data
  const publishDate = data.prismicBlogpost.first_publication_date_formatted
  const timeToRead = publishDate ? Math.ceil(pageData.page_text?.text.split(' ').length / 200) : null

  return (
    <Layout lang={page.lang} altLangs={page.alternate_languages}>
      <div className='hero relative col-span-full w-full row-span-full mx-auto flex flex-col justify-center gap-6 md:gap-12 px-3 md:px-6 py-12 md:max-w-screen-xl md:text-2xl'>
        <PrismicRichText field={pageData.page_title.richText} />

        {authorData && (
          <div className='flex justify-start gap-6 items-center'>
            {authorData.image.gatsbyImageData && (
              <GatsbyImage className='h-16 w-16 bg-brandBlack border-2 border-brandBlack rounded-full lg:h-20 lg:w-20' image={getImage(authorData.image)} alt={authorData.image.alt || ''} />
            )}
            <div>
              {' '}
              <p className='text-base font-semibold mb-1'>
                {authorData.name}
                {authorData.position && (
                  <>
                    <span aria-hidden='true'> &middot; </span>
                    <span> {authorData.position}</span>
                  </>
                )}
              </p>
              {publishDate && (
                <p className='text-neutral-500 text-sm dark:text-neutral-300'>
                  <span>{publishDate}</span>
                  {timeToRead && (
                    <>
                      <span aria-hidden='true'> &middot; </span>
                      <span>{timeToRead} min read</span>
                    </>
                  )}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
      <Breadcrumb location={location} title={pageData.meta_title} />
      <div className='mx-auto grid w-full max-w-screen-xl grid-cols-1 gap-12 p-3 md:p-6 pb-10 lg:grid-flow-dense lg:grid-cols-3'>
        <div className='article-body prose lg:prose-lg dark:prose-invert lg:col-span-2 lg:col-start-1 min-w-full'>
          <PrismicRichText field={pageData.page_text.richText} />
        </div>
        <div className='lg:col-span-1 lg:col-start-3'>
          <div className='top-3 flex flex-col gap-12 lg:sticky bottom-3'>
            <Share title={pageData.page_title.text} link={page.url} image={pageData.page_image} />
            <div>
              <div className='prose mb-3 lg:mb-6 dark:prose-invert'>
                <h2>Related Insights</h2>
              </div>
              <Slice alias='posts' id={data.prismicBlogpost?.id} layout='list' type={page.type} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default withPrismicPreview(BlogpostTemplate)

export const Head = ({ data, location }) => {
  const page = data.prismicBlogpost
  const pageData = page.data

  return (
    <>
      <html lang={data.prismicBlogpost.lang} />
      <Seo dateModified={page.last_publication_date} datePublished={page.first_publication_date} isArticle={true} pageData={pageData} pathname={location.pathname} />
    </>
  )
}
