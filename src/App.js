import React, { useState } from 'react';
import WelcomeMessage from './components/WelcomeMessage';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import recipesDetails from './data/recipesDetails'; 
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [recipe, setRecipe] = useState(null);

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
    if (recipesDetails.hasOwnProperty(query)) {
      setRecipe(recipesDetails[query]);
    } else {
      setRecipe(null); 
    }
  };

  const handleBackToSearch = () => {
    setSearchQuery('');
    setRecipe(null);
  };

  return (
    <div className="App">
      <WelcomeMessage />
      {!recipe && <SearchBar onSearchSubmit={handleSearchSubmit} />}
      {recipe ? (
        <RecipeList recipe={recipe} />
      ) : (
        searchQuery && <h2>Nenhuma receita encontrada para "{searchQuery}"</h2>
      )}
      {recipe && <button onClick={handleBackToSearch}>Voltar para a pesquisa</button>}
    </div>
  );
}

export default App;