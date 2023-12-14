'use client'
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
  const [formData, setFormData] = useState<FormDataType>()

  const nameInput = useRef<HTMLInputElement>(null)
  const emailInput = useRef<HTMLInputElement>(null)
  const telInput = useRef<HTMLInputElement>(null)
  const locationInput = useRef<HTMLInputElement>(null)
  const companyInput = useRef<HTMLInputElement>(null)
  const messageInput = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = (e: any) => {
    e.preventDefault()

    setFormData({
      name: nameInput.current!.value,
      email: emailInput.current!.value,
      tel: telInput.current!.value,
      location: locationInput.current!.value,
      company: companyInput.current!.value,
      message: messageInput.current!.value
    })
  }

  return (
    <form
      className='mt-6 flex basis-1/2 flex-col gap-3 lg:mt-0'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        className=' border-thin rounded-sm p-2 outline-none'
        placeholder={lang.home.form?.inputs?.name ?? 'Name'}
        ref={nameInput}
      />
      <div className='flex flex-col justify-between gap-4 lg:flex-row'>
        <input
          type='email'
          className='border-thin  basis-1/2 rounded-sm p-2 outline-none'
          placeholder={lang.home.form?.inputs?.email ?? 'E-mail'}
          ref={emailInput}
        />
        <input
          type='tel'
          className='border-thin  basis-1/2 rounded-sm p-2 outline-none'
          placeholder={lang.home.form?.inputs?.tel ?? 'Telephone'}
          ref={telInput}
        />
      </div>

      <div className='flex flex-col justify-between gap-4 lg:flex-row'>
        <input
          type='text'
          className='border-thin  basis-1/2 rounded-sm p-2 outline-none'
          placeholder={lang.home.form?.inputs?.location ?? 'Location'}
          ref={locationInput}
        />
        <input
          type='text'
          className='border-thin  basis-1/2 rounded-sm p-2 outline-none'
          placeholder={lang.home.form?.inputs?.company ?? 'Company Name'}
          ref={companyInput}
        />
      </div>

      <textarea
        name=''
        id=''
        cols={30}
        rows={10}
        placeholder={lang.home.form?.inputs?.message ?? 'Your Message'}
        className='border-thin rounded-sm p-2 outline-none'
        ref={messageInput}
      ></textarea>
      <button
        type='submit'
        className='bg-primary w-full rounded-sm p-3 font-semibold text-white outline-none'
      >
        {lang.home.form?.inputs?.btn ?? 'Ask For Price...'}
      </button>
    </form>
  )
}

export default Form
