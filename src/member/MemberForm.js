// import React from 'react';
// import './mform.css';

// const formFields = [
//     { id: 'name', label: 'Profile creating for' },
//     { id: 'firstname', label: 'First Name' },
//     { id: 'lastname', label: 'Last Name' },
//     { id: 'dob', label: 'Date Of Birth' },
//     { id: 'emailid', label: 'Email ID' },
//     { id: 'contactnumber', label: 'Contact Number' },
//     { id: 'religion', label: 'Religion' },
//     { id: 'address', label: 'Address' },
//     { id: 'city', label: 'City' },
//     { id: 'pincode', label: 'Pincode' },
//     { id: 'country', label: 'Country' },
// ];

// const formFields2 = [
//     { id: 'education', label: 'highest education level' },
//     { id: 'profession', label: 'profession' },
//     { id: 'about', label: 'How did you hear about us?' },
//     { id: 'photos', label: 'Upload photos (min 3)' },
// ]

// export default function MemberForm() {
//     return (
//         <>
//             <div className='member-form'>
//                 <h1 className='personal-txt'>personal information</h1>
//                 <div className="box">
//                     <label className="label-main" htmlFor="xyz">
//                         xyz
//                     </label>
//                     <input type="text" id="xyz" />
//                 </div>


//                 {formFields.map((field, index) => (
//                     <div className={index === 3 ? "box col-lg-8" : "box col-lg-12"} key={field.id}>

//                         <input type="text" required id={field.id} />
//                         {index === 3 ? <div className='box col-lg-4' >

//                             <label for="radio1" style={{ marginRight: "30px", marginLeft: "30px" }}>
//                                 <div className='d-flex'>
//                                     <div>
//                                         <input type="radio" id="radio1" name="radios" />
//                                         <span class="radio-custom"></span>
//                                     </div>

//                                     <div className='radio-label'>male</div>
//                                 </div>

//                             </label>

//                             <label for="radio2">
//                                 <div className='d-flex'>
//                                     <div>
//                                         <input type="radio" id="radio2" name="radios" />
//                                         <span class="radio-custom"></span>
//                                     </div>

//                                     <div className='radio-label'>female</div>
//                                 </div>
//                             </label>
//                         </div> : ""}


//                         <label className="label-main" htmlFor={field.id}>
//                             {field.label}
//                         </label>
//                         <div>

//                         </div>

//                     </div>

//                 ))}

//                 {/* field2 */}
//                 <h1 className='info-txt'>Professional Information</h1>
//                 {formFields2.map((item, index) => {

//                     return <div className='box'>
//                         <input type="text" required id={item.id} />
//                         <label className="label-main" htmlFor={item.id}>
//                             {item.label}
//                         </label>
//                     </div>


//                 })}

//                 {/* checkbox */}



//                     <div>
//                         <div className='d-flex justify-content-center'>
//                             <button className='btn-main-check' style={{ border: "2px solid #fff", background: "transparent", color: "#fff", marginTop: "2rem" }}>SUBMIT</button>
//                         </div>

//                     </div>

//                 </div>
//             </div>

//         </>
//     );
// }































import React, { useState } from 'react';
import './mform.css';
import axios from "axios"
import { Link } from 'react-router-dom';

export default function MemberForm() {
    const [inputType, setInputType] = useState("text");
    const [yourName, setYourName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [classSelection, setClassSelection] = useState('');
    const [selectedImages, setSelectedImages] = useState([]);
    const [country, setCountry] = useState('');
    const [hearaboutus, setAbout] = useState('');
    const [education, setEducation] = useState('');
    const [profession, setProfession] = useState('')
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [religion, setReligion] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPincode] = useState('');
    const handleNameChange = (e) => {
        setYourName(e.target.value);
    };
    const handleeducationChange = (e) => {
        setEducation(e.target.value);
    }

    const handleprofession = (e) => {
        setProfession(e.target.value)
    }


    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleDobChange = (e) => {
        setDob(e.target.value);
    };
    const handlecountry = (e) => {
        setCountry(e.target.value);
    }

    const handleClassSelectionChange = (e) => {
        setClassSelection(e.target.value);
    };

    const handleabout = (e) => {
        setAbout(e.target.value);
    }

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
    const handleClick = () => {
        setInputType("date");
    };


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
        formData.append('country', country);
        formData.append('classSelection', classSelection);
        formData.append('hearaboutus', hearaboutus);
        formData.append('education', education);
        formData.append('profession', profession);
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
        <div className='member-form-container'>
        <div className='member-form'>
                <form action="" onSubmit={handleSubmit} autocomplete="off">
                    <h1 className='personal-info'>Personal Information</h1>
                    <div className='selections'>
                        {/* <label htmlFor="class-dropdown">Profile creating For</label> */}
                        <select id="class-dropdown" name="classSelection" className={classSelection === "" ? "select-profile" : "select-profile selected"} value={classSelection} onChange={handleClassSelectionChange}>
                            <option value="" >  Profile Creating For</option>
                            <option value="Self" >Self</option>
                            <option value="Daughter">Daughter</option>
                            <option value="Son">Son</option>
                            <option value="Relative">Relative</option>
                            <option value="Friend">Friend</option>
                        </select>
                    </div>
                    <div className="mainBx">
                        <div className="box col">
                            <input type="text" id="yourName" name="yourName" value={yourName} onChange={handleNameChange} required />
                            <label className='label-main' htmlFor="firstname">First Name</label>
                        </div>
                        <div className="box col">
                            <input type="text" id="lastName" name="lastName" value={lastName} onChange={handleLastNameChange} required />

                            <label className='label-main' htmlFor="lastname">Last Name</label>
                        </div>
                    </div>
                    <div className="mainBx">
                        <div className="box col">
                            <input
                                type={inputType}
                                onClick={handleClick}
                                required
                                id="dob"
                                min="1900-01-01"
                                max="2023-07-15"

                                value={dob} onChange={handleDobChange}
                            />
                            <label className='label-main' htmlFor="dob" >{inputType === "date" ? "" : "Date Of Birth"}  </label>
                        </div>
                        <div className='box col' >
                            <div class="radio-group" >
                                <div style={{ display: "flex",whiteSpace:"nowrap" }}>
                                    <input type="radio" id="option1" name="radio" />
                                    <label for="option1" className='gender-label'>Male</label>
                                </div>
                                <div style={{ display: "flex",whiteSpace:"nowrap" }}>
                                    <input type="radio" id="option2" name="radio" />
                                    <label for="option2" className='gender-label'>Female</label>
                                </div>


                            </div>
                        </div>

                    </div>
                    <div className="box">
                        <input type="text" id="email" name="emailid" value={email} onChange={handleEmailChange} required />
                        <label className='label-main' htmlFor="emailid">email id</label>
                    </div>
                    <div className="box">
                        <input type="text" id="contact" name="contact" value={contact} required onChange={handleContactchange} />

                        <label className='label-main' htmlFor="contactnumber">contact number</label>
                    </div>
                    <div className="box">
                        <input type="text" id="religion" name="religion" value={religion} required onChange={handlereligion} />
                        <label className='label-main' htmlFor="religion">religion</label>
                    </div>
                    <div className="box">
                        <input type="text" id="address" name="address" value={address} required onChange={handleaddress} />

                        <label className='label-main' htmlFor="address">address</label>
                    </div>
                    <div className="box">
                        <input type="text" id="city" name="city" required value={city} onChange={handleCitychange} />

                        <label className='label-main' htmlFor="city">city</label>
                    </div>
                    <div className="box">
                        <input type="text" id="city" name="city" required value={pincode} onChange={handlepincode} />
                        <label className='label-main' htmlFor="pincode">pincode</label>
                    </div>
                    <div className="box">
                        <input type="text" required id="country" value={country} onChange={handlecountry} />
                        <label className='label-main' htmlFor="country">country</label>
                    </div>

                    {/* professional information */}

                    <h1 className='professional-info'>professional information</h1>

                    <div className="box">
                        <input type="text" id="address" name="address" value={education} required onChange={handleeducationChange} />

                        <label className='label-main' htmlFor="address">Highest Education level</label>
                    </div>
                    <div className="box">
                        <input type="text" id="city" name="city" required value={profession} onChange={handleprofession} />

                        <label className='label-main' htmlFor="city">Profession</label>
                    </div>
                    <div className='hear-about'>
                        <select id="class-dropdown" name="classSelection" className={hearaboutus === "" ? "select-profile" : "select-profile selected"} value={hearaboutus} onChange={handleabout}>
                            <option value="" >How did you hear about us?</option>
                            <option value="Family" >Family</option>
                            <option value="Friends">Friends</option>
                            <option value="Social Media">Social Media</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>

                    <div className="custom-file-input">
                        <label for="images">Upload photos (min 3)</label>
                        <input type="file" id="images" name="images" accept="image/*" multiple onChange={handleImageChange} required />
                    </div>

                    {/*  */}
                    {/* checkboxes */}

                    {/*  */}
                    <div className='check-box-main-container'>
                        <label className="checkbox-container">
                            <input type="checkbox" />
                            <span className="custom-checkbox"></span>
                            <span className="label-text">I agree that information I have provided is true and accurate</span>
                        </label>
                        <label className="checkbox-container">
                            <input type="checkbox" />
                            <span className="custom-checkbox"></span>
                            <span className="label-text">I am in full agreement with the <Link to="/t&c" style={{ color: "#fff" }}>terms and conditions </Link> and <Link to="/privacypolicy" style={{ color: "#fff" }}>privacy policy</Link> </span>
                        </label>
                    </div>

                    {/*  */}

                    <div className='d-flex justify-content-center'>
                        <button className='btn-main-check' >SUBMIT</button>
                    </div>

                </form >
            </div>
        </div>
          

        </>
    );
}
