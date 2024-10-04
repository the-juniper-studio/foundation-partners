import React from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'

// Components
import Breadcrumb from '../components/breadcrumb'
import Layout from '../components/layout'
import PageHeader from '../components/pageHeader'
import Seo from '../components/seo'
import SliceList from '../components/sliceList'

export const query = graphql`
  query Page($id: String) {
    prismicPage(id: { eq: $id }) {
      ...PrismicPageFragment
    }
  }
`

const PageTemplate = ({ data, location }) => {
  const page = data.prismicPage
  const pageData = page.data

  return (
    <Layout lang={page.lang} altLangs={page.alternate_languages} uid={data.uid}>
      <PageHeader pageData={pageData} type={page.type} />
      <Breadcrumb location={location} />
      <SliceList slices={pageData.body} />
    </Layout>
  )
}

export default withPrismicPreview(PageTemplate)

export const Head = ({ data, location }) => {
  const page = data.prismicPage

  return (
    <>
      <html lang={page.lang || 'en-gb'} />
      <Seo dateModified={page.last_publication_date} datePublished={page.first_publication_date} pageData={page.data} pathname={location.pathname} />
    </>
  )
}
