import React from 'react'
import { PrismicLink, PrismicRichText } from '@prismicio/react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Hero = ({ slice }) => {
  return (
    <section className='component-hero grid grid-cols-1 grid-rows-1 max-h-[50vh] bg-brandRust'>
      {slice.primary.image.GatsbyImage && (
        <div className='relative col-span-full row-span-full'>
          <GatsbyImage className='opacity-20 h-full w-full' image={getImage(slice.primary.image) || null} alt={slice.primary.image.alt || ''} />
        </div>
      )}
      <div className='hero col-span-full row-span-full flex w-full flex-col items-center text-center justify-center gap-6 px-3 md:px-6 md:mx-auto md:max-w-screen-xl py-20'>
        <div className='prose prose-xl relative md:max-w-screen-md'>
          {slice.primary.title.text && <PrismicRichText field={slice.primary.title.richText} />}
          <PrismicRichText field={slice.primary.text.richText} />
        </div>
        <PrismicLink className='button text-brandMustard' field={slice.primary.button_link}>
          {slice.primary.button_text}
        </PrismicLink>
      </div>
    </section>
  )
}

export default Hero
