import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { graphql } from 'gatsby'

// Components
import CategoryCard from './categoryCard'

export const query = graphql`
  {
    allPrismicBlogpost(limit: 3, sort: { first_publication_date: DESC }) {
      edges {
        node {
          ...PrismicBlogpostFragment
        }
      }
    }
  }
`

const Blogposts = ({ data, slice }) => {
  return (
    <section className='component-blogposts mx-auto w-full max-w-screen-xl px-3 md:px-6 py-10'>
      <div className='prose mb-10 max-w-none text-center dark:prose-invert lg:prose-xl'>
        <PrismicRichText field={slice.primary.title.richText} />
      </div>
      <ul className='grid grid-cols-1 gap-4 md:grid-cols-3'>
        {data.allPrismicBlogpost.edges.map((blogpost, index) => {
          return <CategoryCard isBlogpost={true} item={blogpost} key={`blogpost-${index}`} />
        })}
      </ul>
    </section>
  )
}

export default Blogposts
