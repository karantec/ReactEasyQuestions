// 5. useRef

// The useRef hook provides a way to access and manipulate DOM elements or store mutable values without causing re-renders.
// Example:

// jsx

import  { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default FocusInput;

// Explanation:

//     Ref: useRef returns a mutable ref object which persists across re-renders.
//     Accessing DOM: inputRef.current provides access to the DOM node, allowing you to call methods like focus().

