// Cart Component
import { Offcanvas, Table, Button } from "react-bootstrap";

const Cart = ({ cartItems, handleClose, show, handleRemoveFromCart }) => {
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Your Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.length > 0 ? (
          <>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <img src={item.imgSrc} alt={item.title} width="50" />
                    </td>
                    <td>{item.title}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => handleRemoveFromCart(index)} // Trigger remove action
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="d-flex justify-content-between">
              <h5>Total: ${totalAmount.toFixed(2)}</h5>
              <Button variant="success">Checkout</Button>
            </div>
          </>
        ) : (
          <p>Your cart is empty</p>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
