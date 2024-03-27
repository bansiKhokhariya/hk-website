import Navbar from '../../Navbar/Navbar.jsx';
import Headline from '../../Headline/Headline';
import Footer from '../../Home/Footer/Footer.jsx';
import Banner from '../../Banner/Banner.jsx';
import './UserCentricDesign'

const bannerObject = {
    boxSide: 'right',
    backgroundBanner: `/frame/userCentricDesign-page-banner.webp`,
    bannerTitle: `Introduction to `,
    bannerTitleSpan: `User-Centric Design`,
    bannerContent: `Welcome to HKAPPS, where our approach to developing mobile apps is centered around user-centric design. We think that an extensive understanding of the users of any program is essential to its success. We guarantee that every app we develop is not only useful but also enjoyable to use because of our dedication to user-centric design.`,
};

const UserCentricDesign = () => {
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
                                <div className='we-are-text-1-black'>Design Philosophy</div>
                                <div className='we-are-text-3'>
                                    At HKAPPS, our dedication to providing outstanding mobile app experiences is based on our design concept. Our guiding ideas are based on producing designs that improve our users' lives rather than just making them seem good. Here's an overview of our design principles:
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
                                            Simplicity and Clarity
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
                                            Accessibility for All
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
                                            User-Centric Focus
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
                                            Consistency Across Platforms
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
                                            Feedback-Driven Iteration
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
                                            Visual Appeal with Purpose
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
                                            Performance and Speed
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
                                            Future-Proof Design
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
                                            Human-Centered Interaction
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
                                            Transparency and Honesty
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='we-are-image-fluid' data-aos="fade-left">
                                <img src="/image/userCentricDesign-1.webp" className='we-are-image' />
                            </div>
                        </div>
                    </div>
                    <div className='we-are-section'>
                        <div className='we-are-section-article'>
                            <div className='we-are-image-fluid' data-aos="fade-right">
                                <img src="/image/userCentricDesign-2.webp" className='we-are-image' />
                            </div>
                            <div className='we-are-text' data-aos="fade-left">
                                <div className='we-are-text-1-black'>User Interface (UI) Design</div>
                                <div className='we-are-text-3'>
                                    At HKAPPS, we are aware that any mobile application's success is largely dependent on how user-friendly and visually appealing it is. Our method of UI design combines innovation and functionality to produce interfaces that are both visually appealing and effortless to use. Here's an overview of our approach to UI design:                                </div>
                                <div className='we-are-text-2'>Design Principles</div>
                                <div className='we-are-sm-bx-sec'>

                                    <div className='we-are-sm-bx'>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                <rect width="30" height="30" rx="15" fill="#00BF67" />
                                                <rect x="10" y="10" width="10" height="10" rx="5" fill="white" />
                                            </svg>
                                        </div>
                                        <div className='we-are-sm-bx-text'>
                                            Visual Consistency
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
                                            Intuitive Navigation
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
                                            Focus on Hierarchy
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
                                            Minimalistic Design
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
                                            Feedback and Affordances
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
                                            User Experience (UX) Design
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
                                            Continuous Improvement
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='we-are-section'>
                        <div className='we-are-section-article'>
                            <div className='we-are-text' data-aos="fade-right">
                                <div className='we-are-text-1-black'>Elevate Your App's UI Design with <span className='we-are-text-1'>HKAPPS</span> </div>
                                <div className='we-are-text-3'>
                                    Are you determined to improve the look and feel of your app? At HKAPPS, we combine utility and creativity to produce user interface designs that capture people. See more examples in our portfolio, and let's talk about how we can improve the design of your app.
                                </div>
                                <div>
                                    <button className='we-are-button'>
                                        Contact Us to get started
                                    </button>
                                </div>
                            </div>
                            <div className='we-are-image-fluid' data-aos="fade-left">
                                <img src="/image/userCentricDesign-1.webp" className='we-are-image' />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default UserCentricDesign