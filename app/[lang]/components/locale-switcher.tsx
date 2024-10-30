'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { i18n, Locale } from '@/i18n.config'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function LocaleSwitcher({
  lang,
  navigation
}: {
  lang: Locale
  navigation: any
}) {
  const pathName = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  const activeLocale = pathName

  const getImage = () => {
    switch (lang) {
      case 'en':
        return 'https://i.imgur.com/zUSSj3B.png'

      case 'mk':
        return 'https://i.imgur.com/ikHeXm5.png'

      case 'gr':
        return 'https://i.imgur.com/hgTegHx.png'

      case 'rs':
        return 'https://i.imgur.com/78xbsBy.png'

      case 'bg':
        return 'https://i.imgur.com/gRHAMfq.png'

      // case 'hr':
      //   return 'https://i.imgur.com/WtjJyHU.png'

      // case 'br':
      //   return 'https://i.imgur.com/jsN3xCT.png'
      // case 'nl':
      //   return 'https://i.imgur.com/vDGEk5e.png'
      default:
        return 'https://i.imgur.com/zUSSj3B.png'
    }
  }

  const getImageByLocale = (
    // query: 'en' | 'mk' | 'gr' | 'rs' | 'bg' | 'hr' | 'br' | 'nl'   ORIGINAL SO SITE LANGS
    query: 'en' | 'mk' | 'gr' | 'rs' | 'bg'
  ) => {
    switch (query) {
      case 'en':
        return 'https://i.imgur.com/zUSSj3B.png'

      case 'mk':
        return 'https://i.imgur.com/ikHeXm5.png'

      case 'gr':
        return 'https://i.imgur.com/hgTegHx.png'

      case 'rs':
        return 'https://i.imgur.com/78xbsBy.png'

      case 'bg':
        return 'https://i.imgur.com/gRHAMfq.png'

      // case 'hr':
      //   return 'https://i.imgur.com/WtjJyHU.png'

      // case 'br':
      //   return 'https://i.imgur.com/jsN3xCT.png'
      // case 'nl':
      //   return 'https://i.imgur.com/vDGEk5e.png'
      default:
        return 'https://i.imgur.com/zUSSj3B.png'
    }
  }

  const getRemainingLocales = () => {
    return i18n.locales.filter(locale => locale !== activeLocale.split('/')[1])
  }

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathName])

  return (
    <>
      <div className='sm:basos-2/12 relative flex items-center justify-end gap-x-2 lg:basis-1/12'>
        <Link
          href={`/${lang}/contact`}
          className='text-tetriary text-lg font-semibold capitalize lg:hidden lg:text-xl'
        >
          {navigation.contact}
        </Link>

        <button
          className='flex w-full items-center justify-between rounded-l-full rounded-r-full bg-white p-2'
          onClick={() => {
            setIsMenuOpen(!isMenuOpen)
          }}
        >
          <motion.span
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={'https://i.imgur.com/PyET8E7.png'}
              alt={'Open Menu'}
              width={40}
              height={40}
            />
          </motion.span>

          <Image
            src={getImage()}
            alt={'Menu Icon'}
            width={40}
            height={40}
            className='hidden lg:inline-block'
          />
        </button>
        <div className='flex justify-end'>
          {isMenuOpen && (
            <motion.div
              className=' absolute rounded-2xl bg-white'
              style={{
                top: '95%',
                right: '0%'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ul className='flex flex-col gap-x-3 gap-y-2 p-4 md:flex-row md:gap-y-0'>
                {getRemainingLocales().map(locale => {
                  return (
                    <li
                      key={locale}
                      className='flex items-center justify-center'
                    >
                      <Link
                        type='button'
                        aria-label='Change Language'
                        href={redirectedPathName(locale)}
                        scroll={false}
                        style={{ width: '50px', height: '50px' }}
                        className='rounded-full bg-white font-semibold uppercase text-custom'
                      >
                        <Image
                          src={getImageByLocale(locale)}
                          alt='Country Flag'
                          width={50}
                          height={50}
                          className='border-thin rounded-full shadow-xl transition-transform delay-75 duration-150 ease-in-out hover:scale-105'
                        />
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </>
  )
}
