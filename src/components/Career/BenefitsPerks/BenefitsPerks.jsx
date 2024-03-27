import Navbar from '../../Navbar/Navbar.jsx';
import Headline from '../../Headline/Headline';
import Footer from '../../Home/Footer/Footer.jsx';
import Banner from '../../Banner/Banner.jsx';
import './BenefitsPerks.css'

const bannerObject = {
  boxSide: 'right',
  backgroundBanner: `/frame/benefitsPerks-page-banner.webp`,
  bannerTitle: `Benefits and Perks`,
  bannerTitleSpan: ``,
  bannerContent: `At HKAPPS, we think that success and innovation are largely dependent on having a vibrant and driven staff. We are dedicated to giving our staff members an excellent working environment and a variety of benefits that improve their health and career development.`,
};

const BenefitsPerks = () => {
  return (
    <>
      <Navbar activeNav="Career" />
      <Headline headlineText1="Embark on a Journey of Learning and Innovation. Our Internship Opportunities are not just about gaining experience; they're about shaping your potential and contributing to the future of technology. Join us, where creativity meets code, and let's build the extraordinary together." headlineText2="Embark on a Journey of Learning and Innovation. Our Internship Opportunities are not just about gaining experience; they're about shaping your potential and contributing to the future of technology. Join us, where creativity meets code, and let's build the extraordinary together." />

      <Banner bannerObject={bannerObject} />

      {/* section 1 */}
      <div className='website-main-section'>
        <div className='website-innner-section'>
          <div className='benefitsPerks-section-1'>
            <div className='benefitsPerks-section-1-left'>
              <div className='benefitsPerks-section-1-title'>
                Health <br /> <span className='benefitsPerks-section-1-title-span'>Insurance</span>
              </div>
              <div className='benefitsPerks-section-1-textarea'>
                <div className='we-are-text-3'>
                  The health and wellbeing of our workforce come first. With our all-inclusive health insurance plans, you and your family will have access to:
                  <br /> <br />
                  <span className='we-are-text-3-black'>• Quality medical</span>
                  <br />
                  <span className='we-are-text-3-black'>• Dental</span>
                  <br />
                  <span className='we-are-text-3-black'>• Vision care</span>
                  <br /><br />
                  Beyond the ordinary, we go above and beyond to ensure your well-being by putting in place tech-specific health initiatives tailored to our developers' and designers' particular requirements.
                </div>
              </div>
            </div>
            <div className='benefitsPerks-section-image-main'>
              <div className='benefitsPerks-section-image'>
                <img src="/image/perk-1.webp" className='perk-1-image' alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div className='benefitsPerks-section-2'>
        <img src="/image/perk-2.webp" className='perk-2-image' alt="" />
        <div className='benefitsPerks-section-2-container'>
          <div className='benefitsPerks-section-2-title'>
            Flexible Work Hours
          </div>
          <div className='benefitsPerks-section-2-text'>
            Our flexible work hours policy is based on our recognition of the value of work-life balance. We are aware that ideas don't always follow a 9 to 5 routine and that inspiration can strike at any time. Our results-driven workplace culture gives you the tools you need to efficiently manage your time, whether you're an early riser or a night owl.
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div className='website-main-section'>
        <div className='website-innner-section'>
          <div className='benefitsPerks-section-3'>
            <div className='benefitsPerks-section-image-main'>
              <div className='benefitsPerks-section-image'>
                <img src="/image/perk-3.webp" className='perk-1-image' alt="" />
              </div>
            </div>
            <div className='benefitsPerks-section-3-container'>
              <div>
                <div className='benefitsPerks-section-3-title'>Professional   </div>
                <div className='benefitsPerks-section-3-title-span'>Development <br /> Opportunities</div>
              </div>
              <div className='benefitsPerks-section-3-text'>Take advantage of our specialised professional development programs to stay on the cutting edge of technology. We make an investment in your development by giving you access to state-of-the-art mentoring programs, training programs, and resources for ongoing education. We are dedicated to supporting your long-term professional goals in addition to your current position.</div>
            </div>
          </div>
        </div>
      </div>

      {/* section 4 */}
      <div className="benefitsPerks-section-4">
        <img src="/image/perk-4.webp" className='perk-4-image' alt="" />
        <div className="benefitsPerks-section-4-container">
          <h1 className='benefitsPerks-section-2-title'>Friendly Environment</h1>
          <div className='benefitsPerks-section-2-text'>
            Join a collaborative and enjoy a welcoming, and inclusive workplace that celebrates diversity and encourages candid communication. The concept of open doors promotes communication among everyone with an interest, guaranteeing that your thoughts are taken into consideration and your input is valued. We think that a welcoming work environment promotes productivity.
          </div>
          <div className='benefitsPerks-section-2-text'>
          Put forth a lot of work and have fun. We have a variety of enjoyable activities and festive parties to honor all of the accomplishments, large and little. From tech-focused challenges to project milestone celebrations, we are committed to fostering team-building experiences. Come experience a blend of work and play that embodies the dynamic spirit of HKAPPS.
          </div>
        </div>
      </div>



      <div className='website-main-section'>
        <div className='website-innner-section'>

          {/* section 5 */}
          <div className='benefitsPerks-section-1'>
            <div className='benefitsPerks-section-1-left'>
              <div className='benefitsPerks-section-1-title'>
                Fun and
                <br /> <span className='benefitsPerks-section-1-title-span'>Festival </span>
              </div>
              <div className='benefitsPerks-section-1-textarea'>
                <div className='we-are-text-3'>
                Work hard, play hard. We celebrate the successes, big and small, with a range of fun activities and festive events. From tech-focused challenges to project milestone celebrations, we believe in creating moments that bring the team together. Join us for a mix of work and play that defines the vibrant culture at HKAPPS.
                </div>
              </div>
            </div>
            <div className='benefitsPerks-section-image-main'>
              <div className='benefitsPerks-section-image'>
                <img src="/image/perk-5.webp" className='perk-1-image' alt="" />
              </div>
            </div>
          </div>

        </div>
        <Footer />
      </div>

    </>
  );
}

export default BenefitsPerks