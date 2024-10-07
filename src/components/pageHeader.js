import React from 'react'
import { PrismicLink, PrismicRichText } from '@prismicio/react'
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'

const PageHeader = ({ authorData, type, pageData, publishDate }) => {
  let images = pageData.page_image?.gatsbyImageData

  const article = type === 'blogpost'
  const timeToRead = type === 'blogpost' && publishDate ? Math.ceil(pageData.page_text?.text.split(' ').length / 200) : null

  return (
    <div className='hero relative grid min-h-[15vh] grid-cols-1 grid-rows-1 overflow-hidden bg-brandCream dark:bg-brandBlack'>
      <div className={`h-full px-3 md:p-6 w-full max-w-screen-xl mx-auto ${images ? 'grid md:grid-cols-2 md:gap-4 inverted md:text-brandCream ' : 'text-brandBlack dark:text-white'}`}>
        <div className={`z-10 flex flex-col justify-center py-12 ${images ? 'pb-32 md:pb-40 lg:pb-48' : 'items-center sm:items-start'} sm:text-left space-y-8`}>
          <PrismicRichText field={pageData.page_title.richText} />
          {!article && (
            <>
              {pageData.page_text.text && (
                <div className='prose prose-xl min-w-full'>
                  <PrismicRichText field={pageData.page_text.richText} />
                </div>
              )}
              {pageData.page_button_link && (
                <div>
                  <PrismicLink className='button' field={pageData.page_button_link}>
                    {pageData.page_button_text}
                  </PrismicLink>
                </div>
              )}
            </>
          )}

          {authorData && (
            <div className='text-base'>
              {authorData.image.gatsbyImageData && (
                <GatsbyImage
                  className='m-2 mx-auto h-16 w-16 rounded-full border-2 border-brandMustard bg-brandMustard shadow lg:h-20 lg:w-20'
                  image={getImage(authorData.image)}
                  alt={authorData.image.alt || ''}
                />
              )}
              <p className='font-semibold'>
                {authorData.name}
                {authorData.position && (
                  <>
                    <span aria-hidden='true'> &middot; </span>
                    <span> {authorData.position}</span>
                  </>
                )}
              </p>
              {publishDate && (
                <p>
                  <span>{publishDate}</span>
                  {timeToRead && (
                    <>
                      <span aria-hidden='true'> &middot; </span>
                      <span>{timeToRead} min read</span>
                    </>
                  )}
                </p>
              )}
            </div>
          )}
        </div>
        {images && (
          <div className='flex-1 z-0 images'>
            <div className='absolute right-0 top-0 bottom-0 md:w-1/2 '>
              <GatsbyImage image={pageData.page_image.gatsbyImageData} className='mask relative overflow-hidden sm:object-fill h-full w-full' alt={pageData.page_image.alt} loading='eager' />
            </div>
            <div className='absolute inset-0'>
              <StaticImage className='relative h-full xl:h-auto xl:w-full' src='../images/hero-svg.png' alt='Hero overlay' />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PageHeader
