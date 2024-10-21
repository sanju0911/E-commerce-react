import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Spinner,
  Alert,
  Button,
  Form,
} from "react-bootstrap";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    rating: "",
    cost: "",
  });

  useEffect(() => {
    const fetchRecipes = async () => {
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
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };

    fetchRecipes();
  }, []);

  const handleAddRecipe = (e) => {
    e.preventDefault();

    console.log("New Recipe Submitted:", newRecipe);

    setNewRecipe({
      name: "",
      rating: "",
      cost: "",
    });

    setShowForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Container className="mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Delicious Recipes</h1>
        <Button variant="primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? "Close Form" : "Add Recipe"}
        </Button>
      </div>

      {error && (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      )}

      {loading && (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
          <p>Loading recipes...</p>
        </div>
      )}

      {showForm && (
        <Form onSubmit={handleAddRecipe} className="mb-4">
          <Form.Group controlId="formRecipeName">
            <Form.Label>Recipe Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter recipe name"
              name="name"
              value={newRecipe.name}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formRecipeRating">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter rating"
              name="rating"
              value={newRecipe.rating}
              onChange={handleInputChange}
              required
              min="1"
              max="5"
            />
          </Form.Group>

          <Form.Group controlId="formRecipeCost">
            <Form.Label>Cost</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter cost"
              name="cost"
              value={newRecipe.cost}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Button variant="success" type="submit" className="mt-3">
            Submit Recipe
          </Button>
        </Form>
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
