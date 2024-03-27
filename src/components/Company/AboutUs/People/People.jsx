import Navbar from '../../../Navbar/Navbar.jsx';
import Headline from '../../../Headline/Headline';
import Discuss from '../../../Home/Discuss/Discuss.jsx';
import Footer from '../../../Home/Footer/Footer.jsx';
import Banner from '../../../Banner/Banner.jsx';
import './People.css'

const bannerObject = {
  boxSide: 'right',
  backgroundBanner: `/frame/our-people-page-banner.webp`,
  bannerTitle: `Our People`,
  bannerTitleSpan: ``,
  bannerContent: `HKAPPS is a place where producing mobile apps is more than just a business - it's a tale of passion, creative thinking, and a dedication to turning concepts into extraordinary online experiences.`,
};

const People = () => {
  return (
    <>
      <Navbar activeNav="Company" />
      <Headline headlineText1="Get a Chance to know About Us and Relive Our Journey" headlineText2="Meet our dynamic team and discover the roadmap to success as we will let you know how we work" />
      <Banner bannerObject={bannerObject} />

      {/* section 1 */}
      <div className='people-stack-bg-bx'>
        <img src="/image/people-stack-1.webp" className='people-stack-bg-image' alt="" />

        <div className='people-text-section'>
          <div className='people-header-title'>
            <div className='people-header-left-header'>Leadership team</div>
            <div className='people-header-right-header'>Founder & CEO</div>
          </div>
          <div className='people-text'>
            With a background in, (I.T) Android App Development, <span style={{ color: "#000", fontWeight: "600" }}> Hiteshkumar Savalia</span>, is the visionary personality behind <span style={{ color: "#000", fontWeight: "600" }}>HKAPPS’s</span>. He provides a lot of knowledge and an innovative strategy to the team.
          </div>
        </div>

        <div className='people-box-section'>
          <div className='people-sm-box-up'>
            <div className='people-sm-box-inner'>
              <img src="/image/people-leadership-1.webp" className='people-sm-box-inner-image' alt="" />
              <div>
                <div className='people-bx-black-title'>Name</div>
                <div className='people-bx-green-title'>Founder</div>
              </div>
            </div>
          </div>
          <div className='people-sm-box-down'>
            <div className='people-sm-box-inner'>
              <img src="/image/people-leadership-1.webp" className='people-sm-box-inner-image' alt="" />
              <div>
                <div className='people-bx-black-title'>Name</div>
                <div className='people-bx-green-title'>Founder</div>
              </div>
            </div>
          </div>
          <div className='people-sm-box-up'>
            <div className='people-sm-box-inner'>
              <img src="/image/people-leadership-1.webp" className='people-sm-box-inner-image' alt="" />
              <div>
                <div className='people-bx-black-title'>Name</div>
                <div className='people-bx-green-title'>Founder</div>
              </div>
            </div>
          </div>
          <div className='people-sm-box-down'>
            <div className='people-sm-box-inner'>
              <img src="/image/people-leadership-1.webp" className='people-sm-box-inner-image' alt="" />
              <div>
                <div className='people-bx-black-title'>Name</div>
                <div className='people-bx-green-title'>Founder</div>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* section 2 */}
      <div className='people-stack-bg-bx'>
        <img src="/image/people-stack-2.webp" className='people-stack-bg-image' alt="" />
        <div className='people-text-section'>
          <div className='people-header-title'>
            <div className='people-header-left-header' style={{ color: "#00BF67" }}>Development team</div>
            <div className='people-header-right-header' style={{ color: "#FFF" }}>Senior Mobile Developer</div>
          </div>
          <div className='people-text' style={{ color: "#FFF" }}>
            Our development team provides the imaginative flame that converts suggestions into functional, cutting-edge mobile apps. Here are a handful of our outstanding developers.
          </div>
          <div className='people-text' style={{ color: "#FFF" }}>
            Bio: [Developer Name] specializes in [specific technology or skill]. With [X] years of experience, [he/she] has played a crucial role in the success of projects like [mention a notable project].
          </div>
        </div>
        <div className='people-box-section'>
          <div className='people-sm-box-up'>
            <div className='people-sm-box-inner'>
              <img src="/image/people-leadership-1.webp" className='people-sm-box-inner-image' alt="" />
              <div>
                <div className='people-bx-black-title'>Name</div>
                <div className='people-bx-green-title'>Founder</div>
              </div>
            </div>
          </div>
          <div className='people-sm-box-down'>
            <div className='people-sm-box-inner'>
              <img src="/image/people-leadership-1.webp" className='people-sm-box-inner-image' alt="" />
              <div>
                <div className='people-bx-black-title'>Name</div>
                <div className='people-bx-green-title'>Founder</div>
              </div>
            </div>
          </div>
          <div className='people-sm-box-up'>
            <div className='people-sm-box-inner'>
              <img src="/image/people-leadership-1.webp" className='people-sm-box-inner-image' alt="" />
              <div>
                <div className='people-bx-black-title'>Name</div>
                <div className='people-bx-green-title'>Founder</div>
              </div>
            </div>
          </div>
          <div className='people-sm-box-down'>
            <div className='people-sm-box-inner'>
              <img src="/image/people-leadership-1.webp" className='people-sm-box-inner-image' alt="" />
              <div>
                <div className='people-bx-black-title'>Name</div>
                <div className='people-bx-green-title'>Founder</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section 3 */}
      <div className='people-stack-bg-bx'>
        <img src="/image/people-stack-3.webp" className='people-stack-bg-image' alt="" />
        <div className='people-text-section'>
          <div className='people-header-title'>
            <div className='people-header-left-header'>Design team</div>
            <div className='people-header-right-header'>Lead UX/UI Designer</div>
          </div>
          <div className='people-text' style={{ color: "#000" }}>
            Crafting visually stunning and user-friendly interfaces is the forte of our design team. Get to know the creative minds behind the aesthetics:
          </div>
          <div className='people-text' style={{ color: "#000" }}>
            <span style={{ color: "#007B42", fontWeight: "600" }}>Bio</span>:  <span style={{ color: "#000", fontWeight: "600" }}>[Designer Name]</span> is a seasoned designer with a keen eye for detail. <span style={{ color: "#000", fontWeight: "600" }}>[He/She]</span> has been instrumental in creating award-winning user interfaces for apps like <span style={{ color: "#000", fontWeight: "600" }}>[mention a notable project]</span>.
          </div>
        </div>
        <div className='people-box-section'>
          <div className='people-sm-box-up'>
            <div className='people-sm-box-inner'>
              <img src="/image/people-leadership-1.webp" className='people-sm-box-inner-image' alt="" />
              <div>
                <div className='people-bx-black-title'>Name</div>
                <div className='people-bx-green-title'>Founder</div>
              </div>
            </div>
          </div>
          <div className='people-sm-box-down'>
            <div className='people-sm-box-inner'>
              <img src="/image/people-leadership-1.webp" className='people-sm-box-inner-image' alt="" />
              <div>
                <div className='people-bx-black-title'>Name</div>
                <div className='people-bx-green-title'>Founder</div>
              </div>
            </div>
          </div>
          <div className='people-sm-box-up'>
            <div className='people-sm-box-inner'>
              <img src="/image/people-leadership-1.webp" className='people-sm-box-inner-image' alt="" />
              <div>
                <div className='people-bx-black-title'>Name</div>
                <div className='people-bx-green-title'>Founder</div>
              </div>
            </div>
          </div>
          <div className='people-sm-box-down'>
            <div className='people-sm-box-inner'>
              <img src="/image/people-leadership-1.webp" className='people-sm-box-inner-image' alt="" />
              <div>
                <div className='people-bx-black-title'>Name</div>
                <div className='people-bx-green-title'>Founder</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section 4 */}
      <div className='people-stack-bg-bx'>
        <img src="/image/people-stack-4.webp" className='people-stack-bg-image' alt="" />
        <div className='people-text-section'>
          <div className='people-header-title'>
            <div className='people-header-left-header' style={{ color: "#00BF67" }}>Quality Assurance and Testing</div>
            <div className='people-header-right-header' style={{ color: "#FFF" }}>Senior QA Tester</div>
          </div>
          <div className='people-text' style={{ color: "#FFF" }}>
            Within the qualified members of our QA and testing team to ensure the seamless operation of our applications.
          </div>
          <div className='people-text' style={{ color: "#FFF" }}>
            Bio: [QA Tester Name] is a meticulous tester with expertise in [testing methodologies/tools]. [He/She] has been pivotal in maintaining the high quality of our apps.
          </div>
        </div>
        <div className='people-box-section'>
          <div className='people-sm-box-up'>
            <div className='people-sm-box-inner'>
              <img src="/image/people-leadership-1.webp" className='people-sm-box-inner-image' alt="" />
              <div>
                <div className='people-bx-black-title'>Name</div>
                <div className='people-bx-green-title'>Founder</div>
              </div>
            </div>
          </div>
          <div className='people-sm-box-down'>
            <div className='people-sm-box-inner'>
              <img src="/image/people-leadership-1.webp" className='people-sm-box-inner-image' alt="" />
              <div>
                <div className='people-bx-black-title'>Name</div>
                <div className='people-bx-green-title'>Founder</div>
              </div>
            </div>
          </div>
          <div className='people-sm-box-up'>
            <div className='people-sm-box-inner'>
              <img src="/image/people-leadership-1.webp" className='people-sm-box-inner-image' alt="" />
              <div>
                <div className='people-bx-black-title'>Name</div>
                <div className='people-bx-green-title'>Founder</div>
              </div>
            </div>
          </div>
          <div className='people-sm-box-down'>
            <div className='people-sm-box-inner'>
              <img src="/image/people-leadership-1.webp" className='people-sm-box-inner-image' alt="" />
              <div>
                <div className='people-bx-black-title'>Name</div>
                <div className='people-bx-green-title'>Founder</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section 5 */}
      <div className='people-stack-bg-bx'>
        <img src="/image/people-stack-5.webp" className='people-stack-bg-image' alt="" />
        <div className='people-text-section'>
          <div className='people-header-title'>
            <div className='people-header-left-header' style={{ color: "#00BF67" }}>Support and Customer Success</div>
            <div className='people-header-right-header' style={{ color: "#FFF" }}>Customer Support Specialist</div>
          </div>
          <div className='people-text' style={{ color: "#FFF" }}>
            Alongside growth, our dedication to client pleasure is continuous. Meet the people who are committed to helping and making sure that clients are successful.
          </div>
          <div className='people-text' style={{ color: "#FFF" }}>
            Bio: [Support Specialist Name] is the friendly face behind our customer support. [He/She] ensures that clients receive prompt and effective assistance.          </div>
        </div>
        <div className='people-box-section'>
          <div className='people-sm-box-up'>
            <div className='people-sm-box-inner'>
              <img src="/image/people-leadership-1.webp" className='people-sm-box-inner-image' alt="" />
              <div>
                <div className='people-bx-black-title'>Name</div>
                <div className='people-bx-green-title'>Founder</div>
              </div>
            </div>
          </div>
          <div className='people-sm-box-down'>
            <div className='people-sm-box-inner'>
              <img src="/image/people-leadership-1.webp" className='people-sm-box-inner-image' alt="" />
              <div>
                <div className='people-bx-black-title'>Name</div>
                <div className='people-bx-green-title'>Founder</div>
              </div>
            </div>
          </div>
          <div className='people-sm-box-up'>
            <div className='people-sm-box-inner'>
              <img src="/image/people-leadership-1.webp" className='people-sm-box-inner-image' alt="" />
              <div>
                <div className='people-bx-black-title'>Name</div>
                <div className='people-bx-green-title'>Founder</div>
              </div>
            </div>
          </div>
          <div className='people-sm-box-down'>
            <div className='people-sm-box-inner'>
              <img src="/image/people-leadership-1.webp" className='people-sm-box-inner-image' alt="" />
              <div>
                <div className='people-bx-black-title'>Name</div>
                <div className='people-bx-green-title'>Founder</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='website-main-section'>
        <div className='website-innner-section'>
          <div className='shopify-description'>
            {/* section 6 */}
            <div className='we-are-section'>
              <div className='we-are-section-article'>
                <div className='we-are-text' data-aos="fade-right">
                  <div className='we-are-text-1-black'>Join Our Team</div>
                  <div className='we-are-text-3'>Our mission at HKAPPS is to create a creative, cooperative work atmosphere. Check out the intriguing opportunities on our Careers page if you're passionate about developing mobile apps and want to work with a dynamic team.</div>
                </div>
                <div className='we-are-image-fluid' data-aos="fade-left">
                  <img src="/image/people-we-are-1.webp" className='we-are-image' />
                </div>
              </div>
            </div>
            {/* section 7 */}
            <div className='we-are-section'>
              <div className='we-are-section-article'>
                <div className='we-are-image-fluid' data-aos="fade-right">
                  <img src="/image/people-we-are-2.webp" className='we-are-image' />
                </div>
                <div className='we-are-text' data-aos="fade-left">
                  <div className='we-are-text-1-black'>Connect with <span style={{ color: "#007B42" }}> HKAPPS‘s</span> Team</div>
                  <div className='we-are-text-3'>Are you prepared to work with our skilled group or do you have inquiries for a particular member of the team? To speak with HKAPPS staff members directly, get in touch with us.</div>
                </div>
              </div>
            </div>
            {/* <Discuss /> */}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default People