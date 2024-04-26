import React from 'react';

function RecipeList({ recipe }) {
  return (
    <div className="RecipeList">
      <h2>Ingredientes:</h2>
      <ul>
        {recipe.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;