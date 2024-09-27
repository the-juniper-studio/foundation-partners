import { graphql } from 'gatsby'

export const MailchimpQuery = graphql`
  fragment PrismicMailchimpFragment on PrismicConfig {
    _previewable
    data {
      mailchimp_text
      mailchimp_title {
        richText
      }
    }
    id
    lang
    prismicId
  }
`
