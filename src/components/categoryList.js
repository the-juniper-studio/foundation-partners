import React from 'react'
import { PrismicLink } from '@prismicio/react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const CategoryList = ({ item }) => {
  const itemData = item.node.data
  const authorData = itemData.author?.document.data
  const publishDate = item.node.first_publication_date_formatted

  return (
    <li className='space-y-10 group'>
      <PrismicLink href={item.node.url}>
        <article className='relative isolate flex flex-col gap-3 lg:flex-row'>
          <div className='w-full'>
            <div className='flex flex-col items-start gap-x-3 text-sm'>
              <time dateTime={publishDate} className='text-slate-500 dark:text-slate-50'>
                {publishDate}
              </time>
            </div>
            <div className='relative max-w-xl'>
              <h3 className='text-lg py-0 font-medium leading-6 text-indigo-700 group-hover:text-slate-600 dark:text-slate-50 dark:group-hover:text-indigo-400'>
                <span className='absolute inset-0' />
                {itemData.page_title.text}
              </h3>
            </div>
            <div className='flex border-slate-900/5'>
              <div className='relative flex items-center gap-x-3'>
                <GatsbyImage className='border-1 border-1 h-6 w-6 rounded bg-slate-50' image={authorData.image.gatsbyImageData} alt={authorData.image.alt || ''} />
                <div className='text-sm leading-6'>
                  <p className='font-medium'>
                    <span className='absolute inset-0' />
                    {authorData.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {itemData.page_image.url && (
            <div className='relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:h-20 lg:w-20 lg:shrink-0'>
              <GatsbyImage className='absolute inset-0 h-full w-full rounded-2xl bg-slate-50 object-cover' image={getImage(itemData.page_image)} alt={itemData.page_image.alt || ''} />
            </div>
          )}
        </article>
      </PrismicLink>
    </li>
  )
}

export default CategoryList
