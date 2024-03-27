import Navbar from '../Navbar/Navbar.jsx';
import Headline from '../Headline/Headline';
import Footer from '../Home/Footer/Footer.jsx';
import Banner from '../Banner/Banner.jsx';
import './Contact.css'
import { React } from 'react';

const bannerObject = {
    boxSide: 'left',
    backgroundBanner: `/frame/contact-page-banner.webp`,
    bannerTitle: `Contact Us`,
    bannerTitleSpan: ``,
    bannerContent: `We provide customized pricing for each project and request we receive. Fill the form below and receive a personalized quote for your requirements.`,
};

const Contact = () => {
    return (
        <>
            <Navbar activeNav="" />
            <Headline headlineText1="Mobile App Development" headlineText2="IT Services and IT Consulting" />
            <Banner bannerObject={bannerObject} />
            <div className='website-main-section'>
                <div className='website-innner-section'>
                    <div className='shopify-description'>
                        <div className='conatct-main-section'>
                            <div>
                                <img src="/image/contact-sim-image.webp" alt="contact-sim" />
                            </div>
                            <div className='contact-form-bx'>
                                <div className='we-are-text-1'>Contact Us</div>
                                <div className='input-box-area-section'>
                                    <div className='input-box-area-conatct'>
                                        <label htmlFor="" className='label-text'>
                                            First Name*
                                        </label>
                                        <br />
                                        <br />
                                        <input type="text" placeholder='First Name' />
                                    </div>
                                    <div className='input-box-area-conatct'>
                                        <label htmlFor="" className='label-text'>
                                            Last Name*
                                        </label>
                                        <br />
                                        <br />
                                        <input type="text" placeholder='Last Name' />
                                    </div>
                                    <div className='input-box-area-conatct'>
                                        <label htmlFor="" className='label-text'>
                                            Email*
                                        </label>
                                        <br />
                                        <br />
                                        <input type="text" placeholder='Your answer' />
                                    </div>
                                    <div className='input-box-area-conatct'>
                                        <label htmlFor="" className='label-text'>
                                            Mobile Number*
                                        </label>
                                        <br />
                                        <br />
                                        <input type="text" placeholder='Your answer' />
                                    </div>
                                    <div className='input-box-area-conatct'>
                                        <label htmlFor="" className='label-text'>
                                            Select Service*
                                        </label>
                                        <br />
                                        <br />
                                        <input type="text" placeholder='Your answer' />
                                    </div>
                                    <div className='input-box-area-conatct'>

                                        <br />
                                        <br />
                                        <input type="text" placeholder='Your answer' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>







        </>
    )
}

export default Contact