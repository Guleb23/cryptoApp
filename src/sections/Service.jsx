import React from 'react'
import { services } from '../constants'
import ServiceCard from '../Components/ServiceCard'

export default function Service() {
  return (
    <div className='max-conatiner flex justify-center flex-wrap gap-9'>
      {services.map((service) =>(
        <ServiceCard key={service.label} {...service} />
      ))}
    </div>
  )
}
