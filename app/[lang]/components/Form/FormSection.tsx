import Form from './Form'

type FormSectionProps = {
  lang: any
}

const FormSection = ({ lang }: FormSectionProps) => {
  return (
    <section className='def-padding bg-secondary' id='mainForm'>
      <div className='m-auto flex flex-col px-4 lg:w-9/12 lg:flex-row'>
        <div className='flex basis-1/2 flex-col items-center justify-center gap-6 text-center'>
          <h2 className='text-5xl font-bold lg:text-7xl'>
            {lang.home.form?.title ?? ''}
          </h2>
          <h3 className='text-2xl font-bold lg:text-4xl '>
            {lang.home.form?.subtitle ?? ''}
          </h3>
          <h4 className='font semibold text-2xl lg:text-4xl'>
            {lang.home.form?.desc ?? ''}
          </h4>
          <p className='text-xl font-semibold lg:text-2xl'>
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
