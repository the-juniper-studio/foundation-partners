import { graphql } from 'gatsby'

export const teamQuery = graphql`
  fragment PrismicTeamMemberFragment on PrismicTeamMember {
    _previewable
    data {
      bio {
        richText
      }
      contact {
        email_address
        linked_in {
          isBroken
          link_type
          tags
          target
          type
          uid
          url
          id
        }
        phone_number
      }
      image {
        alt
        copyright
        gatsbyImageData(imgixParams: { fit: "crop", width: 100, height: 100 })
        url
      }
      name
      position
      qualification
    }
    first_publication_date
    id
    last_publication_date
    prismicId
    tags
    type
    url
  }
`
