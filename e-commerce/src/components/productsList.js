// ProductsList Component
import React, { useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import Cart from "./Cart"; // Assuming Cart component is in the same folder

const products = [
  {
    title: "Product 1",
    description: "This is a great product that you'll love.",
    price: 29.99,
    imgSrc:
      "https://www.retouchingzone.com/wp-content/uploads/2023/08/Flat-Frog-Films.jpg",
  },
  {
    title: "Product 2",
    description: "An amazing product to improve your life.",
    price: 19.99,
    imgSrc:
      "https://th.bing.com/th/id/OIP.eeuNE1D0wZep6vQ0NeeUoQHaLP?w=236&h=358&c=7&o=5&dpr=1.3&pid=1.20",
  },
  {
    title: "Product 3",
    description: "The perfect item for your needs.",
    price: 39.99,
    imgSrc:
      "https://th.bing.com/th/id/OIP.JE8I19XREY1g_1X1KL2YmAHaJQ?w=236&h=295&c=7&o=5&dpr=1.3&pid=1.20",
  },
  {
    title: "Product 4",
    description: "You won't find a better deal than this.",
    price: 49.99,
    imgSrc: "http://tse3.mm.bing.net/th?id=OIP.AQZzXVoP33ROR0RftvhOgQHaK1",
  },
  {
    title: "Product 5",
    description: "High-quality product with great value.",
    price: 9.99,
    imgSrc:
      "https://th.bing.com/th/id/OIP.1ytx9QdDXamPNIvPP9Yi4QHaHa?w=236&h=236&c=7&o=5&dpr=1.3&pid=1.20",
  },
];

const ProductsList = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Add product to cart
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  // Remove product from cart
  const handleRemoveFromCart = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);

  return (
    <Container className="my-4">
      <Button variant="success" className="mb-4" onClick={handleShowCart}>
        Open Cart ({cartItems.length})
      </Button>
      <Row className="justify-content-center">
        {products.map((product, index) => (
          <Col xs={12} md={6} lg={4} className="mb-4" key={index}>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={product.imgSrc} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: ${product.price.toFixed(2)}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Cart
        cartItems={cartItems}
        handleClose={handleCloseCart}
        show={showCart}
        handleRemoveFromCart={handleRemoveFromCart} // Pass the remove function to Cart
      />
    </Container>
  );
};

export default ProductsList;
