import React, { useState } from "react";

function App() {
  const [wordCount, setWordCount] = useState(0);

  const handleInputChange = (event) => {
    const text = event.target.value;
    const words = text.trim().split(/\s+/);
    setWordCount(words.length);
  };

  return (
    <div>
      <div className="container">
        <h1>Responsive Paragraph Word Counter</h1>
        <textarea onChange={handleInputChange} />
        <p>Word Count: {wordCount}</p>
      </div>
    </div>
  );
}

export default App;
