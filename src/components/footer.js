import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { PrismicRichText, PrismicLink } from '@prismicio/react'
import { useMergePrismicPreviewData } from 'gatsby-plugin-prismic-previews'

// Components
import Social from './social'

const Footer = ({ lang }) => {
  const staticData = useStaticQuery(graphql`
    query ($lang: String) {
      prismicNavigation(lang: { eq: $lang }) {
        ...PrismicFooterFragment
      }
      prismicConfig {
        ...PrismicCompanyFragment
      }
    }
  `)
  const data = useMergePrismicPreviewData(staticData)
  const footerData = data.prismicNavigation.data
  const config = data.prismicConfig.data

  return (
    <footer role='contentinfo' className='mt-auto'>
      <div className='mx-auto grid max-w-screen-xl grid-cols-1 gap-6 px-3 md:px-6 py-10 md:grid-cols-3'>
        <div>
          <div className='mb-4 font-medium'>{config.company_display_name}</div>
          <PrismicRichText field={config.company_address.richText} />
          {config.company_phone}
          <Social />
        </div>
        {footerData.body.map((footer, index) => {
          return (
            <div key={`footer-${index}`}>
              {footer.primary.title && <div className='mb-4 font-medium'>{footer.primary.title}</div>}
              <ul>
                {footer.items.map((footerItem, index) => {
                  return (
                    <li className='' key={`footerItem-${index}`}>
                      <PrismicLink className='inline-block px-2 pb-2 hover:underline hover:underline-offset-4' field={footerItem.link}>
                        {footerItem.link_label}
                      </PrismicLink>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
      <div className='py-3 text-center'>
        Crafted by {config.company_display_name} <span className='text-brand-green'>&copy;</span> <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}

export default Footer
