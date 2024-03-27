import React from 'react'
import Banner from '../../../Banner/Banner.jsx';
import Navbar from '../../../Navbar/Navbar.jsx';
import Headline from '../../../Headline/Headline';
import Footer from '../../../Home/Footer/Footer.jsx';
import './CaseStudies.css'
import { Link } from "react-router-dom";

const CaseStudies = () => {

    const bannerObject = {
        boxSide: 'right',
        backgroundBanner: `/frame/casestudies-page-banner.webp`,
        bannerTitle: `List Of Case Studies for Application of HKApps`,
        bannerTitleSpan: ``,
        bannerContent: `Reduce development costs to increase profits without compromise with a huge pool of talented and experienced technology experts.`,
    };

    return (
        <>
            <Navbar activeNav="Company" />
            <Headline headlineText1="Get a Chance to know About Us and Relive Our Journey" headlineText2="Meet our dynamic team and discover the roadmap to success as we will let you know how we work" />
            <Banner bannerObject={bannerObject} />

            {/* section 1 */}
            <div className='casestudy-banner-section' style={{
                background: `url('/frame/casestudies-banner-1.webp')`,
                backgroundSize: "cover"
            }}>
                <div className='casestudies-box'>
                    <div className='casestudy-title'>
                        Water Reminder: Drink Water
                    </div>
                    <div className='casestudy-content'>
                        <span style={{ fontWeight: "600" }}> Short Summary Description </span> - The Water Reminder app is a mobile application designed to help users maintain optimal hydration levels by providing timely reminders to drink water throughout the day.
                    </div>
                    <Link to={"/company/resources/caseStudies/waterReminder"} className='link-button'>
                        <div className='casestudy-arrow'>
                            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.30782 10.472C7.36991 10.4101 7.41916 10.3365 7.45277 10.2555C7.48638 10.1745 7.50368 10.0877 7.50368 10C7.50368 9.91231 7.48638 9.82549 7.45277 9.74449C7.41916 9.6635 7.36991 9.58993 7.30782 9.52801L1.19326 3.41478C0.818072 3.03977 0.607224 2.53108 0.6071 2.00061C0.606975 1.47014 0.817582 0.961346 1.19259 0.586159C1.5676 0.210972 2.07629 0.000125082 2.60676 5.56339e-08C3.13723 -0.00012497 3.64602 0.210483 4.02121 0.585493L10.1358 6.70006C11.0094 7.57609 11.5 8.7628 11.5 10C11.5 11.2372 11.0094 12.4239 10.1358 13.2999L4.02121 19.4145C3.64602 19.7895 3.13723 20.0001 2.60676 20C2.07629 19.9999 1.5676 19.789 1.19259 19.4138C0.817582 19.0387 0.606975 18.5299 0.6071 17.9994C0.607224 17.4689 0.818072 16.9602 1.19326 16.5852L7.30782 10.472Z" fill="black" />
                            </svg>
                        </div>
                    </Link>
                </div>
                <img src="/image/caseStudies-1.webp" className='case-study-image' alt="" />
            </div>

            {/* section 2 */}
            <div className='casestudy-banner-section' style={{
                background: `url('/frame/casestudies-banner-2.webp')`,
                backgroundSize: "cover"
            }}>
                <img src="/image/caseStudies-2.webp" className='case-study-image' alt="" />
                <div className='casestudies-box' style={{ background: "#00000033" }}>
                    <div className='casestudy-title' style={{ color: "#FFFFFF" }}>
                        Speedometer: GPS Speedometer
                    </div>
                    <div className='casestudy-content' style={{ color: "#FFFFFF" }}>
                        <span style={{ fontWeight: "600" }}> Short Summary Description </span> -  Technological marvel is the GPS speedometer application, which has gained immense popularity among drivers and enthusiasts alike. This blog post aims to delve into the world of GPS speedometer applications, exploring their evolution, Join us as we embark on a journey to understand how these applications have transformed the way we measure speed and enhance our driving experience.
                    </div>
                    <div className='casestudy-arrow'>
                        <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.30782 10.472C7.36991 10.4101 7.41916 10.3365 7.45277 10.2555C7.48638 10.1745 7.50368 10.0877 7.50368 10C7.50368 9.91231 7.48638 9.82549 7.45277 9.74449C7.41916 9.6635 7.36991 9.58993 7.30782 9.52801L1.19326 3.41478C0.818072 3.03977 0.607224 2.53108 0.6071 2.00061C0.606975 1.47014 0.817582 0.961346 1.19259 0.586159C1.5676 0.210972 2.07629 0.000125082 2.60676 5.56339e-08C3.13723 -0.00012497 3.64602 0.210483 4.02121 0.585493L10.1358 6.70006C11.0094 7.57609 11.5 8.7628 11.5 10C11.5 11.2372 11.0094 12.4239 10.1358 13.2999L4.02121 19.4145C3.64602 19.7895 3.13723 20.0001 2.60676 20C2.07629 19.9999 1.5676 19.789 1.19259 19.4138C0.817582 19.0387 0.606975 18.5299 0.6071 17.9994C0.607224 17.4689 0.818072 16.9602 1.19326 16.5852L7.30782 10.472Z" fill="black" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* section 3 */}
            <div className='casestudy-banner-section' style={{
                background: `url('/frame/casestudies-banner-1.webp')`,
                backgroundSize: "cover"
            }}>
                <div className='casestudies-box'>
                    <div className='casestudy-title'>
                        Chat & SMS Messenger
                    </div>
                    <div className='casestudy-content'>
                        <span style={{ fontWeight: "600" }}> Short Summary Description </span> - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </div>
                    <div className='casestudy-arrow'>
                        <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.30782 10.472C7.36991 10.4101 7.41916 10.3365 7.45277 10.2555C7.48638 10.1745 7.50368 10.0877 7.50368 10C7.50368 9.91231 7.48638 9.82549 7.45277 9.74449C7.41916 9.6635 7.36991 9.58993 7.30782 9.52801L1.19326 3.41478C0.818072 3.03977 0.607224 2.53108 0.6071 2.00061C0.606975 1.47014 0.817582 0.961346 1.19259 0.586159C1.5676 0.210972 2.07629 0.000125082 2.60676 5.56339e-08C3.13723 -0.00012497 3.64602 0.210483 4.02121 0.585493L10.1358 6.70006C11.0094 7.57609 11.5 8.7628 11.5 10C11.5 11.2372 11.0094 12.4239 10.1358 13.2999L4.02121 19.4145C3.64602 19.7895 3.13723 20.0001 2.60676 20C2.07629 19.9999 1.5676 19.789 1.19259 19.4138C0.817582 19.0387 0.606975 18.5299 0.6071 17.9994C0.607224 17.4689 0.818072 16.9602 1.19326 16.5852L7.30782 10.472Z" fill="black" />
                        </svg>
                    </div>
                </div>
                <img src="/image/caseStudies-3.webp" className='case-study-image' alt="" />
            </div>

            {/* section 4 */}
            <div className='casestudy-banner-section' style={{
                background: `url('/frame/casestudies-banner-2.webp')`,
                backgroundSize: "cover"
            }}>
                <img src="/image/caseStudies-4.webp" className='case-study-image' alt="" />
                <div className='casestudies-box' style={{ background: "#00000033" }}>
                    <div className='casestudy-title' style={{ color: "#FFFFFF" }}>
                        Gallery Vault
                    </div>
                    <div className='casestudy-content' style={{ color: "#FFFFFF" }}>
                        <span style={{ fontWeight: "600" }}> Short Summary Description </span> -  Technological marvel is the GPS speedometer application, which has gained immense popularity among drivers and enthusiasts alike. This blog post aims to delve into the world of GPS speedometer applications, exploring their evolution, Join us as we embark on a journey to understand how these applications have transformed the way we measure speed and enhance our driving experience.
                    </div>
                    <div className='casestudy-arrow'>
                        <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.30782 10.472C7.36991 10.4101 7.41916 10.3365 7.45277 10.2555C7.48638 10.1745 7.50368 10.0877 7.50368 10C7.50368 9.91231 7.48638 9.82549 7.45277 9.74449C7.41916 9.6635 7.36991 9.58993 7.30782 9.52801L1.19326 3.41478C0.818072 3.03977 0.607224 2.53108 0.6071 2.00061C0.606975 1.47014 0.817582 0.961346 1.19259 0.586159C1.5676 0.210972 2.07629 0.000125082 2.60676 5.56339e-08C3.13723 -0.00012497 3.64602 0.210483 4.02121 0.585493L10.1358 6.70006C11.0094 7.57609 11.5 8.7628 11.5 10C11.5 11.2372 11.0094 12.4239 10.1358 13.2999L4.02121 19.4145C3.64602 19.7895 3.13723 20.0001 2.60676 20C2.07629 19.9999 1.5676 19.789 1.19259 19.4138C0.817582 19.0387 0.606975 18.5299 0.6071 17.9994C0.607224 17.4689 0.818072 16.9602 1.19326 16.5852L7.30782 10.472Z" fill="black" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* section 5 */}
            <div className='casestudy-banner-section' style={{
                background: `url('/frame/casestudies-banner-1.webp')`,
                backgroundSize: "cover"
            }}>
                <div className='casestudies-box'>
                    <div className='casestudy-title'>
                        Mini Keyboard
                    </div>
                    <div className='casestudy-content'>
                        <span style={{ fontWeight: "600" }}> Short Summary Description </span> - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </div>
                    <div className='casestudy-arrow'>
                        <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.30782 10.472C7.36991 10.4101 7.41916 10.3365 7.45277 10.2555C7.48638 10.1745 7.50368 10.0877 7.50368 10C7.50368 9.91231 7.48638 9.82549 7.45277 9.74449C7.41916 9.6635 7.36991 9.58993 7.30782 9.52801L1.19326 3.41478C0.818072 3.03977 0.607224 2.53108 0.6071 2.00061C0.606975 1.47014 0.817582 0.961346 1.19259 0.586159C1.5676 0.210972 2.07629 0.000125082 2.60676 5.56339e-08C3.13723 -0.00012497 3.64602 0.210483 4.02121 0.585493L10.1358 6.70006C11.0094 7.57609 11.5 8.7628 11.5 10C11.5 11.2372 11.0094 12.4239 10.1358 13.2999L4.02121 19.4145C3.64602 19.7895 3.13723 20.0001 2.60676 20C2.07629 19.9999 1.5676 19.789 1.19259 19.4138C0.817582 19.0387 0.606975 18.5299 0.6071 17.9994C0.607224 17.4689 0.818072 16.9602 1.19326 16.5852L7.30782 10.472Z" fill="black" />
                        </svg>
                    </div>
                </div>
                <img src="/image/caseStudies-5.webp" className='case-study-image' alt="" />
            </div>

            {/* section 6 */}
            <div className='casestudy-banner-section' style={{
                background: `url('/frame/casestudies-banner-2.webp')`,
                backgroundSize: "cover"
            }}>
                <img src="/image/caseStudies-6.webp" className='case-study-image' alt="" />
                <div className='casestudies-box' style={{ background: "#00000033" }}>
                    <div className='casestudy-title' style={{ color: "#FFFFFF" }}>
                        All Document Reader
                    </div>
                    <div className='casestudy-content' style={{ color: "#FFFFFF" }}>
                        <span style={{ fontWeight: "600" }}> Short Summary Description </span> -  Technological marvel is the GPS speedometer application, which has gained immense popularity among drivers and enthusiasts alike. This blog post aims to delve into the world of GPS speedometer applications, exploring their evolution, Join us as we embark on a journey to understand how these applications have transformed the way we measure speed and enhance our driving experience.
                    </div>
                    <div className='casestudy-arrow'>
                        <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.30782 10.472C7.36991 10.4101 7.41916 10.3365 7.45277 10.2555C7.48638 10.1745 7.50368 10.0877 7.50368 10C7.50368 9.91231 7.48638 9.82549 7.45277 9.74449C7.41916 9.6635 7.36991 9.58993 7.30782 9.52801L1.19326 3.41478C0.818072 3.03977 0.607224 2.53108 0.6071 2.00061C0.606975 1.47014 0.817582 0.961346 1.19259 0.586159C1.5676 0.210972 2.07629 0.000125082 2.60676 5.56339e-08C3.13723 -0.00012497 3.64602 0.210483 4.02121 0.585493L10.1358 6.70006C11.0094 7.57609 11.5 8.7628 11.5 10C11.5 11.2372 11.0094 12.4239 10.1358 13.2999L4.02121 19.4145C3.64602 19.7895 3.13723 20.0001 2.60676 20C2.07629 19.9999 1.5676 19.789 1.19259 19.4138C0.817582 19.0387 0.606975 18.5299 0.6071 17.9994C0.607224 17.4689 0.818072 16.9602 1.19326 16.5852L7.30782 10.472Z" fill="black" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* section 7 */}
            <div className='casestudy-banner-section' style={{
                background: `url('/frame/casestudies-banner-1.webp')`,
                backgroundSize: "cover"
            }}>
                <div className='casestudies-box'>
                    <div className='casestudy-title'>
                        Play Game Hub
                    </div>
                    <div className='casestudy-content'>
                        <span style={{ fontWeight: "600" }}> Short Summary Description </span> - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </div>
                    <div className='casestudy-arrow'>
                        <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.30782 10.472C7.36991 10.4101 7.41916 10.3365 7.45277 10.2555C7.48638 10.1745 7.50368 10.0877 7.50368 10C7.50368 9.91231 7.48638 9.82549 7.45277 9.74449C7.41916 9.6635 7.36991 9.58993 7.30782 9.52801L1.19326 3.41478C0.818072 3.03977 0.607224 2.53108 0.6071 2.00061C0.606975 1.47014 0.817582 0.961346 1.19259 0.586159C1.5676 0.210972 2.07629 0.000125082 2.60676 5.56339e-08C3.13723 -0.00012497 3.64602 0.210483 4.02121 0.585493L10.1358 6.70006C11.0094 7.57609 11.5 8.7628 11.5 10C11.5 11.2372 11.0094 12.4239 10.1358 13.2999L4.02121 19.4145C3.64602 19.7895 3.13723 20.0001 2.60676 20C2.07629 19.9999 1.5676 19.789 1.19259 19.4138C0.817582 19.0387 0.606975 18.5299 0.6071 17.9994C0.607224 17.4689 0.818072 16.9602 1.19326 16.5852L7.30782 10.472Z" fill="black" />
                        </svg>
                    </div>
                </div>
                <img src="/image/caseStudies-7.webp" className='case-study-image' alt="" />
            </div>

            {/* section 8 */}
            <div className='casestudy-banner-section' style={{
                background: `url('/frame/casestudies-banner-2.webp')`,
                backgroundSize: "cover"
            }}>
                <img src="/image/caseStudies-8.webp" className='case-study-image' alt="" />
                <div className='casestudies-box' style={{ background: "#00000033" }}>
                    <div className='casestudy-title' style={{ color: "#FFFFFF" }}>
                        Maths Games Learn to Add, Sub, Div
                    </div>
                    <div className='casestudy-content' style={{ color: "#FFFFFF" }}>
                        <span style={{ fontWeight: "600" }}> Short Summary Description </span> -  Technological marvel is the GPS speedometer application, which has gained immense popularity among drivers and enthusiasts alike. This blog post aims to delve into the world of GPS speedometer applications, exploring their evolution, Join us as we embark on a journey to understand how these applications have transformed the way we measure speed and enhance our driving experience.
                    </div>
                    <div className='casestudy-arrow'>
                        <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.30782 10.472C7.36991 10.4101 7.41916 10.3365 7.45277 10.2555C7.48638 10.1745 7.50368 10.0877 7.50368 10C7.50368 9.91231 7.48638 9.82549 7.45277 9.74449C7.41916 9.6635 7.36991 9.58993 7.30782 9.52801L1.19326 3.41478C0.818072 3.03977 0.607224 2.53108 0.6071 2.00061C0.606975 1.47014 0.817582 0.961346 1.19259 0.586159C1.5676 0.210972 2.07629 0.000125082 2.60676 5.56339e-08C3.13723 -0.00012497 3.64602 0.210483 4.02121 0.585493L10.1358 6.70006C11.0094 7.57609 11.5 8.7628 11.5 10C11.5 11.2372 11.0094 12.4239 10.1358 13.2999L4.02121 19.4145C3.64602 19.7895 3.13723 20.0001 2.60676 20C2.07629 19.9999 1.5676 19.789 1.19259 19.4138C0.817582 19.0387 0.606975 18.5299 0.6071 17.9994C0.607224 17.4689 0.818072 16.9602 1.19326 16.5852L7.30782 10.472Z" fill="black" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* section 9 */}
            <div className='casestudy-banner-section' style={{
                background: `url('/frame/casestudies-banner-1.webp')`,
                backgroundSize: "cover"
            }}>
                <div className='casestudies-box'>
                    <div className='casestudy-title'>
                        Kids Zone
                    </div>
                    <div className='casestudy-content'>
                        <span style={{ fontWeight: "600" }}> Short Summary Description </span> - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </div>
                    <div className='casestudy-arrow'>
                        <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.30782 10.472C7.36991 10.4101 7.41916 10.3365 7.45277 10.2555C7.48638 10.1745 7.50368 10.0877 7.50368 10C7.50368 9.91231 7.48638 9.82549 7.45277 9.74449C7.41916 9.6635 7.36991 9.58993 7.30782 9.52801L1.19326 3.41478C0.818072 3.03977 0.607224 2.53108 0.6071 2.00061C0.606975 1.47014 0.817582 0.961346 1.19259 0.586159C1.5676 0.210972 2.07629 0.000125082 2.60676 5.56339e-08C3.13723 -0.00012497 3.64602 0.210483 4.02121 0.585493L10.1358 6.70006C11.0094 7.57609 11.5 8.7628 11.5 10C11.5 11.2372 11.0094 12.4239 10.1358 13.2999L4.02121 19.4145C3.64602 19.7895 3.13723 20.0001 2.60676 20C2.07629 19.9999 1.5676 19.789 1.19259 19.4138C0.817582 19.0387 0.606975 18.5299 0.6071 17.9994C0.607224 17.4689 0.818072 16.9602 1.19326 16.5852L7.30782 10.472Z" fill="black" />
                        </svg>
                    </div>
                </div>
                <img src="/image/caseStudies-9.webp" className='case-study-image' alt="" />
            </div>

            {/* section 10 */}
            <div className='casestudy-banner-section' style={{
                background: `url('/frame/casestudies-banner-2.webp')`,
                backgroundSize: "cover"
            }}>
                <img src="/image/caseStudies-10.webp" className='case-study-image' alt="" />
                <div className='casestudies-box' style={{ background: "#00000033" }}>
                    <div className='casestudy-title' style={{ color: "#FFFFFF" }}>
                        Truth or Dare
                    </div>
                    <div className='casestudy-content' style={{ color: "#FFFFFF" }}>
                        <span style={{ fontWeight: "600" }}> Short Summary Description </span> -  Technological marvel is the GPS speedometer application, which has gained immense popularity among drivers and enthusiasts alike. This blog post aims to delve into the world of GPS speedometer applications, exploring their evolution, Join us as we embark on a journey to understand how these applications have transformed the way we measure speed and enhance our driving experience.
                    </div>
                    <div className='casestudy-arrow'>
                        <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.30782 10.472C7.36991 10.4101 7.41916 10.3365 7.45277 10.2555C7.48638 10.1745 7.50368 10.0877 7.50368 10C7.50368 9.91231 7.48638 9.82549 7.45277 9.74449C7.41916 9.6635 7.36991 9.58993 7.30782 9.52801L1.19326 3.41478C0.818072 3.03977 0.607224 2.53108 0.6071 2.00061C0.606975 1.47014 0.817582 0.961346 1.19259 0.586159C1.5676 0.210972 2.07629 0.000125082 2.60676 5.56339e-08C3.13723 -0.00012497 3.64602 0.210483 4.02121 0.585493L10.1358 6.70006C11.0094 7.57609 11.5 8.7628 11.5 10C11.5 11.2372 11.0094 12.4239 10.1358 13.2999L4.02121 19.4145C3.64602 19.7895 3.13723 20.0001 2.60676 20C2.07629 19.9999 1.5676 19.789 1.19259 19.4138C0.817582 19.0387 0.606975 18.5299 0.6071 17.9994C0.607224 17.4689 0.818072 16.9602 1.19326 16.5852L7.30782 10.472Z" fill="black" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className='website-main-section'>
                <Footer />
            </div>
        </>
    )
}

export default CaseStudies