import React from 'react'
import { PrismicRichText, PrismicLink } from '@prismicio/react'

// Components
import Card from './card'
import { FadeInStagger } from './fadeIn'

const CardDeck = ({ slice }) => {
  var grid = 'mx-auto'
  if (slice.items.length % 3 == 0) {
    grid = 'md:grid-cols-3 max-w-screen-2xl mx-auto'
  } else {
    grid = 'md:grid-cols-2 max-w-screen-xl mx-auto'
  }

  return (
    <section className='component-card_deck bg-brandBlack'>
      <div className='mx-auto w-full py-10'>
        {slice.primary.title.text && (
          <div className='prose mb-12 max-w-screen-md mx-auto text-center prose-invert lg:prose-lg px-3 md:px-6'>
            <PrismicRichText field={slice.primary.title.richText} />
          </div>
        )}

        <FadeInStagger duration='.5'>
          <ul className={`grid grid-cols-1 gap-6 px-3 md:px-6 ${grid}`}>
            {slice.items.map((card, index) => {
              return <Card fields={card} key={`card-${index}`} />
            })}
          </ul>
        </FadeInStagger>
        {slice.primary.button_link && (
          <div className='px-3 md:px-6 mt-12 text-center'>
            <PrismicLink className='button button-brand text-center' field={slice.primary.button_link}>
              {slice.primary.button_text ? slice.primary.button_text : 'Read more'}
            </PrismicLink>
          </div>
        )}
      </div>
    </section>
  )
}

export default CardDeck
