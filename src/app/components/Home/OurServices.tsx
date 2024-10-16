import Image from 'next/image'
import React from 'react'
import { ourServices } from '../../constants'

const OurServices = () => {

    
  return (
      <section id='services' className='text-black mt-24'>
          <div className=' max-w-80 mx-auto py-24 flex flex-col items-center justify-center'>
          <h3 className='text-lg leading-8 text-center'>Our Services</h3>
          <h2 className='text-5xl text-manrope w-[842px] text-center mt-4 mb-20 font-normal'>Handshake infographic mass market crowdfunding iteration.</h2>
          <div>
              <div className='flex flex-row justify-around gap-20'>
                  
              {ourServices.map((service, i) => (
                  <div key={`service_${i}`} className='w-[300px]' >
                      <Image src={`${service.image}`} alt={service.title} width={300} height={354} />
                      <h4 className='text-2xl leading-9 my-4'>{service.title}</h4>
                      <p className='text-lg leading-8'>{service.description}</p>
                      <button type="button" className='group leading-8 mt-5 text-lg font-bold border-b border-black pb-1'>Explore page
                          <span className='transition-transform duration-300 transform translate-x-0 group-hover:translate-x-2 group-hover:ml-2 ml-1'><i className="bi bi-arrow-right-short"></i></span>
                      </button>
                  </div>
              ))}
              </div>
          </div>
          </div>
    </section>
  )
}

export default OurServices