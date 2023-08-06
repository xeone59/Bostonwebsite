
import './Register.css';
import React, { useState } from 'react';


function Register( {setPage} ){

const [name, setName] = useState('');
const [phoneNumber, setPhoneNumber] = useState('');
const [address, setAddress] = useState('');
const [subscribe, setSubscribe] = useState(false);
const [email, setEmail] = useState('');
const [isValidEmail, setIsValidEmail] = useState(true);
const [selectedOption, setSelectedOption] = useState('');
const [otherValue, setOtherValue] = useState('');

  

const handleNameChange = (e) => {
  const newName = e.target.value;
  setName(newName);
}

const handlePhoneNumberChange = (e) => {
  const newPhoneNumber = e.target.value;
  setPhoneNumber(newPhoneNumber);
}

const handleAddressChange = (e) => {
  const newAddress = e.target.value;
  setAddress(newAddress);
}

const handleSubscribeChange = (e) => {
  const newSubscribe = e.target.checked;
  setSubscribe(newSubscribe);
}

const handleEmailChange = (e) => {
  const newEmail = e.target.value;
  setEmail(newEmail);
  setIsValidEmail(validateEmail(newEmail));
}

const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

const handleOtherInputChange = (e) => {
    setOtherValue(e.target.value);
  };

const handleSubmit = (e) => {
  e.preventDefault();
  if (isValidEmail) {
    console.log('Form submitted with the following data:');
    console.log('Name:', name);
    console.log('Phone Number:', phoneNumber);
    console.log('Address:', address);
    console.log('Subscribe:', subscribe);
    console.log('Email:', email);
  } else {
    console.log('Form submission failed. Please enter a valid email.');
  }
}

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

return (
  <div className="register"  id="maincontent">
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleNameChange}
      />
      <label htmlFor="phoneNumber">Phone Number:</label>
      <input
        type="text"
        id="phoneNumber"
        name="phoneNumber"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
      <label htmlFor="address">Address:</label>
      <input
        type="text"
        id="address"
        name="address"
        value={address}
        onChange={handleAddressChange}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
      />
      {!isValidEmail && (
        <p className="register__error">Please enter a valid email address</p>
      )}
        <label htmlFor="subscribe">
        <input
          type="checkbox"
          id="subscribe"
          name="subscribe"
          checked={subscribe}
          onChange={handleSubscribeChange}
        />
        Subscribe
      </label>
      <label  name="where" className="selection"> Where do you know this website?
      <select value={selectedOption} className="selectionbox" onChange={handleOptionChange}>
        <option value="instagram">Instagram</option>
        <option value="facebook">Facebook</option>
        <option value="twitter">Twitter</option>
        <option value="other">Other</option>
      </select>
      </label>
      {selectedOption === 'other' && (
        <input
          className="other"
          type="text"
          value={otherValue}
          onChange={handleOtherInputChange}
        />
      )}
      <button className="fancy-button" type="submit">
        Submit
      </button>
    </form>
  </div>
);
      }
      
export default Register;


