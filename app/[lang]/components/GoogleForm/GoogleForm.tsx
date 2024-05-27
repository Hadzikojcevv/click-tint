import Image from 'next/image'
import React from 'react'

const GoogleForm = ({ lang }: any) => {
  return (
    <section className='flex flex-col justify-center py-8 lg:flex-row'>
      <div className='flex basis-1/2 flex-col items-center justify-start gap-6 text-center'>
        <Image
          src={'https://i.imgur.com/SzTo7SW.png'}
          alt='Logo'
          width={600}
          height={300}
          className='mb-16'
        />
        <h2 className='text-5xl font-bold lg:text-7xl'>
          {lang.home.form?.title ?? ''}
        </h2>
        <h3 className='text-2xl font-bold lg:text-4xl '>
          {lang.home.form?.subtitle ?? ''}
          <b className='text-primary text-3xl text-custom'> Click.</b>
        </h3>
        <h4 className='font semibold text-2xl lg:text-4xl'>
          {lang.home.form?.desc ?? ''}
        </h4>
        <p className='text-xl font-semibold lg:text-2xl'>
          {lang.home.form?.anime ?? ''}
          <b className='text-primary text-3xl text-custom'> Click.</b>
        </p>
      </div>
      <div className='basis-1/2 googleFormContainer mt-16 lg:mt-0'>
        <iframe
          className='googleForm'
          src='https://docs.google.com/forms/d/e/1FAIpQLSctaIyfPEAkinnYDXfX3fuuB4-RI-cMLeaNWCjMEDiRv9-1Dw/viewform?embedded=true'
          width='100%'
          height='1500'
          style={{ minHeight: '100%' }}
        >
          Loading…
        </iframe>
      </div>
    </section>
  )
}

export default GoogleForm
