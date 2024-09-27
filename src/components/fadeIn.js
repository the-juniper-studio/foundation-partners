import React, { createContext, useContext } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const FadeInStaggerContext = createContext(false)

const viewport = { once: true, margin: '0px 0px -100px' }

export function FadeIn({ children, className, duration, x, y }) {
  let shouldReduceMotion = useReducedMotion()
  let isInStaggerGroup = useContext(FadeInStaggerContext)
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : y, x: shouldReduceMotion ? 0 : x },
        visible: { opacity: 1, y: 0, x: 0 }
      }}
      transition={{ duration: duration ? duration : 0.75 }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: 'hidden',
            whileInView: 'visible',
            viewport
          })}>
      {children}
    </motion.div>
  )
}

export function FadeInStagger({ children, className, duration }) {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div className={className} initial='hidden' whileInView='visible' viewport={viewport} transition={{ staggerChildren: duration ? duration : 0.2 }}>
        {children}
      </motion.div>
    </FadeInStaggerContext.Provider>
  )
}
