import Navbar from '../../Navbar/Navbar.jsx';
import Headline from '../../Headline/Headline';
import Discuss from '../../Home/Discuss/Discuss.jsx';
import Footer from '../../Home/Footer/Footer.jsx';
import Banner from '../../Banner/Banner.jsx';
import './Apply.css'

const bannerObject = {
  boxSide: 'right',
  backgroundBanner: `/frame/apply-page-banner.webp`,
  bannerTitle: `How To Apply`,
  bannerTitleSpan: ``,
  bannerContent: `To apply for any of the listed positions, please send your resume and a cover letter to (hr@hkapps.co) Clearly mention the position you are applying for in the subject line.`,
};

const Apply = () => {
  return (
    <>
      <Navbar activeNav="Career" />
      <Headline headlineText1="Mobile App Development" headlineText2="IT Services and IT Consulting" />

      <Banner bannerObject={bannerObject} />

      <div className='website-main-section'>
        <div className='website-innner-section'>

          <div className='apply-section'>
            <div className='apply-form-section'>
              <div className='we-are-text-1'>
                Interview Application Form
              </div>
              <svg className='vertical-line-svg' width="1150" height="2" viewBox="0 0 1150 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.1" d="M1 1L1149 1" stroke="#007B42" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <div className='apply-dark-black-text'>
                <div>
                  monny.admin@gmail.com <a style={{ color: "#007B42", textDecoration: "none" }} href=""> Switch account</a>
                </div>
                <div>
                  <svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.3037 14.2296L15.18 18.4071C14.7375 18.8558 14.0125 18.8558 13.57 18.4071L9.44625 14.2296C8.81 13.5858 9.26625 12.4946 10.1713 12.4946H12.5V10.6196C12.5 9.58457 13.3387 8.74457 14.375 8.74457C15.4113 8.74457 16.25 9.58457 16.25 10.6196V12.4946H18.5788C19.4837 12.4946 19.94 13.5858 19.3037 14.2296ZM30 15.5908C30 20.7883 25.795 24.9933 20.625 24.9933H6.875C3.08375 24.9933 0 21.9096 0 18.1183C0 16.0233 0.88625 13.9658 2.37125 12.6158C2.515 12.4858 2.5975 12.3033 2.5725 12.1746C2.3375 10.9658 2.32375 9.72582 2.53 8.48457C3.22875 4.27707 6.51 0.93457 10.6962 0.16957C15.29 -0.669179 19.8762 1.66332 21.8575 5.84457C21.9325 6.00207 22.0763 6.10957 22.2638 6.14707C26.745 7.04082 30 11.0121 30 15.5908ZM26.25 15.6183C26.25 12.7946 24.265 10.3696 21.5287 9.82332C20.17 9.55082 19.0562 8.68707 18.47 7.45207C17.3725 5.13582 15.1112 3.74457 12.6125 3.74457C12.2038 3.74457 11.7887 3.78082 11.3725 3.85832C8.7775 4.33332 6.6625 6.48832 6.23 9.09957C6.0975 9.89832 6.105 10.6921 6.255 11.4596C6.52875 12.8721 6.0075 14.3783 4.895 15.3908C4.2 16.0233 3.75 17.0933 3.75 18.1196C3.75 19.8433 5.1525 21.2446 6.875 21.2446H20.625C23.7262 21.2446 26.25 18.7208 26.25 15.6196V15.6183Z" fill="#007B42" />
                  </svg>
                </div>
              </div>
              <div className='apply-gray-text'>
                The name, email, and photo associated with your Google account will be recorded when you upload files and submit this form
              </div>
              <svg className='vertical-line-svg' width="1150" height="2" viewBox="0 0 1150 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.1" d="M1 1L1149 1" stroke="#007B42" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <div className='apply-gray-text' style={{ color: "#FF0000" }}>
                * Indicates required question
              </div>
              <svg className='vertical-line-svg' width="1150" height="2" viewBox="0 0 1150 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.1" d="M1 1L1149 1" stroke="#007B42" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <div>
                <div className='apply-dark-black-text' >
                  <div>
                    Email <span style={{ color: "#FF0000" }}>*</span>
                  </div>
                </div>
                <br />
                <div className='form-square-checkbox'>
                  <input type="checkbox" id="email" name="email" value="email" />
                  <label htmlFor="email" className='apply-gray-text' style={{ color: "black" }}> Record <span style={{ fontWeight: "600" }}> monny.admin@gmail.com </span> as the email to be included with my response</label>
                </div>
              </div>
              <svg className='vertical-line-svg' width="1150" height="2" viewBox="0 0 1150 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.1" d="M1 1L1149 1" stroke="#007B42" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <div>
                <div className='apply-dark-black-text' >
                  <div>
                    Attached Resume
                  </div>
                </div>
                <br />
                <div className='apply-upload'>
                  <label htmlFor="pic" className='apply-upload-bx'>
                    <span style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="20" fill="white" />
                        <path d="M20 9.54688C16.9008 9.54688 14.3168 11.7493 13.7264 14.6749C10.416 15.6545 8 18.7177 8 22.3469C8 26.7653 11.5816 30.3469 16 30.3469H24C28.4184 30.3469 32 26.7653 32 22.3469C32 18.7177 29.584 15.6545 26.2736 14.6749C25.6832 11.7493 23.0992 9.54688 20 9.54688Z" fill="#BCEEE4" />
                        <path d="M17.6572 25.151C17.5192 25.289 17.3319 25.3666 17.1366 25.3666C16.9414 25.3666 16.7541 25.289 16.616 25.151C16.478 25.0129 16.4004 24.8256 16.4004 24.6304C16.4004 24.4351 16.478 24.2478 16.616 24.1098L17.9176 22.8082C18.1911 22.5346 18.5158 22.3176 18.8732 22.1696C19.2306 22.0215 19.6136 21.9453 20.0004 21.9453C20.3873 21.9453 20.7703 22.0215 21.1277 22.1696C21.485 22.3176 21.8097 22.5346 22.0832 22.8082L23.3848 24.1098C23.5229 24.2478 23.6005 24.4351 23.6005 24.6304C23.6005 24.8256 23.5229 25.0129 23.3848 25.151C23.2468 25.289 23.0595 25.3666 22.8642 25.3666C22.669 25.3666 22.4817 25.289 22.3436 25.151L21.0416 23.8494C20.9487 23.7563 20.8438 23.6762 20.7296 23.611V29.6474C20.7296 29.8595 20.6453 30.063 20.4953 30.2131C20.3453 30.3631 20.1418 30.4474 19.9296 30.4474C19.7175 30.4474 19.514 30.3631 19.3639 30.2131C19.2139 30.063 19.1296 29.8595 19.1296 29.6474V23.703C19.07 23.747 19.0128 23.7954 18.9592 23.8494L17.6572 25.151Z" fill="#007B42" />
                      </svg>
                      Add File
                    </span>
                    <input type="file" id="pic" />
                  </label>
                </div>
              </div>
              <svg className='vertical-line-svg' width="1150" height="2" viewBox="0 0 1150 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.1" d="M1 1L1149 1" stroke="#007B42" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <div className='input-box-area-section'>
                <div className='input-box-area'>
                  <label htmlFor="" className='label-text'>
                    Name of Employee*
                  </label>
                  <br />
                  <br />
                  <input type="text" placeholder='Your answer' />
                </div>
                <div className='input-box-area'>
                  <label htmlFor="" className='label-text'>
                    Contact Mobile/Email*
                  </label>
                  <br />
                  <br />
                  <input type="text" placeholder='Your answer' />
                </div>
                <div className='input-box-area'>
                  <label htmlFor="" className='label-text'>
                    Location-State/City/Pincode*
                  </label>
                  <br />
                  <br />
                  <input type="text" placeholder='Your answer' />
                </div>
                <div className='input-box-area'>
                  <label htmlFor="" className='label-text'>
                    Education*
                  </label>
                  <br />
                  <br />
                  <input type="text" placeholder='Your answer' />
                </div>
              </div>
              <svg className='vertical-line-svg' width="1150" height="2" viewBox="0 0 1150 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.1" d="M1 1L1149 1" stroke="#007B42" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <div className='apply-checkbox-section'>
                <div className='square-checkbox-section'>
                  <div className='label-text'>
                    Work Experience*
                  </div>
                  <div className='form-square-checkbox-section'>
                    <input type="checkbox" id="Internship" name="Internship" value="Internship" />
                    <label htmlFor="Internship" className='label-text'> Internship </label>
                  </div>
                  <div className='form-square-checkbox-section'>
                    <input type="checkbox" id="Fresher" name="Fresher" value="Fresher" />
                    <label htmlFor="Fresher" className='label-text'> Fresher </label>
                  </div>
                  <div className='form-square-checkbox-section'>
                    <input type="checkbox" id="2Year" name="2Year" value="2Year" />
                    <label htmlFor="2Year" className='label-text'> 1-2 Year </label>
                  </div>
                  <div className='form-square-checkbox-section'>
                    <input type="checkbox" id="5Year" name="5Year" value="5Year" />
                    <label htmlFor="5Year" className='label-text'> 3-5 Year </label>
                  </div>
                  <div className='form-square-checkbox-section'>
                    <input type="checkbox" id="5Above" name="5Above" value="5Above" />
                    <label htmlFor="5Above" className='label-text'> 5 and Above </label>
                  </div>
                </div>
                <div className='square-checkbox-section'>
                  <div className='label-text'>
                    Preferred Work Type*
                  </div>
                  <div className='form-radio-checkbox-section'>
                    <input type="radio" id="workFromHome" name="radio" value="workFromHome" />
                    <label htmlFor="workFromHome" className='label-text'> Work from home </label>
                  </div>
                  <div className='form-radio-checkbox-section'>
                    <input type="radio" id="workFromOffice" name="radio" value="workFromOffice" />
                    <label htmlFor="workFromOffice" className='label-text'> Work from office </label>
                  </div>
                  <div className='form-radio-checkbox-section'>
                    <input type="radio" id="hybrid" name="radio" value="hybrid" />
                    <label htmlFor="hybrid" className='label-text'> Hybrid </label>
                  </div>
                  <div className='form-radio-checkbox-section'>
                    <input type="radio" id="fullTime" name="radio" value="fullTime" />
                    <label htmlFor="fullTime" className='label-text'> Full Time </label>
                  </div>
                  <div className='form-radio-checkbox-section'>
                    <input type="radio" id="partTime" name="radio" value="partTime" />
                    <label htmlFor="partTime" className='label-text'> Part Time </label>
                  </div>
                </div>
              </div>
              <svg className='vertical-line-svg' width="1150" height="2" viewBox="0 0 1150 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.1" d="M1 1L1149 1" stroke="#007B42" strokeWidth="2" strokeLinecap="round" />
              </svg>

              <div className=''>
                <div className='input-box-area' >
                  <label htmlFor="" className='label-text'>
                    Last Designation
                  </label>
                  <br />
                  <br />
                  <input style={{ width: "100%" }} type="text" placeholder='Your answer' />
                </div>
              </div>

              <svg className='vertical-line-svg' width="1150" height="2" viewBox="0 0 1150 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.1" d="M1 1L1149 1" stroke="#007B42" strokeWidth="2" strokeLinecap="round" />
              </svg>

              <div className=''>
                <div className='input-box-area' >
                  <label htmlFor="" className='label-text'>
                    Awailable Date for Interview *
                  </label>
                  <br />
                  <br />
                  <input style={{ width: "100%" }} type="date" />
                </div>
              </div>

              <svg className='vertical-line-svg' width="1150" height="2" viewBox="0 0 1150 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.1" d="M1 1L1149 1" stroke="#007B42" strokeWidth="2" strokeLinecap="round" />
              </svg>


              <div className='apply-checkbox-section'>
                <div className='square-checkbox-section'>
                  <div className='label-text'>
                    Prefered Interview Mode*
                  </div>
                  <div className='form-radio-checkbox-section'>
                    <input type="radio" id="online" name="radiointrview" value="online" />
                    <label htmlFor="online" className='label-text'> Online </label>
                  </div>
                  <div className='form-radio-checkbox-section'>
                    <input type="radio" id="faceToFace" name="radiointrview" value="faceToFace" />
                    <label htmlFor="faceToFace" className='label-text'> Face to Face </label>
                  </div>
                </div>
              </div>

              <svg className='vertical-line-svg' width="1150" height="2" viewBox="0 0 1150 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.1" d="M1 1L1149 1" stroke="#007B42" strokeWidth="2" strokeLinecap="round" />
              </svg>

              <div className='label-text'>
                A copy of your responses will be emailed to sagar1.bvminfotech@gmail.com.
              </div>

              <svg className='vertical-line-svg' width="1150" height="2" viewBox="0 0 1150 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.1" d="M1 1L1149 1" stroke="#007B42" strokeWidth="2" strokeLinecap="round" />
              </svg>

              <div className='form-submit-section'>
                <div className='process-bar-section'>
                  <svg className='process-bar-svg' width="422" height="8" viewBox="0 0 422 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 3.99219H418" stroke="#007B42" strokeWidth="8" strokeLinecap="round" />
                  </svg>
                  <div className='label-text'>
                    Page 1 of 1
                  </div>
                </div>
                <div className='process-bar-section'>
                  <button className='clear-form-button'>Clear form</button>
                  <button className='submit-form-button'>Submit</button>
                </div>
              </div>

              <svg className='vertical-line-svg' width="1150" height="2" viewBox="0 0 1150 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.1" d="M1 1L1149 1" stroke="#007B42" strokeWidth="2" strokeLinecap="round" />
              </svg>

              <div className='label-text'>
                Never submit passwords through Google Forms.
              </div>

              <svg className='vertical-line-svg' width="1150" height="2" viewBox="0 0 1150 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.1" d="M1 1L1149 1" stroke="#007B42" strokeWidth="2" strokeLinecap="round" />
              </svg>

              <div className='label-text'>
                This content is neither created nor endorsed by Google. <a href="https://docs.google.com/forms/u/0/d/e/1FAIpQLScKriSNJC7-OOuGl3iocIVcArqJHgV8pVl8bm0VIDd-HZjtSg/reportabuse?source=https://docs.google.com/forms/d/e/1FAIpQLScKriSNJC7-OOuGl3iocIVcArqJHgV8pVl8bm0VIDd-HZjtSg/viewform" style={{ borderBottom: "2px solid gray", textDecoration: "none", color: "black" }}>Report Abuse</a> - <a href="https://policies.google.com/terms" style={{ borderBottom: "2px solid gray", textDecoration: "none", color: "black" }}>Terms of Service</a> - <a href="https://policies.google.com/privacy" style={{ borderBottom: "2px solid gray", textDecoration: "none", color: "black" }}> Privacy Policy</a>
              </div>

            </div>
          </div>


        </div>
        <Footer />
      </div>
    </>
  );
}

export default Apply