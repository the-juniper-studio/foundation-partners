import React from 'react'
import { PrismicLink, PrismicRichText } from '@prismicio/react'
import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image'

const PageHeader = ({ authorData, type, pageData, publishDate }) => {
  let images = pageData.page_image?.gatsbyImageData
  if (pageData.page_image.thumbnails.mobile.gatsbyImageData) {
    images = withArtDirection(getImage(pageData.page_image.gatsbyImageData), [
      {
        media: '(max-width: 768px)',
        image: getImage(pageData.page_image.thumbnails.mobile.gatsbyImageData)
      }
    ])
  }

  const article = type === 'blogpost'
  const timeToRead = type === 'blogpost' && publishDate ? Math.ceil(pageData.page_text?.text.split(' ').length / 200) : null

  return (
    <div className='relative grid min-h-[15vh] grid-cols-1 grid-rows-1 overflow-hidden bg-brandCream dark:bg-slate-900'>
      {images && (
        <div className='absolute inset-0'>
          <GatsbyImage className='absolute inset-0 h-full bg-cover' layout='fullWidth' loading='eager' image={images} alt={pageData.page_image.alt || ''} />
          <div className='absolute inset-0 z-0 bg-gradient-to-tr from-white to-transparent opacity-90 dark:from-slate-900' />
        </div>
      )}
      <div className='hero relative col-span-full row-span-full mx-auto flex flex-col items-center justify-center gap-6 px-10 py-32 text-center md:max-w-screen-md md:text-2xl'>
        <PrismicRichText field={pageData.page_title.richText} />
        {!article && (
          <>
            <PrismicRichText field={pageData.page_text.richText} />
            <PrismicLink className='button' field={pageData.page_button_link}>
              {pageData.page_button_text}
            </PrismicLink>
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
