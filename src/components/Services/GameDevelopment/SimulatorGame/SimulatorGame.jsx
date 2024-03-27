import React from 'react'
import Navbar from '../../../Navbar/Navbar.jsx'
import Headline from '../../../Headline/Headline'
import Banner from '../../../Banner/Banner.jsx';
import Footer from '../../../Home/Footer/Footer.jsx';
import './SimulatorGame.css'

const SimulatorGame = () => {

    const bannerObject = {
        boxSide: 'left',
        backgroundBanner: `/frame/simulatorGame-page-banner.webp`,
        bannerTitle: `Introduction`,
        bannerTitleSpan: ``,
        bannerContent: `A subgenre of video games called simulation games is made to simulate real-world tasks.In the world of simulator games, users take control of a variety of activities, such as operating heavy machinery, flying, running farms, and going through realistic scenarios. The attraction of simulator games is their capacity to imitate real-world phenomena, offering players an immersive and realistic online experience.`
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
                            Simulator Game
                        </div>
                        <div className='shopify-description-text'>
                            Video games of the simulator genre involve players in lifelike virtual worlds, allowing them to explore and participate in a variety of real-world activities. These games provide a distinctive fusion of modeling and interaction that goes beyond traditional entertainment.
                        </div>
                    </div>
                    <div className='data-modeling-section'>
                        <div className='simulator-modeling-box'>
                            <div className='simulator-modeling-box-top'>
                            </div>
                            <div className='simulator-modeling-box-bottom'>
                                <div className='simulator-modeling-icon'>
                                    <svg className='simulator-modeling-icon-svg' xmlns="http://www.w3.org/2000/svg" width="71" height="70" viewBox="0 0 71 70" fill="none">
                                        <rect x="0.5" width="70" height="70" rx="35" fill="white" />
                                        <path d="M51.2324 33.3574C51.2324 31.8004 50.5784 30.3969 49.5307 29.4047C49.2143 29.1049 49.0691 28.658 49.1489 28.2295C49.4132 26.8109 49.1173 25.2911 48.2022 24.0315C47.287 22.7719 45.933 22.0208 44.5021 21.8338C44.0699 21.7774 43.6898 21.5012 43.5025 21.1076C42.8825 19.8046 41.7498 18.7488 40.2691 18.2677C38.7884 17.7866 37.2515 17.9749 35.984 18.6646C35.6011 18.873 35.1312 18.873 34.7484 18.6646C33.4809 17.9749 31.944 17.7866 30.4633 18.2677C28.9826 18.7488 27.8498 19.8045 27.2299 21.1075C27.0426 21.5011 26.6624 21.7773 26.2302 21.8338C24.7994 22.0208 23.4454 22.7719 22.5302 24.0315C21.6151 25.2911 21.3192 26.8109 21.5835 28.2295C21.6633 28.658 21.5181 29.1049 21.2016 29.4047C20.154 30.3969 19.5 31.8004 19.5 33.3574C19.5 34.9143 20.154 36.3178 21.2016 37.3101C21.5181 37.6098 21.6633 38.0567 21.5835 38.4852C21.3192 39.9038 21.6151 41.4237 22.5302 42.6833C23.4453 43.9429 24.7994 44.6939 26.2302 44.8809C26.6624 44.9374 27.0426 45.2136 27.2299 45.6072C27.8499 46.9102 28.9826 47.9659 30.4633 48.447C31.944 48.9281 33.4809 48.7399 34.7484 48.0501C35.1312 47.8418 35.6011 47.8418 35.984 48.0501C37.2515 48.7398 38.7884 48.9281 40.2691 48.447C41.7498 47.9659 42.8825 46.9102 43.5025 45.6072C43.6898 45.2136 44.0699 44.9374 44.5021 44.8809C45.933 44.6939 47.287 43.9429 48.2022 42.6833C49.1173 41.4237 49.4132 39.9038 49.1489 38.4852C49.0691 38.0567 49.2143 37.6098 49.5307 37.3101C50.5784 36.3178 51.2324 34.9143 51.2324 33.3574Z" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" />
                                        <path d="M35.3677 43.233C40.8218 43.233 45.2432 38.8116 45.2432 33.3575C45.2432 27.9034 40.8218 23.4819 35.3677 23.4819C29.9136 23.4819 25.4922 27.9034 25.4922 33.3575C25.4922 38.8116 29.9136 43.233 35.3677 43.233Z" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" />
                                        <path d="M30.5854 33.5178V33.5178C32.2868 35.2192 35.0454 35.2192 36.7468 33.5178L39.8276 30.437M43.7728 44.9272L45.3915 48.2726C46.4497 50.4594 44.8566 53 42.4272 53V53C41.1644 53 40.0129 52.2779 39.4629 51.1412L38.2845 48.7059M26.961 44.9272L25.3422 48.2726C24.284 50.4594 25.8771 53 28.3065 53V53C29.5693 53 30.7208 52.2779 31.2708 51.1413L32.4492 48.7059" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" />
                                    </svg>
                                </div>
                                <div className='simulator-modeling-title'>Realism and Authenticity</div>
                                <div className='simulator-modeling-content'>
                                    Simulator games are known for their dedication to realism. These games provide players with a realistic and convincing experience by closely mimicking real-world activities, settings, and physics.
                                </div>
                            </div>
                        </div>
                        <div className='simulator-modeling-box'>
                            <div className='simulator-modeling-box-top'>
                            </div>
                            <div className='simulator-modeling-box-bottom'>
                                <div className='simulator-modeling-icon'>
                                    <svg className='simulator-modeling-icon-svg' xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <rect width="70" height="70" rx="35" fill="white" />
                                        <path d="M35.5 46.0295V52.8516" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" />
                                        <path d="M28.082 52.8516H42.9125" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" />
                                        <path d="M27.1504 34.4415C26.8117 34.2721 26.5977 33.9258 26.5977 33.5471V23.067C26.5977 22.6883 26.8117 22.342 27.1504 22.1726L35.0487 18.2235C35.3303 18.0827 35.6616 18.0827 35.9432 18.2235L43.8415 22.1726C44.1803 22.342 44.3943 22.6883 44.3943 23.067V33.5471C44.3943 33.9258 44.1803 34.2721 43.8415 34.4415L35.9432 38.3907C35.6616 38.5314 35.3303 38.5314 35.0487 38.3907L27.1504 34.4415Z" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" />
                                        <path d="M35.5 26.8982V38.6143" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" />
                                        <path d="M26.5977 22.4493L35.496 26.8984" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" />
                                        <path d="M44.3983 22.4493L35.5 26.8984" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" />
                                        <path d="M48.8475 28.2327H50.0339C51.6721 28.2327 53 29.5607 53 31.1988V43.0632C53 44.7013 51.6721 46.0293 50.0339 46.0293H20.9661C19.328 46.0293 18 44.7013 18 43.0632V31.1988C18 29.5607 19.328 28.2327 20.9661 28.2327H22.1525" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" />
                                    </svg>
                                </div>
                                <div className='simulator-modeling-title'>
                                    Diverse Simulations
                                </div>
                                <div className='simulator-modeling-content'>
                                    There are many different types of tasks and scenarios in simulator games. The genre offers a wide range of experiences to suit a variety of interests, from agricultural, building, and life simulations to driving and flying simulators.
                                </div>
                            </div>
                        </div>
                        <div className='simulator-modeling-box'>
                            <div className='simulator-modeling-box-top'>
                            </div>
                            <div className='simulator-modeling-box-bottom'>
                                <div className='simulator-modeling-icon'>
                                    <svg className='simulator-modeling-icon-svg-2' xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <rect width="70" height="70" rx="35" fill="white" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M35.5 40.3525L37.4412 39.3812C37.5882 39.3079 37.7481 39.2642 37.9119 39.2526C38.0757 39.241 38.2402 39.2618 38.396 39.3138C38.5518 39.3658 38.6958 39.448 38.8198 39.5557C38.9438 39.6633 39.0454 39.7943 39.1188 39.9412C39.1921 40.0882 39.2358 40.2481 39.2474 40.4119C39.259 40.5757 39.2382 40.7402 39.1862 40.896C39.1342 41.0518 39.052 41.1958 38.9443 41.3198C38.8367 41.4438 38.7057 41.5454 38.5588 41.6188L36.0588 42.8688C35.8853 42.9554 35.694 43.0006 35.5 43.0006C35.306 43.0006 35.1147 42.9554 34.9412 42.8688L32.4413 41.6188C32.1445 41.4706 31.9188 41.2106 31.8138 40.896C31.7088 40.5814 31.7331 40.238 31.8812 39.9412C32.0294 39.6445 32.2894 39.4188 32.604 39.3138C32.9186 39.2088 33.262 39.2331 33.5587 39.3812L35.5 40.3525ZM49.25 44.25C49.2464 44.3912 49.2185 44.5308 49.1675 44.6625C51.7262 45.5025 53 46.6 53 48C53 52.86 37.2913 53 35.5 53C33.7087 53 18 52.86 18 48C18 46.2475 19.955 44.9637 23.98 44.0725C24.3039 44.0009 24.643 44.0609 24.9226 44.2393C25.2023 44.4177 25.3996 44.6999 25.4712 45.0238C25.5429 45.3476 25.4829 45.6867 25.3045 45.9664C25.1261 46.246 24.8439 46.4434 24.52 46.515C21.9675 47.08 20.8987 47.7025 20.575 48.0075C21.49 48.965 26.8575 50.5 35.5 50.5C44.1425 50.5 49.51 48.965 50.4237 48.0075C50.1737 47.77 49.4638 47.3425 47.9688 46.8988C47.9483 47.1026 47.8773 47.2982 47.762 47.4676C47.6467 47.637 47.4909 47.7749 47.3088 47.8688C47.1618 47.9422 47.0019 47.986 46.8381 47.9976C46.6743 48.0092 46.5097 47.9884 46.354 47.9364C46.1982 47.8844 46.0541 47.8022 45.9301 47.6945C45.8061 47.5868 45.7046 47.4557 45.6312 47.3088L44.3812 44.8088C44.286 44.6181 44.2411 44.4063 44.2507 44.1934C44.2603 43.9806 44.3242 43.7737 44.4363 43.5925C44.5484 43.4112 44.705 43.2617 44.8912 43.158C45.0773 43.0543 45.2869 42.9999 45.5 43H48C48.3315 43 48.6495 43.1317 48.8839 43.3661C49.1183 43.6005 49.25 43.9185 49.25 44.25ZM20.4125 22.18C20.2375 22.6575 19.7875 23 19.25 23C18.9185 23 18.6005 22.8683 18.3661 22.6339C18.1317 22.3995 18 22.0815 18 21.75V19.25C18 18.9185 18.1317 18.6005 18.3661 18.3661C18.6005 18.1317 18.9185 18 19.25 18H21.75C22.0815 18 22.3995 18.1317 22.6339 18.3661C22.8683 18.6005 23 18.9185 23 19.25C23 19.7875 22.6562 20.2375 22.1812 20.4125L23.8837 22.1163C24.1181 22.3507 24.2497 22.6685 24.2497 23C24.2497 23.3315 24.1181 23.6493 23.8837 23.8837C23.7679 24.0002 23.6302 24.0927 23.4786 24.1557C23.3269 24.2188 23.1643 24.2513 23 24.2513C22.8357 24.2513 22.6731 24.2188 22.5214 24.1557C22.3698 24.0927 22.2321 24.0002 22.1163 23.8837L20.4125 22.18ZM49.25 18H51.75C52.0815 18 52.3995 18.1317 52.6339 18.3661C52.8683 18.6005 53 18.9185 53 19.25V21.75C53 22.0815 52.8683 22.3995 52.6339 22.6339C52.3995 22.8683 52.0815 23 51.75 23C51.2125 23 50.7625 22.6562 50.5875 22.1812L48.8838 23.8837C48.7684 24.0031 48.6305 24.0984 48.478 24.1639C48.3255 24.2294 48.1615 24.2639 47.9955 24.2653C47.8295 24.2668 47.6649 24.2351 47.5113 24.1723C47.3577 24.1094 47.2181 24.0166 47.1008 23.8992C46.9834 23.7819 46.8906 23.6423 46.8277 23.4887C46.7649 23.3351 46.7332 23.1705 46.7347 23.0045C46.7361 22.8385 46.7706 22.6745 46.8361 22.522C46.9016 22.3695 46.9969 22.2316 47.1162 22.1163L48.8188 20.4125C48.3425 20.2375 48 19.7875 48 19.25C48 18.9185 48.1317 18.6005 48.3661 18.3661C48.6005 18.1317 48.9185 18 49.25 18ZM20.5 30.5V33C20.5 35.84 22.46 38.2962 25.1363 39.0075C26.84 42.6025 29.6613 48 35.5 48C41.3388 48 44.1612 42.6 45.865 39.0063C48.5475 38.2875 50.5 35.835 50.5 33V30.5C50.4995 29.2845 50.1428 28.0958 49.4742 27.0808C48.8055 26.0658 47.8541 25.269 46.7375 24.7888C44.735 20.5975 40.4937 18 35.5 18C30.5037 18 26.2625 20.5988 24.26 24.7925C23.1445 25.2729 22.194 26.0693 21.5258 27.0835C20.8577 28.0978 20.501 29.2854 20.5 30.5ZM35.5 45.5C31.94 45.5 29.7963 42.6225 28.05 39.25H29.25C30.0254 39.2492 30.7815 39.0085 31.4147 38.5609C32.0478 38.1133 32.5269 37.4807 32.7863 36.75H38.2137C38.4732 37.4806 38.9524 38.1131 39.5855 38.5607C40.2186 39.0083 40.9747 39.2491 41.75 39.25H42.95C41.2037 42.6225 39.06 45.5 35.5 45.5ZM48 33C47.9965 33.8993 47.6707 34.7675 47.0817 35.447C46.4927 36.1266 45.6796 36.5725 44.79 36.7037C44.6115 36.7335 44.4309 36.749 44.25 36.75H41.75C41.4185 36.75 41.1005 36.6183 40.8661 36.3839C40.6317 36.1495 40.5 35.8315 40.5 35.5C40.5 35.1685 40.3683 34.8505 40.1339 34.6161C39.8995 34.3817 39.5815 34.25 39.25 34.25H31.75C31.4185 34.25 31.1005 34.3817 30.8661 34.6161C30.6317 34.8505 30.5 35.1685 30.5 35.5C30.5 36.19 29.9388 36.75 29.25 36.75H26.75C26.5662 36.75 26.3837 36.73 26.1925 36.7C25.3065 36.5655 24.4977 36.1187 23.9123 35.4402C23.3268 34.7616 23.0033 33.8962 23 33V30.5C23 28.8862 24.0275 27.4575 25.575 26.9425C25.953 26.8126 26.3503 26.7476 26.75 26.75H44.25C44.6637 26.75 45.0587 26.815 45.4412 26.9475C46.187 27.1956 46.8357 27.6723 47.295 28.3101C47.7543 28.9478 48.001 29.7141 48 30.5V33ZM35.5 20.5C38.8088 20.5 41.6912 21.9037 43.495 24.25H27.505C29.3088 21.9037 32.19 20.5 35.5 20.5ZM43 28H41.75C41.4185 28 41.1005 28.1317 40.8661 28.3661C40.6317 28.6005 40.5 28.9185 40.5 29.25C40.5 29.5815 40.6317 29.8995 40.8661 30.1339C41.1005 30.3683 41.4185 30.5 41.75 30.5H43C43.3315 30.5 43.6495 30.6317 43.8839 30.8661C44.1183 31.1005 44.25 31.4185 44.25 31.75C44.25 32.0815 44.3817 32.3995 44.6161 32.6339C44.8505 32.8683 45.1685 33 45.5 33C45.8315 33 46.1495 32.8683 46.3839 32.6339C46.6183 32.3995 46.75 32.0815 46.75 31.75C46.75 29.6825 45.0675 28 43 28Z" fill="#007B42" />
                                    </svg>
                                </div>
                                <div className='simulator-modeling-title'>
                                    Immersive Environments
                                </div>
                                <div className='simulator-modeling-content'>
                                    One thing that sets simulator games apart is how immersive they are. The surroundings that surround players are realistic and complex, frequently with genuine weather patterns, day-and-night cycles, and landscapes.
                                </div>
                            </div>
                        </div>
                        <div className='simulator-modeling-box'>
                            <div className='simulator-modeling-box-top'>
                            </div>
                            <div className='simulator-modeling-box-bottom'>
                                <div className='simulator-modeling-icon'>
                                    <svg className='simulator-modeling-icon-svg-2' xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <rect width="70" height="70" rx="35" fill="white" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M43.29 24.5116C46.8177 24.5116 49.2367 25.2995 50.7019 26.9274C51.3645 27.7901 51.837 28.7832 52.0884 29.8415C52.3398 30.8999 52.3644 31.9994 52.1605 33.0679L50.9412 46.0749C50.5765 49.5065 49.1879 53 41.6621 53H28.6388C21.113 53 19.7244 49.5 19.3565 46.0912L18.134 33.0516C17.9323 31.9852 17.9586 30.8882 18.2111 29.8327C18.4636 28.7772 18.9366 27.7871 19.5991 26.9274C21.0593 25.3012 23.4833 24.5116 27.0109 24.5116H27.4179V24.4302C27.4179 21.5651 27.4179 18 33.8481 18H36.4528C42.883 18 42.883 21.5651 42.883 24.4302V24.5116H43.29ZM33.8481 20.4419C29.8598 20.4419 29.8598 21.5277 29.8598 24.4302V24.5116H40.4412V24.4302C40.4412 21.5277 40.4412 20.4419 36.4528 20.4419H33.8481ZM41.6621 50.5533C47.5356 50.5533 48.2372 48.4174 48.5123 45.8323L49.4077 36.2863C47.3607 37.5021 45.1678 38.4507 42.8827 39.1098C42.8771 40.6293 42.424 42.1136 41.5796 43.3774C40.7299 44.649 39.5223 45.6401 38.1093 46.2253C36.6964 46.8106 35.1416 46.9637 33.6417 46.6654C32.1417 46.367 30.7639 45.6306 29.6825 44.5491C28.6011 43.4677 27.8646 42.0899 27.5662 40.5899C27.4721 40.1167 27.4229 39.6379 27.4181 39.1599C25.1371 38.5121 22.947 37.5751 20.9014 36.3709L21.7902 45.8421C22.0637 48.4126 22.7784 50.5533 28.6388 50.5533H41.6621ZM27.7843 36.7285C25.2341 35.9766 22.8148 34.8301 20.6149 33.3284L20.566 32.8074C20.3981 32.0797 20.3867 31.3245 20.5326 30.592C20.6786 29.8595 20.9785 29.1664 21.4126 28.5586C22.3714 27.494 24.2565 26.9535 27.0109 26.9535H43.29C46.0444 26.9535 47.9295 27.494 48.8867 28.5586C49.3218 29.1691 49.6221 29.865 49.7677 30.6003C49.9134 31.3356 49.9011 32.0935 49.7316 32.8237L49.6991 33.1753C47.4963 34.7171 45.0651 35.8982 42.4967 36.6767C42.1215 35.5337 41.4816 34.483 40.6151 33.6165C39.1655 32.1669 37.2002 31.3514 35.1502 31.3488C33.6209 31.3488 32.1258 31.8023 30.8542 32.652C29.5826 33.5017 28.5915 34.7093 28.0063 36.1223C27.9237 36.3217 27.8497 36.524 27.7843 36.7285ZM32.2109 43.4804C33.0809 44.0618 34.1038 44.3721 35.1502 44.3721C36.5529 44.3704 37.8976 43.8124 38.8894 42.8206C39.8812 41.8288 40.4392 40.484 40.4409 39.0814C40.4409 38.035 40.1306 37.0121 39.5493 36.142C38.9679 35.272 38.1416 34.5939 37.1749 34.1934C36.2081 33.793 35.1443 33.6882 34.118 33.8924C33.0918 34.0965 32.149 34.6004 31.4091 35.3403C30.6692 36.0802 30.1653 37.0229 29.9612 38.0492C29.757 39.0755 29.8618 40.1393 30.2622 41.1061C30.6627 42.0728 31.3408 42.8991 32.2109 43.4804ZM36.7781 38.567V37.0465H36.7765C36.7765 36.7227 36.6479 36.4122 36.4189 36.1832C36.1899 35.9542 35.8794 35.8256 35.5556 35.8256C35.2318 35.8256 34.9212 35.9542 34.6922 36.1832C34.4633 36.4122 34.3346 36.7227 34.3346 37.0465V38.567C34.3341 38.637 34.3158 38.7057 34.2813 38.7667C34.2468 38.8277 34.1974 38.8788 34.1377 38.9153L32.8923 39.6626C32.6633 39.8001 32.4857 40.0089 32.3868 40.257C32.2878 40.5051 32.2729 40.7788 32.3444 41.0361C32.4159 41.2935 32.5698 41.5203 32.7826 41.6818C32.9954 41.8433 33.2552 41.9306 33.5223 41.9302C33.7438 41.931 33.9612 41.8708 34.1507 41.756L35.3944 41.0088C35.8155 40.755 36.164 40.397 36.4064 39.9693C36.6487 39.5416 36.7768 39.0586 36.7781 38.567Z" fill="#007B42" />
                                    </svg>
                                </div>
                                <div className='simulator-modeling-title'>
                                    Hands-On Experience
                                </div>
                                <div className='simulator-modeling-content'>
                                    Simulator games, in contrast to standard gaming experiences, provide a hands-on method of virtual participation. In order to replicate the complexities of real-world interactions, players actively engage in activities by adjusting controls, making choices, and suffering consequences.
                                </div>
                            </div>
                        </div>
                        <div className='simulator-modeling-box'>
                            <div className='simulator-modeling-box-top'>
                            </div>
                            <div className='simulator-modeling-box-bottom'>
                                <div className='simulator-modeling-icon'>
                                    <svg className='simulator-modeling-icon-svg-2' xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <rect width="70" height="70" rx="35" fill="white" />
                                        <path d="M51.7551 43.4332V33.4918L52.0388 33.3266C52.6409 32.9771 53 32.3535 53 31.658C53 30.9625 52.6409 30.3377 52.0388 29.9881L37.4865 21.5347C36.883 21.1845 36.1977 21 35.5 21C34.8023 21 34.117 21.1845 33.5135 21.5347L18.96 29.9893C18.3591 30.3389 18 30.9625 18 31.658C18 32.3535 18.3591 32.9771 18.96 33.3278L23.3723 35.8919V41.8519C23.3733 42.5331 23.5532 43.2021 23.8939 43.792C24.2346 44.3819 24.7243 44.8719 25.3139 45.2132L31.3876 48.7145C32.6553 49.4447 34.0773 49.811 35.4994 49.811C36.9215 49.811 38.3424 49.4459 39.6112 48.7145L45.6837 45.2132C46.2737 44.8723 46.7637 44.3823 47.1047 43.7924C47.4457 43.2025 47.6256 42.5333 47.6265 41.8519V35.8907L49.6004 34.7439V43.4332C49.2615 43.6636 49.0053 43.9966 48.8695 44.3833C48.7338 44.77 48.7255 45.19 48.8461 45.5817C48.9666 45.9735 49.2095 46.3162 49.5392 46.5597C49.8689 46.8032 50.2679 46.9346 50.6778 46.9346C51.0876 46.9346 51.4867 46.8032 51.8163 46.5597C52.146 46.3162 52.3889 45.9735 52.5095 45.5817C52.63 45.19 52.6218 44.77 52.486 44.3833C52.3502 43.9966 52.094 43.6636 51.7551 43.4332ZM45.4731 41.8507H45.4719C45.4719 42.466 45.1427 43.0382 44.6088 43.3446L38.5363 46.8459C37.6123 47.3759 36.5657 47.6547 35.5006 47.6547C34.4355 47.6547 33.3889 47.3759 32.4649 46.8459L26.3912 43.3446C26.129 43.1931 25.9113 42.9753 25.7598 42.7131C25.6083 42.4509 25.5284 42.1535 25.5281 41.8507V37.1428L33.5135 41.7825C34.1172 42.1327 34.8027 42.3171 35.5006 42.3171C36.1985 42.3171 36.884 42.1327 37.4877 41.7825L45.4731 37.1428V41.8507ZM36.4044 39.9199C36.1296 40.0792 35.8176 40.1632 35.5 40.1632C35.1824 40.1632 34.8704 40.0792 34.5956 39.9199L20.3761 31.658L34.5944 23.3961C34.8692 23.2367 35.1812 23.1528 35.4988 23.1528C35.8164 23.1528 36.1284 23.2367 36.4032 23.3961L50.6227 31.6568L36.4044 39.9199Z" fill="#007B42" />
                                    </svg>
                                </div>
                                <div className='simulator-modeling-title'>
                                    Educational Value
                                </div>
                                <div className='simulator-modeling-content'>
                                    A lot of simulator games have instructional value in addition to being entertaining. Through hands-on experiences in a risk-free virtual environment, users can improve their understanding of complicated systems, receive insights into diverse vocations, and develop practical skills.                                </div>
                            </div>
                        </div>
                        <div className='simulator-modeling-box'>
                            <div className='simulator-modeling-box-top'>
                            </div>
                            <div className='simulator-modeling-box-bottom'>
                                <div className='simulator-modeling-icon'>
                                    <svg className='simulator-modeling-icon-svg-2' xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <rect width="70" height="70" rx="35" fill="white" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M52.1483 47.8583C53.2779 45.9085 53.2851 43.5846 52.1627 41.642L40.8956 22.1297C39.7805 20.1656 37.7659 19 35.5068 19C33.2476 19 31.233 20.1728 30.1179 22.1225L18.8364 41.6564C17.714 43.6206 17.7212 45.9589 18.858 47.9087C19.9804 49.8369 21.9877 50.9952 24.2325 50.9952H46.7378C48.9898 50.9952 51.0115 49.8225 52.1483 47.8583ZM49.7021 46.4481C49.0761 47.5273 47.9681 48.1677 46.7306 48.1677H24.2253C23.0022 48.1677 21.9014 47.5417 21.2899 46.4841C20.6711 45.4121 20.6639 44.1314 21.2827 43.0522L32.5641 23.5255C33.1756 22.4535 34.2692 21.8204 35.5068 21.8204C36.7371 21.8204 37.8379 22.4607 38.4494 23.5327L49.7237 43.0594C50.328 44.1098 50.3208 45.3761 49.7021 46.4481ZM35.4995 41.4837C34.521 41.4837 33.7008 42.3039 33.7008 43.2824C33.7008 44.2609 34.521 45.0811 35.4995 45.0811C36.442 45.0811 37.2981 44.2609 37.255 43.3256C37.2981 42.2967 36.4851 41.4837 35.4995 41.4837ZM33.665 30.8211C33.665 29.8785 34.1974 29.1015 35.0536 28.8569C35.9097 28.6554 36.7659 29.0655 37.1329 29.8713C37.2552 30.1591 37.2983 30.4469 37.2983 30.7707C37.2768 31.2204 37.2462 31.67 37.2156 32.1197C37.185 32.5694 37.1544 33.0191 37.1329 33.4687C37.0933 34.163 37.0519 34.8573 37.0105 35.5516C36.9692 36.2459 36.9278 36.9402 36.8882 37.6345C36.8451 38.0878 36.8451 38.4979 36.8451 38.944C36.8091 39.685 36.2335 40.2534 35.4996 40.2534C34.7658 40.2534 34.1974 39.721 34.1542 38.9871C34.0931 37.9043 34.0319 36.8323 33.9707 35.7602C33.9096 34.6882 33.8484 33.6162 33.7873 32.5334C33.7657 32.2492 33.7459 31.9632 33.7261 31.6772C33.7063 31.3912 33.6866 31.1052 33.665 30.8211Z" fill="#007B42" />
                                    </svg>
                                </div>
                                <div className='simulator-modeling-title'>
                                    Precision and Attention to Detail
                                </div>
                                <div className='simulator-modeling-content'>
                                    Simulator game developers value accuracy and meticulousness highly. Everything is painstakingly designed to guarantee an authentic replication of the real-world counterparts, from the functionality of machinery and cars to the precision of controls.
                                </div>
                            </div>
                        </div>
                        <div className='simulator-modeling-box'>
                            <div className='simulator-modeling-box-top'>
                            </div>
                            <div className='simulator-modeling-box-bottom'>
                                <div className='simulator-modeling-icon'>
                                    <svg className='simulator-modeling-icon-svg' xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <rect width="70" height="70" rx="35" fill="white" />
                                        <path d="M33.3217 53V48.3828C32.9721 48.5075 32.6036 48.571 32.2325 48.5705C30.4278 48.5705 28.9648 47.1076 28.9648 45.3029C28.9648 43.4982 30.4278 42.0353 32.2325 42.0353C32.6152 42.0353 32.9816 42.1015 33.3217 42.223V33.1339C33.6713 33.2585 34.0397 33.322 34.4109 33.3216C36.2156 33.3216 37.6785 31.8586 37.6785 30.0539C37.6785 28.2493 36.2156 26.7863 34.4109 26.7863C34.0397 26.7858 33.6713 26.8493 33.3217 26.974V22.3568" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" />
                                        <path d="M48.6432 37.6783H44.026C44.1507 38.0279 44.2142 38.3964 44.2137 38.7675C44.2137 40.5722 42.7507 42.0352 40.9461 42.0352C39.1414 42.0352 37.6784 40.5722 37.6784 38.7675C37.6779 38.3964 37.7414 38.0279 37.8661 37.6783H28.777C28.9017 37.3287 28.9652 36.9603 28.9647 36.5891C28.9647 34.7844 27.5018 33.3215 25.6971 33.3215C23.8924 33.3215 22.4295 34.7844 22.4295 36.5891C22.429 36.9603 22.4925 37.3287 22.6172 37.6783H18" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" />
                                        <path d="M48.6432 37.6784V33.1099C48.986 33.2339 49.3457 33.3216 49.7324 33.3216C51.537 33.3216 53 31.8586 53 30.0539C53 28.2493 51.537 26.7863 49.7324 26.7863C49.3457 26.7863 48.986 26.874 48.6432 26.998V22.3568H44.002C44.126 22.014 44.2137 21.6543 44.2137 21.2676C44.2137 19.463 42.7507 18 40.9461 18C39.1414 18 37.6784 19.463 37.6784 21.2676C37.6784 21.6543 37.7661 22.014 37.8901 22.3568H33.3216C24.8998 22.3568 18 29.2566 18 37.6784C18 46.1002 24.8998 53 33.3216 53C41.7434 53 48.6432 46.1002 48.6432 37.6784Z" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" />
                                    </svg>
                                </div>
                                <div className='simulator-modeling-title'>
                                    Skill  Development
                                </div>
                                <div className='simulator-modeling-content'>
                                    Developing and honing particular talents is a common requirement for players in simulator games. Players are encouraged to refine their skills via practice and experience, whether it's handling heavy machinery, piloting an airplane, or managing resources on a farm.
                                </div>
                            </div>
                        </div>
                        <div className='simulator-modeling-box'>
                            <div className='simulator-modeling-box-top'>
                            </div>
                            <div className='simulator-modeling-box-bottom'>
                                <div className='simulator-modeling-icon'>
                                    <svg className='simulator-modeling-icon-svg' xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <rect width="70" height="70" rx="35" fill="white" />
                                        <path d="M42.2903 27.6724H27.7109C28.4653 24.343 31.4425 21.8567 35.0006 21.8567C37.0643 21.8567 38.9334 22.6932 40.2862 24.046C41.265 25.0249 41.9738 26.2745 42.2903 27.6724Z" stroke="#007B42" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M42.4732 34.0444V34.7829C42.4732 38.911 39.1264 42.2578 34.9983 42.2578C30.8702 42.2578 27.5234 38.911 27.5234 34.7829V34.0444H32.6224L34.9983 31.6685L37.3742 34.0444H42.4732Z" stroke="#007B42" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M43.7875 27.6725V34.0444H37.3771L35.0011 31.6685L32.6252 34.0444H26.2148V27.6725H43.7875Z" stroke="#007B42" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M17.5 20.7944C17.5 18.9747 25.3351 17.4999 35 17.4999C44.6649 17.4999 52.5 18.9747 52.5 20.7944" stroke="#007B42" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M41.9375 37.5735C44.3309 37.7681 46.4469 38.0608 48.1446 38.4238" stroke="#007B42" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M21.8555 38.4238C23.5532 38.0608 25.6692 37.7681 28.0625 37.5735" stroke="#007B42" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M21.8568 22.9694V42.7734C19.1447 42.1933 17.5 41.4323 17.5 40.5986V20.7946C17.5 21.6282 19.1447 22.3892 21.8568 22.9694Z" stroke="#007B42" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M52.5014 20.7946V40.5986C52.5014 41.4323 50.8567 42.1933 48.1445 42.7734V22.9694C50.8567 22.3892 52.5014 21.6282 52.5014 20.7946Z" stroke="#007B42" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M37.6086 41.7893V43.9503C37.6086 45.391 36.4402 46.5586 34.9996 46.5586C33.5589 46.5586 32.3906 45.391 32.3906 43.9503V41.7893" stroke="#007B42" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M32.391 43.9504L30.0683 44.7367C26.7399 45.8633 24.5 48.9861 24.5 52.5H45.4999C45.4999 48.9861 43.2601 45.8633 39.9317 44.7367L37.6089 43.9504" stroke="#007B42" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M33.7227 37.9985C34.4291 38.7049 35.5743 38.7049 36.2808 37.9985" stroke="#007B42" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className='simulator-modeling-title'>
                                    Virtual Exploration
                                </div>
                                <div className='simulator-modeling-content'>
                                    Users can explore virtual worlds that closely resemble reality by playing simulator games. This inquiry, which evokes a sense of adventure and discovery, can take many forms, from travelling vast regions to learning the nuances of a specific vocation.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default SimulatorGame