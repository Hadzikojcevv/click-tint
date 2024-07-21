import Image from 'next/image'
import React from 'react'


type VideoProps = {
  lang: any
}

const Video = ({lang}:VideoProps) => {
  return (
    <section className=' py-8 md:py-16'>
      <div
        className='basis-1/2 text-center mb-4 md:mb-8'
      >
        <div className='flex flex-col items-center justify-center'>
          <Image
            loading='lazy'
            src={'https://i.imgur.com/nCrWo6d.png'}
            alt='Logo'
            width={400}
            height={400}
          />
          <p className='mt-4 text-center text-xl font-thin uppercase tracking-widest text-neutral-500 md:text-2xl'>
            {lang.home?.video?.title ?? 'In Action'}
          </p>
        </div>
      </div>

      <video
      className='w-full md:w-4/5 lg:w-3/4'
        width='1400'
        height='200'
        loop
        muted
        autoPlay
        style={{margin: '0 auto'}}
      >
        <source src='https://i.imgur.com/RR818yC.mp4' type='video/mp4' />
      </video>
    </section>
  )
}

export default Video
