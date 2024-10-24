import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Spinner, Alert, Card, Row, Col } from "react-bootstrap";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getRatingEmoji = (rating) => {
    if (rating >= 4) return "🤩😋";
    if (rating === 3) return "🙂";
    return "😞😢";
  };

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/recipes/${id}`);

        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        setRecipe(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return (
      <Container className="text-center">
        <Spinner animation="border" variant="primary" />
        <p>Loading recipe details...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="text-center">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Card
        className="shadow-lg p-4"
        style={{
          backgroundColor: "#f8f9fa",
          borderRadius: "10px",
        }}
      >
        <Row>
          <Col
            md={4}
            className="d-flex align-items-center justify-content-center"
          >
            <Card.Img
              variant="top"
              src={recipe.image}
              alt={recipe.name}
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Col>

          <Col md={8}>
            <Card.Body>
              <Card.Title style={{ marginBottom: "20px", fontSize: "1.8rem" }}>
                {recipe.name}
              </Card.Title>
              <Card.Text style={{ lineHeight: "1.8" }}>
                {" "}
                <strong>Cuisine:</strong> {recipe.cuisine} <br />
                <strong>Difficulty:</strong> {recipe.difficulty} <br />
                <strong>Prep Time:</strong> {recipe.prepTimeMinutes} min <br />
                <strong>Cook Time:</strong> {recipe.cookTimeMinutes} min <br />
                <strong>Servings:</strong> {recipe.servings} <br />
                <strong>Calories per Serving:</strong>{" "}
                {recipe.caloriesPerServing} <br />
                <strong>Rating:</strong> {recipe.rating}{" "}
                {getRatingEmoji(recipe.rating)}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>

        <Card.Body>
          <Card.Text style={{ marginTop: "30px", lineHeight: "1.8" }}>
            {" "}
            <strong>How to Prepare:</strong> <br />
            First, marinate the meat with spices for at least 2 hours. Then,
            cook the rice halfway before layering it with the marinated meat.
            Cook on low heat for 40 minutes, and voilà! You have a delicious
            biryani ready to serve.
          </Card.Text>

          <Card.Text style={{ marginTop: "20px", fontStyle: "italic" }}>
            Be cautious, because if you taste it, you will get addicted to it!
            😍🍽️
          </Card.Text>
        </Card.Body>

        <Card.Footer>
          <small className="text-muted">
            Rating: {recipe.rating} {getRatingEmoji(recipe.rating)}
          </small>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default RecipeDetail;
