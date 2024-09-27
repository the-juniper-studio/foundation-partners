import React from 'react'
import { Link } from 'gatsby'

// SVGs
import Home from './svg/home'

const PrettyPath = ({ path }) => {
  let pretty = path.replace(new RegExp('-', 'g'), ' ')

  return (
    <span className='capitalize' itemProp='name'>
      {pretty}
    </span>
  )
}

const Breadcrumb = ({ location }) => {
  var splitUrl = location.pathname.split('/')
  splitUrl = splitUrl.filter(Boolean)
  var fullPath = ''
  if (location.pathname === '/') return null
  return (
    <nav className='z-20 w-full py-3' aria-label='Breadcrumb'>
      <ol className='mx-auto flex w-full max-w-screen-xl items-center space-x-3 px-3 md:px-6' itemScope itemType='https://schema.org/BreadcrumbList'>
        <li itemProp='itemListElement' itemScope itemType='https://schema.org/ListItem'>
          <div>
            <Link
              to='/'
              className='flex items-center justify-center rounded-full p-1 hover:bg-slate-400 hover:text-white'
              itemScope
              itemType='https://schema.org/WebPage'
              itemProp='item'
              itemID={`${location.origin}${fullPath}`}>
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
            <li key={`url-${index}`} className='mr-1 inline-block' itemProp='itemListElement' itemScope itemType='https://schema.org/ListItem'>
              <div className='flex items-center'>
                {splitUrl.length === index + 1 ? (
                  <span aria-current='page' className='inline-block text-sm leading-normal lg:text-base'>
                    <PrettyPath path={path} />
                  </span>
                ) : (
                  <Link
                    to={fullPath}
                    className='inline-block border-r pr-3 text-sm font-semibold leading-normal underline underline-offset-2 hover:text-slate-400 hover:no-underline lg:text-base'
                    itemScope
                    itemType='https://schema.org/WebPage'
                    itemProp='item'
                    itemID={`${location.origin}${fullPath}`}>
                    <PrettyPath path={path} />
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
