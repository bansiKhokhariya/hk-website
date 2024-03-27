import { React, useState } from 'react'
import './Project.css'
import { Link } from "react-router-dom";

const Project = () => {
    const [activeButton, setActiveButton] = useState(1);

    const handleButtonClick = (index) => {
        setActiveButton(index);
    };

    return (
        <div className='project-main-section'>
            <div className='project-section'>
                <div className='we-are-text-1'>Project Showcase</div>
                {/* <div className='project-navbar' data-aos="fade-left">
                    <button
                        key={1}
                        className={`project-nav-btn ${activeButton === 1 ? 'project-nav-btn-active' : ''}`}
                        onClick={() => handleButtonClick(1)}
                    >
                        All
                    </button>
                    <button
                        key={2}
                        className={`project-nav-btn ${activeButton === 2 ? 'project-nav-btn-active' : ''}`}
                        onClick={() => handleButtonClick(2)}
                    >
                        Mobile Development
                    </button>
                    <button
                        key={3}
                        className={`project-nav-btn ${activeButton === 3 ? 'project-nav-btn-active' : ''}`}
                        onClick={() => handleButtonClick(3)}
                    >
                        Web Development
                    </button>
                    <button
                        key={4}
                        className={`project-nav-btn ${activeButton === 4 ? 'project-nav-btn-active' : ''}`}
                        onClick={() => handleButtonClick(4)}
                    >
                        UI/UX Design
                    </button>
                </div> */}
                <div className='project-img-section'>
                    <div className='project-img-box' data-aos="zoom-in">
                        <div className='project-img'>
                            <img src="/image/project-banner-1.webp" className='project-banner-image' />
                        </div>

                        <div className='project-title-text'>Water Drink Reminder</div>
                        <div className='project-text'>Application Development</div>
                    </div>
                    <div className='project-img-box' data-aos="zoom-in" >
                        <div className='project-img'>
                            <img src="/image/project-banner-2.webp" className='project-banner-image' />
                        </div>
                        <div className='project-title-text'>GPS Speedometer</div>
                        <div className='project-text'>Application Development</div>
                    </div>
                    <div className='project-img-box' data-aos="zoom-in">
                        <div className='project-img'>
                            <img src="/image/project-banner-3.webp" className='project-banner-image' />
                        </div>
                        <div className='project-title-text'>Chat & SMS Messanger</div>
                        <div className='project-text'>Application Development</div>
                    </div>
                    <div className='project-img-box' data-aos="zoom-in">
                        <div className='project-img'>
                            <img src="/image/project-banner-4.webp" className='project-banner-image' />
                        </div>
                        <div className='project-title-text'>Gallery Vault</div>
                        <div className='project-text'>Application Development</div>
                    </div>
                </div>
            </div>
            {/* <div className='project-button'>
                <Link to={"/portfolio"} className='link-button'> <button>View More</button></Link>
            </div> */}
        </div>
    )
}

export default Project