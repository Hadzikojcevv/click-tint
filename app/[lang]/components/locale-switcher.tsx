'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { i18n } from '@/i18n.config'
import Image from 'next/image'
import { useState } from 'react'

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

      default:
        return 'https://i.imgur.com/zUSSj3B.png'
        break
    }
  }

  const getImageByLocale = (query: 'en' | 'mk' | 'gr') => {
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

      default:
        return 'https://i.imgur.com/zUSSj3B.png'
        break
    }
  }

  return (
    <>
      <div className='block basis-4/12 lg:hidden'>
        <div className='flex justify-end '>
          {!isMenuOpen && (
            <button
              style={{ width: '50px', height: '50px' }}
              className='rounded-full bg-inherit bg-white font-semibold uppercase text-custom'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? undefined : (
                <Image
                  src={getImage()}
                  alt='Country Flag'
                  width={50}
                  height={50}
                  className='border-thin rounded-full shadow-xl transition-transform delay-75 duration-150 ease-in-out hover:scale-105'
                />
              )}
            </button>
          )}

          {isMenuOpen && (
            <ul
              className='absolute right-5 flex flex-row items-center gap-x-3'
              style={{
                top: '25%'
              }}
            >
              {i18n.locales.map(locale => {
                return (
                  <li
                    style={{ width: '50px', height: '50px' }}
                    className='rounded-full'
                    key={locale}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    <Link
                      type='button'
                      aria-label='Change Language'
                      href={redirectedPathName(locale)}
                      style={{ width: '50px', height: '50px' }}

                      scroll={false}
                      className='rounded-full bg-white font-semibold uppercase text-custom'
                    >
                      <Image
                        src={getImageByLocale(locale)}
                        alt='Country Flag'
                        width={50}
                        height={50}
                        className='rounded-full shadow-xl transition-transform delay-75 duration-150 ease-in-out hover:scale-105'
                      />
                    </Link>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>

      <div className='hidden lg:block'>
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
      </div>
    </>
  )
}
