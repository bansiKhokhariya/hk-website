import { useState } from 'react'
import Navbar from '../../Navbar/Navbar'
import Headline from '../../Headline/Headline'
import FAQs from '../../Home/FAQs/FAQs.jsx';
import Footer from '../../Home/Footer/Footer.jsx';
import Banner from '../../Banner/Banner.jsx';
import './WebsiteDevelopment.css'

const WebsiteDevelopment = () => {

    const faqsArray = [
        {
            id: 1,
            question: 'Q. What types of mobile apps can your development company create?',
            answer: `Our mobile app development company specializes in creating a wide range of mobile applications, including native apps for iOS and Android, cross-platform apps, enterprise apps, e-commerce apps, and more. We cater to diverse industry needs.`
        },
        {
            id: 2,
            question: 'Q. What platforms do you develop mobile apps for?',
            answer: `We develop mobile apps for both iOS and Android platforms. Our team is experienced in utilizing native development tools as well as cross-platform frameworks like React Native and Flutter to ensure broad compatibility and reach.`
        },
        {
            id: 3,
            question: 'Q. Can you assist with the entire app development lifecycle, from ideation to deployment?',
            answer: `Absolutely. We offer end-to-end mobile app development services, starting from ideation and design to development, testing, deployment, and ongoing support. Our comprehensive approach ensures a seamless and successful app development journey.            `
        },
        {
            id: 4,
            question: 'Q. How do you approach the UI/UX design of mobile apps?',
            answer: `Our UI/UX design process is user-centric, focusing on creating visually appealing and intuitive interfaces. We conduct user research, wireframing, and prototyping to ensure that the app not only looks great but also provides a positive user experience.`
        },
        {
            id: 5,
            question: 'Q. Can you integrate third-party APIs and services into mobile apps?',
            answer: `Yes, we have extensive experience integrating third-party APIs and services to enhance the functionality of mobile apps. Whether it's payment gateways, social media integration, or other APIs, we can seamlessly incorporate them into your app.`
        },
        {
            id: 6,
            question: 'Q. How do you handle post-launch support and maintenance for mobile apps?',
            answer: `We provide ongoing support and maintenance services after the app is launched. This includes addressing any issues, implementing updates, and ensuring that the app continues to perform optimally in the ever-evolving mobile landscape.`
        },
        {
            id: 7,
            question: 'Q. Can you provide examples of successful mobile apps you have developed in the past?',
            answer: `Certainly. Our portfolio showcases a diverse range of successful mobile apps across various industries. Feel free to explore our case studies to gain insights into the quality and innovation we bring to each project.`
        },


    ]

    const bannerObject = {
        boxSide: 'left',
        backgroundBanner: `/frame/mobiledevelopment-page-banner.webp`,
        bannerTitle: `Mobile`,
        bannerTitleSpan: `App Development`,
        bannerContent: `The process of developing software programs especially made to run on mobile devices, such as smartphones and tablets, is known as "mobile app development." To create, test, and implement mobile applications, a variety of development frameworks, tools, and programming languages are used.`
    }

    return (
        <>
            <Navbar activeNav="Services" />
            <Headline headlineText1="Mobile App Development" headlineText2="IT Services and IT Consulting" />
            <Banner bannerObject={bannerObject} />

            <div className='website-main-section'>
                <div className='website-innner-section'>
                    <div className='shopify-description'>
                        <div className='we-are-text-1'>
                            Our Custom Website Development Process
                        </div>
                    </div>
                </div>
            </div>

            <div className='mobileAppDevelopment-main-section'>
                <div className='mobileAppDevelopment-main-inner-section'>
                    <div className='mobileAppDevelopment-box-section'>
                          
                    </div>
                </div>
                <img src="/image/mobileApp-main-image.webp" className='mobileApp-main-image' />
            </div>

            <div className='website-main-section'>
                <div className='website-innner-section'>
                    <FAQs faqsArray={faqsArray} />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default WebsiteDevelopment