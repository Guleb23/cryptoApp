import React from 'react'
import { productsForB } from '../constants'
import PupularProductCard from '../Components/PupularProductCard'
import ProductCard from '../Components/ProductCard'

const ProductsPage = () => {
    return (
        <div className='pb-24 pt-8 pl-16 pr-16'>

            <section className='max-container max-sm:mt-12'>
                <div className='flex flex-col justify-start gap-5'>
                    <h2 className='text-4xl font-palanquin font-bold'>
                        <span className='text-coral-red'>Наши</span> продукты
                    </h2>

                    <div className='mt-3 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 grid-cols-1
        sm:gap-4 gap-14'>
                        {productsForB.map((product, Index) => (
                            <ProductCard key={Index} {...product} />

                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductsPage
