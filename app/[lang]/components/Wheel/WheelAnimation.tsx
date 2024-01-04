'use client'
import React, { useEffect, useRef, useState } from 'react'

const wheelItems = [{
    icon: "Prvo",
    text: "Prvo"
},
{
    icon: "Vtoro",
    text: "Vtoro"
},{
    icon: "Treto",
    text: "Treto"
},{
    icon: "Cetvrto",
    text: "Cetvrto"
},{
    icon: "Petto",
    text: "Petto"
},{
    icon: "sest",
    text: "sest"
}]


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

    // return () => clearTimeout(timer)  
  }, [isAnimationRunning])

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
            {wheelItems.map((item, idx:number) => <button key={item.text} className='item bg-custom' onClick={() => handleBtnClick(idx)}>{item.icon}</button>)}
          
        </div>
        <div
          className='absolute flex items-center justify-center rounded-full bg-gray-200'
          style={{
            height: '35%',
            width: '35%'
          }}
        >
          {wheelItems[itemToDisplay].text}
        </div>
      </div>
    </div>
  )
}

export default WheelAnimation
