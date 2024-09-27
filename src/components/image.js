import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

// Components
import EmblaCarousel from './embla/emblaCarousel'

const Image = ({ slice }) => {
  return (
    <section className='component-image_gallery mx-auto w-full max-w-screen-xl px-3 md:px-6 py-10'>
      {slice.primary.gallery_name.text && (
        <div className='prose prose-xl mb-10 max-w-none text-center dark:prose-invert'>
          <PrismicRichText field={slice.primary.gallery_name.richText} />
        </div>
      )}
      <div className=''>
        {slice.items.length > 1 ? (
          <EmblaCarousel autoPlay={slice.primary.autoplay} arrows={true} delayLength={5000} thumbs={slice.primary.thumbnails} loop={true} slice={slice}>
            {slice.items.map((item, index) => {
              return (
                <div className={`relative min-w-full rounded-sm bg-white ${'item' + (index === 0 ? ' active' : '')}`} key={`item-${index}`} aria-selected={index === 0 ? 'true' : 'false'}>
                  <GatsbyImage image={getImage(item.image)} alt={item.image.alt || ''} />
                  {item.text.richText && (
                    <div className='caption relative z-10 w-full px-6 py-3 text-center'>
                      <PrismicRichText field={item.text.richText} />
                    </div>
                  )}
                </div>
              )
            })}
          </EmblaCarousel>
        ) : (
          <>
            <GatsbyImage image={getImage(slice.items[0].image)} alt={slice.items[0].image.alt || ''} />
            {slice.items[0].image.text && (
              <div className='caption relative z-10 w-full px-6 py-3 text-center'>
                <PrismicRichText field={slice.items[0].image.text.richText} />
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}

export default Image
