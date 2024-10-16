import React from 'react'
import { testimonies } from '../../constants'
import Image from 'next/image'

const EnterPriceTemplate = () => {
    
    return (
      <section className='my-24 mx-auto custom-container'>
      <div className='flex flex-row justify-between mb-16'>
                <h5 className='text-5xl self-start leading-[72px] font-manrope max-w-[716px]'>An enterprise template to ramp up your company website</h5>
                <div className='self-end h-20 w-[172px] flex justify-between'>
                    <button type="button" name='button-left' className=''><i className="bi bi-arrow-left-circle-fill text-[72px]"></i></button>
                    <button type="button" name='button-right' className=''><i className="bi bi-arrow-right-circle-fill text-[72px]"></i></button>
                </div>
            </div>
            <ul className='flex flex-row gap-5'>
                {testimonies.map((t, i) => (
                    <li key={`testimony_${i}`} className='shadow-custom-3 bg-white p-10 h-fit w-[350px] text-dark-blue rounded-xl'>
                        <p className='text-2xl text-black mb-7'>{`“${t.testimony}”`}</p>
                        
                        <section className='flex items-center gap-5'>
                            <Image src={t.img} alt={t.author} width={58} height={58} className='rounded-full' />
                            <div>
                                <h6 className='text-base font-bold'>{t.author}</h6>
                                <small className='text-sm'>{t.title}</small>
                            </div>
                        </section>
                    </li>
                ))}
            </ul>
      </section>
  )
}

export default EnterPriceTemplate