import { useState } from 'react';
import Navbar from '../../../Navbar/Navbar.jsx';
import Headline from '../../../Headline/Headline';
import FAQs from '../../../Home/FAQs/FAQs.jsx';
import Footer from '../../../Home/Footer/Footer.jsx';
import Banner from '../../../Banner/Banner.jsx';
import WeAre from '../../../Home/WeAre/WeAre.jsx';
import './UiUxDesignServices.css'


const UiUxDesignServices = () => {

  const faqsArray = [
    {
      id: 1,
      question: 'Q. What is UI/UX design, and why is it crucial for mobile app development?',
      answer: `UI (User Interface) design focuses on the visual elements of an app, while UX (User Experience) design is concerned with the overall interaction and usability. A strong UI/UX design is crucial for creating an app that is visually appealing, easy to use, and provides a positive user experience.`
    },
    {
      id: 2,
      question: 'Q. How does your UI/UX design process work for mobile apps?',
      answer: `Our UI/UX design process begins with in-depth research, understanding your target audience, and creating wireframes and prototypes. We emphasize user-centric design, ensuring that the app not only looks great but also offers a seamless and intuitive user experience.`
    },
    {
      id: 3,
      question: 'Q. How do you ensure the responsiveness of UI/UX designs across different devices and screen sizes?',
      answer: `We design with responsiveness in mind, ensuring that UI/UX elements adapt seamlessly to different screen sizes and resolutions. Our designs are thoroughly tested to guarantee a consistent and visually appealing experience across various devices.`
    },
    {
      id: 4,
      question: 'Q. What tools and technologies do you use for UI/UX design services?',
      answer: `Our designers are proficient in using industry-standard design tools such as Adobe XD, Sketch, Figma, and more. These tools enable us to create high-fidelity designs, interactive prototypes, and collaborate efficiently with clients throughout the design process.`
    },
  ]

  const bannerObject = {
    boxSide: 'left',
    backgroundBanner: `/frame/uiuxDesign-page-banner.webp`,
    bannerTitle: `Introduction`,
    bannerTitleSpan: ``,
    bannerContent: `I Introduction: User-centred design is a key component in the ever-changing field of mobile app development. Our methodology is centred on placing your users at the centre of the design process. We understand that a well-designed interface should be not only visually beautiful but also responsive, functional, and customised to your target audience's specific requirements and preferences.\n \n Not only is user-centred design a stage in our approach, but it's the fundamental idea that underpins it all. By concentrating on the end-users and how they engage with your mobile application, we make sure that the finished product is not only a marvel of technology but also a pleasure to use.`,
  };

  const weAreContentArray = {
    weAreImage: `/image/uiuxdesign-one-section-image.webp`,
    weAreTitle: `End-to-end UI/UX design services`,
    weAreContent: `HKAPPS provides an extensive selection of UI/UX design services to turn standard mobile apps, websites, and monitors into enjoyable experiences for users and successful results.\n \n Welcome to our UI/UX Design Services, where cutting-edge technology and user-focused design join to create unmatched mobile app experiences. At HKAPPS , we are aware that developing a successful mobile app requires more than just functionality.    `,
  }


  return (
    <>
      <Navbar activeNav="Services" />
      <Headline headlineText1="Elevate Your User Experience with Our UI/UX Design Services" headlineText2="Elevate Your User Experience with Our UI/UX Design Services" />

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
                <img src="/image/design-approach-image.webp" className='design-approach-image' alt="" />
              </div>
              <div className='design-approach-bx'>
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <rect width="80" height="80" rx="40" fill="#E4F7F3" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M38.8215 28.6785C39.134 28.9911 39.558 29.1667 40 29.1667C40.442 29.1667 40.8659 28.9911 41.1785 28.6785C41.4911 28.366 41.6667 27.942 41.6667 27.5V26.3506C47.9177 27.1105 52.8883 32.0819 53.647 38.3333H52.5C52.058 38.3333 51.634 38.5089 51.3215 38.8215C51.0089 39.134 50.8333 39.558 50.8333 40C50.8333 40.442 51.0089 40.8659 51.3215 41.1785C51.634 41.4911 52.058 41.6667 52.5 41.6667H53.6469C52.8881 47.9179 47.9176 52.8892 41.6667 53.6491V52.5C41.6667 52.058 41.4911 51.634 41.1785 51.3215C40.8659 51.0089 40.442 50.8333 40 50.8333C39.558 50.8333 39.134 51.0089 38.8215 51.3215C38.5089 51.634 38.3333 52.058 38.3333 52.5V53.6497C32.08 52.8919 27.1069 47.9197 26.3479 41.6667H27.5C27.942 41.6667 28.366 41.4911 28.6785 41.1785C28.9911 40.8659 29.1667 40.442 29.1667 40C29.1667 39.558 28.9911 39.134 28.6785 38.8215C28.366 38.5089 27.942 38.3333 27.5 38.3333H26.3478C27.1067 32.0802 32.0798 27.1077 38.3333 26.35V27.5C38.3333 27.942 38.5089 28.366 38.8215 28.6785ZM41.6667 22.9974V21.6667C41.6667 21.2246 41.4911 20.8007 41.1785 20.4882C40.8659 20.1756 40.442 20 40 20C39.558 20 39.134 20.1756 38.8215 20.4882C38.5089 20.8007 38.3333 21.2246 38.3333 21.6667V22.9969C30.2397 23.7828 23.7817 30.24 22.9947 38.3333H21.6667C21.2246 38.3333 20.8007 38.5089 20.4882 38.8215C20.1756 39.134 20 39.558 20 40C20 40.442 20.1756 40.8659 20.4882 41.1785C20.8007 41.4911 21.2246 41.6667 21.6667 41.6667H22.9947C23.7819 49.7598 30.2398 56.2169 38.3333 57.0028V58.3333C38.3333 58.7754 38.5089 59.1993 38.8215 59.5118C39.134 59.8244 39.558 60 40 60C40.442 60 40.8659 59.8244 41.1785 59.5118C41.4911 59.1993 41.6667 58.7754 41.6667 58.3333V57.0023C49.7577 56.2141 56.213 49.7581 57.0001 41.6667H58.3333C58.7754 41.6667 59.1993 41.4911 59.5118 41.1785C59.8244 40.8659 60 40.442 60 40C60 39.558 59.8244 39.134 59.5118 38.8215C59.1993 38.5089 58.7754 38.3333 58.3333 38.3333H57.0001C56.2132 30.2418 49.7578 23.7856 41.6667 22.9974ZM35 40C35 42.7567 37.2433 45 40 45C42.7567 45 45 42.7567 45 40C45 37.2433 42.7567 35 40 35C37.2433 35 35 37.2433 35 40ZM38.3333 40C38.3333 39.0817 39.0817 38.3333 40 38.3333C40.9183 38.3333 41.6667 39.0817 41.6667 40C41.6667 40.9183 40.9183 41.6667 40 41.6667C39.0817 41.6667 38.3333 40.9183 38.3333 40Z" fill="#007B42" />
                </svg>
                <div className='java-second-section-text'>
                  <span className='java-second-section-text-span'> Client-Centric Design </span>
                  <br /><br />
                  At <span className='java-second-section-text-span'> HKAPPS</span> we think that having a thorough grasp of our clients' objectives and desires is the first step towards creating outstanding UI/UX design. We strive to create enduring relationships by matching your unique goals with our design approaches, because we are dedicated to doing more than just providing a product. We make sure that our designs not only match but beyond your expectations through cooperative talks and a detailed investigation of your ideas.

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
                  Our design philosophy is based on a strong dedication to the end-user.  HKAPPS acknowledges that an effective digital experience is one that is not just useful but also pleasurable, intuitive, and significant to the users. Every choice we make is informed by our user-centered methodology, which guarantees that the end product resonates with your audience and elicits a positive response.
                </div>
              </div>
            </div>

            <div className='we-are-text-1'>
              Core Services
            </div>

            <div className='design-core-service-sec'>
              <div className='design-core-service-main-bx'>
                <div className='design-core-service-front-bx'>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                      <rect width="100" height="100" rx="50" fill="#E4F7F3" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M61.4847 54.3962L68.5942 61.5091C69.5065 62.4536 70.0112 63.7186 69.9998 65.0317C69.9884 66.3447 69.4617 67.6008 68.5332 68.5293C67.6047 69.4578 66.3487 69.9844 65.0356 69.9958C63.7226 70.0073 62.4576 69.5025 61.5131 68.5903L54.3985 61.4774C51.8563 62.8077 49.0137 63.4593 46.1459 63.3692C43.2781 63.279 40.4821 62.4502 38.0284 60.9628C35.5748 59.4755 33.5466 57.38 32.1401 54.8791C30.7337 52.3782 29.9965 49.5566 30 46.6874C29.9999 44.1584 30.5746 41.6624 31.6807 39.3881C32.7868 37.1138 34.3955 35.1207 36.385 33.5594C38.3746 31.9981 40.693 30.9095 43.1651 30.3758C45.6371 29.8421 48.1982 29.8773 50.6547 30.4787C53.1111 31.0802 55.3987 32.2321 57.3446 33.8475C59.2905 35.4629 60.8437 37.4995 61.8869 39.8034C62.9301 42.1072 63.436 44.618 63.3663 47.1461C63.2966 49.6742 62.6532 52.1533 61.4847 54.3962ZM37.2484 56.1304C39.7528 58.6348 43.1495 60.0418 46.6913 60.0418C50.2331 60.0418 53.6299 58.6348 56.1343 56.1304C58.6388 53.6259 60.0457 50.2292 60.0457 46.6874C60.0457 43.1456 58.6388 39.7488 56.1343 37.2444C53.6299 34.74 50.2331 33.333 46.6913 33.333C43.1495 33.333 39.7528 34.74 37.2484 37.2444C34.7439 39.7488 33.3369 43.1456 33.3369 46.6874C33.3369 50.2292 34.7439 53.6259 37.2484 56.1304ZM65.0545 66.7178C65.4967 66.7178 65.9209 66.5423 66.2338 66.2299C66.547 65.9171 66.7248 65.4927 66.7251 65.05C66.7254 64.6074 66.5499 64.1827 66.2372 63.8695L59.6101 57.2424C59.2578 57.6747 58.8839 58.092 58.49 58.486C58.096 58.8799 57.6803 59.2522 57.248 59.6044L63.8751 66.2299C64.1881 66.5423 64.6122 66.7178 65.0545 66.7178ZM51.167 35.8873C52.5854 36.4747 53.8732 37.3376 54.9558 38.426C56.0444 39.5085 56.9074 40.7963 57.4948 42.2146C58.0822 43.633 58.3823 45.1539 58.3778 46.6891C58.3778 47.1318 58.202 47.5564 57.8889 47.8694C57.5758 48.1825 57.1513 48.3584 56.7085 48.3584C56.2658 48.3584 55.8412 48.1825 55.5282 47.8694C55.2151 47.5564 55.0392 47.1318 55.0392 46.6891C55.0392 44.4754 54.1599 42.3525 52.5946 40.7872C51.0293 39.2219 48.9064 38.3426 46.6927 38.3426C46.25 38.3426 45.8254 38.1667 45.5124 37.8536C45.1993 37.5406 45.0234 37.116 45.0234 36.6733C45.0234 36.2305 45.1993 35.8059 45.5124 35.4929C45.8254 35.1798 46.25 35.004 46.6927 35.004C48.2279 34.9996 49.7487 35.2999 51.167 35.8873Z" fill="#007B42" />
                    </svg>
                  </div>
                  <div className='content-title'>
                    User Research and Analysis
                  </div>
                  <div className='java-second-section-text'>
                    The foundation of our design approach is an understanding of your users. We use an extensive range of techniques to probe deeply into the thoughts and actions of your intended audience.
                  </div>
                </div>
                <div className='design-core-service-behind-bx'></div>
              </div>
              <div className='design-core-service-main-bx'>
                <div className='design-core-service-front-bx'>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                      <rect width="100" height="100" rx="50" fill="#E4F7F3" />
                      <path d="M69.6429 44.6429C68.5276 44.6468 67.4415 44.9992 66.5364 45.6508C65.6312 46.3023 64.9524 47.2205 64.5946 48.2768C64.4911 48.2571 64.3964 48.2143 64.2857 48.2143H62.5V44.6429C62.5 42.6732 60.8982 41.0714 58.9286 41.0714H51.7857V35.7143C51.7857 35.6036 51.7429 35.5089 51.7232 35.4054C52.7795 35.0476 53.6977 34.3688 54.3492 33.4636C55.0008 32.5585 55.3532 31.4724 55.3571 30.3571C55.3571 27.4036 52.9536 25 50 25C47.0464 25 44.6429 27.4036 44.6429 30.3571C44.6429 32.7054 46.1714 34.6821 48.2768 35.4054C48.2571 35.5089 48.2143 35.6036 48.2143 35.7143V41.0714H41.0714C39.1018 41.0714 37.5 42.6732 37.5 44.6429V48.2143H35.7143C35.6036 48.2143 35.5089 48.2571 35.4054 48.2768C35.0476 47.2205 34.3688 46.3023 33.4636 45.6508C32.5585 44.9992 31.4724 44.6468 30.3571 44.6429C27.4036 44.6429 25 47.0464 25 50C25 52.9536 27.4036 55.3571 30.3571 55.3571C31.4724 55.3532 32.5585 55.0008 33.4636 54.3492C34.3688 53.6977 35.0476 52.7795 35.4054 51.7232C35.5089 51.7429 35.6036 51.7857 35.7143 51.7857H37.5V53.5714C37.0264 53.5714 36.5722 53.7596 36.2373 54.0944C35.9024 54.4293 35.7143 54.8835 35.7143 55.3571C35.7143 57.3268 37.3089 58.9286 39.2679 58.9286H48.2143V64.2857C48.2143 64.3964 48.2571 64.4911 48.2768 64.5946C47.2205 64.9524 46.3023 65.6312 45.6508 66.5364C44.9992 67.4415 44.6468 68.5276 44.6429 69.6429C44.6429 72.5964 47.0464 75 50 75C52.9536 75 55.3571 72.5964 55.3571 69.6429C55.3532 68.5276 55.0008 67.4415 54.3492 66.5364C53.6977 65.6312 52.7795 64.9524 51.7232 64.5946C51.7429 64.4911 51.7857 64.3964 51.7857 64.2857V58.9286H60.7143C62.6839 58.9286 64.2857 57.3268 64.2857 55.3571C64.2857 54.8835 64.0976 54.4293 63.7627 54.0944C63.4278 53.7596 62.9736 53.5714 62.5 53.5714V51.7857H64.2857C64.3964 51.7857 64.4911 51.7429 64.5946 51.7232C64.9524 52.7795 65.6312 53.6977 66.5364 54.3492C67.4415 55.0008 68.5276 55.3532 69.6429 55.3571C72.5964 55.3571 75 52.9536 75 50C75 47.0464 72.5964 44.6429 69.6429 44.6429ZM50 28.5714C50.3537 28.5711 50.6995 28.6757 50.9938 28.8719C51.288 29.0682 51.5174 29.3474 51.6529 29.6741C51.7884 30.0008 51.8239 30.3603 51.755 30.7072C51.6861 31.0541 51.5158 31.3728 51.2657 31.6229C51.0156 31.873 50.697 32.0433 50.3501 32.1122C50.0032 32.1811 49.6436 32.1455 49.3169 32.01C48.9902 31.8745 48.7111 31.6451 48.5148 31.3509C48.3185 31.0567 48.2139 30.7108 48.2143 30.3571C48.2143 29.3714 49.0161 28.5714 50 28.5714ZM30.3571 51.7857C29.8974 51.7651 29.4632 51.568 29.1451 51.2354C28.827 50.9028 28.6495 50.4602 28.6495 50C28.6495 49.5398 28.827 49.0972 29.1451 48.7646C29.4632 48.432 29.8974 48.2349 30.3571 48.2143C30.8169 48.2349 31.2511 48.432 31.5691 48.7646C31.8872 49.0972 32.0648 49.5398 32.0648 50C32.0648 50.4602 31.8872 50.9028 31.5691 51.2354C31.2511 51.568 30.8169 51.7651 30.3571 51.7857ZM50 71.4286C49.5402 71.408 49.1061 71.2109 48.788 70.8782C48.4699 70.5456 48.2924 70.1031 48.2924 69.6429C48.2924 69.1826 48.4699 68.7401 48.788 68.4075C49.1061 68.0748 49.5402 67.8777 50 67.8571C50.4598 67.8777 50.8939 68.0748 51.212 68.4075C51.5301 68.7401 51.7076 69.1826 51.7076 69.6429C51.7076 70.1031 51.5301 70.5456 51.212 70.8782C50.8939 71.2109 50.4598 71.408 50 71.4286ZM41.0714 53.5714V44.6429H58.9286V53.5714H41.0714ZM69.6429 51.7857C69.1831 51.7651 68.7489 51.568 68.4308 51.2354C68.1128 50.9028 67.9352 50.4602 67.9352 50C67.9352 49.5398 68.1128 49.0972 68.4308 48.7646C68.7489 48.432 69.1831 48.2349 69.6429 48.2143C70.1026 48.2349 70.5368 48.432 70.8549 48.7646C71.173 49.0972 71.3505 49.5398 71.3505 50C71.3505 50.4602 71.173 50.9028 70.8549 51.2354C70.5368 51.568 70.1026 51.7651 69.6429 51.7857Z" fill="#007B42" />
                    </svg>
                  </div>
                  <div className='content-title'>
                    Information Architecture
                  </div>
                  <div className='java-second-section-text'>
                    Careful planning and organisation are necessary to create a digital world that people can easily explore. Our information architecture services are intended to give your online presence an understandable and structured framework.
                  </div>
                </div>
                <div className='design-core-service-behind-bx'></div>
              </div>
              <div className='design-core-service-main-bx'>
                <div className='design-core-service-front-bx'>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                      <rect width="100" height="100" rx="50" fill="#E4F7F3" />
                      <path d="M60.9669 50.0001H65.9908C67.6509 50.0001 68.9967 51.3459 68.9967 53.006V65.9946C68.9967 67.6547 67.6509 69.0005 65.9908 69.0005H60.9669C59.3067 69.0005 57.9609 67.6547 57.9609 65.9946V53.006C57.9609 51.3459 59.3067 50.0001 60.9669 50.0001Z" stroke="#007B42" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M34.0059 31.0001H39.0298C40.69 31.0001 42.0358 32.3459 42.0358 34.006V46.9946C42.0358 48.6547 40.69 50.0005 39.0298 50.0005H34.0059C32.3458 50.0005 31 48.6547 31 46.9946V34.006C31 32.3459 32.3458 31.0001 34.0059 31.0001Z" stroke="#007B42" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M36.5078 56.3336V62.2593C36.5078 65.9824 39.526 69.0005 43.2491 69.0005C46.9722 69.0005 49.9904 65.9824 49.9904 62.2593V37.741C49.9904 34.0179 53.0085 30.9997 56.7316 30.9997C60.4547 30.9997 63.4729 34.0179 63.4729 37.741V43.6667" stroke="#007B42" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  <div className='content-title'>
                    Wireframing and Prototyping
                  </div>
                  <div className='java-second-section-text'>
                    We bring your ideas to life using wireframing and prototyping, giving you a concrete representation of the user experience before a single line of code is typed.
                  </div>
                </div>
                <div className='design-core-service-behind-bx'></div>
              </div>
            </div>

            <div className='we-are-text-1'>
              Design Expertise
            </div>

            <div className='design-expertise-sec'>
              <div className='design-expertise-bx'>
                <div className='design-expertise-sm-bx-corner design-expertise-sm-bx-corner-1'>
                  <div className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 81 81" fill="none">
                      <rect x="0.0625" y="0.581055" width="80" height="80" rx="40" fill="#007B42" />
                      <path d="M37.8161 26.4451C35.4083 27.0926 33.2815 28.4287 31.6709 30.2584C28.5217 33.8359 26.4145 38.9552 25.442 41.6754C25.117 42.5848 25.7911 43.5413 26.7568 43.5413H28.5299V47.1957C28.5299 49.2842 30.2229 50.9772 32.3114 50.9772H33.5507C34.9547 50.9772 36.0929 52.1154 36.0929 53.5194V55.998H50.2656V52.0685C50.2656 49.3779 50.5542 47.848 51.1284 46.3377" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M50.2652 31.9743L48.0809 33.1733L41.5156 29.9103" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M40.8672 30.8588V37.0691C40.8672 37.9531 41.3604 38.7629 42.1451 39.1676L47.0131 41.6907C47.3459 41.8624 47.7149 41.9521 48.0894 41.9526C48.4638 41.9531 48.833 41.8643 49.1663 41.6935L54.0742 39.1662C54.862 38.7626 55.3576 37.9511 55.3576 37.0649V30.863C55.3578 30.4278 55.2375 30.001 55.0103 29.6298C54.783 29.2586 54.4576 28.9575 54.0699 28.7596L49.1621 26.2574C48.8299 26.088 48.4622 25.9999 48.0894 26.0004C47.7165 26.0009 47.349 26.0899 47.0173 26.2602L42.1494 28.7582C41.7632 28.9565 41.4391 29.2576 41.2129 29.6282C40.9867 29.9988 40.8671 30.4246 40.8672 30.8588Z" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M48.1719 33.1801V41.521" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className='design-expertise-sm-bx-content'>
                    <div className='mobile-app-title'>Visual Design</div>
                    <div className='mobileAppDevelopment-content-text-right'>
                      Here's where our design knowledge really comes into play—turning concepts into aesthetically beautiful interfaces. Our commitment lies in creating visually appealing and unforgettable designs that not only grab attention but also successfully convey your brand's personality.
                    </div>
                  </div>
                </div>
                <div className='design-expertise-sm-bx-corner design-expertise-sm-bx-middle-1'>
                  <div className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 81 81" fill="none">
                      <rect x="0.0625" y="0.243652" width="80" height="80" rx="40" fill="#007B42" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M27.2883 40.143C27.2739 36.7199 28.6199 33.4312 31.0302 31.0005C33.4405 28.5698 36.7177 27.1961 40.1409 27.1817C43.564 27.1672 46.8527 28.5132 49.2834 30.9236C51.7141 33.3339 53.0878 36.6111 53.1023 40.0342C53.1034 40.1716 53.1317 40.3075 53.1854 40.434C53.2391 40.5605 53.3172 40.6752 53.4152 40.7716C53.5132 40.8679 53.6292 40.944 53.7567 40.9955C53.8841 41.047 54.0204 41.0728 54.1578 41.0717C54.2953 41.0705 54.4311 41.0422 54.5576 40.9885C54.6841 40.9348 54.7988 40.8567 54.8952 40.7587C54.9915 40.6607 55.0676 40.5447 55.1191 40.4172C55.1706 40.2898 55.1965 40.1535 55.1953 40.0161C55.1255 31.7905 48.4376 25.1431 40.1953 25.1431C31.9111 25.1431 25.1953 31.8589 25.1953 40.143C25.1953 48.3854 31.8427 55.0733 40.0697 55.143C40.3473 55.1453 40.6143 55.0371 40.8122 54.8424C41.01 54.6477 41.1224 54.3824 41.1246 54.1049C41.1268 53.8273 41.0187 53.5603 40.824 53.3624C40.6293 53.1646 40.364 53.0522 40.0865 53.05C36.6822 53.0213 33.4272 51.6488 31.0301 49.2314C28.6331 46.814 27.2882 43.5474 27.2883 40.143ZM40.1953 34.2128C38.8182 34.2123 37.4839 34.6911 36.4212 35.567C35.3586 36.4429 34.6339 37.6613 34.3715 39.0131C34.1091 40.365 34.3254 41.766 34.9832 42.9758C35.641 44.1857 36.6994 45.1288 37.9767 45.6435C38.2341 45.7477 38.4395 45.9498 38.5479 46.2055C38.6562 46.4612 38.6585 46.7494 38.5544 47.0068C38.4502 47.2641 38.248 47.4696 37.9924 47.5779C37.7367 47.6863 37.4485 47.6886 37.1911 47.5844C35.466 46.8854 34.0375 45.6086 33.15 43.9724C32.2626 42.3362 31.9715 40.4425 32.3264 38.6153C32.6814 36.7881 33.6603 35.1411 35.0958 33.9562C36.5313 32.7713 38.334 32.1221 40.1953 32.1198C41.7945 32.1198 43.3573 32.5976 44.6832 33.4919C46.009 34.3861 47.0375 35.6561 47.6367 37.1389C47.6931 37.2671 47.7232 37.4054 47.7252 37.5454C47.7272 37.6855 47.701 37.8246 47.6483 37.9543C47.5955 38.0841 47.5172 38.202 47.4181 38.301C47.3189 38.3999 47.2009 38.478 47.071 38.5305C46.9412 38.583 46.8021 38.6089 46.662 38.6067C46.5219 38.6044 46.3837 38.5741 46.2556 38.5174C46.1275 38.4608 46.012 38.379 45.9161 38.2769C45.8202 38.1748 45.7457 38.0545 45.6971 37.9231C45.2542 36.8268 44.4938 35.8879 43.5134 35.2268C42.5331 34.5657 41.3777 34.2126 40.1953 34.2128ZM43.9209 53.0654L40.2748 42.13C40.186 41.8645 40.173 41.5794 40.2371 41.3069C40.3013 41.0343 40.4401 40.785 40.638 40.5869C40.836 40.3889 41.0852 40.2498 41.3577 40.1855C41.6302 40.1211 41.9153 40.134 42.1809 40.2226L53.1176 43.8686C54.492 44.3263 54.492 46.27 53.1176 46.7291L49.0795 48.0742C48.8575 48.1482 48.6559 48.2728 48.4905 48.4382C48.3251 48.6036 48.2004 48.8053 48.1264 49.0272L46.7799 53.0654C46.3223 54.4398 44.3799 54.4398 43.9195 53.0654H43.9209Z" fill="white" />
                    </svg>
                  </div>
                  <div className='design-expertise-sm-bx-content'>
                    <div className='mobile-app-title'>Interaction Design</div>
                    <div className='mobileAppDevelopment-content-text-right'>
                      Our interaction design strategy is centred on creating a user experience that is both intuitive and engaging. We create engaging user experiences by going beyond static interfaces and concentrating on making dynamic, responsive, and fun interactions.
                    </div>
                  </div>
                </div>
                <div className='design-expertise-sm-bx-corner design-expertise-sm-bx-corner-1'>
                  <div className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 81 81" fill="none">
                      <rect x="0.0625" y="0.90625" width="80" height="80" rx="40" fill="#007B42" />
                      <path d="M25.1953 45.6491V45.8305C25.1953 48.6387 27.4718 50.9152 30.2801 50.9152H50.1106C52.9188 50.9152 55.1953 48.6387 55.1953 45.8305V33.3728C55.1953 30.5646 52.9188 28.2881 50.1106 28.2881H40.1953M50.1183 43.2881L40.1956 33.3654" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M50.1183 39.6926V43.2881H46.5228M43.791 33.3654H40.1956V36.9609M40.1953 56V50.9153M45.2801 56H35.1106M27.7377 41H32.5682C33.9723 41 35.1106 39.8617 35.1106 38.4576V28.5424C35.1106 27.1383 33.9723 26 32.5682 26H27.7377C26.3336 26 25.1953 27.1383 25.1953 28.5424V38.4576C25.1953 39.8617 26.3336 41 27.7377 41Z" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className='design-expertise-sm-bx-content'>
                    <div className='mobile-app-title'>Responsive Design</div>
                    <div className='mobileAppDevelopment-content-text-right'>
                      It's critical to create a uniform and pleasurable experience across platforms in an era of varied devices and screen sizes. Our proficiency in responsive design guarantees that your online presence is tailored for different screen sizes, offering a smooth user experience.
                    </div>
                  </div>
                </div>
              </div>
              <div className='design-expertise-bx'>
                <img src="/image/design-expertise-image.webp" className='design-expertise-bx-image' alt="" />
              </div>
            </div>

            <div className='we-are-text-1'>
              Usability Testing
            </div>

            <div className='design-usability-testing-sec'>
              <div className='design-usability-testing-sec-bx'>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 81 81" fill="none">
                    <path d="M39.6719 59.4375C39.6719 60.3005 38.9724 61 38.1094 61H29.125C25.6787 61 22.875 58.1963 22.875 54.75V27.25C22.875 23.8037 25.6787 21 29.125 21H48.3352C51.7813 21 54.5852 23.8037 54.5852 27.25V43.8125C54.5852 44.6755 53.8855 45.375 53.0227 45.375C52.1597 45.375 51.4602 44.6755 51.4602 43.8125V27.25C51.4602 25.527 50.0582 24.125 48.3352 24.125H29.125C27.402 24.125 26 25.527 26 27.25V54.75C26 56.473 27.402 57.875 29.125 57.875H38.1094C38.9724 57.875 39.6719 58.5745 39.6719 59.4375ZM58.0813 46.4483C57.3797 45.9459 56.4038 46.1077 55.9014 46.809L48.1997 57.5672C47.9895 57.8109 47.7258 57.8635 47.5848 57.873C47.4389 57.8823 47.157 57.8641 46.9149 57.6337L41.929 52.8461C41.3067 52.2485 40.3177 52.2684 39.7198 52.8909C39.122 53.5135 39.1421 54.5026 39.7647 55.1001L44.7555 59.8926C45.5031 60.6039 46.5008 61 47.5273 61C47.6156 61 47.7041 60.9969 47.7926 60.9912C48.9108 60.9167 49.9548 60.3729 50.657 59.4988C50.6749 59.4766 50.6927 59.4534 50.7095 59.4298L58.4423 48.6282C58.9446 47.9266 58.7831 46.9506 58.0813 46.4483ZM46.7727 30.375H30.6789C29.8159 30.375 29.1164 31.0745 29.1164 31.9375C29.1164 32.8005 29.8159 33.5 30.6789 33.5H46.7727C47.6355 33.5 48.3352 32.8005 48.3352 31.9375C48.3352 31.0745 47.6355 30.375 46.7727 30.375ZM48.3352 38.1875C48.3352 37.3245 47.6355 36.625 46.7727 36.625H30.6789C29.8159 36.625 29.1164 37.3245 29.1164 38.1875C29.1164 39.0505 29.8159 39.75 30.6789 39.75H46.7727C47.6355 39.75 48.3352 39.0505 48.3352 38.1875ZM30.6789 42.875C29.8159 42.875 29.1164 43.5745 29.1164 44.4375C29.1164 45.3005 29.8159 46 30.6789 46H40.4531C41.3162 46 42.0156 45.3005 42.0156 44.4375C42.0156 43.5745 41.3162 42.875 40.4531 42.875H30.6789Z" fill="#007B42" />
                  </svg>
                </div>

                <div className='design-expertise-sm-bx-content'>
                  <div className='we-are-text-2'>
                    User Testing Process
                  </div>
                  <div className='design-usability-content'>
                    We at HKAPPS recognize the value of user testing in order to enhance the user experience and guarantee that our designs meet the needs and expectations of your audience in the real world. Our user testing process is a systematic, collaborative approach created to gather critical information for continuous improvement.
                  </div>
                </div>
              </div>
              <div className='design-usability-testing-sec-bx'>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 81 81" fill="none">
                    <path d="M46.0078 57.9756C52.9989 55.5046 58.0077 48.8372 58.0077 40.9999C58.0077 31.0589 49.9489 23.0001 40.0078 23.0001L46.0078 29.0001" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M34.0077 24.0245C27.0166 26.4954 22.0078 33.1629 22.0078 41.0001C22.0078 50.9412 30.0666 59 40.0077 59L34.0077 53" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M45.9999 41C45.9999 44.3137 43.3136 47 39.9999 47C36.6863 47 34 44.3137 34 41C34 37.6864 36.6863 35 39.9999 35C43.3136 35 45.9999 37.6864 45.9999 41Z" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className='design-expertise-sm-bx-content'>
                  <div className='we-are-text-2'>
                    Iterative Design
                  </div>
                  <div className='design-usability-content'>
                    In our quest for excellence, we don't give up at the initial design phase. We can continuously refine our ideas in response to evolving requirements and user feedback thanks to a core principle of iterative design.
                  </div>
                </div>
              </div>
            </div>

            <div className='we-are-text-1'>
              Design System and Consistency
            </div>

            <div className='design-usability-testing-sec'>
              <div className='design-system-sec-bx'>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="81" viewBox="0 0 80 81" fill="none">
                    <path d="M53.4413 22.0236V27.5664H47.8984" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M26.5625 59.9854V54.4425H32.1053" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23.548 50.5044C21.9304 47.7087 21 44.4657 21 41.0036C21 30.5081 29.5083 21.9998 40.0039 21.9998C45.2519 21.9998 49.999 24.1304 53.4369 27.5707" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M56.4513 31.5037C58.069 34.2994 58.9994 37.5423 58.9994 41.0044C58.9994 51.5 50.4911 60.0083 39.9955 60.0083C34.7474 60.0083 30.0003 57.8777 26.5625 54.4374" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M47.5094 41.0043C47.5097 40.4985 47.4589 39.994 47.3578 39.4984L49.396 38.3217L47.0303 34.2243L44.9838 35.4059C44.2351 34.7413 43.3551 34.2238 42.3839 33.9005V31.5418H37.6527V33.9005C36.6815 34.2238 35.8015 34.7413 35.0528 35.4059L33.0063 34.2243L30.6406 38.3217L32.6788 39.4984C32.5777 39.994 32.5269 40.4985 32.5271 41.0043C32.5269 41.5101 32.5777 42.0146 32.6788 42.5102L30.6406 43.6868L33.0063 47.7843L35.0528 46.6027C35.8015 47.2673 36.6815 47.7848 37.6527 48.1081V50.4668H42.3839V48.1081C43.3551 47.7848 44.2351 47.2673 44.9838 46.6027L47.0303 47.7843L49.396 43.6868L47.3578 42.5102C47.4589 42.0146 47.5097 41.5101 47.5094 41.0043Z" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M43.1677 41.0045C43.1677 42.7465 41.7556 44.1587 40.0135 44.1587C38.2715 44.1587 36.8594 42.7465 36.8594 41.0045C36.8594 39.2626 38.2715 37.8504 40.0135 37.8504C41.7556 37.8504 43.1677 39.2626 43.1677 41.0045Z" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className='we-are-text-2'>
                  Establishing a Design System
                </div>
                <div className='design-usability-content'>
                  At HKAPPS, we think that consistent design can produce user experiences that are unified and unforgettable. Reaching this aim depends on our dedication to keeping a strong design system. A design system is an all-inclusive set of rules, elements, and resources that guarantees a consistent and effective design language throughout all of your digital touchpoints.
                </div>
              </div>
            </div>

            <div className='we-are-text-1'>
              Accessibility
            </div>

            <div className='design-accessibility-sec'>
              <div className='design-accessibility-sec-bx'>
                <img src="/image/design-accessibility-image.webp" className='design-accessibility-image' alt="" />
              </div>
              <div className='design-accessibility-sec-bx'>
                <div className='design-accessibility-sm-bx design-accessibility-sm-up'>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="81" viewBox="0 0 80 81" fill="none">
                      <rect y="0.958008" width="80" height="80" rx="40" fill="#E4F7F3" />
                      <path d="M53.5116 22.0656V27.6084H47.9688" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M26.6328 60.0273V54.4845H32.1756" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M23.6183 50.5464C22.0007 47.7507 21.0703 44.5077 21.0703 41.0456C21.0703 30.5501 29.5786 22.0418 40.0742 22.0418C45.3223 22.0418 50.0693 24.1724 53.5072 27.6127" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M56.5217 31.5457C58.1393 34.3414 59.0697 37.5843 59.0697 41.0464C59.0697 51.542 50.5614 60.0503 40.0658 60.0503C34.8177 60.0503 30.0706 57.9197 26.6328 54.4794" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M47.5798 41.0463C47.58 40.5405 47.5292 40.036 47.4281 39.5404L49.4663 38.3637L47.1006 34.2663L45.0541 35.4479C44.3054 34.7833 43.4254 34.2658 42.4542 33.9425V31.5838H37.723V33.9425C36.7518 34.2658 35.8718 34.7833 35.1231 35.4479L33.0766 34.2663L30.7109 38.3637L32.7491 39.5404C32.648 40.036 32.5972 40.5405 32.5974 41.0463C32.5972 41.5521 32.648 42.0566 32.7491 42.5522L30.7109 43.7288L33.0766 47.8262L35.1231 46.6447C35.8718 47.3093 36.7518 47.8268 37.723 48.1501V50.5088H42.4542V48.1501C43.4254 47.8268 44.3054 47.3093 45.0541 46.6447L47.1006 47.8262L49.4663 43.7288L47.4281 42.5522C47.5292 42.0566 47.58 41.5521 47.5798 41.0463Z" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M43.238 41.0465C43.238 42.7885 41.8259 44.2007 40.0839 44.2007C38.3418 44.2007 36.9297 42.7885 36.9297 41.0465C36.9297 39.3045 38.3418 37.8923 40.0839 37.8923C41.8259 37.8923 43.238 39.3045 43.238 41.0465Z" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  <div className='design-accessibility-content'>
                    <div className='we-are-text-2'>
                      Inclusive Design
                    </div>
                    <div className='design-usability-content'>
                      At  HKAPPS, Inclusive design is an essential component of our methodology and is seamlessly integrated into our whole UI/UX design process. Accessibility is paramount from the ideation stage to the finished product. We carefully design user interfaces to meet the demands of a wide range of users, making it easy for everyone to interact. Usability is a top priority for our team, and we use methods like text size adjustments, straightforward interactions, and clear navigation. We ensure that every user, regardless of ability, has a flawless experience through teamwork.
                    </div>
                  </div>

                </div>
                <div className='design-accessibility-sm-bx design-accessibility-sm-down'>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 81 81" fill="none">
                      <rect x="0.929688" y="0.958008" width="80" height="80" rx="40" fill="#E4F7F3" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M37.9778 28.789L37.3653 27.9143L36.0872 26.0882L31.6171 32.4723L34.1539 34.2485L37.9778 28.789ZM39.8155 31.4131L35.7574 37.2087C35.644 37.3707 35.4998 37.5088 35.333 37.6151C35.1662 37.7213 34.9801 37.7936 34.7853 37.8279C34.5906 37.8622 34.3909 37.8578 34.1979 37.8149C34.0048 37.772 33.8221 37.6915 33.6602 37.578L28.6569 34.0738C28.3302 33.8448 28.1078 33.4955 28.0386 33.1026C27.9694 32.7098 28.0589 32.3055 28.2876 31.9786L34.7941 22.6844C34.9944 22.4233 35.2736 22.2363 35.5877 22.1494C35.7649 22.0786 35.9547 22.0419 36.1471 22.042H43.6029C43.8447 22.0422 44.083 22.1006 44.2975 22.2124C44.512 22.3242 44.6964 22.486 44.8351 22.6842L49.3307 29.1044L50.4767 28.4241C50.7305 28.2734 51.023 28.2008 51.3178 28.2151C51.6127 28.2294 51.8968 28.3301 52.1348 28.5046C52.3729 28.6791 52.5543 28.9198 52.6567 29.1967C52.759 29.4735 52.7777 29.7744 52.7104 30.0618L50.9643 37.5597C50.8782 37.9285 50.6563 38.2514 50.3427 38.4638C50.0291 38.6762 49.6469 38.7626 49.2725 38.7057L41.4193 37.5176C41.1156 37.4733 40.8327 37.337 40.6088 37.1271C40.3849 36.9171 40.2308 36.6436 40.1671 36.3433C40.1035 36.043 40.1334 35.7305 40.2529 35.4477C40.3723 35.165 40.5756 34.9257 40.8353 34.762L41.7504 34.176L39.8155 31.4131ZM48.3473 35.5206L49.0256 32.6086C48.7626 32.6313 48.4983 32.5845 48.2591 32.4729C48.0199 32.3612 47.8143 32.1886 47.6629 31.9724L42.8181 25.0524H39.0371L39.8318 26.1883L45.1161 33.7365C45.249 33.9274 45.336 34.1465 45.3705 34.3765C45.4049 34.6066 45.3859 34.8415 45.3148 35.0631L48.3473 35.5206ZM27.9658 52.3644L27.6035 53.3664L26.8441 55.4653L34.6396 55.4478L34.6335 52.3491L27.9658 52.3644ZM29.0549 49.3517L30.2025 46.1775L31.206 46.591C31.4894 46.7075 31.8016 46.7347 32.1009 46.669C32.4002 46.6033 32.6724 46.4478 32.8809 46.2233C33.0895 45.9988 33.2246 45.716 33.2681 45.4126C33.3117 45.1093 33.2616 44.7999 33.1246 44.5258L29.5763 37.4172C29.4071 37.0786 29.1164 36.8162 28.7623 36.6823C28.4082 36.5484 28.0167 36.5528 27.6657 36.6947L20.529 39.5807C20.2557 39.6912 20.0209 39.8796 19.8537 40.1224C19.6865 40.3653 19.5943 40.6518 19.5885 40.9466C19.5827 41.2414 19.6637 41.5313 19.8212 41.7805C19.9788 42.0297 20.206 42.2271 20.4748 42.3483L21.691 42.8962L19.0278 50.2657C18.9451 50.4933 18.9186 50.7376 18.9508 50.9777C18.9829 51.2178 19.0727 51.4466 19.2124 51.6445L23.5013 57.7416C23.624 57.9163 23.7822 58.0624 23.9646 58.1707C24.2061 58.356 24.4998 58.4651 24.8075 58.4803L36.1528 58.4542C36.3504 58.454 36.546 58.4148 36.7284 58.3389C36.9108 58.2629 37.0764 58.1518 37.2158 58.0118C37.3553 57.8718 37.4657 57.7057 37.5409 57.523C37.6161 57.3403 37.6545 57.1446 37.654 56.947L37.6399 50.8379C37.6389 50.439 37.4796 50.0569 37.197 49.7754C36.9144 49.4939 36.5316 49.3361 36.1327 49.3367L29.0549 49.3517ZM27.5051 40.0082L24.7315 41.1281C24.9021 41.3298 25.0164 41.573 25.063 41.833C25.1095 42.0931 25.0865 42.3608 24.9965 42.6092L22.1245 50.5527L24.3001 53.6454L24.7717 52.3429L27.9045 43.6769C27.983 43.4579 28.1115 43.2602 28.2798 43.0996C28.448 42.939 28.6515 42.8198 28.8739 42.7517L27.5051 40.0082ZM55.1732 48.2132L56.2386 48.2146L58.4718 48.2188L55.8169 40.8914L52.9028 41.9471L55.1732 48.2132ZM51.9701 48.209L49.5592 41.5578C49.4918 41.3718 49.4616 41.1744 49.4705 40.9768C49.4794 40.7793 49.5272 40.5854 49.6111 40.4063C49.6949 40.2271 49.8133 40.0663 49.9594 39.933C50.1054 39.7996 50.2763 39.6963 50.4623 39.6291L56.2062 37.5479C56.5815 37.4123 56.9952 37.4313 57.3565 37.6006C57.7178 37.77 57.997 38.0758 58.1329 38.451L61.9983 49.1159C62.1257 49.4891 62.1016 49.8974 61.9311 50.253C61.9208 50.2746 61.91 50.2959 61.8986 50.3168C61.857 50.4136 61.8052 50.5062 61.7436 50.5928L57.4588 56.6939C57.3201 56.8924 57.1353 57.0543 56.9204 57.1658C56.7054 57.2773 56.4667 57.335 56.2245 57.3341L48.3894 57.3241L48.2851 58.6527C48.2623 58.9468 48.1537 59.2278 47.9726 59.4607C47.7915 59.6936 47.546 59.8682 47.2665 59.9627C46.9871 60.0572 46.686 60.0675 46.4007 59.9923C46.1155 59.9171 45.8586 59.7597 45.662 59.5398L40.5302 53.8019C40.2778 53.5195 40.1412 53.1524 40.1475 52.7737C40.1538 52.395 40.3027 52.0326 40.5643 51.7588L46.0493 46.013C46.2604 45.7901 46.5346 45.6371 46.8352 45.5747C47.1357 45.5123 47.4482 45.5434 47.7305 45.6638C48.0129 45.7842 48.2516 45.9882 48.4146 46.2483C48.5776 46.5084 48.6571 46.8122 48.6423 47.1188L48.5941 48.2045L51.9701 48.209ZM45.8205 50.6129L43.7012 52.8306L45.6961 55.0603C45.8279 54.8317 46.0177 54.642 46.2465 54.5105C46.4753 54.379 46.7348 54.3104 46.9986 54.3117L55.4459 54.3237L57.6194 51.229L56.2326 51.225L47.0187 51.213C46.7861 51.2126 46.5569 51.1582 46.3489 51.054C46.141 50.9499 45.9601 50.7989 45.8205 50.6129Z" fill="#007B42" />
                    </svg>
                  </div>
                  <div className='design-accessibility-content'>
                    <div className='we-are-text-2'>
                      Compliance Standards
                    </div>
                    <div className='design-usability-content'>
                      One component of our commitment to user-centricity that we cannot compromise on is making sure our designs adhere to recognized accessibility standards. We ensure that your digital products are usable by the largest audience by aligning our operations with globally recognized accessibility standards.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='we-are-text-1'>
              Collaboration with Development
            </div>

            <div className='design-collaboration-sec'>
              <div className='design-collaboration-sec-bx'>
                <div className='design-container'>
                  <div className="design-image-wrap">
                    <img className="design-image-wrap-fluid" src="/image/design-collaboration-1-image.webp" />
                  </div>
                </div>
                <div className='design-collaboration-content'>
                  <div className='we-are-text-2'>Close Collaboration</div>
                  <div className='design-usability-content'>
                    At  HKAPPS, we recognize that the successful development of digital goods requires a close relationship between design and development. Our approach is predicated on building a close-knit culture of collaboration between our design and development teams. We believe that effective communication and cooperation between these two disciplines is necessary to provide effortless and outstanding results.
                  </div>
                </div>
              </div>
              <div className='design-collaboration-sec-bx'>
                <div className='design-container'>
                  <div className="design-image-wrap">
                    <img className="design-image-wrap-fluid" src="/image/design-collaboration-2-image.webp" />
                  </div>
                </div>
                <div className='design-collaboration-content'>
                  <div className='we-are-text-2'>Implementation Support</div>
                  <div className='design-usability-content'>
                    Up until the design is finished, our work with you is not finished. We understand that a great design combines both visually striking elements and effective implementation. Our post-design implementation support ensures that design concepts are seamlessly transformed into functional digital experiences.
                  </div>
                </div>
              </div>
            </div>

            <div className='we-are-text-1'>
              Portfolio and Case Studies
            </div>

            <div className='design-portfolio-sec'>
              <div className='design-portfolio-front-bx'>
                <div className='design-portfolio-front-inner-bx'>
                  <div className='design-portfolio-title'>
                    Showcase
                    <br />
                    <span className='design-portfolio-title-span'>Projects</span>
                  </div>
                  <div className='we-are-text-3'>
                    View the results of our UI/UX design experience by looking through our portfolio. Our dedication to providing creative, user-centered designs that improve digital experiences is demonstrated by each project we work on.
                  </div>
                </div>
                <div className='design-portfolio-front-inner-bx'>
                  <div className='design-portfolio-title'>
                    Before-
                    <br />
                    <span className='design-portfolio-title-span'>and-After</span>
                  </div>
                  <div className='we-are-text-3'>
                    Utilize our before-and-after photos to gain an understanding of how user experiences are changing. Watch the design concepts grow from rough sketches to well-thought-out, intuitive interfaces.
                  </div>
                </div>
              </div>
              <div className='design-portfolio-behind-bx'></div>
            </div>

            <div className='we-are-text-1'>
              Continuous Improvement
            </div>

            <div className='design-improvement-sec'>
              <div className='design-improvement-bx'>
                <div className='design-improvement-bx-inner-1'>
                  <div className='design-improvement-title'>
                    Commitment to Continuous Enhancement
                  </div>
                  <div className='we-are-text-3'>
                    Here at <span className='design-improvement-span-text'>HKAPPS</span>  we view project completion as the start of an ongoing process of improvement rather than the conclusion of our engagement in it. We are dedicated to continuing our work beyond the launch since we think that designs should be improved and changed in response to user input, new trends, and shifting business requirements.
                  </div>
                </div>
                <div className='design-improvement-bx-inner-1'>
                  <div className='design-improvement-title'>
                    Post-Launch Support
                  </div>
                  <div className='we-are-text-3'>
                    We're dedicated to making sure a product succeeds long after it is launched, as that's just the beginning of its journey. We want your digital solution to last as long as possible and be as successful as possible,therefore our post-launch support services are made to handle any problems, apply upgrades, and offer further help.
                    <br /><br />
                    Our after-launch assistance is devoted to your sustained success and goes beyond simple troubleshooting. Our assistance is there to stand by your side and help you maintain,By choosing HKAPPS ,you're not just getting a one-time service; you're gaining a long-term partner dedicated to the ongoing success and enhancement of your digital products.
                  </div>
                </div>
              </div>
              <div className='design-improvement-bx'>
                <div className='design-improvement-bx-img'>
                  <img src="/image/design-improvement-image.webp" className='design-improvement-bx-image' alt="" />
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

export default UiUxDesignServices