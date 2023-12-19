'use client'
import Image from 'next/image'
import { useState } from 'react'
import offImage from '../../../../public/assets/heroBannerOff.jpg'
import onImage from '../../../../public/assets/heroBannerOn.jpg'
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
        src={isWindowTinted ? onImage : offImage}
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
