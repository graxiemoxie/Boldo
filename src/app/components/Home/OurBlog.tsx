import React from 'react'
import { blogs } from '../../constants'
import Image from 'next/image'

const OurBlog = () => {
  return (
      <section id='ourBlog' className='text-dark-blue pt-8 pb-20 flex items-center flex-col justify-center'>
          <h5 className='text-lg text-gray-2 text-center'>Our Blog</h5>
          <h2 className='font-manrope text-5xl text-black leading-72 max-w-[842px] mx-auto text-center'>Value proposition accelerator product management venture</h2>
          <ul className='flex flex-row gap-11 py-16'>
              {blogs.map((b, i) => (
                  <li key={`blog_${i}`} className='w-[298px] h-[424px] flex flex-col justify-between'>
                      <Image src={b.img} alt={b.author} width={298} height={209} className='rounded-3xl' />
                      <div className='flex items-center gap-4'>
                          <span className='text-base font-bold text-dark-blue'>Category</span> 
                          <small className='text-base text-gray-2'>November 22, 2021</small>
                      </div>
                      <div className='text-lg text-black  leading-8'>{b.text}</div>
                      <div className='mt-5 flex items-center flex-row gap-3'>
                          <Image src={b.authorImg} alt={b.author} width={32} height={32} />
                          <p className='text-base text-black left-7'>{b.author}</p>
                      </div>
              </li>
             ))}
          </ul>
          <button type="button" className='text-lg border-2 border-dark-blue py-4 font-bold px-14 rounded-56'>Load More</button>
    </section>
  )
}

export default OurBlog