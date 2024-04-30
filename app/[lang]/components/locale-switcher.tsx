'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { i18n } from '@/i18n.config'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function LocaleSwitcher() {
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
    switch (pathName) {
      case '/en':
        return 'https://i.imgur.com/zUSSj3B.png'
        break

      case '/mk':
        return 'https://i.imgur.com/ikHeXm5.png'
        break

      case '/gr':
        return 'https://i.imgur.com/hgTegHx.png'
        break

      case '/rs':
        return 'https://i.imgur.com/78xbsBy.png'
        break

      case '/bg':
        return 'https://i.imgur.com/gRHAMfq.png'
        break

      case '/hr':
        return 'https://i.imgur.com/WtjJyHU.png'
        break

      case '/br':
        return 'https://i.imgur.com/jsN3xCT.png'
        break
      default:
        return 'https://i.imgur.com/zUSSj3B.png'
        break
    }
  }

  const getImageByLocale = (
    query: 'en' | 'mk' | 'gr' | 'rs' | 'bg' | 'hr' | 'br'
  ) => {
    switch (query) {
      case 'en':
        return 'https://i.imgur.com/zUSSj3B.png'
        break

      case 'mk':
        return 'https://i.imgur.com/ikHeXm5.png'
        break

      case 'gr':
        return 'https://i.imgur.com/hgTegHx.png'
        break

      case 'rs':
        return 'https://i.imgur.com/78xbsBy.png'
        break

      case 'bg':
        return 'https://i.imgur.com/gRHAMfq.png'
        break

      case 'hr':
        return 'https://i.imgur.com/WtjJyHU.png'
        break

      case 'br':
        return 'https://i.imgur.com/jsN3xCT.png'
        break

      default:
        return 'https://i.imgur.com/zUSSj3B.png'
        break
    }
  }

  const getRemainingLocales = () => {
    return i18n.locales.filter(locale => locale !== activeLocale.split('/')[1])
  }
  return (
    <>
      <div className='sm:basos-2/12 relative block basis-3/12 md:basis-2/12 lg:basis-1/12'>
        
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

          <Image src={getImage()} alt={''} width={40} height={40} />
        </button>

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
            <ul className='flex flex-col gap-x-3 gap-y-2 md:gap-y-0 p-4 md:flex-row'>
              {getRemainingLocales().map(locale => {
                return (
                  <li key={locale} className='flex items-center justify-center'>
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

      {/* <div className='hidden lg:block'>
        <ul className='flex gap-x-3'>
          {i18n.locales.map(locale => {
            return (
              <li key={locale}>
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
      </div> */}
    </>
  )
}
