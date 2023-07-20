import React from 'react'
import "./founder.css"
import founderImg from "../images/Untitled design-11 2 (1).png"
// import arrow from "../images/Arrow 22 (1).png"
import arrow from "../images/Arrow 22 (2).png"

export default function Founder() {
  return (
    <>
      <div className="btn-div">
        <button className='read-more-btn'>
          read more
        </button>
      </div>

      <div style={{ marginTop: "4rem" }}>
        <div className='founder'>
          <div >
            <h1 className='founder-title'>meet our founder</h1>
            <p className='founder-content'>With over a decade of experience, House of Matches is a premium matchmaking company dedicated to offering personalized matchmaking services across India. Our team of dedicated matchmakers understands your needs and strives to connect you with the right match that truly complements your personality, preferences, and lifestyle.</p>
          </div>
          <div className='founder-img '>
            <img src={founderImg} alt="" style={{ marginTop: "-50px" }} />
          </div>
        </div>
      </div>
      {/* member components */}
      <div style={{ marginTop: "4rem" }}>
        <div className='become-member'>
          <div>
          <h1>Become a <span style={{ fontStyle: "normal", fontWeight: "bold" }}>member</span> now</h1>
          </div>
   
        <div>
          <img src={arrow} alt="" />
        </div>
        </div>
       
      </div>

    </>

  )
}
