import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../Components/ReviewCard'

export default function CustomerReviews() {
  return (
    <div className='max-container'>
      <h3 className='font-palaquin text-center text-4xl font-bold'>Почему покупатели
      <span className='text-coral-red'> выбирают </span>
      нас?
      </h3>
      <p className='info-text m-auto mt-4 max-w-lg text-center '> Истории от наших первых покупателей </p>
      <div className='mt-24 flex flex-1 justify-evenly items-center
      max-lg:flex-col gap-14'>
        {reviews.map((review) => (
          <ReviewCard key={review.feedback} {...review}/>
        ))}
      </div>
    </div>
  )
}
