import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className='footer-main-section'>
                <div className='footer-section'>
                    <div className='footer-content'>
                        <div className='footer-content-box'>
                            <img src="/logo/hk-logo-with-name.webp" alt="" />
                            <Link to={"/company/about/story"} className='link-button'>
                                <div className='footer-text'>
                                    <div className='dot-black'></div> About Us
                                </div>
                            </Link>
                            {/* <Link to={"/portfolio"} className='link-button'> */}
                                <div className='footer-text'>
                                    <div className='dot-black'></div> Portfolio
                                </div>
                            {/* </Link> */}
                            {/* <Link to={"/"} className='link-button'>
                                <div className='footer-text'>
                                    <div className='dot-black'></div> Industries
                                </div>
                            </Link> */}
                            {/* <Link to={"/"} className='link-button'>
                                <div className='footer-text'>
                                    <div className='dot-black'></div> HTML Sitemap
                                </div>
                            </Link> */}
                            {/* <Link to={"/"} className='link-button'> */}
                                <div className='footer-text'>
                                    <div className='dot-black'></div> Contact Us
                                </div>
                            {/* </Link> */}

                        </div>
                        <div className='footer-content-box'>
                            <div className='footer-title'>Our Services</div>
                            <Link to={"/services/mobileAppDevelopment"} className='link-button'>
                                <div className='footer-text'>
                                    <div className='dot-black'></div> Mobile App Development
                                </div>
                            </Link>
                            <Link to={"/services/gameDevelopment"} className='link-button'>
                                <div className='footer-text'>
                                    <div className='dot-black'></div> Game Development
                                </div>
                            </Link>
                            <Link to={"/services/designing"} className='link-button'>
                                <div className='footer-text'>
                                    <div className='dot-black'></div> Designing
                                </div>
                            </Link>
                            {/* <Link to={"/"} className='link-button'>
                                <div className='footer-text'>
                                    <div className='dot-black'></div> Hire Offshore Developers
                                </div>
                            </Link> */}
                        </div>
                        <div className='footer-content-box'>
                            <div>
                                <div className='footer-title'>Phone </div>
                                <div className='footer-info'>
                                    HR-(+91) 00000 0000
                                    <br />
                                    Sales - (+91) 00000 00000
                                </div>
                            </div>
                            <div>
                                <div className='footer-title'>E-mail </div>
                                <div className='footer-info'>
                                    hr@hkapps.io
                                    <br />
                                    info@hkapps.io
                                </div>
                            </div>
                            <div>
                                <div className='footer-title'>Address </div>
                                <div className='footer-info'>
                                    2046, Silver Business Point, VIP
                                    <br />
                                    Cir, Uttran, Surat, Gujarat 394105
                                </div>
                            </div>
                        </div>
                        <div className='footer-content-box'>
                            <div>
                                <div className='footer-title'>Join us on our growth
                                    <br /> journey
                                    to learn from our
                                    <br /> experiences </div>
                                <input className="footer-input" type="text" name="" id="" placeholder='Enter Your Email' />
                                <div className='footer-button'><button>Subscribe Now</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='social-media-footer-main'>
                <div className='social-media-footer'>
                    <div className='footer-media-title'>Copyright @ 2023 HK APPS All Right Reserved.</div>
                    <div className='footer-media-icon'>
                        <div className='icon-bg'>
                            <img src="/icon/IN.svg" alt="" />
                        </div>
                        <div className='icon-bg'>
                            <img src="/icon/youTube.svg" alt="" />
                        </div>
                        <div className='icon-bg'>
                            <img src="/icon/Be.svg" alt="" />
                        </div>
                        <div className='icon-bg'>
                            <img src="/icon/facebook.svg" alt="" />
                        </div>
                        <div className='icon-bg'>
                            <img src="/icon/twitter.svg" alt="" />
                        </div>
                        <div className='icon-bg'>
                            <img src="/icon/skyup.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer