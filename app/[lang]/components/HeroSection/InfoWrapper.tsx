import Image from 'next/image'
import React from 'react'
import remote from '../../../../public/assets/remoteControl.png'
import wallSwitch from '../../../../public/assets/switch.png'
import mobile from '../../../../public/assets/phone.png'
import { Locale } from '@/i18n.config'

type InfoWrapperProps = {
    lang: any
}

const InfoWrapper = ({lang}: InfoWrapperProps) => {
  return (
    <div className='def-padding'>
      <div className='flex justify-between items-center md:gap-16 md:w-6/12 w-11/12 m-auto text-primary uppercase'>
        <div className='flex flex-col items-center basis-1/3 w-3/12'>
            <Image src={remote} alt='Remote Control' className='lg:w-2/12 w-3/12'/>
            <p className='text-sm md:text-xl mt-4'>{lang.home?.banner?.remote ?? 'Remote'}</p>

        </div>
        <div className='flex flex-col items-center basis-1/3'>
            <Image src={wallSwitch} alt='Switch'className='lg:w-4/12 w-3/12'/>
            <p className='text-sm md:text-xl mt-4'>{lang.home?.banner?.switch ?? "Switch"}</p>

        </div>
        <div className='flex flex-col items-center basis-1/3'>
            <Image src={mobile} alt='Mobile Phone' className='lg:w-4/12 w-3/12'/>
            <p className='text-sm md:text-xl mt-4'>{lang.home?.banner?.mobile ?? "Mobile"}</p>

        </div>
      </div>
      <div className='w-8/12 m-auto flex md:flex-row flex-col items-center justify-between def-padding gap-10'>
        {/* <Image src={''} alt='' width={} height={}/>
         */}
        <p className='text-8xl font-bold text-primary basis-1/2 text-center'>LOGO</p>
        <p className='text-xl basis-1/2 text-center md:text-left'>
        {lang.home.banner.description ?? "Tinted Windows"}
        </p>
      </div>
    </div>
  )
}

export default InfoWrapper
