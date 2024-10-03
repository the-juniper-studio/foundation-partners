import React from 'react'
import { PrismicLink, PrismicRichText } from '@prismicio/react'
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'

const PageHeader = ({ authorData, type, pageData, publishDate }) => {
  let images = pageData.page_image?.gatsbyImageData

  const article = type === 'blogpost'
  const timeToRead = type === 'blogpost' && publishDate ? Math.ceil(pageData.page_text?.text.split(' ').length / 200) : null

  return (
    <div className='relative grid min-h-[15vh] grid-cols-1 grid-rows-1 overflow-hidden bg-brandCream dark:bg-brandBlack'>
      {images && (
        <div className='relative'>
          <GatsbyImage className='absolute right-0 top-0 bottom-0 w-2/3' layout='fullWidth' loading='eager' image={images} alt={pageData.page_image.alt || ''} />
          <StaticImage className='relative mt-1 ml-1 w-full' src='../images/hero-svg.png' alt='Hero overlay' />
        </div>
      )}
      <div
        className={`hero col-span-full w-full row-span-full mx-auto flex flex-col justify-center gap-6 px-3 md:px-6 pb-6 lg:py-12 md:max-w-screen-xl md:text-2xl ${images ? 'pt-32 lg:pt-48 md:absolute inverted md:w-1/2 relative' : 'relative'}`}>
        <PrismicRichText field={pageData.page_title.richText} />
        {!article && (
          <>
            <PrismicRichText field={pageData.page_text.richText} />
            <div>
              <PrismicLink className='button' field={pageData.page_button_link}>
                {pageData.page_button_text}
              </PrismicLink>
            </div>
          </>
        )}

        {authorData && (
          <div className='text-base'>
            {authorData.image.gatsbyImageData && (
              <GatsbyImage className='m-2 mx-auto h-16 w-16 rounded-lg border-2 border-white bg-white shadow lg:h-20 lg:w-20' image={getImage(authorData.image)} alt={authorData.image.alt || ''} />
            )}
            <p className='font-medium'>
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
    </div>
  )
}

export default PageHeader
