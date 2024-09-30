import React from 'react'
import { Link } from 'gatsby'

// SVGs
import Home from './svg/home'
import ChevronRight from './svg/chevronRight'

const PrettyPath = ({ path }) => {
  let pretty = path.replace(new RegExp('-', 'g'), ' ')

  return (
    <span className='capitalize' itemProp='name'>
      {pretty}
    </span>
  )
}

const Breadcrumb = ({ location, title }) => {
  var splitUrl = location.pathname.split('/')
  splitUrl = splitUrl.filter(Boolean)
  var fullPath = ''
  if (location.pathname === '/') return null

  return (
    <nav className='z-20 w-full py-3' aria-label='Breadcrumb'>
      <ol className='mx-auto flex w-full max-w-screen-xl items-center space-x-3 px-3 md:px-6 text-sm' itemScope itemType='https://schema.org/BreadcrumbList'>
        <li itemProp='itemListElement' itemScope itemType='https://schema.org/ListItem'>
          <div>
            <Link to='/' className='flex items-center justify-center hover:text-brandRust' itemScope itemType='https://schema.org/WebPage' itemProp='item' itemID={`${location.origin}${fullPath}`}>
              <Home className='h-5 w-5 flex-shrink-0' />
              <span className='sr-only' itemProp='name'>
                Home
              </span>
            </Link>
            <meta itemProp='position' content='1' />
          </div>
        </li>
        {splitUrl.map((path, index) => {
          fullPath = fullPath + '/' + path
          let position = index + 2
          return (
            <li key={`url-${index}`} className='mr-1' itemProp='itemListElement' itemScope itemType='https://schema.org/ListItem'>
              <div className='flex items-center'>
                {splitUrl.length === index + 1 ? (
                  <span aria-current='page' className=''>
                    {title} <PrettyPath path={path} />
                  </span>
                ) : (
                  <Link
                    to={fullPath}
                    className='flex font-medium underline underline-offset-2 hover:no-underline'
                    itemScope
                    itemType='https://schema.org/WebPage'
                    itemProp='item'
                    itemID={`${location.origin}${fullPath}`}>
                    <PrettyPath path={path} />
                    <ChevronRight className='w-3 ml-3' />
                  </Link>
                )}
              </div>
              <meta itemProp='position' content={position} />
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default React.memo(Breadcrumb)
