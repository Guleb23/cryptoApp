import React from 'react'
import Button from '../Components/Button'
import {arrowRight} from '../assets/icons'
import {shoes, statistics} from '../constants.js'
import { bigShoe1 } from '../assets/images/index.js'
import ShoeCard from '../Components/ShoeCard.jsx'
import { useState } from 'react'

export default function Hero() {
  const[bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section id='home' className='w-full 
    flex xl:flex-row flex-col
    gap-10 max-container justify-center min-h-screen '>
      <div className='relative xl:w-2/5 flex flex-col 
      justify-center items-start w-full 
      max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat
        text-coral-red'> Огранниченная коллекция </p>
        <h1 className='mt-10 font-palanquin text-8xl
        max-sm:text-[72px] max-sm:leading-[82] font-bold'>
          <span className='xl:bg-white
          xl:whitespace-nowrap relative z-10 pr-10'>Инвестируй в </span>
          <br/>
          <span className='text-coral-red
          inline-block mt-3'> будущее </span>
          искусства
        </h1>
        <p className='font-montserrat text-lg leading-8
         text-slate-gray mt-6 mb-14 sm:max-w-sm'>
          Наша команда опытных экспертов анализирует рынок, выявляет самые promising проекты и предоставляет вам доступ к информации, которая может сделать вас следующими успешными инвесторами.
        </p>
        <Button label="Купить" iconURL={arrowRight} ></Button>
        <div className='flex justify-start flex-wrap
        w-full mt-20 items-start gap-16'>
          {statistics.map((stat)=>(
            <div key={stat.label}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat
              text-slate-gray text-center'> {stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigShoeImg}
          alt='shoe colletion'
          width={610}
          height={502}
          className='object-contain relative z-10'
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
