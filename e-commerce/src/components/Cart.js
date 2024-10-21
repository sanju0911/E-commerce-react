import { useState } from "react";
import { Offcanvas, ListGroup, Button } from "react-bootstrap";

function Cart({ isOpen, handleClose }) {
  const [cartItems, setCartItems] = useState([
    {
      name: "Product 1",
      price: 19.99,
    },
    {
      name: "Product 2",
      price: 29.99,
    },
    {
      name: "Product 3",
      price: 8.99,
    },
    {
      name: "Product 4",
      price: 9.99,
    },
  ]);

  const handleRemove = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index); // Remove item by index
    setCartItems(newCartItems); // Update state with the new list
  };

  // Calculate the total amount
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <Offcanvas show={isOpen} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Your Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.length > 0 ? (
          <>
            <ListGroup>
              {cartItems.map((item, index) => (
                <ListGroup.Item
                  key={index}
                  className="d-flex justify-content-between align-items-center"
                >
                  <div>
                    <h5>{item.name}</h5>
                    <p>Price: ${item.price.toFixed(2)}</p>
                  </div>
                  <Button variant="danger" onClick={() => handleRemove(index)}>
                    Remove
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
            <hr />
            <h5>Total Amount: ${totalAmount.toFixed(2)}</h5>{" "}
            {/* Display total */}
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default Cart;
