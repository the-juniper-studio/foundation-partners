import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { PrismicRichText } from '@prismicio/react'
import { useMergePrismicPreviewData } from 'gatsby-plugin-prismic-previews'

const Mailchimp = ({ lang }) => {
  const [message, setMessage] = useState()
  const [error, setError] = useState()
  const [form, setForm] = useState({
    email: ''
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addToMailchimp(form.email, form)
      .then(({ msg, result }) => {
        console.log('msg', `${result}: ${msg}`)
        if (result !== 'success') {
          throw msg
        }
        setError()
        setMessage(msg)
      })
      .catch((err) => {
        setError(err)
      })
  }

  const staticData = useStaticQuery(graphql`
    query configQuery {
      prismicConfig {
        data {
          mailchimp_text
          mailchimp_title {
            richText
          }
        }
      }
    }
  `)
  const data = useMergePrismicPreviewData(staticData)
  const config = data.prismicConfig.data

  const inputStyles =
    'w-full appearance-none rounded-lg py-4 px-6 text-left text-base leading-tight text-neutral-800 placeholder-neutral-500 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-blue'
  return (
    <>
      {!message && !error && (
        <div className='relative z-10 mx-auto -mt-20 grid max-w-screen-xl border-b border-neutral-600 p-6 print:hidden md:pb-10 lg:flex lg:space-x-12'>
          <div className='bg-brand-blue mx-auto w-full max-w-screen-xl rounded-3xl px-6 py-10 sm:px-12 sm:py-16 lg:flex lg:items-center lg:p-16'>
            <div className='lg:w-0 lg:flex-1'>
              <PrismicRichText field={config.mailchimp_title?.richText} />
              <p className='mt-4 max-w-3xl text-lg text-indigo-100'>{config.mailchimp_text}</p>
            </div>
            <div className='mx-auto mt-12 sm:w-full sm:max-w-md lg:ml-8 lg:mt-0 lg:flex-1'>
              <form className='grid grid-cols-2 gap-3' onSubmit={handleSubmit}>
                <div className='mc-field-group'>
                  <label className='sr-only' htmlFor='mce-FNAME'>
                    First Name
                  </label>
                  <input type='text' placeholder='First name' name='FNAME' className={inputStyles} id='mce-FNAME' required onChange={handleChange} />
                  <span id='mce-FNAME-HELPERTEXT' className='helper_text'></span>
                </div>
                <div className='mc-field-group'>
                  <label className='sr-only' htmlFor='mce-LNAME'>
                    Last Name
                  </label>
                  <input type='text' placeholder='Last name' name='LNAME' className={inputStyles} id='mce-LNAME' required onChange={handleChange} />
                  <span id='mce-LNAME-HELPERTEXT' className='helper_text'></span>
                </div>
                <div className='col-span-2'>
                  <label htmlFor='email' className='sr-only'>
                    Email address
                  </label>
                  <input id='email' name='email' type='email' autoComplete='email' required className={inputStyles} placeholder='Enter your email' onChange={handleChange} />
                </div>
                <button className='button col-span-2 inline-block transform whitespace-nowrap px-5 py-2 transition duration-300 ease-in-out' type='submit' name='subscribe' id='mc-embedded-subscribe'>
                  Sign Up
                </button>
              </form>
              <p className='mt-3 text-sm text-indigo-100'>
                We care about the protection of your data. Read our{' '}
                <a href='/privacy-policy' className='font-semibold text-white underline'>
                  Privacy Policy.
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
      {message && (
        <div className='relative z-10 mx-auto -mt-20 max-w-screen-md rounded-md bg-green-50 p-4'>
          <div className='flex'>
            <div className='flex-shrink-0 text-green-400'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='h-10 w-10'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
              </svg>
            </div>
            <div className='prose prose-xl ml-3'>
              <h3 className='font-semibold text-green-800'>Success</h3>
              <p className='text-green-700'>{message || 'You have successfully signed up to our mailing list'}</p>
            </div>
          </div>
        </div>
      )}
      {error && (
        <div className='relative z-10 mx-auto -mt-20 max-w-screen-md rounded-md bg-red-50 p-4'>
          <div className='flex'>
            <div className='flex-shrink-0 text-red-400'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='h-10 w-10'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
              </svg>
            </div>
            <div className='prose prose-xl ml-3'>
              <h3 className='mb-0 font-semibold text-red-800'>There were an errors with your submission</h3>
              <p className=' text-red-700'>{error || 'Please try again'}</p>
              <button className='button' onClick={() => setError()}>
                Try again
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default React.memo(Mailchimp)
