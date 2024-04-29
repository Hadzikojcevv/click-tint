
import Image from 'next/image'
import ContactCard from '../components/AdminPanel/ContactCard'
import Main from '../components/AdminPanel/Main'
import Sidebar from '../components/AdminPanel/Sidebar'
import Filters from '../components/AdminPanel/Filters'
import ChangeStatusBtn from '../components/AdminPanel/ChangeStatusBtn'

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

const PrivateAdmPage = async ({ searchParams }: any) => {
  const isAnswered = searchParams.isAnswered
  const country = searchParams.country

  // const isIsAnsweredUndefined = Boolean(isAnswered === undefined)
  // const isCountryUndefined = Boolean(country === undefined)

  const finalFilter = () => {

    let query 

    if(isAnswered && country) {
      query = `?isAnswered=${isAnswered}&country=${country}`
    }else if(isAnswered){
      query = `?isAnswered=${isAnswered}`
    }else if(country){
      query = `?country=${country}`
    }else {
      query = ''
    }
      
    return query
  }

  try {

    const contactsRes = await fetch(
      `https://stupendous-scalloped-vanadium.glitch.me/contacts${finalFilter()}`,
      { cache: 'no-store' }
    )
    const contacts: ContactType[] = await contactsRes.json()

    const today = new Date()

    const sevenDaysAgo = new Date(today)
    sevenDaysAgo.setDate(today.getDate() - 7)

    const lastWeeksContacts = contacts
      .slice()
      .filter(
        (contact: ContactType) =>
          new Date(contact.dateCreated) >= new Date(sevenDaysAgo)
      )

    const allCountries = ['Greece', 'Serbia', 'Macedonia']


    
    return (
      <section
        className='flex gap-3'
        style={{ paddingTop: '60px', minHeight: '100vh' }}
      >
        <Sidebar title='Filters' side='left'>
          <Filters queries={searchParams} countries={allCountries} />
        </Sidebar>
        <div className='w-6/12'>
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
    )
  } catch (e) {
    console.log(e)
  }
}

export default PrivateAdmPage
