'use client'
import { useForm } from '@formspree/react'
import React, { useRef, useState } from 'react'

type FormProps = {
  lang: any
}

type FormDataType = {
  name: string
  email: string
  tel: string | number
  location: string
  company?: string
  message?: string
}

const Form = ({ lang }: FormProps) => {
  
  const [state, handleSubmit] = useForm('mrgwnngw')
  const form = useRef<HTMLFormElement>(null)

  if (state.succeeded) {
    alert('succed')
    form.current!.reset()
  }

  if (state.errors) {
    alert('error')
    form.current!.reset()

  }

  return (
    <form
      ref={form}
      className='mt-6 flex basis-1/2 flex-col gap-3 lg:mt-0'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        className=' border-thin rounded-sm p-2 outline-none shadow-sm'
        placeholder={lang.home.form?.inputs?.name ?? 'Name'}
        name='Name'
      />
      <div className='flex flex-col justify-between gap-4 lg:flex-row'>
        <input
          type='email'
          className='border-thin  basis-1/2 rounded-sm p-2 outline-none shadow-sm'
          placeholder={lang.home.form?.inputs?.email ?? 'E-mail'}
          name='E-Mail'
        />
        <input
          type='tel'
          className='border-thin  basis-1/2 rounded-sm p-2 outline-none shadow-sm'
          placeholder={lang.home.form?.inputs?.tel ?? 'Telephone'}
          name='Telephone Number'
        />
      </div>

      <div className='flex flex-col justify-between gap-4 lg:flex-row'>
        <input
          type='text'
          className='border-thin  basis-1/2 rounded-sm p-2 outline-none shadow-sm'
          placeholder={lang.home.form?.inputs?.location ?? 'Location'}
          name='Location'
        />
        <input
          type='text'
          className='border-thin  basis-1/2 rounded-sm p-2 outline-none shadow-sm'
          placeholder={lang.home.form?.inputs?.company ?? 'Company Name'}
          name='Company Name'
        />
      </div>

      <textarea
        name='Message'
        cols={30}
        rows={10}
        placeholder={lang.home.form?.inputs?.message ?? 'Your Message'}
        className='border-thin rounded-sm p-2 outline-none shadow-xl'
      ></textarea>
      <button
        type='submit'
        className='bg-primary w-full rounded-sm p-3 font-semibold text-white outline-none shadow-xl hover:bg-white hover:text-custom transition-colors ease-in-out delay-75'
      >
        {lang.home.form?.inputs?.btn ?? 'Ask For Price...'}
      </button>
    </form>
  )
}

export default Form
