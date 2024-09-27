import React, { useState, useRef } from 'react'
import useOnClickOutside from '../hooks/useOnClickOutside'
import { linkResolver } from '../utils/linkResolver.js'

const LanguageSwitcher = ({ altLangs, lang, navStyles, subNavStyles }) => {
  const ref = useRef()
  const [isOpen, setOpen] = useState(false)
  const dropdownToggle = () => {
    setOpen(!isOpen)
  }

  const keyDown = (e) => {
    if (e.keyCode === 40) {
      console.log('DOWN / OPEN')
      setOpen(true)
      console.log(e)
    }
    if (e.keyCode === 38) {
      console.log('UP / CLOSE')
      setOpen(false)
    }
  }

  useOnClickOutside(ref, () => setOpen(false))

  const languageNames = new Intl.DisplayNames([lang], { type: 'language' })
  const language = languageNames.of(lang.slice(0, 2))

  if (!altLangs) return null
  return (
    <>
      {altLangs.length > 0 && (
        <li ref={ref} className='relative'>
          <button aria-expanded={isOpen} aria-haspopup='true' className={`${navStyles} items-start capitalize`} onClick={dropdownToggle} onKeyDown={keyDown}>
            {language}
            <svg xmlns='http://www.w3.org/2000/svg' className='w-5' height='1em'>
              <path d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z' fill='currentColor' />
              <path d='M0 0h24v24H0z' fill='none' />
            </svg>
          </button>
          <ul className={`${!isOpen ? 'hidden' : 'menu flex min-w-max flex-col bg-indigo-50 md:absolute md:inset-x-0 md:mt-2 md:rounded md:p-3 md:shadow-md lg:bg-white'}`}>
            {altLangs.map((altLang, index) => {
              const altLanguageNames = new Intl.DisplayNames([altLang.lang], { type: 'language' })
              const altLanguage = altLanguageNames.of(altLang.lang.slice(0, 2))
              return (
                <li key={`lang-${index}`}>
                  <a className={`${subNavStyles} capitalize`} href={linkResolver(altLang)}>
                    {altLanguage}
                  </a>
                </li>
              )
            })}
          </ul>
        </li>
      )}
    </>
  )
}

export default LanguageSwitcher
