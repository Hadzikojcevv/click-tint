import React from 'react'
import FancyImage from '../FancyImages/FancyImage'

export type ExampleType = {
    title: string,
    desc1: string,
    desc2?: string,
    desc3?: string,
    imageOne: string,
    imageTwo: string
}

type ExampleCardProps = {
    example: ExampleType
}

const ExampleCard = ({example: {title, desc1, desc2, desc3, imageOne, imageTwo}}: ExampleCardProps) => {
  return (
    <div className='w-full md:w-1/2 px-6'>
        <FancyImage imageOne={imageOne ?? ''} imageTwo={imageTwo ?? ""}/>
        <h3>Click Tint {title}</h3>
        <p>{desc1}</p>
        {desc2 && <p>{desc2}</p>}
        {desc3 && <p>{desc3}</p>}
        
    </div>
  )
}

export default ExampleCard