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
    className='overflow-hidden '
      style={{
        backgroundImage: 'url("https://i.imgur.com/IW8FxTv.jpg")',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '120vh'
      }}
    >
      <div className='flex flex-col items-center justify-between lg:flex-row overlay def-padding' style={{ height: '120vh'}}>
        <div className='flex basis-1/2 items-center justify-center text-center lg:text-left'>
          <div className='md:w-full w-11/12 m-auto px-4 md:px-10 text-center'>
            
            <Link href={'#mainForm'}>
              <MainCta text={lang.home.wheel?.btn ?? ''} />
            </Link>
          </div>
        </div>

        <WheelAnimation lang={lang}/>
      </div>
    </section>
  )
}

export default Wheel
