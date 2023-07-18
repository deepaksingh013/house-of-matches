import React from 'react'
import icon from "../images/svg.png"
import "./services.css"
const cardItems = [
    {
        title: "Personalized matchmaking",
        content: "We provide tailored matchmaking services, considering individual preferences, values, and aspirations to suggest compatible matches.",
        txt: "see more",
        arrow: icon
    },
    {
        title: "Profile creation and enhancement",
        content: "Our experts assist in creating compelling profiles that showcase clients’ qualities and attract potential matches.",
        txt: "see more",
        arrow: icon
    },
    {
        title: "Compatability assesment",
        content: "We employ various tools and techniques to assess compatibility factors, ensuring a higher likelihood of successful matches.",
        txt: "see more",
        arrow: icon
    },
    {
        title: "Events and networking",
        content: "We organize events and networking opportunities where individuals can interact and connect with like-minded prospects.",
        txt: "see more",
        arrow: icon
    },
    {
        title: "Wedding planning and assistance",
        content: "We offer wedding planning guidance to help couples navigate the complexities of wedding preparations.",
        txt: "see more",
        arrow: icon
    },
    {
        title: "Post marriage support",
        content: "We provide post-marriage support to help couples build and nurture strong, fulfilling relationships.",
        txt: "see more",
        arrow: icon
    },
]

export default function OurSecrvices() {
    return (
        <>
            <div className="main-services">
                <div className="services" >
                    <h1 className='services-title'>our <span>services</span> </h1>
                    <div className='services-card  col-lg-12'>
                        {cardItems.map((item, index) => {
                            return <div className='cards'>
                                <div className="card-content ">
                                    <div className='card-title-item'><h1>{item.title}</h1></div>
                                    <div className='card-content-item'><h1>{item.content}</h1> </div>
                                    <div style={{ display: "flex", gap: "5px", alignItems: "center",marginTop:"1rem" }}>
                                        <div className='card-txt'><h1>{item.txt}</h1>  </div>
                                        <div><img src={item.arrow} alt="" style={{marginTop:"-10px"}}/></div>
                                    </div>
                                </div>
                                <div className='bottom-bx'>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>

        </>
    )
}
