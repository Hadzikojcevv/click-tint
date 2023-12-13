// 'use client'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

type ImageTingProps = {
    image: StaticImageData
}

const ImageTint = ({image}: ImageTingProps) => {
  return (
    <div className='hover:bg-black'>
        <Image src={image} alt='door' className='basis-1/2 shadow-2xl' />
    </div>
  )
}

export default ImageTint