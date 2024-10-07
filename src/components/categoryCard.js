import React from 'react'
import { PrismicLink } from '@prismicio/react'
import { GatsbyImage } from 'gatsby-plugin-image'

const CategoryCard = ({ item }) => {
  const itemData = item.node.data
  // const authorData = itemData.author?.document.data
  // const publishDate = item.node.first_publication_date_formatted
  // let timeToRead

  // const wordsPerMinute = 200
  // let wordCount = itemData.page_text?.text.split(' ').length
  // timeToRead = Math.ceil(wordCount / wordsPerMinute)

  return (
    <li className='component-card ease relative flex transform flex-col overflow-hidden border-b-4 border-brandMustard group'>
      <PrismicLink className='flex flex-1 flex-col' href={item.node.url}>
        {itemData.page_image && (
          <div className='relative flex-shrink-0'>
            <GatsbyImage className='' image={itemData.page_image.gatsbyImageData} alt={itemData.page_image.alt || ''} />
          </div>
        )}
        <div className='flex flex-col -mt-20 bg-brandCream dark:bg-brandBlack z-10 m-3 p-6 h-full'>
          <div className='mb-6 space-y-4 prose lg:prose-xl dark:prose-invert'>
            <h3 className='group-hover:text-brandRust'>{itemData.page_title.text}</h3>
            <div className='my-3'>
              {itemData.page_text.text.split(' ').slice(0, 20).join(' ')}
              &hellip;
            </div>
          </div>
          <p className='mb-3 mt-auto text-lg lg:text-xl font-semibold underline group-hover:no-underline'>Read more</p>
        </div>
      </PrismicLink>
    </li>
  )
}

export default CategoryCard
