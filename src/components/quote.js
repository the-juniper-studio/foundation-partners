import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Quote = ({ slice }) => {
  var dark = slice.primary.dark_background === true
  var text = 'text-brandBlack'
  if (!dark) {
    text = 'text-brandRust dark:text-brandCream'
  }

  return (
    <section className={`component-quote w-full ${dark && 'bg-brandPink'}`}>
      <blockquote className='relative mx-auto max-w-screen-xl md:flex md:flex-grow md:flex-col border-b-2 border-dotted border-brandCream px-3 md:px-6'>
        <div className={`relative text-3xl lg:text-4xl md:flex-grow ${text}`}>
          <PrismicRichText field={slice.primary.quote.richText} />
        </div>
        <footer className='my-8 flex items-center'>
          {slice.primary.image.gatsbyImageData && (
            <div className='inline-flex flex-shrink-0 mr-4 '>
              <GatsbyImage className='z-10 h-24 w-24 overflow-hidden rounded-full border-2 border-brandCream bg-brandCream' image={getImage(slice.primary.image)} alt={slice.primary.image.alt || ''} />
            </div>
          )}

          <div className={`${text}`}>
            <p className=''>{slice.primary.author}</p>
            <p className=''>
              {slice.primary.role && <span>{slice.primary.role}</span>}
              {slice.primary.company && slice.primary.role && ','}
              {slice.primary.company && <span> {slice.primary.company}</span>}
            </p>
          </div>
        </footer>
      </blockquote>
    </section>
  )
}

export default Quote
