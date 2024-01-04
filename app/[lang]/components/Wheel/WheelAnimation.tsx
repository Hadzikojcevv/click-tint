'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const wheelItems = [
  {
    icon: 'https://i.imgur.com/sPDmR5u.png',
    text: 'Приватност'
  },
  {
    icon: 'https://i.imgur.com/WaL5zgQ.png',
    text: 'Заштеда на Електрична Енергија'
  },
  {
    icon: 'https://i.imgur.com/Ij8VUcV.png',
    text: 'Економичност'
  },
  {
    icon: 'https://i.imgur.com/UKj6HA2.png',
    text: 'Површина на која може да се проектира'
  },
  {
    icon: 'https://i.imgur.com/6lypsUd.png',
    text: 'Управување од далечина'
  },
  {
    icon: 'https://i.imgur.com/oLpyDV1.png',
    text: 'Заштита од UV зраци'
  }
]

const WheelAnimation = () => {
  const [deg, setDeg] = useState(210)
  const [isAnimationRunning, setIsAnimationRunning] = useState(true)

  const [itemToDisplay, setItemToDisplay] = useState(0)

  const animeCont = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cont = animeCont.current!

    const timer = setTimeout(() => {
      cont.classList.add('anime-paused')
    }, 4000)

    const timer2 = setTimeout(() => {
      cont.classList.remove('anime-paused')
      setIsAnimationRunning(!isAnimationRunning)
    }, 8000)
  }, [isAnimationRunning])

  useEffect(() => {

    const interval = setInterval(() => {

        if(itemToDisplay >= 0 && itemToDisplay < 5) {
            setItemToDisplay(itemToDisplay => itemToDisplay + 1)
        } else {
            setItemToDisplay(0)

        }
    }, 2000)


    return () => clearInterval(interval)

  }, [itemToDisplay])

  const handleBtnClick = (index: number) => {
    setItemToDisplay(index)
  }

  return (
    <div className='flex h-full w-full basis-1/2 items-center justify-center '>
      <div className='border-thin header wheel-cont relative flex items-center justify-center rounded-full'>
        <div
          ref={animeCont}
          className={`border-thin cont wheel-animation`}
          style={{
            rotate: `${deg}deg`
          }}
        >
          {wheelItems.map((item, idx: number) => (
            <button
              key={item.text}
              className='item bg-custom flex justify-center items-center'
              onClick={() => handleBtnClick(idx)}
            >
              <Image src={item.icon} alt='Icon' width={40} height={40} className='svg-animation'/>
            </button>
          ))}
        </div>
        <div
          className='absolute flex items-center justify-center rounded-full bg-gray-200 text-center center-wheel-piece'
          style={{
            height: '43%',
            width: '43%'
          }}
        >
          <p className='text-xl font-semibold'>{wheelItems[itemToDisplay].text}</p>
        </div>
      </div>
    </div>
  )
}

export default WheelAnimation
