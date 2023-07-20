import React from 'react'
import "./footermain.css"
import img1 from "../images/Instagram.png"
import img2 from "../images/Pinterest.png"
import img3 from "../images/Twitter Squared.png"
import img4 from "../images/Twitter.png"

export default function FooterMain() {
    return (
        <>
            <div className="footer-main">
                <div className="left-footer-main col-lg-7">
                    <div className="title-main-footer">
                        <h1>house of <span>matches</span> </h1>
                        <div className="all-icons-main">
                        <img src={img1} alt="" />
                        <img src={img3} alt="" />
                        <img src={img2} alt="" />
                        <img src={img4} alt="" />
                    </div>
                    </div>
                   
                </div>
               
                <div className="right-footer-main col-lg-5">
                    <div>
                        <h1>contact us</h1>
                        <h3>For inquiries, click here</h3>
                        <h4>For career oportunities and internships,please send your resume to careers@thehouseofpatterns.com</h4>
                    </div>

                </div>
            </div>
        </>
    )
}
