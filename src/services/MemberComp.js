import React from 'react'
import arrow from "../images/Arrow 22.png"
import "./membercomp.css"
export default function MemberComp() {
  return (
    <>
    <div style={{marginTop:"3rem"}}>
    <div className='main-section-comp'>
        <div>
            <h1 className='main-section-txt'>READY TO BECOME A <span>MEMBER?</span> </h1>
        
        </div>
        <div><img src={arrow} alt="" /></div>
    </div>
    </div>
  
    </>
  )
}
