import React from 'react'
import { PrismicRichText } from '@prismicio/react'

// Components
import Card from './card'

const CardDeck = ({ slice }) => {
  var grid = 'md:grid-cols-2 max-w-screen-lg mx-auto'
  if (slice.items.length === 3) {
    grid = 'md:grid-cols-3 max-w-screen-xl mx-auto'
  }
  if (slice.items.length === 4) {
    grid = 'md:grid-cols-3 max-w-screen-xl mx-auto'
  }
  return (
    <section className='component-card_deck mx-auto w-full max-w-screen-xl px-3 md:px-6 py-10'>
      {slice.primary.title.text && (
        <div className='prose prose-lg mb-10 max-w-none text-center dark:prose-invert lg:prose-lg'>
          <PrismicRichText field={slice.primary.title.richText} />
        </div>
      )}
      <ul className={`grid grid-cols-1 gap-4 ${grid}`}>
        {slice.items.map((card, index) => {
          return <Card fields={card} key={`card-${index}`} />
        })}
      </ul>
    </section>
  )
}

export default CardDeck
