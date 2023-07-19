import React from 'react'
import "./footer.css"
import insta from "../images/Instagram.svg"
import facebook from "../images/div.svg"
import location from "../images/Untitled design-10 1.svg"
import email from "../images/Untitled design-13 1.svg"
import contact from "../images/Untitled design-12 1.svg"

export default function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='left-content col-lg-7 col-sm-12 col-md-12 p-4'>
                    <div>
                        <div> <h1>house of <span>matches</span> </h1></div>
                        <div className='social-icons'>
                            <div>
                                <img src={insta} alt="" className='insta-bg'/>
                            </div>
                            <div>
                                <img src={facebook} alt="" className='insta-bg'/>
                            </div>
                        </div>
                    </div>
                    <div className='copyright'>
                        <h3>©2023 house of matches</h3>
                    </div>
                </div>
                <div className='right-content col-lg-5 col-sm-12'>
                    <div>
                        <h1 className='contact'>contact us </h1>
                    </div>
                    <div className='icon-img'>
                        <div>
                            <img src={location} alt="" className='location' />
                        </div>
                        <div>
                            <h1 style={{ width: "85%" }}>House of Matches, Gala D, model industrial colony, Goregaon East, mumbai-400104</h1>
                        </div>
                    </div>
                    <div className='icon-img'>
                        <div>
                            <img src={email} alt="" className='location' />
                        </div>
                        <div>
                            <h1 className='house-com'>hello@houseofmatches.com</h1>
                        </div>
                    </div>
                    <div className='contact-container'>
                        <div className='icon-img' style={{ marginTop: "-2rem", '@media(max-width: 425px)': { marginTop: "2rem" } }}>

                            <div>
                                <img src={contact} alt="" className='contact-image' />
                            </div>
                            <div>
                                <h1 style={{ marginLeft: "-23px" }} className='contact-no'>+91 7045118677</h1>
                            </div>


                        </div>
                    </div>

                </div>
                <div className="bottom-footer-content" >
                    <h3>© 2023 houseofmatches All Rights Reserved.</h3>
                </div>
            </div>
        </>
    )
}
