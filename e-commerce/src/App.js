import React, { useState } from "react";
import Navigation from "./components/Navigation";
import ProductsList from "./components/productsList";
import Cart from "./components/Cart";
import { Button } from "react-bootstrap";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCartClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navigation />
      <Button
        variant="primary"
        style={{
          position: "fixed",
          top: "10px",
          right: "20px",
          zIndex: "1000",
        }}
        onClick={handleCartClick}
      >
        Cart
      </Button>
      <Cart isOpen={isOpen} handleClose={() => setIsOpen(false)} />{" "}
      <ProductsList />
    </div>
  );
}

export default App;
