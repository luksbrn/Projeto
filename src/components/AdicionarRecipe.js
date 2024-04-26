import React, { useState } from 'react';

function AdicionarRecipe({ onRecipeAdded }) {
  const [newRecipe, setNewRecipe] = useState('');

  const handleInputChange = (e) => {
    setNewRecipe(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newRecipe.trim() !== '') {
      onRecipeAdded(newRecipe.trim());
      setNewRecipe('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newRecipe}
          onChange={handleInputChange}
          placeholder="Digite o nome da nova receita..."
        />
        <button type="submit">add-recipe-button</button>
      </form>
    </div>
  );
}

export default AdicionarRecipe;