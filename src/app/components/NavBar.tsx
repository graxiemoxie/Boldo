import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex flex-row justify-between items-center custom-container mx-auto my-10'>
      <Link href={'/'}><Image src={'/images/boldoLogo.svg'} alt='logo' width={162.22} height={42} /></Link>
      <ul className='flex flex-row w-[419px] justify-between items-center'>
        <li className='capitalize text-opensans text-base hover:underline font-semibold'><Link href={'/product'}>product</Link></li>
        <li className='capitalize text-opensans text-base hover:underline font-semibold'><Link href={'Services/'}>Services</Link></li>
        <li className='capitalize text-opensans text-base hover:underline font-semibold'><Link href={'/About'}></Link>About</li>
        <button  className='capitalize text-opensans text-base  bg-white text-black w-32 h-10 rounded-3xl font-bold'>Log in</button>
      </ul>
    </nav>
  )
}

export default NavBar