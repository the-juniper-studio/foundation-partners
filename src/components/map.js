import React from 'react'

const Map = ({ slice }) => {
  return (
    <section className='component-map mx-auto w-full pt-10 relative h-80 lg:h-96'>
      <iframe
        className='absolute inset-0 rounded-sm'
        width='100%'
        height='100%'
        title='Google Map of Venue'
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GATSBY_GOOGLE_API_KEY}&q=${slice.primary.map_url.latitude},${slice.primary.map_url.longitude}`}
        allowFullScreen
      />
    </section>
  )
}

export default Map
