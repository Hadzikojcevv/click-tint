'use client'

import Image from 'next/image'
import ContactCard from '../../components/AdminPanel/ContactCard'
import Main from '../../components/AdminPanel/Main'
import Sidebar from '../../components/AdminPanel/Sidebar'
import Filters from '../../components/AdminPanel/Filters'
import ChangeStatusBtn from '../../components/AdminPanel/ChangeStatusBtn'
import { countries } from '../../components/Form/Form'
import { useEffect, useState } from 'react'
import { redirect } from 'next/navigation'
import Navbar from '../../components/AdminPanel/Navbar'

export type ContactType = {
  id: number
  dateCreated: Date
  name: string
  email: string
  phone: string
  location?: string
  country: string
  companyName?: string
  isAnswered: boolean
}

const PrivateAdmPage = ({ searchParams }: any) => {
  const [contacts, setContacts] = useState<ContactType[]>([])
  const isAnswered = searchParams.isAnswered
  const country = searchParams.country
  const user = sessionStorage.getItem('access')

  const finalFilter = () => {
    const isUserGreek = user === 'Dionissi'

    console.log(isUserGreek);
    

    let query

    if(isUserGreek) {
      if (isAnswered && country) {
        query = `?isAnswered=${isAnswered}&country=GR`
      } else if (isAnswered) {
        query = `?isAnswered=${isAnswered}&ountry=GR`
      } else if (country) {
        query = `?country=GR`
      } else {
        query = '?country=GR'
      }
    }else {
      if (isAnswered && country) {
        query = `?isAnswered=${isAnswered}&country=${country}`
      } else if (isAnswered) {
        query = `?isAnswered=${isAnswered}`
      } else if (country) {
        query = `?country=${country}`
      } else {
        query = ''
      }
    }
    

    return query
  }

  useEffect(() => {
    fetch(
      `https://stupendous-scalloped-vanadium.glitch.me/contacts${finalFilter()}`
    )
      .then(res => res.json())
      .then(data => setContacts(data))
  }, [finalFilter()])

  if (user === 'Vlatko' || user === 'Dionissi') {
    const today = new Date()

    const sevenDaysAgo = new Date(today)
    sevenDaysAgo.setDate(today.getDate() - 7)

    const lastWeeksContacts = contacts
      .slice()
      .filter(
        (contact: ContactType) =>
          new Date(contact.dateCreated) >= new Date(sevenDaysAgo)
      )

    return (
      <>
        <Navbar />
        <section
          className='flex flex-col gap-3 lg:flex-row'
          style={{ paddingTop: '60px', minHeight: '100vh' }}
        >
          <Sidebar title='Filters' side='left'>
            <Filters queries={searchParams} countries={countries} />
          </Sidebar>
          <div className='w-full px-4 lg:w-6/12 lg:px-0'>
            <h3 className='mb-4 text-center text-xl font-semibold uppercase'>
              Results: {contacts.length}
            </h3>
            {contacts.length > 0 ? (
              <ul className='m-auto w-full'>
                {contacts.reverse().map(contact => (
                  <ContactCard key={contact.id} contact={contact} textSize='md'>
                    <>
                      <label
                        htmlFor='chx'
                        className='flex items-center gap-2 font-bold'
                      >
                        <span className='text-xs'>Status:</span>{' '}
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

                      <ChangeStatusBtn contact={contact} />
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
              {lastWeeksContacts.length > 0 ? (
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

                        <ChangeStatusBtn contact={contact} />
                      </>
                    </ContactCard>
                  ))}
                </ul>
              ) : (
                <p className='font-xl text-center font-bold'>Nothing To Show</p>
              )}
            </>
          </Sidebar>
        </section>
      </>
    )
  }

  return redirect('http://localhost:3000/en/private-adm-tint')
}

export default PrivateAdmPage
