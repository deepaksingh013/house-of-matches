import React, { useState } from 'react';
import axios from 'axios';
import "./upload.css"

const ImageUploadForm = () => {

  // 



  // 
  const [yourName, setYourName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [classSelection, setClassSelection] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);

  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [religion, setReligion] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const handleNameChange = (e) => {
    setYourName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleDobChange = (e) => {
    setDob(e.target.value);
  };

  const handleClassSelectionChange = (e) => {
    setClassSelection(e.target.value);
  };

  const handleImageChange = (e) => {
    setSelectedImages(e.target.files);
  };

  // 
  const handleCitychange = (e) => {
    setCity(e.target.value);
  };
  const handleaddress = (e) => {
    setAddress(e.target.value);
  };

  const handlereligion = (e) => {
    setReligion(e.target.value);
  };
  // 
  const handlepincode = (e) => {
    setPincode(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleContactchange = (e) => {
    setContact(e.target.value);
  };

  // 
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('yourName', yourName);
    formData.append('lastName', lastName);
    formData.append('dob', dob);
    formData.append('email', email);
    formData.append('contact', contact);
    formData.append('religion', religion);
    formData.append('address', address);
    formData.append('city', city);
    formData.append('pincode', pincode);
    formData.append('classSelection', classSelection);
    for (let i = 0; i < selectedImages.length; i++) {
      formData.append('images', selectedImages[i]);
    }

    axios
      .post('http://localhost:5000/upload', formData)
      .then((response) => {
        console.log(response.data.message);
        // Handle success or display a success message
      })
      .catch((error) => {
        console.error(error);
        // Handle error or display an error message
      });
  };

  return (
    <>
      <div className="member-form-data">
        <form onSubmit={handleSubmit} className='form-data'>
          <div>
            <label htmlFor="class-dropdown">Profile creating For</label>
            <select id="class-dropdown" name="classSelection" value={classSelection} onChange={handleClassSelectionChange}>
              <option value="">Select</option>
              <option value="class10">Class 10</option>
              <option value="class11">Class 11</option>
              <option value="class12">Class 12</option>
            </select>
          </div>
          <div className='box'>
            <label htmlFor="yourName" className='label-main'>First Name:</label>
            <input type="text" id="yourName" name="yourName" value={yourName} onChange={handleNameChange} required />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" value={lastName} onChange={handleLastNameChange} required />
          </div>
          <div>
            <label htmlFor="dob">DOB</label>
            <input type="date" id="dob" name="dob" value={dob} onChange={handleDobChange} required />
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input type="text" id="email" name="email" value={email} onChange={handleEmailChange} required />
          </div>
          <div>
            <label htmlFor="contact">contact</label>
            <input type="text" id="contact" name="contact" value={contact} required onChange={handleContactchange} />
          </div>
          <div>
            <label htmlFor="religion">religion</label>
            <input type="text" id="religion" name="religion" value={religion} required onChange={handlereligion} />
          </div>
          <div>
            <label htmlFor="address">address</label>
            <input type="text" id="address" name="address" value={address} required onChange={handleaddress} />
          </div>
          <div>
            <label htmlFor="city">city</label>
            <input type="text" id="city" name="city" required value={city} onChange={handleCitychange} />
          </div>
          <div>
            <label htmlFor="city">pincode</label>
            <input type="text" id="city" name="city" required value={pincode} onChange={handlepincode} />
          </div>
          {/* <div>
        <label htmlFor="yourName">country</label>
        <input type="text" id="yourName" name="yourName" required />
      </div> */}

       
          {/* 
      
      */}


          <div>
            <label htmlFor="images">Select Images:</label>
            <input type="file" id="images" name="images" accept="image/*" multiple onChange={handleImageChange} required />
          </div>
          <button type="submit">Upload</button>
        </form>
      </div>

    </>

  );
};

export default ImageUploadForm;


