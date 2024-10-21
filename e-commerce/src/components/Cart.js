import { Offcanvas, ListGroup, Button } from "react-bootstrap";

function Cart({ isOpen, handleClose, cartItems, handleRemove }) {
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
                    <h5>{item.title}</h5> <p>Price: ${item.price.toFixed(2)}</p>
                  </div>
                  <Button variant="danger" onClick={() => handleRemove(index)}>
                    Remove
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
            <hr />
            <h5>Total Amount: ${totalAmount.toFixed(2)}</h5>{" "}
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default Cart;
