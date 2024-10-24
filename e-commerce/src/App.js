import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Recipes from "./components/Recipes";
import ContactUs from "./components/ContactUs";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem("auth");
    if (authStatus) {
      setAuth(true);
    }
  }, []);

  return (
    <Router>
      <Navigation auth={auth} setAuth={setAuth} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setAuth={setAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
