import Image from 'next/image'
import doorImage from '../../../../public/assets/doorOff.jpg'
import windowsImage from '../../../../public/assets/windowsOff.jpg'
import ImageTint from './ImageTint'

type DescriptionProps = {
  lang: any
}

const Description = ({ lang }: DescriptionProps) => {
  return (
    <section className='bg-secondary def-padding image-tinter'>
      {/* <h2 className='mb-16 text-center text-6xl font-bold uppercase tracking-tighter'>
        {lang.home.desc?.title ?? 'Click Tint'}
      </h2> */}
      <div className='mb-14 flex w-full flex-col items-center justify-center'>
        <Image
          loading='lazy'
          src={'https://i.imgur.com/nCrWo6d.png'}
          alt='alt'
          width={400}
          height={400}
        />
        <p className='mt-4 text-2xl font-thin uppercase tracking-widest text-neutral-700'>
          {lang.home.desc?.subtitle ?? 'Click Tint'}
        </p>
      </div>
      <div className='m-auto flex w-11/12 flex-col items-center gap-10 md:w-8/12 lg:flex-row'>
        <div className='flex  flex-col justify-center gap-6 md:flex-row'>
          <p className='text-lg'>
            <b className='text-primary text-2xl'>Click Tint</b>{' '}
            {lang.home.desc?.desc1 ?? 'Click Tint'}
          </p>
          <p className='text-lg'>{lang.home.desc?.desc2 ?? 'Click Tint'}</p>
          <p className='text-lg'>
            <b className='text-primary text-2xl'>Click Tint</b>{' '}
            {lang.home.desc?.desc3 ?? 'Click Tint'}
          </p>
        </div>
        {/* <div className='flex basis-2/3 flex-col gap-6 md:flex-row'>
          <ImageTint
            image={doorImage}
            text={lang.home?.banner?.bannerBtn ?? 'Click'}
          />
          <ImageTint
            image={windowsImage}
            text={lang.home?.banner?.bannerBtn ?? 'Click'}
          />
        </div> */}
      </div>
    </section>
  )
}

export default Description
