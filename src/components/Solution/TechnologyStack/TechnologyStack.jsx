import { useState } from 'react'
import Navbar from '../../Navbar/Navbar.jsx';
import Headline from '../../Headline/Headline';
import Footer from '../../Home/Footer/Footer.jsx';
import Banner from '../../Banner/Banner.jsx';
import './TechnologyStack.css'

const TechnologyStack = () => {

    const bannerObject = {
        boxSide: 'right',
        backgroundBanner: `/frame/technologyStack-page-banner.webp`,
        bannerTitle: `How can we help you develop your project?`,
        bannerTitleSpan: ``,
        bannerContent: `Let's innovate for your technology needs with
        HK APPS.`,
    };

    const [mobileAppActiveButton, setMobileAppActiveButton] = useState(1);
    const [gameDevelopmentActiveButton, setGameDevelopmentActiveButton] = useState(1);
    const [webDevelopmentActiveButton, setWebDevelopmentActiveButton] = useState(1);

    const handleMobileAppClick = (index) => {
        setMobileAppActiveButton(index);
    };

    const handleGameDevelopmentClick = (index) => {
        setGameDevelopmentActiveButton(index);
    };

    const handleWebDevelopmentClick = (index) => {
        setWebDevelopmentActiveButton(index);
    };

    return (
        <>
            <Navbar activeNav="Solutions" />
            <Headline headlineText1="Tailored Android App Solutions for Your Unique Needs" headlineText2="Innovative Android Apps Designed Just for You" />
            <Banner bannerObject={bannerObject} />


            {/* 1 section */}
            <div className='website-main-section'>
                <div className='website-innner-section'>
                    <div className='shopify-description'>
                        <div className='we-are-text-1'>
                            Technologies Used For Mobile App Development
                        </div>
                        <div className='shopify-description-text'>
                            Mobile app development requires implementation of latest technologies, tools and applications that
                            streamline the prototyping, development, designing and testing processes.
                        </div>
                    </div>
                </div>
            </div>

            <div className='technology-stack-section'>
                <div className='technology-stack-bg-bx'>
                    <img src="/image/technology-stack-1.webp" className='technology-stack-bg-image' alt="" />
                    <div className='technology-stack-1-nav'>
                        <button
                            key={1}
                            className={`technology-stack-1-nav-item ${mobileAppActiveButton === 1 ? 'technology-stack-1-nav-item-active' : ''}`}
                            onClick={() => handleMobileAppClick(1)}
                        >
                            Frontend
                        </button>
                        <button
                            key={2}
                            className={`technology-stack-1-nav-item ${mobileAppActiveButton === 2 ? 'technology-stack-1-nav-item-active' : ''}`}
                            onClick={() => handleMobileAppClick(2)}
                        >
                            Backend
                        </button>
                        <button
                            key={3}
                            className={`technology-stack-1-nav-item ${mobileAppActiveButton === 3 ? 'technology-stack-1-nav-item-active' : ''}`}
                            onClick={() => handleMobileAppClick(3)}
                        >
                            Database
                        </button>
                        <button
                            key={4}
                            className={`technology-stack-1-nav-item ${mobileAppActiveButton === 4 ? 'technology-stack-1-nav-item-active' : ''}`}
                            onClick={() => handleMobileAppClick(4)}
                        >
                            Infrastructure
                        </button>
                    </div>
                    <div className='technology-stack-lan-bx'>
                        {/* frontend boxes */}
                        <div className={`technology-stack-frontend-bx ${mobileAppActiveButton === 1 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-android-studio.webp" className='technology-stack-bx-img' alt="" />
                            <div className='technology-stack-text'>
                                Android Studio
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${mobileAppActiveButton === 1 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-Xcode.webp" className='technology-stack-bx-img' alt="" />
                            <div className='technology-stack-text'>
                                Xcode
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${mobileAppActiveButton === 1 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-react-native.webp" className='technology-stack-bx-img' alt="" />
                            <div className='technology-stack-text'>
                                React Native
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${mobileAppActiveButton === 1 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-flutter.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                Flutter
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${mobileAppActiveButton === 1 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-kotlin.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                Kotlin
                            </div>
                        </div>
                        {/* backend boxes */}
                        <div className={`technology-stack-frontend-bx ${mobileAppActiveButton === 2 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-php.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                PHP
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${mobileAppActiveButton === 2 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-nodejs.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                Node.js
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${mobileAppActiveButton === 2 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-python.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                Python
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${mobileAppActiveButton === 2 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-laravel.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                Laravel
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${mobileAppActiveButton === 2 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-codeIgniter.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                CodeIgniter
                            </div>
                        </div>
                        {/* database boxes */}
                        <div className={`technology-stack-frontend-bx ${mobileAppActiveButton === 3 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-mongoDB.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                MongoDB
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${mobileAppActiveButton === 3 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-mySQL.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                MySQL
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${mobileAppActiveButton === 3 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-firebase.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                Firebase
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${mobileAppActiveButton === 3 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-dynamoDB.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                DynamoDB
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${mobileAppActiveButton === 3 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-postgreSQL.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                PostgreSQL
                            </div>
                        </div>
                        {/* Infrastructure boxes */}
                        <div className={`technology-stack-frontend-bx ${mobileAppActiveButton === 4 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-amazon.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                Amazon Web Services
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${mobileAppActiveButton === 4 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-google-cloud.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                Google Cloud
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${mobileAppActiveButton === 4 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-digital-ocean.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                Digital Ocean
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${mobileAppActiveButton === 4 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-microsoft-azure.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                Microsoft Azure
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${mobileAppActiveButton === 4 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-selenium.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                Selenium
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            {/* 2 section */}
            <div className='website-main-section'>
                <div className='website-innner-section'>
                    <div className='shopify-description'>
                        <div className='we-are-text-1'>
                            Technologies Used For Game Development
                        </div>
                        <div className='shopify-description-text'>
                            Game development includes character designing, animation, navigation building and functional testing. Each step needs efficient
                            technologies and applications for smoother output.
                        </div>
                    </div>
                </div>
            </div>
            <div className='technology-stack-section'>
                <div className='technology-stack-bg-bx'>
                    <img src="/image/technology-stack-2.webp" className='technology-stack-bg-image' alt="" />
                    <div className='technology-stack-1-nav'>
                        <button
                            key={1}
                            className={`technology-stack-1-nav-item ${gameDevelopmentActiveButton === 1 ? 'technology-stack-1-nav-item-active' : ''}`}
                            onClick={() => handleGameDevelopmentClick(1)}
                        >
                            Frontend
                        </button>
                        <button
                            key={2}
                            className={`technology-stack-1-nav-item ${gameDevelopmentActiveButton === 2 ? 'technology-stack-1-nav-item-active' : ''}`}
                            onClick={() => handleGameDevelopmentClick(2)}
                        >
                            Backend
                        </button>
                        <button
                            key={3}
                            className={`technology-stack-1-nav-item ${gameDevelopmentActiveButton === 3 ? 'technology-stack-1-nav-item-active' : ''}`}
                            onClick={() => handleGameDevelopmentClick(3)}
                        >
                            Database
                        </button>
                        <button
                            key={4}
                            className={`technology-stack-1-nav-item ${gameDevelopmentActiveButton === 4 ? 'technology-stack-1-nav-item-active' : ''}`}
                            onClick={() => handleGameDevelopmentClick(4)}
                        >
                            Infrastructure
                        </button>
                    </div>
                    <div className='technology-stack-lan-bx'>
                        {/* frontend boxes */}
                        <div className={`technology-stack-frontend-bx ${gameDevelopmentActiveButton === 1 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-unity3D.webp" className='technology-stack-bx-img' alt="" />
                            <div className='technology-stack-text'>
                                Unity3D
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${gameDevelopmentActiveButton === 1 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-c.webp" className='technology-stack-bx-img' alt="" />
                            <div className='technology-stack-text'>
                                C#
                            </div>
                        </div>
                        {/* backend boxes */}
                        <div className={`technology-stack-frontend-bx ${gameDevelopmentActiveButton === 2 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-php.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                PHP
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${gameDevelopmentActiveButton === 2 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-nodejs.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                Node.js
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${gameDevelopmentActiveButton === 2 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-python.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                Python
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${gameDevelopmentActiveButton === 2 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-laravel.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                Laravel
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${gameDevelopmentActiveButton === 2 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-codeIgniter.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                CodeIgniter
                            </div>
                        </div>
                        {/* database boxes */}
                        <div className={`technology-stack-frontend-bx ${gameDevelopmentActiveButton === 3 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-mongoDB.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                MongoDB
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${gameDevelopmentActiveButton === 3 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-mySQL.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                MySQL
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${gameDevelopmentActiveButton === 3 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-firebase.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                Firebase
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${gameDevelopmentActiveButton === 3 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-dynamoDB.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                DynamoDB
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${gameDevelopmentActiveButton === 3 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-postgreSQL.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                PostgreSQL
                            </div>
                        </div>
                        {/* Infrastructure boxes */}
                        <div className={`technology-stack-frontend-bx ${gameDevelopmentActiveButton === 4 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-amazon.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                Amazon Web Services
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${gameDevelopmentActiveButton === 4 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-google-cloud.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                Google Cloud
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${gameDevelopmentActiveButton === 4 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-digital-ocean.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                Digital Ocean
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${gameDevelopmentActiveButton === 4 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-microsoft-azure.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                Microsoft Azure
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${gameDevelopmentActiveButton === 4 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-selenium.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                Selenium
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* 3 section */}
            <div className='website-main-section'>
                <div className='website-innner-section'>
                    <div className='shopify-description'>
                        <div className='we-are-text-1'>
                            Technologies Used For Web Development
                        </div>
                        <div className='shopify-description-text'>
                            Web development may look simple is one of the most challenging and complex operations because it deals with user experience.
                            The technologies used for web development are agile and efficient.
                        </div>
                    </div>
                </div>
            </div>
            <div className='technology-stack-section'>
                <div className='technology-stack-bg-bx'>
                    <img src="/image/technology-stack-3.webp" className='technology-stack-bg-image' alt="" />
                    <div className='technology-stack-1-nav'>
                        <button
                            key={1}
                            className={`technology-stack-1-nav-item ${webDevelopmentActiveButton === 1 ? 'technology-stack-1-nav-item-active' : ''}`}
                            onClick={() => handleWebDevelopmentClick(1)}
                        >
                            Frontend
                        </button>
                        <button
                            key={2}
                            className={`technology-stack-1-nav-item ${webDevelopmentActiveButton === 2 ? 'technology-stack-1-nav-item-active' : ''}`}
                            onClick={() => handleWebDevelopmentClick(2)}
                        >
                            Backend
                        </button>
                        <button
                            key={3}
                            className={`technology-stack-1-nav-item ${webDevelopmentActiveButton === 3 ? 'technology-stack-1-nav-item-active' : ''}`}
                            onClick={() => handleWebDevelopmentClick(3)}
                        >
                            Database
                        </button>
                        <button
                            key={4}
                            className={`technology-stack-1-nav-item ${webDevelopmentActiveButton === 4 ? 'technology-stack-1-nav-item-active' : ''}`}
                            onClick={() => handleWebDevelopmentClick(4)}
                        >
                            Infrastructure
                        </button>
                    </div>
                    <div className='technology-stack-lan-bx'>
                        {/* frontend boxes */}
                        <div className={`technology-stack-frontend-bx ${webDevelopmentActiveButton === 1 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-react-js.webp" className='technology-stack-bx-img' alt="" />
                            <div className='technology-stack-text'>
                                React JS
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${webDevelopmentActiveButton === 1 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-typeScript.webp" className='technology-stack-bx-img' alt="" />
                            <div className='technology-stack-text'>
                                TypeScript
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${webDevelopmentActiveButton === 1 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-vuejs.webp" className='technology-stack-bx-img' alt="" />
                            <div className='technology-stack-text'>
                                Vue.js
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${webDevelopmentActiveButton === 1 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-bootstrap.webp" className='technology-stack-bx-img' alt="" />
                            <div className='technology-stack-text'>
                                Bootstrap
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${webDevelopmentActiveButton === 1 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-javascript.webp" className='technology-stack-bx-img' alt="" />
                            <div className='technology-stack-text'>
                                Javascript
                            </div>
                        </div>
                        {/* backend boxes */}
                        <div className={`technology-stack-frontend-bx ${webDevelopmentActiveButton === 2 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-php.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                PHP
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${webDevelopmentActiveButton === 2 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-nodejs.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                Node.js
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${webDevelopmentActiveButton === 2 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-python.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                Python
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${webDevelopmentActiveButton === 2 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-laravel.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                Laravel
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${webDevelopmentActiveButton === 2 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-codeIgniter.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                CodeIgniter
                            </div>
                        </div>
                        {/* database boxes */}
                        <div className={`technology-stack-frontend-bx ${webDevelopmentActiveButton === 3 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-mongoDB.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                MongoDB
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${webDevelopmentActiveButton === 3 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-mySQL.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                MySQL
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${webDevelopmentActiveButton === 3 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-firebase.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                Firebase
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${webDevelopmentActiveButton === 3 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-dynamoDB.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                DynamoDB
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${webDevelopmentActiveButton === 3 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-postgreSQL.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                PostgreSQL
                            </div>
                        </div>
                        {/* Infrastructure boxes */}
                        <div className={`technology-stack-frontend-bx ${webDevelopmentActiveButton === 4 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-amazon.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                Amazon Web Services
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${webDevelopmentActiveButton === 4 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-google-cloud.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                Google Cloud
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${webDevelopmentActiveButton === 4 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-digital-ocean.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                Digital Ocean
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${webDevelopmentActiveButton === 4 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-microsoft-azure.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                Microsoft Azure
                            </div>
                        </div>
                        <div className={`technology-stack-frontend-bx ${webDevelopmentActiveButton === 4 ? '' : 'comman-technology-bx'}`}>
                            <img src="/image/technology-stack-selenium.webp" className='technology-stack-bx-img' />
                            <div className='technology-stack-text'>
                                Selenium
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            < div className='website-main-section'>
                <div className='website-innner-section'>
                    <div  style={{paddingTop:"10px"}}>

                    </div>
                </div>
                <Footer />
            </div >


        </>
    );
}

export default TechnologyStack