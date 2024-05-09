'use client'
import Image from 'next/image'
import { redirect, useRouter } from 'next/navigation'
import React, { useState } from 'react'

const LoginForm = () => {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [isMessageShown, setIsMessageShows] = useState(false)
  const router = useRouter()

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (user === 'Vlatko' || (user === 'Dionissi' && pass === 'click')) {
      sessionStorage.setItem('access', user)

      router.push('http://localhost:3000/en/private-adm-tint/contacts')
    } else {
      setIsMessageShows(true)
    }
  }

  return (
    <>
      {isMessageShown && (
        <div className='relative rounded-sm border-2 border-red-500 px-2 py-6'>
          <button className='absolute right-1 top-1' onClick={() => setIsMessageShows(false)}>
            <Image
              src={'https://i.imgur.com/zgzNz7d.png'}
              alt={''}
              width={15}
              height={15}
            />
          </button>
          <h2 className='text-red-600 font-semibold'>Wrong Credentials....Try Again</h2>
        </div>
      )}

      <form
        className='flex flex-col gap-y-4 rounded-sm border-2 border-custom p-4'
        onSubmit={e => {
          onSubmit(e)
          e.currentTarget.reset()
        }}
      >
        <div className='flex flex-col gap-y-2'>
          <label htmlFor='user'>Username:</label>
          <input
            onChange={e => setUser(e.currentTarget.value)}
            value={user}
            type='text'
            id='user'
            className='basis-1/2 rounded-sm border-2 border-custom p-2 shadow-sm outline-2 outline-custom'
          />
        </div>
        <div className='flex flex-col gap-y-2'>
          <label htmlFor='pass'>Password:</label>
          <input
            onChange={e => setPass(e.currentTarget.value)}
            value={pass}
            type='password'
            id='pass'
            className='basis-1/2 rounded-sm border-2 border-custom p-2 shadow-sm outline-2 outline-custom'
          />
        </div>
        <button
          className={`w-full rounded-sm border-2 border-custom bg-custom p-3 font-semibold text-white shadow-xl outline-none transition-colors delay-75 ease-in-out hover:bg-white hover:text-custom`}
        >
          Login
        </button>
      </form>
    </>
  )
}

export default LoginForm
