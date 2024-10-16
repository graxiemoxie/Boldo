import React from 'react'

const NewsLetter = () => {
  return (
      <section className='custom-container mx-auto pt-10 pb-20'>
          <div className="bg-dark-blue  h-[391px] relative rounded-xl w-full z-10 overflow-hidden flex flex-col items-center justify-center">
               <div className="bg-[#1C3D5B] -z-10 w-[1000px] h-[500px] rounded-b-full absolute -top-[300px] -right-[340px]"></div>
          <h3 className='font-manrope text-5xl leading-72 text-center max-w-[716px]'>An enterprise template to ramp up your company website</h3>
          <form className='mt-8 flex items-center gap-4 justify-center'>
              <input type="email" name="email" id="email" placeholder='Your email address' className='outline-none placeholder:text-black bg-white rounded-56 w-[370px] py-4 px-6' />
              <button type="button" className='py-4 px-12 bg-green text-dark-blue rounded-[56px] text-lg font-bold'>Start now</button>
          </form>
         </div>
    </section>
  )
}

export default NewsLetter