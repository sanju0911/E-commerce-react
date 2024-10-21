import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-lg">
            <Card.Body>
              <Card.Title className="text-center mb-4">
                <h2>About Us</h2>
              </Card.Title>
              <Card.Text className="text-justify">
                Welcome to our E-commerce platform! We are dedicated to
                providing our customers with a wide range of high-quality
                products at competitive prices. Our team works tirelessly to
                ensure a seamless shopping experience, from browsing to
                checkout.
              </Card.Text>
              <Card.Text className="text-justify">
                Our mission is to offer exceptional service and the best deals
                in the market. We constantly update our inventory with the
                latest trends and products to meet your needs. Whether you're
                shopping for yourself or for a loved one, we've got something
                for everyone.
              </Card.Text>
              <Card.Text className="text-center font-italic">
                "Customer satisfaction is our priority."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
