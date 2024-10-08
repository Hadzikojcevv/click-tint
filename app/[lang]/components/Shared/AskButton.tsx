'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import MainCta from './MainCta'
import { usePathname } from 'next/navigation'

type AskButtonProps = {
  page: any,
  lang: string
}

function scrollToSectionWithOffset(hash: string) {
  const targetElement = document.querySelector(hash);
  if (targetElement) {
    const offset = 106; // Adjust this to the height of your fixed navigation bar
    const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
}

const AskButton = ({ page, lang }: AskButtonProps) => {

  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(true)

  // useEffect(() => {
    
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY || document.documentElement.scrollTop
  //     const triggerScrollPosition = 6000

  //     setIsVisible(scrollY < triggerScrollPosition)
  //   }

  //   window.addEventListener('scroll', handleScroll)

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])

  // useEffect(() => {
  //   if (pathname.includes('#')) {
  //     scrollToSectionWithOffset(pathname.split('#')[1]);
  //   }
  // }, [pathname]);

  // const handleClick = (e: any) => {
  //   e.preventDefault();
  //   scrollToSectionWithOffset('#mainForm');
  // };
  
  useEffect(() => {

    if(pathname.includes('contact')) {
      setIsVisible(false)
    }else {
      setIsVisible(true)
    }

  }, [pathname])

  return (
    <Link
      href={`/${lang}/contact`}
      className={`${isVisible ? "fixed" : "hidden"} bottom-3 right-3 z-50`}
      type='button'
      aria-label='Go To Ask For Price Section'
      // onClick={handleClick}
    >
      <MainCta text={page.footer.btn ?? 'Ask For Price!'} />
    </Link>
  )
}

export default AskButton
