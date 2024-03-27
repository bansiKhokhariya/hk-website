import React from 'react'
import './Banner.css'
// import LazyLoad from 'react-lazyload';

const Banner = (bannerObject) => {
    const contentWithLineBreaks = bannerObject.bannerObject.bannerContent.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));

    return (
        <>
            {/* <LazyLoad> */}
                <div className="banner-main-section"
                    style={{
                        background: `url(${bannerObject.bannerObject.backgroundBanner})`,
                        backgroundSize: 'cover',
                        display: 'flex',
                        justifyContent: `${bannerObject.bannerObject.boxSide === 'left' ? 'flex-start' : 'flex-end'}`,
                    }}
                >
                    <div className='banner-section'>
                        <div
                            className={`banner-section-box ${bannerObject.bannerObject.boxSide === 'left' ? 'banner-section-box-right' : 'banner-section-box-left'}`}
                        >
                            <div className='banner-title'>{bannerObject.bannerObject.bannerTitle}<span className='banner-title-span'> {bannerObject.bannerObject.bannerTitleSpan}</span></div>
                            <div className='banner-content' >
                                {/* {bannerObject.bannerObject.bannerContent} */}
                                {contentWithLineBreaks}
                            </div>
                        </div>
                    </div>

                </div>
            {/* </LazyLoad> */}
        </>
    )
}

export default Banner