import React from 'react'
import Counter from './Counter';
import './Rating.css';

const Rating = () => {
    return (
        <div className='rating-section-main' >
            <div className='rating-section' data-aos="flip-left"
                data-aos-easing="ease-out-cubic">
                <div className='rating-inner-section'>
                    <div className='rating-box'>
                        <div className='rating-text'>Client</div>
                        <div className='rating-number'> <Counter initialValue={35} duration={3500} />+</div>
                    </div>
                    <img src="/logo/rating-verticle-line.svg" alt="" />
                    <div className='rating-box'>
                        <div className='rating-text'>Experts</div>
                        <div className='rating-number'><Counter initialValue={15} duration={3500} />+</div>
                    </div>
                    <img src="/logo/rating-verticle-line.svg" alt="" />
                    <div className='rating-box'>
                        <div className='rating-text'>Projects</div>
                        <div className='rating-number'><Counter initialValue={90} duration={3500} />+</div>
                    </div>
                    <img src="/logo/rating-verticle-line.svg" alt="" />
                    <div className='rating-box-big'>
                        <div className='rating-text'>Client Retention</div>
                        <div className='rating-number'><Counter initialValue={95} duration={3500} />%</div>
                    </div>
                    <img src="/logo/rating-verticle-line.svg" alt="" />
                    <div className='rating-box-big'>
                        <div className='rating-text'>Hours Supports</div>
                        <div className='rating-number'><Counter initialValue={15} duration={3500} />k</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rating