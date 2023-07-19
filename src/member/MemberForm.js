

import React, { useState } from 'react';
import './mform.css';
import axios from "axios"
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import Picker from '../components/Picker';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function MemberForm() {
    // const [selectedDate, setSelectedDate] = useState('');

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

    const handleDobChange = (date) => {
        setDob(date);
    };
    const handlecountry = (e) => {
        setCountry(e.target.value);
    }

    const handleClassSelectionChange = (classSelection) => {
        setClassSelection(classSelection.value);
    };

    const handleabout = (hearaboutus) => {
        setAbout(hearaboutus.value);
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
    const options = [
        { value: 'self', label: 'self' },
        { value: 'Daughter', label: 'Daughter' },
        { value: 'Son', label: 'Son' },
        { value: 'Relative', label: 'Relative' },
        { value: 'Friend', label: 'Friend' },
    ];

    const hearOption = [
        { value: 'family', label: 'family' },
        { value: 'Friends', label: 'Friends' },
        { value: 'Social Media', label: 'Social Media' },
        { value: 'Others', label: 'Others' },
    ];

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            backgroundColor: "transparent",
            border: state.isFocused ? 0 : provided.border,
            boxShadow: state.isFocused ? 'none' : provided.boxShadow,
            borderTop: "0px",
            padding:"0px",
            borderLeft: "0px",
            borderRight: "0px",
            borderRadius: "0px",
            
            borderBottom: "2px solid #fff",
            color: "#fff",
            '&:hover': {
                borderBottom: "2px solid #fff",
            },
        }),
        placeholder: (provided) => ({
            ...provided,
            color: '#fff', // Custom color for the placeholder
            // Custom font style for the placeholder
            fontSize: '27px',
            opacity: "0.7",
            fontWeight: "500",
        
            "@media(max-width: 530px)": {
                position:"absolute",
                bottom:"1px",
                fontSize: "14.5px"
            },
         
        }),
        option: (provided, state) => ({
            ...provided,
            color: "#000000",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "400",
            textTransform: "capitalize",
            backgroundColor: "#f5f7f6",
            fontSize: "14px",
            borderBottom: "1px solid #dfe6e0",
            // Custom background color for selected options
            // Custom color for selected options
            '&:hover': {
                backgroundColor: "#f5f7f6", // Custom background color on option hover
            },
            "@media(max-width: 530px)": {
                fontSize: "14px"
            },
           
        }),
        singleValue: (provided, state) => ({
            ...provided,
            fontSize: '24px',
            fontWeight: "500",
            fontFamily: "'Poppins', sans-serif",
            position:"absolute",
            bottom:"0px",
            color: state.isSelected ? '#fff' : "#fff", // Custom color for selected option
            '&:hover': {
                color: state.isSelected ? '#fff' : "#fff",  // Custom color on option hover
            },
            "@media(max-width: 530px)": {
                fontSize: "14px"
            },
           
        }),
    };

    // const handleChange = (selectedOption) => {
    //     console.log('Selected option:', selectedOption);
    // };

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
                Swal.fire({
                    icon: 'success',
                    title: 'Response',
                    text: response.data.message
                });
                console.log(response.data.message);
                // Handle success or display a success message
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'internal server error',
                });
                console.error(error);
                // Handle error or display an error message
            });
    };
    return (
        <>
            <div className='member-form-container'>
                <div className='member-form'>
                    <form action="" onSubmit={handleSubmit} autocomplete='off'>
                        <h1 className='personal-info'>Personal Information</h1>
                        {/* <div className='selections'>
                            <select id="class-dropdown" name="classSelection" className={classSelection === "" ? "select-profile" : "select-profile selected"} value={classSelection} onChange={handleClassSelectionChange}>
                                <option value="" >  Profile Creating For</option>
                                <option value="Self" >Self</option>
                                <option value="Daughter">Daughter</option>
                                <option value="Son">Son</option>
                                <option value="Relative">Relative</option>
                                <option value="Friend">Friend</option>
                            </select>
                        </div> */}
                        <Select
                            options={options}
                            placeholder="Profile creating for"
                            onChange={handleClassSelectionChange}
                            styles={customStyles}
                            isSearchable={false}
                        />

                        {/*mui select  */}

                        {/* mui select */}
                        <div className="mainBx">
                            <div className="box col">
                                <input type="text" id="yourName" name="yourName" className='firstname-nput' value={yourName} onChange={handleNameChange} required autoComplete='off'/>
                                <label className='label-main' htmlFor="firstname">First Name</label>
                            </div>
                            <div className="box col">
                                <input type="text" id="lastName" name="lastName" value={lastName} onChange={handleLastNameChange} required autoComplete='off'/>

                                <label className='label-main' htmlFor="lastname">Last Name</label>
                            </div>
                        </div>
                        <div className="mainBx-date">
                            {/* <div className="box col">
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
                            </div> */}
                            <div className="box-main-date">
                                <DatePicker
                                    selected={dob}
                                    onChange={handleDobChange}
                                    placeholderText="Date of Birth"
                                    dateFormat="dd/MM/yyyy"
                                    showYearDropdown
                                    scrollableYearDropdown
                                    yearDropdownItemNumber={100}
                                />
                            </div>

                            <div className='main-radio' >
                                <div class="radio-group" >
                                    <div style={{ display: "flex", whiteSpace: "nowrap" }}>
                                        <input type="radio" id="option1" name="radio" />
                                        <label for="option1" className='gender-label'>Male</label>
                                    </div>
                                    <div style={{ display: "flex", whiteSpace: "nowrap" }}>
                                        <input type="radio" id="option2" name="radio" />
                                        <label for="option2" className='gender-label'>Female</label>
                                    </div>


                                </div>
                            </div>

                        </div>
                        <div className="box">
                            <input type="text" id="email" name="emailid" value={email} onChange={handleEmailChange} required autoComplete='off'/>
                            <label className='label-main' htmlFor="emailid">email id</label>
                        </div>
                        <div className="box">
                            <input type="text" id="contact" name="contact" value={contact} required onChange={handleContactchange} autoComplete='off'/>

                            <label className='label-main' htmlFor="contactnumber">contact number</label>
                        </div>
                        <div className="box">
                            <input type="text" id="religion" name="religion" value={religion} required onChange={handlereligion} autoComplete='off'/>
                            <label className='label-main' htmlFor="religion">religion</label>
                        </div>
                        <div className="box">
                            <input type="text" id="address" name="address" value={address} required onChange={handleaddress} autoComplete='off'/>

                            <label className='label-main' htmlFor="address">address</label>
                        </div>
                        <div className="box">
                            <input type="text" id="city" name="city" required value={city} onChange={handleCitychange} autoComplete='off'/>

                            <label className='label-main' htmlFor="city">city</label>
                        </div>

                        <div className="box">
                            <input type="text" id="city" name="city" required value={pincode} onChange={handlepincode} autoComplete='off'/>
                            <label className='label-main' htmlFor="pincode">pincode</label>
                        </div>
                        <div className="box">
                            <input type="text" required id="country" value={country} onChange={handlecountry} autoComplete='off'/>
                            <label className='label-main' htmlFor="country">country</label>
                        </div>

                        {/* professional information */}

                        <h1 className='professional-info'>professional information</h1>

                        <div className="box">
                            <input type="text" id="address" name="address" value={education} required onChange={handleeducationChange} autoComplete='off'/>

                            <label className='label-main' htmlFor="address">Highest Education level</label>
                        </div>
                        <div className="box">
                            <input type="text" id="city" name="city" required value={profession} onChange={handleprofession} autoComplete='off'/>

                            <label className='label-main' htmlFor="city">Profession</label>
                        </div>
                        {/* <div className='hear-about'>
                            <select id="class-dropdown" name="classSelection" className={hearaboutus === "" ? "select-profile" : "select-profile selected"} value={hearaboutus} onChange={handleabout}>
                                <option value="" >How did you hear about us?</option>
                                <option value="Family" >Family</option>
                                <option value="Friends">Friends</option>
                                <option value="Social Media">Social Media</option>
                                <option value="Others">Others</option>
                            </select>
                        </div> */}
                        <div className='hear-about'>
                            <Select
                                options={hearOption}
                                placeholder="How did you hear about us?"
                                onChange={handleabout}
                                styles={customStyles}
                                isSearchable={false}
                            />

                        </div>

                        <div className="custom-file-input">
                            <label for="images">Upload Photos (min 3)</label>
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
                                <span className="label-text">I am in full agreement with the <a href="/t&c" target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}> terms and conditions</a> and <a href="/privacypolicy" target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>privacy policy</a></span>
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
