'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { i18n } from '@/i18n.config'
import Image from 'next/image'

export default function LocaleSwitcher() {
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <ul className='flex gap-x-3'>
      {i18n.locales.map(locale => {
        return (
          <li key={locale.key}>
            <Link
              type='button'
              aria-label='Change Language'
              href={redirectedPathName(locale.key)}
              scroll={false}
              className='rounded-md  bg-white font-semibold uppercase text-custom'
            >
              <Image src={locale.flag} alt='Country Flag' width={51} height={44} className='border-thin shadow-xl hover:scale-105 transition-transform duration-150 delay-75 ease-in-out'/>
              
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
