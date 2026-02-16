import React, { useState, useEffect } from 'react';

// 1. Custom Hook for Syncing Logic
export const useTemperatureSync = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [lastChanged, setLastChanged] = useState(null); // 'C' or 'F'

  useEffect(() => {
    // Requirement: useEffect inside a custom hook for syncing logic
    if (lastChanged === 'C') {
      const c = parseFloat(celsius);
      if (!isNaN(c)) {
        // Formula: (C * 9/5) + 32
        setFahrenheit(((c * 9) / 5 + 32).toFixed(2));
      } else {
        setFahrenheit('');
      }
    } else if (lastChanged === 'F') {
      const f = parseFloat(fahrenheit);
      if (!isNaN(f)) {
        // Formula: (F - 32) * 5/9
        setCelsius(((f - 32) * 5 / 9).toFixed(2));
      } else {
        setCelsius('');
      }
    }
  }, [celsius, fahrenheit, lastChanged]);

  const handleCelsiusChange = (val) => {
    setCelsius(val);
    setLastChanged('C');
  };

  const handleFahrenheitChange = (val) => {
    setFahrenheit(val);
    setLastChanged('F');
  };

  return { celsius, fahrenheit, handleCelsiusChange, handleFahrenheitChange };
};

// 2. Child Component using Props
const ConverterUI = ({ celsius, fahrenheit, onCChange, onFChange }) => {
  return (
    <div style={{ fontFamily: 'sans-serif', lineHeight: '2' }}>
      <h2>Temperature Converter</h2>
      <div>
        <label>Celsius: </label>
        <input 
          type="number" 
          value={celsius} 
          onChange={(e) => onCChange(e.target.value)} 
        />
      </div>
      <div>
        <label>Fahrenheit: </label>
        <input 
          type="number" 
          value={fahrenheit} 
          onChange={(e) => onFChange(e.target.value)} 
        />
      </div>
    </div>
  );
};

// 3. Main Exported Component
export const TempConverterFeature = () => {
  const { celsius, fahrenheit, handleCelsiusChange, handleFahrenheitChange } = useTemperatureSync();

  return (
    <div style={{ padding: '20px' }}>
      <ConverterUI 
        celsius={celsius} 
        fahrenheit={fahrenheit} 
        onCChange={handleCelsiusChange} 
        onFChange={handleFahrenheitChange} 
      />
    </div>
  );
};