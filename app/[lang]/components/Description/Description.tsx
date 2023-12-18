import Image from 'next/image'
import doorImage from '../../../../public/assets/doorOff.jpg'
import windowsImage from '../../../../public/assets/windowsOff.jpg'
import ImageTint from './ImageTint'

type DescriptionProps = {
  lang: any
}

const Description = ({lang}: DescriptionProps) => {
  return (
    <section className='def-padding'>
      <h2 className='mb-16 text-center text-6xl uppercase tracking-tighter font-bolder'>Пaметна Фолија</h2>
      <div className='m-auto flex flex-col lg:flex-row items-center md:w-8/12 w-11/12 gap-10'>
        <div className='flex basis-1/3 flex-col justify-center gap-6'>
          <div className='w-full flex flex-col justify-center items-center'>
            <Image src={'https://i.imgur.com/MtQoYOC.png'} alt='alt' width={300} height={300}/>
            <p className='text-2xl font-thin uppercase text-neutral-700 tracking-widest'>{lang.home.desc?.subtitle ?? "Click Tint"}</p>
          </div>

          <p className='text-lg'>
          <b className='text-xl text-primary'>Click Tint</b> {lang.home.desc?.desc1 ?? "Click Tint"}
          </p>
          <p className='text-lg'>
          <b className='text-xl text-primary'>Click Tint</b> {lang.home.desc?.desc2 ?? "Click Tint"}.
          </p>
          <p className='text-lg'>
          <b className='text-xl text-primary'>Click Tint</b> {lang.home.desc?.desc3 ?? "Click Tint"}
          </p>
        </div>
        <div className='flex flex-col md:flex-row basis-2/3 gap-6'>
          <ImageTint image={doorImage}/>
          <ImageTint image={windowsImage}/>

        </div>
      </div>
    </section>
  )
}

export default Description
