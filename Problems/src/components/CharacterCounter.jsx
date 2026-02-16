import React, { useState, useEffect } from 'react';
export const useCharacterLimit = (limit) => {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log(`Input updated. Current length: ${text.length}`);
  }, [text]);

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length <= limit) {
      setText(value);
    }
  };

  return { text, handleChange };
};
const StatusDisplay = ({ text, limit }) => {
  const remaining = limit - text.length;
  const isWarning = remaining <= 10;

  return (
    <div style={{ marginTop: '10px', fontFamily: 'sans-serif' }}>
      <p>Characters: {text.length}</p>
      <p>Remaining: {remaining}</p>
      
      {isWarning && remaining >= 0 && (
        <p style={{ color: 'red', display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '5px' }}>⚠</span> 
          Only {remaining} characters left!
        </p>
      )}
    </div>
  );
};
export const CharacterCounter = ({ limit = 50 }) => {
  const { text, handleChange } = useCharacterLimit(limit);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Live Character Counter</h2>
      <textarea
        value={text}
        onChange={handleChange}
        rows="4"
        style={{ width: '300px', padding: '10px', fontSize: '16px' }}
      />
      <StatusDisplay text={text} limit={limit} />
    </div>
  );
};