import Navbar from '../../Navbar/Navbar.jsx';
import Headline from '../../Headline/Headline';
import Footer from '../../Home/Footer/Footer.jsx';
import Banner from '../../Banner/Banner.jsx';
import './SecurityMeasures.css'

const bannerObject = {
    boxSide: 'left',
    backgroundBanner: `/frame/securityMeasures-page-banner.webp`,
    bannerTitle: `Security`,
    bannerTitleSpan: `Measures`,
    bannerContent: `The security of your mobile applications is our primary concern at HKAPPS. We apply cutting-edge safety measures to preserve user information, prevent against dangers, and provide a safe environment for your application. Find out about the safety steps we take to give your mobile app credibility and trust.`,
};

const SecurityMeasures = () => {
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
                                <div className='we-are-text-1-black'>Security Measures</div>

                                <div className='we-are-sm-bx-sec'>
                                    <div className='we-are-sm-bx'>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                <rect width="30" height="30" rx="15" fill="#00BF67" />
                                                <rect x="10" y="10" width="10" height="10" rx="5" fill="white" />
                                            </svg>
                                        </div>
                                        <div className='we-are-sm-bx-text'>
                                            Data Encryption
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
                                            Secure Authentication
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
                                            Regular Security Audits
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
                                            Compliance with Data Protection Regulations
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
                                            Server Security
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
                                            Secure Backend Integrations
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
                                            Continuous Monitoring and Intrusion Detection
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
                                            User Data Minimization
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
                                            Regular Software Updates
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
                                            Transparent Communication
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='we-are-image-fluid' data-aos="fade-left">
                                <img src="/image/securityMeasures-1.webp" className='we-are-image' />
                            </div>
                        </div>
                    </div>
                    <div className='we-are-section'>
                        <div className='we-are-section-article'>
                            <div className='we-are-image-fluid' data-aos="fade-right">
                                <img src="/image/securityMeasures-2.webp" className='we-are-image' />
                            </div>
                            <div className='we-are-text' data-aos="fade-left">
                                <div className='we-are-text-1-black'>Your App's Security is Our Priority</div>
                                <div className='we-are-text-3'>We at HKAPPS are mindful of the importance of user data security. Our extensive security measures are made to safeguard both your app and its users while establishing a solid foundation of dependability and confidence.</div>
                            </div>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        </>
    );
}

export default SecurityMeasures