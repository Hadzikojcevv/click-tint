'use client'
import React, { useEffect, useRef, useState } from 'react'
// import Map from './Map'
import Image from 'next/image'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import L from 'leaflet'
import { Map as LeafletMap, LeafletMouseEvent } from 'leaflet';

const locations = [
  {
    name: 'Vlatko Hadjikojcev',
    city: 'Gevgelija',
    phone: '+38972277766',
    lat: 41.137746,
    lng: 22.499144
  },
  {
    name: 'Todor Sterjov',
    city: 'Struga',
    phone: '+38970358802',
    lat: 41.1778,
    lng: 20.6783
  },
  {
    name: 'Dionissi Gregoriades',
    city: 'Thessaloniki',
    phone: '+306979720433',
    lat: 40.6401,
    lng: 22.9444
  },
  {
    name: 'Mijat Kustudic',
    city: 'Belgrade',
    phone: '+381064226922',
    lat: 44.8125,
    lng: 20.4612
  }

  // Add more locations as needed
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

  if(landed) {
    return (
      <section className='def-padding z-10 px-8 md:px-8'>
        <div className='m-auto mb-8 flex flex-col text-center w-6/12 items-center justify-center'>
          {/* <h2 className='mb-8 text-center text-5xl font-bold lg:text-6xl'>
            {lang.home.map?.sectionTitle ?? ''}
          </h2>
          <p>TUKA NI TREBA NEKOJ DESCRIPTION <br /> 
          VO SMISLA CLICK TINT IMA SVOI DISTRIBUTERI NA SLEDNIVE LOKACII ILI DOSTAPNI SME POSHIROKO NA BALKANOT</p> */}
          <div className='flex flex-col justify-center items-center'>
          {/* <h2 className='text-center text-5xl font-semibold md:text-6xl'>
            {lang.home?.examples?.title ?? 'Say Goodbye to Walls!'}
          </h2> */}
          <Image
            loading='lazy'
            src={'https://i.imgur.com/MtQoYOC.png'}
            alt='Logo'
            width={400}
            height={400}
          />
          <p className='mt-4 text-center text-xl font-thin uppercase tracking-widest text-neutral-500 md:text-2xl'>
          {lang.home.map?.sectionTitle ?? 'Locations'}
          </p>
        </div>
        </div>
  
        <div className='flex flex-col items-center justify-between gap-4 lg:flex-row'>
          <div className='flex basis-full flex-row flex-wrap items-center justify-center gap-4 px-4 md:px-20 lg:basis-1/3 lg:flex-col'>
            {locations.map(location => (
              <button
                type='button'
                aria-label='Navigate to the location of seller.'
                key={location.lat}
                className='shadow-xl image-tinter relative w-full rounded-md border-2 border-custom p-4 text-left transition-transform delay-75 duration-100 ease-in-out hover:scale-105 md:w-60'
                onClick={() => {
                  handleButtonClick([location.lat, location.lng])
                }}
              >
                <Image
                  className='absolute right-2 top-2'
                  src={'https://i.imgur.com/MtQoYOC.png'}
                  alt='Logo'
                  width={60}
                  height={60}
                />
                <p className='text-xl font-bold'>{location.name}</p>
                <p className='text-lg font-medium'>City: {location.city}</p>
                <p className='text-lg font-medium'>Phone: {location.phone}</p>
              </button>
            ))}
          </div>
  
          <div className='basis-full lg:basis-2/3'>
            <MapContainer
              ref={mapRef}
              center={[42.8452, 22.4997]}
              zoom={7}
              style={{ height: '600px' }}
              className='map-container z-10 rounded-md shadow-2xl'
            >
              <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
              {locations.map((location: any, index: any) => (
                <Marker
                  key={index}
                  position={[location.lat, location.lng]}
                  icon={customIcon}
                >
                  <Popup>
                    <b className='text-xl'>{location.name}</b>
                    <br /> <span className='text-lg'>
                      {location.city}
                    </span> <br />{' '}
                    <span className='text-lg'>{location.phone}</span>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </section>
    )
  }

  if(!landed) {
    return 'not landed'
  }
}

export default MapContainerSection
