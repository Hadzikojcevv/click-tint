'use client'

import { useForm } from '@formspree/react'
import { useState } from 'react'
import Swal from 'sweetalert2'

class Partner {
  dateCreated: Date
  email: string

  constructor(dateCreated: Date, email: string) {
    this.dateCreated = dateCreated
    this.email = email
  }
}

const PartnerForm = ({ lang }: any) => {
  const [emailInp, setEmailInp] = useState('')
  const [state, handleSubmit] = useForm("xgegpyel")

  const onSubmit = (date: Date, email:string) => {

    const newPartner = new Partner(date, email)

    fetch('https://stupendous-scalloped-vanadium.glitch.me/partners', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPartner)
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`)
        }

        console.log(res.json())
      })
      .then(data => {
        console.log('Success', data)
      })
  }

  if (state.succeeded) {
    Swal.fire({
      title: lang.footer?.partner?.confirmation ?? 'Send us your email*',
      text:
        lang.footer?.partner?.confirmationDesc ?? 'You Will be contacted shortly.',
      icon: 'success',
      confirmButtonColor: '#0CD7CD'
    })

  }

  if (state.errors) {
    Swal.fire({
      title: lang.footer?.partner?.error ?? 'Some Error Ocured!',
      text: lang.footer?.partner?.errorDesc ?? 'Please Try Again.',
      icon: 'error',
      confirmButtonColor: '#0CD7CD'
    })

  }

  return (
    <form className='m-auto flex w-11/12 justify-between lg:w-5/12' onSubmit={e => {
      e.preventDefault()
      handleSubmit(e)
      onSubmit(new Date(), emailInp)
      e.currentTarget.reset()
    }}>
      <input
        type='email'
        placeholder={lang.footer?.partner?.emailPlaceholder ?? 'Send us your email*'}
        required
        className='w-full rounded-sm rounded-l-md border-2 border-custom p-2 shadow-sm outline-none'
        onChange={e => setEmailInp(e.target.value)}
        name='Partner:'

      />
      <button
        type='submit'
        className='w-4/12 cursor-pointer rounded-r-md border-2 border-custom bg-custom font-semibold uppercase text-white transition-colors delay-75 hover:bg-white hover:text-custom'
      >
        {lang.footer?.partner?.btn ?? 'Submit'}
      </button>
    </form>
  )
}

export default PartnerForm
