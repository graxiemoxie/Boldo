import React from 'react'
import Image from 'next/image';
import { logos } from '../../constants';

const LogoWall = () => {
  
  return (
    <div className='custom-container mx-auto overflow-hidden mt-20 relative'>
      <div className='flex  animate-scroll justify-between gap-12'>
        {Array(6).fill(logos).flat().map((logo, index) => (
        <Image
          key={index}
          src={logo}
          alt='hero graphics'
          width={145}
          height={42}
        />
        ))}
         {Array(6).fill(logos).flat().map((logo, index) => (
          <div key={`duplicate-${index}`} className='min-w-[145px] h-[42px]'>
            <Image
              src={logo}
              alt='logo'
              width={145}
              height={42}
              className='h-auto'
            />
          </div>
        ))}
       </div>
      <div className='w-full h-[100px] bg-logoWall absolute top-0 right-0'></div>
    </div>
  )
}

export default LogoWall