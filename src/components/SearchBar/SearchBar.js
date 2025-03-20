import React, { useState } from 'react';

function SearchBar() {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('best_match');

  const handleTermChange = (event) => setTerm(event.target.value);
  const handleLocationChange = (event) => setLocation(event.target.value);
  const handleSortByChange = (event) => setSortBy(event.target.value);

  const handleSearch = (event) => {
    event.preventDefault();
    // Future API call logic will go here
  };

  return (
    <div>
      <input placeholder="Search" onChange={handleTermChange} />
      <input placeholder="Location" onChange={handleLocationChange} />
      <select onChange={handleSortByChange}>
        <option value="best_match">Best Match</option>
        <option value="rating">Highest Rated</option>
        <option value="review_count">Most Reviewed</option>
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
