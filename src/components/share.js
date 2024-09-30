import React from 'react'

// SVGs
import LinkedIn from './svg/linkedin'
import Sms from './svg/sms'
import Twitter from './svg/twitter'
import Whatsapp from './svg/whatsapp'

// export default function share() {
const Share = ({ link, image, title }) => {
  const openLink = ({ link, type, title }) => {
    let url = `${process.env.GATSBY_COMPANY_URL.replace(/\/$/, '')}${link}`
    let message = `Hey, Found this on ${process.env.GATSBY_COMPANY_NAME}, thought you might be interested.`

    switch (type) {
      case 'LinkedIn':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`)
        break
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${process.env.GATSBY_COMPANY_NAME}: ${title}&url=${url}`)
        break
      case 'whatsapp':
        window.open(`whatsapp://send?text=${message} ${url}`)
        break
      case 'sms':
        window.open(`sms:?&body=${encodeURI(message)} ${url}`)
        break
      default:
    }
  }
  const linkStyle = 'flex flex-row items-center gap-2 p-3 rounded-full bg-white shadow-sm border border-brandBlack group'
  const iconStyle = 'h-8 w-8 opacity-75 group-hover:opacity-100 group-hover:scale-110 transition ease-in-out transform duration-300'

  return (
    <div className='relative'>
      <div className='prose max-w-none dark:prose-invert mb-3 lg:mb-6'>
        <h2>Share</h2>
      </div>

      <div className='flex flex-wrap items-start gap-3 text-brandBlack'>
        <button
          className={linkStyle}
          onClick={openLink.bind(null, {
            type: 'LinkedIn',
            link,
            title
          })}>
          <LinkedIn alt='LinkedIn' aria-hidden='true' className={`${iconStyle}`} />
          <span className='sr-only'>Share to LinkedIn</span>
        </button>
        <button
          className={linkStyle}
          onClick={openLink.bind(null, {
            type: 'twitter',
            link,
            title
          })}>
          <Twitter alt='twitter' aria-hidden='true' className={`${iconStyle}`} />
          <span className='sr-only'>Share on Twitter</span>
        </button>
        <button
          className={linkStyle}
          onClick={openLink.bind(null, {
            type: 'whatsapp',
            link,
            title
          })}>
          <Whatsapp alt='Whatsapp' aria-hidden='true' className={`${iconStyle}`} />
          <span className='sr-only'>Share via Whatsapp</span>
        </button>
        <button
          className={linkStyle}
          onClick={openLink.bind(null, {
            type: 'sms',
            link,
            title
          })}>
          <Sms alt='SMS' aria-hidden='true' className={`${iconStyle}`} />
          <span className='sr-only'>Send by SMS</span>
        </button>
      </div>
    </div>
  )
}
export default Share
