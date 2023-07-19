import React from 'react';
import Select from 'react-select';

const CustomSelect = () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: state.isFocused ? 0 : provided.border,
      boxShadow: state.isFocused ? 'none' : provided.boxShadow,
      borderTop:"0px",
      borderLeft:"0px",
      borderRight:"0px",
      borderRadius:"0px",
      borderBottom:"2px solid grey",
      '&:hover': {
        borderBottom:"2px solid grey",
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#999', // Custom color for the placeholder
 // Custom font style for the placeholder
      fontSize: '30px',
    }),
    option: (provided, state) => ({
      ...provided,
      fontSize: '20px',
      backgroundColor:"#fff",
      borderBottom:"1px solid #000",
      backgroundColor: state.isSelected ? '#ddd' : provided.backgroundColor, // Custom background color for selected options
      color: state.isSelected ? '#333' : provided.color, // Custom color for selected options
      '&:hover': {
        backgroundColor: state.isSelected ? '#ddd' : '#f5f5f5', // Custom background color on option hover
      },
    }),
    singleValue: (provided, state) => ({
      ...provided,
      fontSize: '30px',
      color: state.isSelected ? '#333' : provided.color, // Custom color for selected option
      '&:hover': {
        color: state.isSelected ? '#333' : '#666', // Custom color on option hover
      },
    }),
  };

  const handleChange = (selectedOption) => {
    console.log('Selected option:', selectedOption);
  };

  return (
    <Select
      options={options}
      placeholder="Profile creating for"
      onChange={handleChange}
      styles={customStyles}
    />
  );
};

export default CustomSelect;


// import React from 'react';
// import Select from 'react-select';

// const CustomSelect = () => {
//   const options = [
//     { value: 'option1', label: 'Option 1' },
//     { value: 'option2', label: 'Option 2' },
//     { value: 'option3', label: 'Option 3' },
//   ];

//   const customStyles = {
//     control: (provided, state) => ({
//       ...provided,
//       border: state.isFocused ? 0 : provided.border,
//       boxShadow: state.isFocused ? 'none' : provided.boxShadow,
//       '&:hover': {
//         border: state.isFocused ? 0 : provided.border,
//       },
//     }),
//     placeholder: (provided) => ({
//       ...provided,
//       color: '#999', // Custom color for the placeholder
//       fontStyle: 'italic', // Custom font style for the placeholder
//       fontSize: '30px',
//     }),
//     option: (provided, state) => ({
//       ...provided,
//       fontSize: '30px',
//       backgroundColor: state.isSelected ? '#ddd' : provided.backgroundColor, // Custom background color for selected options
//       color: state.isSelected ? '#333' : provided.color, // Custom color for selected options
//       '&:hover': {
//         backgroundColor: state.isSelected ? '#ddd' : '#f5f5f5', // Custom background color on option hover
//       },
//     }),
//     singleValue: (provided, state) => ({
//       ...provided,
//       fontSize: '30px',
//       color: state.isSelected ? '#333' : provided.color, // Custom color for selected option
//       '&:hover': {
//         color: state.isSelected ? '#333' : '#666', // Custom color on option hover
//       },
//     }),
//   };

//   const handleChange = (selectedOption) => {
//     console.log('Selected option:', selectedOption);
//   };

//   return (
//     <Select
//       options={options}
//       placeholder="Select an option"
//       onChange={handleChange}
//       styles={customStyles}
//     />
//   );
// };

// export default CustomSelect;
