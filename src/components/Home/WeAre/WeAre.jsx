import React from 'react'
import './WeAre.css';

const WeAre = (weAreContentArray) => {

    const contentWithLineBreaks = weAreContentArray.weAreContentArray.weAreContent.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));

    return (
        <div className='we-are-section'>
            <div className='we-are-section-article'>
                <div className='we-are-text' data-aos="fade-right">
                    <div className='we-are-text-1-black'>{weAreContentArray.weAreContentArray.weAreTitle}</div>
                    {weAreContentArray.weAreContentArray.weAreSubTitle ? <div className='we-are-text-2'>{weAreContentArray.weAreContentArray.weAreSubTitle}</div> : ''}

                    <div className='we-are-text-3'>{contentWithLineBreaks}</div>
                </div>
                <div className='we-are-image-fluid' data-aos="fade-left">
                    <img src={weAreContentArray.weAreContentArray.weAreImage} className='we-are-image' />
                </div>
            </div>
        </div>
    )
}

export default WeAre