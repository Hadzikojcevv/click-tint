import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import Description from './components/Description/Description'
import Examples from './components/Examples/Examples'
import Wheel from './components/Wheel/Wheel'
import HeroImage from './components/HeroSection/HeroImage'
import FormSection from './components/Form/FormSection'

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  return (
    <main>
      <HeroImage lang={page}/>
      <Description lang={page}/>
      <Wheel lang={page}/>
      <Examples lang={page}/>
      <FormSection lang={page}/>
    </main>
  )
}
