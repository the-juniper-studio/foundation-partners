import React from 'react'
import { PrismicLink, PrismicRichText } from '@prismicio/react'

const Text = ({ slice }) => {
  return (
    <section className='component-text mx-auto w-full max-w-screen-xl px-3 md:px-6 py-10'>
      <div className='prose dark:prose-invert xl:prose-lg'>
        <PrismicRichText field={slice.primary.text.richText} />
      </div>
      {slice.primary.button_text && (
        <div className='mt-6 text-center'>
          <PrismicLink className='button' field={slice.primary.button_link}>
            {slice.primary.button_text}
          </PrismicLink>
        </div>
      )}
    </section>
  )
}

export default Text
