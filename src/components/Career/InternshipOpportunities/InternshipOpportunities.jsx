import Navbar from '../../Navbar/Navbar.jsx';
import Headline from '../../Headline/Headline';
import Footer from '../../Home/Footer/Footer.jsx';
import Banner from '../../Banner/Banner.jsx';
import './InternshipOpportunities.css'

const bannerObject = {
  boxSide: 'right',
  backgroundBanner: `/frame/internshipOpportunities-page-banner.webp`,
  bannerTitle: `Internship Opportunities`,
  bannerTitleSpan: ``,
  bannerContent: `At HKAPPS, we value growing potential and giving individuals a chance to convert their love of technology into useful products. The internship programs are made to provide practical experience, guidance, and the ability to work on innovative projects in the fast-paced field of online and mobile application development.`,
};

const InternshipOpportunities = () => {
  return (
    <>
      <Navbar activeNav="Career" />
      <Headline headlineText1="Embark on a Journey of Learning and Innovation. Our Internship Opportunities are not just about gaining experience; they're about shaping your potential and contributing to the future of technology. Join us, where creativity meets code, and let's build the extraordinary together." headlineText2="Embark on a Journey of Learning and Innovation. Our Internship Opportunities are not just about gaining experience; they're about shaping your potential and contributing to the future of technology. Join us, where creativity meets code, and let's build the extraordinary together." />

      <Banner bannerObject={bannerObject} />

      <div className='website-main-section'>
        <div className='website-innner-section'>

          {/* section 1 */}
          {/* <div className='currentOpenings-search'>

          </div> */}
          <div className='internshipOpportunities-board-section'>
            <img src="/image/internshipOpportunities-1.webp" className='internshipOpportunities-board-image' alt="" />
          </div>

          {/* section 2 */}
          <div className='we-are-section'>
            <div className='we-are-section-article'>
              <div className='we-are-text' data-aos="fade-right">
                <div className='we-are-text-1-black'>Why Intern with HKAPPS?</div>
                <div className='we-are-text-3'>
                  <span className='we-are-text-3-black'>Practical Learning</span> Engage in actual projects while collaborating with seasoned experts who are leaders in their domains.
                  <br /><br />
                  <span className='we-are-text-3-black'>Assistance with mentoring:</span> Take advantage of individualized advice and mentoring that will accelerate your career advancement. <br />
                  Join the Innovation Hub to be a part of an innovative atmosphere that values and celebrates your ideas.
                  <br /><br />
                  <span className='we-are-text-3-black'>Increasing your professional network:</span> Meeting industry leaders, and getting into exclusive events are all examples of networking.

                </div>
              </div>
              <div className='we-are-image-fluid' data-aos="fade-left">
                <img src="/image/internshipOpportunities-2.webp" className='we-are-image' />
              </div>
            </div>
          </div>

          {/* section 3 */}
          <div className='we-are-section'>
            <div className='we-are-section-article'>
              <div className='internshipOpportunities-we-are-image-fluid' data-aos="fade-right">
                <img src="/image/internshipOpportunities-3.webp" className='internshipOpportunities-we-are-image' />
              </div>
              <div className='internshipOpportunities-we-are-text' data-aos="fade-left">
                <div className='we-are-text-1-black'>How to Apply</div>
                <div className='we-are-text-3'>
                  <span className='we-are-text-3-black'>To express your interest in our internship opportunities</span>
                  <br /><br />
                  • Please send your resume
                  <br />
                  • Cover letter
                  <br />
                  • Any relevant work samples
                  <br /><br />
                  <span className='we-are-text-3-black'>@[hr@hkapps.co].Clearly indicate the internship position you are applying for in the subject line</span>
                </div>
                <div>
                  <button className='we-are-button'>
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* section 4 */}
          <div className='we-are-section'>
            <div className='we-are-section-article'>
              <div className='we-are-text' data-aos="fade-right">
                <div className='we-are-text-1-black'>Join the Innovation Journey</div>
                <div className='we-are-text-3'>
                  Not only does HKAPPS, provide internships, but we also extend an invitation for you to join us on our mission to revolutionize digital innovation. All set to leave your mark? Take the first step toward a fulfilling career in technology by looking through our available internship positions.
                  <br /><br />
                  <span className='we-are-text-3-black'>• Explore Open Positions</span>
                  <br />
                  <span className='we-are-text-3-black'>• Connect with our HR Team</span>
                </div>
              </div>
              <div className='we-are-image-fluid' data-aos="fade-left">
                <img src="/image/internshipOpportunities-4.webp" className='we-are-image-slide' />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default InternshipOpportunities