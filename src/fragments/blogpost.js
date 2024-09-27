import { graphql } from 'gatsby'

export const blogpostQuery = graphql`
  fragment PrismicBlogpostFragment on PrismicBlogpost {
    _previewable
    alternate_languages {
      lang
      id
      raw
      type
      uid
    }
    data {
      author {
        document {
          ... on PrismicTeamMember {
            id
            data {
              name
              position
              qualification
              image {
                alt
                copyright
                gatsbyImageData(imgixParams: { fit: "facearea", facepad: 3 })
              }
            }
          }
        }
      }
      page_image {
        alt
        copyright
        gatsbyImageData(layout: FULL_WIDTH)
        thumbnails {
          mobile {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        url(imgixParams: { w: 1200, h: 630, fit: "crop" })
      }
      page_text {
        richText
        text
      }
      page_title {
        richText
        text
      }
      meta_description
      meta_title
    }
    first_publication_date
    first_publication_date_formatted: first_publication_date(formatString: "dddd, Do MMMM yyyy")
    id
    lang
    last_publication_date
    prismicId
    tags
    type
    uid
    url
  }
`
