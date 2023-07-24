import React, { useState } from 'react';
import "../components/header.css";
import hamburger from "../images/Line 89.png";
import socialIcon from "../images/social icons (1).png";
import mainLogo from "../images/Frame 437.png";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link, useNavigate } from "react-router-dom"
import { IoCloseOutline } from 'react-icons/io5';
import { FaTwitter, FaTwitterSquare, FaPinterest, FaPinterestSquare, FaInstagram } from 'react-icons/fa';

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "100vw",
  height: "100vh",
  bgcolor: 'background.paper',
  border: '0px ',
  boxShadow: "none",
  backgroundColor: "#14281D",
  color: "#fff",
  p: 4,
  "@media (max-width: 425px)": { // Correct media query syntax
    top: '50%',
    left: '70%',
    // right:"0%",
    position: "absolute",
    right: "0px",
    width: "60vw",
    justifyContent: "center",
    alignItems: "flex-start",
  }
};

export default function Header() {
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const clickMain = () => {
    window.open("/t&c", "_blank"); // Open the URL in a new tab
    setOpen(false);
  };


  return (
    <>
      <div className="main-header">

        <div className='main'>
          <div className='header'>
            <div className='mainlogo'>
              <img src={mainLogo} alt="" className='main-header-logo' />
            </div>
            <div className='icons-main-header'>
              <img src={socialIcon} alt="" className='social-icons-header' />
              <img src={hamburger} alt="" onClick={handleOpen} className='hamBurger' />
            </div>
          </div>
        </div>
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h1 className='nav-item'>Home</h1>
            <h1 className='nav-item'>About</h1>
            <h1 className='nav-item'>Our Services</h1>
            <h1 className='nav-item'>Membership</h1>
            <h1 className='nav-item'>FAQs</h1>
            <h1 className='nav-item-contact'>Contact Us</h1>
            <div className="header-icons">
              <FaInstagram size={24} color="#fff" />
              <FaTwitter size={24} color="#fff" />
              <FaPinterest size={24} color="#fff" />
            </div>
            <div className="close-icon-main">
              <IoCloseOutline size={60} onClick={() => { setOpen(false) }} />
            </div>

          </Box>
        </Modal>

      </div>
    </>
  );
}
