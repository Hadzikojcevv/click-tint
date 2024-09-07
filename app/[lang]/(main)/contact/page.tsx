import React from 'react'
import FormSection from '../../components/Form/FormSection'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

const ContactPage = async ({
    params: { lang }
  }: {
    params: { lang: Locale }
  }) => {

    const { page } = await getDictionary(lang)


  return (
    <section>
        <FormSection lang={page} />
    </section>
  )
}

export default ContactPage