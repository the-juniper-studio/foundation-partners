import React from 'react'
import { Link } from 'gatsby'

const Pagination = ({ currentPage, numPages, pageLink }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? pageLink : pageLink + '/' + (currentPage - 1).toString()
  const nextPage = pageLink + '/' + (currentPage + 1).toString()
  return (
    <nav className='mx-auto mt-10 text-center'>
      {!isFirst && (
        <Link className='relative mx-1 inline-flex items-center rounded-sm border border-neutral-300 bg-white px-3 md:px-6 py-2 text-sm text-neutral-700 hover:bg-neutral-100' to={prevPage} rel='prev'>
          ← Prev
        </Link>
      )}
      {currentPage >= 3 && (
        <Link
          className='relative mx-1 inline-flex items-center rounded-sm border border-neutral-300 bg-white px-3 md:px-6 py-2 text-sm text-neutral-700 hover:bg-neutral-100'
          activeClassName='bg-neutral-100'
          to={`${pageLink}`}>
          01
        </Link>
      )}
      {currentPage >= 3 && <li className='relative inline-flex items-center rounded-sm px-3 md:px-6 py-2 text-sm text-neutral-700'>&hellip;</li>}
      {numPages > 1 &&
        Array.from({ length: numPages }, (_, i) => {
          if (i < currentPage + 1 && i > currentPage - 3) {
            return (
              <Link
                className='relative mx-1 inline-flex items-center rounded-sm border border-neutral-300 bg-white px-3 md:px-6 py-2 text-sm text-neutral-700 hover:bg-neutral-100'
                activeClassName='bg-neutral-100'
                to={`${pageLink}${i === 0 ? '' : '/' + (i + 1)}`}>
                {i + 1 < 10 ? `0${i + 1}` : i + 1}
              </Link>
            )
          }
          return null
        })}
      {currentPage + 1 < numPages && <li className='relative inline-flex items-center rounded-sm px-3 md:px-6 py-2 text-sm text-neutral-700'>&hellip;</li>}
      {currentPage + 1 < numPages && (
        <Link
          className='relative mx-1 inline-flex items-center rounded-sm border border-neutral-300 bg-white px-3 md:px-6 py-2 text-sm text-neutral-700 hover:bg-neutral-100'
          to={`${pageLink}/${numPages}`}>
          {numPages < 10 ? `0${numPages}` : numPages}
        </Link>
      )}
      {!isLast && (
        <Link className='relative mx-1 inline-flex items-center rounded-sm border border-neutral-300 bg-white px-3 md:px-6 py-2 text-sm text-neutral-700 hover:bg-neutral-100' to={nextPage} rel='next'>
          Next →
        </Link>
      )}
    </nav>
  )
}

export default Pagination
