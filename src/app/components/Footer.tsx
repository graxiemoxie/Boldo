import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
      <footer className='flex flex-row custom-container mx-auto gap-28 py-24'>
          <div>
              <Link href={"/"}><Image src={"/images/footer_logo.svg"} alt='logo' width={156} height={41} /></Link>
              <p className='text-base leading-7 text-gray-2 max-w-[300px] mt-10 mb-16'>Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</p>
              <small className='text-sm text-gray-2 leading-7'>All rights reserved.</small>
          </div>
          <div className='max-w-[720px] w-full'>
              <table className="min-w-full border-collapse text-dark-blue">
    <thead>
      <tr className="bg-gray-200 text-black leading-8">
        <th className="px-4 pb-6 text-lg text-start">Landings</th>
        <th className="px-4 pb-6 text-lg text-start">Company</th>
        <th className="px-4 pb-6 text-lg text-start">Resources</th>
      </tr>
    </thead>
    <tbody>
      <tr className='text-lg leading-8 text-gray-2'>
        <td className="px-4 py-4"><Link href={"/"}>Home</Link></td>
        <td className="px-4 py-4"><Link href={"/"}>Home</Link></td>
        <td className="px-4 py-4"><Link href={"ourBlog"}>Blog</Link></td>
      </tr>
      <tr className='text-lg leading-8 text-gray-2'>
        <td className="px-4 py-4"><Link href={"/"}>Products</Link></td>
        <td className="px-4 py-4"><Link href={"/"}>Careers &nbsp; </Link><span className='bg-green text-dark-blue py-1 px-3 text-[13px] font-bold rounded-[120px]'>Hiring!</span></td>
        <td className="px-4 py-4"><Link href={"/"}>Products</Link></td>
      </tr>
      <tr className='text-lg leading-8 text-gray-2'>
        <td className="px-4 py-4"><Link href={"#services"}>Services</Link></td>
        <td className="px-4 py-4"><Link href={"#services"}>Services</Link></td>
        <td className="px-4 py-4"><Link href={"#services"}>Services</Link></td>
      </tr>
    </tbody>
  </table>
          </div>
    </footer>
  )
}

export default Footer