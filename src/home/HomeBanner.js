import React from 'react'
import bannerImg from "../images/foy image 1 copy 2 1.png"
import "./homebanner.css"
export default function HomeBanner() {
  return (
    <>
    <div className="banner-home">
    <div className="banner row">
        <div className="banner-content col-lg-6">
            <div className="txt-content">
                <h1 className='txt-main' >When love Is Tailored To You, It Shows</h1>
                <h2 className='txt-main2' >are you ready to embark on the journey to find your perfect match?</h2>
                </div>
        </div>
        <div className="banner-img-main col-lg-6">
            <img src={bannerImg} alt="" />
        </div>
    </div>
    
    </div>
   
    </>
  )
}
