import { graphql } from 'gatsby'

export const footerQuery = graphql`
  fragment PrismicFooterFragment on PrismicNavigation {
    _previewable
    data {
      body {
        ... on PrismicNavigationDataBodyFooterLinkList {
          id
          items {
            link_label
            link {
              isBroken
              lang
              link_type
              tags
              target
              type
              uid
              url
              id
            }
          }
          primary {
            title
          }
        }
      }
    }
    id
    lang
    prismicId
  }
`
