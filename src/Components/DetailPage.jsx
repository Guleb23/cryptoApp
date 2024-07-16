import React from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function DetailPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const data = location.state;
    const info = data.info;
    return (
        <div className='pb-24 pt-8 pl-16 pr-16'>
            <section className='max-container max-sm:mt-12  ' >
                <div className='flex flex-col justify-start gap-5'>
                    <div className='flex  justify-start items-center text-coral-red font-montserrat text-xl font-medium'>
                        <div onClick={() => { navigate(-1) }} className='cursor-pointer'>
                            <span className='font-extrabold text-2xl leading-none'>←</span>назад
                        </div>

                    </div>
                    <h2 className='text-4xl font-palanquin font-bold'>
                        <span className='text-coral-red'>Коллекция</span> {data.name}
                    </h2>
                </div>
                <div className='flex  pl-15 pr-15 pt-14 gap-10
                relative flex-1 justify-center items-start max-lg:flex-col max-lg:items-center'>
                    <div className=''>
                        <img src={data.imgURL} className='max-w-none' width={600} height={600} />
                    </div>
                    <div className='flex flex-col w-full gap-5 '>
                        <h2 className='text-4xl font-palanquin font-bold'> {data.name}</h2>
                        <div className='flex flex-col relative w-full'>
                            <span className='text-2xl font-palanquin font-bold text-coral-red'>Описание коллекции:</span>
                            <div className='font-montserrat text-lg leading-8
                             text-slate-gray mt-2 max-w-none'> {data.collectionDescription}</div>
                            <div className='flex justify-start flex-wrap
        w-full mt-7 items-center  gap-16 mb-3'>
                                {info.map((stat) => (
                                    <div key={stat.label}>
                                        <p className='text-2xl font-palanquin font-bold'>{stat.value}</p>
                                        <p className='leading-7 font-montserrat
              text-slate-gray text-center'> {stat.label}</p>
                                    </div>
                                ))}
                            </div>
                            <span className='text-2xl font-palanquin font-bold text-coral-red'>Ваш заработок:</span>
                            <div className='font-montserrat text-lg leading-8
                             text-slate-gray mt-2 max-w-none'> {data.description}</div>
                        </div>
                        <button className='bg-coral-red h-16 border font-monserrat
    text-xl font-bold leading-none text-white rounded-full '> Приобрести</button>
                    </div>
                </div>
            </section>
        </div>
    )
}
