import React from 'react'
import { PrismicRichText, PrismicLink } from '@prismicio/react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { FadeIn } from './fadeIn'

const Card = ({ fields }) => {
  return (
    <li className={`component-card ${fields.button_link?.url != null && 'group'}`}>
      <FadeIn x='0' y='50' className='ease relative flex flex-grow transform flex-col p-2 h-full'>
        {fields.image.gatsbyImageData && (
          <div className='overflow-hidden'>
            <GatsbyImage className='overflow-hidden rounded-t-sm transition duration-300 ease-in-out group-hover:scale-105 ' image={getImage(fields.image)} alt={fields.image.alt || ''} />
          </div>
        )}
        <div className='m-4 flex flex-grow flex-col gap-4'>
          <div className='prose max-w-none lg:prose-lg dark:prose-invert'>
            <PrismicRichText field={fields.title.richText} />
            <PrismicRichText field={fields.text.richText} />
          </div>
          <PrismicLink className='button mt-auto text-center' field={fields.button_link}>
            {fields.button_text ? fields.button_text : 'Read more'}
          </PrismicLink>
        </div>
      </FadeIn>
    </li>
  )
}

export default Card
