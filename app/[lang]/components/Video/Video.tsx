import Image from 'next/image'
import React from 'react'

const Video = () => {
  return (
    <section className='def-padding'>
      <div className='flex flex-col items-center justify-center'>
        <Image
          loading='lazy'
          src={'https://i.imgur.com/nCrWo6d.png'}
          alt='Logo'
          width={400}
          height={400}
        />
        <p className='mt-4 text-center text-xl font-thin uppercase tracking-widest text-neutral-500 md:text-2xl'>
          Video Section
        </p>
      </div>
      <div className='def-padding m-auto w-full md:w-6/12 lg:w-6/12'>
        {/* <div className='basis-full p-8 md:basis-2/3 md:p-16 lg:p-20 flex justify-center items-center text-center md:text-left'>
          <div>
            <h2 className='text-2xl font-bold lg:text-6xl '>Some Fancy Title</h2>
            <ul className='list-disc marker:text-custom marker:text-2xl ml-20'>
              <li className='text-2xl mb-2'>Elegant</li>
              <li className='text-2xl mb-2'>Modern</li>
              <li className='text-2xl mb-2'>Smart</li>
              <li className='text-2xl mb-2'>A click away from privacy</li>
              <li className='text-2xl mb-2'>A Home Movie Teatre</li>
              <li className='text-2xl mb-2'>UV protection</li>
              <li className='text-2xl mb-2'>Bla Bla</li>
              <li className='text-2xl'>Bla Bla</li>
            </ul>
          </div>
        </div> */}
        <video
          muted
          autoPlay
          loop
          width='400'
          height='400'
          className='rounded-md shadow-xl m-auto w-11/12'
        >
          <source src='https://i.imgur.com/wMXYKR4.mp4' type='video/mp4' />
        </video>
      </div>
    </section>
  )
}

export default Video
