import React from 'react'
import {
    Hero,
    CustomerReviews,
    Footer,
    Navigation,
    PopularProducts,
    Service,
    SpecalOffers,
    Subscribe,
    SuperQuality
} from '../sections/Index.js';

const HomePage = () => {
    return (
        <>
            <section className="xl:padding-l wide:padding-r padding-b">
                <Hero />
            </section>
            <section className="padding" >
                <PopularProducts />
            </section>
            <section className="padding" >
                <SuperQuality />
            </section>
            <section className="padding-x py-10" >
                <Service />
            </section>
            <section className="bg-pale-blue padding" >
                <CustomerReviews />
            </section>

        </>
    )
}

export default HomePage
