import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
      <section className='flex flex-row items-center justify-between custom-container mx-auto pt-5'>
          <div className='max-w-[567px]'>
              <h1 className='text-5xl font-manrope leading-[72px]'>Save time by building  fast with Boldo Template </h1>
              <p className='text-base text-light-gray my-4'>Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</p>
              <div className='mt-8 flex flex-row gap-5'>
                  <button type="button" className='w-[247px] h-[60px] bg-green rounded-[56px] text-dark-blue text-lg font-bold'>Buy template</button>
                   <button type="button" className='border-2 border-white w-[187px] h-[60px] rounded-[56px] text-lg font-bold'>Explore</button>
              </div>
          </div>
          <div>
              <Image src={'/images/hero graphics.svg'} alt='hero graphics' width={493.86} height={423} />
          </div>
    </section>
  )
}

export default HeroSection