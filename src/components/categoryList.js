import React from 'react'
import { PrismicLink } from '@prismicio/react'

const CategoryList = ({ item }) => {
  const itemData = item.node.data
  const authorData = itemData.author?.document.data
  const publishDate = item.node.first_publication_date_formatted

  return (
    <li className='space-y-10 group border-t-2 border-brandBlack dark:border-brandCream pt-3'>
      <PrismicLink href={item.node.url} className='flex'>
        <article className='relative isolate flex flex-col gap-6 lg:flex-row'>
          <div className='w-full'>
            <div className='relative max-w-xl'>
              <h3 className='text-lg py-0 group-hover:text-brandRust font-semibold'>{itemData.page_title.text}</h3>
            </div>
            <div className='flex border-neutral-900/5 gap-2 text-sm'>
              <p className='font-semibold'>{authorData.name}</p>

              <div className='flex flex-col items-start'>
                <time dateTime={publishDate} className='text-neutral-500 dark:text-neutral-300'>
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
