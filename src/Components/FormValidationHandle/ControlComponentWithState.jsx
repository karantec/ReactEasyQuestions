// 1. Controlled Component with State

// Use React's state to manage form input values and validation errors.

// jsx

import React, { useState } from 'react';

function FormWithValidation() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const validateForm = () => {
    const newErrors = {};
    if (!email.includes('@')) {
      newErrors.email = 'Email must be a valid email address.';
    }
    if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form successfully submitted');
      console.log('Form submitted successfully!');
      
      // Handle successful form submission
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>
      <div>
        <label>Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormWithValidation;

// Explanation:

//     State Management: Use useState to manage email, password, and errors state.
//     Validation: validateForm checks the validity of the email and password, updating the errors state if necessary.
//     Error Display: Error messages are conditionally displayed based on the errors state.
//     Form Submission: Prevent default form submission and only proceed if validation passes.