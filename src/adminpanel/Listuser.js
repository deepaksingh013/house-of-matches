import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./listuser.css"


export default function ListUser() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/listuser')
      .then((response) => {
        setUserData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handlePrintMachine = () => {
    const printData = document.documentElement.outerHTML;
    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.open();
    printWindow.document.write('<html><head><title>Print</title></head><body>');
    printWindow.document.write(printData);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };

  const handleDownload = () => {
    const htmlContent = document.documentElement.outerHTML;
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'userData.html';
    link.click();
  };

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "2rem", marginBottom: "2rem" }}>User Data:</h1>
      <div style={{ textAlign: "center", marginTop: "2rem", marginBottom: "2rem",display:"flex",gap:"20px" ,justifyContent:"center",alignItems:"center"}}>
        <button onClick={handlePrint} className='btn btn-primary' >Print</button>
        <button onClick={handlePrintMachine} className='btn btn-danger'>Print with Machine</button>
        <button onClick={handleDownload} className='btn btn-success'>Download</button>

      </div>
      <div className='listuser'>
        {userData.map((user) => (
          <div key={user._id}>
            <p>profile created for: {user.classSelection}</p>
            <p>FirstName: {user.yourName}</p>
            <p>LastNamee: {user.lastName}</p>
            <p>contact: {user.contact}</p>
            <p>Email: {user.email}</p>
            <p>Dob: {user.dob}</p>
            <p>Address: {user.address}</p>
            <p>hear about us: {user.hearaboutus}</p>
            <p>pincode:  {user.pincode}</p>
            <p>religion: {user.religion}</p>
            <p>country: {user.country}</p>
            <p>education: {user.education}</p>
            <p>profession: {user.profession}</p>
            <div>
              {user.images.map((image) => (
                <img key={image._id} src={image.url} alt={image.name} />
              ))}
            </div>
            <hr />
          </div>
        ))}
      </div>

    </>
  );
}
