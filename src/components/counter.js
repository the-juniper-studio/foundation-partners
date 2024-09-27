import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import CountUp from 'react-countup'

const Counter = ({ slice }) => {
  return (
    <section className='component-counter mx-auto w-full max-w-screen-xl px-3 md:px-6 py-10'>
      <div className='prose prose-lg max-w-none dark:prose-invert lg:prose-lg'>
        <PrismicRichText field={slice.primary.title.richText} />
        <PrismicRichText field={slice.primary.text.richText} />
      </div>

      <div className='flex flex-col justify-evenly py-2 md:flex-row'>
        {slice.items.map((counter, index) => {
          return (
            <div key={`counter-${index}`} className={`counter-${index} flex flex-col p-8 text-center leading-none md:p-16`}>
              <CountUp
                className='number text-4xl font-bold md:text-6xl'
                delay={slice.primary.delay || 0}
                enableScrollSpy={true}
                end={counter.final_number}
                suffix={counter.suffix || ''}
                prefix={counter.prefix || ''}
                separator=','
                decimal='.'
                duration={slice.primary.duration || 3}
              />
              <div>
                <PrismicRichText field={counter.title.richText} />
                <PrismicRichText field={counter.text.richText} />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Counter
