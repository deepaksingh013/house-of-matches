import React from 'react'
import "./footernew.css"
import footerLogo from "../images/Frame 437.png"
import { FaTwitter, FaTwitterSquare, FaPinterest, FaPinterestSquare, FaInstagram } from 'react-icons/fa';
import mobileView from "../images/Frame 437.png"

export default function FooterNew() {
    return (
        <>
            <div className="footer-new">
                <div className="footer-new-logo">
                    <img src={footerLogo} alt="" />
                </div>
                <div className="footer-new-content">
                    <p>We believe that everyone deserves a love story that is uniquely theirs, and we are here to make it happen</p>
                </div>
                <div className="footer-new-contact">
                    <div className="icons-footer-new">
                        <FaInstagram size={24} color="#fff" />
                        <FaTwitter size={24} color="#fff" />
                        <FaPinterest size={24} color="#fff" />
                    </div>
                    <h1>contact us</h1>
                    <h2>For inquiries, click here</h2>
                </div>
            </div>

            {/* mobile view */}
            <div className="dis">
                <div className="footer-mobile">
                    <div className="footer-mobile-detail">
                        <div className="contact-mobile">
                            <h1>Contact Us</h1>
                            <h3>hello@thehouseofmatches.com <br /> 9819457835</h3>
                        </div>
                        <div className="contact-address">
                            <h1>Address</h1>
                            <h3>Wework, Next to nesco, off w.e highway, goregaon(east), Mumbai- 40063</h3>
                        </div>
                        <div className="contact-mobile" >
                            <h1>our social</h1>
                            {/* <img src="images/Screenshot 2023-06-30 at 12.51 1.png" alt=""> */}
                            <div style={{ display: "flex", gap: "10px" }}>
                                <FaInstagram size={24} color="#fff" />
                                <FaTwitter size={24} color="#fff" />
                                <FaPinterest size={24} color="#fff" />
                            </div>

                        </div>
                    

                    </div>
                    <div className="footer-mobile-logo">
                        <img src={mobileView} alt="" />
                    </div>
                   

                </div>

            </div>



        </>
    )
}
