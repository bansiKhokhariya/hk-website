import Navbar from '../../Navbar/Navbar.jsx';
import Headline from '../../Headline/Headline';
import Discuss from '../../Home/Discuss/Discuss.jsx';
import Footer from '../../Home/Footer/Footer.jsx';
import Banner from '../../Banner/Banner.jsx';
import './IntegrationServices'

const bannerObject = {
    boxSide: 'right',
    backgroundBanner: `/frame/integrationServices-page-banner.webp`,
    bannerTitle: `Integration `,
    bannerTitleSpan: `Services`,
    bannerContent: `At HKAPPS, we understand the value of smooth connections in building feature-rich, durable mobile applications. Our solutions for integration are made to provide your app more functionality, connectivity, and flexibility. See how we can improve your mobile app by combining services with ease.`,
};

const IntegrationServices = () => {
    return (
        <>
            <Navbar activeNav="Solutions" />
            <Headline headlineText1="Tailored Android App Solutions for Your Unique Needs" headlineText2="Innovative Android Apps Designed Just for You" />

            <Banner bannerObject={bannerObject} />

            <div className='website-main-section'>
                <div className='website-innner-section'>
                    <div className='we-are-section'>
                        <div className='we-are-section-article'>
                            <div className='we-are-text' data-aos="fade-right">
                                <div className='we-are-text-1-black'>Why Integration Matters</div>
                                <div className='we-are-text-3'>
                                    These days, mobile applications frequently rely on an API and service network to provide improved features and functions. Our services for integration are designed to:
                                </div>
                                <div className='we-are-sm-bx-sec'>
                                    <div className='we-are-sm-bx'>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                <rect width="30" height="30" rx="15" fill="#00BF67" />
                                                <rect x="10" y="10" width="10" height="10" rx="5" fill="white" />
                                            </svg>
                                        </div>
                                        <div className='we-are-sm-bx-text'>
                                            Enhance Functionality
                                        </div>
                                    </div>
                                    <div className='we-are-sm-bx'>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                <rect width="30" height="30" rx="15" fill="#00BF67" />
                                                <rect x="10" y="10" width="10" height="10" rx="5" fill="white" />
                                            </svg>
                                        </div>
                                        <div className='we-are-sm-bx-text'>
                                            Improve User Experience
                                        </div>
                                    </div>
                                    <div className='we-are-sm-bx'>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                <rect width="30" height="30" rx="15" fill="#00BF67" />
                                                <rect x="10" y="10" width="10" height="10" rx="5" fill="white" />
                                            </svg>
                                        </div>
                                        <div className='we-are-sm-bx-text'>
                                            Increase Efficiency
                                        </div>
                                    </div>
                                    <div className='we-are-sm-bx'>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                <rect width="30" height="30" rx="15" fill="#00BF67" />
                                                <rect x="10" y="10" width="10" height="10" rx="5" fill="white" />
                                            </svg>
                                        </div>
                                        <div className='we-are-sm-bx-text'>
                                            Stay Competitive
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='we-are-image-fluid' data-aos="fade-left">
                                <img src="/image/integrationServices-1.webp" className='we-are-image' />
                            </div>
                        </div>
                    </div>
                    <div className='we-are-section'>
                        <div className='we-are-section-article'>
                            <div className='we-are-image-fluid' data-aos="fade-right">
                                <img src="/image/integrationServices-2.webp" className='we-are-image' />
                            </div>
                            <div className='we-are-text' data-aos="fade-left">
                                <div className='we-are-text-1-black'>Our Integration Expertise</div>
                                <div className='we-are-sm-bx-sec'>

                                    <div className='we-are-sm-bx'>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                <rect width="30" height="30" rx="15" fill="#00BF67" />
                                                <rect x="10" y="10" width="10" height="10" rx="5" fill="white" />
                                            </svg>
                                        </div>
                                        <div className='we-are-sm-bx-text'>
                                            Third-Party API Integrations
                                        </div>
                                    </div>
                                    <div className='we-are-sm-bx'>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                <rect width="30" height="30" rx="15" fill="#00BF67" />
                                                <rect x="10" y="10" width="10" height="10" rx="5" fill="white" />
                                            </svg>
                                        </div>
                                        <div className='we-are-sm-bx-text'>
                                            Backend Integrations
                                        </div>
                                    </div>
                                    <div className='we-are-sm-bx'>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                <rect width="30" height="30" rx="15" fill="#00BF67" />
                                                <rect x="10" y="10" width="10" height="10" rx="5" fill="white" />
                                            </svg>
                                        </div>
                                        <div className='we-are-sm-bx-text'>
                                            LoT Integrations
                                        </div>
                                    </div>
                                    <div className='we-are-sm-bx'>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                <rect width="30" height="30" rx="15" fill="#00BF67" />
                                                <rect x="10" y="10" width="10" height="10" rx="5" fill="white" />
                                            </svg>
                                        </div>
                                        <div className='we-are-sm-bx-text'>
                                            Enterprise Software Integrations
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='we-are-section'>
                        <div className='we-are-section-article'>
                            <div className='we-are-text' data-aos="fade-right">
                                <div className='we-are-text-1-black'>Get Started with Seamless Integrations</div>
                                <div className='we-are-text-3'>
                                    Ready to add strong integrations to improve your mobile app? Get in touch with us to go over the specifics of your project and together we'll create an app that works flawlessly with the services that really matter.
                                </div>
                                <div>
                                    <button className='we-are-button'>
                                        Contact Us to initiate your integration journey.
                                    </button>
                                </div>
                            </div>
                            <div className='we-are-image-fluid' data-aos="fade-left">
                                <img src="/image/integrationServices-3.webp" className='we-are-image' />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default IntegrationServices