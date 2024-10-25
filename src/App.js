import React, {useEffect, useState} from "react";
import "./App.css";
import logo from './icon.jpg';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedrecipe] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/getter");
      //getting response from Api
      const result = await response.json();
      setRecipes(result);
    } catch (error) {
      console.error("Error fetching Data", error);
      // console.error("recipe not found , please search proper recipe");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRecipeClick = (index) => {
    setSelectedrecipe(recipes[index]);
  };

  const handleBackClick = (index) => {
    setSelectedrecipe(null);
  };

  return (
    <div className="App">
      <h1>Recipe Showcase Platform</h1>
        {/* // Import result is the URL of your image */}
        <div id="image">
            <img src={logo} alt="Logo" />
        </div>


      {selectedRecipe ? (
        <div>
          <h2 className="recipe-title">{selectedRecipe.name}</h2>
          <h4>
            <b>Time:</b> <br></br> {selectedRecipe.time}
          </h4>
          <p>
            <b>Ingredients:</b> <br></br> {selectedRecipe.ingredients}
          </p>
          <p>
            <b>Instructions:</b> <br></br> {selectedRecipe.instructions}
          </p>
          <button onClick={handleBackClick}> Back to Recipes</button>
        </div>
      ) : (
        <div>
          <ul className="recipe-list">
            {recipes.map((singleRecipe, index) => (
              <li key={index} className="recipe-item">
                <h2 className="recipe-title">{singleRecipe.name}</h2>
                <h4>
                  <b>Time:</b>  {singleRecipe.time}
                </h4>
                <button
                  onClick={() => {
                    handleRecipeClick(index);
                  }}
                >
                  View Recipe
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
