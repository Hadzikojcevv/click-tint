import ExampleCard, { ExampleType } from './ExampleCard'

const ExamplesToRender: ExampleType[] = [
  {
    title: 'exampleOne',
    desc1: 'exampleOne',
    desc2: 'exampleOne',
    imageOne: 'https://i.imgur.com/QTA3iDk.jpg',
    imageTwo: 'https://i.imgur.com/y6nQ2Yf.jpg'
  },
  {
    title: 'exampleTwo',
    desc1: 'exampleTwo',
    desc2: 'exampleTwo',
    imageOne: 'https://i.imgur.com/ATv8Ba9.jpg',
    imageTwo: 'https://i.imgur.com/IW8FxTv.jpg'
  },
  {
    title: 'exampleThree',
    desc1: 'exampleThree',
    desc2: 'exampleThree',
    imageOne: 'https://i.imgur.com/5Al4AeV.jpg',
    imageTwo: 'https://i.imgur.com/yRPVWp1.jpg'
  },
  {
    title: 'exampleFour',
    desc1: 'exampleFour',
    desc2: 'exampleFour',
    imageOne: 'https://i.imgur.com/Ven20Iz.jpg',
    imageTwo: 'https://i.imgur.com/2eC3iz4.jpg'
  }
]

type ExamplesProps = {
  lang: any
}

const Examples = ({ lang }: ExamplesProps) => {
  return (
    <section className='def-padding'>
      <div className='m-auto mb-12 flex flex-col gap-12 px-6 md:flex-row lg:w-8/12'>
        <div className='lg:basis-1/2 lg:text-left'>
          <h2 className='text-center text-5xl font-semibold md:text-6xl'>
            {lang.home?.examples?.title ?? 'Say Goodbye to Walls!'}
          </h2>
          <p className='mt-4 text-center text-xl font-thin uppercase tracking-widest text-neutral-500 md:text-2xl'>
            {lang.home?.examples?.subtitle ?? 'Usability'}
          </p>
        </div>

        <p className='text-lg font-normal md:text-xl lg:basis-1/2'>
          <b className='text-primary text-3xl'>Click Tint</b>
          {lang.home?.examples?.desc ?? 'Description'}
        </p>
      </div>

      <div className='m-auto flex w-full flex-wrap justify-between gap-y-8 lg:w-8/12'>
        {ExamplesToRender.map(example => (
          <ExampleCard key={example.title} example={example} lang={lang} />
        ))}
      </div>
    </section>
  )
}

export default Examples
