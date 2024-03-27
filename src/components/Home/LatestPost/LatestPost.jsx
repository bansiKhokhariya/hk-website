import React from 'react'
import './LatestPost.css'

const LatestPost = () => {
    return (
        <div className='latestPost-main-section'>
            <div className='latestPost-section'>
                <div className='latestPost-title'>Latest Post</div>
                <div className='post-img-section'>
                    <div className='post-img-box' data-aos="fade-right">
                        <div className='post-img'>
                            <img src="/icon/project-section.svg" alt="" />
                        </div>
                        <div className='post-title-text'>The future of ecommerce is vr</div>
                        <div className='post-text'>Apr 19, 2022</div>
                        <div className='post-button'>Read More</div>
                    </div>
                    <div className='post-img-box' data-aos="zoom-in">
                        <div className='post-img'>
                            <img src="/icon/project-section.svg" alt="" />
                        </div>
                        <div className='post-title-text'>10 Reasons To Choose Shopify for...</div>
                        <div className='post-text'>Apr 04, 2022</div>
                        <div className='post-button'>Read More</div>
                    </div>
                    <div className='post-img-box' data-aos="fade-left">
                        <div className='post-img'>
                            <img src="/icon/project-section.svg" alt="" />
                        </div>
                        <div className='post-title-text'>Benefits of Shopify for eCommerce...</div>
                        <div className='post-text'>Apr 04, 2022</div>
                        <div className='post-button'>Read More</div>

                    </div>
                </div>
            </div>
            <div className='project-button'>
                <button>View More</button>
            </div>
        </div>
    )
}

export default LatestPost