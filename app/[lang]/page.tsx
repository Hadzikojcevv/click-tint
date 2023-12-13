import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import HeroImage from './components/HeroSection/HeroImage'
import FormSection from './components/Form/FormSection'
import Description from './components/Description/Description'

export default async function Home({ params: { lang }}: {params: { lang: Locale }}) {
  const { page } = await getDictionary(lang)


  
  return (
    <main>
      <HeroImage lang={page}/>
      <Description/>
      <FormSection lang={page}/>
    </main>
  )
}
