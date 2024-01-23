import FancyImage from '../FancyImages/FancyImage'

export type ExampleType = {
  title: string
  desc1: string
  desc2?: string
  desc3?: string
  imageOne: string
  imageTwo: string
}

type ExampleCardProps = {
  example: ExampleType
  lang: any
}

const ExampleCard = ({
  example: { title, desc1, desc2, desc3, imageOne, imageTwo },
  lang
}: ExampleCardProps) => {
  return (
    <div className='w-full px-6 md:w-1/2'>
      <FancyImage imageOne={imageOne ?? ''} imageTwo={imageTwo ?? ''} />
      <h3 className='my-4 text-3xl font-semibold'>
        <b className='text-primary text-4xl font-bold'>Click-Tint </b>
        {lang.home.examples[title].title ?? 'Click-Tint'}
      </h3>
      <p className='mb-2 text-lg'>
        {lang.home.examples[title].desc1 ?? 'Click-Tint'}
      </p>
      {desc2 && (
        <p className='mb-2 text-lg'>
          {lang.home.examples[title].desc2 ?? ''}
        </p>
      )}
    </div>
  )
}

export default ExampleCard
