import React from "react";
import Sales from "./components/Sales";
import { CharacterCounter } from "./components/CharacterCounter";
// import { TempConverterFeature } from "./components/TempConverter";
import { FocusTracker } from "./components/FocusHistory";
const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Tablet", price: 15000 },
  { id: 4, name: "Keyboard", price: 1000 },
  { id: 5, name: "Mouse", price: 500 },
];

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* <h1>Product Search</h1>
      <Sales products={products} /> */}
      {/* <CharacterCounter/>/ */}
      {/* <TempConverterFeature/> */}
      <FocusTracker/>


    </div>
  );
}

export default App;
