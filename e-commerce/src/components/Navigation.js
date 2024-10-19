import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Cart from "./Cart";
import { useState } from "react";
const Navigation = () => {
  const [isOpen, SetisOpen] = useState(false);

  const handleOPencart = () => {
    SetisOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">store</Nav.Link>
            <Nav.Link href="#pricing">About us</Nav.Link>
          </Nav>
          <Button className="ms-auto" onClick={handleOPencart}>
            Cart
          </Button>

          {isOpen && <Cart></Cart>}
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
