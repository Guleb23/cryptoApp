import React from 'react'
import { star } from '../assets/icons'
import { useNavigate } from 'react-router-dom'


export default function PupularProductCard({ imgURL, name, price, description, rating }) {
  return (
    <>
      < div className='p-4 flex flex-1 flex-col w-full max-sm:w-full align-middle justify-center shadow-xl rounded-3xl' >
        <img src={imgURL} className=' h-[280px]' />
        <div className='mt-8 flex  justify-start gap-2.5'>
          <img src={star} width={24} height={24} />
          <p className='font-montserrat text-xl leading-normal text-slate-gray'> ({rating})</p>
        </div>
        <h3 className='mt-2 text-xl leading-normal font-semibold font-palanquin'>{name}</h3>
        <p className='lg:max-w-lg font-montserrat text-slate-gray'> {description} </p>
        <p className='mt-2 font-montserrat font-semibold leading-normal text-2xl text-coral-red'> {price}</p>

      </div >
    </>



  )
}
