import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import HeroImage from './components/HeroSection/HeroImage'
import FormSection from './components/Form/FormSection'
import Description from './components/Description/Description'
import FancyImage from './components/FancyImages/FancyImage'
import Examples from './components/Examples/Examples'
import Wheel from './components/Wheel/Wheel'

export default async function Home({ params: { lang }}: {params: { lang: Locale }}) {
  const { page } = await getDictionary(lang)


  
  return (
    <main>
      <HeroImage lang={page}/>
      <Description lang={page}/>
      <Wheel />
      <Examples lang={page}/>
      <FormSection lang={page}/>
    </main>
  )
}
