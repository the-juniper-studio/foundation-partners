import React from 'react'
import { PrismicLink, PrismicRichText } from '@prismicio/react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

import Hero from './svg/hero'

const PageHeader = ({ authorData, type, pageData, publishDate, uid }) => {
  var homepage = uid === 'index'

  const article = type === 'blogpost'
  const timeToRead = type === 'blogpost' && publishDate ? Math.ceil(pageData.page_text?.text.split(' ').length / 200) : null

  return (
    <div className='hero relative grid min-h-[15vh] grid-cols-1 grid-rows-1 overflow-hidden bg-brandCream dark:bg-brandBlack'>
      <div className={`h-full px-3 md:p-6 w-full max-w-screen-xl mx-auto ${homepage ? 'grid lg:grid-cols-2 lg:gap-4 inverted text-brandCream' : 'text-brandBlack dark:text-white'}`}>
        <div className={`z-10 flex flex-col justify-center pt-12 ${homepage ? 'pb-32 md:pb-40 lg:pb-48' : 'items-center sm:items-start'} sm:text-left space-y-8`}>
          <PrismicRichText field={pageData.page_title.richText} />
          {!article && (
            <>
              {pageData.page_text.text && (
                <div className={`prose prose-xl dark:prose-invert ${homepage ? 'prose-invert max-w-screen-sm ' : 'min-w-full'}`}>
                  <PrismicRichText field={pageData.page_text.richText} />
                </div>
              )}

              {homepage ? (
                <div className='flex gap-4 items-center'>
                  <a href='https://calendar.app.google/9XzG5qUunmKMgrPT9' className='button text-brandMustard' target='_blank' rel='noopener noreferrer'>
                    Book a Call
                  </a>

                  <Link to='/services' className='text-white hover:text-opacity-80 flex items-center transition-all group font-bold'>
                    See our Services <span className='ml-2 transition-transform duration-300 group-hover:translate-x-1'>→</span>
                  </Link>
                </div>
              ) : (
                pageData.page_button_link && (
                  <div>
                    <PrismicLink className='button' field={pageData.page_button_link}>
                      {pageData.page_button_text}
                    </PrismicLink>
                  </div>
                )
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
        {homepage && (
          <div className='flex-1 z-0 images'>
            <div className='absolute inset-0 w-full bg-brandMustard/80'></div>
            <Hero className='absolute inset-y-0 -left-1/4 -right-1/2 h-full sm:inset-0 lg:right-0 xl:w-full xl:left-0 xl:bottom-0 xl:right-0 xl:top-auto xl:h-auto' />
          </div>
        )}
      </div>
    </div>
  )
}

export default PageHeader
