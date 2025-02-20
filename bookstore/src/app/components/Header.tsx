import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='border-b bg-white sticky top-0 z-50'>
        {/* Desktop Header */}
        <div className='container w-[80%] mx-auto hidden lg:flex items-center justify-between p-4'>
            <Link href="/" className='flex items-center'>
            <Image src="" width={450} height={100} alt='desktop_logo' className='h-15 w-auto'/>
            </Link>

            <div className='flex flex-1 items-center justify-center max-w-xl px-4'>
              <div className='relative w-full'>
                <Input type='text' placeholder='Book Name / Author / Subject / Publisher' className='w-full pr-10'/>
                <Button size='icon' variant="ghost" className='absolute right-0 top-1/2 -translate-y-1/2'/>
              </div>
            </div>
        </div>
    </header>
  )
}

export default Header