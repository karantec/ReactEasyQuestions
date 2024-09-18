// Consider a form with additional criteria like confirming a password and a checkbox for terms and conditions.
// 1. Complex Form Validation

// jsx

import React, { useState } from 'react';

function ComplexValidationForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!email.includes('@')) {
      newErrors.email = 'Email must be a valid email address.';
    }
    if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long.';
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords must match.';
    }
    if (!termsAccepted) {
      newErrors.termsAccepted = 'You must accept the terms and conditions.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted successfully!');
      // Handle successful form submission
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>
      <div>
        <label>Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>
      <div>
        <label>Confirm Password:
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </label>
        {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}
      </div>
      <div>
        <label>
          <input type="checkbox" checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} />
          Accept terms and conditions
        </label>
        {errors.termsAccepted && <p style={{ color: 'red' }}>{errors.termsAccepted}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ComplexValidationForm;

// Explanation:

//     Multiple Fields: Manages email, password, confirm password, and terms acceptance.
//     Validation Logic: Checks all fields and sets appropriate error messages.
//     Conditional Rendering: Displays error messages based on the validation results for each field.

