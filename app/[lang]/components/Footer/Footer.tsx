import { getDictionary } from '@/lib/dictionary'
import Image from 'next/image'
import Link from 'next/link'
import logo from "../../../../public/assets/logo.png"
import fb from "../../../../public/fb.svg"
import insta from "../../../../public/instagram.svg"
import whatsApp from "../../../../public/whatsApp.svg"
import MainCta from '../Shared/MainCta'


const Footer = async ({ lang }: { lang: any }) => {

    const  page = await getDictionary(lang)

  

  return (
    <footer className='pt-16 bg-tetriary'>
      <div className='md:w-9/12 w-11/12 m-auto text-white text-lg flex flex-col md:flex-row gap-4 lg:gap-0 justify-between sm:items-center'>
        <Image src={"https://i.imgur.com/MtQoYOC.png"} alt='Logo' width={200} height={200} />
        <div className='text-md'>
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
      <div className='md:w-9/12 w-11/12 m-auto border-thin-top-white mt-8 py-4 text-white flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between'>
        <p className='text-sm order-2 md:order-1'>© 2024 Click Tint</p>
        <div className='flex gap-4 items-center order-1 md:order-2'>
            <Link href={'/'}>
                <MainCta text={page.footer.btn ?? "Ask For Price!"}/>
            </Link>
            <Link href={"/"}>
                <Image src={insta} alt='instagram' width={30} height={30}/>
            </Link>
            <Link href={"/"}>
                <Image src={fb} alt='instagram' width={30} height={30}/>
            </Link>
            <Link href={"/"}>
                <Image src={whatsApp} alt='instagram' width={30} height={30}/>
            </Link>

        </div>
      </div>
    </footer>
  )
}

export default Footer
