import { graphql } from 'gatsby'

export const CompanyQuery = graphql`
  fragment PrismicCompanyFragment on PrismicConfig {
    _previewable
    data {
      company_address {
        richText
      }
      company_display_name
      company_logo {
        alt
        gatsbyImageData(width: 240, placeholder: NONE)
      }
      company_phone
    }
    id
    prismicId
  }
`
