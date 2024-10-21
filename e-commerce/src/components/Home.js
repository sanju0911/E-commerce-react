import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
  Carousel,
} from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";

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
      {/* Hero Section */}
      <Row className="justify-content-center mb-4">
        <Col md={12} className="text-center">
          <h1 className="display-4 font-weight-bold">
            Welcome to Our Recipe Dictionary
          </h1>
          <p className="lead mt-3">
            Discover a world of delicious recipes, from everyday meals to
            gourmet experiences. Whether you’re a seasoned chef or just getting
            started, you’ll find everything you need right here!
          </p>
          <Button href="/recipes" variant="success" className="mt-4 px-4 py-2">
            Explore Recipes
          </Button>
        </Col>
      </Row>

      {/* Recipes Carousel */}
      <Row className="justify-content-center mt-5">
        <Col md={8}>
          <h2 className="text-center mb-4">A Variety of Recipes to Explore</h2>
          <Carousel>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src="https://via.placeholder.com/800x400?text=Italian+Cuisine"
                alt="Italian Cuisine"
                rounded
              />
              <Carousel.Caption>
                <h3>Italian Cuisine</h3>
                <p>
                  Experience authentic Italian dishes that are easy to prepare
                  and full of flavor.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src="https://via.placeholder.com/800x400?text=Mexican+Cuisine"
                alt="Mexican Cuisine"
                rounded
              />
              <Carousel.Caption>
                <h3>Mexican Cuisine</h3>
                <p>
                  Savor the taste of traditional Mexican recipes with a modern
                  twist.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src="https://via.placeholder.com/800x400?text=Indian+Cuisine"
                alt="Indian Cuisine"
                rounded
              />
              <Carousel.Caption>
                <h3>Indian Cuisine</h3>
                <p>
                  Indulge in the rich flavors and spices of classic Indian
                  dishes.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      {/* Customer Feedback Section */}
      <Row className="justify-content-center mt-5">
        <Col md={12} className="text-center">
          <h2>What Our Customers Are Saying</h2>
        </Col>
        <Col md={10} className="mt-4">
          <Row>
            {feedbacks.map((feedback, index) => (
              <Col key={index} md={4} className="mb-4">
                <Card className="shadow-lg border-0">
                  <Card.Body>
                    <Card.Text className="text-dark">
                      "{feedback.feedback}"
                    </Card.Text>
                    <Card.Subtitle className="text-muted text-end">
                      - {feedback.customer}
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {/* Follow Us Section */}
      <Row className="justify-content-center mt-5">
        <Col md={8} className="text-center">
          <h4>Follow Us on Social Media</h4>
          <div className="d-flex justify-content-center gap-3 mt-3">
            <Button
              variant="link"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-0"
            >
              <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
            </Button>
            <Button
              variant="link"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-0"
            >
              <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
            </Button>
          </div>
        </Col>
      </Row>

      {/* Footer Section */}
      <Row className="justify-content-center mt-5">
        <Col md={12} className="text-center">
          <p className="text-muted">
            &copy; {new Date().getFullYear()} Recipe Dictionary. All rights
            reserved.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
