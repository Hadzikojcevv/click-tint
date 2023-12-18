import React from 'react'
import ExampleCard, { ExampleType } from './ExampleCard'

const ExamplesToRender: ExampleType[] = [
  {
    title: 'HOME',
    desc1: 'asd 22222222222222222',
    imageOne: 'https://i.imgur.com/QTA3iDk.jpg',
    imageTwo: 'https://i.imgur.com/y6nQ2Yf.jpg'
  },
  {
    title: 'HOTELS',
    desc1: 'asd',
    imageOne: 'https://i.imgur.com/ATv8Ba9.jpg',
    imageTwo: 'https://i.imgur.com/IW8FxTv.jpg'
  },
  {
    title: 'DENTIST',
    desc1: 'asd 22222222222222222',
    imageOne: 'https://i.imgur.com/5Al4AeV.jpg',
    imageTwo: 'https://i.imgur.com/yRPVWp1.jpg'
  },
  {
    title: 'OFFICE',
    desc1: 'asd 22222222222222222',
    imageOne: 'https://i.imgur.com/Ven20Iz.jpg',
    imageTwo: 'https://i.imgur.com/2eC3iz4.jpg'
  }
]

type ExamplesProps = {
  lang: any
}

const Examples = ({lang}: ExamplesProps) => {
  return (
    <section className='def-padding'>
      <div className='m-auto mb-12 lg:w-8/12 px-6 flex flex-col md:flex-row gap-12'>
        <div className='lg:text-left lg:basis-1/2'>
          <h2 className='md:text-6xl text-5xl font-semibold text-center'>
            {lang.home?.examples?.title ?? 'Say Goodbye to Walls!'}
          </h2>
          <p className='mt-4 md:text-2xl text-xl uppercase tracking-widest font-thin text-neutral-500 text-center'>{lang.home?.examples?.subtitle ?? 'Usability'}</p>
        </div>

        <p className='md:text-xl text-lg font-normal lg:basis-1/2'>
        <b className='text-3xl text-primary'>Click Tint</b>{lang.home?.examples?.desc ?? 'Description'}</p>
      </div>

      <div className='m-auto flex w-full flex-wrap justify-between gap-y-8 md:w-8/12'>
        {ExamplesToRender.map(example => (
          <ExampleCard key={example.title} example={example} />
        ))}
      </div>
    </section>
  )
}

export default Examples
