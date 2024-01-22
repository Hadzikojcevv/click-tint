import { getDictionary } from '@/lib/dictionary'
import Image from 'next/image'
import Link from 'next/link'
import MainCta from '../Shared/MainCta'

const Footer = async ({ lang }: { lang: any }) => {
  const page = await getDictionary(lang)

  return (
    <>
      <footer className='bg-tetriary pt-16'>
        <div className='m-auto flex w-11/12 flex-col justify-between gap-4 text-lg text-white md:w-9/12 lg:flex-row lg:items-center lg:gap-0'>
          <Image
            src={'https://i.imgur.com/b2roawE.png'}
            alt='Logo'
            width={200}
            height={200}
          />
          <div className='text-md'>
            <p className='font-semibold'>{page.footer.adress ?? 'Adress'}</p>
            <p>{page.footer?.adressInfo ?? 'Мarshal Тito 123 Gevgelija'}</p>
          </div>
          <div>
            <p className='font-semibold'>
              {page.footer?.mobile ?? 'Telephone'}
            </p>
            <p>{page.footer?.mobileInfo ?? 'Phone Number'}</p>
          </div>
          <div>
            <p className='font-semibold'>{page.footer?.email ?? 'Email'}</p>
            <p>{page.footer?.emailInfo ?? 'clicktint@yahoo.com'}</p>
          </div>
        </div>
        <div className='border-thin-top-white m-auto mt-8 flex w-11/12 flex-col items-start gap-4 py-4 text-white md:w-9/12 md:flex-row md:items-center md:justify-start xl:justify-between'>
          <p className='order-2 text-sm md:order-1'>© 2024 Click Tint</p>
          <div className='order-1 flex items-center gap-4 md:order-2'>
            <Link href={'https://www.instagram.com/click.tint'}>
              <Image src={"https://i.imgur.com/BDLf7RY.png"} alt='Instagram' width={30} height={30} />
            </Link>
            <Link href={'https://www.facebook.com/profile.php?id=61555550410036'}>
              <Image src={'https://i.imgur.com/Y4mFOW5.png'} alt='Facebook Link' width={30} height={30} />
            </Link>
            <Link href={'/'}>
              <Image src={'https://i.imgur.com/ypdOvIm.png'} alt='WhatsApp Link' width={30} height={30} />
            </Link>
          </div>
        </div>
      </footer>

      <Link href='#mainForm' className='fixed bottom-3 right-3 z-50'>
        <MainCta text={page.footer.btn ?? 'Ask For Price!'} />
      </Link>
    </>
  )
}

export default Footer
