require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  flags: {
    PRESERVE_FILE_DOWNLOAD_CACHE: true
  },
  siteMetadata: {
    companyName: process.env.GATSBY_COMPANY_NAME,
    description: process.env.GATSBY_COMPANY_DESCRIPTION,
    image: '/og-icon.png',
    logo: '/juniper-logo.png',
    siteUrl: process.env.GATSBY_COMPANY_URL,
    twitterUsername: `@studiojuniper`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleTagManager: {
          trackingId: process.env.GATSBY_COMPANY_GTM,
          cookieName: 'gatsby-gdpr-gtm',
          dataLayerName: 'dataLayer'
        },
        environments: ['production', 'development']
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `avif`],
          placeholder: `blurred`
        }
      }
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*': ['X-Frame-Options: DENY', 'X-XSS-Protection: 1; mode=block', 'X-Content-Type-Options: nosniff', 'Referrer-Policy: strict-origin-when-cross-origin'],
          '/*.html': ['Cache-Control: public, max-age=0, must-revalidate'],
          '/*.js': ['Cache-Control: cache-control: public, max-age=31536000, immutable'],
          '/*.css': ['Cache-Control: cache-control: public, max-age=31536000, immutable'],
          '/sw.js': ['Cache-Control: public, max-age=0, must-revalidate'],
          '/static/*': ['Cache-Control: public, max-age=31536000, immutable'],
          '/page-data/*.json': ['Cache-Control: public, max-age=0, must-revalidate'],
          '/page-data/app-data.json': ['Cache-Control: public, max-age=0, must-revalidate']
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: process.env.GATSBY_COMPANY_NAME,
        short_name: process.env.GATSBY_COMPANY_NAME,
        start_url: `/`,
        background_color: `#fff6ed`,
        theme_color: `#fff6ed`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
        icon_options: {
          purpose: `any maskable`
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        createLinkInHead: true,
        entryLimit: 45000,
        excludes: [`/preview/`, `/preview/*`, `/success/`, `/components/`, `/fr/404/`, `/fr/components/`],
        output: `/`,
        query: `
          {
            allSitePage {
              nodes {
                path
              }
            }
            allPrismicBlogpost {
              nodes {
                last_publication_date
                url
              }
            }
            allPrismicPage {
              nodes {
                last_publication_date
                url
              }
            }
          }
        `,
        resolvePages: ({ allSitePage: { nodes: allPages }, allPrismicPage: { nodes: allPrismicPageNodes }, allPrismicBlogpost: { nodes: allPrismicBlogpostNodes } }) => {
          const allPrismicNodes = Object.values({ ...allPrismicPageNodes, ...allPrismicBlogpostNodes })
          const prismicNodeMap = allPrismicNodes.reduce((acc, node) => {
            const { url } = node
            acc[url] = node
            return acc
          }, {})

          return allPages.map((page) => {
            return { ...page, ...prismicNodeMap[page.path] }
          })
        },
        serialize: ({ path, last_publication_date }) => {
          return {
            url: path,
            lastmod: last_publication_date?.substring(0, 10)
          }
        },
        resolveSiteUrl: () => process.env.GATSBY_COMPANY_URL
      }
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        customTypesApiToken: process.env.GATSBY_PRISMIC_CUSTOM_TYPES_API_TOKEN,
        lang: process.env.GATSBY_PRISMIC_LANG,
        linkResolver: require('./src/utils/linkResolver').linkResolver,
        repositoryName: process.env.GATSBY_PRISMIC_MAIN_REPOSITORY_NAME,
        routes: [
          {
            type: 'page',
            uid: 'index',
            path: '/:lang?'
          },
          {
            type: 'page',
            path: '/:lang?/:uid'
          },
          {
            type: 'blogpost',
            path: '/:lang?/insights/:uid'
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-prismic-previews',
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_MAIN_REPOSITORY_NAME,
        routes: [
          {
            type: 'page',
            uid: 'index',
            path: '/:lang?'
          },
          {
            type: 'page',
            path: '/:lang?/:uid'
          },
          {
            type: 'blogpost',
            path: '/:lang?/insights/:uid'
          }
        ]
      }
    },
    `gatsby-plugin-image`
  ]
}
