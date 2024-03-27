import Navbar from '../../../Navbar/Navbar.jsx';
import Headline from '../../../Headline/Headline';
import Footer from '../../../Home/Footer/Footer.jsx';
import Banner from '../../../Banner/Banner.jsx';
import './Culture.css'

const bannerObject = {
  boxSide: 'right',
  backgroundBanner: `/frame/our-culture-page-banner.webp`,
  bannerTitle: `Our Culture`,
  bannerTitleSpan: ``,
  bannerContent: `HKAPPS is known for its dynamic culture of creativity, teamwork, and enthusiasm. Our culture, which values diversity, encourages creativity, and drives the success of our team and projects, is the foundation of our mobile app development process.`,
};

const Culture = () => {
  return (
    <>
      <Navbar activeNav="Company" />
      <Headline headlineText1="Get a Chance to know About Us and Relive Our Journey" headlineText2="Meet our dynamic team and discover the roadmap to success as we will let you know how we work" />
      <Banner bannerObject={bannerObject} />

      {/* section 1 */}
      <div className='website-main-section'>
        <div className='website-innner-section'>
          <div className='shopify-description'>
            <div className='culture-value-section'>
              <div className='we-are-text-1'>Core Values</div>
              <div className='culture-value-section-content'>
                <div className='culture-value-content'>
                  <div className='culture-value-content-bx'>
                    <div className='culture-value-content-bx-up'>
                      <div>
                        <svg width="20" height="30" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M15.9308 17.4907C14.6987 18.38 13.9616 19.8467 13.9616 21.4142C13.9616 21.6984 13.8498 21.9709 13.6488 22.1718C13.4479 22.3727 13.1754 22.4856 12.8912 22.4856H6.97492C6.69077 22.4856 6.41825 22.3727 6.21732 22.1718C6.01639 21.9709 5.90351 21.6984 5.90351 21.4142C5.9037 20.6454 5.72268 19.8874 5.37514 19.2016C5.02759 18.5158 4.52331 17.9216 3.90319 17.4671C1.42288 15.6629 4.9391e-05 12.8815 4.9391e-05 9.83871C-0.00422725 8.49817 0.269268 7.17128 0.803293 5.9417C1.33732 4.71211 2.12029 3.6065 3.10285 2.69455C5.1321 0.790661 7.78812 -0.157536 10.5909 0.0213892C15.6673 0.346026 19.7397 4.55131 19.8629 9.59443C19.94 12.7529 18.5065 15.6307 15.9308 17.4907ZM7.02292 17.7597C7.50368 18.5505 7.82378 19.4282 7.9649 20.3428H11.9023C12.0376 19.432 12.3526 18.5572 12.829 17.7692C13.3054 16.9813 13.9336 16.2959 14.6773 15.7529C16.6722 14.3129 17.7822 12.0887 17.7222 9.64586C17.6258 5.70307 14.433 2.41385 10.4549 2.15992C9.38233 2.08279 8.30547 2.22934 7.29255 2.59028C6.27963 2.95122 5.35276 3.51868 4.57068 4.25667C3.00535 5.7245 2.14394 7.70661 2.14394 9.83871C2.14394 12.2237 3.21535 14.3172 5.16317 15.7347C5.91019 16.2809 6.54217 16.969 7.02292 17.7597ZM14.2949 10.4801C14.095 10.285 13.9792 10.0195 13.9722 9.74016V9.73909C13.924 7.75377 12.2376 6.03201 10.2137 5.90237C9.93011 5.88419 9.66536 5.75409 9.47769 5.54071C9.29003 5.32732 9.19481 5.04812 9.213 4.76454C9.23118 4.48095 9.36128 4.2162 9.57467 4.02854C9.78805 3.84087 10.0672 3.74565 10.3508 3.76384C13.4536 3.96312 16.0389 6.62022 16.1139 9.68766C16.1208 9.97166 16.0147 10.2468 15.8188 10.4525C15.6229 10.6582 15.3533 10.7778 15.0693 10.7848H15.0425C14.7631 10.7846 14.4949 10.6753 14.2949 10.4801ZM13.2073 24.5008C13.4083 24.7018 13.5211 24.9743 13.5211 25.2584C13.5211 25.5426 13.4083 25.8151 13.2073 26.0161C13.0064 26.217 12.7339 26.3299 12.4497 26.3299H7.32839C7.04424 26.3299 6.77172 26.217 6.57079 26.0161C6.36986 25.8151 6.25698 25.5426 6.25698 25.2584C6.25698 24.9743 6.36986 24.7018 6.57079 24.5008C6.77172 24.2999 7.04424 24.187 7.32839 24.187H12.4497C12.7339 24.187 13.0064 24.2999 13.2073 24.5008ZM8.83372 28.9291C8.83372 28.3377 9.30835 27.8577 9.89977 27.8577H9.91049C10.1946 27.8577 10.4672 27.9706 10.6681 28.1715C10.869 28.3724 10.9819 28.6449 10.9819 28.9291C10.9819 29.2133 10.869 29.4858 10.6681 29.6867C10.4672 29.8876 10.1946 30.0005 9.91049 30.0005C9.31907 30.0005 8.83372 29.5205 8.83372 28.9291Z" fill="#007B42" />
                        </svg>
                      </div>
                      <div className='actionGame-box-title'>
                        Innovation
                      </div>
                    </div>
                    <div className='culture-value-content-bx-down'>
                      <div className='knowledge-base-content-text'>
                        We get our kicks from pushing the envelope and looking into uncharted territory. We not only promote innovation, but it is ingrained in our very being. Our group has the freedom to question the established quo, think outside the box, and develop ground-breaking ideas.
                      </div>
                    </div>
                  </div>
                  <div className='culture-value-content-bx'>
                    <div className='culture-value-content-bx-up'>
                      <div>
                        <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.37608 22.3556C5.34324 23.5293 2.7438 22.8328 1.57013 20.8C0.396463 18.7671 1.09298 16.1677 3.12582 14.994C5.15871 13.8203 7.75815 14.5168 8.93182 16.5497C10.1055 18.5825 9.40892 21.1819 7.37608 22.3556Z" stroke="#007B42" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M18.6239 22.3556C16.5911 21.1819 15.8945 18.5825 17.0682 16.5497C18.2418 14.5168 20.8413 13.8203 22.8742 14.994C24.907 16.1677 25.6035 18.7671 24.4299 20.8C23.2562 22.8328 20.6567 23.5293 18.6239 22.3556Z" stroke="#007B42" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M8.75049 5.24974C8.75049 2.9024 10.6534 0.999524 13.0008 0.999524C15.3481 0.999524 17.251 2.9024 17.251 5.24974C17.251 7.59712 15.3481 9.5 13.0008 9.5C10.6534 9.5 8.75049 7.59712 8.75049 5.24974Z" stroke="#007B42" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M4.06123 14.5898C4.05559 14.4589 4.05275 14.3279 4.05273 14.1968C4.05273 10.7447 6.00758 7.74924 8.87066 6.25691" stroke="#007B42" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M17.8111 21.7505C16.4219 22.638 14.7713 23.1523 13.0005 23.1523C11.2298 23.1523 9.57915 22.638 8.18994 21.7505" stroke="#007B42" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M17.1304 6.25722C19.9935 7.74955 21.9483 10.745 21.9483 14.197C21.9483 14.3286 21.9454 14.4596 21.9398 14.5898" stroke="#007B42" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div className='actionGame-box-title'>
                        Collaboration
                      </div>
                    </div>
                    <div className='culture-value-content-bx-down'>
                      <div className='knowledge-base-content-text'>
                        The key to our success is teamwork. We firmly believe in the transformative potential of teamwork, when a variety of skills come together to produce remarkable results. Every input is appreciated and every voice is heard.
                      </div>
                    </div>
                  </div>
                  <div className='culture-value-content-bx'>
                    <div className='culture-value-content-bx-up'>
                      <div>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.2292 23.0446L14.7316 25.0432L11.234 23.0446C7.85551 21.114 5.77051 17.5211 5.77051 13.6298V4.13883L14.7317 2L23.6929 4.13883V13.6299C23.6928 17.5211 21.6077 21.114 18.2292 23.0446Z" stroke="#007B42" strokeWidth="2" strokeMiterlimit="10" />
                          <path d="M11.2645 23.0795L7.41288 28.0017L5.54066 24.7901L2 23.6571L6.69999 17.944M18.1793 23.098L22.0124 28.0017L23.8846 24.7901L27.4253 23.6571L22.7825 18.0013M14.7312 8.01172L16.4374 10.3478L19.1865 11.2487L17.492 13.5933L17.4847 16.4862L14.7312 15.5991L11.9776 16.4862L11.9704 13.5933L10.2759 11.2487L13.0249 10.3478L14.7312 8.01172Z" stroke="#007B42" strokeWidth="2" strokeMiterlimit="10" />
                        </svg>
                      </div>
                      <div className='actionGame-box-title'>
                        Excellence
                      </div>
                    </div>
                    <div className='culture-value-content-bx-down'>
                      <div className='knowledge-base-content-text'>
                        Excellence is what we strive for in all that we do. We pursue excellence in whatever we do, from design to testing to customer service to coding. Our dedication to perfection guarantees our clients exceptional solutions that go above and beyond their expectations.
                      </div>
                    </div>
                  </div>
                  <div className='culture-value-content-bx'>
                    <div className='culture-value-content-bx-up'>
                      <div>
                        <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.9538 6.31574C19.9173 4.11416 18.1803 2.31831 16.0144 1.20922C13.8485 0.100134 11.376 -0.259599 8.98391 0.186318C6.59178 0.632235 4.41499 1.85864 2.79418 3.6736C1.17337 5.48857 0.200016 7.78967 0.0264379 10.2168C-0.129113 12.453 0.404459 14.683 1.55526 16.6066C2.70607 18.5302 4.41881 20.0549 6.46273 20.9752C7.15893 22.7003 8.27292 24.2253 9.70456 25.4132C11.1362 26.6011 12.8406 27.4146 14.6645 27.7806C16.4885 28.1466 18.3748 28.0536 20.1539 27.5099C21.9329 26.9662 23.549 25.989 24.8568 24.666C26.1646 23.343 27.1232 21.7157 27.6462 19.9305C28.1693 18.1452 28.2405 16.258 27.8535 14.4384C27.4665 12.6188 26.6333 10.9239 25.429 9.50607C24.2246 8.08826 22.6868 6.99196 20.9538 6.31574ZM10.9625 1.79724H11.5238C13.5536 1.92225 15.4837 2.72061 17.0086 4.06597C18.5336 5.41133 19.5663 7.22684 19.9434 9.22517L9.52184 1.91885C9.99812 1.84045 10.4798 1.79979 10.9625 1.79724ZM7.22049 2.60177L19.5224 11.2552L20.0276 11.6107C19.923 12.9607 19.5205 14.2706 18.8489 15.4463L4.11461 4.89377C4.98035 3.91522 6.04583 3.13366 7.23921 2.60177H7.22049ZM3.02942 6.41865L17.8011 16.9712C16.9407 17.9499 15.882 18.7344 14.6952 19.2725L1.89745 9.88003C2.03623 8.66143 2.42136 7.48378 3.02942 6.41865ZM1.89745 12.2094L12.4593 19.9461C11.78 20.0637 11.0893 20.1014 10.4012 20.0584C8.29639 19.9304 6.30035 19.0794 4.75079 17.6491C3.20123 16.2189 2.19328 14.2973 1.89745 12.2094ZM16.8656 26.1204C15.2875 26.1126 13.7366 25.7085 12.3554 24.9452C10.9741 24.1818 9.80679 23.0837 8.96054 21.7516C9.39913 21.839 9.84283 21.8984 10.289 21.9294H10.9719C13.7654 21.9238 16.4527 20.8584 18.4912 18.9484C20.5298 17.0384 21.7676 14.426 21.9548 11.6388C22.0087 10.6983 21.9395 9.75481 21.7489 8.83226C23.4662 9.90542 24.789 11.5068 25.5184 13.396C26.2478 15.2851 26.3445 17.3599 25.7941 19.3087C25.2436 21.2575 24.0756 22.975 22.4656 24.2033C20.8557 25.4316 18.8906 26.1044 16.8656 26.1204Z" fill="#007B42" />
                        </svg>
                      </div>
                      <div className='actionGame-box-title'>
                        Transparency
                      </div>
                    </div>
                    <div className='culture-value-content-bx-down'>
                      <div className='knowledge-base-content-text'>
                        Authenticity and open communication are essential to our culture. We value honest and forthcoming communication, both within the team and with our clients. It promotes responsibility, trust, and a happy workplace.
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img src="/image/culture-value.webp" className='culture-value-img' alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div className='culture-fun-section'>
        <div className='culture-image-container'>
          <img src="/image/culture-fun.webp" className='culture-fun-img' alt="" />
          <div className='culture-content-overlay'>
            <div className='culture-fun-title'>Fun and Team Building</div>
            <div className='culture-fun-box culture-first-fun-bx'>
              <div className='culture-fun-box-title'>
                Team Events
              </div>
              <div className='culture-fun-box-text'>
                We believe in providing our team with opportunity to communicate, work together, and have fun, from coding competitions to team-building weekends. The events strengthen bonds and promote an overwhelming sense of teamwork.
              </div>
            </div>
            <div className='culture-fun-box culture-center-fun-bx'>
              <div className='culture-fun-box-title'>
                Milestone Celebration
              </div>
              <div className='culture-fun-box-text '>
                All successes, no matter how little, are acknowledged and honoured. Occasionally, whether it's an app launch gone well, an anniversary at work, or a personal achievement, we take the time to recognize and celebrate our team's successes.
              </div>
            </div>
            <div className='culture-fun-box culture-last-fun-bx'>
              <div className='culture-fun-box-title'>
                Workspace
              </div>
              <div className='culture-fun-box-text'>
                Even though we take our work very seriously, we also value a relaxed and welcoming environment. Communication is encouraged by our open-door approach, and the staff is always willing to help one another.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div className='culture-back-section'>
        <div className='culture-back-image-container'>
          <img src="/image/culture-back.webp" className='culture-back-image' />
          <div className='culture-back-overlay'>
            <div className='culture-back-title'>Giving Back</div>
            <div className='culture-back-box-section'>
              <div className='culture-back-box'>
                <div className='culture-back-box-title'>Involvement in the Community</div>
                <div className='culture-back-box-text'>
                We think it's important to give back to the community that has helped us. Our group is involved in giving back, community service, and projects that have a good effect.
                </div>
                <div>
                  <svg className='cuture-back-svg' width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="120.757" height="120" rx="60" fill="#007B42" />
                    <path d="M60.4996 56.7441C55.6656 56.7386 51.0311 54.8161 47.6127 51.3982C44.1943 47.9804 42.271 43.3462 42.2648 38.5122C42.2648 38.0436 42.4509 37.5941 42.7823 37.2628C43.1137 36.9314 43.5631 36.7453 44.0317 36.7453C44.5003 36.7453 44.9498 36.9314 45.2811 37.2628C45.6125 37.5941 45.7987 38.0436 45.7987 38.5122C45.7987 46.6195 52.3923 53.2131 60.4996 53.2131C68.6069 53.2131 75.2005 46.6195 75.2005 38.5122C75.2005 38.0436 75.3867 37.5941 75.7181 37.2628C76.0494 36.9314 76.4988 36.7453 76.9675 36.7453C77.4361 36.7453 77.8855 36.9314 78.2169 37.2628C78.5482 37.5941 78.7344 38.0436 78.7344 38.5122C78.7282 43.3462 76.8049 47.9804 73.3865 51.3982C69.9681 54.8161 65.3336 56.7386 60.4996 56.7441ZM60.4996 41.7781C61.2839 41.7958 62.0639 41.6567 62.7937 41.3688C63.5236 41.081 64.1885 40.6502 64.7496 40.1018C65.3106 39.5535 65.7565 38.8985 66.061 38.1755C66.3654 37.4524 66.5223 36.6758 66.5225 35.8913C66.5227 35.1067 66.3662 34.3301 66.0621 33.6068C65.758 32.8836 65.3125 32.2285 64.7517 31.6798C64.1909 31.1312 63.5262 30.7001 62.7965 30.4118C62.0668 30.1236 61.2869 29.9841 60.5025 30.0014C58.9636 30.0355 57.4992 30.6706 56.4228 31.7708C55.3463 32.8711 54.7433 34.3491 54.743 35.8883C54.7426 37.4276 55.3448 38.9058 56.4207 40.0066C57.4966 41.1074 58.9607 41.7433 60.4996 41.7781ZM30.8327 57.978C30.4438 58.2202 30.1642 58.6041 30.0529 59.0485C29.9416 59.493 30.0073 59.9633 30.2362 60.3602C30.465 60.7572 30.8391 61.0497 31.2795 61.1761C31.7199 61.3025 32.1922 61.2529 32.5967 61.0377C35.9749 59.0938 39.9859 58.5686 43.7507 59.5771C47.5155 60.5857 50.7269 63.0457 52.6809 66.4181C54.6255 69.7956 55.1511 73.8065 54.1424 77.571C53.1338 81.3356 50.6733 84.5464 47.3006 86.4993C46.9117 86.7416 46.6321 87.1254 46.5208 87.5699C46.4095 88.0143 46.4752 88.4846 46.704 88.8816C46.9329 89.2785 47.307 89.571 47.7474 89.6974C48.1878 89.8238 48.66 89.7742 49.0646 89.5591C53.2486 87.1374 56.3012 83.155 57.5527 78.4855C58.8043 73.816 58.1526 68.8407 55.7406 64.6511C50.7137 55.946 39.5349 52.9481 30.8327 57.975V57.978ZM34.7347 69.9814C33.3819 70.7632 32.3952 72.0504 31.9914 73.5597C31.5877 75.0691 31.8001 76.677 32.582 78.0298C33.3638 79.3825 34.651 80.3693 36.1603 80.773C37.6697 81.1767 39.2776 80.9643 40.6304 80.1825C41.9831 79.4007 42.9699 78.1135 43.3736 76.6041C43.7773 75.0948 43.5649 73.4869 42.7831 72.1341C42.0013 70.7813 40.7141 69.7946 39.2047 69.3909C37.6954 68.9871 36.0874 69.1996 34.7347 69.9814ZM89.8779 58.1488C87.8061 56.9458 85.5165 56.1653 83.1413 55.8524C80.7661 55.5396 78.3525 55.7005 76.0398 56.3259C73.7241 56.9406 71.5532 58.0082 69.6526 59.4669C67.7521 60.9257 66.1595 62.7468 64.967 64.8249C63.7641 66.8961 62.9837 69.1853 62.6708 71.56C62.3579 73.9347 62.5188 76.3478 63.1441 78.66C63.7578 80.9757 64.8247 83.1467 66.2831 85.0474C67.7414 86.948 69.5622 88.5406 71.6401 89.7328C71.8414 89.8582 72.0658 89.9418 72.3001 89.9786C72.5343 90.0154 72.7736 90.0047 73.0036 89.9471C73.2336 89.8895 73.4497 89.7862 73.6389 89.6433C73.8282 89.5005 73.9867 89.321 74.1052 89.1156C74.2236 88.9102 74.2995 88.683 74.3283 88.4476C74.3571 88.2123 74.3382 87.9735 74.2728 87.7456C74.2074 87.5177 74.0967 87.3053 73.9475 87.121C73.7983 86.9368 73.6135 86.7844 73.4041 86.6731C70.0057 84.7088 67.5732 81.5401 66.5543 77.7471C65.5354 73.954 66.0596 69.9902 68.0238 66.5918C69.9881 63.1934 73.1597 60.7609 76.9498 59.742C80.7399 58.723 84.7037 59.2443 88.1051 61.2115C88.5108 61.4462 88.9932 61.5101 89.446 61.3891C89.8989 61.2682 90.2852 60.9723 90.5199 60.5665C90.7546 60.1608 90.8185 59.6784 90.6975 59.2256C90.5766 58.7727 90.2807 58.3864 89.875 58.1517L89.8779 58.1488ZM85.9759 70.1522C84.627 69.4304 83.0502 69.2616 81.579 69.6813C80.1078 70.1011 78.8576 71.0766 78.0926 72.4015C77.3276 73.7264 77.108 75.2969 77.48 76.7809C77.852 78.2648 78.7866 79.546 80.0861 80.3533C81.4351 81.0751 83.0118 81.2439 84.483 80.8242C85.9542 80.4044 87.2044 79.4289 87.9694 78.104C88.7344 76.7791 88.9541 75.2086 88.582 73.7246C88.21 72.2407 87.2754 70.9595 85.9759 70.1522Z" fill="white" />
                  </svg>
                </div>
              </div>
              <div className='culture-back-box'>
                <div className='culture-back-box-title'>Social Responsibility</div>
                <div className='culture-back-box-text'>
                Our commitment to social responsibility extends beyond our work. Corporate social responsibility, code of conduct, and environmental responsibility are important to our company's ideals.
                </div>
                <div>
                  <svg className='cuture-back-svg' width="120" height="121" viewBox="0 0 120 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.5" width="120" height="120" rx="60" fill="#007B42" />
                    <path d="M78.6829 68.5513L87.3655 60.3403C93.462 54.2439 93.462 44.3597 87.3655 38.2632C81.2691 32.1667 71.3849 32.1667 65.2884 38.2632L52.9923 50.2098C50.9223 52.2127 50.8951 55.523 52.9319 57.5597V57.5598C54.945 59.5729 58.2092 59.5729 60.2223 57.5598L62.4235 55.3586C63.2702 54.5118 64.6434 54.5118 65.4902 55.3586L79.1559 69.0243C80.8107 70.6791 80.8107 73.3619 79.1559 75.0167C77.5012 76.6715 74.8184 76.6715 73.1636 75.0167" stroke="white" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M62.7988 77.517L66.5077 81.2259C68.2846 83.0028 71.1654 83.0028 72.9422 81.2259C74.719 79.4492 74.719 76.5683 72.9422 74.7914L69.2137 71.0629" stroke="white" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M60.7952 42.5741L56.0323 37.8114C49.6196 31.3986 39.2224 31.3986 32.8095 37.8114C26.3968 44.2242 26.3968 54.6214 32.8095 61.0342L34.5605 62.7852" stroke="white" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M45.7988 84.5301L45.8576 84.5888C47.6662 86.3975 50.5987 86.3975 52.4073 84.5888L54.7772 82.219C56.586 80.4103 56.586 77.4778 54.7772 75.6692L54.7186 75.6105C52.9098 73.8018 49.9775 73.8018 48.1687 75.6105L45.7988 77.9803C43.9902 79.789 43.9902 82.7215 45.7988 84.5301Z" stroke="white" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M39.0884 78.0223L39.147 78.0809C40.9558 79.8897 43.8881 79.8897 45.6968 78.0809L51.6724 72.1055C53.481 70.2968 53.481 67.3643 51.6724 65.5557L51.6136 65.497C49.805 63.6883 46.8725 63.6883 45.0639 65.497L39.0884 71.4725C37.2798 73.2812 37.2798 76.2137 39.0884 78.0223Z" stroke="white" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M32.481 71.4168L32.5396 71.4755C34.3484 73.2842 37.2809 73.2842 39.0895 71.4755L42.7452 67.8198C44.5539 66.0112 44.5539 63.0788 42.7452 61.2701L42.6865 61.2113C40.8778 59.4027 37.9454 59.4027 36.1367 61.2113L32.481 64.8671C30.6724 66.6757 30.6724 69.6082 32.481 71.4168Z" stroke="white" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M54.708 82.3024L60.0729 87.6674C61.8498 89.4442 64.7305 89.4442 66.5074 87.6674C68.2843 85.8906 68.2843 83.0097 66.5074 81.2328" stroke="white" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className='website-main-section'>
        <div className='website-innner-section'>
          <div className='shopify-description'>

            {/* section 4 */}
            <div className='culture-join-section'>
              <img src="/image/culture-join.webp" className='culture-join-image' alt="" />
              <div className='culture-join-overlay'>
                <div className='culture-join-title'>Join Our Culture</div>
                <div className='culture-join-text'>
                HKAPPS is the place for you if you're serious about developing mobile apps and want a work environment that values your ideas, improves your abilities, and encourages your growth. Visit our Careers page to learn how you can contribute to a culture that is affecting mobile technology.
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Culture