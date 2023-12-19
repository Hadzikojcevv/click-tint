'use client'
import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'

type ImageTingProps = {
  image: StaticImageData,
  text: string
}

const ImageTint = ({ image, text }: ImageTingProps) => {
  const [isTinted, setIsTinted] = useState(false)

  const handleHover = () => {
    setIsTinted(!isTinted)
  }

  return (
    <div className='relative hover:bg-black rounded-md'>
      <Image src={image} alt='door' className='basis-1/2 shadow-2xl rounded-md' />

      <div
        className={`${
          isTinted ? 'absolute' : 'hidden'
        } image-tinter left-0 right-0 top-0 h-full rounded-md`}
      ></div>

      <button
        onClick={handleHover}
        style={{
          position: 'absolute',
          bottom: '5%',
          right: '40%',
          left: '40%'
        }}
        className='rounded-3xl bg-white p-4 font-bold uppercase text-custom shadow-2xl transition-colors delay-75 ease-in-out hover:bg-custom hover:text-white'
      >
        {text}
      </button>
    </div>
  )
}

export default ImageTint
