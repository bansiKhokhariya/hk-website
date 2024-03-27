import Navbar from '../../Navbar/Navbar.jsx';
import Headline from '../../Headline/Headline';
import Footer from '../../Home/Footer/Footer.jsx';
import './Life.css'

const Life = () => {
  return (
    <>
      <Navbar activeNav="Career" />
      <Headline headlineText1="Embark on a Journey of Learning and Innovation. Our Internship Opportunities are not just about gaining experience; they're about shaping your potential and contributing to the future of technology. Join us, where creativity meets code, and let's build the extraordinary together." headlineText2="Embark on a Journey of Learning and Innovation. Our Internship Opportunities are not just about gaining experience; they're about shaping your potential and contributing to the future of technology. Join us, where creativity meets code, and let's build the extraordinary together." />

      <div className="banner-main-section"
        style={{
          background: `url('/frame/Life-page-banner.webp')`,
          backgroundSize: 'cover',
          display: 'flex',
        }}
      >
      </div>

      <div className='website-main-section'>
        <div className='website-innner-section'>

          {/* section 1 */}
          <div className='we-are-section'>
            <div className='we-are-section-article'>
              <div className='we-are-text'>
                <div className='we-are-text-1-black'>Company Cultural Activities</div>
                <div className='we-are-text-3'>
                  <span className='we-are-text-3-black'> Event Calendar: </span>
                  Provide a dynamic event calendar that presents upcoming cultural activities in the tech community as well as throughout the organization. Dates, times, and specifics of any event are readily visible to users.
                  <br /><br />
                  <span className='we-are-text-3-black'>Celebrating Milestones:</span>
                  <br /> • Team Anniversaries
                  <br /> • Project Launch Parties
                  <br /><br />
                  <span className='we-are-text-3-black'>Employee Spotlights:</span>
                  <br /> • Employee of the Month
                  <br /> • Success Stories
                </div>
              </div>
              <div className='we-are-image-fluid'>
                <img src="/image/life-1.webp" className='we-are-image' />
              </div>
            </div>
          </div>

          {/* section 2 */}
          <div className='we-are-section'>
            <div className='we-are-section-article'>
              <div className='we-are-image-fluid'>
                <img src="/image/life-2.webp" className='we-are-image' />
              </div>
              <div className='we-are-text'>
                <div className='we-are-text-1-black'>Team Activities</div>
                <div className='we-are-text-3'>
                  <span className='we-are-text-3-black'>Team Building Activities</span>
                  <br /> • Team Outings
                  <br /> • In-House Events
                  <br /><br />
                  <span className='we-are-text-3-black'>Health and Wellness Initiatives</span>
                  <br /> • Fitness Challenges
                  <br /> • Mental Health Awareness
                  <br /><br />
                  <span className='we-are-text-3-black'>Diversity and Inclusion</span>
                  <br /> • Cultural Celebrations
                  <br /> • Inclusive Initiatives
                  <br /><br />
                  <span className='we-are-text-3-black'>Community Engagement</span>
                  <br /> • Social Impact Projects
                  <br /> • Tech Talks and Workshops
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


      {/* section 3 */}
      <div className='life-third-section'>
        <div className='we-are-text-1'>What it's like to work at HKAPPS</div>
        <div className='life-content-section'>
          <div className='life-content-box'>
            <div className='life-content-text-section'>
              <div className='life-content-title'>
                Introduction
              </div>
              <div>
                <svg width="76" height="8" viewBox="0 0 76 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 4H71.5" stroke="#00BF67" strokeWidth="8" stroke-linecap="round" />
                </svg>
              </div>
              <div className='life-content-text'>
                Congratulations and a hearty welcome to the <span style={{ color: "#007B42", fontWeight: "700" }}> HKAPPS</span>, where creativity, teamwork, and a feeling of community are continuously explored every day.
              </div>
            </div>
            <div className='life-content-image-section'>
              <img src="/image/life-3.webp" className='life-content-image' alt="" />
            </div>
          </div>
          <div className='life-content-box'>
            <div className='life-content-image-section'>
              <img src="/image/life-4.webp" className='life-content-image' alt="" />
            </div>
            <div className='life-content-text-section'>
              <div className='life-content-title'>
                Our Vision
              </div>
              <div>
                <svg width="76" height="8" viewBox="0 0 76 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 4H71.5" stroke="#00BF67" strokeWidth="8" stroke-linecap="round" />
                </svg>
              </div>
              <div className='life-content-text'>
                <span style={{ fontWeight: "600" }}>Leading the Way in Mobile Innovation</span> : At <span style={{ color: "#007B42", fontWeight: "700" }}>HKAPPS</span>,  our mission operates as a lighthouse of hope that drives us to become leaders in the field of mobile app development. We see a world in which technological advancements overcome previous limits, allowing for the seamless integration of mobile applications into our everyday routines and the amazing enhancement of human experiences using technology.
              </div>
            </div>
          </div>
          <div className='life-content-box'>
            <div className='life-content-text-section'>
              <div className='life-content-title'>
                Core Values
              </div>
              <div>
                <svg width="76" height="8" viewBox="0 0 76 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 4H71.5" stroke="#00BF67" strokeWidth="8" stroke-linecap="round" />
                </svg>
              </div>
              <div className='life-content-text'>
                <span style={{ color: "#007B42", fontWeight: "700" }}>HKAPPS</span>, considers innovation to be our mindset, not merely a practice, as we strive to fuel the engine of progress. We support the establishment of an environment that rewards inquiry, nurtures creativity, and develops ideas. Our dedication to creativity has become embedded in each project's DNA, inspiring us to break new ground and rethink the possibilities in mobile app development.
              </div>
            </div>
            <div className='life-content-image-section'>
              <img src="/image/life-5.webp" className='life-content-image' alt="" />
            </div>
          </div>
        </div>
      </div>


      {/* sectiobn 4 */}
      <div className='work-env-section'>
        <div className='we-are-text-1'>Collaborative Work Environment</div>
        <div className='work-env-main-container'>
          <img src="/image/life-6.webp" className='life-work-image' alt="" />
          <div className='work-env-overlay'>
            <div className='work-env-overlay-sm-bx'>
              <div className='work-env-white-text'>Open Workspaces</div>
              <div className='work-env-black-text'>
                <span style={{ fontWeight: 700 }}>
                  Office Layout Designed for Collaboration
                </span>
                <br />
                Our workplace design at <span style={{ fontWeight: 600, color: "white" }}> HKAPPS</span>, has been deliberately designed to foster a collaborative work environment. As soon as you walk in, you'll see open workspaces that go beyond the standard cubicle restrictions. Our design concept is easy to understand: deconstruct challenges, promote dialogue, and cultivate a feeling of togetherness.
              </div>
              <div className='work-env-white-text'>Features of Our Open Workspaces</div>
              <div className='work-env-black-text'>
                • Shared Desks and Workstations
                <br />
                • Collaborative Zones
                <br />
                • Flexibility in Seating
              </div>
            </div>
            <div className='work-env-overlay-sm-bx'>
              <div className='work-env-white-text'>Agile Methodology</div>
              <div className='work-env-black-text'>
                <span style={{ fontWeight: 700 }}>
                  Agility in Action: Navigating Change with Precision
                </span>
                <br />
                Agile methods have become the fundamental elements of <span style={{ fontWeight: 600, color: "white" }}>HKAPPS’s</span>, project management methodology. For us, agile is a way of thinking that infuses every facet of our work, not just a methodology. We can efficiently and adaptably negotiate the ever-changing landscape of mobile app development thanks to our use of Agile concepts.
              </div>
              <div className='work-env-white-text'>Key Components of Our Agile Approach</div>
              <div className='work-env-black-text'>
                • Cross-Functional Teams
                <br />
                • Sprints and Iterative Development
                <br />
                • Regular Stand-Up Meetings
              </div>
              <div className='work-env-white-text'>How Agile Principles Contribute to Our Work Culture</div>
              <div className='work-env-black-text'>
                • Adaptability
                <br />
                • Collaboration at Its Core
                <br />
                • Continuous Improvement
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='website-main-section'>
        <div className='website-innner-section'>

          {/* section 5 */}
          <div className='we-are-section'>
            <div className='we-are-section-article'>
              <div className='we-are-image-fluid'>
                <img src="/image/life-7.webp" className='we-are-image' />
              </div>
              <div className='we-are-text'>
                <div className='we-are-text-1-black'>Follow us on</div>
                <div className='we-are-text-3'>
                  <span style={{ fontWeight: 700, color: "black" }}>Stay Connected with <span style={{ fontWeight: 700, color: "#007B42" }}>HKAPPS</span></span>!
                  <br />
                  Greetings from our social media center. Keep up with the greatest developments in mobile app development, interesting projects, and team insights by following HKAPPS on your preferred platforms. Become a member of our online community and participate in the dialogue.
                </div>
                <div className='social-media-icon-section'>
                  <div className='social-media-icon'>
                    <svg className='social-media-icon-svg' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M30 30V19.0125C30 13.6125 28.8375 9.4875 22.5375 9.4875C19.5 9.4875 17.475 11.1375 16.65 12.7125H16.575V9.975H10.6125V30H16.8375V20.0625C16.8375 17.4375 17.325 14.925 20.55 14.925C23.7375 14.925 23.775 17.8875 23.775 20.2125V29.9625H30V30ZM0.4875 9.975H6.7125V30H0.4875V9.975ZM3.6 0C1.6125 0 0 1.6125 0 3.6C0 5.5875 1.6125 7.2375 3.6 7.2375C5.5875 7.2375 7.2 5.5875 7.2 3.6C7.2 1.6125 5.5875 0 3.6 0Z" fill="#007B42" />
                    </svg>
                  </div>
                  <div className='social-media-icon'>
                    <svg className='social-media-icon-svg' width="37" height="30" viewBox="0 0 37 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M36.9231 3.55154C35.55 4.15385 34.0869 4.55308 32.5615 4.74692C34.1308 3.81 35.3285 2.33769 35.8915 0.563077C34.4285 1.43538 32.8131 2.05154 31.0915 2.39538C29.7023 0.916154 27.7223 0 25.5623 0C21.3715 0 17.9977 3.40154 17.9977 7.57154C17.9977 8.17154 18.0485 8.74846 18.1731 9.29769C11.88 8.99077 6.31154 5.97462 2.57077 1.38C1.91769 2.51308 1.53462 3.81 1.53462 5.20615C1.53462 7.82769 2.88462 10.1515 4.89692 11.4969C3.68077 11.4738 2.48769 11.1208 1.47692 10.5646V10.6477C1.47692 14.3262 4.10077 17.3815 7.54154 18.0854C6.92538 18.2538 6.25385 18.3346 5.55692 18.3346C5.07231 18.3346 4.58308 18.3069 4.12385 18.2054C5.10462 21.2031 7.88769 23.4069 11.1969 23.4785C8.62154 25.4931 5.35154 26.7069 1.81154 26.7069C1.19077 26.7069 0.595385 26.6792 0 26.6031C3.35308 28.7654 7.32692 30 11.6123 30C25.5415 30 33.1569 18.4615 33.1569 8.46C33.1569 8.12538 33.1454 7.80231 33.1292 7.48154C34.6315 6.41538 35.8938 5.08385 36.9231 3.55154Z" fill="#00BF67" />
                    </svg>
                  </div>
                  <div className='social-media-icon'>
                    <svg className='social-media-icon-svg' width="16" height="30" viewBox="0 0 16 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.9017 16.7476L15.7282 11.3592H10.5583V7.86255C10.5583 6.3884 11.2804 4.95146 13.596 4.95146H15.9466V0.364078C15.9466 0.364078 13.8134 0 11.7739 0C7.51595 0 4.73301 2.58058 4.73301 7.25243V11.3592H0V16.7476H4.73301V29.7735C5.68209 29.9224 6.65476 30 7.64563 30C8.6365 30 9.60917 29.9224 10.5583 29.7735V16.7476H14.9017Z" fill="#007B42" />
                    </svg>
                  </div>
                  <div className='social-media-icon'>
                    <svg className='social-media-icon-svg' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.95651 2.08281C-0.393759 4.52404 0.0872607 7.11731 0.0872607 14.9956C0.0872607 21.5379 -1.05423 28.0965 4.91989 29.6405C6.78539 30.1203 23.3145 30.1203 25.1775 29.638C27.6649 28.9962 29.6886 26.9787 29.9653 23.4608C30.0039 22.9698 30.0039 7.03008 29.964 6.52912C29.6699 2.78191 27.3633 0.622305 24.3239 0.184901C23.6273 0.0839621 23.4877 0.0540542 19.9137 0.0478234C7.2365 0.0540542 4.45756 -0.510458 1.95651 2.08281Z" fill="#00BF67" />
                      <path d="M15.0385 3.95597C10.5136 3.95597 6.21686 3.55346 4.57566 7.76549C3.89775 9.50514 3.9962 11.7644 3.9962 14.9995C3.9962 17.8382 3.90523 20.5063 4.57566 22.2322C6.21312 26.4467 10.5448 26.043 15.036 26.043C19.3689 26.043 23.8364 26.4941 25.4975 22.2322C26.1767 20.4751 26.077 18.2495 26.077 14.9995C26.077 10.6853 26.315 7.90008 24.2227 5.80902C22.1042 3.69054 19.2393 3.95597 15.0335 3.95597H15.0385ZM14.049 5.94609C23.4874 5.93114 24.6888 4.88187 24.0258 19.4583C23.7903 24.6136 19.8649 24.0479 15.0397 24.0479C6.24178 24.0479 5.98881 23.7961 5.98881 14.9945C5.98881 6.09065 6.68667 5.95108 14.049 5.9436V5.94609ZM20.9328 7.7792C20.5815 7.7792 20.2446 7.91876 19.9961 8.16719C19.7477 8.41561 19.6081 8.75255 19.6081 9.10387C19.6081 9.4552 19.7477 9.79213 19.9961 10.0406C20.2446 10.289 20.5815 10.4285 20.9328 10.4285C21.2841 10.4285 21.6211 10.289 21.8695 10.0406C22.1179 9.79213 22.2575 9.4552 22.2575 9.10387C22.2575 8.75255 22.1179 8.41561 21.8695 8.16719C21.6211 7.91876 21.2841 7.7792 20.9328 7.7792ZM15.0385 9.32818C14.2938 9.32826 13.5564 9.47502 12.8684 9.76008C12.1805 10.0451 11.5554 10.4629 11.0289 10.9895C9.96553 12.0531 9.36825 13.4955 9.36841 14.9995C9.36858 16.5034 9.96618 17.9457 11.0298 19.0091C12.0933 20.0724 13.5357 20.6697 15.0397 20.6695C16.5437 20.6694 17.986 20.0718 19.0493 19.0082C20.1126 17.9446 20.7099 16.5022 20.7097 14.9982C20.7096 13.4943 20.112 12.052 19.0484 10.9886C17.9848 9.9253 16.5424 9.32802 15.0385 9.32818ZM15.0385 11.3183C19.9047 11.3183 19.911 18.6806 15.0385 18.6806C10.1734 18.6806 10.166 11.3183 15.0385 11.3183Z" fill="white" />
                    </svg>
                  </div>
                  <div className='social-media-icon'>
                    <svg className='social-media-icon-svg' width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.317 0C6.85903 0 0 6.88584 0 15.3802C0 22.1741 4.38886 27.9378 10.4781 29.9733C11.2441 30.115 11.5236 29.6401 11.5236 29.2323C11.5236 28.8665 11.5102 27.8995 11.5026 26.6166C7.24201 27.5453 6.34202 24.5543 6.34202 24.5543C5.64693 22.7773 4.64162 22.3043 4.64162 22.3043C3.24952 21.3507 4.74503 21.3699 4.74503 21.3699C6.28266 21.479 7.09073 22.9554 7.09073 22.9554C8.45794 25.3049 10.6773 24.627 11.5504 24.2326C11.6883 23.2388 12.0847 22.5609 12.5232 22.176C9.1224 21.7873 5.54544 20.468 5.54544 14.5759C5.54544 12.8966 6.14288 11.5236 7.12329 10.4475C6.96435 10.0588 6.43968 8.49433 7.27264 6.3784C7.27264 6.3784 8.55943 5.96479 11.4853 7.95434C12.707 7.61349 14.0168 7.44307 15.3208 7.43732C16.621 7.44498 17.9327 7.61349 19.1563 7.95625C22.0803 5.96671 23.3651 6.38032 23.3651 6.38032C24.2 8.49816 23.6753 10.0607 23.5183 10.4494C24.5007 11.5256 25.0923 12.8985 25.0923 14.5778C25.0923 20.4852 21.5116 21.7854 18.0993 22.1664C18.6488 22.6413 19.139 23.5796 19.139 25.0138C19.139 27.0704 19.1199 28.7287 19.1199 29.2323C19.1199 29.644 19.3956 30.1227 20.1731 29.9714C26.2528 27.934 30.6378 22.1722 30.6378 15.3802C30.6378 6.88584 23.7788 0 15.317 0Z" fill="#007B42" />
                    </svg>
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

export default Life