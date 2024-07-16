import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ imgURL, name, price, description, collectionDescription, info }) => {
    const Data = {
        name: name,
        imgURL: imgURL,
        price: price,
        description: description,
        collectionDescription: collectionDescription,
        info: info
    }
    return (
        <div>
            <>
                < div className=' hover:scale-105 transition-all ease-linear  p-4 flex flex-1 flex-col w-full max-sm:w-full align-middle justify-center shadow-xl rounded-3xl' >
                    <img src={imgURL} className=' h-[280px]' />
                    <h3 className='mt-2 text-xl leading-normal font-semibold font-palanquin'>{name}</h3>
                    <p className='lg:max-w-lg font-montserrat text-slate-gray'> {description} </p>
                    <p className='mt-2 font-montserrat font-semibold leading-normal text-2xl text-coral-red'> {price}</p>
                    <Link to="/detailPage" state={Data} >
                        <button className='bg-white h-16 border text-center border-coral-red w-full font-monserrat
    text-xl leading-none font-bold  text-coral-red rounded-full mt-7 mb-5 hover:bg-coral-red hover:text-white '>Подробнее</button>
                    </Link>
                </div >
            </>
        </div>
    )
}

export default ProductCard
