import Navbar from '../../Navbar/Navbar.jsx';
import Headline from '../../Headline/Headline';
import Footer from '../../Home/Footer/Footer.jsx';
import Banner from '../../Banner/Banner.jsx';
import './Support.css'

const bannerObject = {
    boxSide: 'right',
    backgroundBanner: `/frame/support-page-banner.webp`,
    bannerTitle: `Software Support and Maintenance`,
    bannerTitleSpan: ``,
    bannerContent: `Do you operate with an absolutely mediocre software maintenance and support provider? Have servicing costs for your business become out of hand?
    HKAPPS is able to offer maintenance and support for IT. Whether you need help with continuing administrative management, hosting and server configuration, technical consultation, third-party integration, or improving your website or web-based software, our team of specialists in software maintenance and support is always here to help.`,
};

const Support = () => {
    return (
        <>
            <Navbar activeNav="Solutions" />
            <Headline headlineText1="Tailored Android App Solutions for Your Unique Needs" headlineText2="Innovative Android Apps Designed Just for You" />

            <Banner bannerObject={bannerObject} />

            <div className='website-main-section'>
                <div className='website-innner-section'>
                    <div className='shopify-description'>

                        {/* 1 section */}
                        <div className='suppport-contact-section'>
                            <div className='suppport-contact-right-side-bx'>
                                <div className='support-contact-title'>
                                    Contact Information
                                </div>
                                <div className='support-contact-inner-bx'>
                                    <div className='support-contact-inner-bx-title'>General Inquiries</div>
                                    <div className='support-contact-inner-bx-link'>
                                        <div className='support-contact-link-1'>
                                            <div className='support-contact-link-dot'>
                                                <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                    <circle cx="5" cy="5.5" r="5" fill="black" />
                                                </svg>
                                            </div>
                                            <div className='support-contact-link-text'>
                                                Email: info@hkapps.co
                                            </div>
                                        </div>
                                        <div className='support-contact-link-1'>
                                            <div className='support-contact-link-dot'>
                                                <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                    <circle cx="5" cy="5.5" r="5" fill="black" />
                                                </svg>
                                            </div>
                                            <div className='support-contact-link-text'>
                                                Phone: +917434928672
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='support-contact-inner-bx'>
                                    <div className='support-contact-inner-bx-title'>Technical Support</div>
                                    <div className='support-contact-inner-bx-link'>
                                        <div className='support-contact-link-1'>
                                            <div className='support-contact-link-dot'>
                                                <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                    <circle cx="5" cy="5.5" r="5" fill="black" />
                                                </svg>
                                            </div>
                                            <div className='support-contact-link-text'>
                                                Email: techsupport@hkapps.com
                                            </div>
                                        </div>
                                        <div className='support-contact-link-1'>
                                            <div className='support-contact-link-dot'>
                                                <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                    <circle cx="5" cy="5.5" r="5" fill="black" />
                                                </svg>
                                            </div>
                                            <div className='support-contact-link-text'>
                                                Phone: +917434928672
                                            </div>
                                        </div>
                                        <div className='support-contact-link-1'>
                                            <div className='support-contact-link-dot'>
                                                <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                    <circle cx="5" cy="5.5" r="5" fill="black" />
                                                </svg>
                                            </div>
                                            <div className='support-contact-link-text'>
                                                Live Chat: <span style={{ fontWeight: "600", color: "#007B42" }}>Chat Now </span> (Available during business hours)
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='support-contact-inner-bx'>
                                    <div className='support-contact-inner-bx-title'>Business and Partnership Inquiries</div>
                                    <div className='support-contact-inner-bx-link'>
                                        <div className='support-contact-link-1'>
                                            <div className='support-contact-link-dot'>
                                                <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                    <circle cx="5" cy="5.5" r="5" fill="black" />
                                                </svg>
                                            </div>
                                            <div className='support-contact-link-text' >
                                                Email: info@hkapps.co
                                            </div>
                                        </div>
                                        <div className='support-contact-link-1'>
                                            <div className='support-contact-link-dot'>
                                                <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                    <circle cx="5" cy="5.5" r="5" fill="black" />
                                                </svg>
                                            </div>
                                            <div className='support-contact-link-text'>
                                                Phone: +917434928672
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='support-contact-inner-bx'>
                                    <div className='support-contact-inner-bx-title'>
                                        Working Hours
                                        <br />
                                        <span className='support-contact-inner-bx-title-span'> Our support team is available to assist you during the following hours</span>
                                    </div>

                                    <div className='support-contact-inner-bx-link'>
                                        <div className='support-contact-link-1'>
                                            <div className='support-contact-link-dot'>
                                                <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                    <circle cx="5" cy="5.5" r="5" fill="black" />
                                                </svg>
                                            </div>
                                            <div className='support-contact-link-text'>
                                                Monday to Friday: 9:00 AM - 6:00 PM (GMT-5)
                                            </div>
                                        </div>
                                        <div className='support-contact-link-1'>
                                            <div className='support-contact-link-dot'>
                                                <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                    <circle cx="5" cy="5.5" r="5" fill="black" />
                                                </svg>
                                            </div>
                                            <div className='support-contact-link-text'>
                                                Saturday-Sunday: Closed
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='support-contact-response'>
                                    <div className='support-contact-inner-bx-title'>
                                        Response Times
                                    </div>
                                    <div className=''>
                                        <div className='support-contact-response-link'>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                    <circle cx="5" cy="5.5" r="5" fill="black" />
                                                </svg>
                                            </div>
                                            <div>
                                                <div className='support-contact-link-text'>
                                                    <span style={{ fontWeight: "600" }}>General Inquiries:</span>  <span className='support-contact-inner-bx-title-span'>We strive to respond within 24 hours.</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='support-contact-response-link'>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                    <circle cx="5" cy="5.5" r="5" fill="black" />
                                                </svg>
                                            </div>
                                            <div>
                                                <div className='support-contact-link-text'>
                                                    <span style={{ fontWeight: "600" }}>Technical Support: </span>  <span className='support-contact-inner-bx-title-span'>Expect a response within 12 hours, with urgent issues addressed promptly.</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='support-contact-response-link'>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                    <circle cx="5" cy="5.5" r="5" fill="black" />
                                                </svg>
                                            </div>
                                            <div>
                                                <div className='support-contact-link-text'>
                                                    <span style={{ fontWeight: "600" }}>Business and Partnership Inquiries: </span>   <span className='support-contact-inner-bx-title-span'>Our team aims to respond within 48 hours.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='support-contact-note'>
                                    (Note: Response times are based on business hours and may vary during holidays or peak periods.)
                                </div>
                            </div>
                            <div className=''>
                                <img src="/image/supportMainImage.webp" className='support-conatct-image' alt="" />
                            </div>
                        </div>
                        {/* 2 section */}
                        <div className='support-knowledge-base-section'>
                            <div className='we-are-text-1'>Knowledge Base</div>
                            <ul className="faq-accordion text-md">
                                <li>
                                    <input className="faq-input" type="checkbox" name="faq" id="faq-1" />
                                    <label className="faq-label" htmlFor="faq-1">
                                        <div className='knowledge-base-q-bx'>
                                            <div className='knowledge-base-q-num'>1</div>
                                            <div className='knowledge-base-q'>Getting Started</div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="10" viewBox="0 0 15 10" fill="none">
                                            <path d="M7.49997 9.30044C7.23114 9.30044 6.96235 9.19779 6.75739 8.99294L0.307713 2.54319C-0.102571 2.13291 -0.102571 1.46771 0.307713 1.05759C0.71783 0.647471 1.3829 0.647471 1.79322 1.05759L7.49997 6.76468L13.2068 1.05779C13.617 0.64767 14.2821 0.64767 14.6921 1.05779C15.1026 1.46791 15.1026 2.13311 14.6921 2.54339L8.24256 8.99313C8.0375 9.19803 7.76871 9.30044 7.49997 9.30044Z" fill="#007B42" />
                                        </svg>
                                    </label>
                                    <div className="faq-content">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1190" height="2" viewBox="0 0 1190 2" fill="none">
                                            <path d="M1 1H1189" stroke="#007B42" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                        <div className='knowledge-base-content-title'>Overview of the Mobile App Installation Process:</div>
                                        <div className='support-contact-link-text'>
                                            HKAPPS is open to you. To get the experience started, install our mobile app by following these easy steps.
                                        </div>
                                        <div>
                                            <div className='support-contact-link-text'>Get the app here</div>
                                            <div>
                                                <div className='knowledge-base-content-text'>
                                                    <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                        <circle cx="5" cy="5.5" r="5" fill="green" />
                                                    </svg>
                                                    &nbsp;
                                                    Use your mobile device to go to the App Store (iOS) or Google Play Store (android).
                                                </div>
                                                <div className='knowledge-base-content-text'>
                                                    <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                        <circle cx="5" cy="5.5" r="5" fill="green" />
                                                    </svg>
                                                    &nbsp;
                                                    Look up “HKAPPS” [the name of your app].and select "Install" or "Download" from the menu.
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='support-contact-link-text'>Setting up</div>
                                            <div>
                                                <div className='knowledge-base-content-text'>
                                                    <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                        <circle cx="5" cy="5.5" r="5" fill="green" />
                                                    </svg>
                                                    &nbsp;
                                                    Open the app installation screen after the download is finished.
                                                </div>
                                                <div className='knowledge-base-content-text'>
                                                    <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                        <circle cx="5" cy="5.5" r="5" fill="green" />
                                                    </svg>
                                                    &nbsp;
                                                    To install the application on your smartphone, adhere to the on-screen directions.
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='support-contact-link-text'>Open the application</div>
                                            <div>
                                                <div className='knowledge-base-content-text'>
                                                    <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                        <circle cx="5" cy="5.5" r="5" fill="green" />
                                                    </svg>
                                                    &nbsp;
                                                    On the home screen of your device, find the app icon and tap to open it.
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='support-contact-link-text'>First Configuration</div>
                                            <div>
                                                <div className='knowledge-base-content-text'>
                                                    <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                        <circle cx="5" cy="5.5" r="5" fill="green" />
                                                    </svg>
                                                    &nbsp;
                                                    Give the required information to finish the first setup (e.g., language preference, notification settings).
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='support-contact-link-text'>Authorizations</div>
                                            <div>
                                                <div className='knowledge-base-content-text'>
                                                    <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                        <circle cx="5" cy="5.5" r="5" fill="green" />
                                                    </svg>
                                                    &nbsp;
                                                    When prompted, give the app the rights it needs to use features like cameras, location services, and notifications.
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='support-contact-link-text'>Login to your account</div>
                                        </div>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="1190" height="2" viewBox="0 0 1190 2" fill="none">
                                            <path d="M1 1H1189" stroke="#007B42" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" />
                                        </svg>

                                        <div className='knowledge-base-content-title'>Creating an Account and User Profiles:</div>
                                        <div className=''>
                                            If you're new to HKAPPS, follow these steps to create an account and set up your user profile:
                                        </div>
                                        <div>
                                            <div className='support-contact-link-text'>Tap "Sign Up" or "Create Account"</div>
                                            <div>
                                                <div className='knowledge-base-content-text'>
                                                    <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                        <circle cx="5" cy="5.5" r="5" fill="green" />
                                                    </svg>
                                                    &nbsp;
                                                    On the app's welcome screen, select the "Sign Up" or "Create Account" option.
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='support-contact-link-text'>Provide Basic Information</div>
                                            <div>
                                                <div className='knowledge-base-content-text'>
                                                    <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                        <circle cx="5" cy="5.5" r="5" fill="green" />
                                                    </svg>
                                                    &nbsp;
                                                    Enter your email address or use a social media account for quick sign-up.
                                                </div>
                                                <div className='knowledge-base-content-text'>
                                                    <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                        <circle cx="5" cy="5.5" r="5" fill="green" />
                                                    </svg>
                                                    &nbsp;
                                                    Create a strong password to secure your account.
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='support-contact-link-text'>Verification</div>
                                            <div>
                                                <div className='knowledge-base-content-text'>
                                                    <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                        <circle cx="5" cy="5.5" r="5" fill="green" />
                                                    </svg>
                                                    &nbsp;
                                                    Verify your email address through a confirmation link sent to your registered email (if applicable).
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='support-contact-link-text'>Complete Profile</div>
                                            <div>
                                                <div className='knowledge-base-content-text'>
                                                    <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                        <circle cx="5" cy="5.5" r="5" fill="green" />
                                                    </svg>
                                                    &nbsp;
                                                    Fill in your profile details, such as name, profile picture, and any other required information.
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='support-contact-link-text'>User Preferences</div>
                                            <div>
                                                <div className='knowledge-base-content-text'>
                                                    <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                        <circle cx="5" cy="5.5" r="5" fill="green" />
                                                    </svg>
                                                    &nbsp;
                                                    Customize your app experience by setting preferences (e.g., language, notification preferences).
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='support-contact-link-text'>Save and Continue</div>
                                            <div>
                                                <div className='knowledge-base-content-text'>
                                                    <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                        <circle cx="5" cy="5.5" r="5" fill="green" />
                                                    </svg>
                                                    &nbsp;
                                                    Review your information and save your profile settings.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <input className="faq-input" type="checkbox" name="faq" id="faq-2" />
                                    <label className="faq-label" htmlFor="faq-2">
                                        <div className='knowledge-base-q-bx'>
                                            <div className='knowledge-base-q-num'>2</div>
                                            <div className='knowledge-base-q'>Troubleshooting</div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="10" viewBox="0 0 15 10" fill="none">
                                            <path d="M7.49997 9.30044C7.23114 9.30044 6.96235 9.19779 6.75739 8.99294L0.307713 2.54319C-0.102571 2.13291 -0.102571 1.46771 0.307713 1.05759C0.71783 0.647471 1.3829 0.647471 1.79322 1.05759L7.49997 6.76468L13.2068 1.05779C13.617 0.64767 14.2821 0.64767 14.6921 1.05779C15.1026 1.46791 15.1026 2.13311 14.6921 2.54339L8.24256 8.99313C8.0375 9.19803 7.76871 9.30044 7.49997 9.30044Z" fill="#007B42" />
                                        </svg>
                                    </label>

                                    <div className="faq-content">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1190" height="2" viewBox="0 0 1190 2" fill="none">
                                            <path d="M1 1H1189" stroke="#007B42" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                        <div className='knowledge-base-content-sticker'>
                                            Common Issues
                                        </div>
                                        <div className='knowledge-base-content-title'>App Crashes on Startup</div>
                                        <div>
                                            <div className='support-contact-link-text'>1. Check Internet Connection</div>
                                            <div>
                                                <div className='knowledge-base-content-text'>
                                                    <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                        <circle cx="5" cy="5.5" r="5" fill="green" />
                                                    </svg>
                                                    &nbsp;
                                                    Ensure that your device has a stable internet connection.
                                                </div>
                                                <div className='knowledge-base-content-text'>
                                                    <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                        <circle cx="5" cy="5.5" r="5" fill="green" />
                                                    </svg>
                                                    &nbsp;
                                                    Restart the app after verifying connectivity.
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='support-contact-link-text'>2. Clear App Cache</div>
                                            <div>
                                                <div className='knowledge-base-content-text'>
                                                    <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                        <circle cx="5" cy="5.5" r="5" fill="green" />
                                                    </svg>
                                                    &nbsp;
                                                    If the app continues to crash, try clearing the app cache.
                                                </div>
                                                <div className='knowledge-base-content-text'>
                                                    <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                        <circle cx="5" cy="5.5" r="5" fill="green" />
                                                    </svg>
                                                    &nbsp;
                                                    Instructions for clearing app cache on iOS and Android devices.
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='support-contact-link-text'>3. Update Device Software</div>
                                            <div>
                                                <div className='knowledge-base-content-text'>
                                                    <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                        <circle cx="5" cy="5.5" r="5" fill="green" />
                                                    </svg>
                                                    &nbsp;
                                                    Make sure your device's operating system is up to date.
                                                </div>
                                                <div className='knowledge-base-content-text'>
                                                    <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                        <circle cx="5" cy="5.5" r="5" fill="green" />
                                                    </svg>
                                                    &nbsp;
                                                    Encourage users to update their device software for optimal performance.
                                                </div>
                                            </div>
                                        </div>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="1190" height="2" viewBox="0 0 1190 2" fill="none">
                                            <path d="M1 1H1189" stroke="#007B42" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" />
                                        </svg>

                                        <div className='knowledge-base-content-title'>Error Messages and Their Resolutions</div>
                                        <div>
                                            <div className='support-contact-link-text'>1. Error Code 404: Page Not Found</div>
                                            <div>
                                                <div className='knowledge-base-content-text'>
                                                    <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                        <circle cx="5" cy="5.5" r="5" fill="green" />
                                                    </svg>
                                                    &nbsp;
                                                    Possible reasons for the error and steps to resolve it.
                                                </div>
                                                <div className='knowledge-base-content-text'>
                                                    <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                        <circle cx="5" cy="5.5" r="5" fill="green" />
                                                    </svg>
                                                    &nbsp;
                                                    Guidance on navigating to the correct page or feature.
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='support-contact-link-text'>2. Server Connection Issues</div>
                                            <div>
                                                <div className='knowledge-base-content-text'>
                                                    <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                        <circle cx="5" cy="5.5" r="5" fill="green" />
                                                    </svg>
                                                    &nbsp;
                                                    Troubleshooting steps for resolving server connection problems.
                                                </div>
                                                <div className='knowledge-base-content-text'>
                                                    <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                        <circle cx="5" cy="5.5" r="5" fill="green" />
                                                    </svg>
                                                    &nbsp;
                                                    Instructions on checking the server status or contacting support.
                                                </div>
                                            </div>
                                        </div>
                                        <div className='knowledge-base-content-span-text'>Performance-related Problems</div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1190" height="2" viewBox="0 0 1190 2" fill="none">
                                            <path d="M1 1H1189" stroke="#007B42" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                        <div className='knowledge-base-content-title'>App Sluggishness or Lag</div>
                                        <div>
                                            <div className='support-contact-link-text'>1. Close Background Apps</div>
                                            <div>
                                                <div className='knowledge-base-content-text'>
                                                    <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                        <circle cx="5" cy="5.5" r="5" fill="green" />
                                                    </svg>
                                                    &nbsp;
                                                    Guide on closing unnecessary background apps to free up resources.
                                                </div>
                                                <div className='knowledge-base-content-text'>
                                                    <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                        <circle cx="5" cy="5.5" r="5" fill="green" />
                                                    </svg>
                                                    &nbsp;
                                                    Explain how multiple open apps can impact the app's performance.
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='support-contact-link-text'>2. Optimize App Settings</div>
                                            <div>
                                                <div className='knowledge-base-content-text'>
                                                    <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                        <circle cx="5" cy="5.5" r="5" fill="green" />
                                                    </svg>
                                                    &nbsp;
                                                    Tips on adjusting app settings for better performance.
                                                </div>
                                                <div className='knowledge-base-content-text'>
                                                    <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                        <circle cx="5" cy="5.5" r="5" fill="green" />
                                                    </svg>
                                                    &nbsp;
                                                    Suggestions for optimizing graphics and display settings.
                                                </div>
                                            </div>
                                        </div>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="1190" height="2" viewBox="0 0 1190 2" fill="none">
                                            <path d="M1 1H1189" stroke="#007B42" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                        <div className='knowledge-base-content-title'>Loading Delays</div>
                                        <div>
                                            <div className='support-contact-link-text'>1. Check Internet Speed</div>
                                            <div>
                                                <div className='knowledge-base-content-text'>
                                                    <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                        <circle cx="5" cy="5.5" r="5" fill="green" />
                                                    </svg>
                                                    &nbsp;
                                                    Instruct users to check their internet connection speed.
                                                </div>
                                                <div className='knowledge-base-content-text'>
                                                    <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                        <circle cx="5" cy="5.5" r="5" fill="green" />
                                                    </svg>
                                                    &nbsp;
                                                    Provide recommendations for improving internet speed if necessary.
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='support-contact-link-text'>2. Update the App</div>
                                            <div>
                                                <div className='knowledge-base-content-text'>
                                                    <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                        <circle cx="5" cy="5.5" r="5" fill="green" />
                                                    </svg>
                                                    &nbsp;
                                                    Advise users to check for and install the latest app updates.
                                                </div>
                                                <div className='knowledge-base-content-text'>
                                                    <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                        <circle cx="5" cy="5.5" r="5" fill="green" />
                                                    </svg>
                                                    &nbsp;
                                                    Explain how updates may include performance improvements.
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </li>
                                <li>
                                    <input className="faq-input" type="checkbox" name="faq" id="faq-3" />
                                    <label className="faq-label" htmlFor="faq-3">
                                        <div className='knowledge-base-q-bx'>
                                            <div className='knowledge-base-q-num'>3</div>
                                            <div className='knowledge-base-q'>Technical Support</div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="10" viewBox="0 0 15 10" fill="none">
                                            <path d="M7.49997 9.30044C7.23114 9.30044 6.96235 9.19779 6.75739 8.99294L0.307713 2.54319C-0.102571 2.13291 -0.102571 1.46771 0.307713 1.05759C0.71783 0.647471 1.3829 0.647471 1.79322 1.05759L7.49997 6.76468L13.2068 1.05779C13.617 0.64767 14.2821 0.64767 14.6921 1.05779C15.1026 1.46791 15.1026 2.13311 14.6921 2.54339L8.24256 8.99313C8.0375 9.19803 7.76871 9.30044 7.49997 9.30044Z" fill="#007B42" />
                                        </svg>
                                    </label>

                                    <div className="faq-content">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1190" height="2" viewBox="0 0 1190 2" fill="none">
                                            <path d="M1 1H1189" stroke="#007B42" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                        <div>
                                            <div className='knowledge-base-content-title'>Email Support</div>
                                            <div>
                                                <div className='knowledge-base-content-text'>
                                                    <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                        <circle cx="5" cy="5.5" r="5" fill="green" />
                                                    </svg>
                                                    &nbsp;
                                                    Send an email to our technical support team at techsupport@yourcompany.com.
                                                </div>
                                                <div className='knowledge-base-content-text'>
                                                    <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                        <circle cx="5" cy="5.5" r="5" fill="green" />
                                                    </svg>
                                                    &nbsp;
                                                    Include a detailed description of the issue, your device type, and operating system version.
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='knowledge-base-content-title'>Phone Support</div>
                                            <div>
                                                <div className='knowledge-base-content-text'>
                                                    <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                        <circle cx="5" cy="5.5" r="5" fill="green" />
                                                    </svg>
                                                    &nbsp;
                                                    For urgent matters, call our technical support hotline at +1 (555) 987-6543.
                                                </div>
                                                <div className='knowledge-base-content-text'>
                                                    <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                        <circle cx="5" cy="5.5" r="5" fill="green" />
                                                    </svg>
                                                    &nbsp;
                                                    Be ready to provide your account details and a brief description of the problem.
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='knowledge-base-content-title'>Live Chat (Available during Business Hours)</div>
                                            <div>
                                                <div className='knowledge-base-content-text'>
                                                    <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                        <circle cx="5" cy="5.5" r="5" fill="green" />
                                                    </svg>
                                                    &nbsp;
                                                    Access our live chat support by clicking here (available during business hours).
                                                </div>
                                                <div className='knowledge-base-content-text'>
                                                    <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                        <circle cx="5" cy="5.5" r="5" fill="green" />
                                                    </svg>
                                                    &nbsp;
                                                    Provide a concise summary of the issue for a quicker response.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <input className="faq-input" type="checkbox" name="faq" id="faq-4" />
                                    <label className="faq-label" htmlFor="faq-4">
                                        <div className='knowledge-base-q-bx'>
                                            <div className='knowledge-base-q-num'>4</div>
                                            <div className='knowledge-base-q'>Security and Privacy</div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="10" viewBox="0 0 15 10" fill="none">
                                            <path d="M7.49997 9.30044C7.23114 9.30044 6.96235 9.19779 6.75739 8.99294L0.307713 2.54319C-0.102571 2.13291 -0.102571 1.46771 0.307713 1.05759C0.71783 0.647471 1.3829 0.647471 1.79322 1.05759L7.49997 6.76468L13.2068 1.05779C13.617 0.64767 14.2821 0.64767 14.6921 1.05779C15.1026 1.46791 15.1026 2.13311 14.6921 2.54339L8.24256 8.99313C8.0375 9.19803 7.76871 9.30044 7.49997 9.30044Z" fill="#007B42" />
                                        </svg>
                                    </label>

                                    <div className="faq-content">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1190" height="2" viewBox="0 0 1190 2" fill="none">
                                            <path d="M1 1H1189" stroke="#007B42" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" />
                                        </svg>

                                        <div className='knowledge-base-content-title'>Data Protection Measures</div>
                                        <div className='support-contact-link-text'>
                                            At HKAPPS, [Your App Name], we take data protection seriously. Here's an overview of the measures we have in place to ensure the security and privacy of user data:
                                        </div>
                                        <div className='knowledge-base-content-box-sec'>
                                            <div className='knowledge-base-content-box'>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="17" viewBox="0 0 13 17" fill="none">
                                                        <path d="M6.17236 13.2852V11.9922V13.2852Z" fill="#007B42" />
                                                        <path d="M6.17236 13.2852V11.9922" stroke="#007B42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M9.72798 6.94922H2.61629C1.72364 6.94922 1 7.67286 1 8.56551V14.3842C1 15.2768 1.72364 16.0005 2.61629 16.0005H9.72798C10.6206 16.0005 11.3443 15.2768 11.3443 14.3842V8.56551C11.3443 7.67286 10.6206 6.94922 9.72798 6.94922Z" stroke="#007B42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M3.58594 6.81866V3.58607C3.58594 2.9002 3.8584 2.24242 4.34338 1.75744C4.82836 1.27246 5.48614 1 6.17201 1C6.85788 1 7.51565 1.27246 8.00063 1.75744C8.48562 2.24242 8.75808 2.9002 8.75808 3.58607V6.81866" stroke="#007B42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M6.17219 11.9904C6.88631 11.9904 7.46522 11.4115 7.46522 10.6973C7.46522 9.98321 6.88631 9.4043 6.17219 9.4043C5.45806 9.4043 4.87915 9.98321 4.87915 10.6973C4.87915 11.4115 5.45806 11.9904 6.17219 11.9904Z" fill="#007B42" />
                                                    </svg>
                                                </div>
                                                <div className='knowledge-base-content-span-text'>
                                                    Encryption
                                                </div>
                                            </div>
                                            <div className='knowledge-base-content-box'>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.49808 6.19231V4.65385C1.49778 4.32546 1.56224 4.00023 1.68777 3.69678C1.8133 3.39333 1.99743 3.11761 2.22964 2.8854C2.46185 2.6532 2.73757 2.46906 3.04102 2.34353C3.34447 2.218 3.66969 2.15354 3.99808 2.15385H5.53655C5.68956 2.15385 5.8363 2.09306 5.94449 1.98487C6.05269 1.87668 6.11347 1.72993 6.11347 1.57692C6.11347 1.42391 6.05269 1.27717 5.94449 1.16898C5.8363 1.06078 5.68956 1 5.53655 1H3.99808C3.02902 1 2.09965 1.38496 1.41443 2.07019C0.729196 2.75542 0.344238 3.68479 0.344238 4.65385V6.19231C0.344238 6.34532 0.405021 6.49206 0.513215 6.60025C0.621409 6.70845 0.768152 6.76923 0.921161 6.76923C1.07417 6.76923 1.22091 6.70845 1.32911 6.60025C1.4373 6.49206 1.49808 6.34532 1.49808 6.19231ZM10.1519 2.15385H11.6904C12.0188 2.15354 12.344 2.218 12.6475 2.34353C12.9509 2.46906 13.2266 2.6532 13.4588 2.8854C13.691 3.11761 13.8752 3.39333 14.0007 3.69678C14.1262 4.00023 14.1907 4.32546 14.1904 4.65385V6.19231C14.1904 6.34532 14.2512 6.49206 14.3594 6.60025C14.4676 6.70845 14.6143 6.76923 14.7673 6.76923C14.9203 6.76923 15.0671 6.70845 15.1753 6.60025C15.2835 6.49206 15.3442 6.34532 15.3442 6.19231V4.65385C15.3442 3.68479 14.9593 2.75542 14.2741 2.07019C13.5888 1.38496 12.6595 1 11.6904 1H10.1519C9.99892 1 9.85218 1.06078 9.74399 1.16898C9.63579 1.27717 9.57501 1.42391 9.57501 1.57692C9.57501 1.72993 9.63579 1.87668 9.74399 1.98487C9.85218 2.09306 9.99892 2.15385 10.1519 2.15385ZM0.344238 10.8077V12.3462C0.344238 13.3152 0.729196 14.2446 1.41443 14.9298C2.09965 15.615 3.02902 16 3.99808 16H5.53655C5.68956 16 5.8363 15.9392 5.94449 15.831C6.05269 15.7228 6.11347 15.5761 6.11347 15.4231C6.11347 15.2701 6.05269 15.1233 5.94449 15.0151C5.8363 14.9069 5.68956 14.8462 5.53655 14.8462H3.99808C3.66969 14.8465 3.34447 14.782 3.04102 14.6565C2.73757 14.5309 2.46185 14.3468 2.22964 14.1146C1.99743 13.8824 1.8133 13.6067 1.68777 13.3032C1.56224 12.9998 1.49778 12.6745 1.49808 12.3462V10.8077C1.49808 10.6547 1.4373 10.5079 1.32911 10.3997C1.22091 10.2916 1.07417 10.2308 0.921161 10.2308C0.768152 10.2308 0.621409 10.2916 0.513215 10.3997C0.405021 10.5079 0.344238 10.6547 0.344238 10.8077ZM10.1519 16H11.6904C12.6595 16 13.5888 15.615 14.2741 14.9298C14.9593 14.2446 15.3442 13.3152 15.3442 12.3462V10.8077C15.3442 10.6547 15.2835 10.5079 15.1753 10.3997C15.0671 10.2916 14.9203 10.2308 14.7673 10.2308C14.6143 10.2308 14.4676 10.2916 14.3594 10.3997C14.2512 10.5079 14.1904 10.6547 14.1904 10.8077V12.3462C14.1907 12.6745 14.1262 12.9998 14.0007 13.3032C13.8752 13.6067 13.691 13.8824 13.4588 14.1146C13.2266 14.3468 12.9509 14.5309 12.6475 14.6565C12.344 14.782 12.0188 14.8465 11.6904 14.8462H10.1519C9.99892 14.8462 9.85218 14.9069 9.74399 15.0151C9.63579 15.1233 9.57501 15.2701 9.57501 15.4231C9.57501 15.5761 9.63579 15.7228 9.74399 15.831C9.85218 15.9392 9.99892 16 10.1519 16ZM9.95962 5.80769V6.57692C9.95962 6.72993 10.0204 6.87668 10.1286 6.98487C10.2368 7.09306 10.3835 7.15385 10.5365 7.15385C10.6896 7.15385 10.8363 7.09306 10.9445 6.98487C11.0527 6.87668 11.1135 6.72993 11.1135 6.57692V5.80769C11.1135 5.65468 11.0527 5.50794 10.9445 5.39975C10.8363 5.29155 10.6896 5.23077 10.5365 5.23077C10.3835 5.23077 10.2368 5.29155 10.1286 5.39975C10.0204 5.50794 9.95962 5.65468 9.95962 5.80769ZM4.57501 5.80769V6.57692C4.57501 6.72993 4.63579 6.87668 4.74398 6.98487C4.85218 7.09306 4.99892 7.15385 5.15193 7.15385C5.30494 7.15385 5.45168 7.09306 5.55988 6.98487C5.66807 6.87668 5.72885 6.72993 5.72885 6.57692V5.80769C5.72885 5.65468 5.66807 5.50794 5.55988 5.39975C5.45168 5.29155 5.30494 5.23077 5.15193 5.23077C4.99892 5.23077 4.85218 5.29155 4.74398 5.39975C4.63579 5.50794 4.57501 5.65468 4.57501 5.80769ZM7.65193 8.91231V6.96154C7.65193 6.80853 7.71271 6.66179 7.82091 6.55359C7.9291 6.4454 8.07584 6.38462 8.22885 6.38462C8.38186 6.38462 8.52861 6.4454 8.6368 6.55359C8.74499 6.66179 8.80578 6.80853 8.80578 6.96154V9.26923C8.80577 9.37643 8.7759 9.48151 8.71952 9.57268C8.66313 9.66385 8.58246 9.7375 8.48655 9.78538L7.71732 10.17C7.64946 10.2045 7.57544 10.2253 7.49952 10.2311C7.4236 10.2369 7.34729 10.2276 7.27497 10.2038C7.20266 10.1799 7.13578 10.142 7.0782 10.0922C7.02061 10.0424 6.97345 9.98167 6.93944 9.91355C6.90543 9.84543 6.88524 9.77125 6.88004 9.69529C6.87483 9.61932 6.88471 9.54308 6.90912 9.47096C6.93352 9.39883 6.97195 9.33225 7.02221 9.27506C7.07247 9.21786 7.13355 9.17117 7.20193 9.13769L7.65193 8.91231ZM10.1289 10.7846C10.2382 10.6827 10.3829 10.6272 10.5323 10.6299C10.6818 10.6325 10.8244 10.6931 10.9301 10.7988C11.0358 10.9045 11.0964 11.0471 11.099 11.1965C11.1016 11.346 11.0461 11.4906 10.9442 11.6C10.8396 11.7046 10.9435 11.6015 10.9435 11.6015C10.1215 12.4235 9.00667 12.8852 7.84424 12.8852C6.68181 12.8852 5.56699 12.4235 4.74501 11.6015L4.74424 11.6C4.64233 11.4906 4.58685 11.346 4.58949 11.1965C4.59213 11.0471 4.65267 10.9045 4.75838 10.7988C4.86408 10.6931 5.00668 10.6325 5.15614 10.6299C5.30561 10.6272 5.45026 10.6827 5.55962 10.7846C5.66424 10.8892 5.56116 10.7854 5.56116 10.7854C6.16673 11.3908 6.98796 11.7309 7.84424 11.7309C8.70052 11.7309 9.52174 11.3908 10.1273 10.7854L10.1289 10.7846Z" fill="#007B42" stroke="#007B42" strokeWidth="0.5" />
                                                    </svg>
                                                </div>
                                                <div className='knowledge-base-content-span-text'>
                                                    Secure Authentication
                                                </div>
                                            </div>
                                            <div className='knowledge-base-content-box'>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="17" viewBox="0 0 15 17" fill="none">
                                                        <path d="M7.57305 1L1.34424 3.58613V6.72994C1.34424 10.7985 3.80618 14.4625 7.57305 16C11.3399 14.4625 13.8019 10.7985 13.8019 6.72994V3.58613L7.57305 1Z" stroke="#007B42" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M5.09424 7.99519L6.87053 9.77148L10.0519 6.59018" stroke="#007B42" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                                <div className='knowledge-base-content-span-text'>
                                                    Regular Security Audits
                                                </div>
                                            </div>
                                            <div className='knowledge-base-content-box'>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="17" viewBox="0 0 15 17" fill="none">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.7251 7.66488V3.11538C12.7247 2.55447 12.5017 2.01666 12.105 1.62003C11.7084 1.22341 11.1706 1.00041 10.6097 1H2.91739C2.35648 1.00041 1.81866 1.22341 1.42203 1.62003C1.02541 2.01666 0.802409 2.55447 0.802002 3.11538V13.8846C0.802409 14.4455 1.02541 14.9833 1.42203 15.38C1.81866 15.7766 2.35648 15.9996 2.91739 16H10.6097C10.7627 16 10.9094 15.9392 11.0176 15.831C11.0378 15.8108 11.0564 15.7893 11.0732 15.7666C11.2398 15.7294 11.4019 15.672 11.5559 15.5954L12.8405 14.9531C13.2691 14.7404 13.6296 14.4119 13.8811 14.0049C14.1326 13.5978 14.2651 13.1285 14.2635 12.65V9.10075C14.2635 8.48229 13.8443 7.94536 13.2443 7.79459L12.7251 7.66488ZM11.5712 7.37663V3.11538C11.5712 2.58538 11.1397 2.15385 10.6097 2.15385H2.91739C2.38739 2.15385 1.95585 2.58538 1.95585 3.11538V13.8846C1.95585 14.4146 2.38739 14.8462 2.91739 14.8462H8.185C7.84134 14.6369 7.55088 14.3489 7.33828 14.0049C7.08676 13.5978 6.95428 13.1285 6.95586 12.65V9.10075C6.95552 8.80049 7.05569 8.50876 7.24041 8.27205C7.42512 8.03533 7.68375 7.86725 7.97509 7.79459L10.0966 7.26459C10.4335 7.18075 10.7859 7.18075 11.1228 7.26459L11.5712 7.37663ZM10.2484 4.2459C10.3566 4.35409 10.4174 4.50084 10.4174 4.65385C10.4174 4.80686 10.3566 4.9536 10.2484 5.06179C10.1402 5.16999 9.99347 5.23077 9.84046 5.23077H3.68662C3.53361 5.23077 3.38687 5.16999 3.27867 5.06179C3.17048 4.9536 3.10969 4.80686 3.10969 4.65385C3.10969 4.50084 3.17048 4.35409 3.27867 4.2459C3.38687 4.13771 3.53361 4.07692 3.68662 4.07692H9.84046C9.99347 4.07692 10.1402 4.13771 10.2484 4.2459ZM7.17149 6.55359C7.27968 6.66179 7.34046 6.80853 7.34046 6.96154C7.34046 7.11455 7.27968 7.26129 7.17149 7.36948C7.06329 7.47768 6.91655 7.53846 6.76354 7.53846H3.68662C3.53361 7.53846 3.38687 7.47768 3.27867 7.36948C3.17048 7.26129 3.10969 7.11455 3.10969 6.96154C3.10969 6.80853 3.17048 6.66179 3.27867 6.55359C3.38687 6.4454 3.53361 6.38462 3.68662 6.38462H6.76354C6.91655 6.38462 7.06329 6.4454 7.17149 6.55359ZM3.27867 8.86129C3.38687 8.75309 3.53361 8.69231 3.68662 8.69231H5.22508C5.37809 8.69231 5.52483 8.75309 5.63302 8.86129C5.74122 8.96948 5.802 9.11622 5.802 9.26923C5.802 9.42224 5.74122 9.56898 5.63302 9.67718C5.52483 9.78537 5.37809 9.84615 5.22508 9.84615H3.68662C3.53361 9.84615 3.38687 9.78537 3.27867 9.67718C3.17048 9.56898 3.10969 9.42224 3.10969 9.26923C3.10969 9.11622 3.17048 8.96948 3.27867 8.86129ZM12.3243 13.9207C12.8089 13.6784 13.1097 13.1915 13.1097 12.65V9.10075C13.1098 9.05784 13.0955 9.01613 13.0692 8.98225C13.0428 8.94838 13.0059 8.9243 12.9643 8.91383L10.8428 8.38382C10.6898 8.34521 10.5296 8.34521 10.3766 8.38382L8.25509 8.91383C8.21347 8.9243 8.17656 8.94838 8.15021 8.98225C8.12387 9.01613 8.10961 9.05784 8.1097 9.10075V12.65C8.10881 12.914 8.18192 13.173 8.32074 13.3976C8.45955 13.6222 8.65852 13.8035 8.89509 13.9207L10.1797 14.5631C10.3132 14.6298 10.4604 14.6646 10.6097 14.6646C10.759 14.6646 10.9062 14.6298 11.0397 14.5631L12.3243 13.9207Z" fill="#007B42" />
                                                        <path d="M12.7251 3.11538H12.9751V3.1152L12.7251 3.11538ZM12.7251 7.66488H12.4751V7.86011L12.6645 7.90742L12.7251 7.66488ZM12.105 1.62003L12.2818 1.44326V1.44326L12.105 1.62003ZM10.6097 1L10.6099 0.75H10.6097V1ZM2.91739 1V0.75L2.9172 0.75L2.91739 1ZM1.42203 1.62003L1.24526 1.44326L1.24526 1.44326L1.42203 1.62003ZM0.802002 3.11538L0.552002 3.1152V3.11538H0.802002ZM0.802002 13.8846H0.552002L0.552002 13.8848L0.802002 13.8846ZM1.42203 15.38L1.24526 15.5567H1.24526L1.42203 15.38ZM2.91739 16L2.91721 16.25H2.91739V16ZM11.0176 15.831L11.1944 16.0078L11.1944 16.0078L11.0176 15.831ZM11.0732 15.7666L11.0186 15.5227L10.9278 15.543L10.8723 15.6178L11.0732 15.7666ZM11.5559 15.5954L11.6673 15.8192L11.6677 15.819L11.5559 15.5954ZM12.8405 14.9531L12.7294 14.7291L12.7287 14.7294L12.8405 14.9531ZM14.2635 12.65H14.0135L14.0135 12.6508L14.2635 12.65ZM13.2443 7.79459L13.3052 7.55213L13.3049 7.55205L13.2443 7.79459ZM11.5712 7.37663L11.5106 7.61917L11.8212 7.69676V7.37663H11.5712ZM8.185 14.8462V15.0962H9.07613L8.31503 14.6326L8.185 14.8462ZM7.33828 14.0049L7.1256 14.1363L7.33828 14.0049ZM6.95586 12.65L7.20586 12.6508V12.65H6.95586ZM6.95586 9.10075H7.20586V9.10047L6.95586 9.10075ZM7.24041 8.27205L7.4375 8.42585V8.42585L7.24041 8.27205ZM7.97509 7.79459L8.03558 8.03716L8.03568 8.03714L7.97509 7.79459ZM10.0966 7.26459L10.0363 7.02199L10.036 7.02205L10.0966 7.26459ZM11.1228 7.26459L11.1834 7.02205L11.1832 7.02199L11.1228 7.26459ZM10.2484 4.2459L10.0716 4.42268V4.42268L10.2484 4.2459ZM10.2484 5.06179L10.0716 4.88502L10.0716 4.88502L10.2484 5.06179ZM3.27867 5.06179L3.45545 4.88502L3.45545 4.88502L3.27867 5.06179ZM7.17149 6.55359L6.99471 6.73037L6.99471 6.73037L7.17149 6.55359ZM7.17149 7.36948L6.99471 7.19271L6.99471 7.19271L7.17149 7.36948ZM3.27867 7.36948L3.45545 7.19271L3.45545 7.19271L3.27867 7.36948ZM3.27867 6.55359L3.45545 6.73037L3.45545 6.73037L3.27867 6.55359ZM3.27867 8.86129L3.45545 9.03806H3.45545L3.27867 8.86129ZM5.63302 8.86129L5.45625 9.03806L5.45625 9.03806L5.63302 8.86129ZM5.63302 9.67718L5.45625 9.5004L5.45625 9.5004L5.63302 9.67718ZM3.27867 9.67718L3.45545 9.5004H3.45545L3.27867 9.67718ZM12.3243 13.9207L12.4361 14.1444L12.3243 13.9207ZM13.1097 9.10075L12.8597 9.10019V9.10075H13.1097ZM13.0692 8.98225L12.8719 9.13574L12.8719 9.13574L13.0692 8.98225ZM12.9643 8.91383L13.0253 8.67138L13.0249 8.67128L12.9643 8.91383ZM10.8428 8.38382L10.7816 8.62622L10.7822 8.62637L10.8428 8.38382ZM10.3766 8.38382L10.4372 8.62637L10.4378 8.62622L10.3766 8.38382ZM8.25509 8.91383L8.19449 8.67128L8.19409 8.67138L8.25509 8.91383ZM8.15021 8.98225L8.34755 9.13574L8.34755 9.13574L8.15021 8.98225ZM8.1097 9.10075H8.3597L8.3597 9.10019L8.1097 9.10075ZM8.1097 12.65L8.3597 12.6508V12.65H8.1097ZM8.32074 13.3976L8.10808 13.5291L8.32074 13.3976ZM8.89509 13.9207L9.00689 13.6971L9.00614 13.6968L8.89509 13.9207ZM10.1797 14.5631L10.0679 14.7867L10.0679 14.7867L10.1797 14.5631ZM11.0397 14.5631L11.1515 14.7867L11.1515 14.7867L11.0397 14.5631ZM12.4751 3.11538V7.66488H12.9751V3.11538H12.4751ZM11.9283 1.79681C12.2781 2.14659 12.4747 2.6209 12.4751 3.11557L12.9751 3.1152C12.9746 2.48805 12.7253 1.88672 12.2818 1.44326L11.9283 1.79681ZM10.6095 1.25C11.1042 1.25036 11.5785 1.44702 11.9283 1.79681L12.2818 1.44326C11.8384 0.999792 11.237 0.750456 10.6099 0.75L10.6095 1.25ZM2.91739 1.25H10.6097V0.75H2.91739V1.25ZM1.59881 1.79681C1.94859 1.44702 2.4229 1.25036 2.91757 1.25L2.9172 0.75C2.29005 0.750456 1.68872 0.999792 1.24526 1.44326L1.59881 1.79681ZM1.052 3.11557C1.05236 2.6209 1.24903 2.14659 1.59881 1.79681L1.24526 1.44326C0.801794 1.88672 0.552458 2.48805 0.552002 3.1152L1.052 3.11557ZM1.052 13.8846V3.11538H0.552002V13.8846H1.052ZM1.59881 15.2032C1.24903 14.8534 1.05236 14.3791 1.052 13.8844L0.552002 13.8848C0.552458 14.5119 0.801794 15.1133 1.24526 15.5567L1.59881 15.2032ZM2.91757 15.75C2.4229 15.7496 1.94859 15.553 1.59881 15.2032L1.24526 15.5567C1.68872 16.0002 2.29005 16.2495 2.91721 16.25L2.91757 15.75ZM10.6097 15.75H2.91739V16.25H10.6097V15.75ZM10.8409 15.6542C10.7796 15.7156 10.6964 15.75 10.6097 15.75V16.25C10.829 16.25 11.0393 16.1629 11.1944 16.0078L10.8409 15.6542ZM10.8723 15.6178C10.8628 15.6306 10.8523 15.6428 10.8409 15.6542L11.1944 16.0078C11.2233 15.9789 11.2499 15.948 11.274 15.9155L10.8723 15.6178ZM11.1277 16.0106C11.314 15.9689 11.4952 15.9048 11.6673 15.8192L11.4444 15.3716C11.3087 15.4392 11.1656 15.4898 11.0186 15.5227L11.1277 16.0106ZM11.6677 15.819L12.9523 15.1767L12.7287 14.7294L11.4441 15.3718L11.6677 15.819ZM12.9516 15.177C13.422 14.9436 13.8177 14.5831 14.0938 14.1363L13.6685 13.8735C13.4415 14.2408 13.1162 14.5372 12.7294 14.7291L12.9516 15.177ZM14.0938 14.1363C14.3699 13.6895 14.5153 13.1743 14.5135 12.6492L14.0135 12.6508C14.015 13.0826 13.8954 13.5061 13.6685 13.8735L14.0938 14.1363ZM14.5135 12.65V9.10075H14.0135V12.65H14.5135ZM14.5135 9.10075C14.5135 8.36751 14.0162 7.73079 13.3052 7.55213L13.1834 8.03706C13.6724 8.15994 14.0135 8.59706 14.0135 9.10075H14.5135ZM13.3049 7.55205L12.7857 7.42233L12.6645 7.90742L13.1837 8.03714L13.3049 7.55205ZM11.8212 7.37663V3.11538H11.3212V7.37663H11.8212ZM11.8212 3.11538C11.8212 2.44731 11.2778 1.90385 10.6097 1.90385V2.40385C11.0016 2.40385 11.3212 2.72346 11.3212 3.11538H11.8212ZM10.6097 1.90385H2.91739V2.40385H10.6097V1.90385ZM2.91739 1.90385C2.24932 1.90385 1.70585 2.44731 1.70585 3.11538H2.20585C2.20585 2.72346 2.52546 2.40385 2.91739 2.40385V1.90385ZM1.70585 3.11538V13.8846H2.20585V3.11538H1.70585ZM1.70585 13.8846C1.70585 14.5527 2.24932 15.0962 2.91739 15.0962V14.5962C2.52546 14.5962 2.20585 14.2765 2.20585 13.8846H1.70585ZM2.91739 15.0962H8.185V14.5962H2.91739V15.0962ZM7.1256 14.1363C7.35895 14.5139 7.67776 14.83 8.05496 15.0597L8.31503 14.6326C8.00492 14.4438 7.7428 14.1839 7.55095 13.8735L7.1256 14.1363ZM6.70586 12.6492C6.70413 13.1743 6.84954 13.6895 7.1256 14.1363L7.55095 13.8735C7.32398 13.5061 7.20443 13.0826 7.20585 12.6508L6.70586 12.6492ZM6.70586 9.10075V12.65H7.20586V9.10075H6.70586ZM7.04331 8.11825C6.82425 8.39898 6.70546 8.74495 6.70586 9.10103L7.20586 9.10047C7.20558 8.85604 7.28713 8.61855 7.4375 8.42585L7.04331 8.11825ZM7.91459 7.55202C7.56909 7.63819 7.26237 7.83752 7.04331 8.11825L7.4375 8.42585C7.58787 8.23314 7.79842 8.09631 8.03558 8.03716L7.91459 7.55202ZM10.036 7.02205L7.91449 7.55205L8.03568 8.03714L10.1572 7.50714L10.036 7.02205ZM11.1832 7.02199C10.8066 6.92828 10.4128 6.92828 10.0363 7.02199L10.157 7.50719C10.4543 7.43322 10.7651 7.43322 11.0624 7.50719L11.1832 7.02199ZM11.6318 7.13408L11.1834 7.02205L11.0622 7.50714L11.5106 7.61917L11.6318 7.13408ZM10.6674 4.65385C10.6674 4.43453 10.5803 4.2242 10.4252 4.06912L10.0716 4.42268C10.1329 4.48399 10.1674 4.56714 10.1674 4.65385H10.6674ZM10.4252 5.23857C10.5803 5.08349 10.6674 4.87316 10.6674 4.65385H10.1674C10.1674 4.74055 10.1329 4.82371 10.0716 4.88502L10.4252 5.23857ZM9.84046 5.48077C10.0598 5.48077 10.2701 5.39365 10.4252 5.23857L10.0716 4.88502C10.0103 4.94633 9.92717 4.98077 9.84046 4.98077V5.48077ZM3.68662 5.48077H9.84046V4.98077H3.68662V5.48077ZM3.10189 5.23857C3.25697 5.39365 3.4673 5.48077 3.68662 5.48077V4.98077C3.59991 4.98077 3.51676 4.94633 3.45545 4.88502L3.10189 5.23857ZM2.85969 4.65385C2.85969 4.87316 2.94682 5.08349 3.10189 5.23857L3.45545 4.88502C3.39414 4.82371 3.35969 4.74055 3.35969 4.65385H2.85969ZM3.10189 4.06912C2.94682 4.2242 2.85969 4.43453 2.85969 4.65385H3.35969C3.35969 4.56714 3.39414 4.48399 3.45545 4.42268L3.10189 4.06912ZM3.68662 3.82692C3.4673 3.82692 3.25697 3.91404 3.10189 4.06912L3.45545 4.42268C3.51676 4.36137 3.59991 4.32692 3.68662 4.32692V3.82692ZM9.84046 3.82692H3.68662V4.32692H9.84046V3.82692ZM10.4252 4.06912C10.2701 3.91404 10.0598 3.82692 9.84046 3.82692V4.32692C9.92717 4.32692 10.0103 4.36137 10.0716 4.42268L10.4252 4.06912ZM7.59046 6.96154C7.59046 6.74222 7.50334 6.53189 7.34826 6.37682L6.99471 6.73037C7.05602 6.79168 7.09046 6.87483 7.09046 6.96154H7.59046ZM7.34826 7.54626C7.50334 7.39118 7.59046 7.18085 7.59046 6.96154H7.09046C7.09046 7.04824 7.05602 7.1314 6.99471 7.19271L7.34826 7.54626ZM6.76354 7.78846C6.98285 7.78846 7.19319 7.70134 7.34826 7.54626L6.99471 7.19271C6.9334 7.25402 6.85025 7.28846 6.76354 7.28846V7.78846ZM3.68662 7.78846H6.76354V7.28846H3.68662V7.78846ZM3.10189 7.54626C3.25697 7.70134 3.4673 7.78846 3.68662 7.78846V7.28846C3.59991 7.28846 3.51676 7.25402 3.45545 7.19271L3.10189 7.54626ZM2.85969 6.96154C2.85969 7.18085 2.94682 7.39118 3.10189 7.54626L3.45545 7.19271C3.39414 7.1314 3.35969 7.04824 3.35969 6.96154H2.85969ZM3.10189 6.37682C2.94682 6.53189 2.85969 6.74222 2.85969 6.96154H3.35969C3.35969 6.87483 3.39414 6.79168 3.45545 6.73037L3.10189 6.37682ZM3.68662 6.13462C3.4673 6.13462 3.25697 6.22174 3.10189 6.37682L3.45545 6.73037C3.51676 6.66906 3.59991 6.63462 3.68662 6.63462V6.13462ZM6.76354 6.13462H3.68662V6.63462H6.76354V6.13462ZM7.34826 6.37682C7.19319 6.22174 6.98285 6.13462 6.76354 6.13462V6.63462C6.85025 6.63462 6.9334 6.66906 6.99471 6.73037L7.34826 6.37682ZM3.68662 8.44231C3.4673 8.44231 3.25697 8.52943 3.10189 8.68451L3.45545 9.03806C3.51676 8.97675 3.59991 8.94231 3.68662 8.94231V8.44231ZM5.22508 8.44231H3.68662V8.94231H5.22508V8.44231ZM5.8098 8.68451C5.65472 8.52943 5.44439 8.44231 5.22508 8.44231V8.94231C5.31178 8.94231 5.39494 8.97675 5.45625 9.03806L5.8098 8.68451ZM6.052 9.26923C6.052 9.04992 5.96488 8.83959 5.8098 8.68451L5.45625 9.03806C5.51756 9.09937 5.552 9.18253 5.552 9.26923H6.052ZM5.8098 9.85395C5.96488 9.69888 6.052 9.48854 6.052 9.26923H5.552C5.552 9.35594 5.51756 9.43909 5.45625 9.5004L5.8098 9.85395ZM5.22508 10.0962C5.44439 10.0962 5.65472 10.009 5.8098 9.85395L5.45625 9.5004C5.39494 9.56171 5.31178 9.59615 5.22508 9.59615V10.0962ZM3.68662 10.0962H5.22508V9.59615H3.68662V10.0962ZM3.10189 9.85395C3.25697 10.009 3.4673 10.0962 3.68662 10.0962V9.59615C3.59991 9.59615 3.51676 9.56171 3.45545 9.5004L3.10189 9.85395ZM2.85969 9.26923C2.85969 9.48854 2.94682 9.69888 3.10189 9.85395L3.45545 9.5004C3.39414 9.43909 3.35969 9.35594 3.35969 9.26923H2.85969ZM3.10189 8.68451C2.94682 8.83959 2.85969 9.04992 2.85969 9.26923H3.35969C3.35969 9.18253 3.39414 9.09937 3.45545 9.03806L3.10189 8.68451ZM12.8597 12.65C12.8597 13.0969 12.6124 13.4972 12.2125 13.6971L12.4361 14.1444C13.0055 13.8597 13.3597 13.2862 13.3597 12.65H12.8597ZM12.8597 9.10075V12.65H13.3597V9.10075H12.8597ZM12.8719 9.13574C12.864 9.12558 12.8597 9.11307 12.8597 9.10019L13.3597 9.1013C13.3599 9.00261 13.3271 8.90667 13.2665 8.82877L12.8719 9.13574ZM12.9033 9.15627C12.8908 9.15313 12.8798 9.1459 12.8719 9.13574L13.2665 8.82877C13.2059 8.75087 13.121 8.69546 13.0253 8.67138L12.9033 9.15627ZM10.7822 8.62637L12.9037 9.15637L13.0249 8.67128L10.9034 8.14128L10.7822 8.62637ZM10.4378 8.62622C10.5506 8.59774 10.6688 8.59774 10.7816 8.62622L10.904 8.14143C10.7108 8.09267 10.5086 8.09267 10.3154 8.14143L10.4378 8.62622ZM8.31568 9.15637L10.4372 8.62637L10.316 8.14128L8.19449 8.67128L8.31568 9.15637ZM8.34755 9.13574C8.33964 9.1459 8.32857 9.15313 8.31609 9.15627L8.19409 8.67138C8.09838 8.69546 8.01347 8.75086 7.95287 8.82877L8.34755 9.13574ZM8.3597 9.10019C8.35973 9.11306 8.35545 9.12558 8.34755 9.13574L7.95287 8.82877C7.89228 8.90668 7.85948 9.00261 7.8597 9.1013L8.3597 9.10019ZM8.3597 12.65V9.10075H7.8597V12.65H8.3597ZM8.5334 13.2662C8.41914 13.0813 8.35897 12.8681 8.3597 12.6508L7.8597 12.6491C7.85866 12.9599 7.9447 13.2647 8.10808 13.5291L8.5334 13.2662ZM9.00614 13.6968C8.81143 13.6002 8.64766 13.4511 8.5334 13.2662L8.10808 13.5291C8.27145 13.7934 8.50562 14.0067 8.78404 14.1447L9.00614 13.6968ZM10.2915 14.3394L9.00689 13.6971L8.78328 14.1444L10.0679 14.7867L10.2915 14.3394ZM10.6097 14.4146C10.4992 14.4146 10.3903 14.3888 10.2915 14.3394L10.0679 14.7867C10.2361 14.8708 10.4216 14.9146 10.6097 14.9146V14.4146ZM10.9279 14.3394C10.8291 14.3888 10.7202 14.4146 10.6097 14.4146V14.9146C10.7978 14.9146 10.9833 14.8708 11.1515 14.7867L10.9279 14.3394ZM12.2125 13.6971L10.9279 14.3394L11.1515 14.7867L12.4361 14.1444L12.2125 13.6971Z" fill="#007B42" />
                                                    </svg>
                                                </div>
                                                <div className='knowledge-base-content-span-text'>
                                                    Compliance with Data Protection Regulations
                                                </div>
                                            </div>
                                            <div className='knowledge-base-content-box'>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.7634 0C14.1442 0 15.2634 1.1192 15.2634 2.49999V5.00001C15.2634 5.50295 15.1111 5.9799 14.839 6.38253C15.1103 6.71004 15.2634 7.08598 15.2634 7.5V12.5C15.2634 13.9986 13.2606 15 10.8884 15C9.26188 15 7.80904 14.5291 7.05641 13.75H2.76342C1.38263 13.75 0.263428 12.6308 0.263428 11.25V8.75001C0.263428 8.00303 0.591348 7.3331 1.11063 6.87498C0.591348 6.41689 0.263428 5.74693 0.263428 4.99998V2.49999C0.263428 1.1192 1.38263 0 2.76342 0H12.7634ZM1.51344 2.49999V5.00001C1.51344 5.69045 2.07298 6.24999 2.76342 6.24993H7.05638C7.7617 5.51982 9.0819 5.06051 10.5837 5.00561L10.5996 5.00508C10.6392 5.0037 10.679 5.00265 10.7188 5.00183L10.7516 5.00118C10.7971 5.00045 10.8427 4.99995 10.8884 4.99995C10.9568 4.99998 11.0252 5.00085 11.0936 5.00256L11.0974 5.00265C12.1428 5.02875 13.1054 5.25035 13.8414 5.62283C13.9527 5.43606 14.0134 5.22308 14.0134 4.99998V2.49999C14.0134 1.80952 13.4539 1.24998 12.7634 1.24998H2.76345C2.07298 1.24998 1.51344 1.80955 1.51344 2.49999ZM1.51341 11.25C1.51341 11.9405 2.07298 12.5 2.76342 12.5V12.5H6.51342V7.5H2.76342C2.07295 7.5 1.51341 8.05957 1.51341 8.75001V11.25ZM10.8884 13.75C12.6588 13.75 14.0134 13.0727 14.0134 12.5H14.0134V11.7852L13.9898 11.7982C13.9516 11.8195 13.9131 11.8402 13.8743 11.8603C13.8483 11.8738 13.8222 11.887 13.7959 11.8999L13.7571 11.9187C13.7163 11.9382 13.6752 11.9571 13.6339 11.9755L13.5936 11.9932C13.5656 12.0053 13.5376 12.0172 13.5094 12.0287C13.4079 12.0703 13.3052 12.1087 13.2014 12.144C13.1564 12.1592 13.1112 12.174 13.0658 12.1882L13.0183 12.2028L12.973 12.2163L12.9247 12.2303L12.8787 12.2433C12.847 12.252 12.8151 12.2606 12.7832 12.2689L12.7334 12.2816C12.701 12.2899 12.6684 12.2978 12.6358 12.3054L12.5886 12.3164L12.5374 12.3278L12.4893 12.3382L12.4377 12.3489L12.3891 12.3587C12.3717 12.3621 12.3542 12.3654 12.3367 12.3687L12.3296 12.37C12.3157 12.3726 12.3017 12.3753 12.2877 12.3778L12.2347 12.3871L12.1853 12.3956L12.1317 12.4042C12.1151 12.4068 12.0985 12.4095 12.0818 12.4121L12.0275 12.42C12.0234 12.4206 12.0192 12.4212 12.0151 12.4218C12.0026 12.4236 11.9901 12.4254 11.9775 12.4271L11.9223 12.4344C11.9181 12.4349 11.9139 12.4354 11.9097 12.436C11.8972 12.4376 11.8847 12.4393 11.8721 12.4408C11.8591 12.4424 11.846 12.4439 11.8329 12.4454C11.8273 12.446 11.8217 12.4467 11.8162 12.4473C11.7994 12.4492 11.7827 12.4513 11.7659 12.4531C11.7526 12.4545 11.7393 12.4559 11.7259 12.4572C11.7203 12.4578 11.7147 12.4583 11.7091 12.4589C11.704 12.4594 11.699 12.4599 11.6939 12.4605C11.6822 12.4617 11.6705 12.4629 11.6588 12.464C11.6424 12.4655 11.626 12.4669 11.6095 12.4684L11.601 12.4691C11.5961 12.4695 11.5911 12.47 11.5861 12.4704C11.5744 12.4715 11.5627 12.4725 11.5509 12.4735C11.5339 12.4748 11.5169 12.4761 11.4999 12.4773L11.4918 12.4779C11.4824 12.4786 11.473 12.4793 11.4636 12.48C11.4565 12.4805 11.4494 12.481 11.4422 12.4815C11.4219 12.4829 11.4015 12.484 11.3812 12.4852L11.3329 12.4881C11.3121 12.4893 11.2913 12.4901 11.2705 12.4911L11.2225 12.4933C11.2045 12.4941 11.1864 12.4946 11.1683 12.4952L11.1561 12.4956C11.1505 12.4958 11.1448 12.496 11.1392 12.4962C11.1301 12.4965 11.121 12.4968 11.1119 12.4971C11.0889 12.4977 11.0657 12.4981 11.0426 12.4985L11.0358 12.4986L11.0004 12.4993C10.9257 12.5003 10.851 12.5003 10.7763 12.4993L10.7409 12.4986C10.7155 12.4981 10.6901 12.4977 10.6648 12.4971L10.6206 12.4956C10.6145 12.4954 10.6085 12.4952 10.6024 12.495C10.5863 12.4945 10.5702 12.494 10.5542 12.4933L10.5062 12.4911C10.5005 12.4908 10.4948 12.4906 10.4891 12.4903C10.474 12.4896 10.4589 12.489 10.4438 12.4881L10.3955 12.4852C10.3914 12.485 10.3873 12.4848 10.3831 12.4845C10.3669 12.4836 10.3506 12.4826 10.3345 12.4815C10.3221 12.4807 10.3097 12.4798 10.2974 12.4788C10.2932 12.4785 10.289 12.4782 10.2849 12.4779C10.2652 12.4764 10.2454 12.475 10.2258 12.4735L10.1757 12.4691C10.1564 12.4674 10.1371 12.4658 10.1179 12.464L10.0676 12.4589L10.0591 12.458C10.043 12.4564 10.0268 12.4548 10.0108 12.4531C9.99827 12.4517 9.98582 12.4503 9.97337 12.4488C9.96908 12.4483 9.9648 12.4478 9.96052 12.4473L9.95228 12.4464C9.93636 12.4446 9.92043 12.4427 9.90456 12.4408C9.89201 12.4393 9.87951 12.4376 9.86701 12.436C9.86282 12.4354 9.85863 12.4349 9.85443 12.4344C9.83601 12.432 9.81755 12.4296 9.79921 12.4271C9.78664 12.4254 9.77412 12.4236 9.7616 12.4218C9.75746 12.4212 9.75331 12.4206 9.74917 12.42L9.69488 12.4121L9.64499 12.4042L9.59138 12.3956C9.57485 12.3929 9.55842 12.39 9.54198 12.3871L9.48898 12.3778L9.44 12.3687C9.42248 12.3654 9.40499 12.3621 9.38759 12.3587L9.33901 12.3489L9.28736 12.3382L9.23938 12.3278L9.18805 12.3164L9.14094 12.3054C9.10834 12.2978 9.07581 12.2898 9.04335 12.2816C9.01114 12.2736 8.97901 12.2652 8.94696 12.2566L8.89795 12.2433L8.85201 12.2303C8.82073 12.2214 8.78953 12.2122 8.75841 12.2027C8.72754 12.1934 8.69675 12.1838 8.66606 12.1739L8.61919 12.1587C8.57453 12.1438 8.53005 12.1285 8.48574 12.1126C8.45637 12.1021 8.42708 12.0913 8.39788 12.0802C8.28388 12.0371 8.17152 11.9898 8.06105 11.9383L8.01957 11.9186L7.98093 11.8999L7.94026 11.8796L7.90247 11.8603L7.86272 11.8395L7.82571 11.8196L7.78681 11.7981L7.7634 11.7852V12.5C7.7634 12.5753 7.79419 12.6617 7.86632 12.7634C7.88537 12.7903 7.90234 12.8187 7.91709 12.8481C8.31916 13.3154 9.47032 13.75 10.8884 13.75ZM7.76343 9.99999C7.76343 10.5727 9.11806 11.25 10.8884 11.25C12.6588 11.25 14.0134 10.5727 14.0133 9.99987V9.28509C14.0085 9.28778 14.0037 9.29041 13.9989 9.29304C13.9958 9.29474 13.9927 9.29644 13.9896 9.29815C13.9645 9.31223 13.9392 9.32601 13.9137 9.33949L13.8744 9.36015C13.8617 9.36671 13.8489 9.37318 13.8361 9.37963C13.8228 9.38637 13.8094 9.39308 13.7959 9.3997C13.7693 9.41277 13.7425 9.42559 13.7157 9.43816C13.6885 9.45083 13.6612 9.46325 13.6338 9.47543L13.5935 9.49307C13.5655 9.50516 13.5374 9.517 13.5092 9.5286C13.4229 9.56399 13.3357 9.59712 13.2476 9.62795C13.2176 9.63847 13.1875 9.64871 13.1573 9.65868C13.1269 9.66871 13.0964 9.67851 13.0658 9.6881L13.0183 9.70269L12.973 9.71625L12.9247 9.73022L12.8787 9.7432C12.8469 9.75197 12.8151 9.76052 12.7832 9.76887L12.7334 9.78155L12.6866 9.79321C12.6722 9.79672 12.6578 9.80011 12.6434 9.80351L12.6361 9.80525L12.5884 9.81636L12.5375 9.82767L12.4893 9.83813L12.4377 9.84879L12.3891 9.8586C12.376 9.8612 12.3627 9.86369 12.3495 9.86618C12.3452 9.86698 12.341 9.86779 12.3367 9.86859C12.3204 9.87167 12.3041 9.87478 12.2877 9.87773L12.2347 9.88705L12.1853 9.89552L12.1317 9.90413C12.1151 9.90677 12.0985 9.90946 12.0818 9.91198L12.0275 9.91989C12.0234 9.92049 12.0192 9.9211 12.015 9.9217C12.0025 9.92351 11.99 9.92533 11.9775 9.92704L11.9223 9.93428C11.9181 9.93482 11.9139 9.93537 11.9097 9.93592C11.8972 9.93755 11.8847 9.93919 11.8721 9.94072C11.8591 9.94233 11.846 9.94383 11.8329 9.94533C11.8273 9.94597 11.8217 9.94661 11.8162 9.94726C11.7994 9.94916 11.7827 9.95118 11.7659 9.953C11.7563 9.95404 11.7467 9.95503 11.737 9.95601C11.7277 9.95695 11.7184 9.95788 11.7091 9.95883C11.6923 9.96053 11.6756 9.96231 11.6588 9.9639C11.6396 9.96571 11.6203 9.96735 11.601 9.96902C11.5961 9.96946 11.5911 9.9699 11.5861 9.97035C11.5744 9.9714 11.5627 9.97244 11.5509 9.97339C11.5313 9.97497 11.5116 9.97638 11.4918 9.97781C11.4859 9.97824 11.4799 9.97869 11.474 9.97914C11.4634 9.97994 11.4529 9.98073 11.4422 9.98145C11.4219 9.98279 11.4015 9.98396 11.3812 9.98517L11.3329 9.98807C11.3177 9.98888 11.3025 9.98957 11.2873 9.99026C11.2817 9.99051 11.2761 9.99077 11.2705 9.99103L11.2225 9.99325C11.2045 9.99399 11.1864 9.99456 11.1683 9.99512C11.1642 9.99525 11.1602 9.99538 11.1561 9.99551C11.1505 9.99569 11.1448 9.99589 11.1392 9.99609C11.1301 9.99641 11.121 9.99674 11.1119 9.99697C11.0889 9.99761 11.0657 9.99801 11.0426 9.99841L11.0358 9.99852L11.0004 9.99923C10.9257 10.0002 10.851 10.0002 10.7763 9.99923L10.7409 9.99852C10.7155 9.99806 10.6901 9.99765 10.6648 9.99697L10.6206 9.99551C10.6145 9.99531 10.6085 9.99511 10.6024 9.99492C10.5863 9.99441 10.5702 9.99389 10.5542 9.99325L10.5062 9.99103C10.5005 9.99076 10.4948 9.9905 10.4891 9.99024C10.474 9.98956 10.4589 9.98887 10.4438 9.98807L10.3955 9.98517C10.3914 9.98492 10.3873 9.98468 10.3831 9.98444C10.3669 9.98349 10.3506 9.98254 10.3345 9.98145C10.322 9.98061 10.3096 9.97967 10.2972 9.97873C10.2931 9.97843 10.289 9.97812 10.2849 9.97781C10.2789 9.97737 10.273 9.97693 10.267 9.9765C10.2533 9.9755 10.2395 9.97449 10.2258 9.97339L10.1757 9.96902L10.1672 9.96829C10.1507 9.96687 10.1343 9.96545 10.1179 9.9639L10.0676 9.95883L10.0591 9.95797C10.043 9.95636 10.0268 9.95474 10.0108 9.953C9.99827 9.95165 9.98582 9.9502 9.97337 9.94875C9.96908 9.94825 9.9648 9.94775 9.96052 9.94726L9.95228 9.94631C9.93636 9.94449 9.92043 9.94267 9.90456 9.94072C9.8878 9.93867 9.87113 9.93645 9.85443 9.93428C9.83601 9.9319 9.81755 9.92956 9.79921 9.92704C9.78666 9.92533 9.77415 9.92351 9.76165 9.9217C9.75749 9.92109 9.75333 9.92049 9.74917 9.91989L9.69488 9.91198L9.64499 9.90413L9.59138 9.89552C9.57872 9.89343 9.56611 9.89124 9.55351 9.88905C9.54967 9.88838 9.54582 9.88772 9.54198 9.88705L9.48898 9.87773L9.44 9.86859C9.42248 9.86531 9.40499 9.86203 9.38759 9.8586L9.33901 9.84879L9.28736 9.83813L9.23926 9.82767L9.18819 9.81633C9.13976 9.80537 9.09148 9.79379 9.04335 9.78158C9.01114 9.77353 8.97901 9.76518 8.94696 9.75653L8.89795 9.7432L8.85201 9.73022C8.82073 9.72133 8.78953 9.71215 8.75841 9.70269L8.71086 9.6881L8.66601 9.67386L8.61934 9.65868C8.58917 9.64866 8.55908 9.63841 8.52907 9.62795C8.49942 9.61759 8.46987 9.60697 8.44042 9.59607C8.41121 9.58532 8.38211 9.57427 8.35312 9.56294C8.32443 9.55179 8.29585 9.54036 8.26739 9.52863C8.22561 9.51155 8.18409 9.49384 8.14285 9.47549C8.11547 9.46332 8.08819 9.4509 8.06103 9.43825C8.03417 9.42568 8.00743 9.41287 7.98081 9.39981C7.94116 9.3804 7.90185 9.36031 7.86289 9.33955L7.82562 9.3196C7.81265 9.31254 7.79979 9.30539 7.78695 9.29821L7.76343 9.2852V9.99999ZM7.76343 7.5C7.76343 8.07267 9.11806 8.75001 10.8884 8.75001C12.6588 8.75001 14.0134 8.07267 14.0134 7.50009C14.0134 7.33233 13.897 7.15562 13.6882 6.98956C13.6575 6.97448 13.6281 6.95691 13.6002 6.93703C13.2008 6.65112 12.599 6.43409 11.8992 6.32607L11.8837 6.32376C11.8306 6.3157 11.7774 6.30835 11.7241 6.3017L11.6926 6.29777C11.6643 6.29437 11.636 6.29112 11.6075 6.28808L11.583 6.28559C11.5613 6.28333 11.5395 6.28116 11.5176 6.27911C11.4866 6.27622 11.4555 6.27356 11.4245 6.27114C11.3898 6.2684 11.3551 6.26593 11.3203 6.26373L11.2984 6.2623C11.268 6.26048 11.2375 6.25887 11.2069 6.25746L11.18 6.25635C11.1243 6.25402 11.0687 6.25234 11.013 6.25131L10.9837 6.25078C10.952 6.25034 10.9203 6.25005 10.8884 6.25005C10.8484 6.25005 10.8086 6.25049 10.7689 6.25119L10.7467 6.25157C10.7071 6.25237 10.6675 6.25352 10.6279 6.255L10.62 6.25532C9.31953 6.30645 8.22939 6.72372 7.86667 7.23612L7.86649 7.23636L7.86635 7.23656C7.79419 7.33828 7.76343 7.42468 7.76343 7.5ZM2.13843 3.75C2.13843 2.71421 2.97764 1.875 4.01343 1.875C5.04922 1.875 5.88843 2.71421 5.88843 3.75C5.88843 4.78579 5.04922 5.625 4.01343 5.625C2.97764 5.625 2.13843 4.78579 2.13843 3.75ZM3.38844 3.75C3.38844 4.09544 3.66799 4.37499 4.01343 4.37499C4.35887 4.37499 4.63842 4.09544 4.63842 3.75C4.63842 3.40456 4.35887 3.12501 4.01343 3.12501C3.66799 3.12501 3.38844 3.40456 3.38844 3.75ZM2.13843 9.99999C2.13843 8.9642 2.97764 8.12499 4.01343 8.12499C5.04922 8.12499 5.88843 8.9642 5.88843 9.99999C5.88843 11.0358 5.04922 11.875 4.01343 11.875C2.97764 11.875 2.13843 11.0358 2.13843 9.99999ZM3.38844 10C3.38844 10.3455 3.66799 10.625 4.01343 10.625C4.35887 10.625 4.63842 10.3455 4.63842 10C4.63842 9.65458 4.35887 9.37503 4.01343 9.37503C3.66799 9.37503 3.38844 9.65458 3.38844 10ZM11.5134 3.12501H7.76343C7.41825 3.12501 7.13844 2.84517 7.13844 2.49999C7.13844 2.15481 7.41825 1.875 7.76343 1.875H11.5134C11.8586 1.875 12.1384 2.15481 12.1384 2.50002C12.1384 2.8452 11.8586 3.12501 11.5134 3.12501Z" fill="#007B42" />
                                                    </svg>
                                                </div>
                                                <div className='knowledge-base-content-span-text'>
                                                    Server Security
                                                </div>
                                            </div>
                                        </div>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="1190" height="2" viewBox="0 0 1190 2" fill="none">
                                            <path d="M1 1H1189" stroke="#007B42" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" />
                                        </svg>

                                        <div className='knowledge-base-content-title'>Managing and Securing User Data within the App</div>
                                        <div className='knowledge-base-content-box-sec'>
                                            <div className='knowledge-base-content-box'>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="17" viewBox="0 0 15 17" fill="none">
                                                        <path d="M7.22881 1L1 3.58613V6.72994C1 10.7985 3.46194 14.4625 7.22881 16C10.9957 14.4625 13.4576 10.7985 13.4576 6.72994V3.58613L7.22881 1Z" stroke="#007B42" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M4.75 7.99519L6.52629 9.77148L9.70763 6.59018" stroke="#007B42" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                                <div className='knowledge-base-content-span-text'>
                                                    User Account Protection
                                                </div>
                                            </div>
                                            <div className='knowledge-base-content-box'>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                                                        <path d="M15.1593 14.7019C15.0654 14.7963 14.9538 14.8711 14.8309 14.9222C14.7081 14.9732 14.5763 14.9995 14.4432 14.9995C14.3102 14.9995 14.1784 14.9732 14.0555 14.9222C13.9326 14.8711 13.8211 14.7963 13.7272 14.7019L10.8425 11.8172L10.7237 13.2811C10.713 13.4137 10.6764 13.543 10.6157 13.6614C10.5551 13.7799 10.4717 13.8852 10.3703 13.9714C10.2689 14.0576 10.1515 14.123 10.0248 14.1637C9.89817 14.2045 9.7647 14.2199 9.63207 14.209C9.49949 14.1982 9.37032 14.1615 9.25195 14.1008C9.13357 14.0401 9.02831 13.9567 8.94219 13.8553C8.85606 13.754 8.79075 13.6366 8.74999 13.51C8.70923 13.3834 8.69382 13.25 8.70464 13.1174L9.00162 9.4708C9.02118 9.23147 9.12503 9.00685 9.2947 8.83693C9.46436 8.667 9.68882 8.56281 9.92812 8.5429L13.5752 8.24591C13.843 8.22445 14.1084 8.31017 14.3131 8.48424C14.5177 8.6583 14.645 8.90649 14.6668 9.17428C14.6883 9.44188 14.6027 9.70707 14.429 9.91171C14.2552 10.1163 14.0074 10.2437 13.7398 10.2659L12.2764 10.3842L15.1611 13.2689C15.5545 13.6655 15.5545 14.3072 15.1593 14.7019ZM6.28153 0.790427C6.13514 0.778326 5.98787 0.798293 5.84999 0.848939C5.7121 0.899584 5.58693 0.979689 5.48317 1.08367C5.31327 1.2532 5.20931 1.4777 5.18993 1.71693L5.0702 3.18127L2.18641 0.29748C2.09251 0.203266 1.98095 0.128497 1.85811 0.0774519C1.73528 0.0264065 1.60359 8.70988e-05 1.47057 2.15812e-07C1.33755 -8.66672e-05 1.20582 0.0260607 1.08292 0.0769456C0.96002 0.12783 0.848362 0.202454 0.754337 0.296544C0.564357 0.486599 0.457633 0.744324 0.457633 1.01305C0.457633 1.28177 0.564357 1.5395 0.754337 1.72955L3.63813 4.61381L2.17472 4.73307C2.04212 4.74388 1.91294 4.7807 1.79457 4.84144C1.6762 4.90217 1.57095 4.98562 1.48483 5.08703C1.3109 5.29183 1.22545 5.55733 1.24728 5.82514C1.26912 6.09294 1.39644 6.3411 1.60124 6.51503C1.80604 6.68895 2.07154 6.7744 2.33935 6.75257L5.98594 6.45605C6.2254 6.43623 6.45003 6.33201 6.6198 6.16199C6.78957 5.99196 6.89345 5.76717 6.91291 5.52768L7.20989 1.88109C7.23084 1.61347 7.14492 1.34846 6.97093 1.14405C6.79693 0.939645 6.54905 0.812494 6.28153 0.790427ZM5.98454 8.5443L2.33794 8.24685C2.13142 8.23053 1.92485 8.27787 1.74604 8.38249C1.56723 8.48712 1.42476 8.644 1.33779 8.83204C1.25083 9.02007 1.22356 9.23023 1.25963 9.43424C1.29571 9.63824 1.39341 9.8263 1.53959 9.9731C1.70422 10.1368 1.92591 10.2458 2.17425 10.2668L3.6386 10.3851L0.754337 13.2703C0.660241 13.3643 0.585594 13.4759 0.534664 13.5988C0.483734 13.7217 0.45752 13.8534 0.45752 13.9864C0.45752 14.1194 0.483734 14.2511 0.534664 14.3739C0.585594 14.4968 0.660241 14.6084 0.754337 14.7024C0.848206 14.7967 0.959785 14.8716 1.08267 14.9226C1.20554 14.9737 1.3373 15 1.47037 15C1.60344 15 1.7352 14.9737 1.85808 14.9226C1.98096 14.8716 2.09254 14.7967 2.18641 14.7024L5.07114 11.8186L5.18993 13.2816C5.2117 13.5494 5.33896 13.7975 5.54372 13.9715C5.74848 14.1455 6.01396 14.231 6.28176 14.2092C6.54956 14.1875 6.79775 14.0602 6.97172 13.8554C7.14569 13.6507 7.2312 13.3852 7.20943 13.1174L6.91244 9.4708C6.89253 9.2315 6.78833 9.00704 6.61841 8.83737C6.44849 8.66771 6.22387 8.56385 5.98454 8.5443ZM9.92766 6.45652L13.5747 6.7535C13.7812 6.76982 13.9878 6.72248 14.1666 6.61786C14.3454 6.51323 14.4879 6.35635 14.5749 6.16831C14.6618 5.98028 14.6891 5.77012 14.653 5.56612C14.617 5.36211 14.5192 5.17406 14.3731 5.02725C14.2031 4.85776 13.9786 4.75388 13.7393 4.73401L12.275 4.61475L15.1588 1.73049C15.2528 1.63646 15.3274 1.52483 15.3783 1.40197C15.4292 1.27911 15.4554 1.14743 15.4554 1.01445C15.4554 0.881472 15.4292 0.749793 15.3783 0.626936C15.3274 0.504078 15.2528 0.392446 15.1588 0.298415C15.0648 0.204384 14.9531 0.129794 14.8303 0.0789045C14.7074 0.0280151 14.5757 0.00182271 14.4428 0.00182271C14.3098 0.00182272 14.1781 0.0280151 14.0552 0.0789045C13.9324 0.129794 13.8208 0.204384 13.7267 0.298415L10.8429 3.18267L10.7227 1.71926C10.6938 1.45729 10.5639 1.2169 10.3606 1.04914C10.1573 0.881384 9.89666 0.79946 9.63395 0.820764C9.37125 0.842068 9.12718 0.964922 8.95359 1.16324C8.77999 1.36157 8.69052 1.61974 8.70417 1.88296L9.00022 5.53002C9.02003 5.76928 9.12413 5.99374 9.29397 6.16341C9.46382 6.33308 9.68838 6.43695 9.92766 6.45652Z" fill="#007B42" />
                                                    </svg>
                                                </div>
                                                <div className='knowledge-base-content-span-text'>
                                                    Data Minimization
                                                </div>
                                            </div>
                                            <div className='knowledge-base-content-box'>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                        <path d="M14.669 10.3193C14.565 10.2155 14.4591 10.1137 14.3513 10.0139C13.829 9.56071 13.2156 9.34053 12.478 9.34053C12.403 9.34053 12.3221 9.34643 12.2422 9.35125V9.20875C12.4319 9.12089 12.6119 9.01857 12.7812 8.90339L13.573 9.35768C13.6957 9.42832 13.8415 9.44736 13.9783 9.41059C14.1151 9.37383 14.2318 9.28428 14.3026 9.16161L15.3837 7.30589C15.4194 7.24481 15.4427 7.17722 15.4522 7.10706C15.4616 7.0369 15.4571 6.96557 15.4387 6.89719C15.4204 6.82881 15.3886 6.76476 15.3454 6.70875C15.3021 6.65274 15.2481 6.60588 15.1865 6.5709L14.4012 6.12197C14.4187 5.92199 14.4187 5.72087 14.4012 5.5209L15.1865 5.07197C15.2479 5.03678 15.3016 4.98982 15.3448 4.93378C15.3879 4.87774 15.4195 4.81374 15.4378 4.74544C15.4562 4.67714 15.4608 4.6059 15.4515 4.5358C15.4422 4.4657 15.4192 4.39813 15.3837 4.33697L14.3026 2.48126C14.2316 2.3588 14.1149 2.26943 13.9782 2.2327C13.8415 2.19596 13.6958 2.21483 13.573 2.28519L12.7812 2.73894C12.61 2.62283 12.4298 2.52071 12.2422 2.43358V1.53572C12.2422 1.39364 12.1858 1.25738 12.0853 1.15692C11.9849 1.05645 11.8486 1.00001 11.7065 1.00001H9.56368C9.4216 1.00001 9.28534 1.05645 9.18487 1.15692C9.0844 1.25738 9.02796 1.39364 9.02796 1.53572V2.43411C8.83832 2.52197 8.65832 2.62429 8.48904 2.73947L7.69725 2.28519C7.57447 2.21478 7.42881 2.19583 7.2921 2.23247C7.15539 2.2691 7.03873 2.35835 6.96761 2.48072L6.83636 2.70572C6.73231 2.48881 6.59991 2.28668 6.44261 2.10465C6.34092 1.99571 6.23733 1.88855 6.1319 1.78322C5.88432 1.53417 5.58979 1.3367 5.26537 1.20226C4.94094 1.06782 4.59307 0.999076 4.2419 1.00001C3.8294 1.00001 3.41583 1.09804 3.04672 1.28233C2.97075 1.32028 2.90489 1.37574 2.85456 1.44415C2.80424 1.51255 2.77091 1.59194 2.7573 1.67577C2.7437 1.75959 2.75021 1.84545 2.77632 1.92626C2.80242 2.00707 2.84736 2.08052 2.90744 2.14054L4.07208 3.30519C3.86851 3.98715 3.44422 4.4109 2.76226 4.61501L1.59708 3.45036C1.53706 3.39029 1.46361 3.34535 1.3828 3.31925C1.30199 3.29314 1.21613 3.28662 1.1323 3.30023C1.04848 3.31383 0.96909 3.34717 0.900683 3.39749C0.832276 3.44781 0.776813 3.51368 0.738867 3.58965C0.487004 4.09252 0.400297 4.66205 0.491103 5.21709C0.581909 5.77212 0.845596 6.28433 1.24458 6.68072C1.28851 6.72518 1.50922 6.94107 1.56172 6.98607C2.08404 7.43929 2.69744 7.65946 3.43511 7.65946C3.51011 7.65946 3.59101 7.65357 3.67083 7.64875V7.79125C3.4832 7.87859 3.30281 7.98069 3.13136 8.09661L2.33851 7.64232C2.21579 7.57216 2.0703 7.5534 1.93379 7.59013C1.79729 7.62687 1.68087 7.71612 1.60994 7.83839L0.529403 9.69411C0.49377 9.75523 0.470598 9.82281 0.461225 9.89294C0.451851 9.96307 0.456462 10.0344 0.474792 10.1027C0.493121 10.171 0.524806 10.2351 0.568016 10.2911C0.611226 10.3471 0.665107 10.394 0.726546 10.4291L1.5119 10.878C1.49438 11.078 1.49438 11.2791 1.5119 11.4791L0.726546 11.928C0.665212 11.9632 0.611436 12.0102 0.568307 12.0662C0.525177 12.1223 0.493545 12.1863 0.475226 12.2546C0.456907 12.3229 0.452262 12.3941 0.46156 12.4642C0.470857 12.5343 0.493913 12.6019 0.529403 12.663L1.60994 14.5187C1.68077 14.6411 1.79719 14.7305 1.93374 14.7672C2.07028 14.804 2.21582 14.7851 2.33851 14.7148L3.13136 14.2611C3.30065 14.3757 3.48118 14.4775 3.67083 14.5664V15.4643C3.67083 15.6064 3.72727 15.7426 3.82773 15.8431C3.9282 15.9436 4.06446 16 4.20654 16H6.3494C6.49148 16 6.62774 15.9436 6.7282 15.8431C6.82867 15.7426 6.88511 15.6064 6.88511 15.4643V14.5659C7.07475 14.478 7.25475 14.3757 7.42404 14.2605L8.21582 14.7148C8.33854 14.7855 8.48429 14.8046 8.62109 14.768C8.75788 14.7313 8.87454 14.6419 8.94546 14.5193L9.07671 14.2943C9.17529 14.4973 9.30064 14.6993 9.47046 14.8953C9.51546 14.9473 9.73136 15.1686 9.78118 15.2168C10.0288 15.4658 10.3233 15.6633 10.6477 15.7977C10.9721 15.9322 11.32 16.0009 11.6712 16C12.0837 16 12.4972 15.902 12.8664 15.7177C12.9423 15.6797 13.0082 15.6243 13.0585 15.5559C13.1088 15.4874 13.1422 15.4081 13.1558 15.3242C13.1694 15.2404 13.1629 15.1545 13.1368 15.0737C13.1107 14.9929 13.0657 14.9195 13.0056 14.8595L11.841 13.6948C12.0446 13.0129 12.4689 12.5891 13.1508 12.385L14.3155 13.5496C14.3755 13.6097 14.4489 13.6546 14.5297 13.6808C14.6105 13.7069 14.6964 13.7134 14.7802 13.6998C14.8641 13.6862 14.9434 13.6528 15.0119 13.6025C15.0803 13.5522 15.1357 13.4863 15.1737 13.4104C15.4255 12.9075 15.5122 12.3379 15.4214 11.7829C15.3306 11.2279 15.0669 10.7157 14.668 10.3193H14.669ZM7.62547 3.47929L8.26297 3.84465C8.4585 3.95554 8.70386 3.93465 8.87529 3.78786C9.13183 3.57413 9.42495 3.4086 9.74046 3.29929C9.84526 3.26266 9.93609 3.19437 10.0004 3.10387C10.0647 3.01337 10.0993 2.90513 10.0994 2.79411V2.07144H11.1708V2.79411C11.1709 2.90507 11.2054 3.01326 11.2696 3.10375C11.3338 3.19424 11.4245 3.26257 11.5292 3.29929C11.8517 3.41286 12.1506 3.58108 12.3944 3.78786C12.5664 3.93465 12.8122 3.95554 13.0072 3.84465L13.6447 3.47983L14.1858 4.40983L13.5564 4.76983C13.4597 4.82503 13.3827 4.90895 13.3359 5.00995C13.2892 5.11095 13.275 5.224 13.2955 5.3334C13.3276 5.50375 13.3431 5.66393 13.3431 5.82143C13.3431 5.97893 13.3271 6.13911 13.2949 6.30947C13.2745 6.41892 13.2887 6.53202 13.3356 6.63302C13.3825 6.73402 13.4596 6.81791 13.5564 6.87304L14.1863 7.23304L13.6442 8.16304L13.0067 7.79875C12.9112 7.74435 12.8012 7.72057 12.6917 7.73063C12.5822 7.74069 12.4784 7.7841 12.3944 7.855C12.1506 8.06179 11.8517 8.23 11.5292 8.34357C11.4245 8.3803 11.3338 8.44862 11.2696 8.53911C11.2054 8.62961 11.1709 8.7378 11.1708 8.84875V9.36089C10.9702 9.30194 10.7874 9.19407 10.6389 9.04696L7.41011 5.81768C7.27007 5.67692 7.16484 5.5054 7.1028 5.31678C7.04076 5.12816 7.02364 4.92766 7.05279 4.73125C7.0694 4.6225 7.08332 4.5084 7.09457 4.39161L7.62547 3.47929ZM8.28654 13.5207L7.64904 13.1554C7.55338 13.1012 7.44344 13.0776 7.33397 13.0877C7.22451 13.0979 7.12078 13.1413 7.03672 13.2121C6.79297 13.4189 6.49404 13.5871 6.17154 13.7007C6.06684 13.7374 5.97613 13.8058 5.91193 13.8962C5.84773 13.9867 5.81322 14.0949 5.81315 14.2059V14.9286H4.74172V14.2059C4.74165 14.0949 4.70713 13.9867 4.64293 13.8962C4.57873 13.8058 4.48802 13.7374 4.38333 13.7007C4.06781 13.5914 3.77469 13.4259 3.51815 13.2121C3.43404 13.1412 3.33021 13.0977 3.22064 13.0875C3.11106 13.0774 3.00101 13.1011 2.90529 13.1554L2.26779 13.5207L1.72672 12.5907L2.35619 12.2302C2.45283 12.175 2.52987 12.091 2.57663 11.9901C2.62338 11.8891 2.63752 11.776 2.61708 11.6666C2.58494 11.4962 2.5694 11.3361 2.5694 11.1786C2.5694 11.0211 2.58547 10.8609 2.61761 10.6905C2.63801 10.5811 2.62379 10.468 2.57694 10.367C2.53008 10.266 2.45292 10.1821 2.35619 10.127L1.72619 9.76643L2.26833 8.83643L2.90583 9.20178C3.10136 9.31268 3.34672 9.29178 3.51815 9.145C3.77469 8.93126 4.06781 8.76574 4.38333 8.65643C4.48802 8.6197 4.57873 8.55138 4.64293 8.46089C4.70713 8.37039 4.74165 8.2622 4.74172 8.15125V7.63964C4.93993 7.69857 5.12315 7.80304 5.27368 7.95304L8.50243 11.1823C8.78582 11.4662 8.91921 11.8723 8.85975 12.2687C8.84314 12.3775 8.82921 12.4916 8.81796 12.6084L8.28654 13.5207ZM13.6951 11.4137C13.6324 11.3519 13.5556 11.3062 13.4713 11.2807C13.387 11.2553 13.2978 11.2507 13.2114 11.2675C11.8549 11.5386 10.9946 12.3989 10.7235 13.7554C10.7062 13.8418 10.7105 13.9312 10.736 14.0156C10.7615 14.0999 10.8074 14.1767 10.8697 14.2391L11.5555 14.9248C11.1665 14.8966 10.8011 14.7275 10.528 14.4491C10.4921 14.4143 10.3212 14.2402 10.2799 14.1941C9.89475 13.7495 9.7935 13.2545 9.91832 12.4289C9.97257 12.0667 9.94133 11.6968 9.8271 11.3488C9.71287 11.0009 9.51882 10.6844 9.26046 10.4248L6.03118 7.195C5.77249 6.93536 5.45614 6.74049 5.10787 6.62626C4.75961 6.51204 4.38929 6.48168 4.02708 6.53768C3.18547 6.66304 2.70976 6.5634 2.26297 6.17715C2.21529 6.13482 2.04172 5.96393 1.99672 5.9184C1.72376 5.64638 1.55825 5.28491 1.53065 4.90054L2.2169 5.58625C2.34333 5.71322 2.52547 5.76625 2.70065 5.7325C4.05708 5.46143 4.91743 4.60108 5.1885 3.24465C5.20581 3.15821 5.20152 3.06883 5.17601 2.98445C5.1505 2.90006 5.10455 2.82327 5.04225 2.7609L4.35654 2.07519C4.74553 2.10338 5.11088 2.27253 5.38404 2.5509C5.41993 2.58572 5.59083 2.75983 5.63208 2.8059C6.01725 3.25054 6.1185 3.74554 5.99368 4.57108C5.93944 4.93329 5.97067 5.30317 6.0849 5.65116C6.19913 5.99914 6.39318 6.31558 6.65154 6.57518L9.88082 9.805C10.1397 10.0643 10.4561 10.259 10.8043 10.3732C11.1525 10.4874 11.5227 10.5179 11.8849 10.4623C12.726 10.3364 13.2017 10.4366 13.649 10.8229C13.6967 10.8652 13.8703 11.0361 13.9153 11.0816C14.1949 11.3618 14.3546 11.7245 14.3814 12.0995L13.6951 11.4137Z" fill="#007B42" />
                                                        <path d="M14.669 10.3193V10.5693H15.2737L14.8456 10.1423L14.669 10.3193ZM14.3513 10.0139L14.5213 9.83041L14.5152 9.8251L14.3513 10.0139ZM12.2422 9.35125H11.9922V9.61681L12.2573 9.60079L12.2422 9.35125ZM12.2422 9.20875L12.1372 8.98191L11.9922 9.04904V9.20875H12.2422ZM12.7812 8.90339L12.9056 8.68655L12.7699 8.60869L12.6405 8.6967L12.7812 8.90339ZM13.573 9.35768L13.6976 9.14099L13.6974 9.14083L13.573 9.35768ZM14.3026 9.16161L14.0866 9.03576L14.0861 9.0366L14.3026 9.16161ZM15.3837 7.30589L15.1679 7.17955L15.1677 7.18005L15.3837 7.30589ZM15.1865 6.5709L15.0625 6.78794L15.063 6.78824L15.1865 6.5709ZM14.4012 6.12197L14.1521 6.10015L14.1382 6.25958L14.2771 6.33901L14.4012 6.12197ZM14.4012 5.5209L14.2771 5.30385L14.1382 5.38328L14.1521 5.54272L14.4012 5.5209ZM15.1865 5.07197L15.3106 5.28901L15.3109 5.28881L15.1865 5.07197ZM15.3837 4.33697L15.5999 4.2115L15.5997 4.21113L15.3837 4.33697ZM14.3026 2.48126L14.0863 2.6067L14.0866 2.6071L14.3026 2.48126ZM13.573 2.28519L13.4487 2.06825L13.4487 2.06828L13.573 2.28519ZM12.7812 2.73894L12.6408 2.94582L12.77 3.03347L12.9055 2.95584L12.7812 2.73894ZM12.2422 2.43358H11.9922V2.5931L12.1369 2.66031L12.2422 2.43358ZM11.7065 1.00001V0.750009V1.00001ZM9.56368 1.00001V0.750009V1.00001ZM9.02796 2.43411L9.13305 2.66095L9.27796 2.59382V2.43411H9.02796ZM8.48904 2.73947L8.36462 2.95632L8.50032 3.03417L8.62967 2.94617L8.48904 2.73947ZM7.69725 2.28519L7.82166 2.06834L7.82161 2.06831L7.69725 2.28519ZM6.96761 2.48072L7.18355 2.60669L7.18375 2.60635L6.96761 2.48072ZM6.83636 2.70572L6.61095 2.81384L6.8148 3.23884L7.0523 2.83169L6.83636 2.70572ZM6.44261 2.10465L6.63191 1.94107L6.62536 1.93406L6.44261 2.10465ZM6.1319 1.78322L5.95459 1.95947L5.95521 1.96009L6.1319 1.78322ZM4.2419 1.00001V1.25001L4.24256 1.25001L4.2419 1.00001ZM3.04672 1.28233L2.93505 1.05866L2.93501 1.05868L3.04672 1.28233ZM2.90744 2.14054L3.08421 1.96377L3.08414 1.9637L2.90744 2.14054ZM4.07208 3.30519L4.31163 3.37669L4.35428 3.23383L4.24885 3.12841L4.07208 3.30519ZM2.76226 4.61501L2.58552 4.79182L2.69103 4.89728L2.83394 4.85451L2.76226 4.61501ZM1.59708 3.45036L1.42023 3.62707L1.42034 3.62718L1.59708 3.45036ZM0.738867 3.58965L0.962397 3.70161L0.962522 3.70136L0.738867 3.58965ZM1.24458 6.68072L1.42243 6.50501L1.42078 6.50336L1.24458 6.68072ZM1.56172 6.98607L1.72557 6.79724L1.72442 6.79626L1.56172 6.98607ZM3.67083 7.64875H3.92083V7.38319L3.65575 7.39921L3.67083 7.64875ZM3.67083 7.79125L3.77633 8.0179L3.92083 7.95064V7.79125H3.67083ZM3.13136 8.09661L3.00708 8.31352L3.14229 8.391L3.27139 8.30371L3.13136 8.09661ZM2.33851 7.64232L2.4628 7.42541L2.4626 7.42529L2.33851 7.64232ZM1.60994 7.83839L1.82598 7.96419L1.82619 7.96383L1.60994 7.83839ZM0.529403 9.69411L0.745383 9.82001L0.745447 9.8199L0.529403 9.69411ZM0.726546 10.4291L0.850612 10.2121L0.850525 10.212L0.726546 10.4291ZM1.5119 10.878L1.76095 10.8999L1.77492 10.7404L1.63597 10.661L1.5119 10.878ZM1.5119 11.4791L1.63597 11.6961L1.77492 11.6167L1.76095 11.4573L1.5119 11.4791ZM0.726546 11.928L0.602479 11.711L0.602129 11.7112L0.726546 11.928ZM0.529403 12.663L0.31317 12.7885L0.313359 12.7888L0.529403 12.663ZM1.60994 14.5187L1.82632 14.3935L1.82598 14.3929L1.60994 14.5187ZM2.33851 14.7148L2.21433 14.4978L2.2142 14.4979L2.33851 14.7148ZM3.13136 14.2611L3.27155 14.0541L3.14248 13.9667L3.00719 14.0441L3.13136 14.2611ZM3.67083 14.5664H3.92083V14.4075L3.77697 14.3401L3.67083 14.5664ZM3.67083 15.4643H3.92083H3.67083ZM6.88511 14.5659L6.78002 14.339L6.63511 14.4062V14.5659H6.88511ZM7.42404 14.2605L7.54845 14.0437L7.41275 13.9658L7.28341 14.0538L7.42404 14.2605ZM8.21582 14.7148L8.34061 14.4982L8.34024 14.498L8.21582 14.7148ZM8.94546 14.5193L8.72952 14.3933L8.72907 14.3941L8.94546 14.5193ZM9.07671 14.2943L9.30161 14.1851L9.09692 13.7635L8.86077 14.1683L9.07671 14.2943ZM9.47046 14.8953L9.65945 14.7317L9.65944 14.7317L9.47046 14.8953ZM9.78118 15.2168L9.95851 15.0405L9.95503 15.0371L9.78118 15.2168ZM11.6712 16V15.75L11.6705 15.75L11.6712 16ZM12.8664 15.7177L12.978 15.9413L12.9781 15.9413L12.8664 15.7177ZM13.0056 14.8595L12.8289 15.0362L12.8289 15.0363L13.0056 14.8595ZM11.841 13.6948L11.6014 13.6233L11.5588 13.7662L11.6642 13.8716L11.841 13.6948ZM13.1508 12.385L13.3276 12.2082L13.2221 12.1027L13.0791 12.1455L13.1508 12.385ZM14.3155 13.5496L14.4923 13.3729L14.4922 13.3729L14.3155 13.5496ZM15.1737 13.4104L14.9501 13.2984L14.95 13.2986L15.1737 13.4104ZM14.668 10.3193V10.0693H14.0616L14.4918 10.4966L14.668 10.3193ZM7.62547 3.47929L7.74977 3.26239L7.5343 3.1389L7.40939 3.35355L7.62547 3.47929ZM8.26297 3.84465L8.13865 4.06155L8.13964 4.06211L8.26297 3.84465ZM8.87529 3.78786L8.71525 3.59577L8.71269 3.59797L8.87529 3.78786ZM9.74046 3.29929L9.8223 3.53552L9.82296 3.53529L9.74046 3.29929ZM10.0994 2.79411L10.3494 2.79436V2.79411H10.0994ZM10.0994 2.07144V1.82144H9.84939V2.07144H10.0994ZM11.1708 2.07144H11.4208V1.82144H11.1708V2.07144ZM11.1708 2.79411H10.9208V2.79427L11.1708 2.79411ZM11.5292 3.29929L11.6123 3.06349L11.612 3.06338L11.5292 3.29929ZM12.3944 3.78786L12.5567 3.59771L12.5561 3.59722L12.3944 3.78786ZM13.0072 3.84465L13.1308 4.06197L13.1314 4.06163L13.0072 3.84465ZM13.6447 3.47983L13.8608 3.35411L13.736 3.13956L13.5206 3.26285L13.6447 3.47983ZM14.1858 4.40983L14.3099 4.62684L14.5286 4.5018L14.4019 4.28411L14.1858 4.40983ZM13.5564 4.76983L13.6803 4.98691L13.6805 4.98684L13.5564 4.76983ZM13.2955 5.3334L13.0497 5.37931L13.0498 5.37975L13.2955 5.3334ZM13.2949 6.30947L13.0493 6.26311L13.0492 6.26368L13.2949 6.30947ZM13.5564 6.87304L13.6804 6.65598L13.6801 6.65583L13.5564 6.87304ZM14.1863 7.23304L14.4023 7.35894L14.5293 7.14109L14.3104 7.01598L14.1863 7.23304ZM13.6442 8.16304L13.5202 8.3801L13.7354 8.50306L13.8602 8.28894L13.6442 8.16304ZM13.0067 7.79875L13.1307 7.58169L13.1304 7.58149L13.0067 7.79875ZM12.3944 7.855L12.2332 7.66391L12.2327 7.66436L12.3944 7.855ZM11.5292 8.34357L11.612 8.57948L11.6123 8.57938L11.5292 8.34357ZM11.1708 8.84875L10.9208 8.84859V8.84875H11.1708ZM11.1708 9.36089L11.1003 9.60075L11.4208 9.69493V9.36089H11.1708ZM10.6389 9.04696L10.4621 9.22373L10.463 9.22461L10.6389 9.04696ZM7.41011 5.81768L7.23288 5.99401L7.23332 5.99444L7.41011 5.81768ZM7.05279 4.73125L6.80565 4.69351L6.8055 4.69455L7.05279 4.73125ZM7.09457 4.39161L6.8785 4.26587L6.85097 4.31317L6.84573 4.36764L7.09457 4.39161ZM8.28654 13.5207L8.16223 13.7376L8.37761 13.861L8.50256 13.6465L8.28654 13.5207ZM7.64904 13.1554L7.77335 12.9384L7.77225 12.9378L7.64904 13.1554ZM7.03672 13.2121L6.8756 13.021L6.87499 13.0215L7.03672 13.2121ZM6.17154 13.7007L6.25429 13.9366L6.25458 13.9365L6.17154 13.7007ZM5.81315 14.2059L5.56315 14.2057V14.2059H5.81315ZM5.81315 14.9286V15.1786H6.06315V14.9286H5.81315ZM4.74172 14.9286H4.49172V15.1786H4.74172V14.9286ZM4.74172 14.2059H4.99172V14.2057L4.74172 14.2059ZM4.38333 13.7007L4.46608 13.4648L4.46517 13.4645L4.38333 13.7007ZM3.51815 13.2121L3.35693 13.4032L3.35812 13.4042L3.51815 13.2121ZM2.90529 13.1554L2.78193 12.9379L2.78098 12.9384L2.90529 13.1554ZM2.26779 13.5207L2.0517 13.6464L2.17661 13.8611L2.3921 13.7376L2.26779 13.5207ZM1.72672 12.5907L1.60247 12.3738L1.38406 12.4989L1.51063 12.7164L1.72672 12.5907ZM2.35619 12.2302L2.23219 12.0131L2.23193 12.0132L2.35619 12.2302ZM2.61708 11.6666L2.86283 11.6207L2.86274 11.6203L2.61708 11.6666ZM2.61761 10.6905L2.86328 10.7369L2.86339 10.7363L2.61761 10.6905ZM2.35619 10.127L2.23201 10.3439L2.23242 10.3442L2.35619 10.127ZM1.72619 9.76643L1.51021 9.64052L1.38329 9.85824L1.60201 9.98341L1.72619 9.76643ZM2.26833 8.83643L2.39264 8.61952L2.17733 8.49613L2.05235 8.71052L2.26833 8.83643ZM2.90583 9.20178L2.78152 9.41869L2.7825 9.41925L2.90583 9.20178ZM3.51815 9.145L3.35811 8.95291L3.35555 8.9551L3.51815 9.145ZM4.38333 8.65643L4.46517 8.89266L4.46608 8.89234L4.38333 8.65643ZM4.74172 8.15125L4.99172 8.15141V8.15125H4.74172ZM4.74172 7.63964L4.81296 7.40001L4.49172 7.30451V7.63964H4.74172ZM5.27368 7.95304L5.45047 7.77627L5.45014 7.77594L5.27368 7.95304ZM8.50243 11.1823L8.67937 11.0057L8.67922 11.0056L8.50243 11.1823ZM8.85975 12.2687L9.10689 12.3065L9.10698 12.3058L8.85975 12.2687ZM8.81796 12.6084L9.03399 12.7342L9.06156 12.6869L9.06681 12.6324L8.81796 12.6084ZM13.6951 11.4137L13.8718 11.2369L13.8707 11.2358L13.6951 11.4137ZM13.2114 11.2675L13.1637 11.0221L13.1624 11.0223L13.2114 11.2675ZM10.7235 13.7554L10.9686 13.8044L10.9687 13.8043L10.7235 13.7554ZM10.8697 14.2391L10.6929 14.4158L10.693 14.4159L10.8697 14.2391ZM11.5555 14.9248L11.5374 15.1742L12.2069 15.2227L11.7322 14.748L11.5555 14.9248ZM10.528 14.4491L10.7065 14.2739L10.702 14.2697L10.528 14.4491ZM10.2799 14.1941L10.0909 14.3578L10.0937 14.3609L10.2799 14.1941ZM9.91832 12.4289L10.1655 12.4663L10.1656 12.466L9.91832 12.4289ZM9.26046 10.4248L9.43766 10.2485L9.43725 10.2481L9.26046 10.4248ZM6.03118 7.195L5.85408 7.37145L5.85439 7.37176L6.03118 7.195ZM4.02708 6.53768L4.06391 6.78496L4.06527 6.78475L4.02708 6.53768ZM2.26297 6.17715L2.097 6.36413L2.09947 6.36627L2.26297 6.17715ZM1.99672 5.9184L2.17455 5.74266L2.17319 5.74131L1.99672 5.9184ZM1.53065 4.90054L1.70736 4.72369L1.23331 4.25001L1.28129 4.91844L1.53065 4.90054ZM2.2169 5.58625L2.39405 5.40985L2.39361 5.40941L2.2169 5.58625ZM2.70065 5.7325L2.74795 5.97799L2.74964 5.97766L2.70065 5.7325ZM5.1885 3.24465L4.94337 3.19557L4.94335 3.19566L5.1885 3.24465ZM5.04225 2.7609L5.21914 2.58423L5.21903 2.58412L5.04225 2.7609ZM4.35654 2.07519L4.37461 1.82584L3.70512 1.77732L4.17976 2.25196L4.35654 2.07519ZM5.38404 2.5509L5.20555 2.72605L5.20996 2.73033L5.38404 2.5509ZM5.63208 2.8059L5.82106 2.64219L5.81833 2.63914L5.63208 2.8059ZM5.99368 4.57108L5.74649 4.5337L5.74644 4.53405L5.99368 4.57108ZM6.65154 6.57518L6.47434 6.75153L6.47475 6.75194L6.65154 6.57518ZM9.88082 9.805L10.0577 9.62836L10.0576 9.62824L9.88082 9.805ZM11.8849 10.4623L11.8479 10.2151L11.847 10.2152L11.8849 10.4623ZM13.649 10.8229L13.815 10.6359L13.8124 10.6336L13.649 10.8229ZM13.9153 11.0816L13.7375 11.2573L13.7383 11.2582L13.9153 11.0816ZM14.3814 12.0995L14.2046 12.2763L14.6784 12.7497L14.6307 12.0816L14.3814 12.0995ZM14.8456 10.1423C14.7394 10.0364 14.6313 9.93242 14.5212 9.83051L14.1815 10.1973C14.287 10.2951 14.3907 10.3947 14.4925 10.4963L14.8456 10.1423ZM14.5152 9.8251C13.9441 9.3296 13.2714 9.09053 12.478 9.09053V9.59053C13.1599 9.59053 13.7139 9.79183 14.1875 10.2028L14.5152 9.8251ZM12.478 9.09053C12.3932 9.09053 12.3019 9.09719 12.2272 9.1017L12.2573 9.60079C12.3423 9.59566 12.4127 9.59053 12.478 9.59053V9.09053ZM12.4922 9.35125V9.20875H11.9922V9.35125H12.4922ZM12.3473 9.43559C12.5494 9.34197 12.7413 9.2329 12.9218 9.11009L12.6405 8.6967C12.4825 8.80424 12.3144 8.89982 12.1372 8.98191L12.3473 9.43559ZM12.6568 9.12024L13.4485 9.57452L13.6974 9.14083L12.9056 8.68655L12.6568 9.12024ZM13.4483 9.57437C13.6285 9.67805 13.8425 9.70598 14.0432 9.65203L13.9135 9.16916C13.8406 9.18873 13.763 9.1786 13.6976 9.14099L13.4483 9.57437ZM14.0432 9.65203C14.244 9.59808 14.4151 9.46665 14.5191 9.28661L14.0861 9.0366C14.0484 9.10191 13.9863 9.14959 13.9135 9.16916L14.0432 9.65203ZM14.5186 9.28745L15.5997 7.43174L15.1677 7.18005L14.0866 9.03576L14.5186 9.28745ZM15.5994 7.43224C15.6519 7.34259 15.6861 7.2434 15.6999 7.14043L15.2044 7.07369C15.1994 7.11104 15.187 7.14703 15.1679 7.17955L15.5994 7.43224ZM15.6999 7.14043C15.7138 7.03747 15.7071 6.93277 15.6802 6.83242L15.1973 6.96196C15.207 6.99836 15.2095 7.03634 15.2044 7.07369L15.6999 7.14043ZM15.6802 6.83242C15.6533 6.73208 15.6067 6.63807 15.5432 6.55587L15.1475 6.86163C15.1706 6.89145 15.1875 6.92555 15.1973 6.96196L15.6802 6.83242ZM15.5432 6.55587C15.4796 6.47366 15.4004 6.40489 15.3101 6.35355L15.063 6.78824C15.0958 6.80686 15.1245 6.83181 15.1475 6.86163L15.5432 6.55587ZM15.3106 6.35385L14.5252 5.90492L14.2771 6.33901L15.0625 6.78794L15.3106 6.35385ZM14.6502 6.14379C14.669 5.92929 14.669 5.71357 14.6502 5.49908L14.1521 5.54272C14.1684 5.72817 14.1684 5.91469 14.1521 6.10015L14.6502 6.14379ZM14.5252 5.73794L15.3106 5.28901L15.0625 4.85493L14.2771 5.30385L14.5252 5.73794ZM15.3109 5.28881C15.4008 5.23723 15.4797 5.1684 15.5429 5.08626L15.1467 4.7813C15.1236 4.81123 15.0949 4.83632 15.0621 4.85513L15.3109 5.28881ZM15.5429 5.08626C15.6061 5.00413 15.6525 4.91031 15.6793 4.81021L15.1964 4.68067C15.1866 4.71716 15.1697 4.75136 15.1467 4.7813L15.5429 5.08626ZM15.6793 4.81021C15.7062 4.7101 15.713 4.60567 15.6993 4.50293L15.2037 4.56867C15.2087 4.60612 15.2062 4.64419 15.1964 4.68067L15.6793 4.81021ZM15.6993 4.50293C15.6857 4.40018 15.6519 4.30114 15.5999 4.2115L15.1674 4.46244C15.1864 4.49512 15.1987 4.53122 15.2037 4.56867L15.6993 4.50293ZM15.5997 4.21113L14.5186 2.35541L14.0866 2.6071L15.1677 4.46281L15.5997 4.21113ZM14.5189 2.35582C14.4147 2.17621 14.2436 2.04515 14.0431 1.99126L13.9134 2.47413C13.9863 2.49372 14.0485 2.54138 14.0863 2.6067L14.5189 2.35582ZM14.0431 1.99126C13.8426 1.93738 13.6289 1.96505 13.4487 2.06825L13.6972 2.50213C13.7627 2.4646 13.8404 2.45454 13.9134 2.47413L14.0431 1.99126ZM13.4487 2.06828L12.6569 2.52203L12.9055 2.95584L13.6973 2.50209L13.4487 2.06828ZM12.9215 2.53205C12.7393 2.4084 12.5473 2.29965 12.3476 2.20685L12.1369 2.66031C12.3123 2.74178 12.4808 2.83726 12.6408 2.94582L12.9215 2.53205ZM12.4922 2.43358V1.53572H11.9922V2.43358H12.4922ZM12.4922 1.53572C12.4922 1.32734 12.4095 1.12749 12.2621 0.98014L11.9086 1.33369C11.9621 1.38727 11.9922 1.45995 11.9922 1.53572H12.4922ZM12.2621 0.98014C12.1148 0.832789 11.9149 0.750009 11.7065 0.750009V1.25001C11.7823 1.25001 11.855 1.28011 11.9086 1.33369L12.2621 0.98014ZM11.7065 0.750009H9.56368V1.25001H11.7065V0.750009ZM9.56368 0.750009C9.35529 0.750009 9.15544 0.832789 9.00809 0.98014L9.36165 1.33369C9.41523 1.28011 9.4879 1.25001 9.56368 1.25001V0.750009ZM9.00809 0.98014C8.86074 1.12749 8.77796 1.32734 8.77796 1.53572H9.27796C9.27796 1.45995 9.30807 1.38727 9.36165 1.33369L9.00809 0.98014ZM8.77796 1.53572V2.43411H9.27796V1.53572H8.77796ZM8.92287 2.20728C8.72079 2.3009 8.52891 2.40996 8.3484 2.53278L8.62967 2.94617C8.78773 2.83862 8.95585 2.74305 9.13305 2.66095L8.92287 2.20728ZM8.61345 2.52263L7.82166 2.06834L7.57284 2.50203L8.36462 2.95632L8.61345 2.52263ZM7.82161 2.06831C7.64153 1.96505 7.4279 1.93725 7.22739 1.99099L7.35681 2.47395C7.42973 2.45441 7.50741 2.46451 7.57289 2.50206L7.82161 2.06831ZM7.22739 1.99099C7.02688 2.04472 6.85578 2.17562 6.75147 2.3551L7.18375 2.60635C7.22169 2.54109 7.2839 2.49349 7.35681 2.47395L7.22739 1.99099ZM6.75166 2.35475L6.62042 2.57975L7.0523 2.83169L7.18355 2.60669L6.75166 2.35475ZM7.06177 2.5976C6.94815 2.36072 6.80355 2.13998 6.63177 1.94119L6.25345 2.26811C6.39626 2.43338 6.51648 2.6169 6.61095 2.81384L7.06177 2.5976ZM6.62536 1.93406C6.52168 1.82299 6.41607 1.71374 6.30858 1.60636L5.95521 1.96009C6.05858 2.06336 6.16015 2.16843 6.25986 2.27524L6.62536 1.93406ZM6.3092 1.60697C6.03831 1.33446 5.71604 1.11841 5.36107 0.971306L5.16966 1.43322C5.46353 1.555 5.73033 1.73387 5.95459 1.95947L6.3092 1.60697ZM5.36107 0.971306C5.0061 0.824206 4.62548 0.748989 4.24123 0.75001L4.24256 1.25001C4.56067 1.24916 4.87578 1.31143 5.16966 1.43322L5.36107 0.971306ZM4.2419 0.750009C3.79042 0.750009 3.33864 0.857155 2.93505 1.05866L3.15839 1.506C3.49302 1.33893 3.86838 1.25001 4.2419 1.25001V0.750009ZM2.93501 1.05868C2.82359 1.11433 2.72699 1.19568 2.65318 1.29601L3.05595 1.59229C3.08278 1.5558 3.11791 1.52622 3.15843 1.50598L2.93501 1.05868ZM2.65318 1.29601C2.57938 1.39634 2.53048 1.51277 2.51053 1.63572L3.00407 1.71582C3.01133 1.67111 3.02911 1.62877 3.05595 1.59229L2.65318 1.29601ZM2.51053 1.63572C2.49058 1.75866 2.50014 1.88459 2.53842 2.00311L3.01421 1.84941C3.00029 1.80632 2.99682 1.76052 3.00407 1.71582L2.51053 1.63572ZM2.53842 2.00311C2.57671 2.12163 2.64262 2.22935 2.73073 2.31739L3.08414 1.9637C3.05211 1.93168 3.02814 1.89251 3.01421 1.84941L2.53842 2.00311ZM2.73066 2.31732L3.8953 3.48196L4.24885 3.12841L3.08421 1.96377L2.73066 2.31732ZM3.83252 3.23368C3.6531 3.83475 3.29204 4.19549 2.69058 4.3755L2.83394 4.85451C3.5964 4.62631 4.08392 4.13954 4.31163 3.37669L3.83252 3.23368ZM2.93899 4.43819L1.77382 3.27355L1.42034 3.62718L2.58552 4.79182L2.93899 4.43819ZM1.77393 3.27366C1.68589 3.18555 1.57817 3.11964 1.45964 3.08135L1.30595 3.55714C1.34905 3.57106 1.38822 3.59503 1.42023 3.62707L1.77393 3.27366ZM1.45964 3.08135C1.34112 3.04306 1.2152 3.0335 1.09225 3.05346L1.17235 3.547C1.21706 3.53974 1.26285 3.54322 1.30595 3.55714L1.45964 3.08135ZM1.09225 3.05346C0.96931 3.07341 0.852872 3.12231 0.752543 3.19611L1.04882 3.59887C1.08531 3.57204 1.12765 3.55426 1.17235 3.547L1.09225 3.05346ZM0.752543 3.19611C0.652213 3.26992 0.570866 3.36651 0.515213 3.47794L0.962522 3.70136C0.982759 3.66084 1.01234 3.62571 1.04882 3.59887L0.752543 3.19611ZM0.515337 3.47769C0.2399 4.02763 0.145078 4.65047 0.244383 5.25745L0.737823 5.17672C0.655516 4.67364 0.734107 4.15741 0.962397 3.70161L0.515337 3.47769ZM0.244383 5.25745C0.343689 5.86444 0.632055 6.42459 1.06838 6.85807L1.42078 6.50336C1.05914 6.14408 0.82013 5.67981 0.737823 5.17672L0.244383 5.25745ZM1.06674 6.85642C1.10981 6.90002 1.33748 7.12314 1.39903 7.17589L1.72442 6.79626C1.68096 6.75901 1.46721 6.55035 1.42243 6.50501L1.06674 6.85642ZM1.39788 7.1749C1.96894 7.6704 2.64171 7.90946 3.43511 7.90946V7.40946C2.75316 7.40946 2.19915 7.20817 1.72557 6.79725L1.39788 7.1749ZM3.43511 7.90946C3.51982 7.90946 3.61119 7.90281 3.6859 7.8983L3.65575 7.39921C3.57082 7.40434 3.5004 7.40946 3.43511 7.40946V7.90946ZM3.42083 7.64875V7.79125H3.92083V7.64875H3.42083ZM3.56533 7.5646C3.36569 7.65753 3.17376 7.76617 2.99134 7.8895L3.27139 8.30371C3.43186 8.19522 3.60071 8.09965 3.77633 8.0179L3.56533 7.5646ZM3.25565 7.87969L2.4628 7.42541L2.21422 7.85924L3.00708 8.31352L3.25565 7.87969ZM2.4626 7.42529C2.28255 7.32235 2.0691 7.29482 1.86883 7.34872L1.99876 7.83154C2.0715 7.81197 2.14903 7.82196 2.21442 7.85935L2.4626 7.42529ZM1.86883 7.34872C1.66856 7.40262 1.49775 7.53356 1.39368 7.71295L1.82619 7.96383C1.86399 7.89867 1.92602 7.85112 1.99876 7.83154L1.86883 7.34872ZM1.39389 7.7126L0.313359 9.56831L0.745447 9.8199L1.82598 7.96419L1.39389 7.7126ZM0.313423 9.5682C0.261161 9.65785 0.227176 9.75696 0.213428 9.85982L0.709021 9.92606C0.71402 9.88865 0.726379 9.85261 0.745383 9.82001L0.313423 9.5682ZM0.213428 9.85982C0.199681 9.96267 0.206444 10.0672 0.233327 10.1675L0.716257 10.0379C0.706481 10.0015 0.704022 9.96346 0.709021 9.92606L0.213428 9.85982ZM0.233327 10.1675C0.26021 10.2677 0.30668 10.3616 0.370056 10.4438L0.765976 10.1384C0.742931 10.1085 0.726033 10.0744 0.716257 10.0379L0.233327 10.1675ZM0.370056 10.4438C0.433432 10.5259 0.512456 10.5947 0.602566 10.6462L0.850525 10.212C0.817757 10.1933 0.789021 10.1683 0.765976 10.1384L0.370056 10.4438ZM0.602479 10.6461L1.38784 11.0951L1.63597 10.661L0.850612 10.2121L0.602479 10.6461ZM1.26286 10.8562C1.24406 11.0707 1.24406 11.2864 1.26286 11.5009L1.76095 11.4573C1.7447 11.2718 1.7447 11.0853 1.76095 10.8999L1.26286 10.8562ZM1.38784 11.2621L0.602479 11.711L0.850612 12.1451L1.63597 11.6961L1.38784 11.2621ZM0.602129 11.7112C0.512231 11.7628 0.433409 11.8316 0.370193 11.9137L0.766421 12.2187C0.789463 12.1888 0.818193 12.1637 0.850962 12.1449L0.602129 11.7112ZM0.370193 11.9137C0.306976 11.9959 0.260611 12.0897 0.233761 12.1898L0.716691 12.3193C0.726478 12.2828 0.743378 12.2486 0.766421 12.2187L0.370193 11.9137ZM0.233761 12.1898C0.20691 12.2899 0.200103 12.3943 0.21373 12.4971L0.709389 12.4313C0.704422 12.3939 0.706903 12.3558 0.716691 12.3193L0.233761 12.1898ZM0.21373 12.4971C0.227358 12.5998 0.261152 12.6989 0.31317 12.7885L0.745636 12.5376C0.726675 12.5049 0.714357 12.4688 0.709389 12.4313L0.21373 12.4971ZM0.313359 12.7888L1.39389 14.6445L1.82598 14.3929L0.745447 12.5372L0.313359 12.7888ZM1.39356 14.644C1.49751 14.8236 1.66838 14.9547 1.86877 15.0086L1.9987 14.5258C1.92601 14.5062 1.86402 14.4587 1.82631 14.3935L1.39356 14.644ZM1.86877 15.0086C2.06916 15.0626 2.28276 15.0349 2.46281 14.9317L2.2142 14.4979C2.14889 14.5353 2.0714 14.5454 1.9987 14.5258L1.86877 15.0086ZM2.46268 14.9318L3.25554 14.478L3.00719 14.0441L2.21433 14.4978L2.46268 14.9318ZM2.99118 14.4681C3.1719 14.5904 3.36389 14.6986 3.56469 14.7928L3.77697 14.3401C3.59848 14.2564 3.4294 14.161 3.27155 14.0541L2.99118 14.4681ZM3.42083 14.5664V15.4643H3.92083V14.5664H3.42083ZM3.42083 15.4643C3.42083 15.6727 3.50361 15.8725 3.65096 16.0199L4.00451 15.6663C3.95093 15.6127 3.92083 15.5401 3.92083 15.4643H3.42083ZM3.65096 16.0199C3.79831 16.1672 3.99816 16.25 4.20654 16.25V15.75C4.13076 15.75 4.05809 15.7199 4.00451 15.6663L3.65096 16.0199ZM4.20654 16.25H6.3494V15.75H4.20654V16.25ZM6.3494 16.25C6.55778 16.25 6.75763 16.1672 6.90498 16.0199L6.55143 15.6663C6.49784 15.7199 6.42517 15.75 6.3494 15.75V16.25ZM6.90498 16.0199C7.05233 15.8725 7.13511 15.6727 7.13511 15.4643H6.63511C6.63511 15.5401 6.60501 15.6127 6.55143 15.6663L6.90498 16.0199ZM7.13511 15.4643V14.5659H6.63511V15.4643H7.13511ZM6.9902 14.7927C7.19228 14.6991 7.38416 14.59 7.56467 14.4672L7.28341 14.0538C7.12534 14.1614 6.95722 14.257 6.78002 14.339L6.9902 14.7927ZM7.29962 14.4774L8.09141 14.9317L8.34024 14.498L7.54845 14.0437L7.29962 14.4774ZM8.09103 14.9314C8.27113 15.0352 8.48504 15.0632 8.6858 15.0094L8.55637 14.5265C8.48354 14.546 8.40594 14.5358 8.34061 14.4982L8.09103 14.9314ZM8.6858 15.0094C8.88656 14.9556 9.05777 14.8244 9.16186 14.6445L8.72907 14.3941C8.69131 14.4593 8.6292 14.507 8.55637 14.5265L8.6858 15.0094ZM9.16141 14.6452L9.29266 14.4202L8.86077 14.1683L8.72952 14.3933L9.16141 14.6452ZM8.85182 14.4035C8.95856 14.6233 9.09545 14.8442 9.28149 15.059L9.65944 14.7317C9.50584 14.5543 9.39201 14.3713 9.30161 14.1851L8.85182 14.4035ZM9.28148 15.059C9.33365 15.1193 9.55569 15.3465 9.60732 15.3964L9.95503 15.0371C9.90703 14.9907 9.69728 14.7754 9.65945 14.7317L9.28148 15.059ZM9.60388 15.393C9.87477 15.6655 10.197 15.8816 10.552 16.0287L10.7434 15.5668C10.4495 15.445 10.1827 15.2661 9.95848 15.0405L9.60388 15.393ZM10.552 16.0287C10.907 16.1758 11.2876 16.251 11.6718 16.25L11.6705 15.75C11.3524 15.7508 11.0373 15.6886 10.7434 15.5668L10.552 16.0287ZM11.6712 16.25C12.1227 16.25 12.5744 16.1428 12.978 15.9413L12.7547 15.494C12.4201 15.6611 12.0447 15.75 11.6712 15.75V16.25ZM12.9781 15.9413C13.0895 15.8857 13.1861 15.8043 13.2599 15.704L12.8571 15.4077C12.8303 15.4442 12.7952 15.4738 12.7546 15.494L12.9781 15.9413ZM13.2599 15.704C13.3337 15.6037 13.3826 15.4872 13.4025 15.3643L12.909 15.2842C12.9017 15.3289 12.884 15.3712 12.8571 15.4077L13.2599 15.704ZM13.4025 15.3643C13.4225 15.2413 13.4129 15.1154 13.3747 14.9969L12.8989 15.1506C12.9128 15.1937 12.9163 15.2395 12.909 15.2842L13.4025 15.3643ZM13.3747 14.9969C13.3364 14.8784 13.2705 14.7706 13.1823 14.6826L12.8289 15.0363C12.861 15.0683 12.8849 15.1075 12.8989 15.1506L13.3747 14.9969ZM13.1824 14.6827L12.0178 13.518L11.6642 13.8716L12.8289 15.0362L13.1824 14.6827ZM12.0806 13.7663C12.26 13.1652 12.621 12.8045 13.2225 12.6245L13.0791 12.1455C12.3167 12.3737 11.8292 12.8605 11.6014 13.6233L12.0806 13.7663ZM12.974 12.5618L14.1387 13.7264L14.4922 13.3729L13.3276 12.2082L12.974 12.5618ZM14.1386 13.7263C14.2266 13.8145 14.3344 13.8804 14.4529 13.9187L14.6066 13.4429C14.5635 13.4289 14.5243 13.405 14.4923 13.3729L14.1386 13.7263ZM14.4529 13.9187C14.5714 13.9569 14.6973 13.9665 14.8203 13.9465L14.7402 13.453C14.6955 13.4603 14.6497 13.4568 14.6066 13.4429L14.4529 13.9187ZM14.8203 13.9465C14.9432 13.9266 15.0597 13.8777 15.16 13.8039L14.8637 13.4011C14.8272 13.428 14.7849 13.4457 14.7402 13.453L14.8203 13.9465ZM15.16 13.8039C15.2603 13.7301 15.3417 13.6335 15.3973 13.5221L14.95 13.2986C14.9298 13.3392 14.9002 13.3743 14.8637 13.4011L15.16 13.8039ZM15.3972 13.5223C15.6726 12.9724 15.7675 12.3495 15.6682 11.7425L15.1747 11.8233C15.257 12.3264 15.1784 12.8426 14.9501 13.2984L15.3972 13.5223ZM15.6682 11.7425C15.5688 11.1356 15.2805 10.5754 14.8442 10.1419L14.4918 10.4966C14.8534 10.8559 15.0924 11.3202 15.1747 11.8233L15.6682 11.7425ZM14.668 10.5693H14.669V10.0693H14.668V10.5693ZM7.50116 3.6962L8.13866 4.06155L8.38727 3.62775L7.74977 3.26239L7.50116 3.6962ZM8.13964 4.06211C8.42472 4.22379 8.78468 4.19457 9.03789 3.97776L8.71269 3.59797C8.62303 3.67473 8.49228 3.6873 8.38629 3.62719L8.13964 4.06211ZM9.03531 3.97994C9.26867 3.78552 9.5353 3.63495 9.8223 3.53552L9.65862 3.06307C9.3146 3.18225 8.99499 3.36274 8.71526 3.59579L9.03531 3.97994ZM9.82296 3.53529C9.97667 3.48156 10.1099 3.3814 10.2042 3.24867L9.79659 2.95907C9.7623 3.00734 9.71385 3.04376 9.65796 3.0633L9.82296 3.53529ZM10.2042 3.24867C10.2985 3.11594 10.3492 2.95718 10.3494 2.79436L9.84939 2.79387C9.84933 2.85308 9.83088 2.91081 9.79659 2.95907L10.2042 3.24867ZM10.3494 2.79411V2.07144H9.84939V2.79411H10.3494ZM10.0994 2.32144H11.1708V1.82144H10.0994V2.32144ZM10.9208 2.07144V2.79411H11.4208V2.07144H10.9208ZM10.9208 2.79427C10.9209 2.957 10.9715 3.11568 11.0657 3.2484L11.4735 2.9591C11.4393 2.91083 11.4209 2.85313 11.4208 2.79396L10.9208 2.79427ZM11.0657 3.2484C11.1599 3.38112 11.2929 3.48134 11.4465 3.5352L11.612 3.06338C11.5561 3.0438 11.5077 3.00736 11.4735 2.9591L11.0657 3.2484ZM11.4462 3.5351C11.7423 3.63939 12.014 3.79303 12.2327 3.9785L12.5561 3.59722C12.2872 3.36912 11.9611 3.18634 11.6123 3.06349L11.4462 3.5351ZM12.2321 3.97801C12.4855 4.19434 12.8459 4.22398 13.1308 4.06197L12.8837 3.62733C12.7786 3.6871 12.6472 3.67496 12.5567 3.59771L12.2321 3.97801ZM13.1314 4.06163L13.7689 3.69681L13.5206 3.26285L12.8831 3.62767L13.1314 4.06163ZM13.4287 3.60555L13.9697 4.53555L14.4019 4.28411L13.8608 3.35411L13.4287 3.60555ZM14.0617 4.19281L13.4322 4.55281L13.6805 4.98684L14.3099 4.62684L14.0617 4.19281ZM13.4324 4.55274C13.2906 4.6337 13.1776 4.7568 13.109 4.90493L13.5628 5.11497C13.5877 5.06111 13.6288 5.01635 13.6803 4.98691L13.4324 4.55274ZM13.109 4.90493C13.0405 5.05305 13.0197 5.21886 13.0497 5.37931L13.5412 5.28748C13.5303 5.22913 13.5378 5.16884 13.5628 5.11497L13.109 4.90493ZM13.0498 5.37975C13.0793 5.53616 13.0931 5.68079 13.0931 5.82143H13.5931C13.5931 5.64708 13.5759 5.47135 13.5411 5.28704L13.0498 5.37975ZM13.0931 5.82143C13.0931 5.96156 13.0789 6.10614 13.0493 6.26311L13.5406 6.35582C13.5753 6.17208 13.5931 5.9963 13.5931 5.82143H13.0931ZM13.0492 6.26368C13.0192 6.42421 13.0401 6.59008 13.1088 6.73822L13.5624 6.52782C13.5374 6.47395 13.5298 6.41363 13.5407 6.35526L13.0492 6.26368ZM13.1088 6.73822C13.1775 6.88636 13.2907 7.0094 13.4326 7.09025L13.6801 6.65583C13.6285 6.62643 13.5874 6.58168 13.5624 6.52782L13.1088 6.73822ZM13.4323 7.0901L14.0623 7.4501L14.3104 7.01598L13.6804 6.65598L13.4323 7.0901ZM13.9704 7.10713L13.4282 8.03713L13.8602 8.28894L14.4023 7.35894L13.9704 7.10713ZM13.7682 7.94598L13.1307 7.58169L12.8827 8.01581L13.5202 8.3801L13.7682 7.94598ZM13.1304 7.58149C12.9904 7.50178 12.8293 7.46694 12.6688 7.48168L12.7146 7.97958C12.7731 7.9742 12.8319 7.98692 12.883 8.01601L13.1304 7.58149ZM12.6688 7.48168C12.5084 7.49642 12.3563 7.56002 12.2332 7.66392L12.5556 8.04609C12.6005 8.00817 12.656 7.98496 12.7146 7.97958L12.6688 7.48168ZM12.2327 7.66436C12.014 7.84983 11.7423 8.00348 11.4462 8.10777L11.6123 8.57938C11.9611 8.45652 12.2872 8.27374 12.5561 8.04564L12.2327 7.66436ZM11.4465 8.10766C11.2929 8.16153 11.1599 8.26174 11.0657 8.39446L11.4735 8.68377C11.5077 8.63551 11.5561 8.59907 11.612 8.57948L11.4465 8.10766ZM11.0657 8.39446C10.9715 8.52718 10.9209 8.68586 10.9208 8.84859L11.4208 8.84891C11.4209 8.78973 11.4393 8.73203 11.4735 8.68377L11.0657 8.39446ZM10.9208 8.84875V9.36089H11.4208V8.84875H10.9208ZM11.2413 9.12103C11.0805 9.07377 10.9339 8.98727 10.8148 8.86931L10.463 9.22461C10.641 9.40087 10.86 9.53012 11.1003 9.60075L11.2413 9.12103ZM10.8156 8.8702L7.5869 5.64092L7.23332 5.99444L10.4621 9.22373L10.8156 8.8702ZM7.58734 5.64136C7.47475 5.5282 7.39016 5.39031 7.34028 5.23867L6.86531 5.39489C6.93951 5.62049 7.06538 5.82564 7.23288 5.99401L7.58734 5.64136ZM7.34028 5.23867C7.29041 5.08704 7.27665 4.92585 7.30008 4.76796L6.8055 4.69455C6.77063 4.92947 6.79112 5.16929 6.86531 5.39489L7.34028 5.23867ZM7.29992 4.76899C7.31731 4.65516 7.33178 4.53642 7.34342 4.41558L6.84573 4.36764C6.83487 4.48037 6.82148 4.58985 6.80565 4.69352L7.29992 4.76899ZM7.31065 4.51735L7.84154 3.60503L7.40939 3.35355L6.8785 4.26587L7.31065 4.51735ZM8.41085 13.3038L7.77335 12.9384L7.52473 13.3723L8.16223 13.7376L8.41085 13.3038ZM7.77225 12.9378C7.63218 12.8585 7.47118 12.8239 7.31089 12.8388L7.35706 13.3367C7.41569 13.3312 7.47459 13.3439 7.52582 13.3729L7.77225 12.9378ZM7.31089 12.8388C7.15059 12.8537 6.99869 12.9172 6.8756 13.021L7.19783 13.4033C7.24286 13.3653 7.29842 13.3421 7.35706 13.3367L7.31089 12.8388ZM6.87499 13.0215C6.65636 13.207 6.38464 13.3606 6.0885 13.4649L6.25458 13.9365C6.60344 13.8137 6.92957 13.6309 7.19845 13.4028L6.87499 13.0215ZM6.08879 13.4648C5.93523 13.5187 5.80219 13.6189 5.70803 13.7516L6.11583 14.0409C6.15007 13.9926 6.19845 13.9562 6.25429 13.9366L6.08879 13.4648ZM5.70803 13.7516C5.61387 13.8843 5.56325 14.043 5.56315 14.2057L6.06315 14.206C6.06318 14.1469 6.08159 14.0892 6.11583 14.0409L5.70803 13.7516ZM5.56315 14.2059V14.9286H6.06315V14.2059H5.56315ZM5.81315 14.6786H4.74172V15.1786H5.81315V14.6786ZM4.99172 14.9286V14.2059H4.49172V14.9286H4.99172ZM4.99172 14.2057C4.99162 14.043 4.94099 13.8843 4.84683 13.7516L4.43903 14.0409C4.47327 14.0892 4.49168 14.1469 4.49172 14.206L4.99172 14.2057ZM4.84683 13.7516C4.75268 13.6189 4.61963 13.5187 4.46608 13.4648L4.30058 13.9366C4.35642 13.9562 4.40479 13.9926 4.43903 14.0409L4.84683 13.7516ZM4.46517 13.4645C4.17816 13.3651 3.91153 13.2145 3.67817 13.0201L3.35812 13.4042C3.63785 13.6373 3.95746 13.8177 4.30149 13.9369L4.46517 13.4645ZM3.67936 13.0211C3.5562 12.9171 3.40416 12.8535 3.2437 12.8386L3.19757 13.3365C3.25626 13.3419 3.31188 13.3652 3.35693 13.4032L3.67936 13.0211ZM3.2437 12.8386C3.08325 12.8237 2.92209 12.8584 2.78193 12.9379L3.02866 13.3728C3.07993 13.3437 3.13888 13.331 3.19757 13.3365L3.2437 12.8386ZM2.78098 12.9384L2.14348 13.3038L2.3921 13.7376L3.0296 13.3723L2.78098 12.9384ZM2.48388 13.395L1.94281 12.465L1.51063 12.7164L2.0517 13.6464L2.48388 13.395ZM1.85098 12.8076L2.48044 12.4471L2.23193 12.0132L1.60247 12.3738L1.85098 12.8076ZM2.48018 12.4473C2.62192 12.3663 2.73492 12.2432 2.8035 12.0951L2.34976 11.885C2.32482 11.9389 2.28373 11.9837 2.23219 12.0131L2.48018 12.4473ZM2.8035 12.0951C2.87207 11.9469 2.89281 11.7811 2.86283 11.6207L2.37133 11.7125C2.38223 11.7709 2.37469 11.8312 2.34976 11.885L2.8035 12.0951ZM2.86274 11.6203C2.83323 11.4638 2.8194 11.3192 2.8194 11.1786H2.3194C2.3194 11.3529 2.33664 11.5286 2.37141 11.713L2.86274 11.6203ZM2.8194 11.1786C2.8194 11.0384 2.83366 10.8939 2.86328 10.7369L2.37195 10.6442C2.33728 10.8279 2.3194 11.0037 2.3194 11.1786H2.8194ZM2.86339 10.7363C2.89329 10.5758 2.87244 10.4099 2.80372 10.2618L2.35015 10.4722C2.37514 10.5261 2.38272 10.5864 2.37184 10.6447L2.86339 10.7363ZM2.80372 10.2618C2.73501 10.1136 2.62184 9.9906 2.47996 9.90975L2.23242 10.3442C2.28401 10.3736 2.32516 10.4183 2.35015 10.4722L2.80372 10.2618ZM2.48036 9.90998L1.85036 9.54945L1.60201 9.98341L2.23201 10.3439L2.48036 9.90998ZM1.94217 9.89233L2.48431 8.96233L2.05235 8.71052L1.51021 9.64052L1.94217 9.89233ZM2.14402 9.05333L2.78152 9.41869L3.03014 8.98488L2.39264 8.61952L2.14402 9.05333ZM2.7825 9.41925C3.06758 9.58092 3.42755 9.5517 3.68075 9.3349L3.35555 8.9551C3.26589 9.03187 3.13515 9.04443 3.02916 8.98432L2.7825 9.41925ZM3.67817 9.33707C3.91153 9.14265 4.17816 8.99208 4.46517 8.89265L4.30149 8.4202C3.95746 8.53939 3.63785 8.71987 3.35812 8.95293L3.67817 9.33707ZM4.46608 8.89234C4.61963 8.83847 4.75268 8.73826 4.84683 8.60554L4.43903 8.31623C4.40479 8.36449 4.35642 8.40093 4.30058 8.42052L4.46608 8.89234ZM4.84683 8.60554C4.94099 8.47282 4.99162 8.31414 4.99172 8.15141L4.49172 8.15109C4.49168 8.21027 4.47327 8.26797 4.43903 8.31623L4.84683 8.60554ZM4.99172 8.15125V7.63964H4.49172V8.15125H4.99172ZM4.67048 7.87928C4.83149 7.92715 4.97784 8.01117 5.09722 8.13013L5.45014 7.77594C5.26846 7.5949 5.04837 7.47 4.81296 7.40001L4.67048 7.87928ZM5.09689 8.1298L8.32564 11.3591L8.67922 11.0056L5.45047 7.77627L5.09689 8.1298ZM8.32548 11.3589C8.55288 11.5868 8.66024 11.9135 8.61252 12.2317L9.10698 12.3058C9.17819 11.8311 9.01876 11.3457 8.67937 11.0057L8.32548 11.3589ZM8.61262 12.231C8.59523 12.3448 8.58076 12.4636 8.56912 12.5844L9.06681 12.6324C9.07767 12.5196 9.09105 12.4101 9.10688 12.3065L8.61262 12.231ZM8.60194 12.4826L8.07051 13.3949L8.50256 13.6465L9.03399 12.7342L8.60194 12.4826ZM13.8707 11.2358C13.7791 11.1454 13.6669 11.0787 13.5437 11.0414L13.399 11.52C13.4444 11.5338 13.4857 11.5583 13.5195 11.5917L13.8707 11.2358ZM13.5437 11.0414C13.4205 11.0042 13.29 10.9975 13.1637 11.0221L13.259 11.5129C13.3056 11.5039 13.3536 11.5063 13.399 11.52L13.5437 11.0414ZM13.1624 11.0223C12.4433 11.166 11.8422 11.4691 11.3836 11.9276C10.9251 12.3862 10.622 12.9873 10.4783 13.7064L10.9687 13.8043C11.096 13.167 11.3587 12.6597 11.7372 12.2812C12.1157 11.9027 12.623 11.64 13.2603 11.5126L13.1624 11.0223ZM10.4784 13.7063C10.453 13.833 10.4593 13.9641 10.4967 14.0879L10.9753 13.9432C10.9617 13.8982 10.9594 13.8505 10.9686 13.8044L10.4784 13.7063ZM10.4967 14.0879C10.5341 14.2117 10.6015 14.3243 10.6929 14.4158L11.0466 14.0624C11.0134 14.0292 10.9889 13.9882 10.9753 13.9432L10.4967 14.0879ZM10.693 14.4159L11.3787 15.1016L11.7322 14.748L11.0465 14.0623L10.693 14.4159ZM11.5735 14.6755C11.2453 14.6517 10.9369 14.5089 10.7064 14.274L10.3495 14.6242C10.6653 14.946 11.0877 15.1416 11.5374 15.1742L11.5735 14.6755ZM10.702 14.2697C10.6682 14.2369 10.5019 14.0673 10.4662 14.0273L10.0937 14.3609C10.1404 14.4131 10.3159 14.5917 10.3539 14.6285L10.702 14.2697ZM10.4689 14.0304C10.3019 13.8376 10.2013 13.6411 10.1528 13.4042C10.1031 13.1617 10.1054 12.8641 10.1655 12.4663L9.67113 12.3915C9.60645 12.8193 9.59689 13.1819 9.66296 13.5045C9.73016 13.8326 9.87281 14.1059 10.091 14.3578L10.4689 14.0304ZM10.1656 12.466C10.2256 12.0652 10.191 11.6559 10.0646 11.2709L9.58957 11.4268C9.69164 11.7377 9.71955 12.0682 9.67108 12.3919L10.1656 12.466ZM10.0646 11.2709C9.93824 10.8858 9.72353 10.5357 9.43766 10.2485L9.08326 10.6012C9.31412 10.8331 9.4875 11.1159 9.58957 11.4268L10.0646 11.2709ZM9.43725 10.2481L6.20797 7.01824L5.85439 7.37176L9.08367 10.6016L9.43725 10.2481ZM6.20828 7.01855C5.92181 6.73101 5.57146 6.51521 5.18579 6.38871L5.02996 6.86381C5.34081 6.96576 5.62318 7.1397 5.85408 7.37145L6.20828 7.01855ZM5.18579 6.38871C4.80011 6.26222 4.39001 6.2286 3.98888 6.29062L4.06527 6.78475C4.38857 6.73477 4.71911 6.76186 5.02996 6.86381L5.18579 6.38871ZM3.99025 6.29041C3.58324 6.35103 3.28665 6.35356 3.04728 6.30438C2.81416 6.25649 2.6216 6.15671 2.42647 5.98802L2.09947 6.36627C2.35113 6.58383 2.61982 6.727 2.94665 6.79415C3.26724 6.86002 3.6293 6.84969 4.06391 6.78495L3.99025 6.29041ZM2.42893 5.99018C2.38822 5.95404 2.22006 5.78872 2.17454 5.74267L1.8189 6.09412C1.86339 6.13914 2.04237 6.31561 2.09701 6.36411L2.42893 5.99018ZM2.17319 5.74131C1.94292 5.51184 1.80329 5.2069 1.78001 4.88264L1.28129 4.91844C1.3132 5.36292 1.5046 5.78092 1.82025 6.09548L2.17319 5.74131ZM1.35394 5.07739L2.04019 5.7631L2.39361 5.40941L1.70736 4.72369L1.35394 5.07739ZM2.03975 5.76266C2.22691 5.95061 2.49403 6.02691 2.74795 5.97799L2.65335 5.48702C2.55691 5.5056 2.45975 5.47582 2.39405 5.40985L2.03975 5.76266ZM2.74964 5.97766C3.46868 5.83396 4.06983 5.53089 4.52836 5.07236C4.98689 4.61383 5.28996 4.01268 5.43366 3.29364L4.94335 3.19566C4.81598 3.83304 4.55333 4.34029 4.17481 4.71881C3.79629 5.09733 3.28904 5.35997 2.65166 5.48735L2.74964 5.97766ZM5.43364 3.29373C5.45902 3.16695 5.45273 3.03586 5.41531 2.9121L4.9367 3.05679C4.95031 3.1018 4.9526 3.14947 4.94337 3.19557L5.43364 3.29373ZM5.41531 2.9121C5.37789 2.78833 5.31051 2.67571 5.21914 2.58423L4.86537 2.93757C4.8986 2.97083 4.9231 3.01179 4.9367 3.05679L5.41531 2.9121ZM5.21903 2.58412L4.53332 1.89841L4.17976 2.25196L4.86548 2.93768L5.21903 2.58412ZM4.33847 2.32453C4.66675 2.34832 4.97507 2.49107 5.2056 2.726L5.56248 2.3758C5.24668 2.05398 4.82432 1.85843 4.37461 1.82584L4.33847 2.32453ZM5.20996 2.73033C5.24378 2.76315 5.41006 2.93272 5.44582 2.97266L5.81833 2.63914C5.77159 2.58694 5.59608 2.4083 5.55812 2.37147L5.20996 2.73033ZM5.44312 2.96959C5.61013 3.16239 5.7107 3.35891 5.75921 3.59581C5.80886 3.83826 5.80663 4.13593 5.74649 4.5337L6.24087 4.60845C6.30555 4.18068 6.31511 3.8181 6.24905 3.4955C6.18185 3.16736 6.0392 2.89405 5.82104 2.64221L5.44312 2.96959ZM5.74644 4.53405C5.68642 4.93483 5.72098 5.34409 5.84737 5.72913L6.32243 5.57319C6.22037 5.26225 6.19245 4.93175 6.24092 4.6081L5.74644 4.53405ZM5.84737 5.72913C5.97376 6.11416 6.18847 6.46429 6.47434 6.75153L6.82874 6.39883C6.59789 6.16687 6.4245 5.88412 6.32243 5.57319L5.84737 5.72913ZM6.47475 6.75194L9.70403 9.98176L10.0576 9.62824L6.82833 6.39842L6.47475 6.75194ZM9.7039 9.98164C9.99057 10.2688 10.3409 10.4843 10.7264 10.6107L10.8822 10.1356C10.5714 10.0337 10.2889 9.85988 10.0577 9.62836L9.7039 9.98164ZM10.7264 10.6107C11.1119 10.7372 11.5218 10.771 11.9229 10.7094L11.847 10.2152C11.5236 10.2649 11.1931 10.2376 10.8822 10.1356L10.7264 10.6107ZM11.9219 10.7096C12.3286 10.6487 12.625 10.6462 12.8643 10.6954C13.0974 10.7434 13.2901 10.8433 13.4856 11.0121L13.8124 10.6336C13.5606 10.4162 13.2918 10.2729 12.965 10.2057C12.6444 10.1397 12.2824 10.15 11.8479 10.2151L11.9219 10.7096ZM13.4831 11.0098C13.5238 11.046 13.6919 11.2113 13.7375 11.2573L14.0931 10.9059C14.0486 10.8609 13.8696 10.6844 13.815 10.6359L13.4831 11.0098ZM13.7383 11.2582C13.975 11.4953 14.1094 11.8014 14.132 12.1173L14.6307 12.0816C14.5997 11.6476 14.4149 11.2283 14.0922 10.905L13.7383 11.2582ZM14.5581 11.9226L13.8718 11.2369L13.5184 11.5906L14.2046 12.2763L14.5581 11.9226Z" fill="#007B42" />
                                                    </svg>
                                                </div>
                                                <div className='knowledge-base-content-span-text'>
                                                    Consent Mechanism
                                                </div>
                                            </div>
                                            <div className='knowledge-base-content-box'>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="17" viewBox="0 0 13 17" fill="none">
                                                        <path d="M6.62939 13.2852V11.9922V13.2852Z" fill="#007B42" />
                                                        <path d="M6.62939 13.2852V11.9922" stroke="#007B42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M10.185 6.94922H3.07332C2.18067 6.94922 1.45703 7.67286 1.45703 8.56551V14.3842C1.45703 15.2768 2.18067 16.0005 3.07332 16.0005H10.185C11.0777 16.0005 11.8013 15.2768 11.8013 14.3842V8.56551C11.8013 7.67286 11.0777 6.94922 10.185 6.94922Z" stroke="#007B42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M4.04297 6.81866V3.58607C4.04297 2.9002 4.31543 2.24242 4.80041 1.75744C5.28539 1.27246 5.94317 1 6.62904 1C7.31491 1 7.97268 1.27246 8.45767 1.75744C8.94265 2.24242 9.21511 2.9002 9.21511 3.58607V6.81866" stroke="#007B42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M6.62922 11.9904C7.34334 11.9904 7.92225 11.4115 7.92225 10.6973C7.92225 9.98321 7.34334 9.4043 6.62922 9.4043C5.91509 9.4043 5.33618 9.98321 5.33618 10.6973C5.33618 11.4115 5.91509 11.9904 6.62922 11.9904Z" fill="#007B42" />
                                                    </svg>
                                                </div>
                                                <div className='knowledge-base-content-span-text'>
                                                    User Data Encryption
                                                </div>
                                            </div>
                                            <div className='knowledge-base-content-box'>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M6.72489 14.7907C6.85882 14.9247 7.04047 15 7.22989 15C7.41932 15 7.60097 14.9247 7.73489 14.7907L9.40847 13.1171C10.7601 11.773 11.8317 10.174 12.5612 8.41287C13.2907 6.65173 13.6637 4.76339 13.6585 2.85714C13.6586 2.71173 13.6144 2.56974 13.5317 2.45014C13.449 2.33055 13.3317 2.23904 13.1956 2.18786L7.48132 0.045C7.31918 -0.015 7.14061 -0.015 6.97847 0.045L1.26418 2.18786C1.12808 2.23904 1.01083 2.33055 0.928125 2.45014C0.845416 2.56974 0.801178 2.71173 0.801323 2.85714C0.796109 4.76339 1.16905 6.65173 1.89857 8.41287C2.62808 10.174 3.69968 11.773 5.05132 13.1171L6.72489 14.7907ZM6.06132 12.1071C3.72066 9.77933 2.35405 6.6477 2.23918 3.34857L7.22989 1.47714L12.2206 3.34857C12.1057 6.6477 10.7391 9.77933 8.39847 12.1071L7.22989 13.275L6.06132 12.1071ZM5.08717 4.99963C5.08717 6.18106 6.04859 7.14249 7.23002 7.14249H6.51574C6.04051 7.14391 5.57927 7.30338 5.20464 7.59576C4.83 7.88815 4.56327 8.29684 4.44645 8.75749C4.82935 9.46484 5.28054 10.133 5.79359 10.7525C5.79393 10.746 5.79573 10.7401 5.79752 10.7341C5.79949 10.7275 5.80145 10.721 5.80145 10.7139V9.28534C5.80145 8.89177 6.12145 8.57106 6.51574 8.57106H7.94431C8.33859 8.57106 8.65859 8.89177 8.65859 9.28534V10.7139C8.65859 10.7211 8.66043 10.7275 8.66223 10.7337C8.664 10.7398 8.66574 10.7458 8.66574 10.7525C9.17905 10.1331 9.63049 9.46488 10.0136 8.75749C9.89677 8.29684 9.63004 7.88815 9.25541 7.59576C8.88078 7.30338 8.41953 7.14391 7.94431 7.14249H7.23002C8.41145 7.14249 9.37288 6.18106 9.37288 4.99963C9.37288 3.8182 8.41145 2.85677 7.23002 2.85677C6.04859 2.85677 5.08717 3.8182 5.08717 4.99963ZM6.74522 4.50547C6.87245 4.37242 7.04611 4.29357 7.23002 4.28534C7.41394 4.29357 7.58759 4.37242 7.71483 4.50547C7.84206 4.63853 7.91307 4.81553 7.91307 4.99963C7.91307 5.18373 7.84206 5.36073 7.71483 5.49378C7.58759 5.62684 7.41394 5.70569 7.23002 5.71391C7.04611 5.70569 6.87245 5.62684 6.74522 5.49378C6.61798 5.36073 6.54697 5.18373 6.54697 4.99963C6.54697 4.81553 6.61798 4.63853 6.74522 4.50547Z" fill="#007B42" />
                                                    </svg>
                                                </div>
                                                <div className='knowledge-base-content-span-text'>
                                                    Secure Communication
                                                </div>
                                            </div>
                                            <div className='knowledge-base-content-box'>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 14 17" fill="none">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.4264 5.29039C11.5543 5.16253 11.7277 5.0907 11.9085 5.0907C12.0893 5.0907 12.2628 5.16253 12.3906 5.29039C12.5185 5.41824 12.5903 5.59166 12.5903 5.77248V13.4023C12.5708 14.1088 12.2722 14.7788 11.7598 15.2655C11.2473 15.7523 10.5629 16.0161 9.85636 15.9992H4.41573C3.70918 16.0161 3.02474 15.7523 2.51232 15.2655C1.99989 14.7788 1.70124 14.1088 1.68178 13.4023V5.77248C1.68178 5.59166 1.75361 5.41824 1.88147 5.29039C2.00933 5.16253 2.18275 5.0907 2.36357 5.0907C2.54439 5.0907 2.7178 5.16253 2.84566 5.29039C2.97352 5.41824 3.04535 5.59166 3.04535 5.77248V13.4023C3.06491 13.7471 3.2199 14.0702 3.47658 14.3012C3.73326 14.5322 4.07082 14.6524 4.41573 14.6357H9.85636C10.2013 14.6524 10.5388 14.5322 10.7955 14.3012C11.0522 14.0702 11.2072 13.7471 11.2267 13.4023V5.77248C11.2267 5.59166 11.2986 5.41824 11.4264 5.29039ZM9.86317 3.04535H12.5903C12.7711 3.04535 12.9445 3.11718 13.0724 3.24504C13.2003 3.3729 13.2721 3.54631 13.2721 3.72713C13.2721 3.90795 13.2003 4.08136 13.0724 4.20922C12.9445 4.33708 12.7711 4.40891 12.5903 4.40891H1.68178C1.50096 4.40891 1.32755 4.33708 1.19969 4.20922C1.07183 4.08136 1 3.90795 1 3.72713C1 3.54631 1.07183 3.3729 1.19969 3.24504C1.32755 3.11718 1.50096 3.04535 1.68178 3.04535H4.40891V1.68178C4.40891 1.50096 4.48074 1.32755 4.6086 1.19969C4.73646 1.07183 4.90988 1 5.0907 1H9.18139C9.36221 1 9.53563 1.07183 9.66348 1.19969C9.79134 1.32755 9.86317 1.50096 9.86317 1.68178V3.04535ZM5.77248 2.36357V3.04535H8.49961V2.36357H5.77248ZM6.45426 7.13602V11.9085C6.45426 12.0893 6.38243 12.2627 6.25457 12.3906C6.12671 12.5185 5.9533 12.5903 5.77248 12.5903C5.59166 12.5903 5.41824 12.5185 5.29039 12.3906C5.16253 12.2627 5.0907 12.0893 5.0907 11.9085V7.13602C5.0907 6.9552 5.16253 6.78179 5.29039 6.65393C5.41824 6.52607 5.59166 6.45424 5.77248 6.45424C5.9533 6.45424 6.12671 6.52607 6.25457 6.65393C6.38243 6.78179 6.45426 6.9552 6.45426 7.13602ZM9.18139 7.13602V11.9085C9.18139 12.0893 9.10956 12.2627 8.9817 12.3906C8.85384 12.5185 8.68043 12.5903 8.49961 12.5903C8.31879 12.5903 8.14538 12.5185 8.01752 12.3906C7.88966 12.2627 7.81783 12.0893 7.81783 11.9085V7.13602C7.81783 6.9552 7.88966 6.78179 8.01752 6.65393C8.14538 6.52607 8.31879 6.45424 8.49961 6.45424C8.68043 6.45424 8.85384 6.52607 8.9817 6.65393C9.10956 6.78179 9.18139 6.9552 9.18139 7.13602Z" fill="#007B42" />
                                                        <path d="M12.5903 13.4023L12.8403 13.4092V13.4023H12.5903ZM11.7598 15.2655L11.9319 15.4468L11.7598 15.2655ZM9.85636 15.9992L9.86232 15.7492H9.85636V15.9992ZM4.41573 15.9992V15.7491L4.40977 15.7493L4.41573 15.9992ZM2.51232 15.2655L2.34014 15.4468H2.34014L2.51232 15.2655ZM1.68178 13.4023H1.43169L1.43188 13.4092L1.68178 13.4023ZM1.88147 5.29039L1.7047 5.11361L1.7047 5.11361L1.88147 5.29039ZM2.84566 5.29039L2.66888 5.46716L2.66888 5.46716L2.84566 5.29039ZM3.04535 13.4023H2.79535V13.4094L2.79575 13.4165L3.04535 13.4023ZM3.47658 14.3012L3.30934 14.487H3.30934L3.47658 14.3012ZM4.41573 14.6357V14.3854L4.40361 14.3859L4.41573 14.6357ZM9.85636 14.6357L9.86849 14.3857H9.85636V14.6357ZM10.7955 14.3012L10.6283 14.1153L10.7955 14.3012ZM11.2267 13.4023L11.4763 13.4165L11.4767 13.4094V13.4023H11.2267ZM9.86317 3.04535H9.61317V3.29535H9.86317V3.04535ZM13.0724 3.24504L13.2492 3.06826V3.06826L13.0724 3.24504ZM13.0724 4.20922L13.2492 4.386V4.386L13.0724 4.20922ZM1.19969 4.20922L1.02291 4.386L1.02291 4.386L1.19969 4.20922ZM1.19969 3.24504L1.02291 3.06826L1.02291 3.06826L1.19969 3.24504ZM4.40891 3.04535V3.29535H4.65891V3.04535H4.40891ZM4.6086 1.19969L4.78538 1.37647V1.37647L4.6086 1.19969ZM9.66348 1.19969L9.48671 1.37647V1.37647L9.66348 1.19969ZM5.77248 3.04535H5.52248V3.29535H5.77248V3.04535ZM5.77248 2.36357V2.11357H5.52248V2.36357H5.77248ZM8.49961 3.04535V3.29535H8.74961V3.04535H8.49961ZM8.49961 2.36357H8.74961V2.11357H8.49961V2.36357ZM5.29039 12.3906L5.46716 12.2138V12.2138L5.29039 12.3906ZM5.29039 6.65393L5.46716 6.83071L5.46716 6.83071L5.29039 6.65393ZM6.25457 6.65393L6.07779 6.83071H6.0778L6.25457 6.65393ZM8.9817 12.3906L9.15848 12.5674L9.15848 12.5674L8.9817 12.3906ZM8.01752 6.65393L8.19429 6.83071H8.19429L8.01752 6.65393ZM11.9085 4.8407C11.6614 4.8407 11.4244 4.93887 11.2497 5.11361L11.6032 5.46716C11.6842 5.38619 11.794 5.3407 11.9085 5.3407V4.8407ZM12.5674 5.11361C12.3926 4.93887 12.1556 4.8407 11.9085 4.8407V5.3407C12.023 5.3407 12.1329 5.38619 12.2138 5.46716L12.5674 5.11361ZM12.8403 5.77248C12.8403 5.52535 12.7421 5.28835 12.5674 5.11361L12.2138 5.46716C12.2948 5.54814 12.3403 5.65796 12.3403 5.77248H12.8403ZM12.8403 13.4023V5.77248H12.3403V13.4023H12.8403ZM11.9319 15.4468C12.4923 14.9145 12.8189 14.1818 12.8402 13.4092L12.3404 13.3954C12.3228 14.0358 12.0521 14.6431 11.5876 15.0843L11.9319 15.4468ZM9.85039 16.2491C10.6231 16.2676 11.3716 15.9791 11.9319 15.4468L11.5876 15.0843C11.1231 15.5254 10.5027 15.7646 9.86232 15.7493L9.85039 16.2491ZM4.41573 16.2492H9.85636V15.7492H4.41573V16.2492ZM2.34014 15.4468C2.90053 15.9791 3.64902 16.2676 4.4217 16.2491L4.40977 15.7493C3.76934 15.7646 3.14896 15.5254 2.68449 15.0843L2.34014 15.4468ZM1.43188 13.4092C1.45316 14.1818 1.77976 14.9145 2.34014 15.4468L2.68449 15.0843C2.22002 14.6431 1.94933 14.0358 1.93169 13.3954L1.43188 13.4092ZM1.43178 5.77248V13.4023H1.93178V5.77248H1.43178ZM1.7047 5.11361C1.52995 5.28835 1.43178 5.52535 1.43178 5.77248H1.93178C1.93178 5.65796 1.97727 5.54814 2.05825 5.46716L1.7047 5.11361ZM2.36357 4.8407C2.11644 4.8407 1.87944 4.93887 1.7047 5.11361L2.05825 5.46716C2.13922 5.38619 2.24905 5.3407 2.36357 5.3407V4.8407ZM3.02244 5.11361C2.84769 4.93887 2.61069 4.8407 2.36357 4.8407V5.3407C2.47808 5.3407 2.58791 5.38619 2.66888 5.46716L3.02244 5.11361ZM3.29535 5.77248C3.29535 5.52535 3.19718 5.28835 3.02243 5.11361L2.66888 5.46716C2.74986 5.54814 2.79535 5.65796 2.79535 5.77248H3.29535ZM3.29535 13.4023V5.77248H2.79535V13.4023H3.29535ZM3.64382 14.1153C3.43617 13.9284 3.31077 13.6671 3.29495 13.3881L2.79575 13.4165C2.81904 13.8271 3.00364 14.2119 3.30934 14.487L3.64382 14.1153ZM4.40361 14.3859C4.12457 14.3995 3.85148 14.3022 3.64382 14.1153L3.30934 14.487C3.61504 14.7621 4.01706 14.9053 4.42785 14.8854L4.40361 14.3859ZM9.85636 14.3857H4.41573V14.8857H9.85636V14.3857ZM10.6283 14.1153C10.4206 14.3022 10.1475 14.3995 9.86848 14.3859L9.84424 14.8854C10.255 14.9053 10.6571 14.7621 10.9627 14.487L10.6283 14.1153ZM10.9771 13.3881C10.9613 13.6671 10.8359 13.9284 10.6283 14.1153L10.9627 14.487C11.2684 14.2119 11.453 13.8271 11.4763 13.4165L10.9771 13.3881ZM10.9767 5.77248V13.4023H11.4767V5.77248H10.9767ZM11.2497 5.11361C11.0749 5.28835 10.9767 5.52535 10.9767 5.77248H11.4767C11.4767 5.65796 11.5222 5.54814 11.6032 5.46716L11.2497 5.11361ZM12.5903 2.79535H9.86317V3.29535H12.5903V2.79535ZM13.2492 3.06826C13.0744 2.89352 12.8374 2.79535 12.5903 2.79535V3.29535C12.7048 3.29535 12.8146 3.34084 12.8956 3.42181L13.2492 3.06826ZM13.5221 3.72713C13.5221 3.48001 13.4239 3.243 13.2492 3.06826L12.8956 3.42181C12.9766 3.50279 13.0221 3.61261 13.0221 3.72713H13.5221ZM13.2492 4.386C13.4239 4.21126 13.5221 3.97425 13.5221 3.72713H13.0221C13.0221 3.84165 12.9766 3.95147 12.8956 4.03245L13.2492 4.386ZM12.5903 4.65891C12.8374 4.65891 13.0744 4.56074 13.2492 4.386L12.8956 4.03245C12.8146 4.11342 12.7048 4.15891 12.5903 4.15891V4.65891ZM1.68178 4.65891H12.5903V4.15891H1.68178V4.65891ZM1.02291 4.386C1.19766 4.56074 1.43466 4.65891 1.68178 4.65891V4.15891C1.56727 4.15891 1.45744 4.11342 1.37647 4.03245L1.02291 4.386ZM0.75 3.72713C0.75 3.97425 0.84817 4.21126 1.02291 4.386L1.37647 4.03245C1.29549 3.95147 1.25 3.84165 1.25 3.72713H0.75ZM1.02291 3.06826C0.84817 3.243 0.75 3.48001 0.75 3.72713H1.25C1.25 3.61261 1.29549 3.50279 1.37647 3.42181L1.02291 3.06826ZM1.68178 2.79535C1.43466 2.79535 1.19766 2.89352 1.02291 3.06826L1.37647 3.42181C1.45744 3.34084 1.56727 3.29535 1.68178 3.29535V2.79535ZM4.40891 2.79535H1.68178V3.29535H4.40891V2.79535ZM4.15891 1.68178V3.04535H4.65891V1.68178H4.15891ZM4.43183 1.02291C4.25708 1.19766 4.15891 1.43466 4.15891 1.68178H4.65891C4.65891 1.56727 4.7044 1.45744 4.78538 1.37647L4.43183 1.02291ZM5.0907 0.75C4.84357 0.75 4.60657 0.84817 4.43183 1.02291L4.78538 1.37647C4.86635 1.29549 4.97618 1.25 5.0907 1.25V0.75ZM9.18139 0.75H5.0907V1.25H9.18139V0.75ZM9.84026 1.02291C9.66552 0.84817 9.42852 0.75 9.18139 0.75V1.25C9.29591 1.25 9.40573 1.29549 9.48671 1.37647L9.84026 1.02291ZM10.1132 1.68178C10.1132 1.43466 10.015 1.19766 9.84026 1.02291L9.48671 1.37647C9.56768 1.45744 9.61317 1.56727 9.61317 1.68178H10.1132ZM10.1132 3.04535V1.68178H9.61317V3.04535H10.1132ZM6.02248 3.04535V2.36357H5.52248V3.04535H6.02248ZM8.49961 2.79535H5.77248V3.29535H8.49961V2.79535ZM8.24961 2.36357V3.04535H8.74961V2.36357H8.24961ZM5.77248 2.61357H8.49961V2.11357H5.77248V2.61357ZM6.70426 11.9085V7.13602H6.20426V11.9085H6.70426ZM6.43135 12.5674C6.60609 12.3926 6.70426 12.1556 6.70426 11.9085H6.20426C6.20426 12.023 6.15877 12.1328 6.07779 12.2138L6.43135 12.5674ZM5.77248 12.8403C6.0196 12.8403 6.2566 12.7421 6.43135 12.5674L6.07779 12.2138C5.99682 12.2948 5.88699 12.3403 5.77248 12.3403V12.8403ZM5.11361 12.5674C5.28835 12.7421 5.52536 12.8403 5.77248 12.8403V12.3403C5.65796 12.3403 5.54814 12.2948 5.46716 12.2138L5.11361 12.5674ZM4.8407 11.9085C4.8407 12.1556 4.93887 12.3926 5.11361 12.5674L5.46716 12.2138C5.38619 12.1328 5.3407 12.023 5.3407 11.9085H4.8407ZM4.8407 7.13602V11.9085H5.3407V7.13602H4.8407ZM5.11361 6.47715C4.93887 6.6519 4.8407 6.8889 4.8407 7.13602H5.3407C5.3407 7.02151 5.38619 6.91168 5.46716 6.83071L5.11361 6.47715ZM5.77248 6.20424C5.52535 6.20424 5.28835 6.30241 5.11361 6.47715L5.46716 6.83071C5.54814 6.74973 5.65796 6.70424 5.77248 6.70424V6.20424ZM6.43135 6.47715C6.25661 6.30241 6.0196 6.20424 5.77248 6.20424V6.70424C5.88699 6.70424 5.99682 6.74973 6.07779 6.83071L6.43135 6.47715ZM6.70426 7.13602C6.70426 6.8889 6.60609 6.6519 6.43135 6.47715L6.0778 6.83071C6.15877 6.91168 6.20426 7.02151 6.20426 7.13602H6.70426ZM9.43139 11.9085V7.13602H8.93139V11.9085H9.43139ZM9.15848 12.5674C9.33322 12.3926 9.43139 12.1556 9.43139 11.9085H8.93139C8.93139 12.023 8.8859 12.1328 8.80493 12.2138L9.15848 12.5674ZM8.49961 12.8403C8.74673 12.8403 8.98374 12.7421 9.15848 12.5674L8.80493 12.2138C8.72395 12.2948 8.61413 12.3403 8.49961 12.3403V12.8403ZM7.84074 12.5674C8.01548 12.7421 8.25249 12.8403 8.49961 12.8403V12.3403C8.38509 12.3403 8.27527 12.2948 8.19429 12.2138L7.84074 12.5674ZM7.56783 11.9085C7.56783 12.1556 7.666 12.3926 7.84074 12.5674L8.19429 12.2138C8.11332 12.1328 8.06783 12.023 8.06783 11.9085H7.56783ZM7.56783 7.13602V11.9085H8.06783V7.13602H7.56783ZM7.84074 6.47715C7.666 6.6519 7.56783 6.8889 7.56783 7.13602H8.06783C8.06783 7.02151 8.11332 6.91168 8.19429 6.83071L7.84074 6.47715ZM8.49961 6.20424C8.25248 6.20424 8.01548 6.30241 7.84074 6.47715L8.19429 6.83071C8.27527 6.74973 8.38509 6.70424 8.49961 6.70424V6.20424ZM9.15848 6.47715C8.98374 6.30241 8.74673 6.20424 8.49961 6.20424V6.70424C8.61412 6.70424 8.72395 6.74973 8.80493 6.83071L9.15848 6.47715ZM9.43139 7.13602C9.43139 6.8889 9.33322 6.6519 9.15848 6.47715L8.80493 6.83071C8.8859 6.91168 8.93139 7.02151 8.93139 7.13602H9.43139Z" fill="#007B42" />
                                                    </svg>
                                                </div>
                                                <div className='knowledge-base-content-span-text'>
                                                    Data Deletion Options
                                                </div>
                                            </div>
                                            <div className='knowledge-base-content-box'>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="15" viewBox="0 0 19 15" fill="none">
                                                        <path d="M18.8105 7.96875C18.5293 7.59375 17.873 7.5 17.498 7.78125L17.123 8.15625V7.5C17.123 3.375 13.748 0 9.623 0C8.123 0 6.623 0.46875 5.3105 1.3125C4.9355 1.6875 4.84175 2.25 5.123 2.625C5.40425 3.09375 5.96675 3.1875 6.4355 2.8125C7.373 2.25 8.498 1.875 9.623 1.875C12.7168 1.875 15.248 4.40625 15.248 7.5C15.248 7.6875 15.248 7.96875 15.1543 8.25L14.498 7.40625C14.2168 7.03125 13.5605 6.9375 13.1855 7.21875C12.8105 7.5 12.7168 8.15625 12.998 8.53125L14.873 10.9688C15.248 11.4375 15.8105 11.4375 16.1855 11.1562L18.623 9.28125C19.0918 9 19.0918 8.4375 18.8105 7.96875ZM12.8105 12.0938C11.873 12.75 10.748 13.125 9.623 13.125C6.52925 13.125 3.998 10.5938 3.998 7.5C3.998 7.3125 3.998 7.03125 4.09175 6.75L4.748 7.59375C5.21675 8.15625 5.873 7.875 6.0605 7.78125C6.4355 7.5 6.52925 6.84375 6.248 6.46875L4.373 4.03125C3.998 3.5625 3.4355 3.5625 3.0605 3.84375L0.623004 5.71875C0.248004 6 0.154254 6.65625 0.435504 7.03125C0.716754 7.40625 1.373 7.5 1.748 7.21875L2.123 6.84375V7.5C2.123 11.625 5.498 15 9.623 15C11.123 15 12.623 14.5312 13.9355 13.6875C14.4043 13.4062 14.498 12.8438 14.123 12.375C13.8418 11.9062 13.2793 11.8125 12.8105 12.0938Z" fill="#007B42" />
                                                    </svg>
                                                </div>
                                                <div className='knowledge-base-content-span-text'>
                                                    Regular Updates
                                                </div>
                                            </div>
                                            <div className='knowledge-base-content-box'>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M5.26552 1H10.2905C10.8595 0.999998 11.406 1.22567 11.8089 1.62754C12.2119 2.02941 12.439 2.57466 12.4405 3.14373V7.75431C12.5498 7.76722 12.656 7.79939 12.7542 7.84931L15.2998 9.22492C15.5779 9.38429 15.7498 9.63866 15.7854 9.93053C16.1542 12.3018 15.5117 15.1511 12.5979 15.9761C12.483 16.0086 12.3648 16.0073 12.2567 15.9761C11.1667 15.6661 10.3317 15.0461 9.73985 14.1624H3.14679C1.96493 14.1624 1.00244 13.2005 1.00244 12.0186V5.23121C1.00297 4.95002 1.05926 4.67173 1.16804 4.41244C1.27682 4.15315 1.43594 3.918 1.63618 3.7206L3.77616 1.60562C4.21366 1.19 4.72803 1 5.26552 1ZM2.25305 12.0186C2.25305 12.5118 2.65367 12.9124 3.14679 12.9124H9.11861C8.69052 11.5934 8.80387 10.2807 8.82785 10.0029C8.83024 9.97532 8.83174 9.95794 8.83174 9.95178C8.84861 9.64616 9.04924 9.36867 9.31986 9.22429L11.1905 8.2093V3.14373C11.1905 2.65123 10.7867 2.24999 10.2898 2.24999H5.2649C5.01803 2.24999 4.8224 2.33499 4.64615 2.50373L2.51743 4.60684C2.43404 4.68809 2.3677 4.78516 2.3223 4.89237C2.27691 4.99959 2.25336 5.11478 2.25305 5.23121V12.0186ZM12.428 14.7211C14.8011 13.9274 14.7017 11.273 14.5686 10.2505L12.3055 9.02742L10.0605 10.2443C10.031 10.6735 10.0419 11.1046 10.093 11.5318C10.2842 13.0561 10.9755 14.2367 12.428 14.7211ZM9.01367 6.36862C9.13088 6.48583 9.19673 6.6448 9.19673 6.81055C9.19673 6.97631 9.13088 7.13528 9.01367 7.25249C8.89646 7.3697 8.73749 7.43555 8.57174 7.43555H4.86802C4.70226 7.43555 4.5433 7.3697 4.42609 7.25249C4.30888 7.13528 4.24303 6.97631 4.24303 6.81055C4.24303 6.6448 4.30888 6.48583 4.42609 6.36862C4.5433 6.25141 4.70226 6.18556 4.86802 6.18556H8.57174C8.73749 6.18556 8.89646 6.25141 9.01367 6.36862ZM4.86802 9.05366H6.71988C6.88564 9.05366 7.04461 9.1195 7.16182 9.23671C7.27903 9.35392 7.34487 9.51289 7.34487 9.67865C7.34487 9.84441 7.27903 10.0034 7.16182 10.1206C7.04461 10.2378 6.88564 10.3036 6.71988 10.3036H4.86802C4.70226 10.3036 4.5433 10.2378 4.42609 10.1206C4.30888 10.0034 4.24303 9.84441 4.24303 9.67865C4.24303 9.51289 4.30888 9.35392 4.42609 9.23671C4.5433 9.1195 4.70226 9.05366 4.86802 9.05366Z" fill="#007B42" />
                                                        <path d="M10.2905 1V1.25H10.2905L10.2905 1ZM11.8089 1.62754L11.6324 1.80455L11.8089 1.62754ZM12.4405 3.14373H12.6905L12.6905 3.14307L12.4405 3.14373ZM12.4405 7.75431H12.1905V7.97652L12.4111 8.00258L12.4405 7.75431ZM12.7542 7.84931L12.8731 7.6293L12.8675 7.62647L12.7542 7.84931ZM15.2998 9.22492L15.4241 9.00794L15.4187 9.00498L15.2998 9.22492ZM15.7854 9.93053L15.5371 9.96084L15.5384 9.96895L15.7854 9.93053ZM12.5979 15.9761L12.6659 16.2167L12.6661 16.2166L12.5979 15.9761ZM12.2567 15.9761L12.3261 15.7359L12.3251 15.7356L12.2567 15.9761ZM9.73985 14.1624L9.94757 14.0233L9.87331 13.9124H9.73985V14.1624ZM1.00244 5.23121L0.752441 5.23073V5.23121H1.00244ZM1.16804 4.41244L1.39857 4.50915H1.39857L1.16804 4.41244ZM1.63618 3.7206L1.81169 3.89864L1.81192 3.89841L1.63618 3.7206ZM3.77616 1.60562L3.60394 1.42433L3.60043 1.42781L3.77616 1.60562ZM9.11861 12.9124V13.1624H9.46259L9.3564 12.8352L9.11861 12.9124ZM8.82785 10.0029L8.57878 9.98142L8.57878 9.98142L8.82785 10.0029ZM8.83174 9.95178L8.58174 9.93798V9.95178H8.83174ZM9.31986 9.22429L9.43753 9.44487L9.43909 9.44403L9.31986 9.22429ZM11.1905 8.2093L11.3097 8.42904L11.4405 8.35808V8.2093H11.1905ZM4.64615 2.50373L4.47324 2.32314L4.47045 2.32589L4.64615 2.50373ZM2.51743 4.60684L2.69189 4.7859L2.69313 4.78468L2.51743 4.60684ZM2.25305 5.23121L2.00305 5.23054V5.23121H2.25305ZM14.5686 10.2505L14.8165 10.2183L14.7999 10.0914L14.6874 10.0306L14.5686 10.2505ZM12.428 14.7211L12.3489 14.9583L12.4281 14.9847L12.5073 14.9582L12.428 14.7211ZM12.3055 9.02742L12.4243 8.80749L12.3053 8.74315L12.1863 8.80763L12.3055 9.02742ZM10.0605 10.2443L9.94134 10.0245L9.82047 10.09L9.81106 10.2272L10.0605 10.2443ZM10.093 11.5318L9.84474 11.5614L9.84492 11.5629L10.093 11.5318ZM9.01367 6.36862L9.19045 6.19184L9.19045 6.19184L9.01367 6.36862ZM9.01367 7.25249L9.19045 7.42927L9.19045 7.42927L9.01367 7.25249ZM4.42609 7.25249L4.60286 7.07572H4.60286L4.42609 7.25249ZM4.42609 6.36862L4.24931 6.19184L4.24931 6.19184L4.42609 6.36862ZM7.16182 9.23671L6.98504 9.41349H6.98504L7.16182 9.23671ZM7.16182 10.1206L7.33859 10.2974L7.33859 10.2974L7.16182 10.1206ZM4.42609 10.1206L4.24931 10.2974H4.24931L4.42609 10.1206ZM4.42609 9.23671L4.60286 9.41349L4.60286 9.41349L4.42609 9.23671ZM10.2905 0.75H5.26552V1.25H10.2905V0.75ZM11.9855 1.45053C11.5356 1.00187 10.9257 0.749998 10.2905 0.75L10.2905 1.25C10.7934 1.25 11.2764 1.44948 11.6324 1.80455L11.9855 1.45053ZM12.6905 3.14307C12.6888 2.50781 12.4353 1.89914 11.9855 1.45053L11.6324 1.80455C11.9884 2.15967 12.1891 2.6415 12.1905 3.14438L12.6905 3.14307ZM12.6905 7.75431V3.14373H12.1905V7.75431H12.6905ZM12.8675 7.62647C12.7431 7.56318 12.6084 7.52241 12.4698 7.50603L12.4111 8.00258C12.4912 8.01204 12.569 8.03559 12.6409 8.07214L12.8675 7.62647ZM15.4187 9.00498L12.8731 7.62936L12.6353 8.06925L15.1809 9.44486L15.4187 9.00498ZM16.0336 9.90025C15.9878 9.5248 15.7658 9.20384 15.4241 9.00801L15.1755 9.44183C15.39 9.56474 15.5118 9.75252 15.5373 9.96082L16.0336 9.90025ZM12.6661 16.2166C14.2008 15.7821 15.146 14.8076 15.6522 13.632C16.1545 12.4655 16.2219 11.1101 16.0324 9.89212L15.5384 9.96895C15.7177 11.1222 15.6482 12.3771 15.193 13.4343C14.7417 14.4824 13.9088 15.3451 12.5298 15.7356L12.6661 16.2166ZM12.1873 16.2163C12.3404 16.2605 12.5061 16.2619 12.6659 16.2167L12.53 15.7355C12.4598 15.7553 12.3893 15.7542 12.3261 15.7359L12.1873 16.2163ZM9.53214 14.3015C10.1571 15.2347 11.0416 15.8904 12.1883 16.2166L12.3251 15.7356C11.2918 15.4418 10.5063 14.8575 9.94757 14.0233L9.53214 14.3015ZM3.14679 14.4124H9.73985V13.9124H3.14679V14.4124ZM0.752441 12.0186C0.752441 13.3387 1.82696 14.4124 3.14679 14.4124V13.9124C2.10291 13.9124 1.25244 13.0623 1.25244 12.0186H0.752441ZM0.752441 5.23121V12.0186H1.25244V5.23121H0.752441ZM0.937506 4.31572C0.815939 4.60549 0.753038 4.9165 0.752442 5.23073L1.25244 5.23168C1.25291 4.98355 1.30258 4.73797 1.39857 4.50915L0.937506 4.31572ZM1.46068 3.54256C1.23689 3.76316 1.05907 4.02595 0.937506 4.31572L1.39857 4.50915C1.49457 4.28034 1.63498 4.07283 1.81169 3.89864L1.46068 3.54256ZM3.60043 1.42781L1.46045 3.54279L1.81192 3.89841L3.9519 1.78343L3.60043 1.42781ZM5.26552 0.75C4.66463 0.75 4.08843 0.964139 3.60398 1.42437L3.94835 1.78687C4.33889 1.41586 4.79143 1.25 5.26552 1.25V0.75ZM3.14679 12.6624C2.79175 12.6624 2.50305 12.3737 2.50305 12.0186H2.00305C2.00305 12.6498 2.5156 13.1624 3.14679 13.1624V12.6624ZM9.11861 12.6624H3.14679V13.1624H9.11861V12.6624ZM8.57878 9.98142C8.55439 10.2639 8.43621 11.6197 8.88082 12.9896L9.3564 12.8352C8.94484 11.5672 9.05334 10.2975 9.07693 10.0244L8.57878 9.98142ZM8.58174 9.95178C8.58174 9.94792 8.58184 9.94519 8.58188 9.94441C8.58192 9.9434 8.58195 9.94295 8.58193 9.94332C8.58188 9.94412 8.58175 9.94607 8.58146 9.94973C8.58088 9.95711 8.58001 9.96722 8.57878 9.98142L9.07693 10.0244C9.0785 10.0063 9.08174 9.97208 9.08174 9.95178H8.58174ZM9.20218 9.00372C8.86588 9.18313 8.60448 9.53294 8.58212 9.938L9.08136 9.96557C9.09274 9.75939 9.23259 9.5542 9.43753 9.44487L9.20218 9.00372ZM11.0712 7.98956L9.20063 9.00455L9.43909 9.44403L11.3097 8.42904L11.0712 7.98956ZM10.9405 3.14373V8.2093H11.4405V3.14373H10.9405ZM10.2898 2.49999C10.6503 2.49999 10.9405 2.791 10.9405 3.14373H11.4405C11.4405 2.51146 10.9231 1.99999 10.2898 1.99999V2.49999ZM5.2649 2.49999H10.2898V1.99999H5.2649V2.49999ZM4.81905 2.68431C4.95202 2.557 5.08682 2.49999 5.2649 2.49999V1.99999C4.94923 1.99999 4.69279 2.11297 4.47326 2.32316L4.81905 2.68431ZM2.69313 4.78468L4.82186 2.68158L4.47045 2.32589L2.34172 4.42899L2.69313 4.78468ZM2.55252 4.98985C2.58494 4.91327 2.63233 4.84393 2.69189 4.7859L2.34296 4.42778C2.23575 4.53224 2.15046 4.65705 2.09209 4.7949L2.55252 4.98985ZM2.50305 5.23187C2.50327 5.14871 2.52009 5.06643 2.55252 4.98985L2.09209 4.7949C2.03372 4.93274 2.00345 5.08085 2.00305 5.23054L2.50305 5.23187ZM2.50305 12.0186V5.23121H2.00305V12.0186H2.50305ZM14.3206 10.2828C14.3854 10.7801 14.4392 11.66 14.1978 12.5027C13.9592 13.3353 13.4383 14.1195 12.3487 14.484L12.5073 14.9582C13.7907 14.5289 14.4066 13.5891 14.6784 12.6405C14.9473 11.702 14.8848 10.7434 14.8165 10.2183L14.3206 10.2828ZM12.1866 9.24735L14.4497 10.4705L14.6874 10.0306L12.4243 8.80749L12.1866 9.24735ZM10.1796 10.4641L12.4246 9.24721L12.1863 8.80763L9.94134 10.0245L10.1796 10.4641ZM10.3412 11.5021C10.292 11.0904 10.2815 10.675 10.3099 10.2614L9.81106 10.2272C9.78053 10.672 9.79181 11.1187 9.84474 11.5614L10.3412 11.5021ZM12.507 14.484C11.1742 14.0395 10.5245 12.9633 10.341 11.5006L9.84492 11.5629C10.0439 13.149 10.7767 14.434 12.3489 14.9583L12.507 14.484ZM9.44673 6.81055C9.44673 6.57849 9.35454 6.35593 9.19045 6.19184L8.8369 6.54539C8.90722 6.61572 8.94673 6.7111 8.94673 6.81055H9.44673ZM9.19045 7.42927C9.35454 7.26518 9.44673 7.04262 9.44673 6.81055H8.94673C8.94673 6.91001 8.90722 7.00539 8.8369 7.07572L9.19045 7.42927ZM8.57174 7.68555C8.8038 7.68555 9.02636 7.59336 9.19045 7.42927L8.8369 7.07572C8.76657 7.14604 8.67119 7.18555 8.57174 7.18555V7.68555ZM4.86802 7.68555H8.57174V7.18555H4.86802V7.68555ZM4.24931 7.42927C4.4134 7.59336 4.63596 7.68555 4.86802 7.68555V7.18555C4.76857 7.18555 4.67319 7.14604 4.60286 7.07572L4.24931 7.42927ZM3.99303 6.81055C3.99303 7.04262 4.08522 7.26518 4.24931 7.42927L4.60286 7.07572C4.53254 7.00539 4.49303 6.91001 4.49303 6.81055H3.99303ZM4.24931 6.19184C4.08522 6.35593 3.99303 6.57849 3.99303 6.81055H4.49303C4.49303 6.7111 4.53254 6.61572 4.60286 6.54539L4.24931 6.19184ZM4.86802 5.93556C4.63596 5.93556 4.4134 6.02775 4.24931 6.19184L4.60286 6.54539C4.67319 6.47507 4.76857 6.43556 4.86802 6.43556V5.93556ZM8.57174 5.93556H4.86802V6.43556H8.57174V5.93556ZM9.19045 6.19184C9.02636 6.02775 8.8038 5.93556 8.57174 5.93556V6.43556C8.67119 6.43556 8.76657 6.47507 8.8369 6.54539L9.19045 6.19184ZM6.71988 8.80366H4.86802V9.30366H6.71988V8.80366ZM7.33859 9.05994C7.1745 8.89584 6.95194 8.80366 6.71988 8.80366V9.30366C6.81933 9.30366 6.91471 9.34316 6.98504 9.41349L7.33859 9.05994ZM7.59487 9.67865C7.59487 9.44659 7.50269 9.22403 7.33859 9.05994L6.98504 9.41349C7.05537 9.48381 7.09487 9.5792 7.09487 9.67865H7.59487ZM7.33859 10.2974C7.50269 10.1333 7.59487 9.91071 7.59487 9.67865H7.09487C7.09487 9.7781 7.05537 9.87349 6.98504 9.94381L7.33859 10.2974ZM6.71988 10.5536C6.95194 10.5536 7.1745 10.4615 7.33859 10.2974L6.98504 9.94381C6.91472 10.0141 6.81933 10.0536 6.71988 10.0536V10.5536ZM4.86802 10.5536H6.71988V10.0536H4.86802V10.5536ZM4.24931 10.2974C4.4134 10.4615 4.63596 10.5536 4.86802 10.5536V10.0536C4.76857 10.0536 4.67319 10.0141 4.60286 9.94381L4.24931 10.2974ZM3.99303 9.67865C3.99303 9.91071 4.08522 10.1333 4.24931 10.2974L4.60286 9.94381C4.53254 9.87349 4.49303 9.7781 4.49303 9.67865H3.99303ZM4.24931 9.05994C4.08522 9.22403 3.99303 9.44659 3.99303 9.67865H4.49303C4.49303 9.5792 4.53254 9.48382 4.60286 9.41349L4.24931 9.05994ZM4.86802 8.80366C4.63596 8.80366 4.4134 8.89584 4.24931 9.05994L4.60286 9.41349C4.67319 9.34316 4.76857 9.30366 4.86802 9.30366V8.80366Z" fill="#007B42" />
                                                    </svg>
                                                </div>
                                                <div className='knowledge-base-content-span-text'>
                                                    Privacy Policy
                                                </div>
                                            </div>
                                        </div>

                                        <div className='support-contact-inner-bx-title-span'>
                                            We are committed to ensuring the highest standards of security and privacy for our users. If you have specific concerns or questions about data security, please contact our Technical Support team.
                                        </div>

                                    </div>
                                </li>
                            </ul>


                        </div>
                        {/* 3 section */}
                        <div className='support-user-guide-section'>
                            <div className='support-user-guide-right-section'>
                                <div className='we-are-text-1'>User Guides and Manuals</div>
                                <div className='support-user-guide-right-inner-bx'>
                                    <div className='support-user-guide-title'>
                                        Overview
                                    </div>
                                    <div className='knowledge-base-content-text'>
                                        Welcome to  HKAPPS,  [Your App Name]! Our user guides and manuals are designed to help you make the most out of your app experience. Find detailed instructions, tips, and examples in the guides below.
                                    </div>
                                </div>

                                <div className='support-user-guide-right-inner-bx'>
                                    <div className='support-user-guide-title'>
                                        User Guide for [Your App Name]
                                    </div>
                                    <div className='knowledge-base-content-title'>

                                        Download User Guide:
                                    </div>
                                    <div className='knowledge-base-content-span-text'>
                                        <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                            <circle cx="5" cy="5.5" r="5" fill="green" />
                                        </svg>
                                        &nbsp;
                                        User Guide for iOS (Includes screenshots and examples)
                                    </div>
                                    <div className='knowledge-base-content-span-text'>
                                        <svg className='support-contact-link-dot-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                            <circle cx="5" cy="5.5" r="5" fill="green" />
                                        </svg>
                                        &nbsp;
                                        User Guide for Android (Includes screenshots and examples)
                                    </div>
                                </div>

                                <div className='java-collapse'>
                                    <div className='java-collapse-main-box'>
                                        <div className='java-collapse-box'>
                                            <svg className='java-collapse-checkbox' xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                                <circle cx="7.5" cy="8" r="7.5" fill="white" />
                                            </svg>
                                            <div className='java-collapse-title'>
                                                Getting Started
                                            </div>
                                        </div>
                                        <div className='java-collapse-content'>
                                            • An overview of the iOS and Android installation procedure.
                                            <br />
                                            •  Registering and preliminary configuration.
                                        </div>
                                    </div>
                                    <div className='java-collapse-main-box'>
                                        <div className='java-collapse-box'>
                                            <svg className='java-collapse-checkbox' xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                                <circle cx="7.5" cy="8" r="7.5" fill="white" />
                                            </svg>
                                            <div className='java-collapse-title'>
                                                Using the App Interface
                                            </div>
                                        </div>
                                        <div className='java-collapse-content'>
                                            •  Learn how to use the key features and functionalities of the application.
                                            <br />
                                            • Recognize the navigation's options and layout.
                                        </div>
                                    </div>
                                    <div className='java-collapse-main-box'>
                                        <div className='java-collapse-box'>
                                            <svg className='java-collapse-checkbox' xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                                <circle cx="7.5" cy="8" r="7.5" fill="white" />
                                            </svg>
                                            <div className='java-collapse-title'>
                                                Utilising Essential Elements
                                            </div>
                                        </div>
                                        <div className='java-collapse-content'>
                                            •  directions in detail for utilising the main features.
                                            <br />
                                            • Shortcuts and advice to improve your app experience.
                                        </div>
                                    </div>
                                    <div className='java-collapse-main-box'>
                                        <div className='java-collapse-box'>
                                            <svg className='java-collapse-checkbox' xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                                <circle cx="7.5" cy="8" r="7.5" fill="white" />
                                            </svg>
                                            <div className='java-collapse-title'>
                                                Account Management
                                            </div>
                                        </div>
                                        <div className='java-collapse-content'>
                                            • How to make changes to the details in your profile
                                            <br />
                                            • Controlling preferences and settings for an account.
                                        </div>
                                    </div>
                                    <div className='java-collapse-main-box'>
                                        <div className='java-collapse-box'>
                                            <svg className='java-collapse-checkbox' xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                                <circle cx="7.5" cy="8" r="7.5" fill="white" />
                                            </svg>
                                            <div className='java-collapse-title'>
                                                Security and Privacy
                                            </div>
                                        </div>
                                        <div className='java-collapse-content'>
                                            • Know how your data is protected by us.
                                            <br />
                                            • Some advice on preserving account security.
                                            <br />
                                            • Common problems and their fixes as troubleshooting tips.
                                            <br />
                                            • requesting assistance by contacting technical support.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src="/image/support-user-guide-image.webp" className='support-user-guide-image' alt="" />
                            </div>
                        </div>
                        {/* 5 section */}
                        <div className='we-are-section'>
                            <div className='we-are-section-article'>
                                <div className='we-are-image-fluid' data-aos="fade-right">
                                    <img src="/image/support-bug-report.webp" className='we-are-image' />
                                </div>
                                <div className='we-are-text' data-aos="fade-left">
                                    <div className='we-are-text-1'>Bug Reporting</div>
                                    <div className='we-are-text-2'>How to Report a Bug</div>
                                    <div className='we-are-text-3'>Encountered an issue with the app? Help us improve by reporting the bug. Follow these steps to submit a bug report:</div>
                                    <div className='java-collapse'>
                                        <div className='java-collapse-main-box'>
                                            <div className='java-collapse-box'>
                                                <svg className='java-collapse-checkbox' xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                                    <circle cx="7.5" cy="8" r="7.5" fill="white" />
                                                </svg>
                                                <div className='java-collapse-title'>
                                                    Navigate to Bug Reporting
                                                </div>
                                            </div>
                                            <div className='java-collapse-content'>
                                                Go to the app settings or support section to find the "Bug Reporting" option.
                                            </div>
                                        </div>
                                        <div className='java-collapse-main-box'>
                                            <div className='java-collapse-box'>
                                                <svg className='java-collapse-checkbox' xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                                    <circle cx="7.5" cy="8" r="7.5" fill="white" />
                                                </svg>
                                                <div className='java-collapse-title'>
                                                    Complete the Bug Report Form
                                                </div>
                                            </div>
                                            <div className='java-collapse-content'>

                                                <div className='support-contact-note'>
                                                    Fill out the bug report form with the following details:
                                                </div>
                                                <div className='support-contact-response-link'>
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                            <circle cx="5" cy="5.5" r="5" fill="green" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <div className='support-contact-link-text'>
                                                            Name/Username:  <span className='support-contact-inner-bx-title-span'> Your name or username associated with the app.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='support-contact-response-link'>
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                            <circle cx="5" cy="5.5" r="5" fill="green" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <div className='support-contact-link-text'>
                                                            Email:    <span className='support-contact-inner-bx-title-span'>Provide a valid email address for follow-up communication. </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='support-contact-response-link'>
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                            <circle cx="5" cy="5.5" r="5" fill="green" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <div className='support-contact-link-text'>
                                                            Device Type:   <span className='support-contact-inner-bx-title-span'> Specify the make and model of your device (e.g., iPhone 12, Samsung Galaxy S21).</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='support-contact-response-link'>
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                            <circle cx="5" cy="5.5" r="5" fill="green" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <div className='support-contact-link-text'>
                                                            Operating System:      <span className='support-contact-inner-bx-title-span'> Mention the version of the operating system (iOS 15, Android 11).</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='support-contact-response-link'>
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                            <circle cx="5" cy="5.5" r="5" fill="green" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <div className='support-contact-link-text'>
                                                            App Version:  <span className='support-contact-inner-bx-title-span'> Provide the version number of the app (if available). </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='support-contact-response-link'>
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                            <circle cx="5" cy="5.5" r="5" fill="green" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <div className='support-contact-link-text'>
                                                            Steps to Reproduce:    <span className='support-contact-inner-bx-title-span'>Detailed steps to reproduce the bug. </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='support-contact-response-link'>
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                            <circle cx="5" cy="5.5" r="5" fill="green" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <div className='support-contact-link-text'>
                                                            Expected Behavior:  <span className='support-contact-inner-bx-title-span'> Describe what you expected to happen.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='support-contact-response-link'>
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                            <circle cx="5" cy="5.5" r="5" fill="green" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <div className='support-contact-link-text'>
                                                            Actual Behavior:     <span className='support-contact-inner-bx-title-span'>Explain what happened instead. </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='support-contact-response-link'>
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                            <circle cx="5" cy="5.5" r="5" fill="green" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <div className='support-contact-link-text'>
                                                            Attachments:     <span className='support-contact-inner-bx-title-span'>Attach screenshots or videos if applicable. </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='java-collapse-main-box'>
                                            <div className='java-collapse-box'>
                                                <svg className='java-collapse-checkbox' xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                                    <circle cx="7.5" cy="8" r="7.5" fill="white" />
                                                </svg>
                                                <div className='java-collapse-title'>
                                                    Submit the Bug Report
                                                </div>
                                            </div>
                                            <div className='java-collapse-content'>
                                                Click the "Submit" button to send your bug report to our development team.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 6 section */}
                        <div className='we-are-section'>
                            <div className='we-are-section-article'>
                                <div className='we-are-text' data-aos="fade-right">
                                    <div className='we-are-text-2'>What Happens Next?</div>
                                    <div className='bug-report-text-box'>
                                        <div className='support-contact-response-link'>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                    <circle cx="5" cy="5.5" r="5" fill="green" />
                                                </svg>
                                            </div>
                                            <div>
                                                <div className='support-contact-link-text'>
                                                    Acknowledgment
                                                </div>
                                            </div>
                                        </div>
                                        <span className='support-contact-inner-bx-title-span'>
                                            You will receive an acknowledgment email confirming the receipt of your bug report. This email will include a unique reference number for tracking purposes.
                                        </span>
                                    </div>
                                    <div>
                                        <div className='support-contact-response-link'>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                    <circle cx="5" cy="5.5" r="5" fill="green" />
                                                </svg>
                                            </div>
                                            <div>
                                                <div className='support-contact-link-text'>
                                                    Bug Triage
                                                </div>
                                            </div>
                                        </div>
                                        <span className='support-contact-inner-bx-title-span'>
                                            Our development team will review the bug report and assign it a priority based on its impact and severity.
                                        </span>
                                    </div>
                                    <div>
                                        <div className='support-contact-response-link'>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                    <circle cx="5" cy="5.5" r="5" fill="green" />
                                                </svg>
                                            </div>
                                            <div>
                                                <div className='support-contact-link-text'>
                                                    Investigation
                                                </div>
                                            </div>
                                        </div>
                                        <span className='support-contact-inner-bx-title-span'>
                                            The team will investigate the reported bug, attempting to reproduce it and identify the root cause.
                                        </span>
                                    </div>
                                    <div>
                                        <div className='support-contact-response-link'>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                    <circle cx="5" cy="5.5" r="5" fill="green" />
                                                </svg>
                                            </div>
                                            <div>
                                                <div className='support-contact-link-text'>
                                                    Resolution
                                                </div>
                                            </div>
                                        </div>
                                        <span className='support-contact-inner-bx-title-span'>
                                            Once the bug is identified, our team will work on a resolution.
                                        </span>
                                    </div>
                                    <div>
                                        <div className='support-contact-response-link'>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                    <circle cx="5" cy="5.5" r="5" fill="green" />
                                                </svg>
                                            </div>
                                            <div>
                                                <div className='support-contact-link-text'>
                                                    Communication
                                                </div>
                                            </div>
                                        </div>
                                        <span className='support-contact-inner-bx-title-span'>
                                            You will be kept informed of the bug resolution progress via email or the app's notification system.
                                        </span>
                                    </div>
                                </div>
                                <div className='we-are-image-fluid' data-aos="fade-left">
                                    <img src="/image/support-what-happen.webp" className='we-are-image' />
                                </div>
                            </div>
                        </div>
                        {/* 7 section */}
                        <div className='we-are-section'>
                            <div className='we-are-section-article'>
                            <div className='we-are-image-fluid' data-aos="fade-right">
                                    <img src="/image/support-bug-resolution.webp" className='we-are-image' />
                                </div>
                                <div className='we-are-text' data-aos="fade-left">
                                    <div className='we-are-text-2'>Bug Resolution Timeline</div>
                                    <div className='bug-report-text-box'>
                                        <div className='support-contact-response-link'>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                    <circle cx="5" cy="5.5" r="5" fill="green" />
                                                </svg>
                                            </div>
                                            <div>
                                                <div className='support-contact-link-text'>
                                                    Acknowledgment
                                                </div>
                                            </div>
                                        </div>
                                        <span className='support-contact-inner-bx-title-span'>
                                            You can expect to receive an acknowledgment email within 24 hours of submitting the bug report.
                                        </span>
                                    </div>
                                    <div className='bug-report-text-box'>
                                        <div className='support-contact-response-link'>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                    <circle cx="5" cy="5.5" r="5" fill="green" />
                                                </svg>
                                            </div>
                                            <div>
                                                <div className='support-contact-link-text'>
                                                    Resolution Time
                                                </div>
                                            </div>
                                        </div>
                                        <span className='support-contact-inner-bx-title-span'>
                                            The resolution time may vary based on the complexity of the bug. We aim to address critical bugs promptly and provide regular updates on the progress.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 8 section */}
                        <div className='we-are-section'>
                            <div className='we-are-section-article'>   
                                <div className='we-are-text' data-aos="fade-right">
                                    <div className='we-are-text-2'>Feedback and Follow-Up</div>
                                    <div className='bug-report-text-box'>
                                        <div className='support-contact-response-link'>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                    <circle cx="5" cy="5.5" r="5" fill="green" />
                                                </svg>
                                            </div>
                                            <div>
                                                <div className='support-contact-link-text'>
                                                    Feedback Request
                                                </div>
                                            </div>
                                        </div>
                                        <span className='support-contact-inner-bx-title-span'>
                                            After the bug is resolved, we may request feedback on the fix. Your input is valuable in ensuring the stability of the app.
                                        </span>
                                    </div>
                                    <div className='bug-report-text-box'>
                                        <div className='support-contact-response-link'>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                    <circle cx="5" cy="5.5" r="5" fill="green" />
                                                </svg>
                                            </div>
                                            <div>
                                                <div className='support-contact-link-text'>
                                                    Follow-Up Communication
                                                </div>
                                            </div>
                                        </div>
                                        <span className='support-contact-inner-bx-title-span'>
                                            Expect follow-up communication to confirm the resolution and provide any additional information if necessary.
                                        </span>
                                    </div>
                                    <div className='support-contact-link-text'>
                                        The functionality and user experience of the app has been improved thanks to your bug reports. We are grateful for your help in improving HKAPPS.
                                    </div>
                                    <div className='support-contact-link-text'>
                                        Customized Solutions: At HKAPPS, We take great satisfaction in our constant dedication to providing really customized Android app solutions. Our unparalleled agility and flexibility across the development lifecycle are what make us unique.
                                    </div>
                                </div>
                                <div className='we-are-image-fluid' data-aos="fade-left">
                                    <img src="/image/support-Feedback.webp" className='we-are-image' />
                                </div>
                            </div>
                        </div>
                        {/* 9 section */}
                        <div className='support-last-section'>
                            <div className='support-last-bx-sm'>
                                <div className='knowledge-base-content-title'>
                                    Recognizing Your Evolution
                                </div>
                                <div className='support-contact-link-text'>
                                    We start our collaboration with you by taking the time to fully comprehend your objectives, vision, and particular needs. We understand that as technology changes, so do organizations' needs in this ever-changing landscape.
                                </div>
                            </div>
                            <div className='support-last-bx-sm'>
                                <div className='knowledge-base-content-title'>
                                    Agile Methodology
                                </div>
                                <div className='support-contact-link-text'>
                                    We use an agile methodology that enables us to adapt to changes at every level of the development process. We can easily implement changes, additions, or new needs as your project develops thanks to this progressive methodology.
                                </div>
                            </div>
                            <div className='support-last-bx-sm'>
                                <div className='knowledge-base-content-title'>
                                    Working Together to Make Decisions
                                </div>
                                <div className='support-contact-link-text'>
                                    We value your opinions and support group decision-making. We keep lines of communication open throughout the development process to make sure you're actively involved in determining the project's path.
                                </div>
                            </div>
                            <div className='support-last-bx-sm'>
                                <div className='knowledge-base-content-title'>
                                    Flexibility in Scope
                                </div>
                                <div className='support-contact-link-text'>
                                    We are prepared to adapt to modifications in the project's scope because we recognize that requirements may change over time. We can handle adding a new feature that improves user experience or making changes to meet shifting market expectations.                                </div>
                            </div>
                            <div className='support-last-bx-sm'>
                                <div className='knowledge-base-content-title'>
                                    Real-Time Modifications
                                </div>
                                <div className='support-contact-link-text'>
                                    Our development staff is capable of making modifications in real time. If you require a prompt response on
                                </div>
                            </div>
                            <div className='support-last-bx-sm'>
                                <div className='knowledge-base-content-title'>
                                    Future Scalability
                                </div>
                                <div className='support-contact-link-text'>
                                    We plan with future scalability in mind. Our products are designed to grow with your company, not only to satisfy your immediate demands. Your app improves along with you as you do.
                                </div>
                            </div>
                            <div className='support-last-bx-bg'>
                                <div className='knowledge-base-content-title'>
                                    Open and Honest Communication
                                </div>
                                <div className='support-contact-link-text'>
                                    The foundation of our client partnerships is honesty. We ensure that you have the knowledge necessary to make educated decisions by keeping you updated at every stage of the process and giving you visibility into the development process.
                                </div>
                                <div className='support-contact-link-text'>
                                    Flexible thinking isn't simply a promise at HKAPPS, it's incorporated in our development process. Our goal is to transform your ideas into long-lasting, flexible, and creative Android applications. Together, let's go off on this adventure!
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <Footer />
            </div>
        </>
    );
}

export default Support