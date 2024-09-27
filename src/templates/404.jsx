import React from 'react'
import { graphql } from 'gatsby'

import { withPrismicUnpublishedPreview } from 'gatsby-plugin-prismic-previews'

// Components
import Layout from '../components/layout'
import PageHeader from '../components/pageHeader'
import Seo from '../components/seo'

export const query = graphql`
  query page404($lang: String) {
    prismicPage(uid: { eq: "404" }, lang: { eq: $lang }) {
      ...PrismicPageFragment
    }
  }
`

const NotFoundPage = ({ data }) => {
  const page = data.prismicPage
  const pageData = page.data

  return (
    <Layout lang={page.lang} altLangs={page.alternate_languages}>
      <PageHeader pageData={pageData} type={page.type} />
    </Layout>
  )
}

export default withPrismicUnpublishedPreview(NotFoundPage)

export const Head = ({ data, location }) => {
  const page = data.prismicPage
  return (
    <>
      <html lang={data.prismicPage.lang || 'en-gb'} />
      <Seo dateModified={page.last_publication_date} datePublished={page.first_publication_date} pageData={page.data} pathname={location.pathname} />
    </>
  )
}
