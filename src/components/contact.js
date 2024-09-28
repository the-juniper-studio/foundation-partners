import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const Contact = ({ slice }) => {
  return (
    <section className='component-contact mx-auto w-full max-w-screen-xl px-3 md:px-6 py-10'>
      <div className='relative mx-auto max-w-7xl lg:grid lg:grid-cols-5'>
        {slice.primary.text.richText && (
          <div className='prose col-span-2 max-w-screen-xl dark:prose-invert lg:prose-lg lg:pl-5 lg:pr-10'>
            <PrismicRichText field={slice.primary.text.richText} />
          </div>
        )}
        <div className='col-span-3 border-neutral-700 lg:border-l-2 lg:px-10'>
          <form name='contact' method='POST' action='/success' data-netlify='true' data-netlify-honeypot='surname'>
            <input type='hidden' name='surname' />
            <input type='hidden' name='form-name' value='contact' />
            <div className='mb-5'>
              <label className='mb-2 mt-4 block lg:mt-0 lg:text-lg font-medium' htmlFor='name'>
                What's your name?
              </label>
              <input className='w-full appearance-none border-neutral-700 border-2 rounded p-3 leading-tight text-neutral-700 shadow' type='text' name='name' id='name' required />
            </div>
            <div className='mb-5'>
              <label className='mb-2 mt-4 block lg:text-lg font-medium' htmlFor='email'>
                What's your email address?
              </label>
              <input className='w-full appearance-none border-neutral-700 border-2 rounded p-3 leading-tight text-neutral-700 shadow' type='email' name='email' id='email' required />
            </div>
            <div className='mb-5'>
              <label className='mb-2 mt-4 block lg:text-lg font-medium' htmlFor='phone'>
                What's your phone number?
              </label>
              <input
                className='w-full appearance-none border-neutral-700 border-2 rounded p-3 leading-tight text-neutral-700 placeholder-neutral-500  shadow'
                type='tel'
                name='phone'
                id='phone'
                placeholder='Optional'
              />
            </div>
            <div className='mb-5'>
              <label className='mb-2 mt-4 block lg:text-lg font-medium' htmlFor='message'>
                How can we help?
              </label>
              <textarea rows='4' className='border-neutral-700 border-2 w-full appearance-none rounded p-3 leading-tight text-neutral-700 shadow' name='message' id='message' required></textarea>
            </div>
            <div className='mb-5 lg:mb-0'>
              <button type='submit' className='button w-full rounded sm:w-auto'>
                Send your enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
