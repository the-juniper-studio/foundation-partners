import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Triangle from './svg/triangle'
import Circle from './svg/circle'
import { FadeInStagger } from './fadeIn'
import { FadeIn } from './fadeIn'
import EmblaCarousel from './embla/emblaCarousel'

const Quote = ({ slice }) => {
  var dark = slice.primary.dark_background === true
  var textStyle = 'text-brandCream'
  if (!dark) {
    textStyle = 'text-brandRust dark:text-brandCream'
  }
  if (slice.items < 1) return null

  return (
    <FadeInStagger duration='.5'>
      <section className={`component-quote overflow-hidden relative w-full ${dark && 'bg-brandPeach dark:bg-brandCream/10'}`}>
        <FadeIn x='0' y='50'>
          <Circle className='w-1/3 lg:w-1/4 text-brandPink/50 absolute top-96 sm:-top-40 bottom-0 md:-right-20' />
        </FadeIn>
        <FadeIn x='0' y='50'>
          <Triangle className='w-2/3 text-brandMustard dark:opacity-50 absolute md:top-0 -right-20 bottom-0 md:-right-40 top-40 rotate-180' />
        </FadeIn>
        <FadeIn x='0' y='50'>
          <Circle className='w-2/3 lg:w-1/2 text-brandPink dark:opacity-50 absolute -top-20 bottom-10 -left-20' />
        </FadeIn>
        <FadeIn x='0' y='50' className='mx-auto max-w-screen-lg px-12 py-12'>
          <EmblaCarousel arrows={true} autoPlay={false} delayLength={5000} loop={true} slidesToScroll={1} controls={true}>
            {slice.items.map((quote, index) => {
              return (
                <blockquote className='flex flex-col items-center justify-center min-w-full p-6 md:p-12 bg-brandRust' key={`item-${index}`} aria-selected={index === 0 ? 'true' : 'false'}>
                  <div className={`relative text-lg lg:text-4xl text-center mb-6 ${textStyle}`}>
                    <PrismicRichText field={quote.quote.richText} />
                  </div>
                  <footer className='flex flex-col text-center gap-6 items-center'>
                    <div className={`text-xl ${textStyle}`}>
                      <p className='font-semibold'>{quote.author}</p>
                      <p className=''>
                        {quote.role && <span>{quote.role}</span>}
                        {quote.company && quote.role && ','}
                        {quote.company && <span> {quote.company}</span>}
                      </p>
                    </div>
                    {quote.image.gatsbyImageData && (
                      <div className='inline-flex flex-shrink-0 mr-4 '>
                        <GatsbyImage className='z-10 h-12 lg:h-20 w-12 lg:w-20 overflow-hidden rounded-full' image={getImage(quote.image)} alt={quote.image.alt || ''} />
                      </div>
                    )}
                  </footer>
                </blockquote>
              )
            })}
          </EmblaCarousel>
        </FadeIn>
      </section>
    </FadeInStagger>
  )
}

export default Quote
