import { graphql } from 'gatsby'

export const pageQuery = graphql`
  fragment PrismicPageFragment on PrismicPage {
    _previewable
    alternate_languages {
      lang
      id
      raw
      type
      uid
    }
    data {
      body {
        ... on PrismicPageDataBodyAccordion {
          id
          slice_type
          primary {
            text {
              richText
            }
            title {
              richText
            }
          }
          items {
            answer {
              richText
            }
            question {
              richText
            }
          }
        }
        ... on PrismicPageDataBodyBannerWithCaption {
          id
          slice_label
          slice_type
          primary {
            button_text
            button_link {
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
            image_position
            image {
              alt
              copyright
              gatsbyImageData
            }
            text {
              richText
            }
            title {
              richText
            }
          }
        }
        ... on PrismicPageDataBodyBlogposts {
          id
          slice_type
          primary {
            title {
              richText
            }
          }
        }
        ... on PrismicPageDataBodyCardDeck {
          id
          slice_type
          primary {
            title {
              richText
              text
            }
          }
          items {
            button_link {
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
            button_text
            image {
              alt
              copyright
              gatsbyImageData
            }
            text {
              richText
            }
            title {
              richText
            }
          }
        }
        ... on PrismicPageDataBodyContact {
          id
          slice_type
          primary {
            text {
              richText
            }
          }
        }
        ... on PrismicPageDataBodyCounter {
          id
          slice_type
          primary {
            delay
            duration
            title {
              richText
            }
            text {
              richText
            }
          }
          items {
            final_number
            prefix
            starting_number
            suffix
            title {
              richText
            }
            text {
              richText
            }
          }
        }
        ... on PrismicPageDataBodyHero {
          id
          slice_type
          primary {
            button_link {
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
            button_text
            image {
              alt
              copyright
              gatsbyImageData
            }
            text {
              richText
            }
            title {
              richText
            }
          }
        }
        ... on PrismicPageDataBodyImageGallery {
          id
          slice_type
          primary {
            gallery_name {
              richText
              text
            }
            autoplay
            thumbnails
          }
          items {
            image {
              alt
              copyright
              gatsbyImageData
            }
            text {
              richText
            }
          }
        }
        ... on PrismicPageDataBodyMap {
          id
          slice_type
          primary {
            map_url {
              latitude
              longitude
            }
          }
        }
        ... on PrismicPageDataBodyQuote {
          id
          slice_type
          primary {
            author
            company
            dark_background
            image {
              alt
              copyright
              gatsbyImageData
            }
            quote {
              richText
            }
            role
          }
        }
        ... on PrismicPageDataBodyText {
          id
          slice_type
          primary {
            button_link {
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
            button_text
            text {
              richText
            }
          }
        }
        ... on PrismicPageDataBodyVideo {
          id
          slice_type
          primary {
            title {
              richText
            }
            video {
              height
              embed_url
              thumbnail_url
              title
              type
              width
            }
          }
        }
      }
      meta_description
      meta_title
      page_button_link {
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
      page_button_text
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
      }
    }
    first_publication_date
    id
    lang
    last_publication_date
    prismicId
    tags
    type
    uid
  }
`
