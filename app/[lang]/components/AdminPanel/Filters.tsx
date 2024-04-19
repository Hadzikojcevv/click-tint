'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import Status from './Status'

type FiltersProps = {
  queries: any
  countries: string[]
}

const Filters = ({ queries, countries }: FiltersProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const isAnsweredQuery = useSearchParams().get('isAnswered')
  const countryQuery = useSearchParams().get('country')

  console.log(isAnsweredQuery, countryQuery)

  const isAnswered = queries.isAnswered

  return (
    <div>
      <Status />
      <div className='mb-4 flex items-center gap-4'>
        <h3>Location:</h3>
        <select
          value={countryQuery ?? ''}
          name='location'
          id='location'
          className='w-full rounded-md border-2 border-custom'
          onChange={e => {

            console.log(e.target.value);
            

            if (isAnsweredQuery) {
              if (e.target.value === '') {
                router.push(`?isAnswered=${isAnsweredQuery}`)
              } else {
                router.push(
                  `?isAnswered=${isAnsweredQuery}&country=${e.target.value}`
                )
              }
            } else {
              if (e.target.value !== '') {
                router.push(`?country=${e.target.value}`)
              }else {
                router.push(pathname)
              }
            }
          }}
        >
          <option value=''>All</option>
          {countries.map((country, idx) => (
            <option key={`${country} + ${idx}`} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Filters
