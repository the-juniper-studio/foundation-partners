import React from 'react'
import { PrismicRichText, PrismicLink } from '@prismicio/react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Card = ({ fields }) => {
  return (
    <li
      className={`component-card ease relative flex flex-grow transform flex-col rounded-sm bg-white p-2 shadow dark:bg-slate-700 ${
        fields.button_link?.url != null && ' transition duration-300 group ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-indigo-800/10'
      }`}>
      {fields.image.gatsbyImageData && (
        <div className='transform overflow-hidden transition duration-500'>
          <GatsbyImage className='overflow-hidden rounded-t-sm' image={getImage(fields.image)} alt={fields.image.alt || ''} />
        </div>
      )}
      <div className='m-4 flex flex-grow flex-col gap-4'>
        <div className='prose prose-lg max-w-none dark:prose-invert lg:prose-lg'>
          <PrismicRichText field={fields.title.richText} />
          <PrismicRichText field={fields.text.richText} />
        </div>
        <PrismicLink className='link font-medium mt-auto text-lg text-indigo-800 group-hover:text-teal-600 dark:text-indigo-400 dark:hover:text-indigo-300 lg:text-xl' field={fields.button_link}>
          {fields.button_text ? fields.button_text : 'Read more'}
        </PrismicLink>
      </div>
    </li>
  )
}

export default Card
