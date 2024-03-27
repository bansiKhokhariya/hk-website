import Navbar from '../../../Navbar/Navbar.jsx';
import Headline from '../../../Headline/Headline';
import Discuss from '../../../Home/Discuss/Discuss.jsx';
import Footer from '../../../Home/Footer/Footer.jsx';
import Banner from '../../../Banner/Banner.jsx';
import './Story.css'

const bannerObject = {
  boxSide: 'right',
  backgroundBanner: `/frame/our-story-page-banner.webp`,
  bannerTitle: `Our Story`,
  bannerTitleSpan: ``,
  bannerContent: `HKAPPS is a place where producing mobile apps is more than just a business - it's a tale of passion, creative thinking, and a dedication to turning concepts into extraordinary online experiences.`,
};

const Story = () => {
  return (
    <>
      <Navbar activeNav="Company" />
      <Headline headlineText1="Get a Chance to know About Us and Relive Our Journey" headlineText2="Meet our dynamic team and discover the roadmap to success as we will let you know how we work" />
      <Banner bannerObject={bannerObject} />

      <div className='website-main-section'>
        <div className='website-innner-section'>
          <div className='shopify-description'>
            {/* 1 section */}
            <div className='we-are-section'>
              <div className='we-are-section-article'>
                <div className='we-are-text' data-aos="fade-right">
                  <div className='we-are-text-1-black'>Our Beginnings</div>
                  <div className='we-are-text-3'>
                    in  <span className='we-are-text-3-black'>[2020]</span> by <span className='we-are-text-3-black'> [Hiteshkumar Savaliya]</span> founded <span className='we-are-text-3-black'>[2020]</span>. The goal was simple but powerful: to develop applications for mobile devices that surpass consumer expectations while still meeting our clients' technological demands.
                  </div>
                </div>
                <div className='we-are-image-fluid' data-aos="fade-left">
                  <img src="/image/company-story-1.webp" className='we-are-image' />
                </div>
              </div>
            </div>
            {/* 2 section */}
            <div>
              <div className='beginning-section'>
                <div className='beginning-section-bx'>
                  <div>
                    <div className='beginning-section-bx-title'>Our Beginnings</div>
                    <div className='beginning-section-bx-text'>Come join us in our journey to growth and betterment</div>
                  </div>
                </div>
                <div className='beginning-section-bx'>
                  <div className='beginning-section-bx-year'>2020</div>
                  <div className='beginning-section-bx-sm-dot'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
                      <circle cx="3.5" cy="3.5" r="3" fill="#00BF67" />
                    </svg>
                  </div>
                  <div className='beginning-section-bx-year'>2021</div>
                  <div className='beginning-section-bx-sm-dot'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
                      <circle cx="3.5" cy="3.5" r="3" fill="#00BF67" />
                    </svg>
                  </div>
                  <div className='beginning-section-bx-year'>2022</div>
                  <div className='beginning-section-bx-sm-dot'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
                      <circle cx="3.5" cy="3.5" r="3" fill="#00BF67" />
                    </svg>
                  </div>
                  <div className='beginning-section-bx-year'>2023</div>
                </div>
              </div>
              <img src="/image/story_banner.webp" className='beginning-section-bx-image' alt="" />
            </div>
            {/* 3 section */}
            <div className='story-third-section'>
              <div className="story-third-section-bx-image">
                <img src="/image/story-third-sec-1.webp" className='story-third-bx-image' />
              </div>
              <div className='story-third-section-bx'>
                <div className='story-sm-bx-title'>Join Us on Our Journey</div>
                <div className='story-sm-bx-title-text'>We sincerely encourage you to go with us on this wonderful adventure, regardless of your membership: customer, partner, or devotee about the world of mobile apps. Let's collaborate to develop and explore the mobile technology of the future.</div>
              </div>
              <div className='story-third-section-bx-image'>
                <img src="/image/story-third-sec-2.webp" className='story-third-bx-image' />
              </div>
              <div className='story-third-section-bx'>
                <div className='story-sm-bx-title'>The Future Ahead</div>
                <div className='story-sm-bx-title-text'>This is not where the journey ends. We're passionate about technology's boundless potential and tomorrow's possibilities. HKAPPS is dedicated to remaining on the cutting edge of the field of mobile app development, spotting trends, and creating creative solutions.</div>
              </div>
              <div className='story-third-section-bx-image'>
                <img src="/image/story-third-sec-3.webp" className='story-third-bx-image' />
              </div>
              <div className='story-third-section-bx'>
                <div className='story-sm-bx-title'>Connect with [Your Company Name]</div>
                <div className='story-sm-bx-title-text' style={{color:"black" , fontWeight:"600"}}>Are you prepared to start working on apps with HKAPPS?</div>
                <div className='story-sm-bx-title-text'> <span style={{color:"black" , fontWeight:"600"}}>Get in touch</span> with us to share your concepts, examine options, and let's work together to create something truly amazing.</div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>







    </>
  );
}

export default Story