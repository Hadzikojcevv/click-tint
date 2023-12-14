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

const Examples = () => {
  return (
    <section className='def-padding'>
      <div className='m-auto w-6/12 text-center mb-12'>
        <h2 className='text-6xl font-semibold capitalize'>Zbogum na zidovite</h2>
        <p className='text-3xl font-semibold'>primena</p>
        <p className='text-xl font-semibold'>kade bi mozela da se iskoristi</p>
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
