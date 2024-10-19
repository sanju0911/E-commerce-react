import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

// Random data for image and description
const aboutData = [
  {
    imgSrc: "https://source.unsplash.com/random/300x300?nature",
    description:
      "We are a team dedicated to providing the best service. Our mission is to make the world a better place through innovation and creativity.",
  },
  {
    imgSrc: "https://source.unsplash.com/random/300x300?technology",
    description:
      "With years of experience in the industry, we focus on delivering top-notch solutions that cater to our clients’ needs with precision and expertise.",
  },
  {
    imgSrc: "https://source.unsplash.com/random/300x300?business",
    description:
      "Our passion for excellence drives us to constantly improve and evolve. We believe in making a difference through our commitment to quality.",
  },
  {
    imgSrc: "https://source.unsplash.com/random/300x300?city",
    description:
      "As leaders in our field, we strive to set the standard for innovation and customer satisfaction, ensuring that every client walks away happy.",
  },
];

// Function to pick a random item from the array
const getRandomAboutData = () => {
  const randomIndex = Math.floor(Math.random() * aboutData.length);
  return aboutData[randomIndex];
};

const About = () => {
  const { imgSrc, description } = getRandomAboutData();

  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col xs={12} md={6} className="mb-4">
          <Image src={imgSrc} alt="About us" fluid />
        </Col>
        <Col xs={12} md={6}>
          <h2>About Us</h2>
          <p>{description}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
