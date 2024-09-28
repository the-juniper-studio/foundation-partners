import React from 'react'
import { PrismicRichText, PrismicLink } from '@prismicio/react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BannerWithCaption = ({ slice }) => {
  return (
    <section className='component-banner_with_caption relative mx-auto my-10 w-full max-w-screen-xl px-3 md:px-6 md:grid md:grid-cols-2'>
      <div className={`${slice.primary.image_position === true ? 'md:order-last md:-ml-10' : 'md:-mr-10'}`}>
        <GatsbyImage className='h-full w-full rounded' image={getImage(slice.primary.image)} alt={slice.primary.image.alt || ''} />
      </div>
      <div className='relative z-10 flex items-center md:my-10'>
        <div
          className={`${
            slice.primary.image_position === true ? 'md:ml-auto md:mr-0' : 'md:ml-0 md:mr-auto'
          } prose flex h-full w-full flex-col items-start justify-center space-y-4 dark:prose-invert lg:prose-lg`}>
          {slice.primary.title.text && <PrismicRichText field={slice.primary.title.richText} />}
          <PrismicRichText field={slice.primary.text.richText} />

          {slice.primary.button_link && (
            <div className='not-prose pt-6'>
              <PrismicLink field={slice.primary.button_link} className='button'>
                {slice.primary.button_text}
              </PrismicLink>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default BannerWithCaption
