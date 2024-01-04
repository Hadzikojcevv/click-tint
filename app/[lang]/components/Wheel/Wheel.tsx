import React from 'react'
import MainCta from '../Shared/MainCta'
import Link from 'next/link'
import WheelAnimation from './WheelAnimation'


type WheelProps = {
    lang: any
  }

const Wheel = ({lang}: WheelProps) => {
  return (
    <section
    className='overflow-hidden'
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
          <div className='w-9/12 m-auto'>
            <h2 className='lg:text-7xl text-5xl font-bold text-white mb-4'>{lang.home.wheel?.title ?? ''} Click-Tint ?</h2>
            <p className='lg:text-xl text-xl font-semibold text-white mb-4'>{lang.home.wheel?.desc ?? ''}</p>
            <Link href={'#mainForm'}>
              <MainCta text={'Побарајте Понуда'} />
            </Link>
          </div>
        </div>

        <WheelAnimation lang={lang}/>
      </div>
    </section>
  )
}

export default Wheel
