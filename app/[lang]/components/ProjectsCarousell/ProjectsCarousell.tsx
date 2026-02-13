'use client'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type ProjectType = {
  id: number
  projectName: string
  country: string
  location: string
  logo: string
  video: string
  countryFlag: string
  year: string
}

const projects: ProjectType[] = [
  {
    id: 2,
    projectName: 'DSV',
    country: 'N. Macedonia',
    location: 'Skopje',
    logo: 'https://i.imgur.com/iohFQ7u.png',
    video: 'https://i.imgur.com/mrhysXV.mp4',
    countryFlag: 'https://i.imgur.com/ikHeXm5.png',
    year: '2024'
  },
  {
    id: 3,
    projectName: 'Heraklion, International Airport',
    country: 'Greece',
    location: 'Crete',
    logo: 'https://i.imgur.com/HeQ7fPV.png',
    video: 'https://i.imgur.com/QHCPCQn.mp4',
    countryFlag: 'https://i.imgur.com/hgTegHx.png',
    year: '2024'
  },
  {
    id: 4,
    projectName: 'IBV International',
    country: 'Serbia',
    location: 'Belgrade',
    logo: 'https://i.imgur.com/T5eJDzc.png',
    video: 'https://i.imgur.com/vKVi0St.mp4',
    countryFlag: 'https://i.imgur.com/78xbsBy.png',
    year: '2024'
  },
  {
    id: 5,
    projectName: 'Momentum Business Cunsultants',
    country: 'Serbia',
    location: 'Belgrade',
    logo: 'https://i.imgur.com/LItV9HG.png',
    video: 'https://i.imgur.com/yoBu9Ob.mp4',
    countryFlag: 'https://i.imgur.com/78xbsBy.png',
    year: '2024'
  },
  {
    id: 6,
    projectName: 'Nexus - Law Firm',
    country: 'Greece',
    location: 'Thessaloniki',
    logo: 'https://i.imgur.com/mjZwg6Z.png',
    video: 'https://i.imgur.com/yBoLZBM.mp4',
    countryFlag: 'https://i.imgur.com/hgTegHx.png',
    year: '2024'
  },
  {
    id: 7,
    projectName: 'Aesthea',
    country: 'Greece',
    location: 'Thessaloniki',
    logo: 'https://i.imgur.com/ydPbiCJ.png',
    video: 'https://i.imgur.com/KcTiBj5.mp4',
    countryFlag: 'https://i.imgur.com/hgTegHx.png',
    year: '2024'
  },
  {
    id: 8,
    projectName: 'St.Luke Hospital',
    country: 'Greece',
    location: 'Thessaloniki',
    logo: 'https://i.imgur.com/Q4SWaMn.png',
    video: 'https://i.imgur.com/q5CXQ1t.mp4',
    countryFlag: 'https://i.imgur.com/hgTegHx.png',
    year: '2024'
  }
]

const ProjectsCarousell = ({ lang }: { lang: any }) => {
  return (
    <section className='def-padding'>
      <div className='mb-6 flex flex-col items-center justify-center'>
        <Image
          loading='lazy'
          src={'https://i.imgur.com/nCrWo6d.png'}
          alt='Logo'
          width={400}
          height={400}
        />
        <p className='mt-4 text-center text-xl font-thin uppercase tracking-widest text-neutral-500 md:text-2xl'>
          {lang?.home?.projectsCarousell.title ?? 'Projects'}
        </p>
      </div>

      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 12000, disableOnInteraction: false }}
        spaceBetween={20}
        loop={true}
        navigation={false}
        className='w-11/12 rounded-lg p-2 lg:w-9/12 xl:w-10/12 lg:p-10'
        breakpoints={{
          0: {
            // Mobile settings
            slidesPerView: 1,
            spaceBetween: 10
          },
          768: {
            // Desktop settings
            slidesPerView: 1.2, // Show one full slide and part of the next
            spaceBetween: 20
          }
        }}
      >
        {projects.map(p => (
          <SwiperSlide
            key={p.id}
            className='relative rounded-md p-6 shadow-lg lg:p-16'
            style={{
              backgroundColor: '#E9E9E9',
              border: '1px solid #e9e9e9aa',
              maxHeight: "100%"
            }}
          >
            
            <div
              style={{
                backdropFilter: `blur(15px)`,
                backgroundColor: `#ffffffd9`,
                borderRadius: 16,
                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
              }}
              className='flex gap-4 p-0 md:p-4 xl:p-0 justify-start'
            >
              <Image
                src={'https://i.imgur.com/DECNrPi.png'}
                alt='Click Tint Logo'
                width={140}
                height={50}
                className='absolute right-5 top-5 block sm:hidden'
              />
              <div className='absolute z-50 bottom-1 left-0 flex flex-col justify-center gap-0 px-8 py-4 xl:hidden'>
                <Image
                  src={p.logo}
                  alt={p.projectName}
                  className='mb-2 rounded-md p-2'
                  width={130}
                  height={130}
                  style={{
                    backdropFilter: 'blur(15px)',
                    backgroundColor: '#f9f7f7ae'
                  }}
                />
                <div className='text-white'>
                  <h2 className='text-xl font-semibold text-white lg:text-grayText'>
                    <span className='text-xl font-thin'>
                      {lang?.home?.projectsCarousell.client ?? 'Client'}:
                    </span>{' '}
                    {p.projectName}
                  </h2>

                  <div className='flex items-center justify-start gap-6 py-1'>
                    <h2 className='text-xl font-semibold text-white lg:text-grayText'>
                      <span className='text-xl font-thin'>
                        {lang?.home?.projectsCarousell.country ?? 'Country'}:
                      </span>{' '}
                      {p.country}{' '}
                    </h2>
                    <Image
                      src={p.countryFlag}
                      alt={p.country}
                      width={30}
                      height={30}
                    />
                  </div>
                  <h2 className='text-xl font-semibold text-white lg:text-grayText'>
                    <span className='text-xl font-thin'>
                      {lang?.home?.projectsCarousell.location ?? 'Location'}:
                    </span>{' '}
                    {p.location}
                  </h2>
                  <h2 className='text-xl py-1 font-semibold text-white lg:text-grayText'>
                    <span className='text-xl font-thin'>
                      {lang?.home?.projectsCarousell.year ?? 'Year'}:
                    </span>{' '}
                    {p.year}
                  </h2>
                </div>
              </div>

              <video
                playsInline
                src={p.video}
                autoPlay
                loop
                muted
                style={{
                  borderRadius: '10px',
                  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
                }}
                className='projectVideoDimensions '
              >
                Your browser does not support the video tag.
              </video>

              <div className='hidden flex-col justify-center gap-12 p-12 xl:flex'>
                <Image
                  src={p.logo}
                  alt={p.projectName}
                  className='mb-8'
                  width={200}
                  height={200}
                />

                <div>
                  <h2 className='text-2xl font-semibold text-white lg:text-grayText'>
                    <span className='text-2xl font-thin'>
                      {lang?.home?.projectsCarousell.client ?? 'Client'}:
                    </span>{' '}
                    {p.projectName}
                  </h2>

                  <div className='flex items-center justify-start gap-6 py-2'>
                    <h2 className='text-2xl font-semibold text-white lg:text-grayText'>
                      <span className='text-2xl font-thin'>
                        {lang?.home?.projectsCarousell["country"] ?? 'Country'}:
                      </span>{' '}
                      {p.country}{' '}
                    </h2>
                    <Image
                      src={p.countryFlag}
                      alt={p.country}
                      width={40}
                      height={40}
                    />
                  </div>
                  <h2
                    style={{ color: '#292C33' }}
                    className='text-2xl font-semibold'
                  >
                    <span className='text-2xl font-thin'>
                      {lang?.home?.projectsCarousell.location ?? 'Location'}:
                    </span>{' '}
                    {p.location}
                  </h2>
                  <h2
                    style={{ color: '#292C33' }}
                    className='py-2 text-2xl font-semibold'
                  >
                    <span className='text-2xl font-thin'>
                      {lang?.home?.projectsCarousell.year ?? 'Year'}:
                    </span>{' '}
                    {p.year}
                  </h2>
                </div>
              </div>
              <Image
                src={'https://i.imgur.com/nCrWo6d.png'}
                alt='Click Tint Logo'
                width={150}
                height={50}
                className='absolute bottom-3 right-5 hidden sm:block'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default ProjectsCarousell
