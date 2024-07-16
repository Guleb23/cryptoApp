import React from 'react'
import Button from '../Components/Button'
import { arrowRight } from '../assets/icons'
import {  shoe8 } from '../assets/images'

export default function SuperQuality() {
  return (
    <div id='about-us' className='flex  justify-between items-center max-lg:flex-col gap-10
    w-full max-container' >
      <div className='flex flex-1 flex-col'>
        <h2 className=' font-palanquin text-4xl
        lg:max-w-lg font-bold'>
          Мы предоставляем вам 
          <span className='text-coral-red
          inline-block mt-3'>надежные контракты</span>
          
        </h2>
        
        <p className='mt-4 lg:max-w-lg info-text'>
          Вы сможете заработать ничего не делая, мы все сделаем за вас
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Мы ручаемся за ваши деньги нашим опытом
        </p>
        <div className='mt-11'>
          <Button label="Подробнее" iconURL={arrowRight} ></Button>
          </div>
  
      </div>
      <div className='flex flex-1 justify-center items-center'>
        <img src={shoe8} width={570} height={522} className='object-contain'/>
      </div>
    </div>
  )
}
