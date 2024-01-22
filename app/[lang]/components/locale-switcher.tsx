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
        return 'https://i.imgur.com/x3lVTnH.jpg'
        break

      case '/mk':
        return 'https://i.imgur.com/vRHwjaK.png'
        break

      default:
        return 'https://i.imgur.com/x3lVTnH.jpg'
        break
    }
  }

  return (
    <>
      <div className='block basis-4/12 lg:hidden'>
        <div className='flex justify-end '>
          <button
            className='rounded-md bg-white p-2 font-semibold uppercase text-custom bg-inherit'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              undefined
            ) : (
              <Image
                src={getImage()}
                alt='Country Flag'
                width={51}
                height={44}
                className='border-thin shadow-xl transition-transform delay-75 duration-150 ease-in-out hover:scale-105'
              />
            )}
          </button>

          {isMenuOpen && (
            <ul className='absolute right-10  flex flex-row gap-x-3 items-center' style={{
              top: '34%'
            }}>
              {i18n.locales.map(locale => {
                return (
                  <li key={locale} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <Link
                      type='button'
                      aria-label='Change Language'
                      href={redirectedPathName(locale)}
                      scroll={false}
                      className='rounded-md bg-white font-semibold uppercase text-custom'
                    >
                      <Image
                        src={
                          locale === 'en'
                            ? 'https://i.imgur.com/x3lVTnH.jpg'
                            : 'https://i.imgur.com/vRHwjaK.png'
                        }
                        alt='Country Flag'
                        width={51}
                        height={44}
                        className='border-thin shadow-xl transition-transform delay-75 duration-150 ease-in-out hover:scale-105'
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
                  className='rounded-md bg-white font-semibold uppercase text-custom'
                >
                  <Image
                    src={
                      locale === 'en'
                        ? 'https://i.imgur.com/x3lVTnH.jpg'
                        : 'https://i.imgur.com/vRHwjaK.png'
                    }
                    alt='Country Flag'
                    width={51}
                    height={44}
                    className='border-thin shadow-xl transition-transform delay-75 duration-150 ease-in-out hover:scale-105'
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
