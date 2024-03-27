import React from 'react'
import Banner from '../Banner/Banner.jsx'
import Navbar from '../Navbar/Navbar.jsx'
import Headline from '../Headline/Headline.jsx'
import Footer from '../Home/Footer/Footer.jsx';



const ClientTestimonials = () => {

    const bannerObject = {
        boxSide: 'left',
        backgroundBanner: `/frame/clientTestimonials-page-banner.webp`,
        bannerTitle: `Testimonials`,
        bannerTitleSpan: ``,
        bannerContent: `Some of the best ways you can truly learn about a company is not by what they say about themselves, but rather what their clients say about them. And it's no different for HKAPPS. The long term relationships we develop with our clients mean everything to us. And here's what a few of them have to say...`,
    };


    const websiteDevelopmentTestimonialsArray = [
        {
            id: 1,
            testimonial_text: `"As a startup, speed and flexibility are crucial for us. HKAPPS   delivered on both fronts with their MERN stack development services. The real-time updates, coupled with a scalable architecture, allowed us to iterate quickly and stay ahead in the competitive landscape. Highly recommended!"`,
            testimonial_author: "Emily S",
            testimonial_rate_plus: [1, 2, 3, 4, 5],
            testimonial_rate_minues: []
        },
        {
            id: 2,
            testimonial_text: `"I've been in the industry for years, and  HKAPPS ] stands out for their MERN stack expertise. The clean code, efficient development process, and reliable performance of the applications they build are truly impressive. It's a pleasure to collaborate with such a skilled team."("`,
            testimonial_author: "Michael L",
            testimonial_rate_plus: [1, 2, 3],
            testimonial_rate_minues: [4, 5]
        },
        {
            id: 3,
            testimonial_text: `"We approached  HKAPPS with a complex mobile app project, and they delivered beyond our expectations. The MERN stack development not only accelerated the development process but also ensured a highly responsive and user-friendly app. I highly recommend their services"`,
            testimonial_author: "Sarah M",
            testimonial_rate_plus: [1, 2, 3, 4],
            testimonial_rate_minues: [5]
        },
        {
            id: 4,
            testimonial_text: `"HKAPPS is our go-to partner for MERN stack development. Their proficiency in MongoDB, Express.js, React.js, and Node.js is unmatched. The apps they've built for us are not only technically sound but also aesthetically pleasing. The collaborative approach of their team makes them a valuable asset"`,
            testimonial_author: "Eliza Jezz",
            testimonial_rate_plus: [1, 2, 3],
            testimonial_rate_minues: [4, 5]
        },
        {
            id: 5,
            testimonial_text: `"The PHP development team at  HKAPPS is unparalleled in their skills and dedication. They transformed our app idea into reality, ensuring it not only met but surpassed our requirements. The robust and secure PHP codebase they created has been instrumental in our app's success"`,
            testimonial_author: "Sophie R",
            testimonial_rate_plus: [1, 2, 3, 4],
            testimonial_rate_minues: [5]
        },
        {
            id: 6,
            testimonial_text: `"Working with  HKAPPS  was a game-changer for our startup. Their PHP development expertise allowed us to create a scalable and high-performing mobile app. Their team's collaborative approach and attention to detail made the entire development process smooth and efficient"`,
            testimonial_author: "Chris M",
            testimonial_rate_plus: [1, 2, 3, 4],
            testimonial_rate_minues: [5]
        }
    ]

    const mobileDevelopmentTestimonialsArray = [
        {
            id: 1,
            testimonial_text: `"Partnering with  HKAPPS  for our mobile app development was a game-changer. Their team demonstrated unparalleled expertise, delivering a sleek and user-friendly app that has significantly enhanced our brand presence. The collaboration was seamless, and the results exceeded our expectations"`,
            testimonial_author: "Rachel L",
            testimonial_rate_plus: [1, 2],
            testimonial_rate_minues: [3, 4, 5]
        },
        {
            id: 2,
            testimonial_text: `"The mobile app development services provided by  HKAPPS  are top-notch. Their talented team navigated the complexities of our project with finesse, ensuring a smooth development process. The result was a high-performance app that has garnered positive feedback from our users. Truly impressed!"`,
            testimonial_author: "David H",
            testimonial_rate_plus: [1, 2, 3],
            testimonial_rate_minues: [4, 5]
        },
        {
            id: 3,
            testimonial_text: `"We approached   HKAPPS  with a unique app concept, and they turned our vision into reality. Their commitment to innovation and understanding of user experience were evident throughout the development journey. The final product exceeded our expectations, and we look forward to future collaborations"`,
            testimonial_author: "Emily R",
            testimonial_rate_plus: [1, 2, 3, 4],
            testimonial_rate_minues: [5]
        }
    ]

    const gameDevelopmentTestimonialsArray = [
        {
            id: 1,
            testimonial_text: `"Our journey with HKAPPS ,for Unity 2D game development was fantastic. The team's proficiency in leveraging Unity's 2D features and creating captivating visuals ensured our game stood out in a competitive market. Grateful for their expertise!"`,
            testimonial_author: "Rachel L",
            testimonial_rate_plus: [1, 2, 3],
            testimonial_rate_minues: [4, 5]
        },
        {
            id: 2,
            testimonial_text: `"Our experience with  HKAPPS   in developing our Multiplayer Game was truly outstanding. The team's expertise in creating seamless multiplayer experiences, coupled with stunning graphics and responsive gameplay, resulted in a game that brings people together from around the world.   HKAPPS   for redefining multiplayer gaming!"`,
            testimonial_author: "David H",
            testimonial_rate_plus: [1, 2, 3],
            testimonial_rate_minues: [4, 5]
        }
    ]

    const designingTestimonialsArray = [
        {
            id: 1,
            testimonial_text: `"Securing UI/UX design services from HKAPPS ,was a game-changer for my startup. The team's keen understanding of user behavior and their ability to translate it into a visually appealing and intuitive design significantly elevated our app. The collaboration was seamless, and the end result exceeded our expectations."`,
            testimonial_author: "Rachel L",
            testimonial_rate_plus: [1, 2, 3],
            testimonial_rate_minues: [4, 5]
        },
        {
            id: 2,
            testimonial_text: `"Our startup needed a website that reflected our brand identity and conveyed our mission clearly. HKAPPS ,delivered just that with their web design services. The team took the time to understand our vision and translated it into a website that not only looks impressive but also effectively communicates our story. Highly recommended!"`,
            testimonial_author: "David H",
            testimonial_rate_plus: [1, 2, 3, 4],
            testimonial_rate_minues: [5]
        }
    ]


    return (
        <>
            <Navbar activeNav="Home" />
            <Headline headlineText1="Mobile App Development" headlineText2="IT Services and IT Consulting" />
            <Banner bannerObject={bannerObject} />

            <div className='website-main-section'>
                <div className='website-innner-section'>

                    {/* Website app development */}
                    <div className='testimonials-main-section' style={{ paddingTop: "40px" }}>
                        <div className='we-are-text-1' data-aos="fade-right">Website Development</div>
                        <div className='testimonial-box-section'>
                            {websiteDevelopmentTestimonialsArray.map((index) => (
                                <div className='testimonials-box-main' key={index.id}>
                                    <div className='testimonials-box-inner'>
                                        <div className='testimonials-text'>
                                            {index.testimonial_text}
                                        </div>
                                        <div className='testimonials-bottom-sec'>
                                            <div className='testimonials-bottom-box'>
                                                <div className='testimonials-bottom-box-content'>
                                                    <img src="/logo/testimonials-img.webp" className='testimonials-img' />
                                                    <div className='testimonials-bottom-box-text'>
                                                        {index.testimonial_author}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='testimonials-rating-sec' >
                                                {index.testimonial_rate_plus.map((index) => (
                                                    <svg
                                                        className='testimonials-fill-star'
                                                        key={index}
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="36"
                                                        height="36"
                                                        viewBox="0 0 36 36"
                                                        fill="none"
                                                    >
                                                        <path d="M1.9903 18.5999L7.3303 22.4999L5.3023 28.7804C4.97457 29.7545 4.97042 30.8084 5.29046 31.7851C5.61051 32.7617 6.23762 33.6087 7.0783 34.1999C7.90458 34.8101 8.90589 35.137 9.93303 35.1318C10.9602 35.1267 11.9582 34.7898 12.7783 34.1714L17.9998 30.3284L23.2228 34.1669C24.0476 34.7736 25.0435 35.1031 26.0674 35.1081C27.0912 35.1131 28.0903 34.7933 28.9209 34.1947C29.7516 33.5961 30.371 32.7495 30.6902 31.7766C31.0094 30.8038 31.0119 29.7548 30.6973 28.7804L28.6693 22.4999L34.0093 18.5999C34.833 17.9977 35.4453 17.1506 35.7588 16.1795C36.0723 15.2085 36.0709 14.1632 35.7548 13.193C35.4387 12.2228 34.8241 11.3773 33.9988 10.7773C33.1735 10.1773 32.1797 9.85338 31.1593 9.85193H24.5998L22.6093 3.64793C22.2963 2.67137 21.6812 1.81945 20.8528 1.21503C20.0243 0.610606 19.0253 0.284912 17.9998 0.284912C16.9743 0.284912 15.9753 0.610606 15.1468 1.21503C14.3184 1.81945 13.7033 2.67137 13.3903 3.64793L11.3998 9.85193H4.8463C3.82592 9.85338 2.83209 10.1773 2.00677 10.7773C1.18145 11.3773 0.566862 12.2228 0.250783 13.193C-0.0652958 14.1632 -0.0666948 15.2085 0.246786 16.1795C0.560267 17.1506 1.17259 17.9977 1.9963 18.5999H1.9903Z" />
                                                    </svg>
                                                ))}
                                                {index.testimonial_rate_minues.map((index) => (
                                                    <svg key={index} className="testimonials-border-star" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                                        <g clipPath="url(#clip0_913_7659)">
                                                            <path d="M35.7538 13.1909C35.447 12.2143 34.834 11.3623 34.0055 10.761C33.177 10.1597 32.177 9.84093 31.1533 9.85193H24.5998L22.6093 3.64793C22.2963 2.67137 21.6812 1.81945 20.8528 1.21503C20.0243 0.610606 19.0253 0.284912 17.9998 0.284912C16.9743 0.284912 15.9753 0.610606 15.1468 1.21503C14.3184 1.81945 13.7033 2.67137 13.3903 3.64793L11.3998 9.85193H4.8463C3.82592 9.85338 2.83209 10.1773 2.00677 10.7773C1.18145 11.3773 0.566862 12.2228 0.250783 13.193C-0.0652958 14.1632 -0.0666948 15.2085 0.246786 16.1795C0.560267 17.1506 1.17259 17.9977 1.9963 18.5999L7.3303 22.4999L5.3023 28.7804C4.97457 29.7545 4.97042 30.8084 5.29047 31.7851C5.61051 32.7617 6.23762 33.6087 7.0783 34.1999C7.90458 34.8101 8.90589 35.137 9.93303 35.1318C10.9602 35.1267 11.9582 34.7898 12.7783 34.1714L17.9998 30.3284L23.2228 34.1669C24.0476 34.7736 25.0435 35.1031 26.0674 35.1081C27.0912 35.1131 28.0903 34.7933 28.921 34.1947C29.7516 33.5961 30.371 32.7495 30.6902 31.7766C31.0094 30.8038 31.0119 29.7548 30.6973 28.7804L28.6693 22.4999L34.0093 18.5999C34.8424 18.0053 35.4619 17.1581 35.7761 16.1839C36.0903 15.2098 36.0825 14.1603 35.7538 13.1909ZM32.2393 16.1774L26.0233 20.7209C25.768 20.9072 25.578 21.1693 25.4805 21.4699C25.383 21.7705 25.3829 22.0943 25.4803 22.3949L27.8428 29.6999C27.9624 30.0704 27.9613 30.4693 27.8399 30.8392C27.7184 31.2091 27.4828 31.5309 27.1669 31.7585C26.8511 31.986 26.4711 32.1076 26.0818 32.1056C25.6925 32.1036 25.3139 31.9782 25.0003 31.7474L18.8878 27.2474C18.6304 27.0583 18.3192 26.9563 17.9998 26.9563C17.6804 26.9563 17.3693 27.0583 17.1118 27.2474L10.9993 31.7474C10.6859 31.9813 10.3062 32.1093 9.9152 32.1128C9.52419 32.1164 9.14221 31.9953 8.82465 31.7672C8.50708 31.539 8.27042 31.2157 8.149 30.844C8.02757 30.4723 8.02767 30.0716 8.1493 29.6999L10.5193 22.3949C10.6167 22.0943 10.6166 21.7705 10.5191 21.4699C10.4216 21.1693 10.2316 20.9072 9.9763 20.7209L3.7603 16.1774C3.44726 15.9482 3.21465 15.626 3.09571 15.2566C2.97677 14.8873 2.97758 14.4899 3.09803 14.1211C3.21847 13.7523 3.45239 13.4309 3.76636 13.203C4.08034 12.9751 4.45832 12.8522 4.8463 12.8519H12.4963C12.8139 12.8519 13.1233 12.7511 13.3799 12.564C13.6365 12.377 13.8271 12.1133 13.9243 11.8109L16.2493 4.56443C16.3686 4.19361 16.6026 3.87022 16.9174 3.6408C17.2322 3.41139 17.6117 3.28779 18.0013 3.28779C18.3909 3.28779 18.7704 3.41139 19.0852 3.6408C19.4 3.87022 19.634 4.19361 19.7533 4.56443L22.0783 11.8109C22.1755 12.1133 22.3661 12.377 22.6227 12.564C22.8794 12.7511 23.1887 12.8519 23.5063 12.8519H31.1563C31.5443 12.8522 31.9223 12.9751 32.2362 13.203C32.5502 13.4309 32.7841 13.7523 32.9046 14.1211C33.025 14.4899 33.0258 14.8873 32.9069 15.2566C32.788 15.626 32.5553 15.9482 32.2423 16.1774H32.2393Z" fill="#E4F7F3" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_913_7659">
                                                                <rect width="36" height="36" fill="black" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='union-icon'>
                                        <img src="/icon/union.svg" className='union-svg' />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Game app development */}
                    <div className='testimonials-main-section' style={{ paddingTop: "40px" }}>
                        <div className='we-are-text-1' data-aos="fade-right">Game Development</div>
                        <div className='testimonial-box-section'>
                            {gameDevelopmentTestimonialsArray.map((index) => (
                                <div className='testimonials-box-main' key={index.id}>
                                    <div className='testimonials-box-inner'>
                                        <div className='testimonials-text'>
                                            {index.testimonial_text}
                                        </div>
                                        <div className='testimonials-bottom-sec'>
                                            <div className='testimonials-bottom-box'>
                                                <div className='testimonials-bottom-box-content'>
                                                    <img src="/logo/testimonials-img.webp" className='testimonials-img' />
                                                    <div className='testimonials-bottom-box-text'>
                                                        {index.testimonial_author}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='testimonials-rating-sec' >
                                                {index.testimonial_rate_plus.map((index) => (
                                                    <svg
                                                        className='testimonials-fill-star'
                                                        key={index}
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="36"
                                                        height="36"
                                                        viewBox="0 0 36 36"
                                                        fill="none"
                                                    >
                                                        <path d="M1.9903 18.5999L7.3303 22.4999L5.3023 28.7804C4.97457 29.7545 4.97042 30.8084 5.29046 31.7851C5.61051 32.7617 6.23762 33.6087 7.0783 34.1999C7.90458 34.8101 8.90589 35.137 9.93303 35.1318C10.9602 35.1267 11.9582 34.7898 12.7783 34.1714L17.9998 30.3284L23.2228 34.1669C24.0476 34.7736 25.0435 35.1031 26.0674 35.1081C27.0912 35.1131 28.0903 34.7933 28.9209 34.1947C29.7516 33.5961 30.371 32.7495 30.6902 31.7766C31.0094 30.8038 31.0119 29.7548 30.6973 28.7804L28.6693 22.4999L34.0093 18.5999C34.833 17.9977 35.4453 17.1506 35.7588 16.1795C36.0723 15.2085 36.0709 14.1632 35.7548 13.193C35.4387 12.2228 34.8241 11.3773 33.9988 10.7773C33.1735 10.1773 32.1797 9.85338 31.1593 9.85193H24.5998L22.6093 3.64793C22.2963 2.67137 21.6812 1.81945 20.8528 1.21503C20.0243 0.610606 19.0253 0.284912 17.9998 0.284912C16.9743 0.284912 15.9753 0.610606 15.1468 1.21503C14.3184 1.81945 13.7033 2.67137 13.3903 3.64793L11.3998 9.85193H4.8463C3.82592 9.85338 2.83209 10.1773 2.00677 10.7773C1.18145 11.3773 0.566862 12.2228 0.250783 13.193C-0.0652958 14.1632 -0.0666948 15.2085 0.246786 16.1795C0.560267 17.1506 1.17259 17.9977 1.9963 18.5999H1.9903Z" />
                                                    </svg>
                                                ))}
                                                {index.testimonial_rate_minues.map((index) => (
                                                    <svg key={index} className="testimonials-border-star" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                                        <g clipPath="url(#clip0_913_7659)">
                                                            <path d="M35.7538 13.1909C35.447 12.2143 34.834 11.3623 34.0055 10.761C33.177 10.1597 32.177 9.84093 31.1533 9.85193H24.5998L22.6093 3.64793C22.2963 2.67137 21.6812 1.81945 20.8528 1.21503C20.0243 0.610606 19.0253 0.284912 17.9998 0.284912C16.9743 0.284912 15.9753 0.610606 15.1468 1.21503C14.3184 1.81945 13.7033 2.67137 13.3903 3.64793L11.3998 9.85193H4.8463C3.82592 9.85338 2.83209 10.1773 2.00677 10.7773C1.18145 11.3773 0.566862 12.2228 0.250783 13.193C-0.0652958 14.1632 -0.0666948 15.2085 0.246786 16.1795C0.560267 17.1506 1.17259 17.9977 1.9963 18.5999L7.3303 22.4999L5.3023 28.7804C4.97457 29.7545 4.97042 30.8084 5.29047 31.7851C5.61051 32.7617 6.23762 33.6087 7.0783 34.1999C7.90458 34.8101 8.90589 35.137 9.93303 35.1318C10.9602 35.1267 11.9582 34.7898 12.7783 34.1714L17.9998 30.3284L23.2228 34.1669C24.0476 34.7736 25.0435 35.1031 26.0674 35.1081C27.0912 35.1131 28.0903 34.7933 28.921 34.1947C29.7516 33.5961 30.371 32.7495 30.6902 31.7766C31.0094 30.8038 31.0119 29.7548 30.6973 28.7804L28.6693 22.4999L34.0093 18.5999C34.8424 18.0053 35.4619 17.1581 35.7761 16.1839C36.0903 15.2098 36.0825 14.1603 35.7538 13.1909ZM32.2393 16.1774L26.0233 20.7209C25.768 20.9072 25.578 21.1693 25.4805 21.4699C25.383 21.7705 25.3829 22.0943 25.4803 22.3949L27.8428 29.6999C27.9624 30.0704 27.9613 30.4693 27.8399 30.8392C27.7184 31.2091 27.4828 31.5309 27.1669 31.7585C26.8511 31.986 26.4711 32.1076 26.0818 32.1056C25.6925 32.1036 25.3139 31.9782 25.0003 31.7474L18.8878 27.2474C18.6304 27.0583 18.3192 26.9563 17.9998 26.9563C17.6804 26.9563 17.3693 27.0583 17.1118 27.2474L10.9993 31.7474C10.6859 31.9813 10.3062 32.1093 9.9152 32.1128C9.52419 32.1164 9.14221 31.9953 8.82465 31.7672C8.50708 31.539 8.27042 31.2157 8.149 30.844C8.02757 30.4723 8.02767 30.0716 8.1493 29.6999L10.5193 22.3949C10.6167 22.0943 10.6166 21.7705 10.5191 21.4699C10.4216 21.1693 10.2316 20.9072 9.9763 20.7209L3.7603 16.1774C3.44726 15.9482 3.21465 15.626 3.09571 15.2566C2.97677 14.8873 2.97758 14.4899 3.09803 14.1211C3.21847 13.7523 3.45239 13.4309 3.76636 13.203C4.08034 12.9751 4.45832 12.8522 4.8463 12.8519H12.4963C12.8139 12.8519 13.1233 12.7511 13.3799 12.564C13.6365 12.377 13.8271 12.1133 13.9243 11.8109L16.2493 4.56443C16.3686 4.19361 16.6026 3.87022 16.9174 3.6408C17.2322 3.41139 17.6117 3.28779 18.0013 3.28779C18.3909 3.28779 18.7704 3.41139 19.0852 3.6408C19.4 3.87022 19.634 4.19361 19.7533 4.56443L22.0783 11.8109C22.1755 12.1133 22.3661 12.377 22.6227 12.564C22.8794 12.7511 23.1887 12.8519 23.5063 12.8519H31.1563C31.5443 12.8522 31.9223 12.9751 32.2362 13.203C32.5502 13.4309 32.7841 13.7523 32.9046 14.1211C33.025 14.4899 33.0258 14.8873 32.9069 15.2566C32.788 15.626 32.5553 15.9482 32.2423 16.1774H32.2393Z" fill="#E4F7F3" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_913_7659">
                                                                <rect width="36" height="36" fill="black" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='union-icon'>
                                        <img src="/icon/union.svg" className='union-svg' />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile app development */}
                    <div className='testimonials-main-section' style={{ paddingTop: "40px" }}>
                        <div className='we-are-text-1' data-aos="fade-right">Mobile App Development</div>
                        <div className='testimonial-box-section'>
                            {mobileDevelopmentTestimonialsArray.map((index) => (
                                <div className='testimonials-box-main' key={index.id}>
                                    <div className='testimonials-box-inner'>
                                        <div className='testimonials-text'>
                                            {index.testimonial_text}
                                        </div>
                                        <div className='testimonials-bottom-sec'>
                                            <div className='testimonials-bottom-box'>
                                                <div className='testimonials-bottom-box-content'>
                                                    <img src="/logo/testimonials-img.webp" className='testimonials-img' />
                                                    <div className='testimonials-bottom-box-text'>
                                                        {index.testimonial_author}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='testimonials-rating-sec' >
                                                {index.testimonial_rate_plus.map((index) => (
                                                    <svg
                                                        className='testimonials-fill-star'
                                                        key={index}
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="36"
                                                        height="36"
                                                        viewBox="0 0 36 36"
                                                        fill="none"
                                                    >
                                                        <path d="M1.9903 18.5999L7.3303 22.4999L5.3023 28.7804C4.97457 29.7545 4.97042 30.8084 5.29046 31.7851C5.61051 32.7617 6.23762 33.6087 7.0783 34.1999C7.90458 34.8101 8.90589 35.137 9.93303 35.1318C10.9602 35.1267 11.9582 34.7898 12.7783 34.1714L17.9998 30.3284L23.2228 34.1669C24.0476 34.7736 25.0435 35.1031 26.0674 35.1081C27.0912 35.1131 28.0903 34.7933 28.9209 34.1947C29.7516 33.5961 30.371 32.7495 30.6902 31.7766C31.0094 30.8038 31.0119 29.7548 30.6973 28.7804L28.6693 22.4999L34.0093 18.5999C34.833 17.9977 35.4453 17.1506 35.7588 16.1795C36.0723 15.2085 36.0709 14.1632 35.7548 13.193C35.4387 12.2228 34.8241 11.3773 33.9988 10.7773C33.1735 10.1773 32.1797 9.85338 31.1593 9.85193H24.5998L22.6093 3.64793C22.2963 2.67137 21.6812 1.81945 20.8528 1.21503C20.0243 0.610606 19.0253 0.284912 17.9998 0.284912C16.9743 0.284912 15.9753 0.610606 15.1468 1.21503C14.3184 1.81945 13.7033 2.67137 13.3903 3.64793L11.3998 9.85193H4.8463C3.82592 9.85338 2.83209 10.1773 2.00677 10.7773C1.18145 11.3773 0.566862 12.2228 0.250783 13.193C-0.0652958 14.1632 -0.0666948 15.2085 0.246786 16.1795C0.560267 17.1506 1.17259 17.9977 1.9963 18.5999H1.9903Z" />
                                                    </svg>
                                                ))}
                                                {index.testimonial_rate_minues.map((index) => (
                                                    <svg key={index} className="testimonials-border-star" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                                        <g clipPath="url(#clip0_913_7659)">
                                                            <path d="M35.7538 13.1909C35.447 12.2143 34.834 11.3623 34.0055 10.761C33.177 10.1597 32.177 9.84093 31.1533 9.85193H24.5998L22.6093 3.64793C22.2963 2.67137 21.6812 1.81945 20.8528 1.21503C20.0243 0.610606 19.0253 0.284912 17.9998 0.284912C16.9743 0.284912 15.9753 0.610606 15.1468 1.21503C14.3184 1.81945 13.7033 2.67137 13.3903 3.64793L11.3998 9.85193H4.8463C3.82592 9.85338 2.83209 10.1773 2.00677 10.7773C1.18145 11.3773 0.566862 12.2228 0.250783 13.193C-0.0652958 14.1632 -0.0666948 15.2085 0.246786 16.1795C0.560267 17.1506 1.17259 17.9977 1.9963 18.5999L7.3303 22.4999L5.3023 28.7804C4.97457 29.7545 4.97042 30.8084 5.29047 31.7851C5.61051 32.7617 6.23762 33.6087 7.0783 34.1999C7.90458 34.8101 8.90589 35.137 9.93303 35.1318C10.9602 35.1267 11.9582 34.7898 12.7783 34.1714L17.9998 30.3284L23.2228 34.1669C24.0476 34.7736 25.0435 35.1031 26.0674 35.1081C27.0912 35.1131 28.0903 34.7933 28.921 34.1947C29.7516 33.5961 30.371 32.7495 30.6902 31.7766C31.0094 30.8038 31.0119 29.7548 30.6973 28.7804L28.6693 22.4999L34.0093 18.5999C34.8424 18.0053 35.4619 17.1581 35.7761 16.1839C36.0903 15.2098 36.0825 14.1603 35.7538 13.1909ZM32.2393 16.1774L26.0233 20.7209C25.768 20.9072 25.578 21.1693 25.4805 21.4699C25.383 21.7705 25.3829 22.0943 25.4803 22.3949L27.8428 29.6999C27.9624 30.0704 27.9613 30.4693 27.8399 30.8392C27.7184 31.2091 27.4828 31.5309 27.1669 31.7585C26.8511 31.986 26.4711 32.1076 26.0818 32.1056C25.6925 32.1036 25.3139 31.9782 25.0003 31.7474L18.8878 27.2474C18.6304 27.0583 18.3192 26.9563 17.9998 26.9563C17.6804 26.9563 17.3693 27.0583 17.1118 27.2474L10.9993 31.7474C10.6859 31.9813 10.3062 32.1093 9.9152 32.1128C9.52419 32.1164 9.14221 31.9953 8.82465 31.7672C8.50708 31.539 8.27042 31.2157 8.149 30.844C8.02757 30.4723 8.02767 30.0716 8.1493 29.6999L10.5193 22.3949C10.6167 22.0943 10.6166 21.7705 10.5191 21.4699C10.4216 21.1693 10.2316 20.9072 9.9763 20.7209L3.7603 16.1774C3.44726 15.9482 3.21465 15.626 3.09571 15.2566C2.97677 14.8873 2.97758 14.4899 3.09803 14.1211C3.21847 13.7523 3.45239 13.4309 3.76636 13.203C4.08034 12.9751 4.45832 12.8522 4.8463 12.8519H12.4963C12.8139 12.8519 13.1233 12.7511 13.3799 12.564C13.6365 12.377 13.8271 12.1133 13.9243 11.8109L16.2493 4.56443C16.3686 4.19361 16.6026 3.87022 16.9174 3.6408C17.2322 3.41139 17.6117 3.28779 18.0013 3.28779C18.3909 3.28779 18.7704 3.41139 19.0852 3.6408C19.4 3.87022 19.634 4.19361 19.7533 4.56443L22.0783 11.8109C22.1755 12.1133 22.3661 12.377 22.6227 12.564C22.8794 12.7511 23.1887 12.8519 23.5063 12.8519H31.1563C31.5443 12.8522 31.9223 12.9751 32.2362 13.203C32.5502 13.4309 32.7841 13.7523 32.9046 14.1211C33.025 14.4899 33.0258 14.8873 32.9069 15.2566C32.788 15.626 32.5553 15.9482 32.2423 16.1774H32.2393Z" fill="#E4F7F3" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_913_7659">
                                                                <rect width="36" height="36" fill="black" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='union-icon'>
                                        <img src="/icon/union.svg" className='union-svg' />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Designing  */}
                    <div className='testimonials-main-section' style={{ paddingTop: "40px" }}>
                        <div className='we-are-text-1' data-aos="fade-right">Designing</div>
                        <div className='testimonial-box-section'>
                            {designingTestimonialsArray.map((index) => (
                                <div className='testimonials-box-main' key={index.id}>
                                    <div className='testimonials-box-inner'>
                                        <div className='testimonials-text'>
                                            {index.testimonial_text}
                                        </div>
                                        <div className='testimonials-bottom-sec'>
                                            <div className='testimonials-bottom-box'>
                                                <div className='testimonials-bottom-box-content'>
                                                    <img src="/logo/testimonials-img.webp" className='testimonials-img' />
                                                    <div className='testimonials-bottom-box-text'>
                                                        {index.testimonial_author}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='testimonials-rating-sec' >
                                                {index.testimonial_rate_plus.map((index) => (
                                                    <svg
                                                        className='testimonials-fill-star'
                                                        key={index}
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="36"
                                                        height="36"
                                                        viewBox="0 0 36 36"
                                                        fill="none"
                                                    >
                                                        <path d="M1.9903 18.5999L7.3303 22.4999L5.3023 28.7804C4.97457 29.7545 4.97042 30.8084 5.29046 31.7851C5.61051 32.7617 6.23762 33.6087 7.0783 34.1999C7.90458 34.8101 8.90589 35.137 9.93303 35.1318C10.9602 35.1267 11.9582 34.7898 12.7783 34.1714L17.9998 30.3284L23.2228 34.1669C24.0476 34.7736 25.0435 35.1031 26.0674 35.1081C27.0912 35.1131 28.0903 34.7933 28.9209 34.1947C29.7516 33.5961 30.371 32.7495 30.6902 31.7766C31.0094 30.8038 31.0119 29.7548 30.6973 28.7804L28.6693 22.4999L34.0093 18.5999C34.833 17.9977 35.4453 17.1506 35.7588 16.1795C36.0723 15.2085 36.0709 14.1632 35.7548 13.193C35.4387 12.2228 34.8241 11.3773 33.9988 10.7773C33.1735 10.1773 32.1797 9.85338 31.1593 9.85193H24.5998L22.6093 3.64793C22.2963 2.67137 21.6812 1.81945 20.8528 1.21503C20.0243 0.610606 19.0253 0.284912 17.9998 0.284912C16.9743 0.284912 15.9753 0.610606 15.1468 1.21503C14.3184 1.81945 13.7033 2.67137 13.3903 3.64793L11.3998 9.85193H4.8463C3.82592 9.85338 2.83209 10.1773 2.00677 10.7773C1.18145 11.3773 0.566862 12.2228 0.250783 13.193C-0.0652958 14.1632 -0.0666948 15.2085 0.246786 16.1795C0.560267 17.1506 1.17259 17.9977 1.9963 18.5999H1.9903Z" />
                                                    </svg>
                                                ))}
                                                {index.testimonial_rate_minues.map((index) => (
                                                    <svg key={index} className="testimonials-border-star" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                                        <g clipPath="url(#clip0_913_7659)">
                                                            <path d="M35.7538 13.1909C35.447 12.2143 34.834 11.3623 34.0055 10.761C33.177 10.1597 32.177 9.84093 31.1533 9.85193H24.5998L22.6093 3.64793C22.2963 2.67137 21.6812 1.81945 20.8528 1.21503C20.0243 0.610606 19.0253 0.284912 17.9998 0.284912C16.9743 0.284912 15.9753 0.610606 15.1468 1.21503C14.3184 1.81945 13.7033 2.67137 13.3903 3.64793L11.3998 9.85193H4.8463C3.82592 9.85338 2.83209 10.1773 2.00677 10.7773C1.18145 11.3773 0.566862 12.2228 0.250783 13.193C-0.0652958 14.1632 -0.0666948 15.2085 0.246786 16.1795C0.560267 17.1506 1.17259 17.9977 1.9963 18.5999L7.3303 22.4999L5.3023 28.7804C4.97457 29.7545 4.97042 30.8084 5.29047 31.7851C5.61051 32.7617 6.23762 33.6087 7.0783 34.1999C7.90458 34.8101 8.90589 35.137 9.93303 35.1318C10.9602 35.1267 11.9582 34.7898 12.7783 34.1714L17.9998 30.3284L23.2228 34.1669C24.0476 34.7736 25.0435 35.1031 26.0674 35.1081C27.0912 35.1131 28.0903 34.7933 28.921 34.1947C29.7516 33.5961 30.371 32.7495 30.6902 31.7766C31.0094 30.8038 31.0119 29.7548 30.6973 28.7804L28.6693 22.4999L34.0093 18.5999C34.8424 18.0053 35.4619 17.1581 35.7761 16.1839C36.0903 15.2098 36.0825 14.1603 35.7538 13.1909ZM32.2393 16.1774L26.0233 20.7209C25.768 20.9072 25.578 21.1693 25.4805 21.4699C25.383 21.7705 25.3829 22.0943 25.4803 22.3949L27.8428 29.6999C27.9624 30.0704 27.9613 30.4693 27.8399 30.8392C27.7184 31.2091 27.4828 31.5309 27.1669 31.7585C26.8511 31.986 26.4711 32.1076 26.0818 32.1056C25.6925 32.1036 25.3139 31.9782 25.0003 31.7474L18.8878 27.2474C18.6304 27.0583 18.3192 26.9563 17.9998 26.9563C17.6804 26.9563 17.3693 27.0583 17.1118 27.2474L10.9993 31.7474C10.6859 31.9813 10.3062 32.1093 9.9152 32.1128C9.52419 32.1164 9.14221 31.9953 8.82465 31.7672C8.50708 31.539 8.27042 31.2157 8.149 30.844C8.02757 30.4723 8.02767 30.0716 8.1493 29.6999L10.5193 22.3949C10.6167 22.0943 10.6166 21.7705 10.5191 21.4699C10.4216 21.1693 10.2316 20.9072 9.9763 20.7209L3.7603 16.1774C3.44726 15.9482 3.21465 15.626 3.09571 15.2566C2.97677 14.8873 2.97758 14.4899 3.09803 14.1211C3.21847 13.7523 3.45239 13.4309 3.76636 13.203C4.08034 12.9751 4.45832 12.8522 4.8463 12.8519H12.4963C12.8139 12.8519 13.1233 12.7511 13.3799 12.564C13.6365 12.377 13.8271 12.1133 13.9243 11.8109L16.2493 4.56443C16.3686 4.19361 16.6026 3.87022 16.9174 3.6408C17.2322 3.41139 17.6117 3.28779 18.0013 3.28779C18.3909 3.28779 18.7704 3.41139 19.0852 3.6408C19.4 3.87022 19.634 4.19361 19.7533 4.56443L22.0783 11.8109C22.1755 12.1133 22.3661 12.377 22.6227 12.564C22.8794 12.7511 23.1887 12.8519 23.5063 12.8519H31.1563C31.5443 12.8522 31.9223 12.9751 32.2362 13.203C32.5502 13.4309 32.7841 13.7523 32.9046 14.1211C33.025 14.4899 33.0258 14.8873 32.9069 15.2566C32.788 15.626 32.5553 15.9482 32.2423 16.1774H32.2393Z" fill="#E4F7F3" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_913_7659">
                                                                <rect width="36" height="36" fill="black" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='union-icon'>
                                        <img src="/icon/union.svg" className='union-svg' />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
                <Footer />
            </div>


        </>

    )
}

export default ClientTestimonials