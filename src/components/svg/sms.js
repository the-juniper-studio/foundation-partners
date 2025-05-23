import React from 'react'

const Sms = (props) => {
  return (
    <svg viewBox='0 0 24 24' {...props}>
      <title>SMS</title>
      <path d='M0 0h24v24H0V0z' fill='none' />
      <path fill='currentColor' d='M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zM7 9h2v2H7zm8 0h2v2h-2zm-4 0h2v2h-2z' />
    </svg>
  )
}

export default React.memo(Sms)
