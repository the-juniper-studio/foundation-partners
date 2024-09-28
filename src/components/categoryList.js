import React from 'react'
import { PrismicLink } from '@prismicio/react'

const CategoryList = ({ item }) => {
  const itemData = item.node.data
  const authorData = itemData.author?.document.data
  const publishDate = item.node.first_publication_date_formatted

  console.log(item)
  return (
    <li className='space-y-10 group'>
      <PrismicLink href={item.node.url}>
        <article className='relative isolate flex flex-col gap-6 lg:flex-row'>
          <div className='w-full'>
            <div className='relative max-w-xl'>
              <h3 className='text-lg py-0'>
                <span className='absolute inset-0' />
                {itemData.page_title.text}
              </h3>
            </div>
            <div className='flex border-neutral-900/5 gap-2'>
              <p className='font-medium'>{authorData.name}</p>

              <div className='flex flex-col items-start'>
                <time dateTime={publishDate} className='text-neutral-500'>
                  {publishDate}
                </time>
              </div>
            </div>
          </div>
        </article>
      </PrismicLink>
    </li>
  )
}

export default CategoryList
