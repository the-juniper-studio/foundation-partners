import React from 'react'
import { PrismicRichText } from '@prismicio/react'

// Components
import Card from './card'
import { FadeInStagger } from './fadeIn'

const CardDeck = ({ slice }) => {
  var grid = 'md:grid-cols-2 max-w-screen-lg mx-auto'
  if (slice.items.length === 3) {
    grid = 'md:grid-cols-3 max-w-screen-xl mx-auto'
  }
  if (slice.items.length === 4) {
    grid = 'md:grid-cols-3 max-w-screen-xl mx-auto'
  }
  return (
    <section className='component-card_deck bg-brandBlack'>
      <div className='mx-auto w-full max-w-screen-xl px-3 md:px-6 py-10'>
        {slice.primary.title.text && (
          <div className='prose mb-12 max-w-screen-md mx-auto text-center prose-invert lg:prose-lg'>
            <PrismicRichText field={slice.primary.title.richText} />
          </div>
        )}
        <FadeInStagger duration='.5'>
          <ul className={`grid grid-cols-1 gap-6 ${grid}`}>
            {slice.items.map((card, index) => {
              return <Card fields={card} key={`card-${index}`} />
            })}
          </ul>
        </FadeInStagger>
      </div>
    </section>
  )
}

export default CardDeck
