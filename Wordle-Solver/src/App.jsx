
import React, { useState, useEffect } from "react";
import wordList from "./words.json" ;

function App() {
  const [letters, setLetters] = useState(["", "", "", "", ""]);
  const [matches, setMatches] = useState([]);

  const handleInputChange = (index, value) => {
    if (value.length > 1) return; 
    const newLetters = [...letters];
    newLetters[index] = value.toLowerCase();
    setLetters(newLetters);
  };

  useEffect(() => {
    const regex = new RegExp("^" + letters.map(l => (l ? l : ".")).join("") + "$");
    const filteredWords = wordList.filter(word => regex.test(word));
    setMatches(filteredWords);
  }, [letters]);

  return (
    <div className="app">
      <h1>Word Puzzle Solver</h1>
      <div className="letter-inputs">
        {letters.map((letter, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={letter}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        ))}
      </div>
      <h2>Possible Words:</h2>
      <ul>
        {matches.length > 0 ? matches.map((word, index) => (
          <li key={index}>{word}</li>
        )) : <p>No matches found</p>}
      </ul>
    </div>
  );
}

export default App;