import React from 'react'
import EmblaCarousel from './embla/emblaCarousel'
import { GatsbyImage } from 'gatsby-plugin-image'
import { PrismicRichText } from '@prismicio/react'

const Logo = ({ partner }) => {
  return (
    <div className='transform translate ease duration-200 group-hover:scale-105'>
      <GatsbyImage image={partner.logo.gatsbyImageData} alt={partner.logo.alt || ''} placeholder='tracedSVG' loading='eager' />
    </div>
  )
}

const Partners = ({ slice }) => {
  return (
    <div className='bg-brandCream'>
      <div className={`component-${slice.slice_type} mx-auto py-8 lg:py-20 relative`}>
        {slice.primary.title && (
          <div className='prose prose-lg dark:prose-invert text-center max-w-none px-8'>
            <PrismicRichText field={slice.primary.title.richText} />
          </div>
        )}
        <div className='relative flex flex-row flex-wrap sm:flex-nowrap justify-center items-center mt-10 gap-3'>
          <EmblaCarousel autoplay={true} delayLength={3000} loop={true} slidesToScroll={2} controls={false}>
            {slice.items.map((partner, index) => {
              return (
                <div className='relative flex items-center p-3 lg:px-6 dark:invert dark:grayscale' key={`partner-${index}`}>
                  {partner.link?.url ? (
                    <a className='group' href={partner.link.url} rel='noopener noreferrer nofollow' target='_blank' aria-label='View company'>
                      <Logo partner={partner} />
                    </a>
                  ) : (
                    <Logo partner={partner} />
                  )}
                </div>
              )
            })}
          </EmblaCarousel>
          <div className='bg-gradient-to-r from-5% to-brandCream from-brandCream via-transparent absolute to-95% inset-0'></div>
        </div>
      </div>
    </div>
  )
}

export default Partners
