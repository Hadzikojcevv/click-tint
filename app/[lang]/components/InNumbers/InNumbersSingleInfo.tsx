'use client'
import CountUp from 'react-countup'
import { SingleInNumberInfoType } from './InNumbersSection'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

type InNumbersSingleInfoPropsType = {
  data: SingleInNumberInfoType
  lang: any
}

const InNumbersSingleInfo = ({ data, lang }: InNumbersSingleInfoPropsType) => {
  const [hasStarted, setHasStarted] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 10% of the section is visible
    triggerOnce: true,
    onChange: (inView) => {
      if (inView) setHasStarted(1); // Start the counter when in view
    },
  })

  return (
    <div
      ref={ref}
      className='mb-4 flex flex-col items-center justify-center text-center lg:mb-0'
    >
      <h3 className='mb-4 whitespace-nowrap text-4xl font-extrabold text-custom lg:text-5xl'>
  
      <CountUp start={hasStarted} end={data.number} duration={3} startOnMount={false}  />
        {lang.home.inNumbers[data.title]}
      </h3>
      <p className='lg:text-md text-sm font-bold uppercase tracking-widest text-neutral-700'>
        {lang.home.inNumbers[data.desc]}
      </p>

      {data.desc2 && (
        <p className='lg:text-md text-sm font-bold uppercase tracking-widest text-neutral-700'>
          {lang.home.inNumbers[data.desc2]}
        </p>
      )}
      {data.desc3 && (
        <p className='lg:text-md text-sm font-bold uppercase tracking-widest text-neutral-700'>
          {lang.home.inNumbers[data.desc3]}
        </p>
      )}
    </div>
  )
}

export default InNumbersSingleInfo
