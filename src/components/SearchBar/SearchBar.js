import React, { useState } from 'react';
import styles from './SearchBar.module.css';

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
    <div className={styles.SearchBar}>
      <div className={styles.SearchBarFields}>
        <input placeholder="Restaurants" onChange={handleTermChange} />
        <input placeholder="Location" onChange={handleLocationChange} />
      </div>
      <div className={styles.SearchBarSortOptions}> 
      <ul onChange={handleSortByChange}>
        <li value="best_match">Best Match</li>
        <li value="rating">Highest Rated</li>
        <li value="review_count">Most Reviewed</li>
      </ul>
      </div>
      <div className={styles.SearchBarSubmit}>
      <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default SearchBar;
