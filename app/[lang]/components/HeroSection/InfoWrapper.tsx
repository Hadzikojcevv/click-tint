import Image from 'next/image'

type InfoWrapperProps = {
  lang: any
}

const InfoWrapper = ({ lang }: InfoWrapperProps) => {
  return (
    <div className='def-padding'>
      <div className='text-primary m-auto flex w-11/12 items-center justify-between uppercase md:w-6/12 md:gap-16'>
        <div className='flex w-3/12 basis-1/3 flex-col items-center'>
          <Image
            src={'https://i.imgur.com/jLBCo6c.png'}
            width={50}
            height={100}
            alt='Remote Control'
            className='w-4/12 lg:w-2/12'
          />
          <p className='mt-4 text-sm md:text-xl'>
            {lang.home?.banner?.remote ?? 'Remote'}
          </p>
        </div>
        <div className='flex basis-1/3 flex-col items-center'>
          <Image
            src={'https://i.imgur.com/82KO5Qa.png'}
            width={50}
            height={100}
            alt='Switch'
            className='w-4/12 lg:w-4/12'
          />
          <p className='mt-4 text-sm md:text-xl'>
            {lang.home?.banner?.switch ?? 'Switch'}
          </p>
        </div>
        <div className='flex basis-1/3 flex-col items-center'>
          <Image
            src={'https://i.imgur.com/jOzvCgt.png'}
            width={100}
            height={100}
            alt='Mobile Phone'
            className='w-4/12 lg:w-4/12'
          />
          <p className='mt-4 text-sm md:text-xl'>
            {lang.home?.banner?.mobile ?? 'Mobile'}
          </p>
        </div>
      </div>
      <div className='def-padding m-auto flex w-11/12 flex-col items-center justify-between gap-10 md:w-8/12 lg:flex-row'>
        <Image
          src={'https://i.imgur.com/MtQoYOC.png'}
          alt='Logo'
          width={450}
          height={450}
        />

        <p className='text-center text-xl md:text-left lg:basis-1/2'>
          <b className='text-primary text-4xl font-bold'>Click Tint </b>
          {lang.home.banner.description ?? 'Tinted Windows'}
        </p>
      </div>
    </div>
  )
}

export default InfoWrapper
