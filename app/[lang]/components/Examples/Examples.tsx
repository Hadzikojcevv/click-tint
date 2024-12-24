import Image from 'next/image'
import ExampleCard, { ExampleType } from './ExampleCard'

const ExamplesToRender: ExampleType[] = [
  {
    title: 'exampleOne',
    desc1: 'exampleOne',
    desc2: 'exampleOne',
    imageOne: 'https://i.imgur.com/s8Yl0q4.png',
    imageTwo: 'https://i.imgur.com/RRRsLSq.png'
  },
  {
    title: 'exampleTwo',
    desc1: 'exampleTwo',
    desc2: 'exampleTwo',
    imageOne: 'https://i.imgur.com/SKtxp2v.jpg',
    imageTwo: 'https://i.imgur.com/CE2f5Wg.png'
  },
  {
    title: 'exampleThree',
    desc1: 'exampleThree',
    desc2: 'exampleThree',
    imageOne: 'https://i.imgur.com/FA4BjRv.png',
    imageTwo: 'https://i.imgur.com/SdzeDBf.png'
  },
  {
    title: 'exampleFour',
    desc1: 'exampleFour',
    desc2: 'exampleFour',
    imageOne: 'https://i.imgur.com/JJSyEFy.png',
    imageTwo: 'https://i.imgur.com/WSqKTp4.png'
  }
]

type ExamplesProps = {
  lang: any
}

const Examples = ({ lang }: ExamplesProps) => {
  return (
    <section className='def-padding'>
      <div className='m-auto mb-12 flex flex-col gap-12 px-6 md:flex-row lg:w-8/12'>
        <div className='lg:basis-1/2 lg:text-left flex flex-col justify-center items-center'>
          <Image
            loading='lazy'
            src={'https://i.imgur.com/nCrWo6d.png'}
            alt='Logo'
            width={400}
            height={400}
          />
          <p className='mt-4 text-center text-xl font-thin uppercase tracking-widest text-neutral-500 md:text-2xl'>
            {lang.home?.examples?.subtitle ?? 'Usability'}
          </p>
        </div>

        <p className='text-lg font-normal md:text-xl lg:basis-1/2'>
        {Boolean(lang.home.banner.mobile === 'ΚΙΝΗΤΟ') && <>To </>}
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
