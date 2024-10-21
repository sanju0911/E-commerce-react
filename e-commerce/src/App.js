import React, { useState } from "react";
import Navigation from "./components/Navigation";
import ProductsList from "./components/productsList";
import Cart from "./components/Cart";
import Home from "./components/Home";
import About from "./components/About";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleCartClick = () => {
    setIsOpen(!isOpen);
  };

  const HandleCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const handleRemoveFromCart = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <Navigation />
      <div
        style={{
          position: "fixed",
          top: "10px",
          right: "20px",
          zIndex: "1000",
          display: "flex",
          gap: "10px",
        }}
      >
        <Button variant="primary" onClick={handleCartClick}>
          Cart
        </Button>

        <Button variant="secondary">{cartItems.length}</Button>
      </div>

      <Cart
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        cartItems={cartItems}
        handleRemove={handleRemoveFromCart}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/store"
          element={<ProductsList HandleCart={HandleCart} />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
