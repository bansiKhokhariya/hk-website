import Navbar from '../../Navbar/Navbar.jsx';
import Headline from '../../Headline/Headline';
import Footer from '../../Home/Footer/Footer.jsx';
import Banner from '../../Banner/Banner.jsx';
import './QualityAssurance.css'

const bannerObject = {
    boxSide: 'left',
    backgroundBanner: `/frame/qualityAssurance-page-banner.webp`,
    bannerTitle: `Quality Assurance`,
    bannerTitleSpan: `and Testing`,
    bannerContent: `At HKAPPS, we recognize that the secret to success is a mobile app that works beautifully. Our testing and quality assurance procedures have been carefully planned out to guarantee that your app satisfies the highest requirements for dependability, performance, and usability. Find out how we give quality top priority at every stage of the development process.`,
};

const QualityAssurance = () => {
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
                                <div className='we-are-text-1-black'>Rigorous Testing Methodologies</div>
                                <div className='we-are-text-3'>We use a range of methods of testing to completely evaluate the reliability and effectiveness of your mobile application:</div>

                                <div className='we-are-sm-bx-sec'>
                                    <div className='we-are-sm-bx'>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                <rect width="30" height="30" rx="15" fill="#00BF67" />
                                                <rect x="10" y="10" width="10" height="10" rx="5" fill="white" />
                                            </svg>
                                        </div>
                                        <div className='we-are-sm-bx-text'>
                                            Functional Testing
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
                                            User Experience (UX) Testing
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
                                            Performance Testing
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
                                            Security Testing
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
                                            Compatibility Testing
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
                                            Regression Testing
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
                                            Automated Testing Solutions
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
                                            Manual Testing Excellence
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
                                            Continuous Integration and Continuous Testing
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
                                            Performance Optimization
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
                                            Client Involvement
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='we-are-image-fluid' data-aos="fade-left">
                                <img src="/image/qualityAssurance-1.webp" className='we-are-image' />
                            </div>
                        </div>
                    </div>
                    <div className='we-are-section'>
                        <div className='we-are-section-article'>
                            <div className='we-are-image-fluid' data-aos="fade-right">
                                <img src="/image/qualityAssurance-2.webp" className='we-are-image' />
                            </div>
                            <div className='we-are-text' data-aos="fade-left">
                                <div className='we-are-text-1-black'>Your App, Our Commitment to Quality</div>
                                <div className='we-are-text-3'>When choosing HKAPPS, testing and quality control must be done to the highest standard. Developing mobile apps that go above and beyond your expectations is our mission. Together, we can ensure that the reliability standards for your program are met.</div>
                                <div className='we-are-text-3'>Are you ready to enhance the quality of your mobile app? Please contact us to discuss the testing requirements for your project. Collaboratively, we will guarantee that your app has unparalleled functionality, performance, and user experience.</div>
                            </div>
                        </div>
                    </div>
                    <div className='we-are-section'>
                        <div className='we-are-section-article'>

                            <div className='we-are-text' data-aos="fade-right">
                                <div className='we-are-text-1-black'>Get Started with Quality Assurance</div>
                                <div className='we-are-text-3'>Are you ready to raise the caliber of your smartphone app? Please contact us to discuss your project's testing requirements. In combination, we will guarantee that your app has the best possible functionality, performance, and user experience.</div>
                            </div>
                            <div className='we-are-image-fluid' data-aos="fade-left">
                                <img src="/image/qualityAssurance-3.webp" className='we-are-image' />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default QualityAssurance