import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Navigation = ({ auth, setAuth }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth(false);
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Recipe-Hotel
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/recipes">
            Recipes
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About Us
          </Nav.Link>
          <Nav.Link as={Link} to="/contactus">
            Contact Us
          </Nav.Link>
        </Nav>
        <Nav>
          {!auth ? (
            <>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                Register
              </Nav.Link>
            </>
          ) : (
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
