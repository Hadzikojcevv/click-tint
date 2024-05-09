'use client'
import React, { useState } from 'react'
import { ContactType } from '../../private-adm-tint/contacts/page'
import Image from 'next/image'

type ContactCardPropsType = {
  contact: ContactType
  children: JSX.Element
  textSize?: string
}

const ContactCard = ({
  contact,
  children,
  textSize = 'xs'
}: ContactCardPropsType) => {
  const [isSectionOpen, setIsSectionOpen] = useState(false)

  return (
    <li className='image-tinter relative mb-4 rounded-md border-2 border-custom p-4 text-left shadow-xl'>
      <div className={`flex items-center justify-between gap-4 text-sm `}>
        <div className='w-1/2 overflow-hidden'>
          <div className='w-full lg:w-3/12'>
            <h2>
              <b>Name:</b>
            </h2>
            <p>{contact.name}</p>
          </div>

          <div className='w-full lg:w-3/12'>
            <h2>
              <b>Email:</b>
            </h2>
            <a
              href={`mailto:${contact.email}`}
              className='overflow-x-scroll text-blue-500 underline'
            >
              {contact.email}
            </a>
          </div>
        </div>

        <div className='w-1/2 flex items-center justify-end gap-x-8'>
          <div className='flex w-4/12 flex-col items-center gap-2 lg:w-5/12'>
            {children}
          </div>

          <button
            className='flex  justify-end'
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
      </div>

      {isSectionOpen && (
        <div className={`mt-2 border-t-2 border-custom pt-2 text-${textSize}`}>
          {contact.phone !== '' && (
            <p>
              <b>Phone:</b>{' '}
              <a
                href={`tel:${contact.phone}`}
                className='text-blue-500 underline'
              >
                {contact.phone}
              </a>
            </p>
          )}
          <p>
            <b>Country:</b> {contact.country}
          </p>
          <p>
            <b>Location:</b> {contact.location}
          </p>
          {contact.companyName !== '' && (
            <p>
              <b>Company:</b> {contact.companyName}
            </p>
          )}

          {contact.dateCreated && (
            <p>
              <b>Date:</b> {contact.dateCreated?.toString()}
            </p>
          )}
        </div>
      )}
    </li>
  )
}

export default ContactCard
