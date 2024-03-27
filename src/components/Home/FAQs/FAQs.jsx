// import React from 'react'
// import './FAQs.css'

// const FAQs = (faqsArray) => {
//     return (
//         <div className='faqs-section-main' >
//             <div className='faqs-section' data-aos="fade-up">
//                 <div className='we-are-text-1'>FAQs</div>
//                 <ul className="m-d expand-list">
//                     {faqsArray.faqsArray.map((index) => (
//                         <li data-md-content="300" key={index.id}>
//                             <label name="tab" htmlFor={`tab${index.id}`} tabIndex="-1" className="tab_lab" role="tab">
//                                 {index.question}
//                                 <span className="open-close-icon"><img src="/icon/angle-small-down.svg" alt="" /></span>
//                             </label>
//                             <input type="checkbox" className="tab" id={`tab${index.id}`} tabIndex="0"/>
//                             <div className="content-fq">
//                                 {index.answer}
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default FAQs



import React from 'react'
import './FAQs.css'

const FAQs = (faqsArray) => {
    return (
        <div className='faqs-section-main' >
            <div className='faqs-section' data-aos="fade-up">
                <div className='we-are-text-1'>FAQs</div>
                <ul className="faqs-accordion">
                    {faqsArray.faqsArray.map((index) => (
                        <li key={index.id}>
                            <input className="tab" type="checkbox" name="faqs" id={`tab${index.id}`} />
                            <label className="tab_lab" htmlFor={`tab${index.id}`}>
                                {index.question}
                                <img src="/icon/angle-small-down.svg" alt="" />
                            </label>
                            <div className="content-fq">
                                {index.answer}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default FAQs