import React from 'react'
import doorImage from '../../../../public/assets/doorOff.jpg'
import windowsImage from '../../../../public/assets/windowsOff.jpg'
import Image from 'next/image'

const Description = () => {
  return (
    <section className='def-padding'>
      <h2 className='mb-16 text-center text-6xl uppercase tracking-tighter font-bolder'>Пaметна Фолија</h2>
      <div className='m-auto flex w-8/12 gap-10'>
        <div className='flex basis-1/3 flex-col justify-center gap-6'>
          <div>
            <p className='text-primary text-6xl font-bold uppercase tracking-tighter'>
              logo
            </p>
            <p className='text-2xl uppercase text-neutral-700 tracking-widest'>Za proizvodot</p>
          </div>

          <p className='text-lg'>
            SmartGlass film je PDLC folija koja prilikom električnog nabijanja
            čestica tekućih kristala stvara efekat potpunog zamračenja stakla.
          </p>
          <p className='text-lg'>
            Kada se folija uključi, tečni kristali se poravnavaju u istom smeru,
            u tom trenutku svetlo može prolaziti te folija postaje transparentna
            (providna), a prilikom isključivanja električne energije folija
            postaje mlečno bela (mat).
          </p>
          <p className='text-lg'>
            Folija je dostupna u širinama do 1.8 m. Ukoliko je površina šira
            onda se apliciraju 2 ili više folija paralelno, sa minimalnim
            razmakom od 1 mm.
          </p>
        </div>
        <div className='flex basis-2/3 gap-6'>
          <Image src={doorImage} alt='door' className='basis-1/2 shadow-2xl' />
          <Image src={windowsImage} alt='door' className='basis-1/2 shadow-2xl' />
        </div>
      </div>
    </section>
  )
}

export default Description
