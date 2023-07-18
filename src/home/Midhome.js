import React from 'react'
import "./midhome.css"

export default function () {
    return (
        <>
            <div className='midhome'>
              {window.location.pathname === "/" ? <h1 className='midhome-main-txt'>
                    Transforming lives through purposeful <br /> connection and <span>love</span>
                </h1> : ""}  
            </div>
            <div className='meet-match'>
                <div className='meet-match-title col-lg-6'>
                    <h1>where love meets its <br /> <span>match</span> </h1>
                </div>
                <div className='meet-match-content col-lg-6'>
                    <h1>With over a decade of experience, House of Matches is a premium matchmaking company dedicated to offering personalized matchmaking services across India. Our team of dedicated matchmakers understands your needs and strives to connect you with the right match that truly complements your personality, preferences, and lifestyle.</h1>
                </div>
            </div>
        </>
    )
}
