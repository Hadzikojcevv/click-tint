import React from 'react'
import MainCta from '../Shared/MainCta'
import Link from 'next/link'
import WheelAnimation from './WheelAnimation'

const Wheel = () => {
  return (
    <section
      style={{
        backgroundImage: 'url("https://i.imgur.com/IW8FxTv.jpg")',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh'
      }}
    >
      <div className='flex flex-col items-center justify-between lg:flex-row overlay' style={{ height: '100vh'}}>
        <div className='flex basis-1/2 items-center justify-center text-center lg:text-left'>
          <div>
            <h2 className='lg:text-7xl text-5xl font-bold text-white mb-4'>Зошто Click-Tint ?</h2>
            <p className='lg:text-2xl text-xl font-semibold text-white mb-4'>desc sdgjdvpjkdns kjsdnvkjadnfbvjkn </p>
            <Link href={'#mainForm'}>
              <MainCta text={'Побарајте Понуда'} />
            </Link>
          </div>
        </div>

        <WheelAnimation />
      </div>
    </section>
  )
}

export default Wheel
