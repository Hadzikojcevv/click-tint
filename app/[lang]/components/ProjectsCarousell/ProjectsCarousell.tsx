'use client'
import Image from 'next/image'
import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import ProjectSlide from './ProjectSlide'

type ProjectType = {
  id: number
  projectName: string
  country: string
  location: string
  logo: string
  video: string
  countryFlag: string
}

const projects: ProjectType[] = [
  {
    id: 1,
    projectName: 'Makpetrol',
    country: 'North Macedonia',
    location: 'Skopje',
    logo: 'https://i.imgur.com/Ctqoyc2.png',
    video: '/projects/Makpetrol, Skopje.mp4',
    countryFlag: 'https://i.imgur.com/ikHeXm5.png'
  },
  {
    id: 2,
    projectName: 'DSV',
    country: 'North Macedonia',
    location: 'Skopje',
    logo: 'https://i.imgur.com/Ctqoyc2.png',
    video: 'https://i.imgur.com/KcTiBj5.mp4',
    countryFlag: 'https://i.imgur.com/ikHeXm5.png'
  },
  {
    id: 3,
    projectName: 'Heraklion, International Airport',
    country: 'Greece',
    location: 'Crete',
    logo: 'https://i.imgur.com/Ctqoyc2.png',
    video: 'https://i.imgur.com/KcTiBj5.mp4',
    countryFlag: 'https://i.imgur.com/ikHeXm5.png'
  },
  {
    id: 4,
    projectName: 'IBV International',
    country: 'Serbia',
    location: 'Belgrade',
    logo: 'https://i.imgur.com/Ctqoyc2.png',
    video: 'https://i.imgur.com/KcTiBj5.mp4',
    countryFlag: 'https://i.imgur.com/ikHeXm5.png'
  },
  {
    id: 5,
    projectName: 'Momentum Business Cunsultants',
    country: 'Serbia',
    location: 'Belgrade',
    logo: 'https://i.imgur.com/Ctqoyc2.png',
    video: 'https://i.imgur.com/KcTiBj5.mp4',
    countryFlag: 'https://i.imgur.com/ikHeXm5.png'
  },
  {
    id: 6,
    projectName: 'Nexus - Law Firm',
    country: 'Greece',
    location: 'Thessaloniki',
    logo: 'https://i.imgur.com/Ctqoyc2.png',
    video: 'https://i.imgur.com/KcTiBj5.mp4',
    countryFlag: 'https://i.imgur.com/ikHeXm5.png'
  },
  {
    id: 7,
    projectName: 'St.Luke Hospital',
    country: 'Greece',
    location: 'Thessaloniki',
    logo: 'https://i.imgur.com/Ctqoyc2.png',
    video: 'https://i.imgur.com/KcTiBj5.mp4',
    countryFlag: 'https://i.imgur.com/ikHeXm5.png'
  }
]

const ProjectsCarousell = () => {
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
          {/* {lang.home.map?.sectionTitle ?? 'Locations'} */}
          Projects
        </p>
      </div>

      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        slidesPerView={1.2} // Show one full slide and part of the next
        spaceBetween={20} // Space between slides
        loop={true} // Infinite loop
        navigation={true} // Optional: Add navigation arrows
        className='w-9/12'
        style={{ padding: '40px' }}
      >
        {projects.map(p => (
          <SwiperSlide
            key={p.id}
            className='rounded-md p-8 shadow-lg'
            style={{
              backgroundColor: '#E9E9E9',
              border: '1px solid #e9e9e9aa'
            }}
          >
            <div
              style={{
                backdropFilter: `blur(15px)`,
                backgroundColor: `#ffffffd9`
              }}
              className='flex justify-start'
              onClick={() => {
                console.log(p)
              }}
            >
              <video
                src={p.video}
                autoPlay
                muted
                style={{ width: 'auto', height: '607px', borderRadius: '10px' }}
              >
                Your browser does not support the video tag.
              </video>
              <div style={{ border: '2px solid red' }} className='p-12'>
                <Image
                  src={p.logo}
                  alt={p.projectName}
                  className='mb-8'
                  width={150}
                  height={150}
                />
                <h2
                  style={{ color: '#292C33' }}
                  className='text-2xl font-semibold'
                >
                  <span className='text-xl font-thin'>Client:</span>{' '}
                  {p.projectName}
                </h2>
                <div className='flex items-center justify-start gap-6'>
                  <h2
                    style={{ color: '#292C33' }}
                    className='text-xl font-semibold'
                  >
                    <span className='text-xl font-thin'>Country:</span>{' '}
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
                  <span className='text-xl font-thin'>Location:</span>{' '}
                  {p.location}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default ProjectsCarousell
