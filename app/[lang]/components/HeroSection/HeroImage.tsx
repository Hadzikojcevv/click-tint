import ImagePreviewer from './Image'
import InfoWrapper from './InfoWrapper'

type HeroImageProps = {
  lang: any
}

const HeroImage = ({ lang }: HeroImageProps) => {
  return (
    <section className='bg-secondary m-auto w-full'>
      <ImagePreviewer lang={lang} />
      <InfoWrapper lang={lang} />
    </section>
  )
}

export default HeroImage
