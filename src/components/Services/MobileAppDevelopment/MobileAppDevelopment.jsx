import { useState } from 'react'
import Navbar from '../../Navbar/Navbar'
import Headline from '../../Headline/Headline'
import FAQs from '../../Home/FAQs/FAQs.jsx';
import Footer from '../../Home/Footer/Footer.jsx';
import Banner from '../../Banner/Banner.jsx';
import './MobileAppDevelopment.css'
import { Link } from "react-router-dom";

const MobileAppDevelopment = () => {
    const [firstBox, setFirstBox] = useState(0);
    const [firstBoxContent, setFirstBoxContent] = useState(0);
    const [secondBox, setSecondBox] = useState(0);
    const [secondBoxContent, setSecondBoxContent] = useState(0);
    const [thirdBox, setThirdBox] = useState(0);
    const [thirdBoxContent, setThirdBoxContent] = useState(0);
    const [fourthBox, setFourthBox] = useState(0);
    const [fourthBoxContent, setFourthBoxContent] = useState(0);
    const [fifthBox, setFifthBox] = useState(0);
    const [fifthBoxContent, setFifthBoxContent] = useState(0);


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
                    <div className='mobileApp-technology-section'>
                        <div className='mern-tech-box'><Link to={"/services/mobileAppDevelopment/androidJavaApplication"} className='link-button'><img src="/image/java-title.webp" alt="" /></Link></div>
                        <div className='mern-tech-box'><Link to={"/services/mobileAppDevelopment/androidKotlinApplication"} className='link-button'><img src="/image/kotlin-title.webp" alt="" /></Link></div>
                        <div className='mern-tech-box'><Link to={"/services/mobileAppDevelopment/ioSwiftApplication"} className='link-button'><img src="/image/swift-title.webp" alt="" /></Link></div>
                        <div className='mern-tech-box'><Link to={"/services/mobileAppDevelopment/iosObjectiveApplication"} className='link-button'><img src="/image/objectiveC-title.webp" alt="" /></Link></div>
                        <div className='mern-tech-box-bottom'><Link to={"/services/mobileAppDevelopment/reactNativeApplication"} className='link-button'><img src="/image/reactNative-title.webp" alt="" /></Link></div>
                        <div className='mern-tech-box-bottom'><Link to={"/services/mobileAppDevelopment/flutterApplication"} className='link-button'><img src="/image/flutter-title.webp" alt="" /></Link></div>
                    </div>
                    <div className='shopify-description'>
                        <div className='we-are-text-1'>
                            Our Custom Mobile App Development Process
                        </div>
                    </div>
                </div>
            </div>

            <div className='mobileAppDevelopment-main-section'>

                <div className='mobileAppDevelopment-main-inner-section'>
                    <div className='mobileAppDevelopment-box-section'>

                        <div className={`mobileAppDevelopment-box-1 ${firstBox === 1 ? 'mobileAppDevelopment-box-disabled' : 'mobileAppDevelopment-box'}`}
                            onMouseEnter={() => setFirstBox(1)} onMouseLeave={() => setFirstBoxContent(1)}>
                            <svg
                                className="mobileAppDevelopment-box-icon"
                                xmlns="http://www.w3.org/2000/svg" width="213" height="235" viewBox="0 0 213 235" fill="none">
                                <path d="M194.388 46.8838L124.123 6.45963C113.228 0.191842 99.793 0.191842 88.8774 6.45963L18.6123 46.8838C7.71727 53.1516 1 64.748 1 77.304V158.193C1 170.749 7.71727 182.346 18.6123 188.613L88.8774 229.058C99.7725 235.326 113.207 235.326 124.123 229.058L194.388 188.613C205.283 182.346 212 170.749 212 158.193V77.3244C212 64.7684 205.283 53.172 194.388 46.8838Z" stroke="#00BF67" strokeWidth="2" strokeLinecap="round" stroke-dasharray="10 10" />
                                <path d="M180.172 58.5269L121.612 24.6932C112.532 19.4473 101.335 19.4473 92.2381 24.6932L33.6783 58.5269C24.5983 63.7728 19 73.4787 19 83.9876V151.689C19 162.198 24.5983 171.904 33.6783 177.15L92.2381 211.001C101.318 216.246 112.515 216.246 121.612 211.001L180.172 177.15C189.252 171.904 194.85 162.198 194.85 151.689V84.0047C194.85 73.4958 189.252 63.7899 180.172 58.5269Z" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M97.4194 140.437H95.5162C92.9933 140.434 90.5746 139.43 88.7906 137.646C87.0066 135.862 86.003 133.443 86 130.92V104.275C86.003 101.752 87.0066 99.3333 88.7906 97.5494C90.5746 95.7654 92.9933 94.7618 95.5162 94.7588H110.742C113.265 94.7618 115.684 95.7654 117.468 97.5494C119.252 99.3333 120.255 101.752 120.258 104.275V111.888C120.258 112.393 120.058 112.877 119.701 113.234C119.344 113.591 118.86 113.791 118.355 113.791C117.85 113.791 117.366 113.591 117.009 113.234C116.652 112.877 116.452 112.393 116.452 111.888V104.275C116.452 102.761 115.85 101.308 114.78 100.238C113.709 99.1668 112.256 98.5653 110.742 98.5653H95.5162C94.0019 98.5653 92.5496 99.1668 91.4788 100.238C90.408 101.308 89.8065 102.761 89.8065 104.275V130.92C89.8065 132.435 90.408 133.887 91.4788 134.958C92.5496 136.029 94.0019 136.63 95.5162 136.63H97.4194C97.9242 136.63 98.4083 136.831 98.7652 137.188C99.1222 137.544 99.3227 138.029 99.3227 138.533C99.3227 139.038 99.1222 139.522 98.7652 139.879C98.4083 140.236 97.9242 140.437 97.4194 140.437ZM95.5132 104.275H110.739C111.244 104.275 111.728 104.475 112.085 104.832C112.442 105.189 112.642 105.673 112.642 106.178C112.642 106.683 112.442 107.167 112.085 107.524C111.728 107.881 111.244 108.081 110.739 108.081H95.5132C95.0085 108.081 94.5244 107.881 94.1674 107.524C93.8105 107.167 93.61 106.683 93.61 106.178C93.61 105.673 93.8105 105.189 94.1674 104.832C94.5244 104.475 95.0085 104.275 95.5132 104.275ZM112.085 112.445C112.442 112.802 112.642 113.286 112.642 113.791C112.642 114.296 112.442 114.78 112.085 115.137C111.728 115.494 111.244 115.694 110.739 115.694H95.5132C95.0085 115.694 94.5244 115.494 94.1674 115.137C93.8105 114.78 93.61 114.296 93.61 113.791C93.61 113.286 93.8105 112.802 94.1674 112.445C94.5244 112.088 95.0085 111.888 95.5132 111.888H110.739C111.244 111.888 111.728 112.088 112.085 112.445ZM94.1674 120.058C94.5244 119.701 95.0085 119.501 95.5132 119.501H103.126C103.631 119.501 104.115 119.701 104.472 120.058C104.829 120.415 105.029 120.899 105.029 121.404C105.029 121.909 104.829 122.393 104.472 122.75C104.115 123.107 103.631 123.307 103.126 123.307H95.5132C95.0085 123.307 94.5244 123.107 94.1674 122.75C93.8105 122.393 93.61 121.909 93.61 121.404C93.61 120.899 93.8105 120.415 94.1674 120.058ZM105.452 130.037L116.219 119.27H116.222C116.751 118.733 117.381 118.306 118.075 118.013C118.77 117.721 119.516 117.568 120.269 117.565C121.023 117.562 121.77 117.709 122.467 117.996C123.164 118.283 123.797 118.705 124.33 119.238C124.863 119.771 125.285 120.405 125.572 121.101C125.859 121.798 126.005 122.545 126.002 123.299C125.999 124.053 125.846 124.798 125.553 125.493C125.261 126.187 124.833 126.817 124.296 127.346L113.531 138.11C113.287 138.356 112.979 138.53 112.642 138.613L105.486 140.381C105.168 140.457 104.835 140.451 104.52 140.363C104.205 140.275 103.917 140.108 103.684 139.879C103.452 139.647 103.284 139.359 103.196 139.043C103.108 138.728 103.103 138.394 103.181 138.076L104.95 130.926C105.033 130.589 105.207 130.282 105.452 130.037ZM107.633 135.929L111.209 135.044L117.564 128.689L114.873 125.998L108.518 132.353L107.633 135.929ZM120.255 125.998L121.601 124.653C121.952 124.293 122.149 123.81 122.149 123.307C122.149 122.804 121.952 122.321 121.601 121.961C121.244 121.605 120.76 121.404 120.255 121.404C119.751 121.404 119.267 121.605 118.91 121.961L117.564 123.307L120.255 125.998Z" fill="#007B42" />
                            </svg>
                            <div className={`${firstBox === 1 && firstBoxContent === 1 ? 'mobileAppDevelopment-content-1-show' : 'mobileAppDevelopment-content-1'}`}>
                                <div className='mobileAppDevelopment-content-sec'>
                                    <div className='mobileAppDevelopment-content-title-left'>
                                        Requirement Analysis
                                    </div>
                                    <div className='mobileAppDevelopment-content-text-left'>
                                        Business analyst to talk about needs, scope, and make recommendations for enhancements.
                                    </div>
                                </div>
                                <div>
                                    <svg className='arrow-mobileAppBox-first' width="77" height="19" viewBox="0 0 77 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Group 4407">
                                            <path id="Vector" d="M9.26846 18.5154C14.3877 18.5154 18.5369 14.3709 18.5369 9.25768C18.5369 4.14442 14.3877 -6.28905e-07 9.26846 -4.05137e-07C4.14925 -1.81369e-07 1.81159e-07 4.14443 4.04666e-07 9.25768C6.28173e-07 14.3709 4.14925 18.5154 9.26846 18.5154Z" fill="#007B42" />
                                            <path id="Vector 26" d="M76 9L11 9" stroke="#007B42" strokeWidth="2" strokeLinecap="round" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className={`mobileAppDevelopment-box-2 ${secondBox === 1 ? 'mobileAppDevelopment-box-disabled' : 'mobileAppDevelopment-box'}`}
                            onMouseEnter={() => setSecondBox(1)} onMouseLeave={() => setSecondBoxContent(1)}>
                            <svg className='mobileAppDevelopment-box-icon' xmlns="http://www.w3.org/2000/svg" width="213" height="235" viewBox="0 0 213 235" fill="none">
                                <path d="M194.388 46.8838L124.123 6.45963C113.228 0.191842 99.793 0.191842 88.8774 6.45963L18.6123 46.8838C7.71727 53.1516 1 64.748 1 77.304V158.193C1 170.749 7.71727 182.346 18.6123 188.613L88.8774 229.058C99.7725 235.326 113.207 235.326 124.123 229.058L194.388 188.613C205.283 182.346 212 170.749 212 158.193V77.3244C212 64.7684 205.283 53.172 194.388 46.8838Z" stroke="#00BF67" strokeWidth="2" strokeLinecap="round" stroke-dasharray="10 10" />
                                <path d="M180.172 58.5269L121.612 24.6932C112.532 19.4473 101.335 19.4473 92.2381 24.6932L33.6783 58.5269C24.5983 63.7728 19 73.4787 19 83.9876V151.689C19 162.198 24.5983 171.904 33.6783 177.15L92.2381 211.001C101.318 216.246 112.515 216.246 121.612 211.001L180.172 177.15C189.252 171.904 194.85 162.198 194.85 151.689V84.0047C194.85 73.4958 189.252 63.7899 180.172 58.5269Z" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M97.4194 140.437H95.5162C92.9933 140.434 90.5746 139.43 88.7906 137.646C87.0066 135.862 86.003 133.443 86 130.92V104.275C86.003 101.752 87.0066 99.3333 88.7906 97.5494C90.5746 95.7654 92.9933 94.7618 95.5162 94.7588H110.742C113.265 94.7618 115.684 95.7654 117.468 97.5494C119.252 99.3333 120.255 101.752 120.258 104.275V111.888C120.258 112.393 120.058 112.877 119.701 113.234C119.344 113.591 118.86 113.791 118.355 113.791C117.85 113.791 117.366 113.591 117.009 113.234C116.652 112.877 116.452 112.393 116.452 111.888V104.275C116.452 102.761 115.85 101.308 114.78 100.238C113.709 99.1668 112.256 98.5653 110.742 98.5653H95.5162C94.0019 98.5653 92.5496 99.1668 91.4788 100.238C90.408 101.308 89.8065 102.761 89.8065 104.275V130.92C89.8065 132.435 90.408 133.887 91.4788 134.958C92.5496 136.029 94.0019 136.63 95.5162 136.63H97.4194C97.9242 136.63 98.4083 136.831 98.7652 137.188C99.1222 137.544 99.3227 138.029 99.3227 138.533C99.3227 139.038 99.1222 139.522 98.7652 139.879C98.4083 140.236 97.9242 140.437 97.4194 140.437ZM95.5132 104.275H110.739C111.244 104.275 111.728 104.475 112.085 104.832C112.442 105.189 112.642 105.673 112.642 106.178C112.642 106.683 112.442 107.167 112.085 107.524C111.728 107.881 111.244 108.081 110.739 108.081H95.5132C95.0085 108.081 94.5244 107.881 94.1674 107.524C93.8105 107.167 93.61 106.683 93.61 106.178C93.61 105.673 93.8105 105.189 94.1674 104.832C94.5244 104.475 95.0085 104.275 95.5132 104.275ZM112.085 112.445C112.442 112.802 112.642 113.286 112.642 113.791C112.642 114.296 112.442 114.78 112.085 115.137C111.728 115.494 111.244 115.694 110.739 115.694H95.5132C95.0085 115.694 94.5244 115.494 94.1674 115.137C93.8105 114.78 93.61 114.296 93.61 113.791C93.61 113.286 93.8105 112.802 94.1674 112.445C94.5244 112.088 95.0085 111.888 95.5132 111.888H110.739C111.244 111.888 111.728 112.088 112.085 112.445ZM94.1674 120.058C94.5244 119.701 95.0085 119.501 95.5132 119.501H103.126C103.631 119.501 104.115 119.701 104.472 120.058C104.829 120.415 105.029 120.899 105.029 121.404C105.029 121.909 104.829 122.393 104.472 122.75C104.115 123.107 103.631 123.307 103.126 123.307H95.5132C95.0085 123.307 94.5244 123.107 94.1674 122.75C93.8105 122.393 93.61 121.909 93.61 121.404C93.61 120.899 93.8105 120.415 94.1674 120.058ZM105.452 130.037L116.219 119.27H116.222C116.751 118.733 117.381 118.306 118.075 118.013C118.77 117.721 119.516 117.568 120.269 117.565C121.023 117.562 121.77 117.709 122.467 117.996C123.164 118.283 123.797 118.705 124.33 119.238C124.863 119.771 125.285 120.405 125.572 121.101C125.859 121.798 126.005 122.545 126.002 123.299C125.999 124.053 125.846 124.798 125.553 125.493C125.261 126.187 124.833 126.817 124.296 127.346L113.531 138.11C113.287 138.356 112.979 138.53 112.642 138.613L105.486 140.381C105.168 140.457 104.835 140.451 104.52 140.363C104.205 140.275 103.917 140.108 103.684 139.879C103.452 139.647 103.284 139.359 103.196 139.043C103.108 138.728 103.103 138.394 103.181 138.076L104.95 130.926C105.033 130.589 105.207 130.282 105.452 130.037ZM107.633 135.929L111.209 135.044L117.564 128.689L114.873 125.998L108.518 132.353L107.633 135.929ZM120.255 125.998L121.601 124.653C121.952 124.293 122.149 123.81 122.149 123.307C122.149 122.804 121.952 122.321 121.601 121.961C121.244 121.605 120.76 121.404 120.255 121.404C119.751 121.404 119.267 121.605 118.91 121.961L117.564 123.307L120.255 125.998Z" fill="#007B42" />
                            </svg>

                            <div className={`${secondBox === 1 && secondBoxContent === 1 ? 'mobileAppDevelopment-content-2-show' : 'mobileAppDevelopment-content-2'}`} >

                                <div className='mobileAppDevelopment-content-sec'>
                                    <div className='mobileAppDevelopment-content-title-center'>
                                        Wireframe
                                    </div>
                                    <div className='mobileAppDevelopment-content-text-center'>
                                        Business analyst to finish the wireframe and ensure that the entire flow is completed for web and mobile applications.
                                    </div>
                                </div>
                                <div>
                                    <svg className='arrow-mobileAppBox' width="19" height="77" viewBox="0 0 19 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Group 4402">
                                            <path id="Vector" d="M18.5154 9.26846C18.5154 14.3877 14.3709 18.5369 9.25768 18.5369C4.14443 18.5369 0 14.3877 0 9.26846C0 4.14925 4.14443 0 9.25768 0C14.3709 0 18.5154 4.14925 18.5154 9.26846Z" fill="#007B42" />
                                            <path id="Vector 26" d="M9 76V11" stroke="#007B42" strokeWidth="2" strokeLinecap="round" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className={`mobileAppDevelopment-box-3 ${thirdBox === 1 ? 'mobileAppDevelopment-box-disabled' : 'mobileAppDevelopment-box'}`}
                            onMouseEnter={() => setThirdBox(1)} onMouseLeave={() => setThirdBoxContent(1)}
                        >
                            <svg className='mobileAppDevelopment-box-icon' xmlns="http://www.w3.org/2000/svg" width="213" height="235" viewBox="0 0 213 235" fill="none">
                                <path d="M194.388 46.8838L124.123 6.45963C113.228 0.191842 99.793 0.191842 88.8774 6.45963L18.6123 46.8838C7.71727 53.1516 1 64.748 1 77.304V158.193C1 170.749 7.71727 182.346 18.6123 188.613L88.8774 229.058C99.7725 235.326 113.207 235.326 124.123 229.058L194.388 188.613C205.283 182.346 212 170.749 212 158.193V77.3244C212 64.7684 205.283 53.172 194.388 46.8838Z" stroke="#00BF67" strokeWidth="2" strokeLinecap="round" stroke-dasharray="10 10" />
                                <path d="M180.172 58.5269L121.612 24.6932C112.532 19.4473 101.335 19.4473 92.2381 24.6932L33.6783 58.5269C24.5983 63.7728 19 73.4787 19 83.9876V151.689C19 162.198 24.5983 171.904 33.6783 177.15L92.2381 211.001C101.318 216.246 112.515 216.246 121.612 211.001L180.172 177.15C189.252 171.904 194.85 162.198 194.85 151.689V84.0047C194.85 73.4958 189.252 63.7899 180.172 58.5269Z" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M97.4194 140.437H95.5162C92.9933 140.434 90.5746 139.43 88.7906 137.646C87.0066 135.862 86.003 133.443 86 130.92V104.275C86.003 101.752 87.0066 99.3333 88.7906 97.5494C90.5746 95.7654 92.9933 94.7618 95.5162 94.7588H110.742C113.265 94.7618 115.684 95.7654 117.468 97.5494C119.252 99.3333 120.255 101.752 120.258 104.275V111.888C120.258 112.393 120.058 112.877 119.701 113.234C119.344 113.591 118.86 113.791 118.355 113.791C117.85 113.791 117.366 113.591 117.009 113.234C116.652 112.877 116.452 112.393 116.452 111.888V104.275C116.452 102.761 115.85 101.308 114.78 100.238C113.709 99.1668 112.256 98.5653 110.742 98.5653H95.5162C94.0019 98.5653 92.5496 99.1668 91.4788 100.238C90.408 101.308 89.8065 102.761 89.8065 104.275V130.92C89.8065 132.435 90.408 133.887 91.4788 134.958C92.5496 136.029 94.0019 136.63 95.5162 136.63H97.4194C97.9242 136.63 98.4083 136.831 98.7652 137.188C99.1222 137.544 99.3227 138.029 99.3227 138.533C99.3227 139.038 99.1222 139.522 98.7652 139.879C98.4083 140.236 97.9242 140.437 97.4194 140.437ZM95.5132 104.275H110.739C111.244 104.275 111.728 104.475 112.085 104.832C112.442 105.189 112.642 105.673 112.642 106.178C112.642 106.683 112.442 107.167 112.085 107.524C111.728 107.881 111.244 108.081 110.739 108.081H95.5132C95.0085 108.081 94.5244 107.881 94.1674 107.524C93.8105 107.167 93.61 106.683 93.61 106.178C93.61 105.673 93.8105 105.189 94.1674 104.832C94.5244 104.475 95.0085 104.275 95.5132 104.275ZM112.085 112.445C112.442 112.802 112.642 113.286 112.642 113.791C112.642 114.296 112.442 114.78 112.085 115.137C111.728 115.494 111.244 115.694 110.739 115.694H95.5132C95.0085 115.694 94.5244 115.494 94.1674 115.137C93.8105 114.78 93.61 114.296 93.61 113.791C93.61 113.286 93.8105 112.802 94.1674 112.445C94.5244 112.088 95.0085 111.888 95.5132 111.888H110.739C111.244 111.888 111.728 112.088 112.085 112.445ZM94.1674 120.058C94.5244 119.701 95.0085 119.501 95.5132 119.501H103.126C103.631 119.501 104.115 119.701 104.472 120.058C104.829 120.415 105.029 120.899 105.029 121.404C105.029 121.909 104.829 122.393 104.472 122.75C104.115 123.107 103.631 123.307 103.126 123.307H95.5132C95.0085 123.307 94.5244 123.107 94.1674 122.75C93.8105 122.393 93.61 121.909 93.61 121.404C93.61 120.899 93.8105 120.415 94.1674 120.058ZM105.452 130.037L116.219 119.27H116.222C116.751 118.733 117.381 118.306 118.075 118.013C118.77 117.721 119.516 117.568 120.269 117.565C121.023 117.562 121.77 117.709 122.467 117.996C123.164 118.283 123.797 118.705 124.33 119.238C124.863 119.771 125.285 120.405 125.572 121.101C125.859 121.798 126.005 122.545 126.002 123.299C125.999 124.053 125.846 124.798 125.553 125.493C125.261 126.187 124.833 126.817 124.296 127.346L113.531 138.11C113.287 138.356 112.979 138.53 112.642 138.613L105.486 140.381C105.168 140.457 104.835 140.451 104.52 140.363C104.205 140.275 103.917 140.108 103.684 139.879C103.452 139.647 103.284 139.359 103.196 139.043C103.108 138.728 103.103 138.394 103.181 138.076L104.95 130.926C105.033 130.589 105.207 130.282 105.452 130.037ZM107.633 135.929L111.209 135.044L117.564 128.689L114.873 125.998L108.518 132.353L107.633 135.929ZM120.255 125.998L121.601 124.653C121.952 124.293 122.149 123.81 122.149 123.307C122.149 122.804 121.952 122.321 121.601 121.961C121.244 121.605 120.76 121.404 120.255 121.404C119.751 121.404 119.267 121.605 118.91 121.961L117.564 123.307L120.255 125.998Z" fill="#007B42" />
                            </svg>

                            <div className={`${thirdBox === 1 && thirdBoxContent === 1 ? 'mobileAppDevelopment-content-3-show' : 'mobileAppDevelopment-content-3'}`}>
                                <div>
                                    <svg className='arrow-mobileAppBox-first' width="77" height="19" viewBox="0 0 77 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Group 4403">
                                            <path id="Vector" d="M67.7315 18.5154C62.6123 18.5154 58.4631 14.3709 58.4631 9.25768C58.4631 4.14442 62.6123 -6.28905e-07 67.7315 -4.05137e-07C72.8507 -1.81369e-07 77 4.14443 77 9.25768C77 14.3709 72.8507 18.5154 67.7315 18.5154Z" fill="#007B42" />
                                            <path id="Vector 26" d="M1 9L66 9" stroke="#007B42" strokeWidth="2" strokeLinecap="round" />
                                        </g>
                                    </svg>
                                </div>
                                <div className='mobileAppDevelopment-content-sec'>
                                    <div className='mobileAppDevelopment-content-title-right'>
                                        UI Strategy
                                    </div>
                                    <div className='mobileAppDevelopment-content-text-right'>
                                        We strive for timely and error-free delivery. The effectiveness of a project plan's creation determines the outcome of any project's implementation.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`mobileAppDevelopment-box-4 ${fourthBox === 1 ? 'mobileAppDevelopment-box-disabled' : 'mobileAppDevelopment-box'}`}
                            onMouseEnter={() => setFourthBox(1)} onMouseLeave={() => setFourthBoxContent(1)}>
                            <svg className="mobileAppDevelopment-box-icon" xmlns="http://www.w3.org/2000/svg" width="213" height="235" viewBox="0 0 213 235" fill="none">
                                <path d="M194.388 46.8838L124.123 6.45963C113.228 0.191842 99.793 0.191842 88.8774 6.45963L18.6123 46.8838C7.71727 53.1516 1 64.748 1 77.304V158.193C1 170.749 7.71727 182.346 18.6123 188.613L88.8774 229.058C99.7725 235.326 113.207 235.326 124.123 229.058L194.388 188.613C205.283 182.346 212 170.749 212 158.193V77.3244C212 64.7684 205.283 53.172 194.388 46.8838Z" stroke="#00BF67" strokeWidth="2" strokeLinecap="round" stroke-dasharray="10 10" />
                                <path d="M180.172 58.5269L121.612 24.6932C112.532 19.4473 101.335 19.4473 92.2381 24.6932L33.6783 58.5269C24.5983 63.7728 19 73.4787 19 83.9876V151.689C19 162.198 24.5983 171.904 33.6783 177.15L92.2381 211.001C101.318 216.246 112.515 216.246 121.612 211.001L180.172 177.15C189.252 171.904 194.85 162.198 194.85 151.689V84.0047C194.85 73.4958 189.252 63.7899 180.172 58.5269Z" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M97.4194 140.437H95.5162C92.9933 140.434 90.5746 139.43 88.7906 137.646C87.0066 135.862 86.003 133.443 86 130.92V104.275C86.003 101.752 87.0066 99.3333 88.7906 97.5494C90.5746 95.7654 92.9933 94.7618 95.5162 94.7588H110.742C113.265 94.7618 115.684 95.7654 117.468 97.5494C119.252 99.3333 120.255 101.752 120.258 104.275V111.888C120.258 112.393 120.058 112.877 119.701 113.234C119.344 113.591 118.86 113.791 118.355 113.791C117.85 113.791 117.366 113.591 117.009 113.234C116.652 112.877 116.452 112.393 116.452 111.888V104.275C116.452 102.761 115.85 101.308 114.78 100.238C113.709 99.1668 112.256 98.5653 110.742 98.5653H95.5162C94.0019 98.5653 92.5496 99.1668 91.4788 100.238C90.408 101.308 89.8065 102.761 89.8065 104.275V130.92C89.8065 132.435 90.408 133.887 91.4788 134.958C92.5496 136.029 94.0019 136.63 95.5162 136.63H97.4194C97.9242 136.63 98.4083 136.831 98.7652 137.188C99.1222 137.544 99.3227 138.029 99.3227 138.533C99.3227 139.038 99.1222 139.522 98.7652 139.879C98.4083 140.236 97.9242 140.437 97.4194 140.437ZM95.5132 104.275H110.739C111.244 104.275 111.728 104.475 112.085 104.832C112.442 105.189 112.642 105.673 112.642 106.178C112.642 106.683 112.442 107.167 112.085 107.524C111.728 107.881 111.244 108.081 110.739 108.081H95.5132C95.0085 108.081 94.5244 107.881 94.1674 107.524C93.8105 107.167 93.61 106.683 93.61 106.178C93.61 105.673 93.8105 105.189 94.1674 104.832C94.5244 104.475 95.0085 104.275 95.5132 104.275ZM112.085 112.445C112.442 112.802 112.642 113.286 112.642 113.791C112.642 114.296 112.442 114.78 112.085 115.137C111.728 115.494 111.244 115.694 110.739 115.694H95.5132C95.0085 115.694 94.5244 115.494 94.1674 115.137C93.8105 114.78 93.61 114.296 93.61 113.791C93.61 113.286 93.8105 112.802 94.1674 112.445C94.5244 112.088 95.0085 111.888 95.5132 111.888H110.739C111.244 111.888 111.728 112.088 112.085 112.445ZM94.1674 120.058C94.5244 119.701 95.0085 119.501 95.5132 119.501H103.126C103.631 119.501 104.115 119.701 104.472 120.058C104.829 120.415 105.029 120.899 105.029 121.404C105.029 121.909 104.829 122.393 104.472 122.75C104.115 123.107 103.631 123.307 103.126 123.307H95.5132C95.0085 123.307 94.5244 123.107 94.1674 122.75C93.8105 122.393 93.61 121.909 93.61 121.404C93.61 120.899 93.8105 120.415 94.1674 120.058ZM105.452 130.037L116.219 119.27H116.222C116.751 118.733 117.381 118.306 118.075 118.013C118.77 117.721 119.516 117.568 120.269 117.565C121.023 117.562 121.77 117.709 122.467 117.996C123.164 118.283 123.797 118.705 124.33 119.238C124.863 119.771 125.285 120.405 125.572 121.101C125.859 121.798 126.005 122.545 126.002 123.299C125.999 124.053 125.846 124.798 125.553 125.493C125.261 126.187 124.833 126.817 124.296 127.346L113.531 138.11C113.287 138.356 112.979 138.53 112.642 138.613L105.486 140.381C105.168 140.457 104.835 140.451 104.52 140.363C104.205 140.275 103.917 140.108 103.684 139.879C103.452 139.647 103.284 139.359 103.196 139.043C103.108 138.728 103.103 138.394 103.181 138.076L104.95 130.926C105.033 130.589 105.207 130.282 105.452 130.037ZM107.633 135.929L111.209 135.044L117.564 128.689L114.873 125.998L108.518 132.353L107.633 135.929ZM120.255 125.998L121.601 124.653C121.952 124.293 122.149 123.81 122.149 123.307C122.149 122.804 121.952 122.321 121.601 121.961C121.244 121.605 120.76 121.404 120.255 121.404C119.751 121.404 119.267 121.605 118.91 121.961L117.564 123.307L120.255 125.998Z" fill="#007B42" />
                            </svg>
                            <div className={`${fourthBox === 1 && fourthBoxContent === 1 ? 'mobileAppDevelopment-content-4-show' : 'mobileAppDevelopment-content-4'}`} >
                                <div className='mobileAppDevelopment-content-sec'>
                                    <div className='mobileAppDevelopment-content-title-left'>
                                        Handover
                                    </div>
                                    <div className='mobileAppDevelopment-content-text-left'>
                                        Project Manager and Business Analyst will conduct a walkthrough of the entire project and transfer project assets.
                                    </div>
                                </div>
                                <div>
                                    <svg className='arrow-mobileAppBox-first' xmlns="http://www.w3.org/2000/svg" width="72" height="62" viewBox="0 0 72 62" fill="none">
                                        <path d="M7.90445 41.7035C11.9384 38.5518 17.7597 39.2631 20.9077 43.2924C24.0557 47.3217 23.3376 53.1421 19.3036 56.2938C15.2697 59.4455 9.44844 58.7341 6.3004 54.7049C3.15237 50.6756 3.87046 44.8552 7.90445 41.7035Z" fill="#007B42" />
                                        <path d="M66.3496 8.11763L15.1289 48.1356" stroke="#007B42" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className={`mobileAppDevelopment-box-5 ${fifthBox === 1 ? 'mobileAppDevelopment-box-disabled' : 'mobileAppDevelopment-box'}`}
                            onMouseEnter={() => setFifthBox(1)} onMouseLeave={() => setFifthBoxContent(1)}>
                            <svg className="mobileAppDevelopment-box-icon" xmlns="http://www.w3.org/2000/svg" width="213" height="235" viewBox="0 0 213 235" fill="none">
                                <path d="M194.388 46.8838L124.123 6.45963C113.228 0.191842 99.793 0.191842 88.8774 6.45963L18.6123 46.8838C7.71727 53.1516 1 64.748 1 77.304V158.193C1 170.749 7.71727 182.346 18.6123 188.613L88.8774 229.058C99.7725 235.326 113.207 235.326 124.123 229.058L194.388 188.613C205.283 182.346 212 170.749 212 158.193V77.3244C212 64.7684 205.283 53.172 194.388 46.8838Z" stroke="#00BF67" strokeWidth="2" strokeLinecap="round" stroke-dasharray="10 10" />
                                <path d="M180.172 58.5269L121.612 24.6932C112.532 19.4473 101.335 19.4473 92.2381 24.6932L33.6783 58.5269C24.5983 63.7728 19 73.4787 19 83.9876V151.689C19 162.198 24.5983 171.904 33.6783 177.15L92.2381 211.001C101.318 216.246 112.515 216.246 121.612 211.001L180.172 177.15C189.252 171.904 194.85 162.198 194.85 151.689V84.0047C194.85 73.4958 189.252 63.7899 180.172 58.5269Z" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M97.4194 140.437H95.5162C92.9933 140.434 90.5746 139.43 88.7906 137.646C87.0066 135.862 86.003 133.443 86 130.92V104.275C86.003 101.752 87.0066 99.3333 88.7906 97.5494C90.5746 95.7654 92.9933 94.7618 95.5162 94.7588H110.742C113.265 94.7618 115.684 95.7654 117.468 97.5494C119.252 99.3333 120.255 101.752 120.258 104.275V111.888C120.258 112.393 120.058 112.877 119.701 113.234C119.344 113.591 118.86 113.791 118.355 113.791C117.85 113.791 117.366 113.591 117.009 113.234C116.652 112.877 116.452 112.393 116.452 111.888V104.275C116.452 102.761 115.85 101.308 114.78 100.238C113.709 99.1668 112.256 98.5653 110.742 98.5653H95.5162C94.0019 98.5653 92.5496 99.1668 91.4788 100.238C90.408 101.308 89.8065 102.761 89.8065 104.275V130.92C89.8065 132.435 90.408 133.887 91.4788 134.958C92.5496 136.029 94.0019 136.63 95.5162 136.63H97.4194C97.9242 136.63 98.4083 136.831 98.7652 137.188C99.1222 137.544 99.3227 138.029 99.3227 138.533C99.3227 139.038 99.1222 139.522 98.7652 139.879C98.4083 140.236 97.9242 140.437 97.4194 140.437ZM95.5132 104.275H110.739C111.244 104.275 111.728 104.475 112.085 104.832C112.442 105.189 112.642 105.673 112.642 106.178C112.642 106.683 112.442 107.167 112.085 107.524C111.728 107.881 111.244 108.081 110.739 108.081H95.5132C95.0085 108.081 94.5244 107.881 94.1674 107.524C93.8105 107.167 93.61 106.683 93.61 106.178C93.61 105.673 93.8105 105.189 94.1674 104.832C94.5244 104.475 95.0085 104.275 95.5132 104.275ZM112.085 112.445C112.442 112.802 112.642 113.286 112.642 113.791C112.642 114.296 112.442 114.78 112.085 115.137C111.728 115.494 111.244 115.694 110.739 115.694H95.5132C95.0085 115.694 94.5244 115.494 94.1674 115.137C93.8105 114.78 93.61 114.296 93.61 113.791C93.61 113.286 93.8105 112.802 94.1674 112.445C94.5244 112.088 95.0085 111.888 95.5132 111.888H110.739C111.244 111.888 111.728 112.088 112.085 112.445ZM94.1674 120.058C94.5244 119.701 95.0085 119.501 95.5132 119.501H103.126C103.631 119.501 104.115 119.701 104.472 120.058C104.829 120.415 105.029 120.899 105.029 121.404C105.029 121.909 104.829 122.393 104.472 122.75C104.115 123.107 103.631 123.307 103.126 123.307H95.5132C95.0085 123.307 94.5244 123.107 94.1674 122.75C93.8105 122.393 93.61 121.909 93.61 121.404C93.61 120.899 93.8105 120.415 94.1674 120.058ZM105.452 130.037L116.219 119.27H116.222C116.751 118.733 117.381 118.306 118.075 118.013C118.77 117.721 119.516 117.568 120.269 117.565C121.023 117.562 121.77 117.709 122.467 117.996C123.164 118.283 123.797 118.705 124.33 119.238C124.863 119.771 125.285 120.405 125.572 121.101C125.859 121.798 126.005 122.545 126.002 123.299C125.999 124.053 125.846 124.798 125.553 125.493C125.261 126.187 124.833 126.817 124.296 127.346L113.531 138.11C113.287 138.356 112.979 138.53 112.642 138.613L105.486 140.381C105.168 140.457 104.835 140.451 104.52 140.363C104.205 140.275 103.917 140.108 103.684 139.879C103.452 139.647 103.284 139.359 103.196 139.043C103.108 138.728 103.103 138.394 103.181 138.076L104.95 130.926C105.033 130.589 105.207 130.282 105.452 130.037ZM107.633 135.929L111.209 135.044L117.564 128.689L114.873 125.998L108.518 132.353L107.633 135.929ZM120.255 125.998L121.601 124.653C121.952 124.293 122.149 123.81 122.149 123.307C122.149 122.804 121.952 122.321 121.601 121.961C121.244 121.605 120.76 121.404 120.255 121.404C119.751 121.404 119.267 121.605 118.91 121.961L117.564 123.307L120.255 125.998Z" fill="#007B42" />
                            </svg>
                            <div
                                //  className="mobileAppDevelopment-content-5"
                                className={`${fifthBox === 1 && fifthBoxContent === 1 ? 'mobileAppDevelopment-content-5-show' : 'mobileAppDevelopment-content-5'}`}
                            >
                                <div>
                                    <svg className='arrow-mobileAppBox-first' xmlns="http://www.w3.org/2000/svg" width="72" height="62" viewBox="0 0 72 62" fill="none">
                                        <path d="M64.0955 41.7035C60.0616 38.5518 54.2403 39.2631 51.0923 43.2924C47.9443 47.3217 48.6624 53.1421 52.6964 56.2938C56.7303 59.4455 62.5516 58.7341 65.6996 54.7049C68.8476 50.6756 68.1295 44.8552 64.0955 41.7035Z" fill="#007B42" />
                                        <path d="M5.6504 8.11763L56.8711 48.1356" stroke="#007B42" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <div className='mobileAppDevelopment-content-sec'>
                                    <div className='mobileAppDevelopment-content-title-right'>
                                        Development & Testing
                                    </div>
                                    <div className='mobileAppDevelopment-content-text-right'>
                                        The development team and the quality analyst will collaborate in accordance with the project manager's established project plan.
                                    </div>
                                </div>

                            </div>
                        </div>

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

export default MobileAppDevelopment



