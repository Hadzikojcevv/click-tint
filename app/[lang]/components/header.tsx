import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import Image from 'next/image'
import LocaleSwitcher from './locale-switcher'
import Link from 'next/link'

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang)

  return (
    <header
      className='bg-secondary header fixed left-0 right-0 top-0 z-50 py-7 shadow-xl'
      style={{ height: '106px' }}
    >
      <nav
        className='container flex items-center justify-between'
        style={{ height: '50px' }}
      >
        <div className='flex basis-6/12 items-end gap-x-4'>
          <Link href={`/${lang}`} className=''>
            <Image
              src={'https://i.imgur.com/MtQoYOC.png'}
              alt='Logo'
              width={250}
              height={50}
            />
          </Link>
          <ul className='hidden lg:flex text-tetriary text-xs md:text-lg lg:text-xl  items-end gap-x-4 font-semibold capitalize'>
            <li>
              <Link href={`/${lang}/contact`} className=''>
                {navigation.contact}
              </Link>
            </li>
          </ul>
        </div>

        <LocaleSwitcher lang={lang} navigation={navigation}/>
      </nav>
    </header>
  )
}
