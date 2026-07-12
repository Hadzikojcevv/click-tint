import Image from 'next/image'
import Script from 'next/script'
import { Locale } from '@/i18n.config'

type EmbeddedFormSectionProps = {
  lang: Locale
  page: any
}

const embeddedForms: Partial<
  Record<
    Locale,
    {
      formId: string
      formName: string
      height: number
    }
  >
> = {
  gr: {
    formId: 'fINDR9MG5L8N7V1LGxkc',
    formName: 'Website form ',
    height: 790
  },
  mk: {
    formId: 'h8ipEz6nL0FXZScJQRRR',
    formName: 'МК ФОРМА ',
    height: 1003
  }
}

export const embeddedFormLocales = Object.keys(embeddedForms) as Locale[]

const EmbeddedFormSection = ({ lang, page }: EmbeddedFormSectionProps) => {
  const form = embeddedForms[lang]
  if (!form) {
    return null
  }

  const { formId, formName, height } = form

  return (
    <>
      <section className='py-28 px-0 md:px-8 '>
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
              {page.home.form?.title ?? 'Επικοινωνήστε μαζί μας τώρα !'}
            </p>
          </div>
        </div>
        <div style={{ width: '100%', height: `${height}px`, marginTop: '2rem' }}>
          <iframe
            src={`https://api.leadconnectorhq.com/widget/form/${formId}`}
            style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
            id={`inline-${formId}`}
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name={formName}
            data-height={String(height)}
            data-layout-iframe-id={`inline-${formId}`}
            data-form-id={formId}
            title={formName}
          />
        </div>
      </section>
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </>
  )
}

export default EmbeddedFormSection
