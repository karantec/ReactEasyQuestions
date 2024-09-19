// 2. Custom Hook for Form Handling

// A custom hook for managing form state and validation.
// useForm.js:

// jsx

import { useState } from 'react';

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation example
    const newErrors = {};
    if (!values.name) newErrors.name = 'Name is required';
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Handle form submission
      alert('Form submission');
      console.log('Form submitted:', values);
    }
  };

  return { values, errors, handleChange, handleSubmit };
}

export default useForm;

// Using the Custom Hook:



// Explanation:

//     Custom Hook: useForm manages form values and handles submission and validation.
//     Usage: MyForm uses useForm to handle input changes and form submission.