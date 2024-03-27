import Navbar from '../../Navbar/Navbar'
import Headline from '../../Headline/Headline'
import FAQs from '../../Home/FAQs/FAQs.jsx';
import Footer from '../../Home/Footer/Footer.jsx';
import Banner from '../../Banner/Banner.jsx';
import './Designing.css'

const Designing = () => {

    const faqsArray = [
        {
            id: 1,
            question: 'Q. What types of mobile apps can your development company create?',
            answer: `Our mobile app development company specializes in creating a wide range of mobile applications, including native apps for iOS and Android, cross-platform apps, enterprise apps, e-commerce apps, and more. We cater to diverse industry needs.`
        },
        {
            id: 2,
            question: 'Q. What platforms do you develop mobile apps for?',
            answer: `We develop mobile apps for both iOS and Android platforms. Our team is experienced in utilizing native development tools as well as cross-platform frameworks like React Native and Flutter to ensure broad compatibility and reach.`
        },
        {
            id: 3,
            question: 'Q. Can you assist with the entire app development lifecycle, from ideation to deployment?',
            answer: `Absolutely. We offer end-to-end mobile app development services, starting from ideation and design to development, testing, deployment, and ongoing support. Our comprehensive approach ensures a seamless and successful app development journey.            `
        },
        {
            id: 4,
            question: 'Q. How do you approach the UI/UX design of mobile apps?',
            answer: `Our UI/UX design process is user-centric, focusing on creating visually appealing and intuitive interfaces. We conduct user research, wireframing, and prototyping to ensure that the app not only looks great but also provides a positive user experience.`
        },
        {
            id: 5,
            question: 'Q. Can you integrate third-party APIs and services into mobile apps?',
            answer: `Yes, we have extensive experience integrating third-party APIs and services to enhance the functionality of mobile apps. Whether it's payment gateways, social media integration, or other APIs, we can seamlessly incorporate them into your app.`
        },
        {
            id: 6,
            question: 'Q. How do you handle post-launch support and maintenance for mobile apps?',
            answer: `We provide ongoing support and maintenance services after the app is launched. This includes addressing any issues, implementing updates, and ensuring that the app continues to perform optimally in the ever-evolving mobile landscape.`
        },
        {
            id: 7,
            question: 'Q. Can you provide examples of successful mobile apps you have developed in the past?',
            answer: `Certainly. Our portfolio showcases a diverse range of successful mobile apps across various industries. Feel free to explore our case studies to gain insights into the quality and innovation we bring to each project.`
        },


    ]

    const bannerObject = {
        boxSide: 'right',
        backgroundBanner: `/frame/designing-page-banner.webp`,
        bannerTitle: `Designing`,
        bannerTitleSpan: ``,
        bannerContent: `Take a step into the world of creativity and new ideas with the best design and development services from  HKAPPS. We specialize in creating visually appealing and user-centric designs that enhance your online presence, as a leading provider of Android application and website development services. Whenever you are interested in developing engaging mobile applications or engaging websites, our team of professionals is committed to bringing your ideas to life with precision and flair. Experience the endless possibilities that design presents with the help of HKAPPS.`
    }

    return (
        <>
            <Navbar activeNav="Services" />
            <Headline headlineText1="Mobile App Development" headlineText2="IT Services and IT Consulting" />
            <Banner bannerObject={bannerObject} />

            <div className='website-main-section'>
                <div className='website-innner-section'>
                    <div className='shopify-description'>
                        <div className='we-are-text-1'>
                            Our Custom Design Development Process
                        </div>
                    </div>
                </div>
            </div>

            <div className='designing-main-section'>
                <div className='website-main-section'>
                    <div className='website-innner-section'>
                        <div className='designing-inner-main-bx-section'>
                            <div className='designing-inner-main-bx'>
                                <div className='designing-inner-sm-bx'>
                                    <div className='designing-content-bx'>
                                        <div>
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.704 40H3.00658C1.34872 40 0 38.6615 0 37.0163V34.2118C0 32.8135 0.354872 31.4296 1.02624 30.2096L3.27265 31.4459C2.80906 32.2881 2.5641 33.2446 2.5641 34.2118V37.0163C2.5641 37.2398 2.77085 37.4359 3.00658 37.4359H13.704C13.8153 37.4358 13.9219 37.3915 14.0006 37.3129C14.0792 37.2342 14.1235 37.1276 14.1236 37.0163V34.2118C14.1236 33.1197 13.8163 32.0571 13.2351 31.1387L15.4018 29.7675C16.2431 31.0967 16.6877 32.6335 16.6877 34.2118V37.0163C16.6877 38.6615 15.3492 40 13.704 40ZM31.1387 15.0671L27.3167 12.1783C27.2473 12.1258 27.1546 12.0932 27.0747 12.0932H18.2511C16.6322 12.0932 15.315 10.7816 15.315 9.16949V2.9394C15.315 1.31863 16.6321 0 18.2511 0H30.2277C31.8632 0 33.1938 1.31863 33.1938 2.9394V14.0444C33.1938 15.5271 31.657 15.641 31.1387 15.0671ZM18.2511 2.5641C18.0426 2.5641 17.8791 2.72897 17.8791 2.9394V9.16957C17.8791 9.37462 18.0391 9.52923 18.2511 9.52923H27.0747C27.7128 9.52923 28.3479 9.74359 28.8628 10.1329L30.6297 11.4684V2.9394C30.6297 2.73949 30.4419 2.5641 30.2277 2.5641H18.2511ZM26.3195 39.9999H37.017C38.6622 39.9999 40.0007 38.6615 40.0006 37.0163V34.2117C40.0006 32.6334 39.556 31.0966 38.7147 29.7675L36.548 31.1387C37.1292 32.057 37.4365 33.1197 37.4365 34.2117V37.0163C37.4364 37.1275 37.3921 37.2342 37.3135 37.3128C37.2348 37.3915 37.1281 37.4357 37.0169 37.4358H26.3195C26.0837 37.4358 25.877 37.2398 25.877 37.0163V34.2117C25.877 33.2445 26.1219 32.2881 26.5855 31.4458L24.3391 30.2095C23.6678 31.4295 23.3129 32.8134 23.3129 34.2117V37.0163C23.3129 38.6615 24.6617 39.9999 26.3195 39.9999ZM2.73382 25.9073C2.73382 29.0069 5.25553 31.5285 8.35511 31.5285C11.4546 31.5285 13.9764 29.0069 13.9764 25.9073C13.9764 22.8077 11.4547 20.286 8.35511 20.286C5.25553 20.286 2.73382 22.8077 2.73382 25.9073ZM5.29793 25.9074C5.29793 24.2216 6.66938 22.8502 8.35511 22.8502C10.0407 22.8502 11.4123 24.2216 11.4123 25.9074C11.4123 27.5931 10.0408 28.9645 8.35511 28.9645C6.66938 28.9645 5.29793 27.5931 5.29793 25.9074ZM26.0473 25.9073C26.0473 29.0069 28.569 31.5285 31.6686 31.5285C34.7681 31.5285 37.2899 29.0069 37.2899 25.9073C37.2899 22.8077 34.7682 20.286 31.6686 20.286C28.569 20.286 26.0473 22.8077 26.0473 25.9073ZM28.6114 25.9074C28.6114 24.2216 29.9829 22.8502 31.6686 22.8502C33.3542 22.8502 34.7258 24.2216 34.7258 25.9074C34.7258 27.5931 33.3543 28.9645 31.6686 28.9645C29.9829 28.9645 28.6114 27.5931 28.6114 25.9074ZM6.80679 7.04181V18.103C6.98029 19.7151 8.63405 19.2975 8.8608 19.1265L12.669 16.2545C12.7322 16.2067 12.8233 16.177 12.9069 16.177H21.6957V13.6129H12.9069C12.2649 13.6129 11.6312 13.8247 11.1239 14.2082L9.37089 15.5303V7.04181C9.37089 6.83574 9.55935 6.64805 9.76636 6.64805H13.1782V4.08395H9.76636C8.13439 4.08395 6.80679 5.41079 6.80679 7.04181ZM27.9979 4.84959H20.5107V7.41369H27.9979V4.84959Z" fill="#007B42" />
                                            </svg>
                                        </div>
                                        <div className='designing-content-bx-title'>
                                            Initial Consultation
                                        </div>
                                        <div className='designing-content-bx-description'>
                                            Understand the brand identity, objectives, and target audience in order to align design strategy with vision and goals.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='designing-inner-main-bx'>
                                <div className='designing-inner-sm-bx'>
                                    <div className='designing-content-bx'>
                                        <div>
                                            <svg width="30" height="40" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.02521 2.98114C8.61768 1.04527 11.7666 -0.000458356 15.0021 1.50712e-07C18.2372 9.56238e-05 21.3855 1.04605 23.9774 2.98183C26.5694 4.91762 28.466 7.63948 29.3845 10.7414C30.3029 13.8433 30.1939 17.159 29.0737 20.1939C27.9536 23.2288 25.8823 25.8203 23.1688 27.5817C22.5597 27.9432 22.0804 28.4879 21.7991 29.1379C21.5178 29.7879 21.4488 30.5102 21.6021 31.2017L21.7621 31.8283C22.0048 32.7978 22.0233 33.8098 21.8162 34.7875C21.6091 35.7652 21.1819 36.6828 20.567 37.4706C19.9521 38.2584 19.1657 38.8956 18.2675 39.3339C17.3694 39.7722 16.3832 40 15.3838 40H14.6205C13.6215 40.0001 12.6356 39.7725 11.7377 39.3346C10.8399 38.8967 10.0536 38.26 9.43857 37.4728C8.82358 36.6856 8.39604 35.7685 8.18844 34.7914C7.98084 33.8142 7.99863 32.8026 8.24046 31.8333L8.40213 31.1967C8.55521 30.5061 8.48613 29.7849 8.20477 29.1359C7.92341 28.487 7.44415 27.9436 6.83546 27.5833C4.12123 25.8222 2.04918 23.2307 0.928509 20.1955C-0.192162 17.1603 -0.30138 13.844 0.617153 10.7416C1.53569 7.63924 3.43273 4.91701 6.02521 2.98114ZM16.8068 36.3408C17.2494 36.125 17.6367 35.8105 17.9388 35.4217C18.2434 35.0341 18.455 34.5817 18.5573 34.0994C18.6596 33.6172 18.6498 33.1179 18.5288 32.64L18.3705 32.0133C18.3536 31.945 18.3444 31.8766 18.3352 31.8079C18.3289 31.761 18.3226 31.714 18.3138 31.6667H11.6921C11.6818 31.7166 11.6751 31.7669 11.6684 31.8172C11.6599 31.881 11.6513 31.9449 11.6355 32.0083L11.4755 32.645C11.3567 33.1225 11.3484 33.6208 11.4509 34.1021C11.5535 34.5834 11.7644 35.0349 12.0675 35.4226C12.3706 35.8102 12.7581 36.1237 13.2004 36.3392C13.6428 36.5548 14.1284 36.6668 14.6205 36.6667H15.3855C15.8779 36.6681 16.3641 36.5566 16.8068 36.3408ZM18.5655 28.3333C19.0752 26.8752 20.0556 25.628 21.3521 24.7883C23.4631 23.4187 25.0747 21.4032 25.9464 19.0427C26.8181 16.6821 26.9032 14.1029 26.1891 11.69C25.4749 9.2771 23.9997 7.15977 21.9836 5.65394C19.9675 4.14811 17.5185 3.3345 15.0021 3.3345C12.4857 3.3345 10.0368 4.14811 8.02069 5.65394C6.00458 7.15977 4.52938 9.2771 3.8152 11.69C3.10102 14.1029 3.18613 16.6821 4.05784 19.0427C4.92955 21.4032 6.54113 23.4187 8.65213 24.7883C9.94893 25.6277 10.9294 26.875 11.4388 28.3333H18.5655ZM19.5137 15.4882C19.8262 15.8007 20.0018 16.2246 20.0018 16.6667C19.9988 17.6974 19.6767 18.7019 19.0799 19.5422C18.483 20.3826 17.6407 21.0176 16.6685 21.36V23.3333C16.6685 23.7754 16.4929 24.1993 16.1803 24.5118C15.8678 24.8244 15.4439 25 15.0018 25C14.5598 25 14.1359 24.8244 13.8233 24.5118C13.5108 24.1993 13.3352 23.7754 13.3352 23.3333V21.36C12.363 21.0176 11.5206 20.3826 10.9238 19.5422C10.327 18.7019 10.0049 17.6974 10.0018 16.6667C10.0018 16.2246 10.1774 15.8007 10.49 15.4882C10.8025 15.1756 11.2265 15 11.6685 15C12.1105 15 12.5344 15.1756 12.847 15.4882C13.1596 15.8007 13.3352 16.2246 13.3352 16.6667C13.3352 17.1087 13.5108 17.5326 13.8233 17.8452C14.1359 18.1577 14.5598 18.3333 15.0018 18.3333C15.4439 18.3333 15.8678 18.1577 16.1803 17.8452C16.4929 17.5326 16.6685 17.1087 16.6685 16.6667C16.6685 16.2246 16.8441 15.8007 17.1567 15.4882C17.4692 15.1756 17.8931 15 18.3352 15C18.7772 15 19.2011 15.1756 19.5137 15.4882Z" fill="#007B42" />
                                            </svg>
                                        </div>
                                        <div className='designing-content-bx-title'>
                                            Information and Inspiration
                                        </div>
                                        <div className='designing-content-bx-description'>
                                            Do a lot of research on the industry, your competitors, and new trends to learn more about them.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='designing-inner-main-bx'>
                                <div className='designing-inner-sm-bx'>
                                    <div className='designing-content-bx'>
                                        <div>
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M38.2716 9.90526C38.4232 9.9682 38.5858 10.0004 38.75 10C38.9976 10.0004 39.2397 9.92737 39.4456 9.79005C39.6516 9.65273 39.8122 9.45734 39.907 9.22866C40.0018 8.99997 40.0265 8.74829 39.9781 8.50552C39.9297 8.26275 39.8103 8.03982 39.635 7.865L37.8617 6.09173C38.1629 5.51567 38.3333 4.86078 38.3333 4.16667C38.3333 1.86833 36.465 0 34.1667 0C31.8683 0 30 1.86833 30 4.16667C30 6.465 31.8683 8.33333 34.1667 8.33333C34.8617 8.33333 35.5173 8.16249 36.0939 7.86058L37.8667 9.63333C37.9823 9.74989 38.1199 9.84231 38.2716 9.90526ZM2.91667 10H23.75C25.3583 10 26.6667 8.69167 26.6667 7.08333V2.91667C26.6667 1.30833 25.3583 0 23.75 0H2.91667C1.30833 0 0 1.30833 0 2.91667V7.08333C0 8.69167 1.30833 10 2.91667 10ZM2.62204 2.62204C2.70018 2.5439 2.80616 2.5 2.91667 2.5H23.75C23.8605 2.5 23.9665 2.5439 24.0446 2.62204C24.1228 2.70018 24.1667 2.80616 24.1667 2.91667V7.08333C24.1667 7.19384 24.1228 7.29982 24.0446 7.37796C23.9665 7.4561 23.8605 7.5 23.75 7.5H2.91667C2.68667 7.5 2.5 7.31333 2.5 7.08333V2.91667C2.5 2.80616 2.5439 2.70018 2.62204 2.62204ZM0 20C0 22.7567 2.24333 25 5 25C7.75667 25 10 22.7567 10 20C10 17.2433 7.75667 15 5 15C2.24333 15 0 17.2433 0 20ZM2.5 20C2.5 18.6217 3.62167 17.5 5 17.5C6.37833 17.5 7.5 18.6217 7.5 20C7.5 21.3783 6.37833 22.5 5 22.5C3.62167 22.5 2.5 21.3783 2.5 20ZM0 35C0 37.7567 2.24333 40 5 40C7.75667 40 10 37.7567 10 35C10 32.2433 7.75667 30 5 30C2.24333 30 0 32.2433 0 35ZM2.5 35C2.5 33.6217 3.62167 32.5 5 32.5C6.37833 32.5 7.5 33.6217 7.5 35C7.5 36.3783 6.37833 37.5 5 37.5C3.62167 37.5 2.5 36.3783 2.5 35ZM13.3333 37.0833C13.3333 37.8177 13.6061 38.4895 14.0556 39.0028C14.1318 39.1073 14.224 39.1998 14.3292 39.2766C14.8427 39.7268 15.515 40 16.25 40H37.0833C37.8149 40 38.4843 39.7293 38.9969 39.2829C39.1092 39.2024 39.2069 39.1043 39.2865 38.9927C39.7308 38.4807 40 37.8129 40 37.0833V16.25C40 15.5148 39.7266 14.8422 39.2761 14.3287C39.2384 14.2773 39.1968 14.2287 39.1515 14.1834C39.1066 14.1385 39.0584 14.0971 39.0074 14.0597C38.4936 13.6077 37.8199 13.3333 37.0833 13.3333H16.25C15.5153 13.3333 14.8432 13.6064 14.3298 14.0563C14.2779 14.0942 14.229 14.1361 14.1834 14.1817C14.1382 14.2269 14.0966 14.2754 14.059 14.3267C13.6075 14.8405 13.3333 15.5138 13.3333 16.25V37.0833ZM15.8333 17.6V35.7316L24.8995 26.6661L15.8333 17.6ZM26.6674 28.434L17.6001 37.5H35.7333L26.6674 28.434ZM37.5 35.73L28.4358 26.6658L37.5 17.603V35.73ZM26.6679 24.8979L17.6033 15.8333H35.7331L26.6679 24.8979ZM32.9882 2.98816C33.3007 2.67559 33.7246 2.5 34.1667 2.5C34.6087 2.5 35.0326 2.67559 35.3452 2.98816C35.6577 3.30072 35.8333 3.72464 35.8333 4.16667C35.8333 4.60869 35.6577 5.03262 35.3452 5.34518C35.0326 5.65774 34.6087 5.83333 34.1667 5.83333C33.7246 5.83333 33.3007 5.65774 32.9882 5.34518C32.6756 5.03262 32.5 4.60869 32.5 4.16667C32.5 3.72464 32.6756 3.30072 32.9882 2.98816Z" fill="#007B42" />
                                            </svg>
                                        </div>
                                        <div className='designing-content-bx-title'>
                                            Conceptualization and Wireframing
                                        </div>
                                        <div className='designing-content-bx-description'>
                                            Taking ideas and turning them into real design concepts and wireframes for the best user experience.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='designing-inner-main-bx'>
                                <div className='designing-inner-sm-bx'>
                                    <div className='designing-content-bx'>
                                        <div>
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M35.3125 24.6875H34.0625V17.1875C34.0625 14.6028 31.9597 12.5 29.375 12.5H27.8125V4.6875C27.8125 2.10281 25.7097 0 23.125 0H4.6875C2.10281 0 0 2.10281 0 4.6875V10.9375C0 13.5222 2.10281 15.625 4.6875 15.625H6.25V23.4375C6.25 25.9316 8.26516 27.8125 10.9375 27.8125H12.5V35.3125C12.5 37.8972 14.6028 40 17.1875 40H35.3125C37.8972 40 40 37.8972 40 35.3125V29.375C40 26.7903 37.8972 24.6875 35.3125 24.6875ZM4.6875 12.5C3.82594 12.5 3.125 11.7991 3.125 10.9375V4.6875C3.125 3.82594 3.82594 3.125 4.6875 3.125H23.125C23.9866 3.125 24.6875 3.82594 24.6875 4.6875V16.5403L23.125 18.1028L21.5625 16.5403V12.5H4.6875ZM10.9375 24.6875C10.2167 24.6875 9.375 24.3602 9.375 23.4375V15.625H18.4375V17.8347L23.125 22.5222L27.8125 17.8347V15.625H29.375C30.2366 15.625 30.9375 16.3259 30.9375 17.1875V28.7278L29.375 30.2903L27.8125 28.7278V24.6875H10.9375ZM36.875 35.3125C36.875 36.1741 36.1741 36.875 35.3125 36.875H17.1875C16.3259 36.875 15.625 36.1741 15.625 35.3125V27.8125H24.6875V30.0222L29.375 34.7097L34.0625 30.0222V27.8125H35.3125C36.1741 27.8125 36.875 28.5134 36.875 29.375V35.3125ZM21.5625 6.25H6.25V9.375H21.5625V6.25Z" fill="#007B42" />
                                            </svg>
                                        </div>
                                        <div className='designing-content-bx-title'>
                                            Visual structure
                                        </div>
                                        <div className='designing-content-bx-description'>
                                            Using eye-catching images, colour palettes, fonts, and graphics to bring your brand to life.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='designing-inner-main-bx'>
                                <div className='designing-inner-sm-bx'>
                                    <div className='designing-content-bx'>
                                        <div>
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M26.0001 36.976C32.9913 34.505 38.0002 27.8374 38.0002 20C38.0002 10.0588 29.9413 1.99989 20 1.99989L26.0001 7.99997" stroke="#007B42" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M14.0001 3.02418C7.00885 5.49516 2 12.1627 2 20.0001C2 29.9413 10.0589 38.0002 20.0002 38.0002L14.0001 32.0002" stroke="#007B42" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M25.9923 20.0004C25.9923 23.3141 23.306 26.0005 19.9922 26.0005C16.6785 26.0005 13.9922 23.3141 13.9922 20.0004C13.9922 16.6867 16.6785 14.0003 19.9922 14.0003C23.306 14.0003 25.9923 16.6867 25.9923 20.0004Z" stroke="#007B42" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                        <div className='designing-content-bx-title'>
                                            Iterative Concept Refinement
                                        </div>
                                        <div className='designing-content-bx-description'>
                                            Making small changes to the design with the help of feedback and teamwork.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='designing-inner-main-bx'>
                                <div className='designing-inner-sm-bx'>
                                    <div className='designing-content-bx'>
                                        <div>
                                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2 28.199V28.4407C2 32.1851 5.03534 35.2204 8.77966 35.2204H35.2203C38.9647 35.2204 42 32.1851 42 28.4407V11.8306C42 8.08624 38.9647 5.0509 35.2203 5.0509H22M35.2306 25.0509L22.0003 11.8206" stroke="#007B42" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M35.2306 20.2569V25.0508H30.4367M26.7942 11.8206H22.0003V16.6145M22 42V35.2203M28.7797 42H15.2203M5.38983 22H11.8305C13.7026 22 15.2203 20.4823 15.2203 18.6102V5.38983C15.2203 3.51771 13.7026 2 11.8305 2H5.38983C3.51771 2 2 3.51771 2 5.38983V18.6102C2 20.4823 3.51771 22 5.38983 22Z" stroke="#007B42" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                        <div className='designing-content-bx-title'>
                                            Implementing responsive
                                        </div>
                                        <div className='designing-content-bx-description'>
                                            Designs that are visually appealing and adaptable to different screen sizes and devices.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='designing-inner-main-bx'>
                                <div className='designing-inner-sm-bx'>
                                    <div className='designing-content-bx'>
                                        <div>
                                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M25.0954 22.8904L20.1094 23.8876L21.1066 18.9016C21.2378 18.2453 21.5604 17.6426 22.0336 17.1694L36.2102 2.99286C37.534 1.66905 39.6804 1.66905 41.0042 2.99286C42.328 4.31667 42.328 6.46303 41.0042 7.78676L26.8275 21.9634C26.3543 22.4366 25.7516 22.7591 25.0954 22.8904Z" stroke="#007B42" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M20.8389 8.10168H8.77966C5.03542 8.10168 2 11.1369 2 14.8813V31.8305C2 35.5747 5.03542 38.6102 8.77966 38.6102V42C11.2827 42 13.4446 40.628 14.619 38.6102H35.2203C38.9646 38.6102 42 35.5747 42 31.8305V15.7027M8.77966 31.8305H32.5085M8.77966 25.0508H12.1695M8.77966 18.2712H12.1695" stroke="#007B42" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                        <div className='designing-content-bx-title'>
                                            User Testing and Feedback
                                        </div>
                                        <div className='designing-content-bx-description'>
                                            Putting users through thorough testing to get useful feedback and information.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='designing-inner-main-bx'>
                                <div className='designing-inner-sm-bx'>
                                    <div className='designing-content-bx'>
                                        <div>
                                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.2746 35.2203H22.8165C24.6886 35.2203 26.2063 33.7026 26.2063 31.8305C26.2063 29.9584 24.6886 28.4407 22.8165 28.4407H14.9981C14.1078 28.4407 13.2262 28.616 12.4036 28.9568C11.5811 29.2975 10.8337 29.7969 10.2041 30.4264C9.30514 31.3254 8.42472 31.8305 7.15328 31.8305H2.35938V42H24.2088C26.0069 42 27.7313 41.2857 29.0027 40.0142L41.6368 27.3802C38.9891 24.7326 34.6965 24.7326 32.0489 27.3802L25.3763 34.0528" stroke="#007B42" stroke-width="3" stroke-miterlimit="10" />
                                                <path d="M20.6617 22.339C15.0539 22.339 10.4922 17.7773 10.4922 12.1695C10.4922 6.56169 15.0539 1.99999 20.6617 1.99999C26.2695 1.99999 30.8312 6.56169 30.8312 12.1695C30.8312 17.7773 26.2695 22.339 20.6617 22.339Z" stroke="#007B42" stroke-width="3" stroke-miterlimit="10" />
                                                <path d="M17.2734 13.4008L18.9684 15.0957L24.0531 10.011" stroke="#007B42" stroke-width="3" stroke-miterlimit="10" stroke-linecap="square" />
                                            </svg>
                                        </div>
                                        <div className='designing-content-bx-title'>
                                            The conclusion and Delivery
                                        </div>
                                        <div className='designing-content-bx-description'>
                                            Getting deliverables like design assets, style guides, or prototypes ready to be handed over.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='website-main-section'>
                <div className='website-innner-section'>
                    <FAQs faqsArray={faqsArray} />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Designing