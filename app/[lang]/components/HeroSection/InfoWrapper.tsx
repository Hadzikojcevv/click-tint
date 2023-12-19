import Image from 'next/image'
import React from 'react'
import remote from '../../../../public/assets/remoteControl.png'
import wallSwitch from '../../../../public/assets/switch.png'
import mobile from '../../../../public/assets/phone.png'
import { Locale } from '@/i18n.config'
import logo from "../../../../public/assets/logo.png"


type InfoWrapperProps = {
    lang: any
}

const InfoWrapper = ({lang}: InfoWrapperProps) => {
  return (
    <div className='def-padding'>
      <div className='flex justify-between items-center md:gap-16 md:w-6/12 w-11/12 m-auto text-primary uppercase'>
        <div className='flex flex-col items-center basis-1/3 w-3/12'>
            <Image src={"https://i.imgur.com/jLBCo6c.png"} width={50} height={100} alt='Remote Control' className='lg:w-2/12 w-4/12'/>
            <p className='text-sm md:text-xl mt-4'>{lang.home?.banner?.remote ?? 'Remote'}</p>

        </div>
        <div className='flex flex-col items-center basis-1/3'>
            <Image src={'https://i.imgur.com/82KO5Qa.png'} width={50} height={100} alt='Switch'className='lg:w-4/12 w-4/12'/>
            <p className='text-sm md:text-xl mt-4'>{lang.home?.banner?.switch ?? "Switch"}</p>

        </div>
        <div className='flex flex-col items-center basis-1/3'>
            <Image src={"https://i.imgur.com/jOzvCgt.png"} width={100} height={100} alt='Mobile Phone' className='lg:w-4/12 w-4/12'/>
            <p className='text-sm md:text-xl mt-4'>{lang.home?.banner?.mobile ?? "Mobile"}</p>

        </div>
      </div>
      <div className='md:w-8/12 w-11/12 m-auto flex lg:flex-row flex-col items-center justify-between def-padding gap-10'>
        <Image src={'https://i.imgur.com/MtQoYOC.png'} alt='Logo' width={450} height={450}/>
        
        <p className='text-xl lg:basis-1/2 text-center md:text-left'>
          <b className='text-primary font-bold text-4xl'>Click Tint </b>{lang.home.banner.description ?? "Tinted Windows"}
        </p>
      </div>
    </div>
  )
}

export default InfoWrapper
