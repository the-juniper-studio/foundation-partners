import React from 'react'
import { PrismicRichText, PrismicLink } from '@prismicio/react'

// Components
import { FadeIn, FadeInStagger } from './fadeIn'
import Triangle from './svg/triangle'
import Circle from './svg/circle'

const PricingTable = ({ slice }) => {
  return (
    <section className='component-pricingtable pt-10 relative overflow-hidden'>
      <div className='px-4 my-5 prose dark:prose-invert prose-lg lg:prose-xl max-w-screen-xl mx-auto z-10 relative'>
        <PrismicRichText field={slice.primary.title.richText} />
        <PrismicRichText field={slice.primary.description.richText} />
      </div>
      <FadeIn x='0' y='50'>
        <Circle className='w-1/3 lg:w-1/4 text-brandPink absolute z-0 top-0 bottom-0 md:-right-20' />
      </FadeIn>
      <FadeIn x='0' y='50'>
        <Triangle className='w-2/3 text-brandMustard/80 dark:opacity-50 absolute z-0 md:top-0 -right-30 bottom-0 md:-right-40 top-40 rotate-180' />
      </FadeIn>
      <FadeIn x='0' y='50'>
        <Circle className='w-2/3 lg:w-1/2 text-brandPink/50 dark:opacity-50 absolute z-0 -top-20 bottom-10 -left-20' />
      </FadeIn>
      <FadeInStagger duration='.5' className='lg:grid grid-cols-3 gap-6 py-10 p-3 md:px-6 mt-3 space-y-3 lg:space-y-0 max-w-screen-2xl mx-auto'>
        {slice.items.map((product, index) => {
          return (
            <FadeIn key={`product-${index}`} x='0' y='50' className='pricing-card grid grid-rows-2 ease relative transform p-6 h-full bg-brandPeach dark:bg-white/10'>
              <div className='h-auto border-b-2 border-brandMustard prose max-w-none lg:prose-lg dark:prose-invert'>
                {product.plan_title && <h2 className=''>{product.plan_title.text}</h2>}
                {product.price_option && <p className='mt-4 font-semibold pb-6 '>{product.price_option.text}</p>}
                {product.description && (
                  <div className='mt-auto prose max-w-none dark:prose-invert'>
                    <PrismicRichText field={product.description.richText} />
                  </div>
                )}
              </div>
              <div className='prose max-w-none prose-lg lg:prose-xl dark:prose-invert pt-3'>
                <PrismicRichText field={product.features.richText} />
              </div>
              {product.call_to_action && (
                <PrismicLink className='button button-brand mt-auto text-center link' field={product.call_to_action}>
                  {product.call_to_action_text.text ? product.call_to_action_text.text : 'Read more'}
                </PrismicLink>
              )}
            </FadeIn>
          )
        })}
      </FadeInStagger>
    </section>
  )
}

export default PricingTable
