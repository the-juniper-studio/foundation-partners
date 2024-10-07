import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

export const PrevButton = ({ enabled, onClick }) => (
  <button
    className='embla-button bg-brandBlack/20 hover:text-brandRust z-10 flex h-10 w-10 items-center justify-center rounded-full text-brandCream hover:bg-brandCream focus:outline-none'
    onClick={onClick}
    disabled={!enabled}>
    <div className='sr-only'>Previous</div>
    <svg className='h-5' fill='currentColor' viewBox='137.718 -1.001 366.563 644'>
      <path d='M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z' />
    </svg>
  </button>
)

export const NextButton = ({ enabled, onClick }) => (
  <button
    className='embla-button bg-brandBlack/20 hover:text-brandRust z-10 flex h-10 w-10 items-center justify-center rounded-full text-brandCream hover:bg-brandCream focus:outline-none'
    onClick={onClick}
    disabled={!enabled}>
    <div className='sr-only'>Next</div>
    <svg className='h-5' fill='currentColor' viewBox='0 0 238.003 238.003'>
      <path d='M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z' />
    </svg>
  </button>
)

export const EmblaDots = ({ selected, onClick }) => (
  <button
    className={`m-1 h-6 w-6 rounded-full hover:bg-brandRust hover:border-brandRust border outline-none border-transparent embla__dot${selected ? ' is-selected bg-brandCream border-brandCream' : ' border-brandMustard bg-brandPeach'}`}
    onClick={onClick}>
    <span className='sr-only'>dot button</span>
  </button>
)

export const EmblaThumbs = ({ selected, onClick, image, video }) => {
  if (!image && !video) return null
  return (
    <button className={`${selected ? 'border-brandMustard block border-2 ' : ''}m-0 aspect-video bg-brandCream p-0.5`} onClick={onClick} aria-label={image.alt || 'missing alt'}>
      {video ? <img src={video.thumbnail_url} alt='' /> : <GatsbyImage className='h-full w-full object-cover' image={image.gatsbyImageData} alt={image.alt || ''} />}
    </button>
  )
}

export const EmblaTabs = ({ selected, onClick, text }) => {
  if (!text) return null
  return (
    <button
      onClick={onClick}
      className={`${selected ? 'border-brandMustard text-brandMustard' : 'hover:text-brandRust border-transparent text-neutral-500 hover:border-brandBlack dark:text-neutral-100'}
            border-b-2 px-1 py-4 text-center lg:w-1/4 lg:text-lg xl:text-xl`}
      aria-current={selected ? 'page' : undefined}>
      {text}
    </button>
  )
}
