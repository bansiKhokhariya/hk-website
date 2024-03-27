import './Home.css';
import Rating from './Rating/Rating.jsx';
import WeAre from './WeAre/WeAre.jsx';
import WorkProcess from './WorkProcess/WorkProcess.jsx';
import Expertise from './Expertise/Expertise.jsx';
import Project from './Project/Project.jsx';
import Testimonials from './Testimonials/Testimonials.jsx';
import FAQs from './FAQs/FAQs.jsx';
// import LatestPost from './LatestPost/LatestPost.jsx';
// import Discuss from './Discuss/Discuss.jsx';
import Footer from './Footer/Footer.jsx';
import Navbar from '../Navbar/Navbar.jsx'
import Headline from '../Headline/Headline.jsx'

const Home = () => {

  const testimonialsArray = [
    {
      id: 1,
      testimonial_text: `"The project was well planned and managed from the start with HKAPPS . The milestones were reachable and delivered on time. They are very professional and understand the concept very well. Their service is quick and on point. I will continue to do work with them"`,
      testimonial_author: "Suzie Levett",
      testimonial_rate_plus: [1, 2, 3, 4],
      testimonial_rate_minues: [5]
    },
    {
      id: 2,
      testimonial_text: `"Technource is the best team to work with HKAPPS.They develop relationship with their clients and we surely recommend their excellent teams. All requests and changes were completed in a timely manner"`,
      testimonial_author: "Steve",
      testimonial_rate_plus: [1, 2, 3],
      testimonial_rate_minues: [4, 5]
    }
  ]

  const faqsArray = [
    {
      id: 1,
      question: 'Q. How can businesses get started with your mobile app development services?',
      answer: `Initiating a partnership with us is straightforward. Simply reach out through our contact form, email, or phone, and we will schedule a consultation to discuss your project, understand your goals, and outline a tailored solution that aligns with your vision.      `
    },
    {
      id: 2,
      question: 'Q. How do you determine the cost of mobile app development projects?',
      answer: `The cost of development depends on various factors such as project complexity, features, and platform requirements. We provide detailed and transparent quotes based on a thorough understanding of your specific needs, ensuring that you receive a fair and accurate estimate.`
    },
    {
      id: 3,
      question: 'Q. How do you handle changes and updates during the development process?',
      answer: `We understand that requirements may evolve during the development lifecycle. Our agile development methodology allows for flexibility, ensuring that we can adapt to changes efficiently. We maintain transparent communication and provide regular updates to keep you informed about the progress of your project.`
    }
    ,
    {
      id: 4,
      question: 'Q. What kind of support and maintenance do you offer after the app is launched?',
      answer: `Our commitment extends beyond the app launch. We offer post-launch support and maintenance services, addressing any issues promptly, implementing updates, and ensuring that your app continues to perform optimally in the ever-changing mobile landscape.`
    }
    ,
    {
      id: 5,
      question: 'Q. Can you provide examples of successful mobile apps you have developed in the past?',
      answer: `Absolutely. We take pride in our diverse portfolio, showcasing a range of successful mobile apps across various industries. Feel free to explore our case studies to get a deeper understanding of our expertise and the impact of our work.`
    }
  ]

  const weAreContentArray = {
    weAreImage: `/image/home-section-who-we-are.webp`,
    weAreTitle: `Who We Are`,
    weAreSubTitle: `We help your business thrive with transformative digital development.`,
    weAreContent: `HK APPS is a widely acclaimed technology company with a global footprint and several industry-benchmarked web solutions. We pride ourselves on the range of our offerings, the depth of our expertise, and breadth of technologies.`,
  }

  return (
    <>
      <Navbar activeNav="Home" />
      <Headline headlineText1="Mobile App Development" headlineText2="IT Services and IT Consulting" />

      <div className='home-xyz'>
        <div className='home-section'>
          <div data-aos="fade-right">
            <img src="/logo/home-screen-main-image.webp" className='home-image-part' alt="" />
          </div>
          <div className='home-text-part' data-aos="fade-left">
            <div className='home-text-1'>WITH OUR BRILLIANT <span className='home-text-1-span'> 10+</span> YEARS EXPERIENCED TEAM</div>
            <div className='home-text-2'>Witness  <span className='home-text-2-span'> Your Ideas</span> Growing Wings <span className='home-text-2-span'>!</span></div>
            <div className='home-text-3'>Empowering the digital world, HK APPS develops cutting-edge Android and iOS applications and games, combined with strategic digital marketing expertise to drive user engagement and business growth.</div>
            <button className='home-button'>
              Let's Get Connect
            </button>
          </div>
        </div>
      </div>

      <div className='website-main-section'>
        <div className='website-innner-section'>
          <Rating />
          <WeAre weAreContentArray={weAreContentArray} />
          <WorkProcess />
          <Expertise />
          <Project />
          <Testimonials testimonialsArray={testimonialsArray} />
          <FAQs faqsArray={faqsArray} />
          {/* <LatestPost /> */}
          {/* <Discuss /> */}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home



