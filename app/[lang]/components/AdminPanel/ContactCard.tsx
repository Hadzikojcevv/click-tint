'use client'
import React, { useState } from 'react'
import { ContactType } from '../../private-adm-tint/page'
import Image from 'next/image'

type ContactCardPropsType = {
  contact: ContactType
}

const ContactCard = ({
  contact: {
    dateCreated = new Date(),
    name,
    email,
    phone,
    location,
    companyName
  }
}: ContactCardPropsType) => {
  const [isSectionOpen, setIsSectionOpen] = useState(false)
  console.log(dateCreated)

  return (
    <li className='image-tinter relative mb-4 rounded-md border-2 border-custom p-4 text-left shadow-xl'>
      <div className='flex items-center gap-4'>
        <h2 className='w-3/12'>
          <b>Name:</b> {name}
        </h2>
        <p className='w-4/12'>
          <b>Email:</b> {email}
        </p>
        <button
          className='flex w-5/12 justify-end'
          onClick={() => setIsSectionOpen(!isSectionOpen)}
        >
          <Image
            src={'https://i.imgur.com/PyET8E7.png'}
            alt='Arrow'
            width={30}
            height={30}
            style={{
              transform: isSectionOpen ? `rotate(180deg)` : ``,
              transition: 'all 0.5s ease-in-out'
            }}
          />
        </button>
      </div>

      {isSectionOpen && (
        <div>
          {phone !== '' && <p>Phone: {phone}</p>}
          <p>Location: {location}</p>
          {companyName !== '' && <p>Company: {companyName}</p>}
          <p>Date: {dateCreated?.toDateString()}</p>
        </div>
      )}
    </li>
  )
}

export default ContactCard
