import React, { useState, useRef } from 'react'
import useOnClickOutside from '../hooks/useOnClickOutside'
import { PrismicLink } from '@prismicio/react'

// SVG
import ChevronDown from './svg/chevronDown'

const Dropdown = (props) => {
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

  return (
    <li ref={ref} className='relative'>
      <button aria-expanded={isOpen} aria-haspopup='true' className={props.navStyles} onClick={dropdownToggle} onKeyDown={keyDown}>
        {props.children}
        <span className='indicator ml-1 '>
          <ChevronDown className='h-4 w-4' />
        </span>
      </button>
      <ul className={`${!isOpen ? 'hidden' : 'menu flex min-w-max flex-col bg-indigo-50 md:absolute md:inset-x-0 md:mt-2 md:rounded md:p-3 md:shadow-md lg:bg-white'}`}>
        {props.items.map((subNav, index) => {
          return (
            <li key={`subNav-${index}`}>
              <PrismicLink className={props.subNavStyles} field={subNav.subnav_link} tabIndex='-1' activeClassName='text-indigo-700'>
                {subNav.subnav_link_label}
              </PrismicLink>
            </li>
          )
        })}
      </ul>
    </li>
  )
}

export default Dropdown
