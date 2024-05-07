'use client'
import { useForm } from '@formspree/react'
import { ChangeEvent, MouseEvent, useRef, useState } from 'react'
import Swal from 'sweetalert2'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { usePathname } from 'next/navigation'
import ReactFlagsSelect from 'react-flags-select'

export const countries = ["GR", "MK", "HR", "RS", "BR", "BG"]

type FormProps = {
  lang: any
}

class Contact {
  dateCreated: Date
  name: string
  email: string
  phone: string
  location?: string
  companyName?: string
  isAnswered: boolean
  country: string

  constructor(
    dateCreated: Date,
    name: string,
    email: string,
    phone: string,
    location: string,
    companyName: string,
    country: string
  ) {
    this.dateCreated = dateCreated
    this.name = name
    this.email = email
    this.phone = phone
    this.location = location
    this.companyName = companyName
    this.isAnswered = false
    this.country = country
  }
}

const Form = ({ lang }: FormProps) => {
  const pathname = usePathname()

  const [state, handleSubmit] = useForm('xgegpyel')
  // const [state, handleSubmit] = useForm("mrgwnngw")

  const pathnameFormulated = pathname.split('/')[1].toUpperCase()
  

  const form = useRef<HTMLFormElement>(null)
  const [phoneNum, setPhoneNum] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(pathnameFormulated);

  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const locationRef = useRef<HTMLInputElement>(null)
  const companyNameRef = useRef<HTMLInputElement>(null)
  

  const country = pathname.split('/')[1]

  const onSubmit = (
    dateCreated: Date,
    name: any,
    email: any,
    phone: any,
    location: any,
    company: any,
    country: any
  ) => {
    const NewContact = new Contact(
      dateCreated,
      name,
      email,
      phone,
      location,
      company,
      country
    )

    fetch('https://stupendous-scalloped-vanadium.glitch.me/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(NewContact)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        console.log(response.json())
      })
      .then(data => {
        console.log('Success', data)
      })
      .catch(error => {
        form.current!.reset()
        console.error('Error:', error)
      })

      setSelectedCountry('')
  }

  if (state.succeeded) {
    Swal.fire({
      title: lang.home.form?.confirmation ?? 'Success!',
      text:
        lang.home.form?.confirmationDesc ?? 'You Will be contacted shortly.',
      icon: 'success',
      confirmButtonColor: '#0CD7CD'
    })

    // form.current!.reset()
  }

  if (state.errors) {
    Swal.fire({
      title: lang.home.form?.error ?? 'Some Error Ocured!',
      text: lang.home.form?.errorDesc ?? 'Please Try Again.',
      icon: 'error',
      confirmButtonColor: '#0CD7CD'
    })

    // form.current!.reset()
  }

  return (
    <form
      ref={form}
      className='mt-6 flex basis-1/2 flex-col gap-3 lg:mt-0'
      onSubmit={e => {
        e.preventDefault()
        handleSubmit(e)
        onSubmit(
          new Date(),
          nameRef.current?.value,
          emailRef.current?.value,
          phoneNum,
          locationRef.current?.value,
          companyNameRef.current?.value,
          selectedCountry
        )
        e.currentTarget.reset()
      }}
    >
      <input
        type='text'
        ref={nameRef}
        className=' border-thin rounded-sm p-2 shadow-sm outline-none'
        placeholder={`${lang.home.form?.inputs?.name}*` ?? 'Name*'}
        name='Name'
        required
      />
      <div className='flex flex-col justify-between gap-4 lg:flex-row'>
        <input
          type='email'
          ref={emailRef}
          className='border-thin  basis-1/2 rounded-sm p-2 shadow-sm outline-none'
          placeholder={`${lang.home.form?.inputs?.email}*` ?? 'E-mail*'}
          name='E-Mail'
          required
        />
        <PhoneInput
          country={country === 'en' ? 'mk' : country}
          value={phoneNum}
          preferredCountries={['mk', 'gr', 'al', 'bg', 'rs', 'ba', 'xk']}
          inputProps={{
            name: 'Phone Number',
            required: true
          }}
          containerClass='phoneContainer'
          inputClass='inputPhoneContainer'
          containerStyle={{
            flexBasis: '50%'
          }}
          inputStyle={{
            width: '100%',
            height: '100%'
          }}
          onBlur={(e: any) => {
            setPhoneNum(e.target.value)
          }}
        />
      </div>

      <div className='flex flex-col justify-between gap-4 lg:flex-row'>
        <input
          type='text'
          className='border-thin  basis-1/2 rounded-sm p-2 shadow-sm outline-none'
          placeholder={`${lang.home.form?.inputs?.location}*` ?? 'Location*'}
          name='Location'
          ref={locationRef}
          required
        />
        <input
          type='text'
          className='border-thin  basis-1/2 rounded-sm p-2 shadow-sm outline-none'
          placeholder={lang.home.form?.inputs?.company ?? 'Company Name'}
          name='Company Name'
          ref={companyNameRef}
        />
      </div>
      <div className='flex flex-col justify-between gap-4 lg:flex-row'>
        {/* <input
          type='number'
          className='basis-1/2 rounded-sm border-2 border-custom p-2 shadow-sm outline-none'
          placeholder={lang.home.form?.inputs?.width ?? 'Width'}
          name='Width'
        />
        <input
          type='number'
          className='basis-1/2 rounded-sm border-2 border-custom p-2 shadow-sm outline-none'
          placeholder={lang.home.form?.inputs?.height ?? 'Height'}
          name='Height'
        /> */}
        <ReactFlagsSelect
          selected={selectedCountry}
          onSelect={code => setSelectedCountry(code)}
          placeholder={`${lang.home.form?.inputs?.country}*` ?? 'Your Country *'}
          searchable
          countries={countries}
          fullWidth
          className='countrySelector'
          selectButtonClassName="menuFlagsButton"
        />
        <input
          type='text'
          className='hidden'
          name='Country'
          value={selectedCountry}
          readOnly
        />
      </div>

      <textarea
        name='Message'
        cols={30}
        rows={10}
        placeholder={lang.home.form?.inputs?.message ?? 'Your Message'}
        className='border-thin rounded-sm p-2 shadow-xl outline-none'
      ></textarea>
      <p className='text-md text-primary italic'>{lang.home.form?.message}</p>

      <button
        type='submit'
        aria-label='Submit Form'
        disabled={selectedCountry === "" ? true : false}
        className={` w-full rounded-sm p-3 font-semibold text-white shadow-xl outline-none transition-colors delay-75 ease-in-out   ${selectedCountry === "" ? "bg-gray-400" : "bg-primary hover:bg-white hover:text-custom"}`}
      >
        {lang.home.form?.inputs?.btn ?? 'Ask For Price...'}
      </button>
    </form>
  )
}

export default Form
