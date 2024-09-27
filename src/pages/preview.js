import * as React from 'react'
import { withPrismicPreviewResolver } from 'gatsby-plugin-prismic-previews'

const PreviewPage = ({ isPreview }) => {
  return (
    <div className='relative z-10 flex h-screen flex-col justify-center text-center text-3xl font-black leading-tight md:text-6xl'>
      {isPreview === false ? "There's no preview here" : 'loading preview'}
    </div>
  )
}

export default withPrismicPreviewResolver(PreviewPage)
