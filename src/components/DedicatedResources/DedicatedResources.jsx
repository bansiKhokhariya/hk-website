import Navbar from '../Navbar/Navbar.jsx';
import Headline from '../Headline/Headline';
import Discuss from '../Home/Discuss/Discuss.jsx';
import Footer from '../Home/Footer/Footer.jsx';
import Banner from '../Banner/Banner.jsx';
import './DedicatedResources.css'
import Section1 from './section1/section1.jsx'
import Section2 from './section2/section2.jsx'
import Section3 from './section3/section3.jsx'
import Section4 from './section4/section4.jsx'
import Section5 from './section5/section5.jsx'
import Section6 from './section6/section6.jsx'
import Section7 from './section7/section7.jsx'
import Section8 from './section8/section8.jsx'
import Section9 from './section9/section9.jsx'
import Section10 from './section10/section10.jsx'
import Section11 from './section11/section11.jsx'
import Section12 from './section12/section12.jsx'
import Section13 from './section13/section13.jsx'

const bannerObject = {
    boxSide: 'right',
    backgroundBanner: `/frame/dedicatedResources-page-banner.webp`,
    bannerTitle: `Introduction`,
    bannerTitleSpan: ``,
    bannerContent: `At HKAPPS, we are aware that creating outstanding mobile applications calls for a combination of creativity, talent, and commitment. Welcome to our hiring section just for resources, where we provide you with the chance to add seasoned individuals who are motivated about bringing your app ideas to life for your team.`,
};

const DedicatedResources = () => {
    return (
        <>
            <Navbar activeNav="DedicatedResources" />
            <Headline headlineText1="Mobile App Development" headlineText2="IT Services and IT Consulting" />
            <Banner bannerObject={bannerObject} />
            <div className='website-main-section'>
                <div className='website-innner-section'>
                    <div className='shopify-description'>

                        {/* section 1 */}
                        <Section1 />

                        {/* section 2 */}
                        <Section2 />

                        {/* section 3 */}
                        <Section3 />

                        {/* section 4 */}
                        <Section4 />

                    </div>
                </div>
            </div >

            {/* section 4 content part */}
            <div className='website-main-section' style={{ background: "#CEEBE2", marginTop: '-80px' }} >
                <div className='website-innner-section'>
                    <div className='hiring-model-section-container'>
                        <div className='hiring-model-section-bx'>
                            <div className='hiring-model-section-bx-up'>
                                <div className='hiring-model-number'>
                                    1
                                </div>
                                <div className='hiring-model-bx-title'>
                                    Full-Time Engagement
                                </div>
                            </div>
                            <div className='hiring-model-section-bx-down'>
                                <div className='hiring-model-bx-text-bg'>Overview</div>
                                <div className='hiring-model-bx-text'>
                                    <span style={{ fontWeight: 600, color: "black" }}>Dedication:</span>
                                    <br />
                                    Our developer works just on your project, becoming a valuable member of your team.
                                </div>
                                <div className='hiring-model-bx-text'>
                                    <span style={{ fontWeight: 600, color: "black" }}>Benefits:</span>
                                    <br />
                                    In-depth knowledge of the difficulties of your project and deep engagement.
                                </div>
                                <div className='hiring-model-bx-text'>
                                    <span style={{ fontWeight: 600, color: "black" }}>Ongoing availability of further</span>cooperation and correspondence.
                                </div>
                                <div className='hiring-model-bx-text'>
                                    <span style={{ fontWeight: 600, color: "black" }}>Flexibility:</span>
                                    <br />
                                    Perfect for ongoing development requirements or projects with a long duration.
                                    <br /><br />
                                    As the team grows, add more full-time developers to meet demand.
                                </div>
                            </div>

                            <div className='hiring-model-bx-text'></div>
                        </div>
                        <div className='hiring-model-section-bx'>
                            <div className='hiring-model-section-bx-up'>
                                <div className='hiring-model-number'>
                                    2
                                </div>
                                <div className='hiring-model-bx-title'>
                                    Part-Time Engagement
                                </div>
                            </div>
                            <div className='hiring-model-section-bx-down'>
                                <div className='hiring-model-bx-text-bg'>Overview</div>
                                <div className='hiring-model-bx-text'>
                                    <span style={{ fontWeight: 600, color: "black" }}>Availability:</span>
                                    <br />
                                    Pay on a monthly model; developers are paid according to the number of hours they put in.
                                </div>
                                <div className='hiring-model-bx-text'>
                                    <span style={{ fontWeight: 600, color: "black" }}>Benefits:</span>
                                    <br />
                                    •  Excellent for one-time assignments, specialised work, or service recommendations.
                                    <br />
                                    • economical for projects with unpredictable workloads.
                                </div>
                                <div className='hiring-model-bx-text'>
                                    <span style={{ fontWeight: 600, color: "black" }}>Flexibility:</span>
                                    <br />
                                    • Gives developers access whenever they need it for irregular or short-term projects.
                                    <br />
                                    • No commitments for a long time, allowing you to adjust as needed in terms of size.
                                </div>
                            </div>

                            <div className='hiring-model-bx-text'></div>
                        </div>
                        <div className='hiring-model-section-bx'>
                            <div className='hiring-model-section-bx-down'>
                                <div className='hiring-model-bx-title'>
                                    <span>Customized Solutions for Your Success:</span>
                                </div>
                                <div className='hiring-model-bx-text'>
                                    Our objective is to offer you an approach to recruitment that properly fits the special needs of your project. We provide tailored solutions that put your project's success first, whether you require a committed team for a long-term commitment or customizable support for shorter tasks.
                                </div>
                                <div className='hiring-model-bx-title'>
                                    <span>Customized Solutions for Your Success:</span>
                                </div>
                                <div className='hiring-model-bx-text'>
                                    Are you prepared to start working with an adaptable and scalable team to design a mobile application? Examine our employment procedures and let's work together to create something truly amazing!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <div className='website-main-section'>
                <div className='website-innner-section'>
                    {/* section 5 */}
                    <Section5 />

                    {/* section 6 */}
                    <Section6 />

                    {/* section 7 */}
                    <Section7 />

                    {/* section 8 */}
                    <Section8 />

                    {/* section 9 */}
                    <Section9 />

                    {/* section 10 */}
                    <Section10 />

                    {/* section 11 */}
                    <Section11 />

                    {/* section 12 */}
                    <Section12 />

                    {/* section 13 */}
                    <Section13 />


                    {/* <Discuss /> */}
                </div>
                <Footer />
            </div >




        </>
    );
}

export default DedicatedResources