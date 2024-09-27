import React from 'react'
import { Link } from 'gatsby'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreviewProvider } from 'gatsby-plugin-prismic-previews'

// Utils
import htmlSerializer from './src/utils/htmlSerializer'
import { repositoryConfigs } from './src/utils/prismicPreviews'

// CSS
import '@fontsource/poppins'
import './src/styles/default.css'

export const wrapRootElement = ({ element }) => (
  <PrismicProvider
    externalLinkComponent={(props) => {
      if (!props.href) return null
      const childProps = { ...props }
      delete childProps.activeClassName
      childProps.target = props.target || '_blank'
      childProps.rel = props.rel || 'noopener noreferrer'
      return (
        <a data-location='external' {...childProps}>
          {props.children}
        </a>
      )
    }}
    internalLinkComponent={({ href, ...props }) => <Link to={href} {...props} />}
    richTextComponents={htmlSerializer}>
    <PrismicPreviewProvider repositoryConfigs={repositoryConfigs}>{element}</PrismicPreviewProvider>
  </PrismicProvider>
)
