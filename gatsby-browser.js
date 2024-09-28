import React from 'react'
import { Link } from 'gatsby'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreviewProvider } from 'gatsby-plugin-prismic-previews'

// Utils
import htmlSerializer from './src/utils/htmlSerializer'
import { repositoryConfigs } from './src/utils/prismicPreviews'

// CSS
import '@fontsource/poppins/100.css'
import '@fontsource/poppins/200.css'
import '@fontsource/poppins/300.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/800.css'
import '@fontsource/poppins/900.css'
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
