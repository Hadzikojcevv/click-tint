'use client'
import React, { useEffect, useRef, useState } from 'react'
// import Map from './Map'
import Image from 'next/image'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import L from 'leaflet'
import { Map as LeafletMap, LeafletMouseEvent } from 'leaflet'

const locations = [
  {
    name: 'Vlatko Hadjikojcev',
    city: 'Gevgelija, NMK',
    firm: 'Клик Тинт Доо',
    phone: '+38972277766',
    email: 'vh@click-tint.com',
    lat: 41.137746,
    lng: 22.499144
  },
  {
    name: 'Todor Sterjov',
    city: 'Struga, NMK',
    phone: '+38970358802',
    email: 'ts@click-tint.com',
    lat: 41.1778,
    lng: 20.6783
  },
  {
    name: 'Dionisis Grigoriadis',
    city: 'Thessaloniki, GR',
    phone: '+306979720433',
    email: 'dg@click-tint.com',
    lat: 40.6401,
    lng: 22.9444
  },
  {
    name: 'Mijat Kustudic',
    city: 'Belgrade, RS',
    phone: '+381064226922',
    email: 'mk@click-tint.com',
    lat: 44.8125,
    lng: 20.4612
  },
  {
    name: 'Jovanche Mirchevski',
    city: 'Skopje, NMK',
    firm: 'Барбун Дооел',
    phone: '+38970331710',
    email: 'jm@click-tint.com',
    lat: 41.9981,
    lng: 21.4254
  },
  {
    name: 'Igor Zifovski',
    city: 'Radovish, NMK',
    firm: 'Роло-Инг ДООЕЛ',
    phone: '+38971204316',
    email: 'vh@click-tint.com',
    lat: 41.6315489,
    lng: 22.4615846
  }
]


export type MapContainerProps = {
  lang: any
}

const customIcon = new L.Icon({
  iconUrl: `https://i.imgur.com/QtPeG4F.png`,
  iconSize: [41, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34]
})

const MapContainerSection = ({ lang }: MapContainerProps) => {
  const mapRef = useRef<any>(null)
  const [landed, setLanded] = useState(false)

  const handleButtonClick = (coordinates: any) => {
    if (mapRef.current) {
      mapRef.current.setView(coordinates, 15, { duration: 2 })
    }
  }

  useEffect(() => {
    setLanded(true)
  }, [])

  if (landed) {
    return (
      <section className='def-padding z-10 px-8 md:px-8'>
        <div className='m-auto mb-8 flex w-6/12 flex-col items-center justify-center text-center'>
          <div className='flex flex-col items-center justify-center'>
            <Image
              loading='lazy'
              src={'https://i.imgur.com/nCrWo6d.png'}
              alt='Logo'
              width={400}
              height={400}
            />
            <p className='mt-4 text-center text-xl font-thin uppercase tracking-widest text-neutral-500 md:text-2xl'>
              {lang.home.map?.sectionTitle ?? 'Locations'}
            </p>
          </div>
        </div>

        {/* className='flex basis-full flex-row flex-wrap items-center justify-start gap-4 px-4 md:px-8 lg:basis-2/5 lg:flex-col */}

        <div className='flex flex-col items-center justify-between gap-4 lg:flex-row'>
          <div className='flex flex-wrap justify-center lg:justify-between gap-4  basis-full lg:basis-2/5 px-10'>
            {locations.map(location => (
              <button
                type='button'
                aria-label='Navigate to the location of seller.'
                key={location.lat}
                style={{
                  width:'300px'
                }}
                className='image-tinter relative rounded-md border-2 border-custom p-4 text-left shadow-xl transition-transform delay-75 duration-100 ease-in-out hover:scale-105 '
                onClick={() => {
                  handleButtonClick([location.lat, location.lng])
                }}
              >
                <Image
                  className='absolute right-1 top-1 z-30'
                  src={'https://i.imgur.com/nCrWo6d.png'}
                  alt='Logo'
                  width={70}
                  height={70}
                />
                <p className='text-xl font-bold'>{location.name ?? ''}</p>
                <p className='text-lg font-medium'>
                  City: {location.city ?? ''}
                </p>

                {location.firm && (
                  <p className='text-lg font-medium'>{location.firm ?? ''}</p>
                )}
                <p className='text-lg font-medium'>
                  Phone: {location.phone ?? ''}
                </p>
                <p className='text-lg font-medium'>
                  Email: {location.email ?? ''}
                </p>
              </button>
            ))}
          </div>

          <div className='basis-full lg:basis-3/5'>
            <MapContainer
              ref={mapRef}
              center={[41.8452, 21.4997]}
              zoom={7}
              className='map-container z-10 rounded-md shadow-2xl'
            >
              <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
              {locations.map((location: any, index: any) => (
                <Marker
                  key={index}
                  position={[location.lat, location.lng]}
                  icon={customIcon}
                >
                  <Popup className='relative'>
                    <b className='text-xl'>{location.name}</b>
                    <br /> <span className='text-lg'>{location.city}</span>{' '}
                    {location.firm && (
                      <>
                        <br /> <span className='text-lg font-medium'>{location.firm}</span>
                      </>
                    )}
                    <br /> <span className='text-lg'>{location.phone}</span>
                    <Image
                      className='absolute bottom-1 right-1 z-30'
                      src={'https://i.imgur.com/nCrWo6d.png'}
                      alt='Logo'
                      width={70}
                      height={70}
                    />
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </section>
    )
  }

  if (!landed) {
    return 'not landed'
  }
}

export default MapContainerSection
