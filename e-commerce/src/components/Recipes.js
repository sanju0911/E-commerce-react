import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dataFetched, setDataFetched] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchRecipes = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        "https://dummyjson.com/recipes?limit=10&skip=10&select=name,image"
      );

      if (!res.ok) {
        throw new Error(`Error: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      setRecipes(data.recipes);
      setLoading(false);
      setDataFetched(true);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Delicious Recipes</h1>

      {error && (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      )}

      {!dataFetched && !loading && (
        <div className="text-center mb-4">
          <Button variant="primary" onClick={handleFetchRecipes}>
            Get Recipes
          </Button>
        </div>
      )}

      {loading && (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
          <p>Loading recipes...</p>
        </div>
      )}

      <Row>
        {!loading &&
          !error &&
          recipes.map((recipe) => (
            <Col key={recipe.id} md={4} className="mb-4">
              <Card className="shadow-lg">
                <Card.Img variant="top" src={recipe.image} alt={recipe.name} />
                <Card.Body>
                  <Card.Title>{recipe.name}</Card.Title>
                  <Card.Text>
                    <strong>Difficulty:</strong> {recipe.difficulty} <br />
                    <strong>Cuisine:</strong> {recipe.cuisine} <br />
                    <strong>Prep Time:</strong> {recipe.prepTimeMinutes} min{" "}
                    <br />
                    <strong>Cook Time:</strong> {recipe.cookTimeMinutes} min{" "}
                    <br />
                    <strong>Servings:</strong> {recipe.servings} <br />
                    <strong>Calories per Serving:</strong>{" "}
                    {recipe.caloriesPerServing}
                  </Card.Text>
                  <Button
                    variant="primary"
                    className="mb-2"
                    onClick={() => alert("You selected: " + recipe.name)}
                  >
                    View Recipe
                  </Button>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    Rating: {recipe.rating} | Reviews: {recipe.reviewCount}
                  </small>
                </Card.Footer>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Recipes;
