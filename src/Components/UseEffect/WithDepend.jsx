// 2. Effect with Dependencies

// You can specify dependencies in the array. The effect will re-run only if any of these dependencies change.
// Example: Updating Document Title Based on Prop

// jsx

import React, { useState, useEffect } from 'react';

function DocumentTitleUpdater({ title }) {
  useEffect(() => {
    // This effect runs whenever the `title` prop changes
    document.title = title;
  }, [title]); // Dependency array contains `title`

  return <h1>{title}</h1>;
}

export default DocumentTitleUpdater;

Usage:

jsx

import React, { useState } from 'react';
import DocumentTitleUpdater from './DocumentTitleUpdater';

function App() {
  const [title, setTitle] = useState('Initial Title');

  return (
    <div>
      <button onClick={() => setTitle('Updated Title')}>Change Title</button>
      <DocumentTitleUpdater title={title} />
    </div>
  );
}

export default App;

// Explanation:

//     Dependency Array with title: The effect updates the document title whenever the title prop changes.

