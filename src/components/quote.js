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
    <section className={`component-quote w-full py-10 px-3 md:px-6 ${dark && 'bg-brandPink'}`}>
      <blockquote className='relative mx-auto max-w-screen-xl md:flex md:flex-grow md:flex-col border-b-2 border-dotted border-brandCream'>
        <svg className={`h-10 w-10 lg:h-12 lg:w-12 -translate-y-2`} fill='#dc6747' viewBox='0 0 32 32'>
          <path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z'></path>
        </svg>
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
            <p className='font-medium'>{slice.primary.author}</p>
            <p className='text-sm'>
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
