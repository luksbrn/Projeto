import React, { useState } from 'react';
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

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion); 
    onSearchSubmit(suggestion);
    setFilteredSuggestions([]);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(searchQuery); 
    setFilteredSuggestions([]);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); 
      onSearchSubmit(searchQuery); 
      setFilteredSuggestions([]);
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
        <ul className="suggestions-list">
          {filteredSuggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
