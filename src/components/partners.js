import React from 'react'
import EmblaCarousel from './embla/emblaCarousel'
import { GatsbyImage } from 'gatsby-plugin-image'
import { PrismicRichText } from '@prismicio/react'
import { FadeIn, FadeInStagger } from './fadeIn'
import Circle from './svg/circle'

const Logo = ({ partner }) => (
  <div className='transform translate ease duration-200 group-hover:scale-105'>
    <GatsbyImage image={partner.logo.gatsbyImageData} alt={partner.logo.alt || ''} loading='eager' />
  </div>
)

const PartnerLink = ({ partner }) =>
  partner.link?.url ? (
    <a className='group' href={partner.link.url} rel='noopener noreferrer nofollow' target='_blank' aria-label='View company'>
      <Logo partner={partner} />
    </a>
  ) : (
    <Logo partner={partner} />
  )

const CarouselView = ({ slice }) => (
  <div className='relative flex flex-row flex-wrap sm:flex-nowrap justify-center items-center mt-10 gap-2'>
    <EmblaCarousel autoPlay={true} delayLength={6000} loop={true} slidesToScroll={3} controls={false}>
      {slice.items.map((partner, index) => (
        <div className='relative flex items-center p-3 lg:px-6 dark:invert dark:grayscale' key={`partner-${index}`}>
          <PartnerLink partner={partner} />
        </div>
      ))}
    </EmblaCarousel>
    <div className='bg-gradient-to-r from-[3]% to-brandCream from-brandCream dark:from-brandBlack dark:to-brandBlack dark:via-transparent via-transparent absolute to-[97]% inset-0'></div>
  </div>
)

const GridView = ({ slice }) => (
  <FadeInStagger duration='.2' className='relative overflow-hidden'>
    <FadeIn x='0' y='50' className='hidden sm:flex'>
      <Circle className='max-w-screen-xl absolute mx-auto left-0 right-0 text-brandMustard' />
    </FadeIn>
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-screen-xl mx-auto gap-y-10'>
      {slice.items.map((partner, index) => (
        <FadeIn x='0' y='50' className='relative flex items-center justify-center dark:invert dark:grayscale' key={`partner-${index}`}>
          <PartnerLink partner={partner} />
        </FadeIn>
      ))}
    </div>
  </FadeInStagger>
)

const Partners = ({ slice }) => {
  return (
    <div className='bg-brandCream dark:bg-brandBlack'>
      <div className={`component-${slice.slice_type} mx-auto py-8 lg:py-20 relative`}>
        {slice.primary.title && (
          <div className='prose prose-lg dark:prose-invert text-center max-w-none px-8'>
            <PrismicRichText field={slice.primary.title.richText} />
          </div>
        )}
        {slice.primary.carousel ? <CarouselView slice={slice} /> : <GridView slice={slice} />}
      </div>
    </div>
  )
}

export default Partners
