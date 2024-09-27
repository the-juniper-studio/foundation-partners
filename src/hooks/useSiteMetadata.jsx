import { graphql, useStaticQuery } from 'gatsby'

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          companyName
          description
          image
          logo
          siteUrl
          twitterUsername
        }
      }
    }
  `)
  return data.site.siteMetadata
}
