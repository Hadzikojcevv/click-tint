import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Description from '../components/Description/Description';
import Examples from '../components/Examples/Examples';
import HeroImage from '../components/HeroSection/HeroImage';
import Video from '../components/HeroSection/Video';
import { MapContainerProps } from '../components/Map/MapContainer';
import Wheel from '../components/Wheel/Wheel';
import ProjectsCarousell from '../components/ProjectsCarousell/ProjectsCarousell';
import InNumbersSection from '../components/InNumbers/InNumbersSection';
import EmbeddedFormSection from '../components/Form/EmbeddedFormSection';

type MapProps = {
  lang: any
}

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  const Map= dynamic(
    () => import('../components/Map/MapContainer' as any), // replace '@components/map' with your component's location
    { 
      loading: () => <p>A map is loading</p>,
      ssr: false // This line is important. It's what prevents server-side render
    }
  ) as React.FC<MapContainerProps>

  return (
    <>
    <Head>
        <link
          rel="alternate"
          hrefLang='en-US'
          href="https://click-tint.com/en"
        />
        <link
          rel="alternate"
          hrefLang='mk-MK'
          href="https://click-tint.com/mk"
        />
        <link
          rel="alternate"
          hrefLang='el-GR'
          href="https://click-tint.com/gr"
        />
      </Head>
    <main>
      <HeroImage lang={page}/>
      <Examples lang={page}/>
      <Video lang={page}/>
      <ProjectsCarousell lang={page}/>
      <Description lang={page}/>
      <Wheel lang={page} locale={lang}/>
      <InNumbersSection lang={page}/>
      <Map lang={page}/>
      <EmbeddedFormSection lang={lang} page={page}/>
    </main>
    </>
  )
}
