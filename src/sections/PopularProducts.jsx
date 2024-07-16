import React, { useState } from 'react'
import { products } from '../constants'
import PupularProductCard from '../Components/PupularProductCard';


export default function PopularProducts() {
  return (
    <>

      <section className='max-container max-sm:mt-12' id='products'>
        <div className='flex flex-col justify-start gap-5'>
          <h2 className='text-4xl font-palanquin font-bold'>
            <span className='text-coral-red'>Популярные</span> продукты
          </h2>
          <p className='lg:max-w-lg font-montserrat text-slate-gray'>
            Вы просто вносите деньги на свой счет и покупаете бустеры дохода. Эти деньги мы вкладываем в NFT-проекты, которые взлетят, а вы просто получаете свою прибыль каждый час
          </p>
          <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 grid-cols-1
        sm:gap-4 gap-14'>
            {products.map((product) => (
              <PupularProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>
    </>

  )
}
