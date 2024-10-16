// src/App.js
import React from "react";
import Navigation from "./components/Navigation";
import ProductsList from "./components/productsList";

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <ProductsList></ProductsList>
    </div>
  );
}

export default App;
