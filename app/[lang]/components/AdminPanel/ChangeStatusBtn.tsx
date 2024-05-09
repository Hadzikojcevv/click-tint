'use client'

import { usePathname, useRouter } from "next/navigation"
import { ContactType } from "../../private-adm-tint/contacts/page"

type BtnProps = {
    contact: ContactType,
    // handleAnswered: (contact: ContactType, status: boolean) => void
 }

const ChangeStatusBtn = ({contact}: BtnProps) => {

    const router = useRouter()
    const pathname = usePathname()

    const handleAnswered = async (contact: ContactType, status: boolean) => {
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...contact, isAnswered: status })
      }
  
      const response = await fetch(
        `https://stupendous-scalloped-vanadium.glitch.me/contacts/${contact.id}`,
        requestOptions
      )
      const data = await response.json()

      router.refresh()
      
    }

  return (
    <button
      className={`${contact.isAnswered ? `bg-red-400` : `bg-primary`} rounded-md px-2 py-1 text-xs font-semibold text-white transition-colors delay-100 ease-out hover:${contact.isAnswered ? `bg-red-500` : "bg-white"} hover:${contact.isAnswered ? `text-red-400` : 'text-custom'}`}
      onClick={() => {
        handleAnswered(contact, contact.isAnswered ? false : true)
      }}
    >
        {contact.isAnswered ? 'Mark Pending' : 'Mark Done'}
      
    </button>
  )
}

export default ChangeStatusBtn
