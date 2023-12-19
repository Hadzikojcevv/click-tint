import Link from 'next/link'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import LocaleSwitcher from './locale-switcher'
import Image from 'next/image'
import logo from "../../../public/assets/logo.png"
import page from '../page'
import MainCta from './Shared/MainCta'

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang)

  return (
    <header className='py-7 bg-secondary shadow-xl fixed left-0 right-0 top-0 z-50 header'>
      <nav className='container flex items-center justify-between '>
        <div className='flex items-center gap-8'>
        <Image src={'https://i.imgur.com/MtQoYOC.png'} alt='Logo' width={200} height={50}/>
        {/* <ul className='flex gap-x-8 uppercase font-semibold text-tetriary'>
          <li>
            <Link href={`/${lang}`}>{navigation.home}</Link>
          </li>
          <li>
            <Link href={`/${lang}/about`}>{navigation.about}</Link>
          </li>
        </ul> */}
        
        </div>
        
        
        <LocaleSwitcher />

      </nav>
    </header>
  )
}
