import React from 'react'

const Triangle = (props) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 490 490' {...props}>
      <polygon points='245,456.701 490,33.299 0,33.299' fill='currentColor' />
    </svg>
  )
}

export default React.memo(Triangle)
