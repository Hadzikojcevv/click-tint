'use client'
import React, { useEffect, useState } from 'react'
import { ContactType } from '../../private-adm-tint/contacts/page'
import ContactCard from './ContactCard'
import Sidebar from './Sidebar'
import Image from 'next/image'

const Main = () => {
  const [contacts, setContacts] = useState<ContactType[]>([])

    // STATUS: 2 - ALL , 1 - DONE, 0 - UNFINISHED (zatoa sho 0 e false)

  const [query, setQuery] = useState({
    status: 2,
    location: 'all'
  })
  const [location, setLocation] = useState('all')

  const today = new Date()

  const sevenDaysAgo = new Date(today)
  sevenDaysAgo.setDate(today.getDate() - 7)

  console.log(Boolean(query.status));
  

  useEffect(() => {
    fetch(`https://stupendous-scalloped-vanadium.glitch.me/contacts${query.status === 2 ? "" : `?isAnswered=${Boolean(query.status)}` }`)
      .then(res => res.json())
      .then(data => {
        setContacts(data)
      })
  }, [query])

  
  const lastWeeksContacts = contacts.slice().filter(
    (contact: ContactType) =>
      new Date(contact.dateCreated) >= new Date(sevenDaysAgo)
  )

  const handleAnswered = async (contact: ContactType, status: boolean) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...contact, isAnswered: status })
    }

    const response = await fetch(
      `https://stupendous-scalloped-vanadium.glitch.me/contacts/${contact.id}`,
      requestOptions
    )
    const data = await response.json()
  }

  const allLocations = contacts.map(contact => contact.location)

  return (
    <section
      className='flex gap-4'
      style={{ paddingTop: '60px', minHeight: '100vh' }}
    >
      <Sidebar title='Filters' side='left'>
        <>
          <div className='flex items-center gap-4 mb-4' onChange={e => {}}>
            <h3>Status:</h3>
            <div className='flex flex-col'>
              <label htmlFor=''>All</label>
              <input
                type='radio'
                name='status'
                value={2}
                onChange={e => setQuery({...query,status: +e.target.value})}
                checked={query.status === 2}
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor=''>Finished</label>
              <input
                type='radio'
                name='status'
                value={1}
                checked={query.status === 1}
                onChange={e => setQuery({...query,status: +e.target.value})}
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor=''>Unfinished</label>
              <input
                type='radio'
                name='status'
                value={0}
                checked={query.status === 0}
                onChange={e => setQuery({...query,status: +e.target.value})}
              />
            </div>
          </div>

          {/* <div className='flex items-center gap-4 mb-4' onChange={e => {}}>
            <h3>Location:</h3>
            <select name="location" id="location" className='border-2 border-custom rounded-md w-full'
                onChange={(e) => setQuery(e.target.value)}>
                <option value="">All</option>
                {allLocations.map((location, idx) => <option key={`${location} + ${idx}`} value={location}>{location}</option>)}
            </select>
          </div> */}
        </>
      </Sidebar>
      <div className='w-6/12'>
        {contacts.length > 0 ? (
          <ul className='m-auto w-full'>
            {contacts.map(contact => (
              <ContactCard key={contact.id} contact={contact} textSize='md'>
                <>
                  <label
                    htmlFor='chx'
                    className='flex items-center gap-2 font-bold'
                  >
                    <span>Status:</span>{' '}
                    {contact.isAnswered === true ? (
                      <Image
                        src={'https://i.imgur.com/0enckr2.png'}
                        alt={''}
                        width={20}
                        height={20}
                      />
                    ) : (
                      <Image
                        src={'https://i.imgur.com/zgzNz7d.png'}
                        alt={''}
                        width={15}
                        height={15}
                      />
                    )}
                  </label>

                  {!contact.isAnswered && (
                    <button
                      className='bg-primary rounded-md px-2 py-1 text-xs font-semibold text-white transition-colors delay-100 ease-out hover:bg-white hover:text-custom'
                      onClick={() => {
                        handleAnswered(contact, contact.isAnswered ? false : true)
                        setQuery({...query, status: 1})
                      }}
                    >
                      Mark As Done
                    </button>
                  )}
                </>
              </ContactCard>
            ))}
          </ul>
        ) : (
          <p className='font-xl text-center font-bold'>Nothing To Show</p>
        )}
      </div>
      <Sidebar title='Last Week' side='right'>
        <>
          {/* {lastWeeksContacts.length > 0 ? (
            <ul className='m-auto w-full'>
              {lastWeeksContacts.map(contact => (
                <ContactCard key={contact.id} contact={contact}>
                  <>
                    <label
                      htmlFor='chx'
                      className='flex items-center gap-2 font-bold'
                    >
                      <span>Status:</span>{' '}
                      {contact.isAnswered === true ? (
                        <Image
                          src={'https://i.imgur.com/0enckr2.png'}
                          alt={''}
                          width={20}
                          height={20}
                        />
                      ) : (
                        <Image
                          src={'https://i.imgur.com/zgzNz7d.png'}
                          alt={''}
                          width={15}
                          height={15}
                        />
                      )}
                    </label>

                    <button
                      className='bg-primary rounded-md px-2 py-1 text-sm font-semibold text-white transition-colors delay-100 ease-out hover:bg-white hover:text-custom'
                      onClick={() => {
                        handleAnswered(contact, contact.isAnswered ? false : true)
                        setQuery(contact.isAnswered ? {...query, status: 1} : {...query, status: 0})
                      }}
                    >
                      Change
                    </button>
                  </>
                </ContactCard>
              ))}
            </ul>
          ) : (
            <p className='font-xl text-center font-bold'>Nothing To Show</p>
          )} */}
        </>
      </Sidebar>
    </section>
  )
}

export default Main
