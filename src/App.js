import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const  [submitted, setSumitted] = useState(false);
  const  [valid, setValid] =  useState(false);

  const handleFirsttNameInputChange = (event)=>{
    setValues({...values,firstName:event.target.value})
  }

  const handleLasttNameInputChange = (event)=>{
    setValues({...values,lastName:event.target.value})
  }

  const handleEmailtNameInputChange = (event)=>{
    setValues({...values,email:event.target.value})
  }

  const handleSumit = (event)=>{
    event.preventDefault();
    if(values.firstName && values.lastName && values.email){
      setValid(true);
    }
    setSumitted(true);
  }

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSumit}>
      {submitted && valid ?<div className="success-message">Success!</div>:null}  
        <input
        onChange={handleFirsttNameInputChange}
        value = {values.firstName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName" />
          {submitted && !values.firstName ? <span>Please enter first name</span> : null}
       
        <input
        onChange={handleLasttNameInputChange}
        value = {values.lastName}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
         {submitted && !values.lastName ? <span>Please enter last name</span> : null}
        <input
        onChange={handleEmailtNameInputChange}
        value = {values.email}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
         {submitted &&  !values.email ? <span>Please enter email</span>:null}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}