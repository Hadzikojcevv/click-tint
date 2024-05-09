import Image from 'next/image'
import React from 'react'
import LoginForm from '../components/AdminPanel/LoginForm'

const Login =  () => {

  return (
    <section className='w-11/12 m-auto lg:w-6/12 flex justify-center items-center flex-col gap-y-6 h-screen'>
      <div>
      <Image
          src={'https://i.imgur.com/MtQoYOC.png'}
          alt='Logo'
          width={350}
          height={50}
        />
      <h1 className='pt-2 text-2xl font-thin uppercase tracking-widest text-neutral-700 text-center'>Login</h1>

      </div>
      <LoginForm />
    </section>
  )
}

export default Login