import React from 'react'
import { PrismicRichText, PrismicLink } from '@prismicio/react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Card = ({ fields }) => {
  return (
    <li className={`component-card ease relative flex flex-grow transform flex-col p-2 ${fields.button_link?.url != null && ' group'}`}>
      {fields.image.gatsbyImageData && (
        <div className='overflow-hidden'>
          <GatsbyImage className='overflow-hidden rounded-t-sm transition duration-500 ease-in-out group-hover:scale-105 ' image={getImage(fields.image)} alt={fields.image.alt || ''} />
        </div>
      )}
      <div className='m-4 flex flex-grow flex-col gap-4'>
        <div className='prose max-w-none lg:prose-lg'>
          <PrismicRichText field={fields.title.richText} />
          <PrismicRichText field={fields.text.richText} />
        </div>
        <PrismicLink className='button mt-auto text-center' field={fields.button_link}>
          {fields.button_text ? fields.button_text : 'Read more'}
        </PrismicLink>
      </div>
    </li>
  )
}

export default Card
