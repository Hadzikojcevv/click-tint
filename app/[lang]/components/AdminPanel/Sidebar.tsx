import React from 'react'

type SidebarProps = {
    title: string,
    children: JSX.Element,
    side: 'left' | 'right'
}

const Sidebar = ({title = "Contacts", children, side = 'left'}: SidebarProps) => {
  return (
    <div className={`p-4  ${side === 'left' ? 'border-r-2 w-full lg:w-2/12' : 'border-l-2 w-full lg:w-4/12'}  border-t-2 border-custom`}>
        <h2 className='text-xl font-semibold mb-4 text-center uppercase'>{title}</h2>
        {children}
    </div>
  )
}

export default Sidebar