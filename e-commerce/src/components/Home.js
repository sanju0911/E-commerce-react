import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const feedbacks = [
  {
    customer: "John Doe",
    feedback: "Great quality products at reasonable prices. Highly recommend!",
  },
  {
    customer: "Jane Smith",
    feedback:
      "The store has a wide range of products, and their prices are unbeatable.",
  },
  {
    customer: "Alice Brown",
    feedback:
      "Fast delivery and excellent customer service. I love shopping here!",
  },
];

const Home = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center mb-4">
        <Col md={10} className="text-center">
          <h2>Welcome to Our E-Commerce Platform</h2>
          <p className="mt-3">
            We offer a wide variety of high-quality products at reasonable
            prices. You can browse our products and check their prices in the
            store section. Our mission is to ensure that you get the best deals
            on every purchase!
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={10} className="text-center">
          <h3>What Our Customers Are Saying</h3>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        {feedbacks.map((feedback, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="shadow">
              <Card.Body>
                <Card.Text>"{feedback.feedback}"</Card.Text>
                <Card.Subtitle className="text-muted text-end">
                  - {feedback.customer}
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="justify-content-center mt-5">
        <Col md={10} className="text-center">
          <h4>Follow Us</h4>
          <div className="mt-3">
            <Button
              variant="link"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </Button>
            <Button
              variant="link"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Button>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center mt-5">
        <Col md={10} className="text-center">
          <p>
            &copy; {new Date().getFullYear()} Your E-Commerce Site. All rights
            reserved.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
