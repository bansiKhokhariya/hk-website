import React from 'react'
import FAQs from '../../Home/FAQs/FAQs.jsx'

const Section11 = () => {

    const faqsArray = [
        {
            id: 1,
            question: 'Q. What additional costs should I be aware of?',
            answer: `Technology fees (for cloud services), tool agreements from other parties, scope modifications, and other requirements could all generate additional consumption. Prior to deployment, we have open communication and a discussion about these costs.`
        },
        {
            id: 2,
            question: 'Q. What is the typical project timeline?',
            answer: `Project durations differ according to the difficulty and extent of the work. We provide a comprehensive project timetable depending on your requirements at the initial meeting. Timelines are explicitly defined and modified as necessary during the development process.`
        },
        {
            id: 3,
            question: 'Q. How do developers communicate with clients?',
            answer: `We place a high value on candid communication. Our developers communicate with one other via online conferences, frequent meetings, and real-time messaging services (like Microsoft Teams and Slack). Your primary point of contact is a dedicated project manager who promotes smooth collaboration.`
        },
        {
            id: 4,
            question: 'Q. What project management tools do you use?',
            answer: `We use well-known project management applications like Trello, Asana, or Jira, based on your choice. Task tracking, Slack, sprints management, and clear reporting of project progress are made easier by these technologies.`
        },
        {
            id: 5,
            question: 'Q.  How do you ensure security and confidentiality?',
            answer: `We are serious about protection. Secure development procedures are followed by our staff, and confidentiality agreements are set up. To protect your project and data, we put cryptography techniques in place, set up access limits, and carry out frequent checks on security.`
        },
        {
            id: 6,
            question: 'Q. Can I make changes to the project scope after it has started?',
            answer: `Of course! We recognize that project specifications could be modified. Any modifications to the project scope are made available openly, and you are given an opportunity to give your approval the most recent estimates and schedules.`
        },
    ]

    return (
        <FAQs faqsArray={faqsArray} />
    )
}

export default Section11