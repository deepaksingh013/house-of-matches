import React from 'react'
import "../components/header.css"
import hamburger from "../images/Line 89.png"
import socialIcon from"../images/social icons (1).png"

export default function Header() {
  return (
    <>
    <div className='main'>
    <div className='header'>
        {/* <div>
            <img src={hamburger} alt="" />
        </div> */}
        <div>
            <h1 className='title' style={{textAlign:"center"}}>house of <span>matches</span> </h1>
        </div>
        {/* <div className='p-4'>
            <img src={socialIcon} alt="" />
        </div> */}
     </div>
    </div>
    
    </>
  )
}
