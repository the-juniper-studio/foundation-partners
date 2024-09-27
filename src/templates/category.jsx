import React from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'

// Components
import Breadcrumb from '../components/breadcrumb'
import CategoryCard from '../components/categoryCard'
import Layout from '../components/layout'
import PageHeader from '../components/pageHeader'
import Pagination from '../components/pagination'
import Seo from '../components/seo'

export const query = graphql`
  query BlogPost($skip: Int!, $limit: Int!) {
    prismicPage(uid: { eq: "blog" }) {
      ...PrismicPageFragment
    }
    allPrismicBlogpost(limit: $limit, skip: $skip, sort: { first_publication_date: DESC }) {
      edges {
        node {
          ...PrismicBlogpostFragment
        }
      }
    }
  }
`

const CategoryTemplate = ({ data, location, pageContext }) => {
  const page = data.prismicPage
  const pageData = page.data
  const items = data.allPrismicBlogpost.edges
  const { currentPage, numPages } = pageContext

  return (
    <Layout lang={page.lang} altLangs={page.alternate_languages}>
      <PageHeader pageData={pageData} type={page.type} />
      <Breadcrumb location={location} />
      <div className='relative mx-auto max-w-7xl px-3 md:px-6 py-5 pb-4 sm:px-6 sm:pb-8 md:py-8'>
        <div className='relative'>
          <ul className='grid grid-cols-1 gap-5 md:grid-cols-3'>
            {items.map((item, index) => {
              return <CategoryCard isBlogpost={true} item={item} key={`item-${index}`} />
            })}
          </ul>
        </div>
        <Pagination currentPage={currentPage} numPages={numPages} pageLink={`/${pageContext.category}`} />
      </div>
    </Layout>
  )
}

export default withPrismicPreview(CategoryTemplate)

export const Head = ({ data, location }) => {
  const page = data.prismicPage
  return (
    <>
      <html lang={data.prismicPage.lang} />
      <Seo dateModified={page.last_publication_date} datePublished={page.first_publication_date} pageData={page.data} pathname={location.pathname} />
    </>
  )
}
