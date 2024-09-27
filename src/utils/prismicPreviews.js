import React from 'react'
import { linkResolver } from './linkResolver'

export const repositoryConfigs = [
  {
    repositoryName: process.env.GATSBY_PRISMIC_MAIN_REPOSITORY_NAME,
    linkResolver,
    componentResolver: {
      blogpost: React.lazy(() => import('../templates/blogpost')),
      page: React.lazy(() => import('../templates/page'))
    }
  }
]
