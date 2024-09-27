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
    <footer role='contentinfo' className='mt-auto bg-slate-800 text-slate-300 dark:bg-slate-900'>
      <div className='mx-auto grid max-w-screen-xl grid-cols-1 gap-6 px-3 md:px-6 py-10 md:grid-cols-3'>
        <div>
          <div className='mb-4 font-medium uppercase text-slate-50'>{config.company_display_name}</div>
          <PrismicRichText field={config.company_address.richText} />
          {config.company_phone}
          <Social />
        </div>
        {footerData.body.map((footer, index) => {
          return (
            <div key={`footer-${index}`}>
              <div className='mb-4 font-medium uppercase text-slate-50'>{footer.primary.title}</div>
              <ul>
                {footer.items.map((footerItem, index) => {
                  return (
                    <li className='-ml-3' key={`footerItem-${index}`}>
                      <PrismicLink className='inline-block p-2.5 hover:underline' field={footerItem.link}>
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
      <div className='bg-slate-900 py-3 text-center text-slate-300'>
        Crafted by {config.company_display_name} <span className='text-brand-green'>&copy;</span> <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}

export default Footer
