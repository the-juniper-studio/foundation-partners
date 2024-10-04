import React from 'react'

const Circle = (props) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 178' {...props}>
      <path fill='currentColor' d='m90 177.2c-49.5 0-89.5-39.5-89.5-88.5 0-48.9 40-88.5 89.5-88.5 49.5 0 89.5 39.6 89.5 88.5 0 49-40 88.5-89.5 88.5z' />
    </svg>
  )
}

export default React.memo(Circle)
