'use client'
import Image from 'next/image'
import { useState } from 'react'
import ImageTogler from './ImageTogler'

type ImagePreviewerProps = {
  lang: any
}

const ImagePreviewer = ({ lang }: ImagePreviewerProps) => {
  const [isWindowTinted, setIsWindowTinted] = useState(false)

  const handleTint = () => {
    setIsWindowTinted(!isWindowTinted)
  }

  return (
    <div className='relative flex justify-center '>
      <Image
        loading='eager'
        src={isWindowTinted ? "https://i.imgur.com/1Qps8Oe.png" : 'https://i.imgur.com/DiCXoaE.png'}
        alt={'Window Tint'}
        width={1200}
        height={728}
        className='rounded-sm shadow-2xl'
      />

      <ImageTogler handleTint={handleTint} lang={lang} />
    </div>
  )
}

export default ImagePreviewer
