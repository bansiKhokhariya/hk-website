import { useState } from 'react';
import Navbar from '../../../Navbar/Navbar.jsx';
import Headline from '../../../Headline/Headline';
import Banner from '../../../Banner/Banner.jsx';
import Footer from '../../../Home/Footer/Footer.jsx';
import './AndroidJAVAApplication.css';

const AndroidJAVAApplication = () => {

    const [googleButton, setGoogleButton] = useState(0)

    const bannerObject = {
        boxSide: 'right',
        backgroundBanner: `/frame/javaApp-page-banner.webp`,
        bannerTitle: `Android`,
        bannerTitleSpan: `JAVA Application`,
        bannerContent: `The standard and most popular programming language for creating Android apps has been Java. Java is one of the official programming languages supported by Google's Android mobile operating system. This is how Java is usually used in a mobile app development company's Android app development process.`
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
                            Features while using JAVA for Mobile Applications Development
                        </div>

                        <div className='main-section-java'>
                            <div className="around-java-container">
                                <div className="around-java-container-bx">
                                    <div className="around-java-container-textBx" style={{ '--i': 1 }}>
                                        <div className="around-section">
                                            <div className='around-round-java-behind'>
                                                <div className='around-center-behind-Bx'></div>
                                                <div className='around-center-under-round-java'>
                                                    Android Studio
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="around-java-container-textBx" style={{ '--i': 2 }}>
                                        <div className="around-section">
                                            <div className='around-round-java-behind'>
                                                <div className='around-center-behind-Bx'></div>
                                                <div className='around-center-under-round-java'>
                                                    Android SDK (Software Development Kit)
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="around-java-container-textBx" style={{ '--i': 3 }}>
                                        <div className="around-section">
                                            <div className='around-round-java-behind'>
                                                <div className='around-center-behind-Bx'></div>
                                                <div className='around-center-under-round-java'>
                                                    Application Logic
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="around-java-container-textBx" style={{ '--i': 4 }}>
                                        <div className="around-section">
                                            <div className='around-round-java-behind'>
                                                <div className='around-center-behind-Bx'></div>
                                                <div className='around-center-under-round-java'>
                                                    User Interface (UI) Development
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="around-java-container-textBx" style={{ '--i': 5 }}>
                                        <div className="around-section">
                                            <div className='around-round-java-behind'>
                                                <div className='around-center-behind-Bx'></div>
                                                <div className='around-center-under-round-java'>
                                                    Event Handling
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="around-java-container-textBx" style={{ '--i': 6 }}>
                                        <div className="around-section">
                                            <div className='around-round-java-behind'>
                                                <div className='around-center-behind-Bx'></div>
                                                <div className='around-center-under-round-java'>
                                                    Third-Party Libraries
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="around-java-container-textBx" style={{ '--i': 7 }}>
                                        <div className="around-section">
                                            <div className='around-round-java-behind'>
                                                <div className='around-center-behind-Bx'></div>
                                                <div className='around-center-under-round-java'>
                                                    Multithreading and Asynchronous Processing
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="around-java-container-textBx" style={{ '--i': 8 }}>
                                        <div className="around-section">
                                            <div className='around-round-java-behind'>
                                                <div className='around-center-behind-Bx'></div>
                                                <div className='around-center-under-round-java'>
                                                    Backend Integration
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-java">
                                    <div className="contentBx">
                                        <div className='center-java-section'>
                                            <div className='center-round-ring'>
                                                <div className='right-arrow-java'>
                                                    <svg width="77" height="19" viewBox="0 0 77 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g id="Group 4403">
                                                            <path id="Vector" d="M67.7315 18.5154C62.6123 18.5154 58.4631 14.3709 58.4631 9.25768C58.4631 4.14442 62.6123 -6.28905e-07 67.7315 -4.05137e-07C72.8507 -1.81369e-07 77 4.14443 77 9.25768C77 14.3709 72.8507 18.5154 67.7315 18.5154Z" fill="#007B42" />
                                                            <path id="Vector 26" d="M1 9L66 9" stroke="#007B42" strokeWidth="2" strokeLinecap="round" />
                                                        </g>
                                                    </svg>
                                                </div>
                                                <div className='left-arrow-java'>
                                                    <svg width="77" height="19" viewBox="0 0 77 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g id="Group 4407">
                                                            <path id="Vector" d="M9.26846 18.5154C14.3877 18.5154 18.5369 14.3709 18.5369 9.25768C18.5369 4.14442 14.3877 -6.28905e-07 9.26846 -4.05137e-07C4.14925 -1.81369e-07 1.81159e-07 4.14443 4.04666e-07 9.25768C6.28173e-07 14.3709 4.14925 18.5154 9.26846 18.5154Z" fill="#007B42" />
                                                            <path id="Vector 26" d="M76 9L11 9" stroke="#007B42" strokeWidth="2" strokeLinecap="round" />
                                                        </g>
                                                    </svg>
                                                </div>
                                                <div className='up-arrow-java'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="77" viewBox="0 0 19 77" fill="none">
                                                        <path d="M18.6286 9.26846C18.6286 14.3877 14.4842 18.5369 9.37096 18.5369C4.25771 18.5369 0.113281 14.3877 0.113281 9.26846C0.113281 4.14925 4.25771 0 9.37096 0C14.4842 0 18.6286 4.14925 18.6286 9.26846Z" fill="#007B42" />
                                                        <path d="M9.11328 76V11" stroke="#007B42" strokeWidth="2" strokeLinecap="round" />
                                                    </svg>
                                                </div>
                                                <div className='down-arrow-java'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="77" viewBox="0 0 19 77" fill="none">
                                                        <path d="M0.113549 67.7315C0.113549 62.6123 4.25797 58.4631 9.37123 58.4631C14.4845 58.4631 18.6289 62.6123 18.6289 67.7315C18.6289 72.8507 14.4845 77 9.37123 77C4.25798 77 0.11355 72.8508 0.113549 67.7315Z" fill="#007B42" />
                                                        <path d="M9.6289 1L9.62891 66" stroke="#007B42" strokeWidth="2" strokeLinecap="round" />
                                                    </svg>
                                                </div>
                                                <div className='right-bottom-arrow-java'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88" fill="none">
                                                        <path d="M80.5385 67.869C76.9187 64.2492 71.0542 64.2458 67.4386 67.8614C63.823 71.477 63.8264 77.3415 67.4462 80.9613C71.066 84.5812 76.9306 84.5846 80.5462 80.969C84.1618 77.3534 84.1584 71.4888 80.5385 67.869Z" fill="#007B42" />
                                                        <path d="M6.82501 7.61212L72.5859 73.373" stroke="#007B42" strokeWidth="2" strokeLinecap="round" />
                                                    </svg>
                                                </div>
                                                <div className='left-bottom-arrow-java'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88" fill="none">
                                                        <path d="M7.01614 67.869C10.636 64.2492 16.5005 64.2458 20.1161 67.8614C23.7317 71.477 23.7283 77.3415 20.1085 80.9613C16.4887 84.5812 10.6241 84.5846 7.00852 80.969C3.39291 77.3534 3.39632 71.4888 7.01614 67.869Z" fill="#007B42" />
                                                        <path d="M80.7297 7.61212L14.9688 73.373" stroke="#007B42" strokeWidth="2" strokeLinecap="round" />
                                                    </svg>
                                                </div>
                                                <div className='left-top-arrow-java'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88" fill="none">
                                                        <path d="M7.01614 20.588C10.636 24.2078 16.5005 24.2113 20.1161 20.5956C23.7317 16.98 23.7283 11.1155 20.1085 7.49568C16.4887 3.87586 10.6241 3.87245 7.00852 7.48806C3.39291 11.1037 3.39632 16.9682 7.01614 20.588Z" fill="#007B42" />
                                                        <path d="M80.7297 80.8449L14.9688 15.084" stroke="#007B42" strokeWidth="2" strokeLinecap="round" />
                                                    </svg>
                                                </div>
                                                <div className='right-top-arrow-java'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88" fill="none">
                                                        <path d="M80.5385 20.588C76.9187 24.2078 71.0542 24.2113 67.4386 20.5956C63.823 16.98 63.8264 11.1155 67.4462 7.49568C71.066 3.87586 76.9306 3.87245 80.5462 7.48806C84.1618 11.1037 84.1584 16.9682 80.5385 20.588Z" fill="#007B42" />
                                                        <path d="M6.82501 80.8449L72.5859 15.084" stroke="#007B42" strokeWidth="2" strokeLinecap="round" />
                                                    </svg>
                                                </div>
                                            </div>

                                            <div className='main-center-round-java'>
                                                <div className='main-center-under-round-java'>
                                                    <div className='java-icon'>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img src="/image/java-main-image.webp" className='java-main-image' alt="" />
                        </div>

                        <div className='java-second-section'>
                            <div className='java-second-section-box'>
                                <div className='java-second-section-title'>
                                    Introduction to
                                    Our Android Java Application
                                </div>
                                <div className='java-second-section-text'>
                                    Welcome to the innovative <span style={{ fontWeight: 600, color: "black" }}> HKAPPS</span> Android Java application, an effective and versatile instrument made to improve your mobile experience. Being a top mobile app development business, we take pleasure in providing creative approaches that skillfully combine functionality, design, and technology.
                                </div>
                            </div>
                            <div className='java-second-section-box'>
                                <div className='java-second-section-title'>
                                    About Our
                                    <br />
                                    App
                                </div>
                                <div className='java-second-section-text'>
                                    Our Android Java application has been carefully designed to satisfy the changing demands of modern mobile consumers. Whether you're looking for a powerful tool, compelling entertainment, or an efficient business tool, our app can provide you with an engaging and full of functions experience.
                                </div>
                            </div>
                        </div>

                        <div className='java-third-section'>
                            <div className='java-third-section-box'>
                                <div className='java-second-section-title'>
                                    Why Choose Our App
                                </div>
                                <div className='java-second-section-text'>
                                    At <span style={{ fontWeight: 600, color: "black" }}> HKAPPS</span> we recognize that a mobile application is a solution designed to improve your digital experience, not just a piece of code. This is the reason our Java app for Android is unique:
                                </div>
                                <div className='java-collapse'>
                                    <div className='java-collapse-main-box'>
                                        <div className='java-collapse-box'>
                                            <svg className='java-collapse-checkbox' xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                                <circle cx="7.5" cy="8" r="7.5" fill="white" />
                                            </svg>
                                            <div className='java-collapse-title'>
                                                Expert Development
                                            </div>
                                        </div>
                                        <div className='java-collapse-content'>
                                        Expert Development Created by our experienced team of Java developers, the app is a masterpiece in terms of design and functionality.
                                        </div>
                                    </div>
                                    <div className='java-collapse-main-box'>
                                        <div className='java-collapse-box'>
                                            <svg className='java-collapse-checkbox' xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                                <circle cx="7.5" cy="8" r="7.5" fill="white" />
                                            </svg>
                                            <div className='java-collapse-title'>
                                                Tailored for You
                                            </div>
                                        </div>
                                        <div className='java-collapse-content'>
                                        We value user input and make constant changes to the app to satisfy the changing demands of our expanding user base.
                                        </div>
                                    </div>
                                    <div className='java-collapse-main-box'>
                                        <div className='java-collapse-box'>
                                            <svg className='java-collapse-checkbox' xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                                <circle cx="7.5" cy="8" r="7.5" fill="white" />
                                            </svg>
                                            <div className='java-collapse-title'>
                                                Security First
                                            </div>
                                        </div>
                                        <div className='java-collapse-content'>
                                        Data security and your privacy are of utmost importance. To guarantee a safe and secure experience, our software is constructed with strong security features.
                                        </div>
                                    </div>
                                    <div className='java-collapse-main-box'>
                                        <div className='java-collapse-box'>
                                            <svg className='java-collapse-checkbox' xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                                <circle cx="7.5" cy="8" r="7.5" fill="white" />
                                            </svg>
                                            <div className='java-collapse-title'>
                                                Expert Team of Professionals
                                            </div>
                                        </div>
                                        <div className='java-collapse-content'>
                                        Our development team has extensive expertise creating unique mobile applications for many business verticals by utilising the appropriate tools and technology.
                                        </div>
                                    </div>
                                    <div className='java-collapse-main-box'>
                                        <div className='java-collapse-box'>
                                            <svg className='java-collapse-checkbox' xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                                <circle cx="7.5" cy="8" r="7.5" fill="white" />
                                            </svg>
                                            <div className='java-collapse-title'>
                                                On-Time Delivery
                                            </div>
                                        </div>
                                        <div className='java-collapse-content'>
                                        We have a track record of meeting deadlines while maintaining quality, having delivered hundreds of Android, iOS, and other applications on time.
                                        </div>
                                    </div>
                                    <div className='java-collapse-main-box'>
                                        <div className='java-collapse-box'>
                                            <svg className='java-collapse-checkbox' xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                                <circle cx="7.5" cy="8" r="7.5" fill="white" />
                                            </svg>
                                            <div className='java-collapse-title'>
                                                Next-Generation Mobile Apps
                                            </div>
                                        </div>
                                        <div className='java-collapse-content'>
                                        We are aware of your varied business requirements and objectives, and we work with you to develop apps that are cutting edge, innovative, highly usable, and extremely secure.
                                        </div>
                                    </div>
                                    <div className='java-collapse-main-box'>
                                        <div className='java-collapse-box'>
                                            <svg className='java-collapse-checkbox' xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                                <circle cx="7.5" cy="8" r="7.5" fill="white" />
                                            </svg>
                                            <div className='java-collapse-title'>
                                                Proven Track Record
                                            </div>
                                        </div>
                                        <div className='java-collapse-content'>
                                        We've delivered hundreds of mobile applications to our clients in the financial, travel, healthcare, and e-commerce sectors, among other industries, with success.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='java-third-section-box'>
                                <img src="/image/java-third-section-image.webp" className='java-third-section-box-image' alt="" />
                            </div>
                        </div>

                        <div className='java-fourth-section'>
                            <div className='java-third-section-box'>
                                <img src="/image/java-fourth-section-image.webp" className='java-third-section-box-image' alt="" />
                            </div>
                            <div className='java-third-section-box'>
                                <div className='java-second-section-title'>
                                    How to Get Started
                                </div>
                                <div className='java-second-section-text'>
                                    Getting started with our Android Java application is quick and easy.
                                    Simply <span style={{ fontWeight: 600, color: "black" }}>[provide instructions on downloading the app from Google Playstore]</span>  and you'll
                                    be on your way to experiencing the next level of mobile functionality.
                                    <br />
                                    <br />
                                    Explore the possibilities with <span style={{ fontWeight: 600, color: "black" }}> HKAPPS</span> Android Java application – where innovation meets usability.
                                    Join us on the journey towards a smarter and more connected mobile experience.
                                </div>
                                <div className='java-fourth-section-button' onMouseEnter={() => setGoogleButton(1)} onMouseLeave={() => setGoogleButton(0)}>
                                    <div className='java-fourth-section-button-text'>Visit now</div>
                                    {googleButton === 1 ?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="180" height="54" viewBox="0 0 180 54" fill="none">
                                            <g clipPath="url(#clip0_1174_7860)">
                                                <path d="M173.33 53.666H6.67041C3.00381 53.666 0.00390625 50.6661 0.00390625 46.9995V7.00048C0.00390625 3.33388 3.00381 0.333984 6.67041 0.333984H173.33C176.997 0.333984 179.997 3.33388 179.997 7.00048V46.9995C179.997 50.6661 176.997 53.666 173.33 53.666Z" fill="#100F0D" />
                                                <path d="M173.33 0.333984H6.67041C3.00381 0.333984 0.00390625 3.33388 0.00390625 7.00048V46.9995C0.00390625 50.6661 3.00381 53.666 6.67041 53.666H173.33C176.997 53.666 179.997 50.6661 179.997 46.9995V7.00048C179.997 3.33388 176.997 0.333984 173.33 0.333984ZM173.33 1.40008C176.418 1.40008 178.93 3.91258 178.93 7.00048V46.9995C178.93 50.0874 176.418 52.5999 173.33 52.5999H6.67041C3.58251 52.5999 1.07111 50.0874 1.07111 46.9995V7.00048C1.07111 3.91258 3.58251 1.40008 6.67041 1.40008H173.33Z" fill="black" />
                                                <path d="M142.579 40.3328H145.067V23.6638H142.579V40.3328ZM164.988 29.6688L162.136 36.8952H162.051L159.091 29.6688H156.411L160.851 39.7688L158.319 45.3873H160.914L167.755 29.6693L164.988 29.6688ZM150.878 38.4394C150.065 38.4394 148.928 38.0315 148.928 37.0238C148.928 35.7373 150.344 35.2441 151.565 35.2441C152.658 35.2441 153.174 35.4796 153.838 35.8014C153.645 37.3456 152.316 38.4394 150.878 38.4394ZM151.18 29.3042C149.378 29.3042 147.513 30.0979 146.741 31.8563L148.949 32.7781C149.421 31.8563 150.3 31.5563 151.222 31.5563C152.509 31.5563 153.817 32.3277 153.838 33.7005V33.8719C153.387 33.6145 152.422 33.2287 151.244 33.2287C148.862 33.2287 146.44 34.5364 146.44 36.9811C146.44 39.2113 148.392 40.6482 150.578 40.6482C152.25 40.6482 153.174 39.8977 153.751 39.0181H153.838V40.3055H156.241V33.9145C156.241 30.9552 154.03 29.3042 151.18 29.3042ZM135.804 31.6979H132.265V25.9846H135.804C137.664 25.9846 138.719 27.5242 138.719 28.8412C138.719 30.1329 137.663 31.6979 135.804 31.6979ZM135.74 23.6642H129.778V40.3332H132.265V34.0183H135.74C138.497 34.0183 141.208 32.0225 141.208 28.8418C141.208 25.6617 138.497 23.6642 135.74 23.6642ZM103.233 38.4422C101.514 38.4422 100.075 37.0026 100.075 35.0272C100.075 33.0288 101.514 31.5689 103.233 31.5689C104.929 31.5689 106.261 33.0289 106.261 35.0272C106.261 37.0026 104.929 38.4422 103.233 38.4422ZM106.089 30.6019H106.003C105.445 29.9362 104.37 29.3347 103.018 29.3347C100.182 29.3347 97.5832 31.8268 97.5832 35.0272C97.5832 38.2058 100.182 40.676 103.018 40.676C104.37 40.676 105.445 40.0744 106.003 39.3875H106.089V40.2031C106.089 42.3734 104.929 43.5327 103.061 43.5327C101.536 43.5327 100.591 42.4374 100.204 41.5139L98.0349 42.4159C98.6572 43.9189 100.311 45.7669 103.061 45.7669C105.983 45.7669 108.453 44.0481 108.453 39.8592V29.6782H106.089L106.089 30.6019ZM110.171 40.3323H112.662V23.6633H110.171V40.3323ZM116.335 34.8335C116.271 32.6424 118.033 31.5257 119.3 31.5257C120.288 31.5257 121.125 32.0199 121.406 32.7283L116.335 34.8335ZM124.068 32.9429C123.596 31.6763 122.157 29.3347 119.214 29.3347C116.292 29.3347 113.865 31.633 113.865 35.0054C113.865 38.1845 116.271 40.6761 119.493 40.6761C122.092 40.6761 123.596 39.0871 124.219 38.1631L122.286 36.8741C121.641 37.8194 120.761 38.4423 119.493 38.4423C118.226 38.4423 117.323 37.8622 116.744 36.7237L124.326 33.5878L124.068 32.9429ZM63.6591 31.0747V33.4804H69.4156C69.2437 34.8336 68.7926 35.8215 68.1052 36.509C67.2672 37.3465 65.9569 38.2704 63.659 38.2704C60.1147 38.2704 57.344 35.4137 57.344 31.8695C57.344 28.3253 60.1147 25.4682 63.659 25.4682C65.5708 25.4682 66.9667 26.2202 67.9978 27.1868L69.6952 25.4895C68.2556 24.115 66.3442 23.0625 63.659 23.0625C58.8038 23.0625 54.7227 27.0149 54.7227 31.8695C54.7227 36.7236 58.8038 40.6761 63.659 40.6761C66.2792 40.6761 68.2557 39.8168 69.802 38.2059C71.3916 36.6163 71.8858 34.3825 71.8858 32.5779C71.8858 32.02 71.8424 31.5045 71.7566 31.0747H63.6591ZM78.4311 38.4422C76.7123 38.4422 75.2301 37.0245 75.2301 35.0054C75.2301 32.9648 76.7123 31.569 78.4311 31.569C80.1492 31.569 81.6314 32.9648 81.6314 35.0054C81.6314 37.0245 80.1492 38.4422 78.4311 38.4422ZM78.4311 29.3347C75.2941 29.3347 72.7384 31.7189 72.7384 35.0054C72.7384 38.2704 75.2941 40.6761 78.4311 40.6761C81.5669 40.6761 84.1231 38.2704 84.1231 35.0054C84.1231 31.7189 81.5669 29.3347 78.4311 29.3347ZM90.8481 38.4422C89.1305 38.4422 87.6478 37.0245 87.6478 35.0054C87.6478 32.9648 89.1306 31.569 90.8481 31.569C92.5669 31.569 94.0486 32.9648 94.0486 35.0054C94.0486 37.0245 92.5669 38.4422 90.8481 38.4422ZM90.8481 29.3347C87.7123 29.3347 85.1566 31.7189 85.1566 35.0054C85.1566 38.2704 87.7123 40.6761 90.8481 40.6761C93.9851 40.6761 96.5408 38.2704 96.5408 35.0054C96.5408 31.7189 93.9851 29.3347 90.8481 29.3347Z" fill="white" />
                                                <path d="M27.6237 26.2321L13.4297 41.2981C13.4302 41.3012 13.4313 41.3038 13.4318 41.307C13.8671 42.943 15.3614 44.1476 17.1348 44.1476C17.8437 44.1476 18.5093 43.956 19.0801 43.6195L19.1254 43.5929L35.1034 34.3729L27.6237 26.2321Z" fill="#EB3131" />
                                                <path d="M41.9843 23.667L41.9707 23.6577L35.0725 19.6587L27.3008 26.5743L35.0995 34.372L41.9613 30.4128C43.1643 29.7633 43.981 28.4951 43.981 27.0326C43.981 25.5806 43.1754 24.3186 41.9843 23.667Z" fill="#F6B60B" />
                                                <path d="M13.4271 12.7031C13.3417 13.0178 13.2969 13.3474 13.2969 13.6896V40.3126C13.2969 40.6543 13.3412 40.985 13.4276 41.2985L28.1116 26.6175L13.4271 12.7031Z" fill="#5778C5" />
                                                <path d="M27.7258 27.001L35.0731 19.6559L19.1131 10.4025C18.533 10.055 17.8559 9.85449 17.1314 9.85449C15.358 9.85449 13.8617 11.0613 13.4263 12.6992C13.4258 12.7008 13.4258 12.7019 13.4258 12.7033L27.7258 27.001Z" fill="#3BAD49" />
                                                <path d="M63.1949 13.3752H59.3054V14.3377H62.22C62.1408 15.1231 61.8283 15.7398 61.3012 16.1877C60.7742 16.6357 60.1012 16.8606 59.3054 16.8606C58.4325 16.8606 57.6929 16.5565 57.0868 15.9523C56.493 15.3357 56.191 14.5731 56.191 13.6544C56.191 12.7358 56.493 11.9732 57.0868 11.3566C57.6929 10.7525 58.4325 10.4504 59.3054 10.4504C59.7534 10.4504 60.1805 10.5275 60.572 10.6963C60.9637 10.8649 61.2783 11.1004 61.5241 11.4025L62.2637 10.6629C61.9283 10.2816 61.5033 9.99001 60.9761 9.77749C60.4491 9.56496 59.8991 9.46296 59.3053 9.46296C58.1408 9.46296 57.1534 9.86708 56.3471 10.6734C55.5409 11.4816 55.1367 12.4775 55.1367 13.6545C55.1367 14.8315 55.5408 15.8295 56.3471 16.6358C57.1534 17.4419 58.1408 17.8462 59.3053 17.8462C60.5282 17.8462 61.5032 17.4544 62.2532 16.6586C62.9136 15.9962 63.2511 15.1004 63.2511 13.9796C63.2511 13.79 63.2282 13.5877 63.1949 13.3752ZM64.7017 9.64195V17.6669H69.3869V16.6814H65.7329V14.1357H69.0287V13.1732H65.7329V10.6295H69.3869V9.64192L64.7017 9.64195ZM75.9567 10.6295V9.64195H70.4422V10.6295H72.6839V17.6668H73.7151V10.6295H75.9567ZM80.9492 9.64195H79.918V17.6669H80.9492V9.64195ZM87.7558 10.6295V9.64195H82.2414V10.6295H84.4829V17.6668H85.5141V10.6295H87.7558ZM98.1618 10.6858C97.366 9.86702 96.391 9.46289 95.2264 9.46289C94.0598 9.46289 93.0849 9.86701 92.289 10.6733C91.4932 11.4691 91.1016 12.467 91.1016 13.6544C91.1016 14.8418 91.4932 15.8398 92.289 16.6357C93.0849 17.4418 94.0598 17.8461 95.2264 17.8461C96.3805 17.8461 97.3659 17.4418 98.1618 16.6357C98.9577 15.8398 99.3492 14.8419 99.3492 13.6544C99.3492 12.4774 98.9576 11.4815 98.1618 10.6858ZM93.0286 11.3566C93.6223 10.7525 94.3515 10.4503 95.2264 10.4503C96.0993 10.4503 96.8285 10.7525 97.4118 11.3566C98.0055 11.9503 98.2971 12.7252 98.2971 13.6544C98.2971 14.5857 98.0055 15.3585 97.4118 15.9523C96.8285 16.5564 96.0993 16.8605 95.2264 16.8605C94.3515 16.8605 93.6223 16.5564 93.0286 15.9523C92.4473 15.346 92.1557 14.5857 92.1557 13.6544C92.1557 12.7252 92.4473 11.9628 93.0286 11.3566ZM101.799 12.6691L101.756 11.1211H101.799L105.878 17.6668H106.955V9.64187H105.924V14.3376L105.968 15.8856H105.924L102.024 9.64187H100.768V17.6668H101.799V12.6691Z" fill="white" stroke="white" strokeWidth="0.26666" strokeMiterlimit="10" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1174_7860">
                                                    <rect width="180" height="53.333" fill="white" transform="translate(0 0.333008)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" width="180" height="54" viewBox="0 0 180 54" fill="none">
                                            <g clipPath="url(#clip0_183_5303)">
                                                <path d="M173.33 53.6665H6.67041C3.00381 53.6665 0.00390625 50.6666 0.00390625 47V7.00097C0.00390625 3.33437 3.00381 0.334473 6.67041 0.334473H173.33C176.997 0.334473 179.997 3.33437 179.997 7.00097V47C179.997 50.6666 176.997 53.6665 173.33 53.6665Z" fill="white" />
                                                <path d="M142.579 40.3333H145.067V23.6643H142.579V40.3333ZM164.988 29.6693L162.136 36.8957H162.051L159.091 29.6693H156.411L160.851 39.7693L158.319 45.3878H160.914L167.755 29.6698L164.988 29.6693ZM150.878 38.4399C150.065 38.4399 148.928 38.032 148.928 37.0243C148.928 35.7378 150.344 35.2446 151.565 35.2446C152.658 35.2446 153.174 35.48 153.838 35.8019C153.645 37.3461 152.316 38.4399 150.878 38.4399ZM151.18 29.3047C149.378 29.3047 147.513 30.0984 146.741 31.8568L148.949 32.7786C149.421 31.8568 150.3 31.5568 151.222 31.5568C152.509 31.5568 153.817 32.3281 153.838 33.701V33.8724C153.387 33.615 152.422 33.2292 151.244 33.2292C148.862 33.2292 146.44 34.5369 146.44 36.9816C146.44 39.2118 148.392 40.6487 150.578 40.6487C152.25 40.6487 153.174 39.8981 153.751 39.0186H153.838V40.306H156.241V33.915C156.241 30.9557 154.03 29.3047 151.18 29.3047ZM135.804 31.6984H132.265V25.9851H135.804C137.664 25.9851 138.719 27.5247 138.719 28.8417C138.719 30.1334 137.663 31.6984 135.804 31.6984ZM135.74 23.6647H129.778V40.3337H132.265V34.0188H135.74C138.497 34.0188 141.208 32.023 141.208 28.8423C141.208 25.6622 138.497 23.6647 135.74 23.6647ZM103.233 38.4427C101.514 38.4427 100.075 37.0031 100.075 35.0277C100.075 33.0293 101.514 31.5694 103.233 31.5694C104.929 31.5694 106.261 33.0294 106.261 35.0277C106.261 37.0031 104.929 38.4427 103.233 38.4427ZM106.089 30.6024H106.003C105.445 29.9367 104.37 29.3352 103.018 29.3352C100.182 29.3352 97.5832 31.8273 97.5832 35.0277C97.5832 38.2063 100.182 40.6765 103.018 40.6765C104.37 40.6765 105.445 40.0749 106.003 39.388H106.089V40.2036C106.089 42.3739 104.929 43.5332 103.061 43.5332C101.536 43.5332 100.591 42.4379 100.204 41.5144L98.0349 42.4164C98.6572 43.9194 100.311 45.7674 103.061 45.7674C105.983 45.7674 108.453 44.0486 108.453 39.8597V29.6787H106.089L106.089 30.6024ZM110.171 40.3328H112.662V23.6638H110.171V40.3328ZM116.335 34.834C116.271 32.6429 118.033 31.5262 119.3 31.5262C120.288 31.5262 121.125 32.0204 121.406 32.7288L116.335 34.834ZM124.068 32.9434C123.596 31.6768 122.157 29.3352 119.214 29.3352C116.292 29.3352 113.865 31.6335 113.865 35.0059C113.865 38.185 116.271 40.6766 119.493 40.6766C122.092 40.6766 123.596 39.0876 124.219 38.1636L122.286 36.8746C121.641 37.8199 120.761 38.4428 119.493 38.4428C118.226 38.4428 117.323 37.8627 116.744 36.7242L124.326 33.5883L124.068 32.9434ZM63.6591 31.0752V33.4809H69.4156C69.2437 34.8341 68.7926 35.822 68.1052 36.5095C67.2672 37.3469 65.9569 38.2709 63.659 38.2709C60.1147 38.2709 57.344 35.4142 57.344 31.87C57.344 28.3258 60.1147 25.4687 63.659 25.4687C65.5708 25.4687 66.9667 26.2207 67.9978 27.1873L69.6952 25.49C68.2556 24.1155 66.3442 23.063 63.659 23.063C58.8038 23.063 54.7227 27.0154 54.7227 31.87C54.7227 36.7241 58.8038 40.6766 63.659 40.6766C66.2792 40.6766 68.2557 39.8173 69.802 38.2064C71.3916 36.6168 71.8858 34.383 71.8858 32.5784C71.8858 32.0205 71.8424 31.505 71.7566 31.0752H63.6591ZM78.4311 38.4427C76.7123 38.4427 75.2301 37.025 75.2301 35.0059C75.2301 32.9653 76.7123 31.5695 78.4311 31.5695C80.1492 31.5695 81.6314 32.9653 81.6314 35.0059C81.6314 37.025 80.1492 38.4427 78.4311 38.4427ZM78.4311 29.3352C75.2941 29.3352 72.7384 31.7194 72.7384 35.0059C72.7384 38.2709 75.2941 40.6766 78.4311 40.6766C81.5669 40.6766 84.1231 38.2709 84.1231 35.0059C84.1231 31.7194 81.5669 29.3352 78.4311 29.3352ZM90.8481 38.4427C89.1305 38.4427 87.6478 37.025 87.6478 35.0059C87.6478 32.9653 89.1306 31.5695 90.8481 31.5695C92.5669 31.5695 94.0486 32.9653 94.0486 35.0059C94.0486 37.025 92.5669 38.4427 90.8481 38.4427ZM90.8481 29.3352C87.7123 29.3352 85.1566 31.7194 85.1566 35.0059C85.1566 38.2709 87.7123 40.6766 90.8481 40.6766C93.9851 40.6766 96.5408 38.2709 96.5408 35.0059C96.5408 31.7194 93.9851 29.3352 90.8481 29.3352Z" fill="black" />
                                                <path d="M27.6237 26.2326L13.4297 41.2986C13.4302 41.3017 13.4313 41.3043 13.4318 41.3075C13.8671 42.9435 15.3614 44.1481 17.1348 44.1481C17.8437 44.1481 18.5093 43.9564 19.0801 43.62L19.1254 43.5934L35.1034 34.3734L27.6237 26.2326Z" fill="#EB3131" />
                                                <path d="M41.9843 23.6675L41.9707 23.6582L35.0725 19.6592L27.3008 26.5748L35.0995 34.3725L41.9613 30.4133C43.1643 29.7638 43.981 28.4956 43.981 27.0331C43.981 25.5811 43.1754 24.3191 41.9843 23.6675Z" fill="#F6B60B" />
                                                <path d="M13.4271 12.7036C13.3417 13.0183 13.2969 13.3479 13.2969 13.6901V40.3131C13.2969 40.6547 13.3412 40.9855 13.4276 41.299L28.1116 26.618L13.4271 12.7036Z" fill="#5778C5" />
                                                <path d="M27.7258 27.0015L35.0731 19.6564L19.1131 10.403C18.533 10.0555 17.8559 9.85498 17.1314 9.85498C15.358 9.85498 13.8617 11.0618 13.4263 12.6997C13.4258 12.7013 13.4258 12.7024 13.4258 12.7038L27.7258 27.0015Z" fill="#3BAD49" />
                                                <path d="M63.1949 13.3756H59.3054V14.3381H62.22C62.1408 15.1236 61.8283 15.7402 61.3012 16.1881C60.7742 16.6361 60.1012 16.8611 59.3054 16.8611C58.4325 16.8611 57.6929 16.5569 57.0868 15.9528C56.493 15.3362 56.191 14.5736 56.191 13.6549C56.191 12.7363 56.493 11.9737 57.0868 11.3571C57.6929 10.753 58.4325 10.4509 59.3054 10.4509C59.7534 10.4509 60.1805 10.528 60.572 10.6967C60.9637 10.8654 61.2783 11.1009 61.5241 11.403L62.2637 10.6634C61.9283 10.2821 61.5033 9.9905 60.9761 9.77798C60.4491 9.56545 59.8991 9.46345 59.3053 9.46345C58.1408 9.46345 57.1534 9.86757 56.3471 10.6738C55.5409 11.4821 55.1367 12.4779 55.1367 13.6549C55.1367 14.8319 55.5408 15.8299 56.3471 16.6362C57.1534 17.4424 58.1408 17.8466 59.3053 17.8466C60.5282 17.8466 61.5032 17.4549 62.2532 16.659C62.9136 15.9967 63.2511 15.1008 63.2511 13.98C63.2511 13.7904 63.2282 13.5882 63.1949 13.3756ZM64.7017 9.64244V17.6673H69.3869V16.6819H65.7329V14.1362H69.0287V13.1737H65.7329V10.63H69.3869V9.64241L64.7017 9.64244ZM75.9567 10.63V9.64244H70.4422V10.63H72.6839V17.6673H73.7151V10.63H75.9567ZM80.9492 9.64244H79.918V17.6673H80.9492V9.64244ZM87.7558 10.63V9.64244H82.2414V10.63H84.4829V17.6673H85.5141V10.63H87.7558ZM98.1618 10.6863C97.366 9.86751 96.391 9.46338 95.2264 9.46338C94.0598 9.46338 93.0849 9.8675 92.289 10.6738C91.4932 11.4696 91.1016 12.4675 91.1016 13.6549C91.1016 14.8423 91.4932 15.8403 92.289 16.6362C93.0849 17.4423 94.0598 17.8466 95.2264 17.8466C96.3805 17.8466 97.3659 17.4423 98.1618 16.6362C98.9577 15.8403 99.3492 14.8424 99.3492 13.6549C99.3492 12.4779 98.9576 11.482 98.1618 10.6863ZM93.0286 11.3571C93.6223 10.7529 94.3515 10.4508 95.2264 10.4508C96.0993 10.4508 96.8285 10.7529 97.4118 11.3571C98.0055 11.9508 98.2971 12.7257 98.2971 13.6549C98.2971 14.5862 98.0055 15.359 97.4118 15.9528C96.8285 16.5569 96.0993 16.861 95.2264 16.861C94.3515 16.861 93.6223 16.5569 93.0286 15.9528C92.4473 15.3465 92.1557 14.5862 92.1557 13.6549C92.1557 12.7257 92.4473 11.9633 93.0286 11.3571ZM101.799 12.6696L101.756 11.1216H101.799L105.878 17.6673H106.955V9.64236H105.924V14.3381L105.968 15.8861H105.924L102.024 9.64236H100.768V17.6673H101.799V12.6696Z" fill="black" stroke="black" strokeWidth="0.26666" strokeMiterlimit="10" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_183_5303">
                                                    <rect width="180" height="53.333" fill="white" transform="translate(0 0.333496)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default AndroidJAVAApplication;

