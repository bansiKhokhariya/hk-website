import React from 'react'
import './Discuss.css'

const Discuss = () => {
    return (
        <div className='discuss-main-section'>
            <div className='discuss-section'>
                <div className='discuss-image'>
                    <img src="/icon/Rectangle.webp" className='discuss-icon' alt="" />
                    <img src="/icon/Ellipse.svg" alt="" />
                </div>
                <div className='discuss-right-side'>
                    <div className='discuss-title'>Let’s Discuss Your Project</div>
                    <div className='discuss-text-1'>Get free consultation and let us know your project idea to turn it into an amazing digital product</div>
                    <div className='discuss-button'><button>Contact Us</button></div>
                </div>
            </div>
        </div>
    )
}

export default Discuss