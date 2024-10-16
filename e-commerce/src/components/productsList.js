import { Card, Button, Container, Row, Col } from "react-bootstrap";

const products = [
  {
    title: "product 1",
    description: "This is a great product that you'll love.",
    imgSrc:
      "https://th.bing.com/th/id/OIP.u99Iofz-MjkcPy8WjyqBtAHaEJ?w=245&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    title: "Product 2",
    description: "An amazing product to improve your life.",
    imgSrc:
      "https://th.bing.com/th/id/OIP.MF_3vhbrpg1hVJ6YraqKIQHaD4?w=294&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    title: "Product 3",
    description: "The perfect item for your needs.",
    imgSrc:
      "https://th.bing.com/th/id/OIP.uD9jeK8EskJmDAzEipc4-gHaEo?w=290&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    title: "Product 4",
    description: "You won't find a better deal than this.",
    imgSrc:
      "https://th.bing.com/th/id/OIP.Ak6DO2-ydE4e8tTefROLRwAAAA?w=206&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    title: "Product 5",
    description: "High-quality product with great value.",
    imgSrc:
      "https://th.bing.com/th/id/OIP.C6atewLzCprvgAOZ4J5nBAHaFj?rs=1&pid=ImgDetMain",
  },
];

const ProductsList = () => {
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
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductsList;
