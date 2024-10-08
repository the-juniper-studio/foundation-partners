import React from 'react'

const Hero = (props) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1280 660' {...props}>
      <path fill='#f8c1c3' d='m1104.9 551.7c-49.9 0-90.2-39.9-90.2-89.2 0-49.3 40.3-89.1 90.2-89.1 49.9 0 90.2 39.8 90.2 89.1 0 49.3-40.3 89.2-90.2 89.2z' />
      <path fill='#fff6edb3' d='m1199.4 659.9h-156.2l-246.8-352.8-246.9 352.8h-125.8l387.8-554.9z' />
      <path fill='#dead2b' class='s2' d='m795.3 444l151.3 216.3h-302.6z' />
      <path fill='#dc6746' d='m-130.1-2l1154 2-472.7 663.5-685.2-1z' />
    </svg>
  )
}

export default React.memo(Hero)
