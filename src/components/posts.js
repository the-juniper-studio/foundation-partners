import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { PrismicLink, PrismicRichText } from '@prismicio/react'
import { useMergePrismicPreviewData } from 'gatsby-plugin-prismic-previews'

// Components
import CategoryCard from './categoryCard'
import CategoryList from './categoryList'

const Posts = ({ slice, id, layout, type }) => {
  const staticData = useStaticQuery(graphql`
    {
      allPrismicBlogpost(limit: 3, sort: { last_publication_date: DESC }) {
        edges {
          node {
            ...PrismicBlogpostFragment
          }
        }
      }
    }
  `)
  const data = useMergePrismicPreviewData(staticData)
  const articles = type === 'blogpost' ? data.allPrismicBlogpost.edges : data.allPrismicCaseStudy.edges
  let path = '/insights'

  if (!articles) return null
  return (
    <section className='relative posts'>
      {slice?.primary.title && (
        <div className='prose max-w-none text-center'>
          <PrismicRichText field={slice.primary.title.richText} />
        </div>
      )}
      <ul className='flex flex-col gap-6 lg:gap-x-1 lg:gap-y-6'>
        {articles.map((item, index) => {
          if (item.node.id === id) return null
          if (layout === 'list') return <CategoryList publishDate={item.node.first_publication_date_formatted} type={type} item={item} key={`article-list-${index}`} />
          return <CategoryCard publishDate={item.node.first_publication_date_formatted} type={type} item={item} key={`article--card-${index}`} />
        })}
      </ul>
      <div className='flex max-w-full justify-end mt-6'>
        <PrismicLink className='button w-full text-center' href={path}>
          See all Insights
        </PrismicLink>
      </div>
    </section>
  )
}

export default Posts
