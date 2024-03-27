import Navbar from '../../Navbar/Navbar.jsx';
import Headline from '../../Headline/Headline';
import Discuss from '../../Home/Discuss/Discuss.jsx';
import Footer from '../../Home/Footer/Footer.jsx';
import Banner from '../../Banner/Banner.jsx';
import './CustomSolution.css'

const bannerObject = {
    boxSide: 'right',
    backgroundBanner: `/frame/custom-support-page-banner.webp`,
    bannerTitle: `Custom Solutions`,
    bannerTitleSpan: ``,
    bannerContent: `At HKAPPS, we pride ourselves on our unwavering commitment to delivering truly custom Android app solutions. What sets us apart is our unparalleled flexibility and adaptability throughout the development lifecycle.`,
};

const CustomSolution = () => {
    return (
        <>
            <Navbar activeNav="Solutions" />
            <Headline headlineText1="Tailored Android App Solutions for Your Unique Needs" headlineText2="Innovative Android Apps Designed Just for You" />
            <Banner bannerObject={bannerObject} />

            {/* 1 section */}
            <div className='website-main-section'>
                <div className='website-innner-section'>
                    <div className='shopify-description'>
                        <div className='we-are-section'>
                            <div className='we-are-section-article'>

                                <div className='we-are-text' data-aos="fade-right">
                                    <div className='we-are-text-1-black'>Understanding Your Evolution</div>
                                    <div className='we-are-text-3'>
                                        Our journey with you begins by deeply understanding your vision, goals, and unique requirements. We recognize that in the dynamic landscape of technology, businesses evolve, and so do their needs.
                                    </div>
                                </div>
                                <div className='we-are-image-fluid' data-aos="fade-left">
                                    <img src="/image/custom-solution-1.webp" className='we-are-image' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2 section */}
            <div className='website-main-section' style={{ backgroundColor: "white" }}>
                <div className='website-innner-section'>
                    <div className='shopify-description'>
                        <div className='we-are-section' style={{ backgroundColor: "white" }}>
                            <div className='we-are-section-article'>
                                <div className='we-are-image-fluid' data-aos="fade-right">
                                    <img src="/image/custom-solution-2.webp" className='we-are-image' />
                                </div>
                                <div className='we-are-text' data-aos="fade-left">
                                    <div className='we-are-text-1-black'>Agile Methodology</div>
                                    <div className='we-are-text-3'>We embrace an agile methodology that empowers us to be responsive to changes at every stage of development. This iterative approach allows us to seamlessly incorporate adjustments, additions, or new requirements as your project progresses.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3 section */}
            <div className='website-main-section'>
                <div className='website-innner-section'>
                    <div className='shopify-description'>
                        <div className='we-are-section'>
                            <div className='we-are-section-article'>
                                <div className='we-are-text' data-aos="fade-right">
                                    <div className='we-are-text-1-black'>Collaborative Decision-Making</div>
                                    <div className='we-are-text-3'>
                                        Your insights matter, and we believe in collaborative decision-making. Throughout the development process, we maintain open lines of communication, ensuring that you're actively involved in shaping the direction of the project.
                                    </div>
                                </div>
                                <div className='we-are-image-fluid' data-aos="fade-left">
                                    <img src="/image/custom-solution-3.webp" className='we-are-image' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4 section */}
            <div className='website-main-section' style={{ backgroundColor: "white" }}>
                <div className='website-innner-section'>
                    <div className='shopify-description'>
                        <div className='we-are-section' style={{ backgroundColor: "white" }}>
                            <div className='we-are-section-article'>
                                <div className='we-are-image-fluid' data-aos="fade-right">
                                    <img src="/image/custom-solution-4.webp" className='we-are-image' />
                                </div>
                                <div className='we-are-text' data-aos="fade-left">
                                    <div className='we-are-text-1-black'>Scope Flexibility</div>
                                    <div className='we-are-text-3'>We understand that requirements can evolve, and we're ready to accommodate changes in project scope. Whether it's a new feature that enhances user experience or an adjustment to align with changing market demands, we've got it covered.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5 section */}
            <div className='website-main-section'>
                <div className='website-innner-section'>
                    <div className='shopify-description'>
                        <div className='we-are-section'>
                            <div className='we-are-section-article'>

                                <div className='we-are-text' data-aos="fade-right">
                                    <div className='we-are-text-1-black'>Real-Time Adaptations</div>
                                    <div className='we-are-text-3'>
                                        Our development team is equipped to make real-time adaptations. Should you need a quick turnaround on adjustments, we prioritize efficiency without compromising on quality, ensuring your project stays on track.
                                    </div>
                                </div>
                                <div className='we-are-image-fluid' data-aos="fade-left">
                                    <img src="/image/custom-solution-5.webp" className='we-are-image' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 6 section */}
            <div className='website-main-section' style={{ backgroundColor: "white" }}>
                <div className='website-innner-section'>
                    <div className='shopify-description'>
                        <div className='we-are-section' style={{ backgroundColor: "white" }}>
                            <div className='we-are-section-article'>
                                <div className='we-are-image-fluid' data-aos="fade-right">
                                    <img src="/image/custom-solution-6.webp" className='we-are-image' />
                                </div>
                                <div className='we-are-text' data-aos="fade-left">
                                    <div className='we-are-text-1-black'>Scalability for the Future</div>
                                    <div className='we-are-text-3'>We design with scalability in mind. Our solutions aren't just about meeting today's needs; they're built to scale alongside yourbusiness. As you grow, your app grows with you.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 7 section */}
            <div className='website-main-section'>
                <div className='website-innner-section'>
                    <div className='shopify-description'>
                        <div className='we-are-section'>
                            <div className='we-are-section-article'>
                                <div className='we-are-text' data-aos="fade-right">
                                    <div className='we-are-text-1-black'>Transparent Communication</div>
                                    <div className='we-are-text-3'>
                                        Transparency is the cornerstone of our client relationships. We keep you informed every step of the way, providing visibility into the development process and ensuring that you have the information needed to make informed decisions.
                                    </div>
                                    <div className='we-are-text-3'>
                                    At HKAPPS, adaptability isn't just a promise; it's ingrained in our development DNA. We're here to turn your evolving ideas into innovative, flexible, and enduring Android applications. Let's embark on this journey together!
                                    </div>
                                </div>
                                <div className='we-are-image-fluid' data-aos="fade-left">
                                    <img src="/image/custom-solution-7.webp" className='we-are-image' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='website-main-section'>
                <div className='website-innner-section'>
                    {/* <Discuss /> */}
                </div>
                <Footer />
            </div>
        </>
    );
}

export default CustomSolution