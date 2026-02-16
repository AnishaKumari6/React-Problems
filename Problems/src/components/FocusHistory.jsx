import React, { useState, useRef, useEffect } from 'react';

export const FocusTracker = () => {
  // 1. State for the current input and the list of messages
  const [inputVal, setInputVal] = useState("");
  const [messages, setMessages] = useState([]);
  const [focusCount, setFocusCount] = useState(0);

  // 2. Refs for focusing the input and tracking history (no re-render)
  const inputRef = useRef(null);
  const historyRef = useRef([]);

  // 3. useEffect for side effects (logging or initialization)
  useEffect(() => {
    console.log("Component rendered. Focus count is:", focusCount);
  }, [focusCount]);

  const handleFocus = () => {
    setFocusCount((prev) => prev + 1);
  };

  const handleSubmit = () => {
    if (inputVal.trim() !== "") {
      // Update state (triggers re-render to show in list)
      setMessages((prev) => [...prev, inputVal]);
      
      // Update ref history (does NOT trigger re-render)
      historyRef.current.push(inputVal);
      
      setInputVal("");
    }
  };

  const focusInputProgrammatically = () => {
    // Requirement: Use button to focus input programmatically
    inputRef.current.focus();
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Focus Tracker & Message History</h2>
      
      <div style={{ marginBottom: '10px' }}>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          placeholder="Type message..."
          onChange={(e) => setInputVal(e.target.value)}
          onFocus={handleFocus}
        />
        <button onClick={handleSubmit} style={{ margin: '0 5px' }}>Submit</button>
        <button onClick={focusInputProgrammatically}>Focus Input</button>
      </div>

      <p>Focus count: {focusCount}</p>

      <h4>Messages:</h4>
      <ul>
        {messages.map((msg, idx) => (
          <li key={idx}>- {msg}</li>
        ))}
      </ul>

      {/* Requirement: History from Ref (shows persistence without being the render trigger) */}
      <p style={{ color: '#666', fontSize: '0.9em' }}>
        <strong>History in Ref (no re-render):</strong> {historyRef.current.join(", ")}
      </p>
    </div>
  );
};