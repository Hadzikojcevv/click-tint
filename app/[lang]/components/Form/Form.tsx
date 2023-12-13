import React from 'react'

type FormProps = {
    lang: any
}

const Form = ({lang}: FormProps) => {
  return (
    <form className='flex basis-1/2 flex-col gap-3 mt-6 lg:mt-0'>
      <input type='text' className=' border-thin p-2 rounded-sm outline-none' placeholder={lang.home.form?.inputs?.name ?? "Name"} />
      <div className='flex flex-col lg:flex-row justify-between gap-4'>
        <input type='email' className='basis-1/2  border-thin p-2 rounded-sm outline-none' placeholder={lang.home.form?.inputs?.email ?? "E-mail"} />
        <input type='tel' className='basis-1/2  border-thin p-2 rounded-sm outline-none' placeholder={lang.home.form?.inputs?.tel ?? "Telephone"} />
      </div>

      <div className='flex flex-col lg:flex-row justify-between gap-4'>
        <input type='text' className='basis-1/2  border-thin p-2 rounded-sm outline-none' placeholder={lang.home.form?.inputs?.location ?? "Location"} />
        <input type='text' className='basis-1/2  border-thin p-2 rounded-sm outline-none' placeholder={lang.home.form?.inputs?.company ?? "Company Name"} />
      </div>

      <textarea name='' id='' cols={30} rows={10} placeholder={lang.home.form?.inputs?.message ?? "Your Message"} className='border-thin p-2 rounded-sm outline-none'></textarea>
      <button type='submit' className='bg-primary w-full p-2 rounded-sm outline-none text-white'>
      {lang.home.form?.inputs?.btn ?? "Ask For Price..."}
      </button>
    </form>
  )
}

export default Form
