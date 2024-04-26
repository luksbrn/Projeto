import React, { useState } from 'react';
import Autocomplete from './Autocomplete'; 
import recipes from '../data/recipes'; 

function SearchBar({ onSearchSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    
    const filtered = recipes.filter((recipe) =>
      recipe.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredSuggestions(filtered);
  };

  const handleSuggestionSelected = (suggestion) => {
    setSearchQuery(suggestion); 
    onSearchSubmit(suggestion);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(searchQuery); 
  };

  const handleKeyPress = (e) => {
    
    if (e.key === 'Enter') {
      e.preventDefault(); 
      onSearchSubmit(searchQuery); 
    }
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
      <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Digite o nome da receita..."
          className="search-input"
        />
        <button type="submit" className="search-button">Pesquisar</button>
      </form>
      {filteredSuggestions.length > 0 && (
        <Autocomplete 
          suggestions={filteredSuggestions} 
          onSuggestionSelected={handleSuggestionSelected}
        />
      )}
    </div>
  );
}

export default SearchBar;