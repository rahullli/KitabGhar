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
              <li className=''>
                <Link href="/about-us">About us</Link>
              </li>
              <li className=''>
                <Link href="/contact-us">Contact us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='mb-4 text-lg font-semibold text-white'>USEFUL LINKS</h3>
            <ul className='space-y-2'>
              <li className=''>
                <Link href="/how-it-works">How it works</Link>
              </li>
              <li className=''>
                <Link href="/blogs">Blogs</Link>
              </li>
            </ul>
          </div>


        </div>
      </div>
    </footer>
  )
}

export default Footer