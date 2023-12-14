
import React from 'react'

type MainCtaProps = {
    text: string
}

const MainCta = ({text}: MainCtaProps) => {
  return (
    <button className='bg-primary text-white px-4 py-1 rounded-md font-semibold text-xl hover:bg-white hover:text-blue-400 transition-colors ease-out delay-100'>
        {text}
    </button>
  )
}

export default MainCta