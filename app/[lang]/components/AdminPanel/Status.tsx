'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Status = () => {
  const router = useRouter()
  const pathname = usePathname()
  const country = useSearchParams().get('country')

  const [status, setStatus] = useState<'' | 'true' | 'false'>('')

  useEffect(() => {
    
   
    if(country) {
      
      if(status !== ""){
        router.push(`?isAnswered=${status}&country=${country}`)
      }else {
        router.push(`?country=${country}`)
      }
    }else {

      if(status !== ''){
        router.push(`?isAnswered=${status}`)
      }else {
        router.push(pathname)
      }
    }
    
  }, [status])

  return (
    <div className='mb-4 flex items-center gap-4 border-b-2 border-custom pb-2' onChange={e => {}}>
      <h3 className='font-semibold'>Status:</h3>
      <div className='flex flex-col'>
        <label htmlFor='all'>All</label>
        <input
          type='radio'
          name='status'
          id='all'
          value={2}
          onChange={e => setStatus('')}
          checked={status === ''}
        />
      </div>
      <div className='flex flex-col'>
        <label htmlFor='finished'>Finished</label>
        <input
          type='radio'
          name='status'
          id='finished'
          value={1}
          checked={status === 'true'}
          onChange={e => setStatus('true')}
        />
      </div>
      <div className='flex flex-col'>
        <label htmlFor='pending'>Pending</label>
        <input
          type='radio'
          name='status'
          id='pending'
          value={0}
          checked={status === 'false'}
          onChange={e => setStatus('false')}
        />
      </div>
    </div>
  )
}

export default Status
