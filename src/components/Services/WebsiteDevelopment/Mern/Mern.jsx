import React from 'react'
import Navbar from '../../../Navbar/Navbar'
import Headline from '../../../Headline/Headline'
import FAQs from '../../../Home/FAQs/FAQs.jsx';
import Footer from '../../../Home/Footer/Footer.jsx';
import Banner from '../../../Banner/Banner.jsx';
import WeAre from '../../../Home/WeAre/WeAre.jsx';
import './Mern.css'
import { Link } from "react-router-dom";

const Mern = () => {

    const faqsArray = [
        {
            id: 1,
            question: 'Q. What is MERN and why is it relevant to mobile app development?',
            answer: `MERN is an acronym representing a full-stack JavaScript framework consisting of MongoDB, Express.js, React.js, and Node.js. This technology stack is highly relevant to mobile app development as it enables the creation of robust and scalable applications with a unified language throughout the development process.`
        },
        {
            id: 2,
            question: 'Q. Can you provide examples of projects developed using the MERN stack?',
            answer: `Certainly. We have successfully developed a variety of projects using the MERN stack, ranging from dynamic web applications to feature-rich mobile applications. Our portfolio showcases the versatility and effectiveness of MERN in delivering modern and responsive solutions.`
        },
        {
            id: 3,
            question: 'Q. How do you ensure data security in MERN-based mobile app development?',
            answer: `Security is a top priority in our development process. We implement secure coding practices, perform regular security audits, and use encryption techniques to ensure the confidentiality and integrity of data in MERN-based applications.`
        },
        {
            id: 4,
            question: 'Q. Can you integrate third-party APIs and services into MERN-based apps?',
            answer: `Absolutely. MERN's flexibility allows for seamless integration with third-party APIs and services, enhancing the functionality of your application. Whether it's payment gateways, social media integrations, or other APIs, we can incorporate them seamlessly into your MERN-based mobile app.            `
        },
        {
            id: 5,
            question: 'Q. How can businesses get started with MERN-based mobile app development services?',
            answer: `To get started, simply reach out to us through our contact form, email, or phone. We'll schedule a consultation to discuss your project, understand your goals, and create a tailored MERN-based solution that aligns with your vision and objectives.`
        }
    ]

    const bannerObject = {
        bannerHeight: 'bg',
        boxSide: 'left',
        backgroundBanner: `/frame/mern-page-banner.webp`,
        bannerTitle: `Build the web apps of tomorrow with`,
        bannerTitleSpan: `MERN stack!`,
        bannerContent: `Of course! Developers guarantee a single, consistent development experience in order to produce full-stack web apps. I'll go over the elements of the MERN stack, their functions, and how they work together when creating web applications in this talk.`
    }

    const weAreContentArray = {
        weAreImage: `/image/service-weare.webp`,
        weAreTitle: `An overview of the MERN stack`,
        weAreContent: `Node, React, Express, and MongoDB.The elements that make up the MERN stack are js. With ease, combine these technologies to create potent web apps. Let's examine each element in more detail. `,
    }

    return (
        <>
            <Navbar activeNav="Services" />
            <Headline headlineText1="Mobile App Development" headlineText2="IT Services and IT Consulting" />
            <Banner bannerObject={bannerObject} />
            <div className='website-main-section'>
                <div className='website-innner-section'>
                    <div className='mern-technology-section'>
                        <div className='mern-tech-box'><Link to={"/services/mern/mongoDb"} className='link-button'><img src="/image/mongodb-title.webp" alt="" /></Link></div>
                        <div className='mern-tech-box'><Link to={"/services/mern/expressJs"} className='link-button'><img src="/image/expressjs-title.webp" alt="" /></Link></div>
                        <div className='mern-tech-box'><Link to={"/services/mern/reactJs"} className='link-button'><img src="/image/reactjs-title.webp" alt="" /></Link></div>
                        <div className='mern-tech-box'><Link to={"/services/mern/nodeJs"} className='link-button'><img src="/image/nodejs-title.webp" alt="" /></Link></div>
                    </div>
                    <WeAre weAreContentArray={weAreContentArray} />
                    <FAQs faqsArray={faqsArray} />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Mern
