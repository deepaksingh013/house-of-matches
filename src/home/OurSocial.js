import React from 'react'
import img1 from "../images/Rectangle 567.png"
import img2 from "../images/Rectangle 568.png"
import img3 from "../images/Rectangle 569.png"
import img4 from "../images/Rectangle 570.png"

const mainTxt = {
    textAlign: "center",
    marginTop: "2rem",
    marginBottom: "2rem",
    fontFamily: "\"Poppins\", sans-serif",
    fontSize: "45px",
    fontWeight: "bold",
    letterSpacing: "-0.04em",
    backgroundImage: "linear-gradient(to right, #FF3131, #FF8210)", // Replace with your desired gradient colors
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  };
  
const ourSocial = {
    width:"97%",
    margin:"auto",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
}

const allImg={
    display:"flex",
    justifyContent:"space-between",
    gap:"20px"
}
const imgmain=[img1,img2,img3,img4]

export default function OurSocial() {
    return (
        <>
            <h1 style={mainTxt}>our <span style={{fontStyle:"italic"}}>social</span></h1>
            <div style={ourSocial}>
            
                <div style={allImg}>
                <div style={{display:"flex",justifyContent:"space-between",gap:"20px"}}>
                    {imgmain.map((item,index)=>{
                        return <div style={{display:"flex",justifyContent:"space-between"}}>
                            <img src={item} alt="" style={{maxWidth:"97%"}}/>
                        </div>
                    })}
                </div>
                </div>
            </div>

        </>
    )
}
