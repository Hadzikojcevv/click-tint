import { Locale } from '@/i18n.config'
import Image from 'next/image'
import React from 'react'
import logo from "../../../../public/assets/logo.png"
import { getDictionary } from '@/lib/dictionary'

const Footer = async ({ lang }: { lang: any }) => {

    const  page = await getDictionary(lang)

  

  return (
    <footer className='pt-16 bg-tetriary'>
      <div className='md:w-9/12 w-11/12 m-auto text-white text-lg flex justify-between items-center'>
        <Image src={logo} alt='Logo' width={200} height={200} />
        <div >
          <p>{page.footer.adress ?? "Adress"}</p>
          <p>{page.footer?.adressInfo ?? "Мarshal Тito 123 Gevgelija"}</p>
        </div>
        <div>
          <p>{page.footer?.mobile ?? "Telephone"}</p>
          <p>{page.footer?.mobileInfo ?? "Phone Number"}</p>
        </div>
        <div>
          <p>{page.footer?.email ?? "Email"}</p>
          <p>{page.footer?.emailInfo ?? "clicktint@yahoo.com"}</p>
        </div>
      </div>
      <div className='md:w-9/12 w-11/12 m-auto border-thin-top-white mt-8 py-4 text-white'>
        <p className='text-sm'>© 2024 Click Tint</p>
        <div>
            
        </div>
      </div>
    </footer>
  )
}

export default Footer
