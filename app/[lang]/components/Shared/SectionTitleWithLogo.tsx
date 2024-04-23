import Image from 'next/image'
import React from 'react'

type SectionTitleWithLogoProps = {
    title: string
}

const SectionTitleWithLogo = ({title = 'Click-Tint'}: SectionTitleWithLogoProps) => {
  return (
    <div className='m-auto mb-8 flex w-6/12 flex-col items-center justify-center text-center'>
          <div className='flex flex-col items-center justify-center'>
            <Image
              loading='lazy'
              src={'https://i.imgur.com/nCrWo6d.png'}
              alt='Logo'
              width={400}
              height={400}
            />
            <p className='mt-4 text-center text-xl font-thin uppercase tracking-widest text-neutral-500 md:text-2xl'>
              {title}
            </p>
          </div>
        </div>
  )
}

export default SectionTitleWithLogo