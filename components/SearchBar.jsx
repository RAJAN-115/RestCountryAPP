import React from 'react';

export default function SearchBar({ onSearchChange, searchTerm }) {
  const handleChange = e => {
    onSearchChange(e.target.value);
  };

  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}
