import React from 'react'

const htmlSerializer = (type, node, text, children, key) => {
  var linkid = text?.toLowerCase().replace(/[^A-Za-z0-9]/g, '')
  switch (type) {
    case 'heading1':
      return (
        <h1 key={key} id={linkid}>
          {children}
        </h1>
      )
    case 'heading2':
      return (
        <h2 key={key} id={linkid}>
          {children}
        </h2>
      )
    case 'heading3':
      return (
        <h3 key={key} id={linkid}>
          {children}
        </h3>
      )
    case 'heading4':
      return (
        <h4 key={key} id={linkid}>
          {children}
        </h4>
      )
    case 'heading5':
      return (
        <h5 key={key} id={linkid}>
          {children}
        </h5>
      )
    case 'heading6':
      return (
        <h6 key={key} id={linkid}>
          {children}
        </h6>
      )
    case 'embed':
      let lazyIframe = node.oembed.html?.replace('src=', 'loading="lazy" src=')
      return <div data-oembed={node.oembed.embed_url} data-oembed-type={node.oembed.type} data-oembed-provider={node.oembed.provider_name} dangerouslySetInnerHTML={{ __html: lazyIframe }} />
    default:
      return null
  }
}

export default htmlSerializer
