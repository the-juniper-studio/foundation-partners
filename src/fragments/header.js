import { graphql } from 'gatsby'

export const headerQuery = graphql`
  fragment PrismicHeaderFragment on PrismicNavigation {
    _previewable
    data {
      nav {
        ... on PrismicNavigationDataNavNavItem {
          id
          primary {
            label
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
          items {
            subnav_link {
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
            subnav_link_label
          }
        }
      }
    }
    id
    lang
    prismicId
  }
`
