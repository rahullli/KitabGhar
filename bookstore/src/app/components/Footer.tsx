import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-300'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid gap-12 md:grid-cols-4'>
          <div>
            <h3 className='mb-4 text-lg font-semibold text-white'>ABOUT US</h3>
            <ul className='space-y-2'>
              <li className='cursor-pointer'>
                <Link href="/about-us" className='hover:text-white'>About us</Link>
              </li>
              <li className='cursor-pointer'>
                <Link href="/contact-us" className='hover:text-white'>Contact us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='mb-4 text-lg font-semibold text-white'>USEFUL LINKS</h3>
            <ul className='space-y-2'>
              <li className='cursor-pointer'>
                <Link href="/how-it-works" className='hover:text-white'>How it works</Link>
              </li>
              <li className='cursor-pointer'>
                <Link href="/blogs" className='hover:text-white'>Blogs</Link>
              </li>
            </ul>
          </div>


          <div>
            <h3 className='mb-4 text-lg font-semibold text-white'>POLICIES</h3>
            <ul className='space-y-2'>
              <li className='cursor-pointer'>
                <Link href="/how-it-works" className='hover:text-white'>Terms of Use</Link>
              </li>
              <li className='cursor-pointer'>
                <Link href="/blogs" className='hover:text-white'>Blogs</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='mb-4 text-lg font-semibold text-white'>STAY CONNECTED</h3>
            <div className='mb-4 flex space-x-4'>
                <Link href="#" className='hover: text-white'>
                   <Facebook className='h-6 w-6'/>
                </Link>
                <Link href="#" className='hover: text-white'>
                   <Instagram className='h-6 w-6'/>
                </Link>
                <Link href="#" className='hover: text-white'>
                   <Youtube className='h-6 w-6'/>
                </Link>
                <Link href="#" className='hover: text-white'>
                   <Twitter className='h-6 w-6'/>
                </Link>
            </div>

            <p className='text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ducimus nostrum adipisci facilis quia totam tempore repudiandae consequatur fugit asperiores accusamus esse illum modi laudantium, quos maiores alias excepturi beatae.
            </p>
          </div>
        </div>

        {/* Feature Section */}
      </div>
    </footer>
  )
}

export default Footer