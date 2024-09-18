// 4. Nested Components and Context

// Context can be used in deeply nested components without passing props through every level.
// NestedComponent.js:

// jsx

import React from 'react';
import ThemedComponent from './ThemedComponent';

function NestedComponent() {
  return (
    <div>
      <h2>Nested Component</h2>
      <ThemedComponent />
    </div>
  );
}

export default NestedComponent;

// App.js with NestedComponent:

// jsx

import React from 'react';
import { ThemeProvider } from './ThemeContext';
import NestedComponent from './NestedComponent';

function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>Context API Example</h1>
        <NestedComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;

// Explanation:

//     Deep Nesting: ThemedComponent inside NestedComponent can still access the theme context provided by ThemeProvider.