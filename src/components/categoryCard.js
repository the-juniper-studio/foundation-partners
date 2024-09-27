import React from 'react'
import { PrismicLink } from '@prismicio/react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const CategoryCard = ({ item }) => {
  const itemData = item.node.data
  const authorData = itemData.author?.document.data
  const publishDate = item.node.first_publication_date_formatted
  let timeToRead

  if (item.node.type === 'blogpost') {
    const wordsPerMinute = 200
    let wordCount = itemData.page_text?.text.split(' ').length
    timeToRead = Math.ceil(wordCount / wordsPerMinute)
  }
  return (
    <li className='component-card ease relative flex transform flex-col overflow-hidden rounded-sm border border-slate-50 bg-white p-2 shadow transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-indigo-800/10 dark:border-slate-700 dark:bg-slate-700'>
      <PrismicLink className='flex flex-1 flex-col' href={item.node.url}>
        <div className='relative flex-shrink-0'>
          <GatsbyImage image={getImage(itemData.page_image)} alt={itemData.page_image.alt || ''} />
        </div>
        <div className='m-3 flex flex-1 flex-col'>
          <div className='mb-6 space-y-4 prose dark:prose-invert'>
            <h3>{itemData.page_title.text}</h3>
            <div className='mb-6 mt-3'>
              {itemData.page_text.text.split(' ').slice(0, 20).join(' ')}
              &hellip;
            </div>
          </div>
          {authorData && (
            <div className='mt-auto flex'>
              <div className='relative mr-3 flex-shrink-0'>
                <GatsbyImage className='border-1 h-10 w-10 rounded bg-slate-50' image={authorData.image.gatsbyImageData} alt={authorData.image.alt || ''} />
              </div>
              <div>
                <p className='font-medium text-slate-900 dark:text-slate-50'>{authorData.name}</p>
                <div className='flex space-x-1 text-sm text-slate-500 dark:text-slate-100'>
                  {publishDate} &middot; {timeToRead} min read
                </div>
              </div>
            </div>
          )}
        </div>
      </PrismicLink>
    </li>
  )
}

export default CategoryCard
