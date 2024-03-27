import Navbar from '../../Navbar/Navbar.jsx';
import Headline from '../../Headline/Headline';
import Footer from '../../Home/Footer/Footer.jsx';
import Banner from '../../Banner/Banner.jsx';
import './InnovativeTeam.css'

const bannerObject = {
  boxSide: 'right',
  backgroundBanner: `/frame/innovativeTeam-page-banner.webp`,
  bannerTitle: `JOIN OUR FORWARD THINKING INNOVATORS`,
  bannerTitleSpan: ``,
  bannerContent: `We are an experienced, forward-thinking team of software engineers shaping a new reality with exciting ideas and cutting-edge technology. Join us and get new opportunities for career growth.`,
};

const InnovativeTeam = () => {
  return (
    <>
      <Navbar activeNav="Career" />
      <Headline headlineText1="Get a Chance to know About Us and Relive Our Journey" headlineText2="Meet our dynamic team and discover the roadmap to success as we will let you know how we work" />

      <Banner bannerObject={bannerObject} />

      <div className='website-main-section'>
        <div className='website-innner-section'>

          {/* section 1 */}
          <div className='innovativeTeam-main-section'>
            <div className='innovativeTeam-left-section'>
              <img src="/image/innovativeTeam-1.webp" className='innovativeTeam-1-image' alt="" />
            </div>
            <div className='innovativeTeam-center-section'>
              <div className='innovativeTeam-center-up-box'>
                <div className='innovativeTeam-center-up-box-title'>
                  Why
                </div>
                <div className='innovativeTeam-center-up-box-text'>
                  We at HKAPPS take great satisfaction in creating a lively and dynamic work environment that is based on our basic principles, goals, and objectives.
                </div>
              </div>
              <div className='innovativeTeam-center-down-box'>
                <div className='innovativeTeam-center-down-main'>
                  <div className='innovativeTeam-center-down-inner'>
                    <div>
                      <svg className='innovativeTeam-svg' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100" height="100" rx="50" fill="#E4F7F3" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M66.6608 26.14C66.571 25.8704 66.4138 25.6283 66.2041 25.4365C65.9943 25.2448 65.7391 25.1099 65.4625 25.0446C65.186 24.9793 64.8973 24.9858 64.624 25.0635C64.3506 25.1411 64.1017 25.2874 63.9008 25.4884L54.615 34.7742C54.3962 34.993 54.2427 35.2684 54.1716 35.5696C54.1006 35.8707 54.1147 36.1857 54.2125 36.4792L55.95 41.6925L50.4883 47.155C50.3291 47.3088 50.2022 47.4927 50.1148 47.696C50.0275 47.8994 49.9815 48.1181 49.9796 48.3394C49.9776 48.5607 50.0198 48.7801 50.1036 48.985C50.1874 49.1898 50.3112 49.3759 50.4677 49.5324C50.6241 49.6888 50.8102 49.8126 51.0151 49.8964C51.2199 49.9802 51.4394 50.0224 51.6606 50.0204C51.8819 50.0185 52.1006 49.9725 52.304 49.8852C52.5073 49.7979 52.6912 49.6709 52.845 49.5117L58.3075 44.05L63.5208 45.7875C63.8144 45.8853 64.1293 45.8995 64.4305 45.8284C64.7316 45.7573 65.007 45.6038 65.2258 45.385L74.5116 36.0992C74.7126 35.8984 74.8589 35.6495 74.9366 35.3762C75.0144 35.1029 75.0209 34.8143 74.9557 34.5377C74.8905 34.2612 74.7557 34.0059 74.5641 33.7962C74.3724 33.5864 74.1303 33.4291 73.8608 33.3392L68.4608 31.5392L66.6608 26.14ZM63.5975 42.2992L59.175 40.825L57.7 36.4025L64.3508 29.7525L65.5616 33.3842C65.6435 33.6297 65.7813 33.8527 65.9643 34.0357C66.1473 34.2187 66.3703 34.3565 66.6158 34.4384L70.2483 35.6492L63.5975 42.2992ZM50 28.3334C38.0333 28.3334 28.3333 38.0333 28.3333 50C28.3333 61.9667 38.0333 71.6667 50 71.6667C61.9667 71.6667 71.6667 61.9667 71.6667 50C71.6667 49.558 71.8423 49.1341 72.1548 48.8215C72.4674 48.5089 72.8913 48.3333 73.3333 48.3333C73.7754 48.3333 74.1993 48.5089 74.5118 48.8215C74.8244 49.1341 75 49.558 75 50C75 63.8075 63.8075 75 50 75C36.1925 75 25 63.8075 25 50C25 36.1925 36.1925 25 50 25C50.442 25 50.8659 25.1756 51.1785 25.4882C51.4911 25.8007 51.6667 26.2247 51.6667 26.6667C51.6667 27.1087 51.4911 27.5326 51.1785 27.8452C50.8659 28.1578 50.442 28.3334 50 28.3334ZM37.5 50C37.5 43.0967 43.0967 37.5 50 37.5C50.442 37.5 50.8659 37.3244 51.1785 37.0118C51.4911 36.6993 51.6667 36.2754 51.6667 35.8333C51.6667 35.3913 51.4911 34.9674 51.1785 34.6548C50.8659 34.3423 50.442 34.1667 50 34.1667C41.2558 34.1667 34.1667 41.2558 34.1667 50C34.1667 58.7442 41.2558 65.8333 50 65.8333C58.7442 65.8333 65.8333 58.7442 65.8333 50C65.8333 49.558 65.6577 49.134 65.3452 48.8215C65.0326 48.5089 64.6087 48.3333 64.1667 48.3333C63.7246 48.3333 63.3007 48.5089 62.9882 48.8215C62.6756 49.134 62.5 49.558 62.5 50C62.5 56.9033 56.9033 62.5 50 62.5C43.0967 62.5 37.5 56.9033 37.5 50Z" fill="#007B42" />
                      </svg>
                    </div>
                    <div className='innovativeTeam-center-down-inner-title'>
                      Mission
                    </div>
                  </div>
                  <div className='innovativeTeam-center-down-inner-text'>Provide innovative mobile app solutions that turn concepts into reality to empower people and businesses. Our commitment lies in providing cutting-edge, user-focused applications that improve people's lives and propel the digital revolution.</div>
                </div>
              </div>
            </div>
            <div className='innovativeTeam-center-section'>
              <div className='innovativeTeam-center-down-box'>
                <div className='innovativeTeam-center-down-main'>
                  <div className='innovativeTeam-center-down-inner'>
                    <div>
                      <svg className='innovativeTeam-svg' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100" height="100" rx="50" fill="#E4F7F3" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M48.2018 25V27.8881H51.2018V25H48.2018ZM39.8535 32.8622L34.2983 27.307L32.177 29.4283L37.7322 34.9835L39.8535 32.8622ZM64.1425 27.307L58.5873 32.8622L60.7086 34.9835L66.2638 29.4283L64.1425 27.307ZM44.181 39.3441H43.0465L43.0453 39.3484H32.2768H31.3702L30.9487 40.151L25.1725 51.1514L24.6274 52.1894L25.5031 52.969L48.4522 73.4021L49.7018 76.3923L50.9514 73.4021L73.9005 52.969L74.7761 52.1894L74.231 51.1514L68.4548 40.151L68.0333 39.3484H67.1268H56.3582L56.357 39.3441H55.2225H44.181ZM45.3144 42.3484H54.0892L56.3296 50.2682H43.074L45.3144 42.3484ZM42.1966 42.3484H33.1834L29.0247 50.2682H39.9562L42.1966 42.3484ZM30.3505 53.2682L45.779 67.0051L40.0384 53.2682H30.3505ZM53.6246 67.0051L69.0531 53.2682H59.3651L53.6246 67.0051ZM70.3788 50.2682H59.4473L57.2069 42.3484H66.2202L70.3788 50.2682ZM49.7018 68.6118L43.2898 53.2682H56.1137L49.7018 68.6118Z" fill="#007B42" />
                      </svg>
                    </div>
                    <div className='innovativeTeam-center-down-inner-title'>
                      Values
                    </div>
                  </div>
                  <div className='innovativeTeam-center-down-inner-text'>
                    At the core of everything we do are our values. Our daily actions and decisions are guided by integrity, teamwork, innovation, and customer-centricity. We are committed to producing outstanding goods while also having a beneficial influence on the communities we serve.
                  </div>
                </div>
              </div>
              <div className='innovativeTeam-center-down-box'>
                <div className='innovativeTeam-center-down-main'>
                  <div className='innovativeTeam-center-down-inner'>
                    <div>
                      <svg className='innovativeTeam-svg' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100" height="100" rx="50" fill="#E4F7F3" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M39.3183 32.7383C38.182 32.7383 37.0456 32.8519 35.9092 33.1928C36.4774 32.3974 37.1592 31.8292 38.0683 31.3747C40.5683 30.3519 43.4092 31.4883 44.5456 33.9883C42.9547 33.1928 41.1365 32.7383 39.3183 32.7383ZM60.682 32.7383C58.8638 32.7383 57.0456 33.1928 55.4547 33.9883C56.1365 32.1701 57.9547 31.0338 59.8865 31.0338C61.591 31.0338 63.0683 31.8292 64.091 33.1928C62.9547 32.9656 61.8183 32.7383 60.682 32.7383ZM70.4547 44.4428C65.9092 41.6019 60.0001 41.7156 55.4547 44.6701C54.5456 45.2383 50.0001 50.9201 50.0001 50.9201C50.0001 50.9201 45.3411 45.2383 44.5456 44.6701C40.0001 41.7156 34.2047 41.7156 29.6592 44.4428L33.0683 37.3974C33.182 37.1701 33.2956 37.0565 33.5229 36.9428C36.3186 35.1149 37.3846 35.1184 39.1278 35.124C39.2268 35.1243 39.3281 35.1247 39.432 35.1247C41.1365 35.1247 43.182 35.4656 45.341 37.2838C45.341 37.2838 45.4547 37.511 45.4547 37.6247L46.1365 41.261H47.3865C47.6138 41.0338 47.9547 40.8065 48.2956 40.6928C49.432 40.2383 50.682 40.2383 51.8183 40.6928C52.0575 40.7726 52.2407 40.9082 52.4465 41.0606C52.5341 41.1254 52.6257 41.1932 52.7274 41.261H53.9774L54.5456 37.7383C54.5675 37.6945 54.5894 37.6465 54.6121 37.5968C54.7072 37.3881 54.8166 37.1482 55.0001 37.0565C56.3638 35.8065 57.9547 35.1247 60.5683 35.1247C64.6592 35.1247 66.4774 36.9428 66.4774 36.9428C66.7047 37.0565 66.8183 37.1701 66.932 37.3974L70.4547 44.4428ZM25 56.6039C25 50.013 30.3409 44.6721 36.9318 44.6721C43.5227 44.6721 48.8636 50.013 48.8636 56.6039C48.8636 63.1948 43.5227 68.5357 36.9318 68.5357C30.3409 68.5357 25 63.1948 25 56.6039ZM28.9773 56.4903C28.9773 60.9221 32.6136 64.4448 36.9318 64.4448C41.25 64.4448 44.8864 60.9221 44.8864 56.4903C44.8864 52.0585 41.3636 48.5357 36.9318 48.5357C32.5 48.5357 28.9773 52.1721 28.9773 56.4903ZM51.1364 56.6039C51.1364 50.013 56.4773 44.6721 63.0682 44.6721C69.6591 44.6721 75 50.013 75 56.6039C75 63.1948 69.6591 68.5357 63.0682 68.5357C56.4773 68.5357 51.1364 63.1948 51.1364 56.6039ZM55.1136 56.4903C55.1136 60.9221 58.75 64.4448 63.0682 64.4448C67.3864 64.4448 71.0227 60.9221 71.0227 56.4903C71.0227 52.0585 67.5 48.5357 63.0682 48.5357C58.6364 48.5357 55.1136 52.1721 55.1136 56.4903Z" fill="#007B42" />
                      </svg>
                    </div>
                    <div className='innovativeTeam-center-down-inner-title'>
                      Vision
                    </div>
                  </div>
                  <div className='innovativeTeam-center-down-inner-text'>
                    To be at the forefront of technological innovation, continuously pushing the boundaries of what's possible in mobile app development. We envision a future where our solutions positively impact people worldwide.                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='main-bottom-section'>
            <div className='main-bottom-box'>
              <div className='innovativeTeam-center-down-inner'>
                <div>
                  <svg className='innovativeTeam-svg' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100" height="100" rx="50" fill="#E4F7F3" />
                    <path d="M49.786 33.9215L56.4833 27.2242C57.7155 25.992 59.7133 25.992 60.9455 27.2242L60.9475 27.2262C61.5391 27.818 61.8715 28.6205 61.8715 29.4573C61.8715 30.2941 61.5391 31.0967 60.9475 31.6884L56.9693 35.6666L59.1617 33.4742C59.4547 33.1811 59.8025 32.9487 60.1853 32.7901C60.5682 32.6315 60.9785 32.5499 61.3929 32.5499C61.8072 32.5499 62.2176 32.6315 62.6004 32.7901C62.9832 32.9487 63.331 33.1811 63.624 33.4742L63.6259 33.4761C63.919 33.769 64.1514 34.1169 64.31 34.4997C64.4686 34.8825 64.5502 35.2928 64.5502 35.7072C64.5502 36.1215 64.4686 36.5319 64.31 36.9147C64.1514 37.2975 63.919 37.6453 63.6259 37.9383L60.5001 41.0643L61.8403 39.724C62.1333 39.431 62.4811 39.1986 62.8639 39.04C63.2467 38.8815 63.657 38.7998 64.0714 38.7998C64.4857 38.7998 64.896 38.8815 65.2788 39.04C65.6616 39.1986 66.0095 39.431 66.3024 39.724L66.3046 39.726C66.8963 40.3178 67.2287 41.1203 67.2287 41.9571C67.2287 42.794 66.8963 43.5965 66.3046 44.1883L63.1786 47.3141L64.5188 45.9739C65.1106 45.3823 65.9132 45.0499 66.75 45.0499C67.5868 45.0499 68.3893 45.3823 68.9811 45.9739L68.9831 45.9759C70.2152 47.2081 70.2152 49.2059 68.9831 50.4381L57.6681 61.7531C56.0513 63.3698 53.8584 64.2781 51.5719 64.2781H48.0003L37.2861 74.9922" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M31.4829 51.3339C32.0747 51.9255 32.8772 52.2578 33.714 52.2578C34.5508 52.2578 35.3533 51.9255 35.9451 51.3339L35.9471 51.3319C36.5388 50.7401 36.8711 49.9375 36.8711 49.1007C36.8711 48.2639 36.5388 47.4614 35.9471 46.8696L35.0523 45.9748C34.4606 45.3831 33.658 45.0507 32.8212 45.0507C31.9844 45.0507 31.1818 45.3831 30.5901 45.9748L30.5881 45.9768C29.9964 46.5686 29.6641 47.3711 29.6641 48.2079C29.6641 49.0447 29.9964 49.8473 30.5881 50.439L31.4829 51.3339Z" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M35.9473 46.8726C36.2402 47.1657 36.5881 47.3981 36.9709 47.5567C37.3537 47.7153 37.764 47.7969 38.1784 47.7969C38.5927 47.7969 39.0031 47.7153 39.3859 47.5567C39.7687 47.3981 40.1165 47.1657 40.4095 46.8726L40.4115 46.8706C41.0032 46.2789 41.3356 45.4763 41.3356 44.6395C41.3356 43.8027 41.0032 43.0002 40.4115 42.4084L37.731 39.728C37.438 39.435 37.0902 39.2025 36.7073 39.0439C36.3245 38.8854 35.9142 38.8037 35.4999 38.8037C35.0855 38.8037 34.6752 38.8854 34.2924 39.0439C33.9095 39.2025 33.5617 39.435 33.2687 39.728L33.2667 39.7299C32.6751 40.3217 32.3428 41.1242 32.3428 41.961C32.3428 42.7978 32.6751 43.6003 33.2667 44.1921L35.9473 46.8726Z" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M40.4113 42.404C41.6436 43.6362 43.6413 43.6362 44.8735 42.404L44.8755 42.402C46.1077 41.1698 46.1077 39.1719 44.8755 37.9397L40.4093 33.4736C39.1772 32.2413 37.1793 32.2413 35.9471 33.4736L35.9451 33.4756C34.713 34.7077 34.713 36.7056 35.9451 37.9377L40.4113 42.404Z" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M44.8755 37.943C45.4673 38.5348 46.2698 38.8672 47.1066 38.8672C47.9435 38.8672 48.746 38.5348 49.3378 37.943L49.3398 37.941C49.9314 37.3493 50.2638 36.5467 50.2638 35.7099C50.2638 34.8731 49.9314 34.0706 49.3398 33.4788L43.9807 28.1199C43.6877 27.8269 43.3399 27.5944 42.9571 27.4359C42.5743 27.2773 42.164 27.1957 41.7497 27.1957C41.3353 27.1957 40.925 27.2773 40.5422 27.4359C40.1594 27.5944 39.8116 27.8269 39.5186 28.1199L39.5165 28.1219C39.2235 28.4149 38.991 28.7627 38.8325 29.1455C38.6739 29.5283 38.5923 29.9386 38.5923 30.353C38.5923 30.7673 38.6739 31.1776 38.8325 31.5605C38.991 31.9433 39.2235 32.2911 39.5165 32.5841L44.8755 37.943Z" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M51.5708 64.2781L62.2849 74.9922" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M67.6421 51.7826L76.5705 60.7109" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M31.9284 51.7826L23 60.7109" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M44.4282 28.5703L51.571 24.999L55.1423 28.5703" stroke="#007B42" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className='innovativeTeam-center-down-inner-title'>
                  Collaborative and
                  Innovative Culture
                </div>
              </div>
              <div className='innovativeTeam-center-down-inner-text'>
                At HKAPPS ,at diverse perspectives lead to better solutions. Our teams work seamlessly together, fostering an environment where creativity thrives, and innovation is a constant pursuit. We celebrate the freedom to ideate, experiment, and learn from each other.
              </div>
            </div>
            <div className='main-bottom-box'>
              <div className='innovativeTeam-center-down-inner'>
                <div>
                  <svg className='innovativeTeam-svg' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100" height="100" rx="50" fill="#E4F7F3" />
                    <path d="M74.271 26.4648C74.271 25.6558 73.6152 25 72.8062 25H67.2593C66.4501 25 65.7944 25.6562 65.7944 26.4648C65.7944 27.2739 66.4501 27.9297 67.2593 27.9297H69.2695L64.8643 32.3353C64.4048 31.7377 63.9103 31.1681 63.3831 30.6294C59.9445 27.116 55.3475 25.1187 50.4433 25.0058C50.296 25.0019 50.148 25 50.0016 25H49.9806C49.8394 25 49.6983 25.002 49.5613 25.0054C44.6521 25.1187 40.0551 27.1157 36.6165 30.6294C33.1726 34.1488 31.276 38.7988 31.276 43.7236C31.276 46.8369 32.045 49.8799 33.5087 52.5963L25.4292 60.6758C24.8569 61.2477 24.8569 62.1754 25.4292 62.7476C25.7153 63.0333 26.0898 63.1763 26.4648 63.1763C26.8398 63.1763 27.2148 63.0333 27.5005 62.7476L35.1364 55.1113C36.6479 57.0829 38.5355 58.7352 40.6898 59.9724V70.3972C40.6898 70.8424 40.892 71.2631 41.2396 71.5408L45.1618 74.6792C45.4216 74.887 45.7443 75.0001 46.077 75H53.9223C54.2549 75 54.5772 74.8871 54.837 74.6792L58.7601 71.5412C58.9316 71.4039 59.0701 71.2299 59.1653 71.0318C59.2604 70.8338 59.3098 70.6169 59.3098 70.3972V59.9728C61.9914 58.4329 64.2515 56.255 65.8897 53.6323C67.7437 50.6649 68.7237 47.2386 68.7237 43.7236C68.7237 40.5792 67.9489 37.5469 66.4937 34.8491L71.3413 30.0011L71.3417 32.0122C71.3417 32.8213 71.9975 33.4771 72.8065 33.4771C73.6156 33.4771 74.2714 32.8208 74.2714 32.0122L74.271 26.4648ZM34.2056 43.7236C34.2056 35.2135 41.1243 28.1299 49.6323 27.9343C49.7482 27.9313 49.8645 27.9297 49.9806 27.9297H49.9996C50.1225 27.9297 50.2445 27.9312 50.3712 27.9346C55.4329 28.051 59.9327 30.608 62.7464 34.4531L52.7737 44.426L48.2624 39.9143C47.6901 39.3425 46.7629 39.3425 46.1906 39.9143L35.6857 50.4192C34.7271 48.3646 34.2056 46.0896 34.2056 43.7236ZM53.4085 72.0703H46.5908L43.6195 69.693V65.5861H50L56.3801 65.5857V69.6934L53.4085 72.0703ZM65.7939 43.724C65.7943 49.6872 62.4932 55.0797 57.1781 57.7969C56.9379 57.9197 56.7362 58.1064 56.5954 58.3366C56.4546 58.5667 56.3801 58.8313 56.3801 59.1011V62.6561H43.6195V59.1006C43.6195 58.5506 43.3113 58.047 42.8215 57.7964C40.5556 56.6382 38.6574 54.9922 37.2234 53.0246L47.2264 43.0217L51.738 47.5329C52.0127 47.8076 52.3852 47.962 52.7736 47.9621C53.1623 47.9621 53.5351 47.808 53.8094 47.5329L64.2925 37.0502C65.2546 39.0846 65.7939 41.3485 65.7939 43.724Z" fill="#007B42" />
                  </svg>
                </div>
                <div className='innovativeTeam-center-down-inner-title'>
                  In the Heart of
                  Innovation
                </div>
              </div>
              <div className='innovativeTeam-center-down-inner-text'>
                Nestled in [Surat], our office is more than just a workplace—it's a hub of creativity and collaboration. Open workspaces, breakout zones, and cutting-edge technology create an environment where ideas flourish.
              </div>
            </div>
          </div>

          {/* section 2 */}
          <div className='innovativeTeam-board-section'>
            <img src="/image/innovativeTeam-2.webp" className='innovativeTeam-board-image' alt="" />
          </div>

          {/* section 3 */}
          <div className='we-are-section'>
            <div className='we-are-section-article'>
              <div className='we-are-text' data-aos="fade-right">
                <div className='we-are-text-1-black'>Innovative Projects</div>
                <div className='we-are-text-3'>
                  Welcome to HKAPPS, the vibrant heart of innovation. We respectfully motivate you to learn more about the amazing world of mobile app creation, where imagination has no limits, in this special section of our online space.
                  <br /><br />
                  At HKAPPS, we create experiences that expand on possibilities rather than merely apps. The Innovative Projects section showcases our team's ground-breaking efforts, enthusiasm, and steadfast dedication. In this instance, we tell the story of obstacles overcome, limits crossed, and extraordinary solutions.
                  <br /><br />
                  Come along on a journey where we demonstrate the marriage of state-of-the-art technology, forward-thinking ideas, and unwavering commitment that forms the foundation of our creative endeavors. If you're an upcoming client looking for ideas or a tech enthusiast interested in what mobile technology could look like in the future.
                </div>
              </div>
              <div className='we-are-image-fluid' data-aos="fade-left">
                <img src="/image/innovativeTeam-3.webp" className='we-are-image' />
              </div>
            </div>
          </div>

          {/* section 4 */}
          <div className='collaborative-section'>
            <div className='collaborative-image-section'>
              <img src="/image/innovativeTeam-4.webp" className='collaborative-image' alt="" />
            </div>
            <div className='collaborative-content-section'>
              <div className='collaborative-content-title'>
                Collaborative Environment
              </div>
              <div className='we-are-text-3'>
              Regards and welcome to HKAPPS, the pulsating center of invention. We cordially encourage you to observe the spirit of cooperation that drives us to new heights in the quick-paced field of developing apps for mobile devices in this special section of our online space.
              </div>
              <div className='we-are-text-3'>
              At HKAPPS, we think that when smart minds come in common, amazing things can happen. The part on the collaborative environment offers more insight into our work environment than just a tour of our workspace. It delves into the harmony, ingenuity, and common interests that characterize our distinct culture.
              </div>
              <div className='collaborative-sm-bx-section'>
                <div className='collaborative-sm-bx'>
                  <div className='collaborative-sm-bx-title'>
                    Team Collaboration
                  </div>
                  <div className='collaborative-sm-bx-content'>
                    1. Cross-Functional Teams Agile
                    <br />
                    2. Agile Methodology
                    <br />
                    3. Project Collaboration Success Stories
                  </div>
                </div>
                <div className='collaborative-sm-bx'>
                  <div className='collaborative-sm-bx-title'>
                    Communication Channels
                  </div>
                  <div className='collaborative-sm-bx-content'>
                    1. Open Communication Culture
                    <br />
                    2. Collaboration Tools
                  </div>
                </div>
                <div className='collaborative-sm-bx'>
                  <div className='collaborative-sm-bx-title'>
                    Innovation Hubs
                  </div>
                  <div className='collaborative-sm-bx-content'>
                    1. Design Thinking Workshops
                    <br />
                    2. Innovation Challenges
                  </div>
                </div>
                <div className='collaborative-sm-bx'>
                  <div className='collaborative-sm-bx-title'>
                    Employee Perspectives
                  </div>
                  <div className='collaborative-sm-bx-content'>
                    1. Employee Testimonials
                    <br />
                    2. Team Building Activities
                  </div>
                </div>
                <div className='collaborative-sm-bx'>
                  <div className='collaborative-sm-bx-title'>
                    Continuous Learning
                  </div>
                  <div className='collaborative-sm-bx-content'>
                    1. Knowledge Sharing Initiatives
                    <br />
                    2. Mentorship Programs
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* section 5 */}
          <div className='collaborative-section' style={{ marginTop: "100px" }}>
            <div className='collaborative-content-section'>
              <div className='collaborative-content-title'>
                Professional Growth
              </div>
              <div className='we-are-text-3'>
              Welcome and thank you for visiting the HKAPPS, area of professional growth. Enter a world where desires are fostered, talents are refined, and careers reach new heights. We kindly encourage you to investigate the numerous options that characterize our dedication to promoting an environment that values ongoing education and career advancement.
              </div>
              <div className='we-are-text-3'>
              The quest of excellence is something that we at HKAPPS, acknowledge as a lifetime endeavor. Not only does our Professional Growth section demonstrate our commitment, but it also extends an open invitation for you to join us on a life-changing adventure.
              </div>
              <div className='collaborative-sm-bx-section'>
                <div className='collaborative-sm-bx'>
                  <div className='collaborative-sm-bx-title'>
                    Commitment to Employee <br /> Development
                  </div>
                  <div className='collaborative-sm-bx-content'>
                    1. Learning Culture
                    <br />
                    2. Professional Development Programs
                  </div>
                </div>
                <div className='collaborative-sm-bx'>
                  <div className='collaborative-sm-bx-title'>
                    Training and Skill <br /> Enhancement
                  </div>
                  <div className='collaborative-sm-bx-content'>
                    1. Technical Training
                    <br />
                    2. Certifications
                  </div>
                </div>
                <div className='collaborative-sm-bx'>
                  <div className='collaborative-sm-bx-title'>
                    Career Advancement <br /> Opportunities
                  </div>
                  <div className='collaborative-sm-bx-content'>
                    1. Career Paths
                    <br />
                    2. Promotions from Within
                  </div>
                </div>
                <div className='collaborative-sm-bx'>
                  <div className='collaborative-sm-bx-title'>
                    Mentorship and Coaching
                  </div>
                  <div className='collaborative-sm-bx-content'>
                    1. Mentorship Programs
                    <br />
                    2. Coaching Initiatives
                  </div>
                </div>
                <div className='collaborative-sm-bx'>
                  <div className='collaborative-sm-bx-title'>
                    Employee Testimonials
                  </div>
                  <div className='collaborative-sm-bx-content'>
                    1. Success Stories
                    <br />
                    2. Voices of the Team
                  </div>
                </div>
                <div className='collaborative-sm-bx'>
                  <div className='collaborative-sm-bx-title'>
                    Collaboration with Industry <br /> Experts
                  </div>
                  <div className='collaborative-sm-bx-content'>
                    1. Guest Lectures and Workshops
                  </div>
                </div>
              </div>
            </div>
            <div className='collaborative-image-section'>
              <img src="/image/innovativeTeam-5.webp" className='collaborative-image' alt="" />
            </div>
          </div>

          {/* section 6 */}
          <div className='we-are-section'>
            <div className='we-are-section-article'>
              <div className='we-are-image-fluid' data-aos="fade-right">
                <img src="/image/innovativeTeam-6.webp" className='we-are-image' />
              </div>
              <div className='we-are-text' data-aos="fade-left">
                <div className='we-are-text-1-black'>Inclusive Culture</div>
                <div className='we-are-text-2'>Welcome to Our Inclusive Culture</div>
                <div className='we-are-text-3'>
                Congratulations and a warm welcome to HKAPPS, the center of equality and inclusion. We cordially invite you to experience the core of our inclusive culture in this special area, which is a dynamic and lively setting that celebrates diversity and values each person for what they have to contribute.
                  <br /><br />
                  At HKAPPS, we understand that creativity has no boundaries and that innovation flourishes in an environment of inclusivity where different viewpoints collide. More than just a statement, the inclusive culture section extends an invitation to embark with us on a journey where diversity is not only accepted but also cherished as the key to our success.
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

export default InnovativeTeam