// 4. Nested Components

// Components can also be nested inside other components, allowing you to build complex UIs with simple building blocks.

// jsx

import React from 'react';
import ReactDOM from 'react-dom';

// Child component
function Header() {
  return <h1>Welcome to My App</h1>;
}

// Child component
function Footer() {
  return <p>© 2024 My App</p>;
}

// Main App component (parent)
function App() {
  return (
    <div>
      <Header />
      <p>This is the content of the app.</p>
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// Explanation:

//     The App component is composed of two smaller components: Header and Footer.
//     The Header and Footer components are simple and reusable in other parts of the app.
//     This approach allows you to build UIs by combining small components into larger components.