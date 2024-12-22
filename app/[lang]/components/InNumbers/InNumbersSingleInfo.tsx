import React from 'react'
import { SingleInNumberInfoType } from './InNumbersSection'

type InNumbersSingleInfoPropsType = {
  data: SingleInNumberInfoType
  lang: any
}

const InNumbersSingleInfo = ({ data, lang }: InNumbersSingleInfoPropsType) => {
  return (
    <div className='flex flex-col items-center justify-center mb-4 lg:mb-0 text-center'>
      <h3 className='text-4xl lg:text-5xl font-bold text-custom'>
        {lang.home.inNumbers[data.title]}
      </h3>
      <p className='text-sm lg:text-md font-semibold uppercase tracking-widest text-neutral-700'>
      {lang.home.inNumbers[data.desc]}
      </p>
      
      {data.desc2 && (
        <p className='text-sm lg:text-md font-semibold uppercase tracking-widest text-neutral-700'>
          {lang.home.inNumbers[data.desc2]}
        </p>
      )}
      {data.desc3 && (
        <p className='text-sm lg:text-md font-semibold uppercase tracking-widest text-neutral-700'>
          {lang.home.inNumbers[data.desc3]}
        </p>
      )}
    </div>
  )
}

export default InNumbersSingleInfo
