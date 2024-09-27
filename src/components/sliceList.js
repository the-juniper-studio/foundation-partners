import React from 'react'
import { Slice } from 'gatsby'
import { SliceZone } from '@prismicio/react'

const components = {
  accordion: ({ slice }) => <Slice alias='accordion' slice={slice} />,
  banner_with_caption: ({ slice }) => <Slice alias='bannerWithCaption' slice={slice} />,
  blogposts: ({ slice }) => <Slice alias='blogposts' slice={slice} />,
  card_deck: ({ slice }) => <Slice alias='cardDeck' slice={slice} />,
  contact: ({ slice }) => <Slice alias='contact' slice={slice} />,
  counter: ({ slice }) => <Slice alias='counter' slice={slice} />,
  hero: ({ slice }) => <Slice alias='hero' slice={slice} />,
  image_gallery: ({ slice }) => <Slice alias='image' slice={slice} />,
  map: ({ slice }) => <Slice alias='map' slice={slice} />,
  posts: ({ slice }) => <Slice allowEmpty alias='posts' slice={slice} />,
  quote: ({ slice }) => <Slice alias='quote' slice={slice} />,
  text: ({ slice }) => <Slice alias='text' slice={slice} />,
  video: ({ slice }) => <Slice alias='video' slice={slice} />
}

const SliceList = ({ slices }) => {
  return <SliceZone slices={slices} components={components} defaultComponent={() => null} />
}

export default SliceList
