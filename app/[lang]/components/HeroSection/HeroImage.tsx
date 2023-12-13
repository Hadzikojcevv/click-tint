
import React, { useState } from 'react'

import InfoWrapper from './InfoWrapper'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import ImagePreviewer from './Image'



type HeroImageProps = {
    lang: any
}

const HeroImage = ({lang}: HeroImageProps) => {

  

   
  return (
    <section className='w-full m-auto bg-secondary'>
        
        <ImagePreviewer lang={lang}/>
        <InfoWrapper lang={lang}/>
        
    </section>
  )
}

export default HeroImage