'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import page from '../../page'
import MainCta from './MainCta'

type AskButtonProps = {
    page:any
}

const AskButton = ({page}: AskButtonProps) => {

    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            
          const scrollY = window.scrollY || document.documentElement.scrollTop;
          const triggerScrollPosition = 6000;
    
          setIsVisible(scrollY < triggerScrollPosition);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


  return (
    <Link
      href='#mainForm'
      className={`${isVisible ? 'fixed' : 'hidden'}  bottom-3 right-3 z-50`}
      type='button'
      aria-label='Go To Ask For Price Section'
    >
      <MainCta text={page.footer.btn ?? 'Ask For Price!'} />
    </Link>
  )
}

export default AskButton
