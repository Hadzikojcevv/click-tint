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
    className='bg-white p-4 rounded-3xl text-primary uppercase font-bold hover:text-white hover:bg-blue-400 transition-colors ease-in-out delay-75 shadow-2xl'>
        {lang.home.banner.bannerBtn ?? "Click"}
    </button>
  )
}

export default ImageTogler