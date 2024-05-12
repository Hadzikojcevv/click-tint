'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import L from 'leaflet'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { usePathname } from 'next/navigation'
import { handleMapCenter } from '../Helpers/HandleMapCenter'
import { locations, useLocations } from '../Helpers/useLocations'



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
  const pathname = usePathname()
  const mapRef = useRef<any>(null)
  const [landed, setLanded] = useState(false)
  const filteredLocations = useLocations()

  console.log(filteredLocations)

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
          <div className='flex basis-full flex-wrap justify-center gap-4  px-10 lg:basis-2/5 lg:justify-between'>
            {pathname !== '/br' ? (
              <>
                {filteredLocations.map(location => (
                  <button
                    type='button'
                    aria-label='Navigate to the location of seller.'
                    key={location.lat}
                    style={{
                      width: '300px'
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
                      <p className='text-lg font-medium'>
                        {location.firm ?? ''}
                      </p>
                    )}
                    {location.phone && (
                      <p className='text-lg font-medium'>
                        Phone: {location.phone ?? ''}
                      </p>
                    )}

                    <p className='text-lg font-medium'>
                      Email: {location.email ?? ''}
                    </p>
                  </button>
                ))}
              </>
            ) : (
              <><button
              type='button'
              aria-label='Navigate to the location of seller.'
              style={{
                width: '300px'
              }}
              className='image-tinter relative rounded-md border-2 border-custom p-4 text-left shadow-xl transition-transform delay-75 duration-100 ease-in-out hover:scale-105 '
              onClick={() => {
                handleButtonClick([-23.533773, -46.62529])
              }}
            >
              <Image
                className='absolute right-1 top-1 z-30'
                src={'https://i.imgur.com/nCrWo6d.png'}
                alt='Logo'
                width={70}
                height={70}
              />
              <p className='text-xl font-bold'>Luciano Genzani</p>
              <p className='text-lg font-medium'>
                City: Sao Paulo
              </p>

              
    

              <p className='text-lg font-medium'>
                Email: lucgenzani@gmail.com
              </p>
            </button></>
            )}
          </div>

          <div className='basis-full lg:basis-3/5'>
            <MapContainer
              ref={mapRef}
              center={handleMapCenter(pathname) as [number,number]}
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
                        <br />{' '}
                        <span className='text-lg font-medium'>
                          {location.firm}
                        </span>
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
