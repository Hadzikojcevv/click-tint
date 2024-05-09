'use client'
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/AdminPanel/Navbar'

type PartnerType = {
  id: number
  dateCreated: string
  email: string
}

const Partners = () => {
  const [partners, setPartners] = useState<PartnerType[]>([])

  useEffect(() => {
    fetch('https://stupendous-scalloped-vanadium.glitch.me/partners')
      .then(res => res.json())
      .then(data => setPartners(data))
  })

  return (
    <>
      <Navbar />
      
        <section className='m-auto w-11/12 p-4'>
          <h1 className='text-xl font-bold mb-4'>My Partners</h1>
          {partners.length > 0 ? (
          <table className='border-2 ' >
            <thead className=''>
              <tr className='border-2 border-gray-700'>
                <th className='p-2 border-2 border-gray-700'>Email</th>
                <th className='p-2'>Date</th>
              </tr>
            </thead>
            <tbody>
              {partners.map(partner => (
                <tr key={partner.id} className='border-2 border-gray-700'>
                  <td className='p-2 border-r-2 border-gray-600'>
                    <h2 className='text-lg text-blue-600'>
                      <a href={`mailto:${partner.email}`}>{partner.email}</a>
                    </h2>
                  </td>
                  <td className='p-2'>
                    <p className='text-lg'>
                      Date: {partner.dateCreated.split('T')[0]}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          ) : "No Partners Yet!"}
        </section>
      
    </>
  )
}

export default Partners
