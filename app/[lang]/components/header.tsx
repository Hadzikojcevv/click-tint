import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import Image from 'next/image'
import LocaleSwitcher from './locale-switcher'

export default async function Header({ lang }: { lang: Locale }) {
  // const { navigation } = await getDictionary(lang)

  return (
    <header className='bg-secondary header fixed left-0 right-0 top-0 z-50 py-7 shadow-xl'>
      <nav className='container flex items-center justify-between'>
        <div className='flex items-center basis-6/12'>
          <Image
            src={'https://i.imgur.com/MtQoYOC.png'}
            alt='Logo'
            width={200}
            height={50}
          />
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
