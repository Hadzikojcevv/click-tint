'use client'
import React from 'react'

type ImageToglerProps = {
    handleTint: () => void;
    lang: any
}

const ImageTogler = ({handleTint, lang}: ImageToglerProps) => {
  return (
    <button onClick={handleTint} style={{
        position: 'absolute',
        bottom: '10%',
    }}
    className='bg-white p-4 rounded-3xl text-custom uppercase font-bold hover:text-white hover:bg-custom transition-colors ease-in-out delay-75 shadow-2xl'>
        {lang.home.banner.bannerBtn ?? "Click"}
    </button>
  )
}

export default ImageTogler