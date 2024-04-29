'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

const ClickFormating = () => {
  const pathname = usePathname()

  let final

  switch (pathname) {
    case '/gr':
      final = 'Κλίκ.'
      break
    case '/mk':
      final = 'Клик.'
      break
    
    default:
      final = 'Click.'

      break
  }

  return <>{final}</>
}

export default ClickFormating
