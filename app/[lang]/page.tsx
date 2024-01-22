import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import Description from './components/Description/Description'
import Examples from './components/Examples/Examples'
import FormSection from './components/Form/FormSection'
import HeroImage from './components/HeroSection/HeroImage'
import MapContainer from './components/Map/MapContainer'
import Wheel from './components/Wheel/Wheel'

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  return (
    <main>
      <HeroImage lang={page}/>
      <Examples lang={page}/>
      <Description lang={page}/>
      <Wheel lang={page}/>
      {/* MAP */}
      {/* <MapContainer lang={page}/> */}
      <FormSection lang={page}/>
    </main>
  )
}
