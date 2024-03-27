import Navbar from '../../Navbar/Navbar.jsx';
import Headline from '../../Headline/Headline';
import Footer from '../../Home/Footer/Footer.jsx';
import Banner from '../../Banner/Banner.jsx';
import './DigitalInnovation.css'

const bannerObject = {
  boxSide: 'right',
  backgroundBanner: `/frame/digitalInnovation-page-banner.webp`,
  bannerTitle: `Join HKAPPS and shape the future of Digital Innovation`,
  bannerTitleSpan: ``,
  bannerContent: `HKAPPS, is seeking passionate people to accompany us on this thrilling adventure as we are committed to pushing the boundaries of digital innovation. Examine our available openings if you're prepared to create an impression in the field of mobile app development and join a vibrant team that values innovation, teamwork, and cutting-edge technology.`,
};

const DigitalInnovation = () => {
  return (
    <>
      <Navbar activeNav="Career" />
      <Headline headlineText1="Embark on a Journey of Learning and Innovation. Our Internship Opportunities are not just about gaining experience; they're about shaping your potential and contributing to the future of technology. Join us, where creativity meets code, and let's build the extraordinary together." headlineText2="Embark on a Journey of Learning and Innovation. Our Internship Opportunities are not just about gaining experience; they're about shaping your potential and contributing to the future of technology. Join us, where creativity meets code, and let's build the extraordinary together." />
      <Banner bannerObject={bannerObject} />

      {/* section 1 */}
      <div className='digitalInnovation-section-1'>
        <div className='digitalInnovation-image-section'>
          <img src="/image/digitalInnovation-1.webp" className='digitalInnovation-image-1' alt="" />
        </div>
        <div className='digitalInnovation-text-section'>
          <div className='we-are-text-1-black'>
            Explore Open Positions
          </div>
          <div className='we-are-text-3'>
            Take a profession where you are appreciated for your talents, ideas, and limitless potential. We are always on the lookout for highly qualified individuals to contribute to our diverse initiatives and push the boundaries of innovation.
          </div>
          <div className='we-are-text-3'>
            <span className='we-are-text-3-black'>Current Openings</span>
            <br />
            • Mobile App Developer
            <br />
            • UI/UX Designer
            <br />
            • Project Manager
            <br />
            • Quality Assurance Engineer
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div className='digitalInnovation-section-2'>
        <div className='digitalInnovation-text-section'>
          <div className='we-are-text-1-black'>
            Connect with our HR Team
          </div>
          <div className='we-are-text-3'>
            Are you prepared to lead the way in revolutionary digital solutions? We at HKAPPS are searching for bright people just like you to join our team as we work to redefine the possibilities in mobile app development.          </div>
          <div className='we-are-text-3-black'>
            Would you like more information about  HKAPPS. possibilities or have questions? We have assistance from our HR staff. Contact us at any time at:
          </div>
          <div className='we-are-text-3'>
            <span className='we-are-text-3-black'>Contact No:</span> 7434928672
            <br />
            <span className='we-are-text-3-black'>Email:</span> hr@hkapps.co
          </div>
          <div className='we-are-text-3'>
            <span className='we-are-text-3-black'>• Application Assistance:</span> Need help with your application or have specific questions about a role? Our HR team is ready to assist.
            <br />
            <span className='we-are-text-3-black'>• Company Culture Insights:</span> Learn more about what makes HKAPPS  a unique and exciting place to work.
            <br />
            <span className='we-are-text-3-black'>• Career Opportunities Discussion:</span> Explore how your skills and aspirations align with our current and future openings.
          </div>
        </div>
        <div className='digitalInnovation-image-section'>
          <img src="/image/digitalInnovation-2.webp" className='digitalInnovation-image-2' alt="" />
        </div>
      </div>

      {/* section 3 */}
      {/* <div className=''> */}
      <img src="/image/digitalInnovation-image-3.webp" className='digitalInnovation-image-3' alt="" />
      {/* </div> */}

      <div className='website-main-section'>
        <div className='website-innner-section'>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default DigitalInnovation












