'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {
  const admin = sessionStorage.getItem('access')
  const pathname = usePathname()
  const routher = useRouter()

  return (
    <header className='flex flex-col items-center justify-between'>
      <nav className='m-auto flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 w-full items-center justify-between py-4 lg:w-8/12'>
        <Image
          src={'https://i.imgur.com/MtQoYOC.png'}
          alt='Logo'
          width={300}
          height={50}
        />
        {admin && (
          <div className='flex flex-col lg:flex-row lg:gap-x-4 justify-center items-center'>
            <h1 className='text-lg '>
              Welcome <span className='font-semibold'>{admin}.</span>
            </h1>
            <button
            className='border-2 border-custom p-1 rounded-md font-semibold text-sm uppercase text-custom' 
            onClick={() => {
              sessionStorage.removeItem('access')
              routher.push('/en/private-adm-tint')
            }}>Logout</button>
          </div>
        )}
      </nav>
      <ul className='flex w-full justify-between'>
        <li
          className={`flex basis-1/2 items-center justify-center border-2  border-custom py-2 text-lg font-semibold ${
            pathname.includes('contacts')
              ? 'bg-custom text-white'
              : 'bg-white text-custom'
          }`}
        >
          <Link href={'/en/private-adm-tint/contacts'}> View Contacts </Link>
        </li>
        <li
          className={`flex basis-1/2 items-center justify-center border-2 border-custom py-2 text-lg font-semibold ${
            pathname.includes('partners')
              ? 'bg-custom text-white'
              : 'bg-white text-custom'
          }`}
        >
          <Link href={'/en/private-adm-tint/partners'}> View Partners </Link>
        </li>
      </ul>
    </header>
  )
}

export default Navbar
