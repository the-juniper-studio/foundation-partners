import React, { useState, useEffect, useCallback, useRef } from 'react'
import { PrevButton, NextButton, EmblaDots, EmblaTabs, EmblaThumbs } from './emblaCarouselButtons'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const EmblaCarousel = ({ arrows, autoPlay, children, delayLength, dots, loop, tabs, slice, slidesToScroll, thumbs }) => {
  const options = {
    loop,
    slidesToScroll: slidesToScroll || 1,
    align: 'start',
    skipSnaps: false
  }
  const autoplay = useRef(Autoplay({ playOnInit: autoPlay, delay: delayLength, stopOnInteraction: true, stopOnMouseEnter: true }, (emblaRoot) => emblaRoot.parentElement))

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current])
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const scrollNext = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
    autoplay.current.reset()
  }, [emblaApi])

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
    autoplay.current.reset()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect, setScrollSnaps])

  let items
  if (slice) {
    items = slice.items || slice
  }

  return (
    <div className='embla relative w-full'>
      {tabs && items && (
        <div className='mb-6 block'>
          <nav className='-mb-px flex' aria-label='Tabs'>
            {items.map((nav, index) => {
              return <EmblaTabs selected={index === selectedIndex} onClick={() => scrollTo(index)} key={index} text={nav?.title.text} />
            })}
          </nav>
        </div>
      )}
      <div className='relative'>
        <div className='overflow-hidden' ref={emblaRef}>
          <div className='flex w-full'>{children}</div>
        </div>
        <div className='controls justify-between flex mt-2'>
          {thumbs && items ? (
            <div className='grid grid-cols-5 gap-2 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12'>
              {items.map((snap, index) => {
                return <EmblaThumbs selected={index === selectedIndex} onClick={() => scrollTo(index)} key={index} image={snap?.image} video={snap?.video} />
              })}
            </div>
          ) : (
            <div className='bg-slate-300 flex items-center p-1 rounded-full'>
              {scrollSnaps.map((_, index) => (
                <EmblaDots key={index} selected={index === selectedIndex} onClick={() => scrollTo(index)} />
              ))}
            </div>
          )}
          {arrows && (
            <div className='flex gap-2 ml-2'>
              <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
              <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

EmblaCarousel.defaultProps = {
  auto: true,
  delayLength: '3000'
}

export default EmblaCarousel
