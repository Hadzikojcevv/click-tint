import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import HeroImage from './components/HeroSection/HeroImage'
import FormSection from './components/Form/FormSection'

export default async function Home({ params: { lang }}: {params: { lang: Locale }}) {
  const { page } = await getDictionary(lang)


  
  return (
    <main>
      <HeroImage lang={page}/>
      <FormSection lang={page}/>
    </main>
  )
}
