// import Image from 'next/image'
import React from 'react'

const OfficeSpace = () => {
  return (
      <section className='text-dark-blue py-24 custom-container mx-auto'>
          <div className='bg-customer-connect bg-fixed bg-cover bg-center w-[1100px] h-[403px] rounded-3xl relative mx-auto'></div>
          <div className='flex items-center justify-between pt-12'>
              <p className='font-manrope max-w-[500px] text-black text-4xl leading-56'>We connect our customers with the best, and help them keep up-and stay open.</p>
              <ul className='w-full max-w-[500px]'>
                  <li className='text-lg border-b pb-3 border-gray leading-8 flex items-center justify-between'>
                      <span>We connect our customers with the best?</span>
                      <button className='flex items-center justify-center w-7 h-7 rounded-full bg-dark-blue'>
                          <i className="bi bi-chevron-down stroke-white stroke-2  text-white"></i>
                      </button>
                  </li>
                  <li className='text-lg border-b pt-5 pb-3 border-gray leading-8 flex items-center justify-between'>
                      <span>Android research & development rockstar?</span>
                      <button className='flex items-center justify-center w-7 h-7 rounded-full bg-dark-blue'>
                          <i className="bi bi-chevron-down stroke-white stroke-2  text-white"></i>
                      </button>
                  </li>
              </ul>
          </div>
    </section>
  )
}

export default OfficeSpace