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
    example: ExampleType,
    lang: any
}

const ExampleCard = ({example: {title, desc1, desc2, desc3, imageOne, imageTwo}, lang}: ExampleCardProps) => {

  console.log(lang.home.examples["exampleOne"]);
  


  return (
    <div className='w-full md:w-1/2 px-6'>
        <FancyImage imageOne={imageOne ?? ''} imageTwo={imageTwo ?? ""} />
        <h3 className='text-3xl font-semibold my-4'>{lang.home.examples[title].title ?? "Click-Tint"}</h3>
        <p className='text-lg mb-2'>{lang.home.examples[title].desc1 ?? "Click-Tint"}</p>
        {desc2 && <p className='text-lg mb-2'>{lang.home.examples[title].desc2 ?? "Click-Tint"}</p>}
        
    </div>
  )
}

export default ExampleCard