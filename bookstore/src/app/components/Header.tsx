import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='border-b bg-white sticky top-0 z-50'>
        {/* Desktop Header */}
        <div className='container w-[80%] mx-auto hidden lg:flex items-center justify-between p-4'>
            <Link href="/" className='flex items-center'>
            <Image src="" width={450} height={450} alt='desktop_logo' className='h-15 w-auto'/>
            </Link>
        </div>
    </header>
  )
}

export default Header