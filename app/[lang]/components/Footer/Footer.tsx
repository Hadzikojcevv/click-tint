import { getDictionary } from '@/lib/dictionary'
import Image from 'next/image'
import Link from 'next/link'
import Partner from '../Partner/Partner'
import AskButton from '../Shared/AskButton'

const Footer = async ({ lang }: { lang: any }) => {
  const page = await getDictionary(lang)

  console.log(lang, 'FOOTER');
  
  return (
    <>
      <footer className='bg-tetriary pt-8'>
        <Partner lang={page}/>
        <div className='m-auto flex w-11/12 flex-col justify-between gap-4 text-lg text-white md:w-9/12 lg:flex-row lg:items-center lg:gap-0'>
          <Image
            src={'https://i.imgur.com/DECNrPi.png'}
            alt='Logo'
            width={200}
            height={200}
          />
          <div className='text-md'>
            <p className='font-semibold'>{page.footer.adress ?? ''}</p>
            <p>{page.footer?.adressInfo ?? ''}</p>
          </div>
          <div>
            <p className='font-semibold'>
              {page.footer?.mobile ?? 'Telephone'}
            </p>
            <p>{page.footer?.mobileInfo ?? ''}</p>
            {page.footer?.mobileInfo3 !== '' && (
              <p>{page.footer?.mobileInfo3 ?? ''}</p>
            )}
            {page.footer?.mobileInfo2 !== '' && (
              <p className='underline'>
                <a href={`tel:${page.footer?.mobileInfo2}`}>{page.footer?.mobileInfo2 ?? ''}</a>
              </p>
            )}
          </div>
          <div>
            <p className='font-semibold'>{page.footer?.email ?? 'Email'}</p>
            <p className='underline'>
                <a href={`mailto:${page.footer?.emailInfo}`}>{page.footer?.emailInfo ?? 'clicktint@yahoo.com'}</a>
              </p>
          </div>
        </div>
        <div className='border-thin-top-white m-auto mt-8 flex flex-col lg:flex-row w-11/12 justify-start items-start lg:items-center md:w-9/12 lg:gap-x-56'>
          <div className='flex flex-col items-start gap-4 py-4 text-white md:flex-row md:items-center md:justify-start'>
            <p className='order-2 text-sm md:order-1'>© 2024 Click Tint</p>
            <div className='order-1 flex items-center gap-4 md:order-2'>
              <Link
                href={'https://www.instagram.com/click.tint'}
                target='_blank'
              >
                <Image
                  src={'https://i.imgur.com/BDLf7RY.png'}
                  alt='Instagram'
                  width={30}
                  height={30}
                />
              </Link>
              <Link
                href={'https://www.facebook.com/profile.php?id=61555550410036'}
                target='_blank'
              >
                <Image
                  src={'https://i.imgur.com/Y4mFOW5.png'}
                  alt='Facebook Link'
                  width={30}
                  height={30}
                />
              </Link>
              <Link
                href={'https://www.youtube.com/@ClickTint'}
                target='_blank'
              >
                <Image
                  src={'https://i.imgur.com/GuQbLJv.png'}
                  alt='YoutubeLink'
                  width={30}
                  height={30}
                />
              </Link>
              <Link
                href={'https://www.linkedin.com/company/click-tint/'}
                target='_blank'
              >
                <Image
                  src={'https://i.imgur.com/rv7pqyB.png'}
                  alt='Linked Link'
                  width={30}
                  height={30}
                />
              </Link>
            </div>
          </div>
          <Link href={'https://zicgroupbpo.com/'} target='_blank' className='flex gap-x-4 text-white mb-4 lg:mb-0'>
            Powered By:
            <Image
              src={'https://i.imgur.com/TbweC3p.png'}
              alt='Developers Team'
              width={130}
              height={30}
            />
          </Link>
        </div>
      </footer>

      <AskButton page={page} lang={lang}/>
    </>
  )
}

export default Footer
