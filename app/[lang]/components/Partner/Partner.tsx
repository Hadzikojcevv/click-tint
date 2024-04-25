'use client'
import React from 'react'
import SectionTitleWithLogo from '../Shared/SectionTitleWithLogo'
import PartnerForm from './PartnerForm'
import { usePathname } from 'next/navigation'

const Partner = ({ lang }: any) => {
  const pathname = usePathname()

  if (pathname !== '/mk') {
    return (
      <section className='def-padding flex flex-col justify-center'>
        <div className='lg:w-6/12 justify-center flex flex-col items-center m-auto w-11/12'>
          <SectionTitleWithLogo title={lang.home?.partner?.title ?? 'Become a Partner'} />
        </div>
        <div className='flex w-full items-center justify-center'>
          <PartnerForm lang={lang}/>
        </div>
      </section>
    )
  }

  return <></>
}

export default Partner
