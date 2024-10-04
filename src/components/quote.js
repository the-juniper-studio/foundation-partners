import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Triangle from './svg/triangle'
import Circle from './svg/circle'
import { FadeInStagger } from './fadeIn'
import { FadeIn } from './fadeIn'

const Quote = ({ slice }) => {
  var dark = slice.primary.dark_background === true
  var text = 'text-brandCream'
  if (!dark) {
    text = 'text-brandRust dark:text-brandCream'
  }

  return (
    <FadeInStagger duration='.5'>
      <section className={`component-quote overflow-hidden relative w-full ${dark && 'bg-brandPeach'}`}>
        <FadeIn x='0' y='50'>
          <Circle className='w-1/3 lg:w-1/4 text-brandPink/50 absolute -top-40 -right-20' />
        </FadeIn>
        <FadeIn x='0' y='50'>
          <Triangle className='w-2/3  text-brandMustard absolute top-0 bottom-0 -right-40 rotate-180' />
        </FadeIn>
        <FadeIn x='0' y='50'>
          <Circle className='w-2/3 lg:w-1/2 text-brandPink absolute -top-20 bottom-10 -left-20' />
        </FadeIn>
        <FadeIn x='0' y='50' className='mx-auto max-w-screen-lg px-12 py-12'>
          <blockquote className={`relative md:flex gap-6 md:flex-grow md:flex-col p-6 md:p-12 ${dark && 'bg-brandRust my-3 md:my-6'}`}>
            <div className={`relative text-3xl lg:text-4xl md:flex-grow text-center ${text}`}>
              <PrismicRichText field={slice.primary.quote.richText} />
            </div>
            <footer className='flex flex-col text-center gap-3 items-center'>
              <div className={`text-xl ${text}`}>
                <p className='font-semibold'>{slice.primary.author}</p>
                <p className=''>
                  {slice.primary.role && <span>{slice.primary.role}</span>}
                  {slice.primary.company && slice.primary.role && ','}
                  {slice.primary.company && <span> {slice.primary.company}</span>}
                </p>
              </div>
              {slice.primary.image.gatsbyImageData && (
                <div className='inline-flex flex-shrink-0 mr-4 '>
                  <GatsbyImage className='z-10 h-12 lg:h-20 w-12 lg:w-20 overflow-hidden rounded-full' image={getImage(slice.primary.image)} alt={slice.primary.image.alt || ''} />
                </div>
              )}
            </footer>
            <Triangle className='w-20 text-white absolute -top-10' />
          </blockquote>
        </FadeIn>
      </section>
    </FadeInStagger>
  )
}

export default Quote
