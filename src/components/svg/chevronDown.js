import React from 'react'

const ChevronDown = (props) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' {...props} fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'>
      <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
    </svg>
  )
}

export default React.memo(ChevronDown)
