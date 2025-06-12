import Image from 'next/image'
import React from 'react'
import InNumbersSingleInfo from './InNumbersSingleInfo'

export type SingleInNumberInfoType = {
  id: number
  title: string
  number: number
  desc: string
  desc2?: string
  desc3?: string
}

const InNumbersData: SingleInNumberInfoType[] = [
  {
    id: 1,
    title: 'companies',
    number: 3,
    desc: 'firm_mk',
    desc2: 'firm_gr',
    desc3: 'firm_rs'
  },
  {
    id: 2,
    title: 'customers_numbers',
    number: 55,
    desc: 'happy_customers'
  },
  {
    id: 3,
    title: 'm2',
    number: 1200,
    desc: 'covered_area'
  },
  {
    id: 4,
    title: 'windows_number',
    number: 194,
    desc: 'windows'
  }
]

const InNumbersSection = ({ lang }: { lang: any }) => {
  return (
    <section className='def-padding' style={{ backgroundColor: '#F1F2F3' }}>
      <div className='flex flex-col items-center justify-center lg:basis-1/2 lg:text-left'>
        <Image
          loading='lazy'
          src={'https://i.imgur.com/nCrWo6d.png'}
          alt='Logo'
          width={400}
          height={400}
        />
      </div>

      <div className='m-auto mt-4 items-start grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-4 xl:grid-cols-4 gap-2 xl:w-9/12'>
        {InNumbersData.map(d => (
          <InNumbersSingleInfo key={d.id} data={d} lang={lang} />
        ))}
      </div>
    </section>
  )
}

export default InNumbersSection
