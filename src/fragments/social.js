import { graphql } from 'gatsby'

export const SocialQuery = graphql`
  fragment PrismicSocialFragment on PrismicConfig {
    _previewable
    alternate_languages {
      lang
      id
      raw
      type
      uid
    }
    data {
      social {
        social_network
        social_network_url {
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
    }
    id
    lang
    prismicId
  }
`
