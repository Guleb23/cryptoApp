import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../src/assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../src/assets/images";

export const navLinks = [
    { href: "/", label: "Домой" },
    { href: "/productsPage", label: "Продукты" },

];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Продаж' },
    { value: '500+', label: 'Сотрудников' },
    { value: '250k+', label: 'Прибыль' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Honeyland Genesis",
        price: "1500₽",
        description: "При покупке данного бустера вы получаете доход 2% в час",
        rating: 4
    },
    {
        imgURL: shoe5,
        name: "Base Ape Polygon",
        price: "2500₽",
        description: "При покупке данного бустера вы получаете доход 5% в час",
        rating: 4.4
    },
    {
        imgURL: shoe6,
        name: "Milady Maker",
        price: "4500₽",
        description: "При покупке данного бустера вы получаете доход 10% в час",
        rating: 5
    },
    {
        imgURL: shoe7,
        name: "DeGots",
        price: "6500₽",
        description: "При покупке данного бустера вы получаете доход 15% в час",
        rating: 4.8
    },
];

export const productsForB = [
    {
        imgURL: shoe4,
        name: "Honeyland Genesis",
        price: "1500₽",
        description: "При покупке данного бустера вы получаете доход 2% в час",
        rating: 4,
        collectionDescription: "Beeing yourself matters most, explore your creative side with us. You are a creative beeing, destined to create. To create experiences, relationships, and ideas. You are more powerful than you beelieve. We want to pull that greatness out of you and into this world. 10,000 Unique Beeings hand drawn by Leon Karssen.",
        info: [
            { label: "Listed", value: "1.6%" },
            { label: "Owners", value: "5.3K" },
            { label: "FloorPrice", value: "0.0054 ETH" },
            { label: "AllTimeVolume", value: "4K ETH" },
        ],


    },
    {
        imgURL: shoe5,
        name: "Base Ape Polygon",
        price: "2500₽",
        description: "При покупке данного бустера вы получаете доход 5% в час",
        rating: 4.4,
        collectionDescription: "The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits.",
        info: [
            { label: "Listed", value: "2.9%" },
            { label: "Owners", value: "5.4K" },
            { label: "FloorPrice", value: "9.48 ETH" },
            { label: "AllTimeVolume", value: "1.7M ETH" },
        ],

    },
    {
        imgURL: shoe6,
        name: "Milady Maker",
        price: "4500₽",
        description: "При покупке данного бустера вы получаете доход 10% в час",
        rating: 5,
        collectionDescription: "Milady Maker is a collection of 10,000 generative pfpNFTs in a neochibi aesthetic inspired by street style tribes.",
        info: [
            { label: "Listed", value: "5.2%" },
            { label: "Owners", value: "5.1K" },
            { label: "FloorPrice", value: "4.83 ETH" },
            { label: "AllTimeVolume", value: "154K ETH" },
        ],

    },
    {
        imgURL: shoe7,
        name: "DeGots",
        price: "6500₽",
        description: "При покупке данного бустера вы получаете доход 15% в час",
        rating: 4.8,
        collectionDescription: "A collection of degenerates, punks, and misfits. Gods of the metaverse & masters of our own universe.",
        info: [
            { label: "Listed", value: "2.3%" },
            { label: "Owners", value: "1.9K" },
            { label: "FloorPrice", value: "0.85 ETH" },
            { label: "AllTimeVolume", value: "173K ETH" },
        ],

    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Быстрая доставка",
        subtext: "Наслаждайтесь беспроблемными покупками с помощью нашей быстрой службы доставки."
    },
    {
        imgURL: shieldTick,
        label: "Безопасная оплата",
        subtext: "Проводите транзакции без проблем с помощью наших безопасных способов оплаты."
    },
    {
        imgURL: support,
        label: "С удовольствием поможем вам",
        subtext: "Наша преданная своему делу команда готова помочь вам на каждом шагу."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Honeyland Genesis", link: "/productsPage" },
            { name: "Base Ape Polygon", link: "/productsPage" },
            { name: "Milady Maker", link: "/productsPage" },
            { name: "DeGots", link: "/productsPage" },

        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];