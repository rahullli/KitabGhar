import { Clock, Facebook, HeadphonesIcon, Instagram, Shield, Twitter, Youtube } from 'lucide-react'
import Image from 'next/image'
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
                <Link href="/how-it-works" className='hover:text-white'>How it works?</Link>
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
                <Link href="/terms-of-use" className='hover:text-white'>Terms of Use</Link>
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
        <section className = "py-6">
          <div className="container mx-auto px-4">
            <div className = "grid gap-8 md:grid-cols-3">
              <div className = "flex items-center gap-4 rounded-xl p-6 shadow-sm">
                <div className = "rounded-full p-3">
                  <Shield className = "w-6 h-6"/>
                </div>
                <div>
                  <h3 className = "font-semibold">Secure Payment</h3>
                  <p className = "text-sm text-gray-500">100% Secure Online Transaction</p>
                </div>
              </div>

               <div className = "flex items-center gap-4 rounded-xl p-6 shadow-sm">
                <div className = "rounded-full p-3">
                  <Clock className = "w-6 h-6"/>
                </div>
                <div>
                  <h3 className = "font-semibold">BookKart Trust</h3>
                  <p className = "text-sm text-gray-500">Money transfered safely after confirmation</p>
                </div>
              </div>

               <div className = "flex items-center gap-4 rounded-xl p-6 shadow-sm">
                <div className = "rounded-full p-3">
                  <HeadphonesIcon className = "w-6 h-6"/>
                </div>
                <div>
                  <h3 className = "font-semibold">Customer Support</h3>
                  <p className = "text-sm text-gray-500">Friendly Customer Support</p>
                </div>
              </div>
            </div>
          </div>
        </section>



        <div className = "mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          <p className='text-sm text-gray-400'>&copy; {new Date().getFullYear()} BookKart. All rights reserved</p>
          <div>
            <Image src ='/icons/visa.svg' alt="visa" height={30} width={50} className='filter brightness-20 invert'/>
            <Image src ='/icons/rupay.svg' alt="rupay" height={30} width={50} className='filter brightness-20 invert'/>
            <Image src ='/icons/paytm.svg' alt="paytm" height={30} width={50}/>
            <Image src ='/icons/upi.svg' alt="upi" height={30} width={50} className='filter brightness-20 invert'/>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer