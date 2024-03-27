import { useState } from 'react';
import Navbar from '../../../Navbar/Navbar.jsx';
import Headline from '../../../Headline/Headline';
import FAQs from '../../../Home/FAQs/FAQs.jsx';
import Footer from '../../../Home/Footer/Footer.jsx';
import WeAre from '../../../Home/WeAre/WeAre.jsx';
import Banner from '../../../Banner/Banner.jsx';
import './WebDesignServices.css'

const WebDesignServices = () => {

  const faqsArray = [
    {
      id: 1,
      question: 'Q. How do you approach responsive website design to ensure compatibility across devices?',
      answer: `Responsive design is a priority in our approach. We design websites that adapt seamlessly to various screen sizes and devices, ensuring a consistent and user-friendly experience for visitors on desktops, tablets, and smartphones.`
    },
    {
      id: 2,
      question: 'Q. Can you create a unique and cohesive visual identity for my website?',
      answer: `Absolutely. Our design team collaborates closely with clients to understand their brand identity and goals. We create custom visuals, including colour schemes, typography, and graphics, to establish a distinctive and cohesive brand presence on the web.`
    },
    {
      id: 3,
      question: 'Q. How do you ensure that the web design aligns with the overall brand strategy?',
      answer: `Alignment with brand strategy is a priority. We conduct thorough consultations to understand your brand, target audience, and business goals. Our designs are crafted to reflect your brand's personality and create a positive and memorable impression.`
    },
    {
      id: 4,
      question: 'Q. Can you redesign existing websites for a fresh look and improved functionality?',
      answer: `Certainly. Whether you need a complete website overhaul or incremental design improvements, we assess your current design, understand your goals, and implement redesign strategies to enhance both aesthetics and functionality.`
    },
    {
      id: 5,
      question: 'Q. Can you design for accessibility and inclusivity on the web?',
      answer: `Yes, accessibility is integral to our design philosophy. We design websites that adhere to accessibility standards, ensuring that all users, including those with diverse needs, can access and navigate the site easily.`
    },


  ]

  const bannerObject = {
    boxSide: 'right',
    backgroundBanner: `/frame/webDesign-page-banner.webp`,
    bannerTitle: `Introduction`,
    bannerTitleSpan: ``,
    bannerContent: `Your brand's success in the ever-changing digital market starts with your online presence. At  HKAPPS ,our expertise lies in creating outstanding online experiences that go beyond the norm, enthral your viewers, and propel your company to unprecedented heights.Visual components and user interfaces for websites are planned, created, and implemented as part of web design services. These services cover an array of tasks intended to improve a website's overall appearance, feel, and functionality.`,
  };

  const weAreContentArray = {
    weAreImage: `/image/webdesign-one-section.webp`,
    weAreTitle: `End-to-end Web Design services`,
    weAreContent: `Greetings from a world where innovation and design collide, with user experiences carefully crafted to make an impact. At HKAPPS, we're not just web designers—we're digital journey architects dedicated to turning your ideas into aesthetically beautiful, intuitive, and productive websites. \n\n  Our design approach centres on producing visually striking images that appeal to your target market and accurately represent your business identity. Everything is carefully chosen for maximum impact, even the typeface and colour schemes. \n\n Performance comes first, beyond all else. Every user will receive a dependable and consistent experience from our web designs, which are optimised for speed, responsiveness, and cross-browser compatibility.`,
  }


  return (
    <>
      <Navbar activeNav="Services" />
      <Headline headlineText1="Crafting Exceptional Web Experiences" headlineText2="Crafting Exceptional Web Experiences" />

      <Banner bannerObject={bannerObject} />

      <div className='website-main-section'>
        <div className='website-innner-section'>
          <div className='shopify-description'>

            <WeAre weAreContentArray={weAreContentArray} />

            <div className='we-are-text-1'>
              Our Approach
            </div>

            <div className='design-approach-sec'>
              <div className='design-approach-bx'>
                <img src="/image/webdesign-approach-image.webp" className='design-approach-image' />
              </div>
              <div className='design-approach-bx'>
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <rect width="80" height="80" rx="40" fill="#E4F7F3" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M38.8215 28.6785C39.134 28.9911 39.558 29.1667 40 29.1667C40.442 29.1667 40.8659 28.9911 41.1785 28.6785C41.4911 28.366 41.6667 27.942 41.6667 27.5V26.3506C47.9177 27.1105 52.8883 32.0819 53.647 38.3333H52.5C52.058 38.3333 51.634 38.5089 51.3215 38.8215C51.0089 39.134 50.8333 39.558 50.8333 40C50.8333 40.442 51.0089 40.8659 51.3215 41.1785C51.634 41.4911 52.058 41.6667 52.5 41.6667H53.6469C52.8881 47.9179 47.9176 52.8892 41.6667 53.6491V52.5C41.6667 52.058 41.4911 51.634 41.1785 51.3215C40.8659 51.0089 40.442 50.8333 40 50.8333C39.558 50.8333 39.134 51.0089 38.8215 51.3215C38.5089 51.634 38.3333 52.058 38.3333 52.5V53.6497C32.08 52.8919 27.1069 47.9197 26.3479 41.6667H27.5C27.942 41.6667 28.366 41.4911 28.6785 41.1785C28.9911 40.8659 29.1667 40.442 29.1667 40C29.1667 39.558 28.9911 39.134 28.6785 38.8215C28.366 38.5089 27.942 38.3333 27.5 38.3333H26.3478C27.1067 32.0802 32.0798 27.1077 38.3333 26.35V27.5C38.3333 27.942 38.5089 28.366 38.8215 28.6785ZM41.6667 22.9974V21.6667C41.6667 21.2246 41.4911 20.8007 41.1785 20.4882C40.8659 20.1756 40.442 20 40 20C39.558 20 39.134 20.1756 38.8215 20.4882C38.5089 20.8007 38.3333 21.2246 38.3333 21.6667V22.9969C30.2397 23.7828 23.7817 30.24 22.9947 38.3333H21.6667C21.2246 38.3333 20.8007 38.5089 20.4882 38.8215C20.1756 39.134 20 39.558 20 40C20 40.442 20.1756 40.8659 20.4882 41.1785C20.8007 41.4911 21.2246 41.6667 21.6667 41.6667H22.9947C23.7819 49.7598 30.2398 56.2169 38.3333 57.0028V58.3333C38.3333 58.7754 38.5089 59.1993 38.8215 59.5118C39.134 59.8244 39.558 60 40 60C40.442 60 40.8659 59.8244 41.1785 59.5118C41.4911 59.1993 41.6667 58.7754 41.6667 58.3333V57.0023C49.7577 56.2141 56.213 49.7581 57.0001 41.6667H58.3333C58.7754 41.6667 59.1993 41.4911 59.5118 41.1785C59.8244 40.8659 60 40.442 60 40C60 39.558 59.8244 39.134 59.5118 38.8215C59.1993 38.5089 58.7754 38.3333 58.3333 38.3333H57.0001C56.2132 30.2418 49.7578 23.7856 41.6667 22.9974ZM35 40C35 42.7567 37.2433 45 40 45C42.7567 45 45 42.7567 45 40C45 37.2433 42.7567 35 40 35C37.2433 35 35 37.2433 35 40ZM38.3333 40C38.3333 39.0817 39.0817 38.3333 40 38.3333C40.9183 38.3333 41.6667 39.0817 41.6667 40C41.6667 40.9183 40.9183 41.6667 40 41.6667C39.0817 41.6667 38.3333 40.9183 38.3333 40Z" fill="#007B42" />
                </svg>
                <div className='java-second-section-text'>
                  <span className='java-second-section-text-span'> Client-Centric Design </span>
                  <br /><br />
                  At <span className='java-second-section-text-span'> HKAPPS </span>
                  we think that knowing our clients' individual aims and desires is the first step towards creating a truly amazing website. Our client-centric design methodology is focused on developing a close relationship with your goals so that each and every pixel we create is perfectly in line with your vision.
                </div>
              </div>
              <div className='design-approach-bx'>
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <rect width="80" height="80" rx="40" fill="#E4F7F3" />
                  <path d="M37.3281 48.9999C37.3281 47.5256 38.5233 46.3305 39.9976 46.3305C41.4719 46.3305 42.6671 47.5256 42.6671 48.9999C42.6671 50.4743 41.4719 51.6694 39.9976 51.6694C38.5233 51.6694 37.3281 50.4743 37.3281 48.9999Z" fill="#007B42" />
                  <path d="M22 40C22 30.0589 30.0589 22 40 22C49.9411 22 58 30.0589 58 40C58 49.9411 49.9411 58 40 58C30.0589 58 22 49.9411 22 40Z" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" />
                  <path d="M40 22C44.9706 22 49 26.0295 49 31C49 35.9705 44.9706 40 40 40C35.0294 40 31 44.0295 31 49C31 53.9705 35.0294 58 40 58" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" />
                  <path d="M37.3281 30.9999C37.3281 29.5256 38.5233 28.3305 39.9976 28.3305C41.4719 28.3305 42.6671 29.5256 42.6671 30.9999C42.6671 32.4743 41.4719 33.6694 39.9976 33.6694C38.5233 33.6694 37.3281 32.4743 37.3281 30.9999Z" fill="#007B42" />
                </svg>
                <div className='java-second-section-text'>
                  <span className='java-second-section-text-span'> User-Centered Philosophy</span>
                  <br /><br />
                  Our design approach is centered around creating web experiences that are both delightful and meaningful. We create from the ground up with the end user in mind, not simply for them. Our user-centered methodology guarantees that each interaction is enjoyable to engage with as well as intuitive.
                </div>
              </div>
            </div>

            <div className='we-are-text-1'>
              Core Web Design Services
            </div>

            <div className='webdesign-core-service-sec'>
              <div className='webdesign-core-service-main-bx'>
                <div className='webdesign-core-service-front-bx'>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                      <rect width="100" height="100" rx="50" fill="#E4F7F3" />
                      <path d="M30 56.1988V56.4406C30 60.1849 33.0353 63.2203 36.7797 63.2203H63.2203C66.9647 63.2203 70 60.1849 70 56.4406V39.8304C70 36.0861 66.9647 33.0508 63.2203 33.0508H50M63.2306 53.0508L50.0003 39.8205" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M63.2306 48.2569V53.0508H58.4367M54.7942 39.8206H50.0003V44.6145M50 70V63.2203M56.7797 70H43.2203M33.3898 50H39.8305C41.7026 50 43.2203 48.4823 43.2203 46.6102V33.3898C43.2203 31.5177 41.7026 30 39.8305 30H33.3898C31.5177 30 30 31.5177 30 33.3898V46.6102C30 48.4823 31.5177 50 33.3898 50Z" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className='content-title'>
                    E-commerce Web Design
                  </div>
                  <div className='java-second-section-text'>
                    For businesses entering the digital marketplace, our e-commerce web design services are tailored to provide not just an online store but a compelling and user-friendly shopping experience. From captivating product displays to streamlined checkout processes, we design e-commerce platforms that convert visitors into loyal customers.
                  </div>
                </div>
                <div className='webdesign-core-service-behind-bx'></div>
              </div>
              <div className='webdesign-core-service-main-bx'>
                <div className='webdesign-core-service-front-bx'>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                      <rect width="100" height="100" rx="50" fill="#E4F7F3" />
                      <path d="M69.8125 59.8697L60.3232 50.3929L68.9748 41.7538C69.7788 40.9496 70.2304 39.859 70.2304 38.7219C70.2304 37.5848 69.7788 36.4943 68.9748 35.6901L64.9241 31.6393C64.1199 30.8354 63.0294 30.3838 61.8922 30.3838C60.7551 30.3838 59.6646 30.8354 58.8604 31.6393L50.2213 40.291L40.7445 30.8142C40.6119 30.6804 40.4542 30.5741 40.2804 30.5016C40.1066 30.4292 39.9201 30.3918 39.7318 30.3918C39.5434 30.3918 39.357 30.4292 39.1831 30.5016C39.0093 30.5741 38.8516 30.6804 38.7191 30.8142L30.63 38.8907C30.4962 39.0232 30.39 39.181 30.3175 39.3548C30.245 39.5286 30.2077 39.7151 30.2077 39.9034C30.2077 40.0917 30.245 40.2782 30.3175 40.452C30.39 40.6259 30.4962 40.7836 30.63 40.9161L40.1193 50.3929L33.7556 56.7566C32.7352 57.7782 32.0505 59.0866 31.7927 60.5074L30.2174 68.7089C30.1775 68.9331 30.1918 69.1636 30.2592 69.3812C30.3267 69.5987 30.4452 69.7969 30.605 69.9592C30.7667 70.1203 30.9644 70.2406 31.1818 70.3102C31.3992 70.3798 31.6301 70.3966 31.8553 70.3592L40.0568 68.8214C41.4788 68.5594 42.7871 67.8704 43.8075 66.8461L50.2213 60.4949L59.6981 69.9717C59.969 70.2359 60.3324 70.3838 60.7108 70.3838C61.0892 70.3838 61.4526 70.2359 61.7235 69.9717L69.8125 61.8826C70.079 61.6154 70.2286 61.2535 70.2286 60.8762C70.2286 60.4988 70.079 60.1369 69.8125 59.8697ZM60.8858 33.6147C61.1567 33.3505 61.5201 33.2026 61.8985 33.2026C62.2769 33.2026 62.6403 33.3505 62.9112 33.6147L66.9495 37.653C67.2167 37.9223 67.3666 38.2863 67.3666 38.6657C67.3666 39.0451 67.2167 39.4091 66.9495 39.6784L63.7739 42.8915L57.7227 36.8403L60.8858 33.6147ZM33.6681 39.8659L39.7318 33.8398L42.1447 36.2527L40.1193 38.2656L42.1447 40.291L44.1576 38.2656L48.1959 42.3039L42.1322 48.3675L33.6681 39.8659ZM41.8322 64.8082C41.2238 65.4217 40.4433 65.8359 39.5942 65.9959L33.4431 67.1461L34.5933 61.02C34.749 60.1721 35.1589 59.3916 35.7685 58.782L55.6848 38.8657L61.7485 44.9294L41.8322 64.8082ZM60.7108 66.9086L52.2342 58.432L58.2978 52.3683L62.3361 56.4066L60.3107 58.432L62.3361 60.4573L64.3615 58.432L66.7744 60.8449L60.7108 66.9086Z" fill="#007B42" />
                    </svg>
                  </div>

                  <div className='content-title'>
                    Custom Web Design
                  </div>
                  <div className='java-second-section-text'>
                    Use our bespoke web design services to make an impression on the digital world. Your website should demonstrate the uniqueness of your brand, which we recognize. Our team of designers is committed to producing custom designs that enhance your brand identity, surpass your expectations, and make a lasting impact.
                  </div>
                </div>
                <div className='webdesign-core-service-behind-bx'></div>
              </div>
              <div className='webdesign-core-service-main-bx'>
                <div className='webdesign-core-service-front-bx'>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                      <rect width="100" height="100" rx="50" fill="#E4F7F3" />
                      <path d="M67.0837 60.4049C68.9339 57.3736 70 53.8113 70 50C70 38.9543 61.0457 30 50 30C38.9543 30 30 38.9543 30 50C30 61.0457 38.9543 70 50 70C54.1669 70 58.0362 68.7257 61.2394 66.5455M53.4495 44.6966L60.9112 55.3034M60.3861 44.6966L52.9138 55.3034" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M39.0859 44.6968V51.9954C39.0859 53.2384 39.7025 54.0753 40.7499 54.7444C41.2601 55.0703 41.9043 55.3025 42.705 55.3036C43.3985 55.3045 43.978 55.144 44.4572 54.9026C45.6779 54.2879 46.4562 53.3544 46.4562 51.9877V44.6968" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className='content-title'>
                    UI/UX Design
                  </div>
                  <div className='java-second-section-text'>
                    The basic elements of a successful web design are the user interface (UI) and user experience (UX). Our in-depth knowledge of user preferences and activities forms the basis of our UI/UX design services. We create experiences that connect rather than just interfaces, making sure that each click, swipe, and interaction is not just practical but enjoyable as well.
                  </div>
                </div>
                <div className='webdesign-core-service-behind-bx'></div>
              </div>
            </div>

            <div className='we-are-text-1'>
              Visual Design Expertise
            </div>

            <div className='design-expertise-sec'>
              <div className='design-expertise-bx'>
                <div className='design-expertise-sm-bx-corner design-expertise-sm-bx-corner-1'>
                  <div className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 81 81" fill="none">
                      <rect x="0.0625" y="0.0810547" width="80" height="80" rx="40" fill="#007B42" />
                      <path d="M52.9896 31.4619C52.4245 32.0286 51.6186 32.335 50.7939 32.3155C49.9065 32.2945 48.9974 31.9022 48.3432 31.2277C47.1796 30.0282 47.14 28.1538 48.3243 26.9797C49.649 25.6663 52.0718 25.8458 53.8825 25.0647C54.4427 24.823 55.0597 25.2766 54.9974 25.8772C54.7035 28.7108 53.9837 30.4647 52.9896 31.4619Z" fill="white" />
                      <path d="M51.3395 28.6575L33.0469 46.9502" stroke="white" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M44.1463 27.0717C42.6636 26.5553 41.049 26.2181 39.3902 26.2181C31.4427 26.2181 25 32.6608 25 40.6083C25 48.5558 31.4427 54.9985 39.3902 54.9985C42.1951 54.9985 42.9268 53.0675 42.9268 51.6449C42.9268 49.2363 41.4634 49.2059 41.4634 46.8278C41.4634 44.5474 43.1463 42.9254 45.4268 42.9254C47.8049 42.9254 48.0183 44.2668 50.4268 44.2668C51.8494 44.2668 53.7805 43.4132 53.7805 40.6083C53.7805 38.7212 53.4042 36.9547 52.7439 35.3034" stroke="white" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" />
                      <path d="M30.4855 42.8647C29.4769 42.8647 28.6562 42.0441 28.6562 41.0355C28.6562 40.0268 29.4769 39.2062 30.4855 39.2062C31.4942 39.2062 32.3148 40.0268 32.3148 41.0355C32.3148 42.0441 31.4942 42.8647 30.4855 42.8647Z" fill="white" />
                      <path d="M39.2668 33.5352C38.2581 33.5352 37.4375 32.7145 37.4375 31.7059C37.4375 30.6972 38.2581 29.8766 39.2668 29.8766C40.2754 29.8766 41.096 30.6972 41.096 31.7059C41.096 32.7145 40.2754 33.5352 39.2668 33.5352Z" fill="white" />
                      <path d="M32.8059 36.4619C32.3371 36.4619 31.8686 36.2836 31.5118 35.9268C30.7982 35.2132 30.7982 34.0521 31.5117 33.3386C32.2253 32.625 33.3864 32.625 34.1 33.3385L34.1001 33.3386C34.8136 34.0521 34.8136 35.2132 34.1001 35.9267C33.7432 36.2835 33.2746 36.4619 32.8059 36.4619Z" fill="white" />
                    </svg>
                  </div>
                  <div className='design-expertise-sm-bx-content'>
                    <div className='mobile-app-title'>Color Schemes and Branding</div>
                    <div className='mobileAppDevelopment-content-text-right'>
                      At  HKAPPS, we are aware of how effectively colour can express a brand's identity and evoke feelings. Our proficiency in visual design is evident in our capacity to select colour palettes that compliment your brand and enthral your target audience.
                    </div>
                  </div>
                </div>
                <div className='design-expertise-sm-bx-corner design-expertise-sm-bx-middle-1'>
                  <div className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 81 81" fill="none">
                      <rect x="0.0625" y="0.743652" width="80" height="80" rx="40" fill="#007B42" />
                      <path d="M39.9364 48.5601H28.8136C26.7074 48.5601 25 46.8527 25 44.7465V37.2465C25 35.1403 26.7074 33.4329 28.8136 33.4329H39.9364" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M50.0469 33.4329H51.1909C53.2971 33.4329 55.0045 35.1403 55.0045 37.2465V44.7465C55.0045 46.8527 53.2971 48.5601 51.1909 48.5601H50.0469" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M39.875 26C42.6832 26 44.9597 28.2765 44.9597 31.0847V50.9153C44.9597 53.7235 42.6832 56 39.875 56" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M50.0379 26C47.2296 26 44.9531 28.2765 44.9531 31.0847V50.9153C44.9531 53.7235 47.2296 56 50.0379 56" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className='design-expertise-sm-bx-content'>
                    <div className='mobile-app-title'>Typography</div>
                    <div className='mobileAppDevelopment-content-text-right'>
                      Typography is the art of forming written language, and we are skilled at creating a visual language that is both readable and a continuation of your company's identity. To improve the overall aesthetics and set the appropriate tone for your audience, we carefully choose the fonts.
                    </div>
                  </div>
                </div>
                <div className='design-expertise-sm-bx-corner design-expertise-sm-bx-corner-1'>
                  <div className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 81 81" fill="none">
                      <rect x="0.0625" y="0.40625" width="80" height="80" rx="40" fill="#007B42" />
                      <path d="M51.2349 25C50.4347 25.0029 49.6564 25.2621 49.0142 25.7395C48.372 26.217 47.8996 26.8876 47.6663 27.653C42.5434 28.226 37.7618 30.5044 34.0898 34.1223C30.5 37.82 28.2188 42.5908 27.5942 47.7064C26.7557 47.9755 26.0392 48.5323 25.5712 49.2783C25.1033 50.0243 24.9138 50.9116 25.0364 51.7836C25.1589 52.6557 25.5855 53.4565 26.241 54.0446C26.8964 54.6328 27.7386 54.9705 28.6188 54.9982C29.499 55.0258 30.3607 54.7417 31.0518 54.1959C31.7429 53.6502 32.219 52.8778 32.3961 52.0151C32.5732 51.1525 32.4399 50.255 32.0198 49.4811C31.5996 48.7071 30.9195 48.1065 30.0996 47.7852C30.4216 45.2057 31.2365 42.7121 32.4999 40.4403C32.5526 41.4382 32.8061 42.4153 33.2452 43.3131C33.6843 44.2108 34.3 45.0107 35.0554 45.665C35.0039 45.8606 34.9766 46.0619 34.9741 46.2641V48.7658C34.9748 49.4291 35.2385 50.065 35.7075 50.534C36.1766 51.003 36.8125 51.2668 37.4758 51.2675H39.9774C40.6407 51.2668 41.2766 51.003 41.7456 50.534C42.2146 50.065 42.4784 49.4291 42.4791 48.7658V46.2641C42.4784 45.6009 42.2146 44.9649 41.7456 44.4959C41.2766 44.0269 40.6407 43.7631 39.9774 43.7625H37.4758C37.2443 43.7657 37.0143 43.8015 36.7928 43.8688C36.2549 43.4251 35.8157 42.8738 35.5033 42.2503C35.191 41.6268 35.0124 40.9449 34.9791 40.2484C34.9457 39.5519 35.0584 38.856 35.3097 38.2056C35.5611 37.5551 35.9457 36.9644 36.4388 36.4713C36.9319 35.9782 37.5226 35.5937 38.173 35.3423C38.8235 35.0909 39.5193 34.9783 40.2158 35.0116C40.9124 35.0449 41.5943 35.2235 42.2177 35.5359C42.8412 35.8482 43.3925 36.2874 43.8362 36.8254C43.769 37.0469 43.7332 37.2768 43.7299 37.5083V40.01C43.7306 40.6733 43.9944 41.3092 44.4634 41.7782C44.9324 42.2472 45.5683 42.511 46.2316 42.5117H48.7332C49.3965 42.511 50.0325 42.2472 50.5015 41.7782C50.9705 41.3092 51.2343 40.6733 51.2349 40.01V37.5083C51.2343 36.845 50.9705 36.2091 50.5015 35.7401C50.0325 35.2711 49.3965 35.0073 48.7332 35.0067H46.2316C46.0289 35.0091 45.8272 35.0364 45.6312 35.088C44.9721 34.3269 44.1653 33.7077 43.2596 33.268C42.3539 32.8283 41.3683 32.5772 40.3627 32.53C42.6629 31.2926 45.1714 30.4895 47.7626 30.1609C48.0186 30.7912 48.4411 31.34 48.9851 31.7485C49.5291 32.1571 50.1739 32.4099 50.8505 32.48C51.5272 32.5501 52.2102 32.4349 52.8263 32.1465C53.4425 31.8582 53.9686 31.4077 54.3484 30.8433C54.7281 30.2789 54.9472 29.6218 54.9821 28.9424C55.017 28.2631 54.8664 27.587 54.5466 26.9866C54.2267 26.3862 53.7495 25.8842 53.1661 25.5342C52.5828 25.1843 51.9152 24.9996 51.2349 25ZM37.4758 46.2641H39.9774L39.9787 48.7658H37.4758V46.2641ZM48.7345 40.01H46.2316V37.5083H48.7332L48.7345 40.01ZM28.7199 52.5183C28.4725 52.5183 28.2307 52.4449 28.025 52.3075C27.8193 52.1701 27.659 51.9747 27.5643 51.7461C27.4696 51.5176 27.4449 51.2661 27.4931 51.0234C27.5414 50.7808 27.6605 50.5579 27.8355 50.383C28.0104 50.2081 28.2333 50.0889 28.4759 50.0407C28.7185 49.9924 28.97 50.0172 29.1986 50.1119C29.4272 50.2065 29.6225 50.3668 29.76 50.5725C29.8974 50.7782 29.9708 51.0201 29.9708 51.2675C29.9708 51.5992 29.839 51.9174 29.6044 52.1519C29.3698 52.3865 29.0517 52.5183 28.7199 52.5183ZM51.2349 30.0033C50.9875 30.0033 50.7457 29.93 50.54 29.7925C50.3343 29.6551 50.174 29.4597 50.0793 29.2312C49.9846 29.0026 49.9599 28.7511 50.0081 28.5085C50.0564 28.2658 50.1755 28.043 50.3504 27.868C50.5254 27.6931 50.7482 27.574 50.9909 27.5257C51.2335 27.4774 51.485 27.5022 51.7136 27.5969C51.9421 27.6916 52.1375 27.8519 52.2749 28.0576C52.4124 28.2633 52.4857 28.5051 52.4857 28.7525C52.4857 29.0842 52.354 29.4024 52.1194 29.637C51.8848 29.8715 51.5667 30.0033 51.2349 30.0033Z" fill="white" />
                    </svg>
                  </div>
                  <div className='design-expertise-sm-bx-content'>
                    <div className='mobile-app-title'>Graphic Elements</div>
                    <div className='mobileAppDevelopment-content-text-right'>
                      A visually attractive design is powered by dynamic visuals. At  HKAPPS , we employ graphic elements to heighten user engagement, narrate the story of your company, and produce visually striking experiences.
                    </div>
                  </div>
                </div>
              </div>
              <div className='design-expertise-bx'>
                <img src="/image/webdesign-expertise-image.webp" className='design-expertise-bx-image' alt="" />
              </div>
            </div>

            <div className='we-are-text-1'>
              Responsive and Mobile-First Design
            </div>

            <div className='design-usability-testing-sec'>
              <div className='design-usability-testing-sec-bx'>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 81 81" fill="none">
                    <path d="M40.8039 44.3477C38.9347 44.3477 37.4141 42.827 37.4141 40.9578C37.4141 39.0887 38.9347 37.568 40.8039 37.568C42.673 37.568 44.1937 39.0887 44.1937 40.9578C44.1937 42.827 42.673 44.3477 40.8039 44.3477Z" fill="#007B42" />
                    <path d="M55.6309 40.958C55.6309 40.0839 55.5546 39.2275 55.4095 38.3948L60.6633 35.3615L55.5785 26.5545L50.3226 29.589C49.0157 28.4933 47.5178 27.6182 45.8851 27.0223V20.958H35.7156V27.0223C34.083 27.6182 32.585 28.4933 31.2782 29.589L26.0222 26.5545L20.9375 35.3615L26.1912 38.3948C26.0438 39.2412 25.9697 40.0988 25.9699 40.958C25.9699 41.8322 26.0461 42.6885 26.1912 43.5212L20.9375 46.5545L26.0222 55.3615L31.2782 52.327C32.585 53.4228 34.083 54.2978 35.7156 54.8937V60.958H45.8851V54.8937C47.5178 54.2978 49.0157 53.4228 50.3226 52.327L55.5785 55.3615L60.6633 46.5545L55.4095 43.5212C55.557 42.6748 55.631 41.8172 55.6309 40.958Z" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M47.7691 36.9326L40.7969 40.958" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M40.8008 32.9071C36.3616 32.9071 32.75 36.5187 32.75 40.9579C32.75 45.3972 36.3616 49.0088 40.8008 49.0088C43.9062 49.0088 46.6062 47.2413 47.9486 44.6597" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <div className='design-expertise-sm-bx-content'>
                  <div className='we-are-text-2'>
                    Mobile Optimization
                  </div>
                  <div className='design-usability-content'>
                    We acknowledge that mobile optimization is critical in an era where mobile devices rule consumer interactions. Our approach to mobile website optimization at HKAPPS,is based on guaranteeing a flawless and unparalleled user experience on smartphones and tablets.
                  </div>
                </div>
              </div>
              <div className='design-usability-testing-sec-bx'>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 81 81" fill="none">
                    <path d="M32.5311 35.938H27.5519C25.4894 35.938 23.8174 37.6099 23.8174 39.6724V52.2865C23.8174 54.349 25.4894 56.021 27.5519 56.021M20 56.021C20 58.7709 22.2293 61.0002 24.9793 61.0002H55.0207C57.7707 61.0002 60 58.7709 60 56.021H20Z" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" />
                    <path d="M47.4689 35.9378H52.4481C54.5106 35.9378 56.1826 37.6097 56.1826 39.6722V52.2863C56.1826 54.3488 54.5106 56.0207 52.4481 56.0207M35.0207 56.0207V61M44.9793 56.0207V61M60 56.0207C60 58.7707 57.7707 61 55.0207 61H24.9793C22.2293 61 20 58.7707 20 56.0207H60ZM32.5311 24.112V42.9502C32.5311 44.669 33.9244 46.0622 35.6432 46.0622H44.3568C46.0756 46.0622 47.4689 44.669 47.4689 42.9502V24.112C47.4689 22.3933 46.0756 21 44.3568 21H35.6432C33.9244 21 32.5311 22.3933 32.5311 24.112Z" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" />
                    <path d="M32.5312 37.9712C32.5312 39.6899 33.9245 41.0832 35.6433 41.0832H44.357C46.0757 41.0832 47.469 39.6899 47.469 37.9712" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" />
                  </svg>
                </div>
                <div className='design-expertise-sm-bx-content'>
                  <div className='we-are-text-2'>
                    Cross-Browser Compatibility
                  </div>
                  <div className='design-usability-content'>
                    Both your audience and the web browsers they use are diverse. We are consistent in our commitment to cross-browser compatibility, making sure that your website functions smoothly and consistently in a variety of web browsers. Regardless of the user's preferred browser, we want to offer a consistent and dependable experience.
                  </div>
                </div>
              </div>
            </div>

            <div className='we-are-text-1'>
              Content Management System(CMS) Integration
            </div>

            <div className='design-usability-testing-sec'>
              <div className='webdesign-system-sec-bx'>
                <div className='webdesign-System-Content'>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="81" viewBox="0 0 80 81" fill="none">
                      <path d="M20 42.2512C20 41.4183 20 40.5843 20 39.7514C20.0605 39.2629 20.1117 38.7723 20.1816 38.2859C20.8121 33.925 22.6543 30.1539 25.746 27.01C28.7468 23.9601 32.3635 22.0479 36.5887 21.3069C37.3172 21.1795 38.0542 21.1012 38.7879 21C39.6229 21 40.458 21 41.293 21C41.9756 21.0887 42.6614 21.1545 43.3398 21.2703C47.0901 21.9091 50.4093 23.4717 53.2567 25.9903C56.7607 29.0903 58.9495 32.946 59.774 37.5553C59.9045 38.2828 59.9807 39.0187 60.082 39.7514C60.082 40.5843 60.082 41.4183 60.082 42.2512C60.0256 42.7136 59.9776 43.1781 59.9097 43.6395C59.1311 48.9637 56.6646 53.3497 52.4363 56.6824C48.0159 60.1676 42.9547 61.5256 37.3715 60.8189C33.6536 60.3482 30.325 58.8942 27.4285 56.5186C23.5968 53.3768 21.2066 49.3656 20.3131 44.487C20.1774 43.747 20.1023 42.9965 20 42.2512ZM42.5257 32.5921C44.6863 38.9936 46.8396 45.3742 49.0221 51.8404C49.0847 51.7026 49.1088 51.6619 49.1223 51.616C50.0127 48.6527 50.9103 45.6915 51.7881 42.7251C52.2536 41.1501 52.3632 39.5573 51.9436 37.9478C51.6013 36.6326 50.9249 35.4813 50.2402 34.3248C49.8373 33.6453 49.449 32.9408 49.185 32.1997C48.7079 30.8595 48.9157 29.6038 49.9448 28.5548C50.5283 27.9599 51.2683 27.7136 52.1023 27.6614C47.3803 23.6199 41.9808 22.1335 35.8946 23.5134C31.279 24.5614 27.6999 27.1739 24.9663 31.1382C25.2189 31.1382 25.3483 31.1423 25.4777 31.1371C27.2501 31.0682 29.0213 30.9973 30.7937 30.9273C31.3782 30.9044 31.707 31.1476 31.7341 31.6204C31.7602 32.0713 31.4627 32.3615 30.9137 32.4147C30.2916 32.4752 29.6685 32.5306 29.0078 32.5911C31.183 39.0479 33.353 45.4922 35.5418 51.9917C35.5992 51.8874 35.6305 51.8466 35.6462 51.7997C36.9102 48.0139 38.1752 44.2292 39.4309 40.4413C39.4716 40.3202 39.4612 40.1585 39.4173 40.0353C38.551 37.6388 37.6732 35.2465 36.8089 32.85C36.7286 32.6276 36.6117 32.5629 36.3852 32.5504C35.8643 32.5212 35.3456 32.4627 34.8278 32.4053C34.3581 32.3542 34.1202 32.0713 34.1504 31.6194C34.1786 31.1862 34.4688 30.9242 34.9301 30.9242C35.0992 30.9242 35.2683 30.9409 35.4385 30.9503C36.7025 31.0161 37.9665 31.1413 39.2284 31.1319C40.9224 31.1183 42.6165 30.9994 44.3095 30.9284C44.8982 30.9033 45.2207 31.1444 45.2458 31.6214C45.2708 32.0786 44.9806 32.3615 44.4274 32.4158C43.8085 32.4752 43.1874 32.5306 42.5257 32.5921ZM40.4016 42.699C40.3713 42.7011 40.3411 42.7032 40.3108 42.7042C38.527 47.8782 36.7432 53.0522 34.951 58.2512C38.6888 59.3148 42.343 59.2126 45.9889 57.9809C44.1174 52.8622 42.2595 47.7811 40.4016 42.699ZM32.1662 57.1521C29.2958 49.3061 26.4526 41.5362 23.5864 33.7017C19.642 42.5529 23.4705 52.9572 32.1662 57.1521ZM49.1422 56.4403C53.6961 53.7119 56.601 49.7988 57.6823 44.6227C58.5633 40.4048 57.9474 36.3727 55.9225 32.5671C55.9027 32.7529 55.9183 32.9335 55.9319 33.114C56.1125 35.4928 55.6438 37.763 54.8558 39.9977C53.0292 45.1821 51.2381 50.3801 49.4334 55.5719C49.3342 55.861 49.2392 56.1512 49.1422 56.4403Z" fill="#007B42" />
                    </svg>
                  </div>
                  <div className='we-are-text-2'>
                    WordPress, Drupal,
                    etc
                  </div>
                </div>
                <div className='design-usability-content'>
                  Our proficiency with Content Management System (CMS) integration at HKAPPS   encompasses well-known platforms including WordPress, Drupal, and other ones. Our staff is skilled at smoothly integrating and tailoring these platforms to your business's specific needs because we recognize their power and versatility.
                </div>
              </div>
              <div className='webdesign-system-sec-bx'>
                <div className='webdesign-System-Content'>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="81" viewBox="0 0 80 81" fill="none">
                      <path d="M19.9999 25.0024C19.9973 24.0268 20.352 23.0841 20.9971 22.3523C21.6422 21.6204 22.5329 21.1501 23.5011 21.0303C24.4692 20.9104 25.4478 21.1492 26.2519 21.7016C27.056 22.254 27.6299 23.0817 27.8653 24.0284C27.9093 24.0166 27.9541 24.0079 27.9993 24.0024H31.9991C32.2643 24.0024 32.5186 24.1078 32.7061 24.2953C32.8937 24.4828 32.999 24.7372 32.999 25.0024C32.999 25.2676 32.8937 25.5219 32.7061 25.7094C32.5186 25.897 32.2643 26.0023 31.9991 26.0023H27.9993C27.9541 25.9968 27.9093 25.9881 27.8653 25.9763C27.6299 26.923 27.056 27.7508 26.2519 28.3032C25.4478 28.8556 24.4692 29.0944 23.5011 28.9745C22.5329 28.8546 21.6422 28.3843 20.9971 27.6525C20.352 26.9207 19.9973 25.9779 19.9999 25.0024ZM59.9972 23.0025H55.9975C53.2202 22.9929 50.4959 23.7616 48.1332 25.2214C45.7706 26.6813 43.8643 28.7739 42.6304 31.262L33.789 48.9508C32.8854 50.7731 31.4893 52.3057 29.7591 53.375C28.0288 54.4442 26.0336 55.0073 23.9996 55.0004H19.9999C19.4695 55.0004 18.9608 55.2111 18.5857 55.5861C18.2107 55.9612 18 56.4699 18 57.0003C18 57.5307 18.2107 58.0393 18.5857 58.4144C18.9608 58.7894 19.4695 59.0001 19.9999 59.0001H23.9996C26.7768 59.0095 29.5011 58.2407 31.8637 56.7809C34.2262 55.3211 36.1326 53.2286 37.3667 50.7407L46.2101 33.0518C47.1134 31.2297 48.5091 29.6971 50.239 28.6279C51.9689 27.5586 53.9638 26.9955 55.9975 27.0022H59.9972C60.5276 27.0022 61.0363 26.7915 61.4113 26.4165C61.7864 26.0414 61.9971 25.5328 61.9971 25.0024C61.9971 24.472 61.7864 23.9633 61.4113 23.5883C61.0363 23.2132 60.5276 23.0025 59.9972 23.0025ZM37.9987 24.0024C37.7335 24.0024 37.4791 24.1078 37.2916 24.2953C37.1041 24.4828 36.9987 24.7372 36.9987 25.0024C36.9987 25.2676 37.1041 25.5219 37.2916 25.7094C37.4791 25.897 37.7335 26.0023 37.9987 26.0023H41.9984C42.2636 26.0023 42.5179 25.897 42.7055 25.7094C42.893 25.5219 42.9983 25.2676 42.9983 25.0024C42.9983 24.7372 42.893 24.4828 42.7055 24.2953C42.5179 24.1078 42.2636 24.0024 41.9984 24.0024H37.9987ZM51.9977 58.0002C52.043 57.9947 52.0877 57.986 52.1317 57.9742C52.3694 58.9206 52.9448 59.7476 53.7496 60.2993C54.5545 60.851 55.5333 61.0895 56.5018 60.9698C57.4702 60.8501 58.3615 60.3804 59.0078 59.6493C59.6541 58.9182 60.0108 57.9761 60.0108 57.0003C60.0108 56.0244 59.6541 55.0823 59.0078 54.3512C58.3615 53.6201 57.4702 53.1504 56.5018 53.0307C55.5333 52.911 54.5545 53.1495 53.7496 53.7012C52.9448 54.2529 52.3694 55.0799 52.1317 56.0263C52.0877 56.0145 52.043 56.0058 51.9977 56.0003H47.998C47.7328 56.0003 47.4785 56.1057 47.291 56.2932C47.1034 56.4807 46.9981 56.7351 46.9981 57.0003C46.9981 57.2655 47.1034 57.5198 47.291 57.7073C47.4785 57.8948 47.7328 58.0002 47.998 58.0002H51.9977ZM41.9984 58.0002C42.2636 58.0002 42.5179 57.8948 42.7055 57.7073C42.893 57.5198 42.9983 57.2655 42.9983 57.0003C42.9983 56.7351 42.893 56.4807 42.7055 56.2932C42.5179 56.1057 42.2636 56.0003 41.9984 56.0003H37.9987C37.7335 56.0003 37.4791 56.1057 37.2916 56.2932C37.1041 56.4807 36.9987 56.7351 36.9987 57.0003C36.9987 57.2655 37.1041 57.5198 37.2916 57.7073C37.4791 57.8948 37.7335 58.0002 37.9987 58.0002H41.9984Z" fill="#007B42" />
                    </svg>
                  </div>
                  <div className='we-are-text-2'>
                    Ease of Content
                    Updates
                  </div>
                </div>
                <div className='design-usability-content'>
                  We understand the importance of keeping your website fresh and vibrant for your online presence. Our user-friendly backend interface designs and implementations demonstrate our dedication to making content updates simple.
                  <p className='mobile-app-title'>
                    &#x2022;  Intuitive Dashboard Design  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &#x2022; Real-Time Previews
                    <br />
                    &#x2022;  Drag-and-Drop Functionality &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &#x2022; Continuous Support
                    <br />
                    &#x2022; Comprehensive Training
                  </p>

                </div>
              </div>
            </div>

            <div className='we-are-text-1'>
              SEO-Friendly Design
            </div>

            <div className='design-approach-sec'>
              <div className='design-approach-bx'>
                <div className='webdesign-SEO-title'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <rect width="80" height="80" rx="40" fill="#E4F7F3" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M38.8215 28.6785C39.134 28.9911 39.558 29.1667 40 29.1667C40.442 29.1667 40.8659 28.9911 41.1785 28.6785C41.4911 28.366 41.6667 27.942 41.6667 27.5V26.3506C47.9177 27.1105 52.8883 32.0819 53.647 38.3333H52.5C52.058 38.3333 51.634 38.5089 51.3215 38.8215C51.0089 39.134 50.8333 39.558 50.8333 40C50.8333 40.442 51.0089 40.8659 51.3215 41.1785C51.634 41.4911 52.058 41.6667 52.5 41.6667H53.6469C52.8881 47.9179 47.9176 52.8892 41.6667 53.6491V52.5C41.6667 52.058 41.4911 51.634 41.1785 51.3215C40.8659 51.0089 40.442 50.8333 40 50.8333C39.558 50.8333 39.134 51.0089 38.8215 51.3215C38.5089 51.634 38.3333 52.058 38.3333 52.5V53.6497C32.08 52.8919 27.1069 47.9197 26.3479 41.6667H27.5C27.942 41.6667 28.366 41.4911 28.6785 41.1785C28.9911 40.8659 29.1667 40.442 29.1667 40C29.1667 39.558 28.9911 39.134 28.6785 38.8215C28.366 38.5089 27.942 38.3333 27.5 38.3333H26.3478C27.1067 32.0802 32.0798 27.1077 38.3333 26.35V27.5C38.3333 27.942 38.5089 28.366 38.8215 28.6785ZM41.6667 22.9974V21.6667C41.6667 21.2246 41.4911 20.8007 41.1785 20.4882C40.8659 20.1756 40.442 20 40 20C39.558 20 39.134 20.1756 38.8215 20.4882C38.5089 20.8007 38.3333 21.2246 38.3333 21.6667V22.9969C30.2397 23.7828 23.7817 30.24 22.9947 38.3333H21.6667C21.2246 38.3333 20.8007 38.5089 20.4882 38.8215C20.1756 39.134 20 39.558 20 40C20 40.442 20.1756 40.8659 20.4882 41.1785C20.8007 41.4911 21.2246 41.6667 21.6667 41.6667H22.9947C23.7819 49.7598 30.2398 56.2169 38.3333 57.0028V58.3333C38.3333 58.7754 38.5089 59.1993 38.8215 59.5118C39.134 59.8244 39.558 60 40 60C40.442 60 40.8659 59.8244 41.1785 59.5118C41.4911 59.1993 41.6667 58.7754 41.6667 58.3333V57.0023C49.7577 56.2141 56.213 49.7581 57.0001 41.6667H58.3333C58.7754 41.6667 59.1993 41.4911 59.5118 41.1785C59.8244 40.8659 60 40.442 60 40C60 39.558 59.8244 39.134 59.5118 38.8215C59.1993 38.5089 58.7754 38.3333 58.3333 38.3333H57.0001C56.2132 30.2418 49.7578 23.7856 41.6667 22.9974ZM35 40C35 42.7567 37.2433 45 40 45C42.7567 45 45 42.7567 45 40C45 37.2433 42.7567 35 40 35C37.2433 35 35 37.2433 35 40ZM38.3333 40C38.3333 39.0817 39.0817 38.3333 40 38.3333C40.9183 38.3333 41.6667 39.0817 41.6667 40C41.6667 40.9183 40.9183 41.6667 40 41.6667C39.0817 41.6667 38.3333 40.9183 38.3333 40Z" fill="#007B42" />
                  </svg>
                  <div className='we-are-text-2'> SEO Best Practices</div>
                </div>
                <div className='java-second-section-text'>
                  At <span className='mobile-app-title'> HKAPPS</span>
                  , we understand that a website's design is not just about aesthetics; it's a critical element in ensuring your online visibility.
                  Our approach to SEO-friendly design involves integrating best practices at every stage to enhance your website's search engine performance.
                  <br /><br />
                  <span className='mobile-app-title'> Features for SEO-Friendly Design from HKAPPS</span>
                  <br /><br />
                  &#x2022;  Keyword Research and Integration
                  <br />
                  &#x2022;  Mobile Optimization
                  <br />
                  &#x2022;  Structured Data Markup
                  <br />
                  &#x2022;  SEO-Friendly URLs
                  <br />
                  &#x2022; Image Optimization
                  <br />
                  &#x2022;  Sitemap Submission
                  <br />
                  &#x2022;  User-Focused Content
                </div>
              </div>
              <div className='design-approach-bx'>
                <img src="/image/webdesign-seo-image.webp" className='design-approach-image' alt="" />
              </div>
              <div className='design-approach-bx'>
                <div className='webdesign-SEO-title'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="81" viewBox="0 0 80 81" fill="none">
                    <rect y="0.958008" width="80" height="80" rx="40" fill="#E4F7F3" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M36.9724 30.9538C35.2152 31.7066 33.6308 32.8114 32.3169 34.2L32.3198 34.1986C32.1865 34.3383 32.0259 34.4492 31.848 34.5244C31.6701 34.5996 31.4786 34.6375 31.2855 34.6357C30.919 34.6372 30.566 34.4976 30.2998 34.2457C30.1639 34.1163 30.0549 33.9614 29.979 33.7898C29.903 33.6182 29.8616 33.4334 29.8571 33.2458C29.8525 33.0582 29.885 32.8716 29.9527 32.6965C30.0203 32.5215 30.1217 32.3615 30.2512 32.2257C33.1212 29.2344 36.9822 27.3905 41.1126 27.0386V23.8571H38.8512C38.4723 23.8571 38.109 23.7066 37.8411 23.4387C37.5731 23.1708 37.4226 22.8075 37.4226 22.4286C37.4226 22.0497 37.5731 21.6863 37.8411 21.4184C38.109 21.1505 38.4723 21 38.8512 21H46.2298C46.6087 21 46.972 21.1505 47.2399 21.4184C47.5078 21.6863 47.6584 22.0497 47.6584 22.4286C47.6584 22.8075 47.5078 23.1708 47.2399 23.4387C46.972 23.7066 46.6087 23.8571 46.2298 23.8571H43.9698V27.0371C47.4837 27.3303 50.8182 28.7143 53.5069 30.9957L55.6826 28.82C55.8144 28.6836 55.9721 28.5747 56.1463 28.4999C56.3206 28.425 56.5081 28.3856 56.6978 28.3839C56.8875 28.3823 57.0756 28.4184 57.2511 28.4903C57.4267 28.5621 57.5862 28.6682 57.7203 28.8023C57.8545 28.9364 57.9606 29.0959 58.0324 29.2715C58.1042 29.4471 58.1404 29.6352 58.1387 29.8249C58.1371 30.0145 58.0977 30.202 58.0228 30.3763C57.9479 30.5506 57.8391 30.7082 57.7026 30.84L55.5241 33.0186C58.0298 35.9843 59.5484 39.81 59.5484 43.99C59.5484 53.3686 51.9184 61 42.5384 61C40.2435 60.9952 37.9731 60.5285 35.8624 59.6278C33.7517 58.7271 31.8439 57.4107 30.2526 55.7571C30.0574 55.556 29.926 55.3016 29.8749 55.026C29.8239 54.7504 29.8554 54.4658 29.9657 54.2081C30.0759 53.9504 30.2599 53.731 30.4945 53.5776C30.729 53.4241 31.0038 53.3434 31.2841 53.3457C31.4763 53.3444 31.6669 53.382 31.8441 53.4564C32.0214 53.5308 32.1818 53.6404 32.3155 53.7786C33.6328 55.1637 35.2192 56.2653 36.9773 57.0158C38.7354 57.7662 40.6282 58.1497 42.5398 58.1429C50.3426 58.1429 56.6912 51.7943 56.6912 43.99C56.6912 36.18 50.3455 29.8257 42.5455 29.8229H42.5341C40.6224 29.8161 38.7296 30.201 36.9724 30.9538ZM48.7429 45.4128H45.3971C43.0343 45.4128 41.1114 43.49 41.1114 41.1271V37.5071C41.1114 37.1283 41.2619 36.7649 41.5298 36.497C41.7978 36.2291 42.1611 36.0786 42.54 36.0786C42.9189 36.0786 43.2822 36.2291 43.5502 36.497C43.8181 36.7649 43.9686 37.1283 43.9686 37.5071V41.1271C43.9686 41.506 44.1191 41.8694 44.387 42.1373C44.6549 42.4052 45.0183 42.5557 45.3971 42.5557H48.7429C49.1217 42.5557 49.4851 42.7062 49.753 42.9741C50.0209 43.242 50.1714 43.6054 50.1714 43.9843C50.1714 44.3632 50.0209 44.7265 49.753 44.9944C49.4851 45.2623 49.1217 45.4128 48.7429 45.4128ZM35.563 42.9741C35.8309 43.242 35.9814 43.6054 35.9814 43.9843C35.9814 44.3632 35.8309 44.7265 35.563 44.9944C35.2951 45.2623 34.9317 45.4128 34.5529 45.4128H25.5071C25.1283 45.4128 24.7649 45.2623 24.497 44.9944C24.2291 44.7265 24.0786 44.3632 24.0786 43.9843C24.0786 43.6054 24.2291 43.242 24.497 42.9741C24.7649 42.7062 25.1283 42.5557 25.5071 42.5557H34.5529C34.9317 42.5557 35.2951 42.7062 35.563 42.9741ZM32.4844 36.8141C32.7523 37.082 32.9029 37.4454 32.9029 37.8243C32.9029 38.2032 32.7523 38.5665 32.4844 38.8344C32.2165 39.1023 31.8532 39.2528 31.4743 39.2528H22.4286C22.0497 39.2528 21.6863 39.1023 21.4184 38.8344C21.1505 38.5665 21 38.2032 21 37.8243C21 37.4454 21.1505 37.082 21.4184 36.8141C21.6863 36.5462 22.0497 36.3957 22.4286 36.3957H31.4743C31.8532 36.3957 32.2165 36.5462 32.4844 36.8141ZM32.4844 49.1327C32.7523 49.4006 32.9029 49.764 32.9029 50.1428C32.9029 50.5217 32.7523 50.8851 32.4844 51.153C32.2165 51.4209 31.8532 51.5714 31.4743 51.5714H22.4286C22.0497 51.5714 21.6863 51.4209 21.4184 51.153C21.1505 50.8851 21 50.5217 21 50.1428C21 49.764 21.1505 49.4006 21.4184 49.1327C21.6863 48.8648 22.0497 48.7143 22.4286 48.7143H31.4743C31.8532 48.7143 32.2165 48.8648 32.4844 49.1327Z" fill="#007B42" />
                  </svg>
                  <div className='we-are-text-2'> Fast Loading Times</div>
                </div>
                <div className='java-second-section-text'>
                  Not only does website performance affect user experience, but it also has a big impact on how well it ranks in search engines. Quick loading times are a key component of our design philosophy at
                  At <span className='mobile-app-title'> HKAPPS</span>
                  <br /><br />
                  <span className='mobile-app-title'> Features for SEO-Friendly Design with Fast Loading Times from HKAPPS</span>
                  <br /><br />
                  &#x2022;  Optimized Code and Scripts
                  <br />
                  &#x2022; Image Compression and Lazy Loading
                  <br />
                  &#x2022;  Minimization of HTTP Requests
                  <br />
                  &#x2022;  Browser Caching
                  <br />
                  &#x2022; Content Delivery Network(CDN) Integration
                </div>
              </div>
            </div>

            <div className='we-are-text-1'>
              Content Delivery Network (CDN) Integration
            </div>

            <div className='webdesign-content-delivery-sec'>
              <div className='java-second-section-text'>
                At <span className='java-second-section-text-span'> HKAPPS </span>, we are aware that providing an outstanding user experience requires a website that is quick to load and responsive. For this reason, we use Content Delivery Network (CDN) integration to maximise the content delivery of your website among servers located all over the world. Regardless of the user's location, quick loading times are guaranteed thanks to this innovative approach.
              </div>
              <div className='webdesign-content-delivery-bx'>
                <div className='service-title'>
                  How CDNs Enhance Performance
                </div>
                <div className='webdesign-content-sm-bx-sec'>
                  <div className='webdesign-content-sm-bx'>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="62" height="63" viewBox="0 0 62 63" fill="none">
                        <path d="M30.997 51.6189C41.8555 51.6189 50.658 42.8164 50.658 31.9579C50.658 21.0994 41.8555 12.2969 30.997 12.2969C20.1385 12.2969 11.3359 21.0994 11.3359 31.9579C11.3359 42.8164 20.1385 51.6189 30.997 51.6189Z" stroke="#007B42" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M11.3359 31.9579H50.658M23.6241 31.9579C23.6241 24.9337 25.0294 18.443 27.3105 14.9309C29.5917 11.4189 32.4022 11.4189 34.6834 14.9309C36.9646 18.443 38.3699 24.9337 38.3699 31.9579C38.3699 38.982 36.9646 45.4727 34.6834 48.9848C32.4022 52.4969 29.5917 52.4969 27.3105 48.9848C25.0294 45.4727 23.6241 38.9821 23.6241 31.9579Z" stroke="#007B42" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17.7926 5.83126C28.7549 0.594544 42.2823 2.51604 51.3621 11.5959C60.442 20.6757 62.3635 34.2031 57.1267 45.1654M44.2074 58.0849C33.2451 63.3216 19.7177 61.4001 10.6379 52.3203C1.55803 43.2404 -0.363464 29.713 4.87325 18.7506" stroke="#007B42" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className='tab_lab'>
                      Global Server Distribution
                    </div>
                    <div className='webdesign-content-sm-bx-overlay'>
                      <div className='testimonials-bottom-box-text'>
                        To create a network of connected servers, we methodically place servers in different parts of the world.
                      </div>
                    </div>
                  </div>
                  <div className='webdesign-content-sm-bx'>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="59" height="52" viewBox="0 0 59 52" fill="none">
                        <path d="M29.4657 0.835033C23.7366 0.835832 18.1364 2.53531 13.3731 5.7186C8.6098 8.90189 4.8973 13.4261 2.70498 18.7191C0.512659 24.0121 -0.0610322 29.8363 1.05644 35.4554C2.17391 41.0744 4.93236 46.236 8.98304 50.2875C9.18233 50.487 9.419 50.6453 9.67951 50.7533C9.94002 50.8613 10.2193 50.9168 10.5013 50.9168C10.7833 50.9168 11.0625 50.8613 11.323 50.7533C11.5835 50.6453 11.8202 50.487 12.0195 50.2875L21.1289 41.1888C21.3284 40.9895 21.4867 40.7529 21.5947 40.4924C21.7027 40.2318 21.7582 39.9526 21.7582 39.6706C21.7582 39.3886 21.7027 39.1093 21.5947 38.8488C21.4867 38.5883 21.3284 38.3517 21.1289 38.1524C19.0027 36.0821 17.7344 33.2868 17.5767 30.3234C17.419 27.36 18.3835 24.4459 20.278 22.1617C22.1725 19.8775 24.858 18.3908 27.7994 17.9978C30.7409 17.6047 33.7225 18.3342 36.1502 20.0409L27.9529 28.2383C27.7535 28.4376 27.5953 28.6743 27.4874 28.9348C27.3795 29.1953 27.324 29.4745 27.324 29.7565C27.324 30.0385 27.3795 30.3177 27.4874 30.5782C27.5953 30.8387 27.7535 31.0754 27.9529 31.2747C28.1522 31.4741 28.3889 31.6323 28.6494 31.7402C28.9099 31.8481 29.1891 31.9036 29.4711 31.9036C29.7531 31.9036 30.0323 31.8481 30.2928 31.7402C30.5532 31.6323 30.7899 31.4741 30.9893 31.2747L39.1867 23.0774C40.8207 25.4578 41.5254 28.3546 41.1675 31.2196C40.8097 34.0847 39.414 36.7191 37.2446 38.6245C37.0163 38.8258 36.8334 39.0735 36.7082 39.351C36.5829 39.6285 36.5181 39.9294 36.5181 40.2339C36.5181 40.5383 36.5829 40.8393 36.7082 41.1168C36.8334 41.3943 37.0163 41.642 37.2446 41.8433L46.7725 50.5772C47.171 50.9545 47.699 51.1648 48.2478 51.1648C48.7966 51.1648 49.3246 50.9545 49.7231 50.5772C53.8605 46.5552 56.7026 41.3894 57.8851 35.7418C59.0676 30.0942 58.5367 24.2221 56.3604 18.8782C54.1841 13.5343 50.4616 8.96197 45.6699 5.74733C40.8783 2.5327 35.2358 0.822184 29.4657 0.835033ZM10.5603 45.663C7.51151 42.0425 5.58058 37.6141 5.00238 32.9164H13.6826C14.149 35.3346 15.17 37.6118 16.6654 39.5687L10.5603 45.663ZM48.1137 45.9957L41.7725 40.191C44.1485 37.395 45.4919 33.8677 45.5778 30.1996C45.6638 26.5314 44.487 22.9451 42.2446 20.0409L45.9999 16.2856C46.4026 15.8829 46.6288 15.3368 46.6288 14.7673C46.6288 14.1979 46.4026 13.6518 45.9999 13.2491C45.5973 12.8464 45.0512 12.6202 44.4817 12.6202C43.9123 12.6202 43.3661 12.8464 42.9635 13.2491L39.2081 17.0044C36.9023 15.2563 34.1678 14.1622 31.2926 13.8372C28.4173 13.5122 25.5076 13.9684 22.8697 15.1577C20.2319 16.347 17.9634 18.2255 16.3032 20.5955C14.643 22.9654 13.6525 25.7391 13.4358 28.6245H4.78779C4.9443 22.0795 7.69439 15.8648 12.4331 11.3474C17.1717 6.8301 23.5109 4.38021 30.0558 4.53672C36.6008 4.69323 42.8156 7.44332 47.3329 12.182C51.8503 16.9207 54.3002 23.2598 54.1437 29.8048C54.1615 35.765 52.0019 41.5265 48.0707 46.0064L48.1137 45.9957Z" fill="#007B42" />
                      </svg>
                    </div>
                    <div className='tab_lab'>
                      Acceleration and Caching
                    </div>
                    <div className='webdesign-content-sm-bx-overlay'>
                      <div className='testimonials-bottom-box-text'>
                        On these decentralised servers, CDNs store static content caches, including images, CSS, and JavaScript.Because stored information is sent from the server nearest to the user, loading times are sped up and delays are decreased.
                      </div>
                    </div>
                  </div>
                  <div className='webdesign-content-sm-bx'>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="58" height="52" viewBox="0 0 58 52" fill="none">
                        <path d="M5.94444 45.1111V45.6111H6.44444H54.7778C55.4998 45.6111 56.1922 45.8979 56.7027 46.4084C57.2132 46.9189 57.5 47.6114 57.5 48.3333C57.5 49.0553 57.2132 49.7477 56.7027 50.2582C56.1922 50.7688 55.4998 51.0556 54.7778 51.0556H3.22222C2.50024 51.0556 1.80784 50.7688 1.29732 50.2582C0.786805 49.7477 0.5 49.0553 0.5 48.3333V3.22222C0.5 2.50024 0.786805 1.80784 1.29732 1.29732C1.80784 0.786805 2.50024 0.5 3.22222 0.5C3.9442 0.5 4.63661 0.786805 5.14712 1.29732C5.65764 1.80784 5.94444 2.50024 5.94444 3.22222V45.1111ZM23.2571 24.4493L33.5198 14.1866C33.5199 14.1866 33.5199 14.1866 33.5199 14.1866C34.0304 13.6763 34.7226 13.3896 35.4444 13.3896C36.1663 13.3896 36.8585 13.6763 37.369 14.1866C37.369 14.1866 37.369 14.1866 37.3691 14.1866L47.9798 24.7973L48.8333 25.6509V24.4438V21.8886C48.8333 21.1666 49.1201 20.4742 49.6307 19.9637C50.1412 19.4531 50.8336 19.1663 51.5556 19.1663C52.2775 19.1663 52.9699 19.4531 53.4805 19.9637C53.991 20.4742 54.2778 21.1666 54.2778 21.8886V32.2222C54.2778 32.9442 53.991 33.6366 53.4805 34.1471C52.9699 34.6576 52.2775 34.9444 51.5556 34.9444H41.2219C40.4999 34.9444 39.8075 34.6576 39.297 34.1471C38.7865 33.6366 38.4997 32.9442 38.4997 32.2222C38.4997 31.5002 38.7865 30.8078 39.297 30.2973C39.8075 29.7868 40.4999 29.5 41.2219 29.5H43.7771H44.9842L44.1307 28.6464L35.798 20.3138L35.4444 19.9602L35.0909 20.3138L24.4801 30.9246C24.2044 31.2003 23.8726 31.4136 23.5072 31.55C23.1419 31.6863 22.7515 31.7426 22.3625 31.715C21.9735 31.6874 21.5949 31.5765 21.2525 31.3899C20.9101 31.2032 20.6118 30.9452 20.3777 30.6333L10.7111 17.7444C10.4966 17.4585 10.3406 17.133 10.2518 16.7867C10.1631 16.4404 10.1435 16.08 10.194 15.7261C10.2446 15.3722 10.3643 15.0318 10.5465 14.7242C10.7286 14.4165 10.9696 14.1478 11.2556 13.9333C11.5415 13.7188 11.867 13.5628 12.2133 13.4741C12.5596 13.3853 12.92 13.3657 13.2739 13.4163C13.6278 13.4668 13.9682 13.5866 14.2758 13.7687C14.5835 13.9508 14.8522 14.1918 15.0667 14.4778L22.5035 24.3957L22.8494 24.857L23.2571 24.4493Z" fill="#007B42" stroke="white" />
                      </svg>
                    </div>
                    <div className='tab_lab'>
                      Lower Latency
                    </div>
                    <div className='webdesign-content-sm-bx-overlay'>
                      <div className='testimonials-bottom-box-text'>
                        CDNs considerably lower latency, which leads to quicker page loading, by reducing the physical distance between the user and the server.
                      </div>
                    </div>
                  </div>
                  <div className='webdesign-content-sm-bx'>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
                        <g clipPath="url(#clip0_373_9685)">
                          <path d="M33.5312 37.2837V51.2031C33.5312 53.7056 31.5025 55.7344 29 55.7344H6.79688C4.29438 55.7344 2.26562 53.7056 2.26562 51.2031V29C2.26562 26.4975 4.29438 24.4688 6.79688 24.4688H20.7163M15.4062 2.26562H9.0625C5.3087 2.26562 2.26562 5.3087 2.26562 9.0625V15.4062M24.4688 2.26562H33.5312M42.5938 2.26562H48.9375C52.6913 2.26562 55.7344 5.3087 55.7344 9.0625V15.4062M55.7344 42.5938V48.9375C55.7344 52.6913 52.6913 55.7344 48.9375 55.7344H42.5938M55.7344 24.4688V33.5312M16.7335 41.2665L45.3447 12.6553" stroke="#007B42" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M15.4062 35.7969V42.5938H22.2031M39.875 11.3281H46.6719V18.125" stroke="#007B42" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                          <clipPath id="clip0_373_9685">
                            <rect width="58" height="58" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className='tab_lab'>
                      Scalability
                    </div>
                    <div className='webdesign-content-sm-bx-overlay'>
                      <div className='testimonials-bottom-box-text'>
                        When traffic spikes or periods of high demand occur, DNS automatically adjusts to handle the extra traffic, guaranteeing consistent website performance.
                      </div>
                    </div>
                  </div>
                  <div className='webdesign-content-sm-bx'>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="59" height="48" viewBox="0 0 59 48" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.15113 41.8495L10.948 40.4851C12.0727 39.9367 13.4291 40.4036 13.9777 41.5281C14.5264 42.6528 14.0594 44.0091 12.9348 44.5577L8.29024 46.8233C7.7978 47.0636 7.235 47.1172 6.70605 46.9743C6.1771 46.8315 5.71785 46.5017 5.41335 46.0462C2.19899 41.2385 0.5 35.6714 0.5 29.9473C0.5 22.2011 3.51657 14.9186 8.99383 9.44109C14.4713 3.96372 21.7538 0.947266 29.5 0.947266C33.6528 0.947266 37.6634 1.8073 41.4205 3.50323C42.561 4.01809 43.0681 5.35991 42.5533 6.50042C42.0384 7.6406 40.6964 8.14799 39.5562 7.63312C37.0768 6.51391 34.465 5.82652 31.7657 5.58081V8.99012C31.7657 10.2414 30.7514 11.2557 29.5001 11.2557C28.2488 11.2557 27.2345 10.2414 27.2345 8.99012V5.58251C19.3616 6.30864 12.5571 10.7804 8.6243 17.1944L11.7885 18.7121C12.9168 19.2533 13.3925 20.6067 12.8515 21.7348C12.4619 22.5471 11.6514 23.0211 10.8071 23.0211C10.4684 23.021 10.134 22.9447 9.82882 22.7977L6.62398 21.2605C5.59505 23.9613 5.03125 26.8897 5.03125 29.9473C5.03125 34.1204 6.10459 38.1971 8.15113 41.8495ZM52.9467 16.8941C54.0876 16.379 55.4292 16.8865 55.9439 18.0269C57.64 21.7839 58.5 25.7945 58.5 29.9473C58.5 35.6714 56.801 41.2385 53.5865 46.0463C53.2841 46.4988 52.8289 46.8273 52.3042 46.9717C51.7795 47.1161 51.2204 47.0668 50.729 46.8327L45.9712 44.5671C44.8415 44.0291 44.3617 42.6771 44.8997 41.5475C45.4378 40.4176 46.7898 39.9381 47.9193 40.476L50.8394 41.8665C52.8919 38.2099 53.9688 34.1267 53.9688 29.9473C53.9688 26.4417 53.2439 23.0583 51.814 19.8912C51.2992 18.7508 51.8063 17.409 52.9467 16.8941ZM48.405 9.00036C48.9304 9.04966 49.4222 9.28084 49.7954 9.65399C50.1685 10.0272 50.3997 10.519 50.449 11.0444C50.4983 11.5699 50.3627 12.0961 50.0656 12.5322C47.7548 15.9223 36.1355 32.9263 34.3082 34.7537C32.983 36.0786 31.2424 36.7412 29.502 36.7412C27.7615 36.7412 26.0208 36.0786 24.6958 34.7537C22.0457 32.1035 22.0457 27.7916 24.6958 25.1413C26.5232 23.314 43.5272 11.6946 46.9173 9.38392C47.3534 9.08671 47.8795 8.95105 48.405 9.00036ZM27.8999 31.5496C28.7832 32.433 30.2206 32.433 31.1039 31.5496C31.8053 30.8397 35.2484 26.0123 39.377 20.0725C33.4372 24.2012 28.6095 27.6443 27.8995 28.346C27.0165 29.2293 27.0166 30.6663 27.8999 31.5496Z" fill="#007B42" />
                      </svg>
                    </div>
                    <div className='tab_lab'>
                      Optimization of Bandwidth
                    </div>
                    <div className='webdesign-content-sm-bx-overlay'>
                      <div className='testimonials-bottom-box-text'>
                        Content delivery networks (CDNs) minimise the amount of data moved between servers and consumers by providing files that have been compressed and optimised.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='webdesign-content-delivery-bx'>
                <div className='service-title'>
                  Benefits of CDN Integration
                </div>
                <div className='webdesign-content-sm-bx-sec'>
                  <div className='webdesign-content-sm-bx'>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="65" height="54" viewBox="0 0 65 54" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M38.4559 5.41998C33.201 5.41418 28.1259 7.33284 24.1891 10.8136C23.9703 11.0132 23.714 11.1673 23.4351 11.2668C23.1561 11.3664 22.8602 11.4095 22.5644 11.3936C22.2687 11.3776 21.9791 11.303 21.7125 11.1741C21.4458 11.0451 21.2075 10.8644 21.0115 10.6424C20.8154 10.4205 20.6654 10.1617 20.5703 9.88121C20.4752 9.60072 20.4368 9.30412 20.4575 9.00867C20.4782 8.71321 20.5574 8.42483 20.6906 8.1603C20.8238 7.89577 21.0083 7.6604 21.2334 7.46788C25.9847 3.26402 32.1118 0.947026 38.4559 0.955099C52.8299 0.955099 64.5011 12.6263 64.5011 27.0003C64.5011 41.3742 52.8299 53.0454 38.4559 53.0454C32.1118 53.0535 25.9847 50.7365 21.2334 46.5326C20.8005 46.1378 20.5403 45.5886 20.5088 45.0035C20.4773 44.4184 20.677 43.8445 21.0649 43.4054C21.4529 42.9663 21.9978 42.6973 22.5823 42.6564C23.1668 42.6156 23.7439 42.8061 24.1891 43.187C28.1259 46.6677 33.201 48.5863 38.4559 48.5805C50.3653 48.5805 60.0362 38.9096 60.0362 27.0003C60.0362 15.0909 50.3653 5.41998 38.4559 5.41998ZM35.0284 25.81V13.9036C35.0284 13.3115 35.2636 12.7437 35.6823 12.325C36.101 11.9064 36.6688 11.6712 37.2609 11.6712C37.853 11.6712 38.4208 11.9064 38.8395 12.325C39.2581 12.7437 39.4933 13.3115 39.4933 13.9036V24.8843L48.3636 33.7575C48.782 34.1759 49.017 34.7434 49.017 35.3351C49.017 35.9268 48.782 36.4943 48.3636 36.9127C47.9452 37.3311 47.3777 37.5661 46.786 37.5661C46.1943 37.5661 45.6268 37.3311 45.2084 36.9127L35.6833 27.3876C35.2636 26.9709 35.0284 26.4023 35.0284 25.81ZM20.592 18.815H2.73244C2.14036 18.815 1.57253 18.5798 1.15387 18.1611C0.735203 17.7425 0.5 17.1746 0.5 16.5826C0.5 15.9905 0.735203 15.4226 1.15387 15.004C1.57253 14.5853 2.14036 14.3501 2.73244 14.3501H20.592C21.1841 14.3501 21.7519 14.5853 22.1706 15.004C22.5892 15.4226 22.8244 15.9905 22.8244 16.5826C22.8244 17.1746 22.5892 17.7425 22.1706 18.1611C21.7519 18.5798 21.1841 18.815 20.592 18.815ZM23.5686 29.2331H5.70903C5.11695 29.2331 4.54912 28.9979 4.13046 28.5792C3.71179 28.1605 3.47659 27.5927 3.47659 27.0006C3.47659 26.4085 3.71179 25.8407 4.13046 25.422C4.54912 25.0034 5.11695 24.7682 5.70903 24.7682H23.5686C24.1607 24.7682 24.7285 25.0034 25.1471 25.422C25.5658 25.8407 25.801 26.4085 25.801 27.0006C25.801 27.5927 25.5658 28.1605 25.1471 28.5792C24.7285 28.9979 24.1607 29.2331 23.5686 29.2331ZM26.5452 39.6511H8.68562C8.09354 39.6511 7.52571 39.4159 7.10705 38.9973C6.68838 38.5786 6.45318 38.0108 6.45318 37.4187C6.45318 36.8266 6.68838 36.2588 7.10705 35.8401C7.52571 35.4214 8.09354 35.1862 8.68562 35.1862H26.5452C27.1372 35.1862 27.7051 35.4214 28.1237 35.8401C28.5424 36.2588 28.7776 36.8266 28.7776 37.4187C28.7776 38.0108 28.5424 38.5786 28.1237 38.9973C27.7051 39.4159 27.1372 39.6511 26.5452 39.6511Z" fill="#007B42" />
                      </svg>
                    </div>
                    <div className='tab_lab'>
                      Reduced Bounce Rates and Improved User Experience
                    </div>
                    <div className='webdesign-content-sm-bx-overlay'>
                      <div className='testimonials-bottom-box-text'>
                        Users enjoy quicker page loads, which helps to improve user satisfaction.
                      </div>
                    </div>
                  </div>
                  <div className='webdesign-content-sm-bx'>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M20.9071 0C13.9632 0 8.57596 1.37582 4.97724 4.97724C1.37582 8.57865 0 13.9632 0 20.9071V37.0932C0 44.0371 1.37582 49.4244 4.97724 53.0231C8.57865 56.6245 13.9632 58.0003 20.9071 58.0003H37.0932C44.0371 58.0003 49.4244 56.6245 53.0231 53.0231C56.6245 49.4217 58.0003 44.0371 58.0003 37.0932V20.9071C58.0003 13.9632 56.6245 8.57596 53.0231 4.97724C49.4217 1.37582 44.0371 0 37.0932 0H20.9071ZM4.04653 20.9071C4.04653 14.3625 5.3684 10.3079 7.83679 7.83679C10.3052 5.3684 14.3625 4.04653 20.9071 4.04653H37.0932C43.6378 4.04653 47.6925 5.3684 50.1635 7.83679C52.6319 10.3052 53.9538 14.3625 53.9538 20.9071V37.0932C53.9538 43.6378 52.6319 47.6925 50.1635 50.1635C47.6952 52.6319 43.6378 53.9538 37.0932 53.9538H20.9071C14.3625 53.9538 10.3079 52.6319 7.83679 50.1635C5.3684 47.6952 4.04653 43.6378 4.04653 37.0932V20.9071ZM33.7208 22.2559C33.7208 21.7193 33.934 21.2047 34.3134 20.8253C34.6928 20.4458 35.2075 20.2327 35.7441 20.2327H41.1394C41.676 20.2327 42.1907 20.4458 42.5701 20.8253C42.9495 21.2047 43.1627 21.7193 43.1627 22.2559V27.6513C43.1627 28.1879 42.9495 28.7025 42.5701 29.082C42.1907 29.4614 41.676 29.6746 41.1394 29.6746C40.6028 29.6746 40.0882 29.4614 39.7088 29.082C39.3293 28.7025 39.1162 28.1879 39.1162 27.6513V27.1393L31.2395 35.016C31.0279 35.2275 30.772 35.3895 30.4903 35.4902C30.2085 35.5909 29.9079 35.6279 29.6102 35.5985C29.3124 35.5691 29.0249 35.474 28.7683 35.3201C28.5117 35.1662 28.2925 34.9573 28.1264 34.7084L25.1778 30.2869L18.2906 37.1741C17.907 37.5315 17.3997 37.7261 16.8756 37.7168C16.3514 37.7076 15.8513 37.4952 15.4806 37.1245C15.1099 36.7538 14.8976 36.2537 14.8883 35.7296C14.8791 35.2054 15.0736 34.6981 15.431 34.3146L24.0636 25.682C24.2752 25.4704 24.5311 25.3085 24.8129 25.2077C25.0946 25.107 25.3952 25.07 25.6929 25.0994C25.9907 25.1288 26.2782 25.2239 26.5348 25.3778C26.7914 25.5317 27.0106 25.7406 27.1768 25.9895L30.1253 30.411L36.2571 24.2792H35.7441C35.2075 24.2792 34.6928 24.066 34.3134 23.6866C33.934 23.3072 33.7208 22.7925 33.7208 22.2559Z" fill="#007B42" />
                      </svg>
                    </div>
                    <div className='tab_lab'>
                      Enhanced Website Performance
                    </div>
                    <div className='webdesign-content-sm-bx-overlay'>
                      <div className='testimonials-bottom-box-text'>
                        The overall performance of websites is improved when they carry out well across various devices and network situations.
                      </div>
                    </div>
                  </div>
                  <div className='webdesign-content-sm-bx'>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="63" height="62" viewBox="0 0 63 62" fill="none">
                        <path d="M31.497 50.6609C42.3555 50.6609 51.158 41.8584 51.158 30.9999C51.158 20.1414 42.3555 11.3389 31.497 11.3389C20.6385 11.3389 11.8359 20.1414 11.8359 30.9999C11.8359 41.8584 20.6385 50.6609 31.497 50.6609Z" stroke="#007B42" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M11.8359 30.9999H51.158M24.1241 30.9999C24.1241 23.9757 25.5294 17.485 27.8105 13.9729C30.0917 10.4608 32.9022 10.4608 35.1834 13.9729C37.4646 17.485 38.8699 23.9757 38.8699 30.9999C38.8699 38.024 37.4646 44.5147 35.1834 48.0268C32.9022 51.5389 30.0917 51.5389 27.8105 48.0268C25.5294 44.5147 24.1241 38.0241 24.1241 30.9999Z" stroke="#007B42" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M18.2926 4.87325C29.2549 -0.363464 42.7823 1.55803 51.8621 10.6379C60.942 19.7177 62.8635 33.2451 57.6267 44.2074M44.7074 57.1269C33.7451 62.3636 20.2177 60.4421 11.1379 51.3623C2.05803 42.2824 0.136536 28.755 5.37325 17.7926" stroke="#007B42" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className='tab_lab'>
                      Global Accessibility
                    </div>
                    <div className='webdesign-content-sm-bx-overlay'>
                      <div className='testimonials-bottom-box-text'>
                        A smooth and inclusive experience is created when users from all over the world can access your website with little delay.
                      </div>
                    </div>
                  </div>
                  <div className='webdesign-content-sm-bx'>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="58" viewBox="0 0 50 58" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M41.9196 58H8.08593C6.16377 57.9978 4.32096 57.2333 2.96179 55.8741C1.60261 54.5149 0.838087 52.6721 0.835938 50.75V31.4163C0.838087 29.4941 1.60261 27.6513 2.96179 26.2921C4.32096 24.9329 6.16377 24.1684 8.08593 24.1663V16.7713C8.08593 7.52375 15.6097 0 24.8584 0H25.146C34.3947 0 41.9185 7.52375 41.9196 16.7713V24.1663C43.8418 24.1684 45.6846 24.9329 47.0438 26.2921C48.403 27.6513 49.1675 29.4941 49.1696 31.4163V50.75C49.1675 52.6721 48.403 54.5149 47.0438 55.8741C45.6846 57.2333 43.8418 57.9978 41.9196 58ZM24.8584 4.83256C18.273 4.83256 12.9185 10.1883 12.9185 16.7713V24.1663H37.0859V16.7713C37.0859 10.1871 31.7302 4.83256 25.146 4.83256H24.8584ZM8.08477 29C6.75193 29 5.66849 30.0846 5.66849 31.4163L5.66965 50.75C5.67027 51.3906 5.92504 52.0048 6.37804 52.4578C6.83105 52.9109 7.44528 53.1656 8.08593 53.1662H41.9185C42.5591 53.1656 43.1734 52.9109 43.6264 52.4578C44.0794 52.0048 44.3341 51.3906 44.3348 50.75V31.4163C44.3348 30.0846 43.2525 29 41.9185 29H8.08477ZM17.7527 33.8337H32.2527V48.3337H17.7527V33.8337ZM22.5853 43.4999H27.419V38.6662H22.5853V43.4999Z" fill="#007B42" />
                      </svg>
                    </div>
                    <div className='tab_lab'>
                      Improved Security
                    </div>
                    <div className='webdesign-content-sm-bx-overlay'>
                      <div className='testimonials-bottom-box-text'>
                        Security features like DDoS protection are frequently included in CDNs, which assist defend your website from harmful attacks.
                      </div>
                    </div>
                  </div>
                  <div className='webdesign-content-sm-bx'>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="40" viewBox="0 0 60 40" fill="none">
                        <path d="M54.98 14H41.34V5.02C41.3347 3.68678 40.8014 2.40997 39.8568 1.4691C38.9122 0.528241 37.6332 -1.04971e-05 36.3 1.56447e-10H23.7C22.3668 -1.04971e-05 21.0878 0.528241 20.1432 1.4691C19.1986 2.40997 18.6653 3.68678 18.66 5.02V22H5.02C3.69023 22.0053 2.41644 22.5359 1.47614 23.4761C0.535849 24.4164 0.00526646 25.6902 0 27.02V35.4C0 36.62 0.484642 37.79 1.34731 38.6527C2.20998 39.5154 3.38 40 4.6 40H55.4C56.62 40 57.79 39.5154 58.6527 38.6527C59.5154 37.79 60 36.62 60 35.4V19.02C59.9947 17.6902 59.4641 16.4164 58.5239 15.4761C57.5836 14.5359 56.3098 14.0053 54.98 14ZM18.66 36H4.66C4.50246 35.995 4.35274 35.9302 4.24128 35.8187C4.12983 35.7073 4.065 35.5575 4.06 35.4V27.02C4.05955 26.7596 4.15874 26.5088 4.33723 26.3192C4.51573 26.1295 4.76001 26.0153 5.02 26H18.66V36ZM37.34 36H22.66V5.02C22.66 4.88435 22.687 4.75006 22.7395 4.62499C22.792 4.49991 22.8689 4.38657 22.9658 4.29159C23.0626 4.19661 23.1774 4.12189 23.3035 4.07183C23.4296 4.02176 23.5644 3.99734 23.7 4H36.3C36.4356 3.99734 36.5704 4.02176 36.6965 4.07183C36.8226 4.12189 36.9374 4.19661 37.0342 4.29159C37.1311 4.38657 37.208 4.49991 37.2605 4.62499C37.313 4.75006 37.34 4.88435 37.34 5.02V36ZM56 35.4C55.995 35.5575 55.9302 35.7073 55.8187 35.8187C55.7073 35.9302 55.5575 35.995 55.4 36H41.4V18H55.04C55.174 18 55.3066 18.0264 55.4303 18.0776C55.5541 18.1289 55.6665 18.204 55.7612 18.2988C55.856 18.3935 55.9311 18.5059 55.9824 18.6297C56.0336 18.7534 56.06 18.8861 56.06 19.02L56 35.4Z" fill="#007B42" />
                      </svg>
                    </div>
                    <div className='tab_lab'>
                      Improvements in SEO Performance
                    </div>
                    <div className='webdesign-content-sm-bx-overlay'>
                      <div className='testimonials-bottom-box-text'>
                        Quicker loading times have a beneficial effect on search engine rankings.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='webdesign-content-delivery-bx'>
                <div className='service-title'>
                  Our CDN Integration Process
                </div>
                <div className='webdesign-content-sm-bx-sec'>
                  <div className='webdesign-content-sm-bx'>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="49" height="58" viewBox="0 0 49 58" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.4935 28.3741L9.55037 25.2907C9.20355 24.8981 9.02231 24.3863 9.04468 23.8629C9.06706 23.3395 9.29131 22.8452 9.67037 22.4836C10.0494 22.1219 10.5538 21.9212 11.0777 21.9235C11.6016 21.9258 12.1042 22.131 12.48 22.4959L13.9584 24.0471L17.6434 20.184C18.0146 19.7965 18.5241 19.5719 19.0606 19.5592C19.597 19.5466 20.1166 19.747 20.5056 20.1166C20.8931 20.4877 21.1178 20.9973 21.1304 21.5337C21.143 22.0702 20.9426 22.5898 20.5731 22.9788L15.4205 28.3741C15.231 28.571 15.0037 28.7276 14.7522 28.8346C14.5008 28.9416 14.2303 28.9967 13.957 28.9967C13.6837 28.9967 13.4133 28.9416 13.1618 28.8346C12.9103 28.7276 12.683 28.571 12.4935 28.3741ZM12.4935 44.5602L9.55037 41.4767C9.20355 41.0841 9.02231 40.5724 9.04468 40.049C9.06706 39.5256 9.29131 39.0312 9.67037 38.6696C10.0494 38.308 10.5538 38.1073 11.0777 38.1096C11.6016 38.1119 12.1042 38.317 12.48 38.682L13.9584 40.2331L17.6434 36.37C18.0146 35.9826 18.5241 35.7579 19.0606 35.7453C19.597 35.7326 20.1166 35.933 20.5056 36.3026C20.8931 36.6738 21.1178 37.1834 21.1304 37.7198C21.143 38.2562 20.9426 38.7758 20.5731 39.1648L15.4205 44.5602C15.231 44.7571 15.0037 44.9137 14.7522 45.0207C14.5008 45.1276 14.2303 45.1828 13.957 45.1828C13.6837 45.1828 13.4133 45.1276 13.1618 45.0207C12.9103 44.9137 12.683 44.7571 12.4935 44.5602ZM39.4226 25.7097C39.0432 26.0892 38.5285 26.3023 37.9919 26.3023H27.2013C26.6646 26.3023 26.15 26.0892 25.7706 25.7097C25.3912 25.3303 25.178 24.8157 25.178 24.2791C25.178 23.7425 25.3912 23.2278 25.7706 22.8484C26.15 22.469 26.6646 22.2558 27.2013 22.2558H37.9919C38.5285 22.2558 39.0432 22.469 39.4226 22.8484C39.802 23.2278 40.0152 23.7425 40.0152 24.2791C40.0152 24.8157 39.802 25.3303 39.4226 25.7097ZM39.4226 41.8958C39.0432 42.2752 38.5285 42.4884 37.9919 42.4884H27.2013C26.6646 42.4884 26.15 42.2752 25.7706 41.8958C25.3912 41.5163 25.178 41.0017 25.178 40.4651C25.178 39.9285 25.3912 39.4139 25.7706 39.0345C26.15 38.655 26.6646 38.4419 27.2013 38.4419H37.9919C38.5285 38.4419 39.0432 38.655 39.4226 39.0345C39.802 39.4139 40.0152 39.9285 40.0152 40.4651C40.0152 41.0017 39.802 41.5163 39.4226 41.8958ZM37.2692 8.09302H40.6891C42.5505 8.09302 44.0612 9.60372 44.0612 11.4651V50.5814C44.0612 52.4428 42.5505 53.9535 40.6891 53.9535H8.31704C6.45565 53.9535 4.94495 52.4428 4.94495 50.5814V11.4651C4.94495 9.60372 6.45565 8.09302 8.31704 8.09302H11.738C11.8825 9.09539 12.347 10.0313 13.0735 10.7556C13.9584 11.6432 15.1588 12.1395 16.4106 12.1395H32.5966C33.8483 12.1395 35.0488 11.6432 35.9336 10.7556C36.6602 10.0313 37.1246 9.09539 37.2692 8.09302ZM36.4785 3.22912L36.7533 4.04651H40.6891C42.6567 4.04651 44.5436 4.82811 45.9349 6.21937C47.3261 7.61063 48.1077 9.49758 48.1077 11.4651V50.5814C48.1077 52.5489 47.3261 54.4359 45.9349 55.8271C44.5436 57.2184 42.6567 58 40.6891 58H8.31704C6.34951 58 4.46255 57.2184 3.0713 55.8271C1.68004 54.4359 0.898438 52.5489 0.898438 50.5814V11.4651C0.898438 9.49758 1.68004 7.61063 3.0713 6.21937C4.46255 4.82811 6.34951 4.04651 8.31704 4.04651H12.2538L12.5286 3.22912C12.8417 2.28901 13.4427 1.47125 14.2464 0.891703C15.0502 0.312152 16.0159 0.000186055 17.0067 0H32.0004C32.9913 0.000186055 33.957 0.312152 34.7607 0.891703C35.5644 1.47125 36.1654 2.28901 36.4785 3.22912ZM32.9608 5.46279L32.6398 4.50781C32.5951 4.37358 32.5093 4.2568 32.3945 4.17401C32.2798 4.09122 32.1419 4.04662 32.0004 4.04651H17.0067C16.8653 4.04662 16.7274 4.09122 16.6126 4.17401C16.4979 4.2568 16.4121 4.37358 16.3674 4.50781L16.0464 5.46279C15.8413 6.08326 15.7361 6.7307 15.7361 7.38353V7.4186C15.7361 7.59747 15.8072 7.76901 15.9337 7.89549C16.0601 8.02197 16.2317 8.09302 16.4106 8.09302H32.5966C32.7755 8.09302 32.947 8.02197 33.0735 7.89549C33.2 7.76901 33.271 7.59747 33.271 7.4186V7.38353C33.271 6.7307 33.1658 6.08326 32.9608 5.46279Z" fill="#007B42" />
                      </svg>
                    </div>
                    <div className='tab_lab'>
                      Evaluation
                    </div>
                    <div className='webdesign-content-sm-bx-overlay'>
                      <div className='testimonials-bottom-box-text'>
                        We carry out a comprehensive examination of the functionality of your website in order to pinpoint areas that could want improvement.
                      </div>
                    </div>
                  </div>
                  <div className='webdesign-content-sm-bx'>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="65" height="58" viewBox="0 0 65 58" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M58.6581 39.8149C57.656 38.8128 56.2969 38.2498 54.8796 38.2498C54.1778 38.2498 53.4829 38.3881 52.8345 38.6567C52.1862 38.9253 51.5971 39.3189 51.1009 39.8152C50.6046 40.3115 50.2111 40.9007 49.9426 41.5491C49.6741 42.1975 49.5359 42.8924 49.536 43.5942C49.536 46.3697 50.8385 49.0115 52.4012 51.0393C53.1705 52.0384 53.959 52.8293 54.585 53.3512C54.6827 53.4328 54.7823 53.5121 54.8836 53.589C54.9733 53.521 55.0726 53.4425 55.1798 53.3544C55.8043 52.8381 56.5912 52.0536 57.3597 51.0593C58.9184 49.0443 60.2232 46.4025 60.2232 43.5934C60.2232 42.1762 59.6603 40.8171 58.6581 39.8149ZM54.8796 34.087C60.1296 34.087 64.3861 38.3435 64.3861 43.5934H64.3853C64.3853 47.6562 62.5304 51.1762 60.6523 53.6058C59.7029 54.8338 58.703 55.8425 57.832 56.563C57.4341 56.8978 57.0101 57.2003 56.564 57.4676C56.363 57.5853 56.1373 57.7022 55.8987 57.795C55.6914 57.8751 55.3231 58 54.8788 58C54.4305 58 54.0591 57.8727 53.8517 57.7918C53.6124 57.6974 53.3866 57.5797 53.1857 57.4612C52.7822 57.2235 52.3515 56.9088 51.9192 56.5494C51.0498 55.8241 50.0508 54.8106 49.1029 53.5794C47.2297 51.1482 45.3724 47.6282 45.3724 43.5934C45.3724 38.3443 49.6297 34.087 54.8796 34.087ZM2.1569 1.54752C3.14776 0.55666 4.49165 0 5.89294 0H14.2106C15.6119 0 16.9557 0.55666 17.9466 1.54752C18.9375 2.53838 19.4941 3.88228 19.4941 5.28357V17.1076C19.4941 18.5088 18.9375 19.8527 17.9466 20.8436C16.9557 21.8345 15.6119 22.3911 14.2106 22.3911H5.89294C4.49165 22.3911 3.14776 21.8345 2.1569 20.8436C1.16604 19.8527 0.609375 18.5088 0.609375 17.1076V5.28357C0.609375 3.88228 1.16604 2.53838 2.1569 1.54752ZM5.10045 4.49108C4.89027 4.70126 4.77219 4.98633 4.77219 5.28357V9.11416H15.3313V5.28357C15.3313 4.98633 15.2132 4.70126 15.0031 4.49108C14.7929 4.28089 14.5078 4.16281 14.2106 4.16281H5.89294C5.5957 4.16281 5.31063 4.28089 5.10045 4.49108ZM4.77219 17.1084V13.277H15.3313V17.1084C15.3313 17.4056 15.2132 17.6907 15.0031 17.9009C14.7929 18.111 14.5078 18.2291 14.2106 18.2291H5.89294C5.5957 18.2291 5.31063 18.111 5.10045 17.9009C4.89027 17.6907 4.77219 17.4056 4.77219 17.1084ZM25.6054 10.4062L25.6607 10.3854C25.3132 11.0611 24.993 11.78 24.7 12.5341C23.2735 16.2022 22.3641 20.9982 22.1727 26.2561H11.2061C10.6544 26.2566 10.1254 26.476 9.73537 26.8663C9.34538 27.2566 9.12631 27.7858 9.12631 28.3376C9.12631 41.2415 19.5862 51.7021 32.4901 51.7021C35.8284 51.7021 38.3605 51.0753 40.5259 50.0322C40.9657 49.82 41.3169 49.4599 41.5181 49.0149C41.7192 48.5699 41.7575 48.0684 41.6262 47.598C41.4949 47.1277 41.2025 46.7185 40.7999 46.442C40.3974 46.1655 39.9105 46.0393 39.4244 46.0855C39.7326 45.4691 40.0176 44.8191 40.2818 44.1402C41.7075 40.4721 42.6177 35.6769 42.8083 30.419H53.8125C53.9454 30.4204 54.078 30.4051 54.2072 30.3733C54.6734 30.274 55.0914 30.0176 55.3912 29.647C55.6911 29.2765 55.8547 28.8142 55.8547 28.3376C55.8547 15.4336 45.3948 4.97297 32.4901 4.97297C29.6262 4.96987 26.7862 5.49444 24.1124 6.52041C23.5993 6.71998 23.1862 7.1147 22.9635 7.61817C22.7408 8.12164 22.7266 8.69285 22.924 9.20676C23.1215 9.72067 23.5145 10.1354 24.017 10.3602C24.5196 10.585 25.0907 10.6016 25.6054 10.4062ZM32.4901 9.13578H32.4861C32.1234 9.13738 31.5519 9.3199 30.8026 10.1357C30.0484 10.9554 29.2735 12.2571 28.5803 14.0423C27.369 17.1572 26.5277 21.4225 26.3387 26.2561H38.643C38.4533 21.4233 37.6128 17.1572 36.4015 14.0423C35.7083 12.2571 34.9333 10.9554 34.1792 10.1357C33.4275 9.3183 32.8535 9.13578 32.4901 9.13578ZM13.4004 30.419H22.1727C22.3641 35.6769 23.2735 40.4721 24.7 44.141C24.9826 44.8732 25.3032 45.5902 25.6607 46.2889C19.0482 43.772 14.1849 37.7063 13.4004 30.419ZM38.643 30.419H26.3387C26.5285 35.2518 27.369 39.5179 28.5803 42.632C29.2735 44.4172 30.0484 45.7189 30.8026 46.5386C31.5551 47.3584 32.1202 47.5313 32.4837 47.5313C32.8471 47.5313 33.4267 47.3584 34.1792 46.5394C34.9325 45.7189 35.7075 44.4172 36.4015 42.6328C37.6128 39.5171 38.4533 35.2518 38.643 30.419ZM40.281 12.5341C41.7075 16.2022 42.6177 20.9982 42.8083 26.2561H51.5806C50.7953 18.9688 45.9328 12.9039 39.3203 10.3862C39.6685 11.0611 39.9888 11.7808 40.281 12.5341Z" fill="#007B42" />
                      </svg>
                    </div>
                    <div className='tab_lab'>
                      CDN Selection
                    </div>
                    <div className='webdesign-content-sm-bx-overlay'>
                      <div className='testimonials-bottom-box-text'>
                        We choose an appropriate CDN provider that fits your performance and financial needs based on the requirements of your website.
                      </div>
                    </div>
                  </div>
                  <div className='webdesign-content-sm-bx'>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="61" height="60" viewBox="0 0 61 60" fill="none">
                        <path d="M50.299 10.201C45.2321 5.13402 38.2321 2 30.5 2C25.7257 2 21.2322 3.19796 17.2988 5.30505M43.7012 54.695C39.7678 56.802 35.2743 58 30.5 58C22.768 58 15.7679 54.866 10.701 49.799M50.2991 49.7989C55.3661 44.7319 58.5 37.732 58.5 30C58.5 25.2258 57.3022 20.7327 55.1953 16.7993M10.701 10.201C5.63402 15.2679 2.5 22.2679 2.5 30C2.5 34.7742 3.69784 39.2673 5.8047 43.2007M42.7844 27.309L44.3168 26.0475L40.8313 20.0104L38.9726 20.7068C36.9184 21.4764 34.6724 20.1797 34.3117 18.0158L33.9855 16.0581H27.0145L26.6883 18.0159C26.3277 20.1797 24.0817 21.4764 22.0274 20.7069L20.1686 20.0105L16.6831 26.0476L18.2156 27.3091C19.9091 28.7034 19.9091 31.2968 18.2156 32.691L16.6831 33.9525L20.1686 39.9896L22.0274 39.2932C24.0816 38.5236 26.3275 39.8203 26.6883 41.9842L27.0145 43.9419H33.9855L34.3118 41.9841C34.6725 39.8202 36.9184 38.5235 38.9727 39.2931L40.8314 39.9895L44.3169 33.9524L42.7846 32.6909C41.0909 31.2967 41.0909 28.7033 42.7844 27.309ZM30.5 34.6473C27.9333 34.6473 25.8527 32.5666 25.8527 30C25.8527 27.4333 27.9333 25.3527 30.5 25.3527C33.0667 25.3527 35.1473 27.4333 35.1473 30C35.1473 32.5666 33.0667 34.6473 30.5 34.6473Z" stroke="#007B42" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M49.8788 5.26953L50.3102 10.2004L45.3793 10.6318M5.78125 10.6318L10.7122 10.2004L11.1437 15.1313M11.1435 54.7294L10.7122 49.7985L15.6431 49.367M55.2411 49.367L50.3102 49.7985L49.8787 44.8676" stroke="#007B42" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className='tab_lab'>
                      Configuration and Integration
                    </div>
                    <div className='webdesign-content-sm-bx-overlay'>
                      <div className='testimonials-bottom-box-text'>
                        We guarantee a seamless transition by having our skilled team configure and integrate the CDN into your website's architecture.
                      </div>
                    </div>
                  </div>
                  <div className='webdesign-content-sm-bx'>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="61" height="60" viewBox="0 0 61 60" fill="none">
                        <path d="M30.4957 34.7451C27.8789 34.7451 25.75 32.6162 25.75 29.9994C25.75 27.3826 27.8789 25.2536 30.4957 25.2536C33.1126 25.2536 35.2415 27.3826 35.2415 29.9994C35.2415 32.6162 33.1126 34.7451 30.4957 34.7451Z" fill="#007B42" />
                        <path d="M51.2661 30C51.2661 28.7762 51.1593 27.5773 50.9562 26.4115L58.3114 22.1649L51.1927 9.83514L43.8344 14.0834C42.0048 12.5494 39.9077 11.3242 37.622 10.4901V2H23.3847V10.4901C21.099 11.3242 19.0019 12.5494 17.1723 14.0834L9.81396 9.83514L2.69531 22.1649L10.0505 26.4115C9.84412 27.5965 9.74044 28.7971 9.74063 30C9.74063 31.2238 9.84741 32.4227 10.0505 33.5885L2.69531 37.8351L9.81396 50.1649L17.1723 45.9166C19.0019 47.4506 21.099 48.6758 23.3847 49.5099V58H37.622V49.5099C39.9077 48.6758 42.0048 47.4506 43.8344 45.9166L51.1927 50.1649L58.3114 37.8351L50.9562 33.5885C51.1626 32.4035 51.2662 31.2029 51.2661 30Z" stroke="#007B42" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M40.2611 24.3644L30.5 30" stroke="#007B42" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M30.4977 18.7292C24.2828 18.7292 19.2266 23.7854 19.2266 30.0003C19.2266 36.2152 24.2828 41.2715 30.4977 41.2715C34.8452 41.2715 38.6252 38.7971 40.5046 35.1828" stroke="#007B42" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className='tab_lab'>
                      Monitoring and Optimization
                    </div>
                    <div className='webdesign-content-sm-bx-overlay'>
                      <div className='testimonials-bottom-box-text'>
                        We keep a close eye on CDN performance and make the required modifications to improve content delivery for the greatest outcomes.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <FAQs faqsArray={faqsArray} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default WebDesignServices