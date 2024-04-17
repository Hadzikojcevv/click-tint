import Image from 'next/image';
import React from 'react'
import ContactCard from '../components/AdminPanel/ContactCard';

export type ContactType = {
  id: number,
  dateCreated: Date
  name: string
  email: string
  phone: string
  location?: string
  companyName?: string
}

const PrivateAdmPage = async () => {

  try {

    const contactsRes = await fetch('https://stupendous-scalloped-vanadium.glitch.me/contacts', {cache: 'no-cache'})
    const contacts:ContactType[] = await contactsRes.json()

    console.log(contacts)
    


    return <section className='flex gap-4' style={{paddingTop: '60px'}}>
      <div className='w-3/12'>
        <h2>Sidebar</h2>
      </div>
      <div className='w-9/12' >
      <h1>Contacts</h1>

      <ul className='m-auto lg:w-9/12 w-11/12' >
        {contacts.map(contact => <ContactCard key={contact.id} contact={contact}/>)}
      </ul>
    </div>

    </section>
    
  } catch (e) {
    console.log(e)
  }
}

export default PrivateAdmPage
