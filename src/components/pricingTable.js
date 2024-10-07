import React from 'react'
import { PrismicRichText, PrismicLink } from '@prismicio/react'

// Components
import { FadeIn, FadeInStagger } from './fadeIn'

const PricingTable = ({ slice }) => {
  return (
    <section className={`component-pricingtable pt-10 relative`}>
      <div className='text-center w-full px-6 text-brandRust font-semibold text-xl'>
        <PrismicRichText field={slice.primary.eyebrow_headline.richText} />
      </div>
      <div className='px-4 my-5 text-center prose dark:prose-invert prose-lg lg:prose-xl max-w-screen-xl mx-auto'>
        <PrismicRichText field={slice.primary.title.richText} />
        <PrismicRichText field={slice.primary.description.richText} />
      </div>
      <FadeInStagger duration='.5'>
        <ul className='md:grid grid-cols-3 gap-6 py-10 p-3 md:px-6 mt-3 space-y-3 md:space-y-0 max-w-screen-2xl mx-auto'>
          {slice.items.map((product, index) => {
            return (
              <li key={`product-${index}`}>
                <FadeIn x='0' y='50' className='pricing-card flex flex-grow flex-col gap-6 md:gap-12 ease relative transform p-6 h-full bg-brandPeach dark:bg-white/10'>
                  <div className='prose max-w-none lg:prose-lg dark:prose-invert'>
                    {product.plan_title && <h2 className=''>{product.plan_title.text}</h2>}
                    {product.price_option && <p className='mt-4 font-semibold border-b-2 pb-6 border-brandMustard'>{product.price_option.text}</p>}
                    <PrismicRichText field={product.features.richText} />
                  </div>
                  {product.call_to_action && (
                    <PrismicLink className='button button-brand mt-auto text-center link' field={product.call_to_action}>
                      {product.call_to_action_text.text ? product.call_to_action_text.text : 'Read more'}
                    </PrismicLink>
                  )}
                  <div className='prose dark:prose-invert bg-white/20 p-3 lg:p-6'>
                    <PrismicRichText field={product.description.richText} />
                  </div>
                </FadeIn>
              </li>
            )
          })}
        </ul>
      </FadeInStagger>
    </section>
  )
}

export default PricingTable
