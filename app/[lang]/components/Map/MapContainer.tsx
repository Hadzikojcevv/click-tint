import React from 'react'
import Map from './Map'

const locations = [
  {
    name: 'Vlatko Hadjikojcev',
    city: 'Gevgelija',
    phone: '+38972277766',
    lat: 41.1452,
    lng: 22.4997
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

const MapContainer = () => {
  return (
    <section className='def-padding z-10  px-4 md:px-8'>
      <h2 className='mb-8 text-center text-5xl font-bold lg:text-7xl'>
        {' '}
        Контакт{' '}
      </h2>
      <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
        <div className='flex basis-1/3 flex-col items-center justify-center gap-4 md:px-20'>
          {locations.map(location => (
            <div
              key={location.lat}
              className='bg-secondary w-60 rounded-md border-2 border-custom p-4'
            >
              <p className='text-xl font-bold'>{location.name}</p>
              <p className='text-lg font-medium'>City: {location.city}</p>
              <p className='text-lg font-medium'>Phone: {location.phone}</p>
            </div>
          ))}
        </div>

        <div className='basis-2/3'>
          <Map locations={locations} />
        </div>
      </div>
    </section>
  )
}

export default MapContainer
