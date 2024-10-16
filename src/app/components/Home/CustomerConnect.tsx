import Image from 'next/image'
import React from 'react';
import DonutChart from '../DonutChart';
import { piedata } from '../../constants';


const CustomerConnect = () => {

    
    
    return (
      <>
      <section className='custom-container mx-auto py-32 bg-white text-dark-blue flex flex-row  justify-around'>
          <div className='relative'>
              <Image src={"/images/man_on_phone.png"} alt='customer connect' width={494} height={506} />
              <div className='absolute -bottom-20 right-14 rounded-xl text-dark-blue w-[251px] h-[388px] bg-white shadow-custom font-manrope flex gap-5 items-center justify-center flex-col'>
                  <Image src={"/images/june_income_chart.png"} alt='income-chart' width={170} height={227.21} />
                  <div className='flex flex-col items-start w-[170px]'>
                  <p className='text-2xl font-bold '>30%</p>
                      <p className='text-sm mt-2'>More income in June</p>
                  </div>
              </div>
          </div>
          <div className='w-[493px] pt-16'>
              <h4 className='text-4xl font-manrope leading-56 mb-10'>We connect our customers with the best, and help them keep up-and stay open.</h4>
              <ul>
                  <li className='text-lg leading-9 flex items-center justify-start gap-5 py-2.5'><i className="bi bi-check-circle-fill text-4xl"></i>We connect our customers with the best.</li>
                  <li className='text-lg leading-9 flex items-center justify-start gap-5 py-2.5'><i className="bi bi-check-circle-fill text-4xl"></i>Advisor success customers launch party.</li>
                   <li className='text-lg leading-9 flex items-center justify-start gap-5 py-2.5'><i className="bi bi-check-circle-fill text-4xl"></i>Business-to-consumer long tail.</li>
              </ul>
              <button type="button" className='py-4 px-12 bg-dark-blue rounded-[56px] mt-10 text-lg text-white font-bold'>Start now</button>
          </div>
            </section>
            <section className='custom-container mx-auto pt-32 pb-60 bg-white text-dark-blue flex flex-row items-center justify-around'>
                <div className='max-w-[493px]'>
                    <h4 className='text-4xl font-manrope mb-10 leading-56 text-black'>We connect our customers with the best, and help them keep up-and stay open.</h4>
                    <ul className='text-black'>
                        <li className='text-lg font-semibold rounded leading-9 flex items-center justify-start gap-5 p-4 my-6 bg-dark-blue text-white'><div className="transform rotate-[61deg] w-6 h-6 flex items-center justify-start"><i className="bi bi-feather2 text-3xl"></i></div>We connect our customers with the best.</li>
                        <li className='text-lg font-semibold rounded leading-9 flex items-center justify-start gap-3 p-4 my-6 shadow-custom-2'><i className="bi bi-eye text-3xl"></i>Advisor success customer launch party.</li>
                        <li className='text-lg font-semibold rounded leading-9 flex items-center justify-start gap-3 p-4 my-6 shadow-custom-2'><i className="bi bi-brightness-high text-3xl"></i>Business-to-consumer long tail.</li>
                    </ul>
                </div>
                <div className='relative'>
                    <Image src={"/images/frau_on_phone.png"} alt='woman' width={444} height={523} />
                    <div className="flex bg-white shadow-custom rounded-xl items-centre justify-center py-6 w-[291px] absolute -bottom-40 left-10 ">
                        <div className='w-[179.42px]'>
                        <DonutChart piedata={piedata} />
                        <ul className='my-5'>
                            {piedata.map((data, i) => (
                                <li key={`piechartdata_${i}`} className='font-manrope text-black text-[13.88px] py-2 flex items-center gap-2.5'><i style={{background: data.colour}} className={`w-1.5 h-1.5 block rounded-full`}></i>{`${data.value}% `}- { data.label}</li>
                            ))}
                        </ul>
                    </div>
                    </div>
                </div>
            </section>
      </>
  )
}

export default CustomerConnect