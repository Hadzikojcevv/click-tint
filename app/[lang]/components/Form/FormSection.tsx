import React from 'react'
import Form from './Form'

type FormSectionProps = {
  lang: any
}

const FormSection = ({ lang }: FormSectionProps) => {
  return (
    <section className='def-padding bg-secondary'>
      <div className='m-auto flex flex-col lg:flex-row lg:w-9/12 px-4'>
        <div className='flex basis-1/2 flex-col items-center justify-center gap-6 text-center'>
          <h2 className='lg:text-7xl text-5xl font-bold'>{lang.home.form?.title ?? ''}</h2>
          <h3 className='lg:text-4xl text-2xl font-bold '>
            {lang.home.form?.subtitle ?? ''}
          </h3>
          <h4 className='font semibold lg:text-4xl text-2xl'>
            {lang.home.form?.desc ?? ''}
          </h4>
          <p className='lg:text-2xl text-xl font-semibold'>
            {lang.home.form?.anime ?? ''}
          </p>
        </div>
        <div className='basis-1/2 px-4 md:px-8 lg:px-12'>
          <Form lang={lang} />
        </div>
      </div>
    </section>
  )
}

export default FormSection
