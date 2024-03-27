import Navbar from '../../../Navbar/Navbar.jsx';
import Headline from '../../../Headline/Headline';
import Footer from '../../../Home/Footer/Footer.jsx';
import Banner from '../../../Banner/Banner.jsx';
import './BecomePartner.css'

const bannerObject = {
  boxSide: 'right',
  backgroundBanner: `/frame/joinus-page-banner.webp`,
  bannerTitle: `Become a Partner`,
  bannerTitleSpan: ``,
  bannerContent: `Welcome to  HKAPPS ,Partnership Program \n \n At HKAPPS, we think that working together might encourage innovation and help us provide our clients with outstanding solutions. Our Partnership Program was created to create win-win connections with businesses and people who are as passionate about cutting-edge mobile app development as we are. Partners who team up with us have access to a variety of exclusive advantages and opportunities.`,
};

const BecomePartner = () => {
  return (
    <>
      <Navbar activeNav="Company" />
      <Headline headlineText1="Get a Chance to know About Us and Relive Our Journey" headlineText2="Meet our dynamic team and discover the roadmap to success as we will let you know how we work" />
      <Banner bannerObject={bannerObject} />

      {/* section 1 */}
      <div className='joinus-main-section'>
        <div className='join-us-inner-section'>
          <div className='we-are-text-1'>Key Benefits of Partnering with HKAPPS</div>
          <img src="/image/join-us-map.webp" className='join-us-map-img' alt="" />
        </div>
      </div>

      <div className='website-main-section'>
        <div className='website-innner-section'>
          <div className='shopify-description'>

            {/* section 2 */}
            <div className='we-are-section'>
              <div className='we-are-section-article'>
                <div className='we-are-text' data-aos="fade-right">
                  <div className='we-are-text-1-black'>How to Join</div>
                  <div className='we-are-text-3'>It's simple to get started! To indicate your interest in joining our team as a partner, just fill out our online application form. After examining your application, an employee of our staff will contact you to talk about any possible joint ventures.</div>
                </div>
                <div className='we-are-image-fluid' data-aos="fade-left">
                  <img src="/image/joinus-1.webp" className='we-are-image' />
                </div>
              </div>
            </div>

            {/* section 3 */}
            <div className='we-are-section'>
              <div className='we-are-section-article'>
                <div className='we-are-image-fluid' data-aos="fade-right">
                  <img src="/image/joinus-2.webp" className='we-are-image' />
                </div>
                <div className='we-are-text' data-aos="fade-left">
                  <div className='we-are-text-1-black'>Contact Us</div>
                  <div className='we-are-text-3'>
                    Please use our contact form or send us an email at partnerships@  HKAPPS .com if you have any questions or would like more information about our partnership program.
                    <br /><br />
                    Come along on this amazing journey of excellence and creative thinking in the creation of mobile apps!
                  </div>
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

export default BecomePartner