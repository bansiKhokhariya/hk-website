import React from 'react'
import Navbar from '../../../../Navbar/Navbar.jsx';
import Headline from '../../../../Headline/Headline';
import Footer from '../../../../Home/Footer/Footer.jsx';
import './WaterReminder.css'

const WaterReminder = () => {

  return (
    <>
      <Navbar activeNav="Company" />
      <Headline headlineText1="Get a Chance to know About Us and Relive Our Journey" headlineText2="Meet our dynamic team and discover the roadmap to success as we will let you know how we work" />
      <div className="banner-main-section"
        style={{
          background: `url('/frame/casestudies-app-page-banner.webp')`,
          backgroundSize: 'cover',
          display: 'flex',
          justifyContent: `center`,
          alignItems: 'center',
          height: '400px'
        }}
      >

        <div className='banner-section'>
          <div className='banner-title'>Case Studies</div>
        </div>

      </div>


      <div className='website-main-section'>
        <div className='website-innner-section'>
          {/* section 1 */}
          <div className='water-sec-1'>
            <div className='water-sec-1-content'>
              <div className='casestudy-title'>
                Water Reminder: Drink Water Mobile Application
              </div>
              <div className='casestudy-content'>
                  <span style={{ fontWeight: "600" }}> Short Summary Description </span> - With timely reminders to drink water throughout the day, the Water Reminder app is a smartphone application that helps users maintain optimal levels of hydration.
              </div>
            </div>
            <div>
              <img src="/image/water-reminder-icon.webp" className='water-reminder-icon'/>
            </div>
          </div>
        </div>
        <Footer />
      </div>


    </>
  )
}

export default WaterReminder