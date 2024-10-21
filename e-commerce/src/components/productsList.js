import React, { useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

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
      "https://www.retouchingzone.com/wp-content/uploads/2023/08/Flat-Frog-Films.jpg",
  },
  {
    title: "Product 3",
    description: "The perfect item for your needs.",
    price: 39.99,
    imgSrc:
      "https://www.retouchingzone.com/wp-content/uploads/2023/08/Flat-Frog-Films.jpg",
  },
  {
    title: "Product 4",
    description: "You won't find a better deal than this.",
    price: 49.99,
    imgSrc:
      "https://www.retouchingzone.com/wp-content/uploads/2023/08/Flat-Frog-Films.jpg",
  },
  {
    title: "Product 5",
    description: "High-quality product with great value.",
    price: 9.99,
    imgSrc:
      "https://www.retouchingzone.com/wp-content/uploads/2023/08/Flat-Frog-Films.jpg",
  },
];

const ProductsList = ({ HandleCart }) => {
  const [addcart, setaddcart] = useState(null);

  const addtocart = (index) => {
    setaddcart(index);
    HandleCart(products[index]);
  };

  return (
    <Container className="my-4">
      <Row className="justify-content-center">
        {products.map((product, index) => (
          <Col xs={12} md={6} lg={4} className="mb-4" key={index}>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={product.imgSrc} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: ${product.price.toFixed(2)}</Card.Text>
                <Button variant="primary" onClick={() => addtocart(index)}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductsList;
