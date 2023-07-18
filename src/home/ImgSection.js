import React from 'react';
import bg from '../images/main.png';

const mainSection = {
  backgroundImage: `url(${bg})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  marginTop:"-2rem",
  minHeight:"700px",
  display:"flex",
  justifyContent:"center",
  alignItems:"center"
};
const txt = {
  textTransform:"lowercase",
    color: "#fff",
    fontSize: "48px",
    fontFamily: "\"Poppins\", sans-serif",
    fontWeight:'bold',
  };

export default function ImgSection() {
  return (
    <div style={mainSection}>
     <h1 style={txt}>See what our happy couples are saying</h1>
    </div>
  );
}
