import React, { useState } from 'react'
import { Fade as Hamburger } from 'hamburger-react'
import { PrismicLink } from '@prismicio/react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useMergePrismicPreviewData } from 'gatsby-plugin-prismic-previews'

// Components
import Dropdown from './dropdown'
import LanguageSwitcher from './languageSwitcher'

const Header = ({ altLangs, lang }) => {
  const staticData = useStaticQuery(graphql`
    query ($lang: String) {
      prismicNavigation(lang: { eq: $lang }) {
        ...PrismicHeaderFragment
      }
      prismicConfig {
        ...PrismicCompanyFragment
      }
    }
  `)
  const data = useMergePrismicPreviewData(staticData)
  const [isOpen, setOpen] = useState(false)
  const headerData = data.prismicNavigation.data
  const config = data.prismicConfig.data

  // Tidy?
  const navStyles =
    'flex w-full flex-row justify-between items-center p-4 text-brandBlack transition duration-150 ease-in-out hover:text-indigo-700 focus:text-brandBlack hover:underline hover:underline-offset-4'
  const subNavStyles = 'block py-4 px-6 text-brandBlack transition duration-150 ease-in-out hover:text-indigo-700 focus:text-brandBlack'

  return (
    <header role='banner' className='absolute left-0 right-0 top-0 z-20 text-white text-3xl md:text-base'>
      <nav className='relative mx-auto flex max-w-screen-xl items-center gap-6 px-3 md:px-6 py-4'>
        <Link to='/' className='z-20 flex'>
          <GatsbyImage className='w-40 lg:w-60 object-contain' placeholder='none' loading='eager' image={getImage(config.company_logo)} alt={config.company_display_name} />
        </Link>
        <span className='z-20 ml-auto md:hidden'>
          <Hamburger color='#dc6747' label='Show menu' rounded toggled={isOpen} toggle={setOpen} />
        </span>
        <div
          className={`${
            !isOpen ? 'hidden' : 'fixed inset-0 z-10 flex h-screen flex-1 flex-col justify-start bg-brandPink bg-opacity-50'
          } backdrop-blur-sm md:relative md:flex md:h-auto md:w-full md:flex-row md:bg-transparent md:ml-auto`}>
          <div className='max-h-screen overflow-y-scroll rounded bg-brandPink shadow-md md:max-h-none md:overflow-visible md:rounded-none md:bg-transparent md:shadow-none'>
            <ul className='relative flex-row items-center pt-24 md:flex md:pt-0'>
              {headerData.nav.map((nav, index) => {
                return (
                  <React.Fragment key={`nav-${index}`}>
                    {nav.items.length > 1 ? (
                      <Dropdown items={nav.items} navStyles={navStyles} subNavStyles={subNavStyles}>
                        {nav.primary.label}
                      </Dropdown>
                    ) : (
                      <li key={`nav-${index}`}>
                        <PrismicLink className={navStyles} field={nav.primary.link} activeClassName='underline underline-offset-4'>
                          {nav.primary.label}
                        </PrismicLink>
                      </li>
                    )}
                  </React.Fragment>
                )
              })}
              <LanguageSwitcher lang={lang} altLangs={altLangs} navStyles={navStyles} subNavStyles={subNavStyles} />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
