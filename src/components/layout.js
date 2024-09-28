import React from 'react'
// import CookieConsent from 'react-cookie-consent'

// Components
import Header from './header'
import Footer from './footer'

const Layout = ({ altLangs, children, lang }) => {
  return (
    <div className='flex min-h-screen flex-col bg-brandCream text-brandBlack antialiased dark:bg-brandBlack dark:text-brandCream'>
      <a href='#main' className='sr-only focus:not-sr-only'>
        Skip to main content
      </a>
      <Header altLangs={altLangs} lang={lang} />
      <main role='main' id='main'>
        {children}
      </main>
      <Footer altLangs={altLangs} lang={lang} />
      {/* <CookieConsent
        location='bottom'
        buttonText='Accept'
        declineButtonText='Decline'
        disableStyles
        buttonClasses='mx-1 px-3 md:px-6 py-2 inline-block rounded-lg border transform transition duration-150 ease-in-out border-white text-white hover:shadow-sm hover:-translate-y-1 hover:shadow-md'
        declineButtonClasses='mx-1 px-3 md:px-6 py-2 inline-block'
        containerClasses='fixed inset-x-0 text-white bg-indigo-800 p-3 text-sm text-center z-50'
        contentClasses='inline-block mb-2'
        enableDeclineButton
        cookieName='gatsby-gdpr-google-analytics'>
        {process.env.GATSBY_COMPANY_NAME} uses cookies.{' '}
        <Link to='/privacy' className='underline'>
          What do we use cookies for?
        </Link>
      </CookieConsent> */}
    </div>
  )
}

export default Layout
