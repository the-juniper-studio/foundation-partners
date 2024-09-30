import React from 'react'
import { PrismicRichText } from '@prismicio/react'

// SVGs
import ChevronRight from './svg/chevronRight'

const Accordion = ({ slice }) => {
  return (
    <section className='component-accordion mx-auto w-full max-w-screen-lg px-3 md:px-6 py-10'>
      <div className='prose dark:prose-invert lg:prose-lg'>
        <PrismicRichText field={slice.primary.title.richText} />
        <PrismicRichText field={slice.primary.text.richText} />
      </div>
      <div className='mt-6 flex flex-col gap-1'>
        {slice.items.map((accordion, index) => {
          return (
            <details className='transform bg-brandCream transition-all dark:border dark:border-neutral-700 dark:bg-neutral-700' key={`accordion-${index}`}>
              <summary className='m-0 flex w-full cursor-pointer font-medium justify-between bg-brandCream p-4 text-left text-lg hover:text-brandRust dark:bg-neutral-700 dark:text-indigo-300 dark:hover:text-indigo-400 lg:text-xl'>
                <PrismicRichText field={accordion.question.richText} />
                <div className='indicator flex items-center'>
                  <ChevronRight className='w-6' />
                </div>
              </summary>
              <div className='prose min-w-full border-t border-brandBlack p-4 pr-8 transition-all dark:prose-invert lg:prose-lg dark:border-neutral-700'>
                <PrismicRichText field={accordion.answer.richText} />
              </div>
            </details>
          )
        })}
      </div>
    </section>
  )
}

export default Accordion
