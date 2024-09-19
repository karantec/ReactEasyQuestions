// 1. Real-time Validation with Controlled Inputs

// jsx

import  { useState } from 'react';

function RealTimeValidationForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email) => {
    return email.includes('@') ? '' : 'Email must be a valid email address.';
  };

  const validatePassword = (password) => {
    return password.length >= 6 ? '' : 'Password must be at least 6 characters long.';
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setEmailError(validateEmail(emailValue));
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    setPasswordError(validatePassword(passwordValue));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError && !passwordError) {
      alert('Form submitted successfully!');
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
        {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
      </div>
      <div>
        <label>Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RealTimeValidationForm;

// Explanation:

//     Real-time Validation: The validateEmail and validatePassword functions provide immediate feedback as the user types.
//     State Updates: handleEmailChange and handlePasswordChange update both the state and error messages dynamically.
//     Conditional Rendering: Error messages are conditionally rendered based on the validation results.

