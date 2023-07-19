import React from 'react'
import bannerImg from "../images/Rectangle 572 (1).png"
import "./memberbanner.css"
import imgBanner2 from "../images/Rectangle 576.png"

export default function MemberBanner() {
  return (
   <>
   <div className='main-banner'>
    <div className='banner-content'>
        <img src={window.location.pathname === "/services" ? imgBanner2 : bannerImg} alt="" />
    </div>
    <div className='mrmber-txt'>
       
        {window.location.pathname === "/" ?  <h1 >membership form</h1> :""}
        {window.location.pathname === "/services" ?  <h1 >our services</h1> :""}
        {window.location.pathname === "/privacypolicy" ?  <h1 >privacy policy</h1> :""}
        {window.location.pathname === "/t&c" ?  <h1 >terms & conditions</h1> :""}
    </div>
   </div>
   </>
  )
}
