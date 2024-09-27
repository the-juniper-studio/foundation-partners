import React from 'react'
import { graphql, Slice } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { PrismicRichText } from '@prismicio/react'

// Components
import Breadcrumb from '../components/breadcrumb'
import Layout from '../components/layout'
import PageHeader from '../components/pageHeader'
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

  return (
    <Layout lang={page.lang} altLangs={page.alternate_languages}>
      <PageHeader authorData={pageData.author?.document.data} type={page.type} pageData={pageData} publishDate={data.prismicBlogpost.first_publication_date_formatted} />
      <Breadcrumb location={location} />
      <div className='mx-auto grid w-full max-w-screen-xl grid-cols-1 gap-10 p-6 pb-10 md:p-8 lg:grid-flow-dense lg:grid-cols-3'>
        <div className='article-body prose prose-lg dark:prose-invert lg:col-span-2 lg:col-start-1 min-w-full'>
          <PrismicRichText field={pageData.page_text.richText} />
          {page.tags?.length > 0 && (
            <div className='flex gap-3'>
              <span className='bg-indigo-50 px-2 py-1 text-sm uppercase text-indigo-800'>{page.tags}</span>
            </div>
          )}
        </div>
        <div className='lg:col-span-1 lg:col-start-3'>
          <div className='top-16 flex flex-col gap-12 lg:sticky bg-slate-300 p-3'>
            <Share title={pageData.page_title.text} link={page.url} image={pageData.page_image} />
            <div>
              <div className='prose mb-3 lg:mb-6'>
                <h2>Other articles you might enjoy</h2>
              </div>
              <Slice alias='posts' id={data.prismicBlogpost?.id || data.prismicCaseStudy?.id} layout='list' type={page.type} />
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
