import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const Video = ({ slice }) => {
  if (slice.video_url === null && slice.primary.video_url === null) return null
  let embed = slice.primary?.video.embed_url || slice.video_url.embed_url
  let title = slice.primary?.video.title || slice.video_url.title

  if (embed?.includes('watch')) {
    embed = embed.split('v=')[1]
    var ampersandPosition = embed.indexOf('&')
    if (ampersandPosition !== -1) {
      embed = embed.substring(0, ampersandPosition)
    }
  }
  if (embed?.includes('shorts')) {
    embed = embed.split('shorts/')[1]
  }
  if (embed?.includes('youtu.be/')) {
    embed = embed.split('youtu.be/')[1]
  }
  return (
    <section className={`${slice.primary ? 'component-video mx-auto w-full max-w-screen-lg px-3 md:px-6 py-10' : ''}`}>
      <div className='prose prose-xl mx-auto mb-8 text-center dark:prose-invert'>
        <PrismicRichText field={slice.primary?.title.richText} />
      </div>
      <LiteYouTubeEmbed id={embed} title={title} />
    </section>
  )
}

export default Video
