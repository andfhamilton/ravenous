import React from "react";
import styles from "./App.module.css";

import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

const business = [ 
  {
      imageSrc: 'https://cdn.pixabay.com/photo/2018/03/06/13/36/pizza-3203417_1280.jpg',
      name: 'MarginOtto Pizzeria',
      address: '1010 Paddington Way',
      city: 'Flavortown',
      state: 'NY',
      zipCode: '10101',
      category: 'Italian',
      rating: 4.5,
      reviewCount: 90
    },
    {
      imageSrc: 'https://cdn.pixabay.com/photo/2022/06/04/04/14/noodles-7241213_1280.jpg',
      name: 'Best Trattoria',
      address: '1012 Paddington Way',
      city: 'Flavortown',
      state: 'NY',
      zipCode: '10101',
      category: 'Italian',
      rating: 4.7,
      reviewCount: 85
    },
    {
      imageSrc: 'https://cdn.pixabay.com/photo/2022/05/20/08/56/asian-cuisine-7209004_1280.jpg',
      name: 'Asian Fusion',
      address: '1014 Paddington Way',
      city: 'Flavortown',
      state: 'NY',
      zipCode: '10101',
      category: 'Asian',
      rating: 4.8,
      reviewCount: 100
    },
    {
      imageSrc: 'https://cdn.pixabay.com/photo/2022/05/12/17/05/hamburger-7191898_1280.jpg',
      name: 'Burger Bonanza',
      address: '1016 Paddington Way',
      city: 'Flavortown',
      state: 'NY',
      zipCode: '10101',
      category: 'American',
      rating: 4.2,
      reviewCount: 75
    },
    {
      imageSrc: 'https://cdn.pixabay.com/photo/2022/06/04/04/14/noodles-7241213_1280.jpg',
      name: 'Best Trattoria',
      address: '1012 Paddington Way',
      city: 'Flavortown',
      state: 'NY',
      zipCode: '10101',
      category: 'Italian',
      rating: 4.7,
      reviewCount: 85
    },
    {
      imageSrc: 'https://cdn.pixabay.com/photo/2018/03/06/13/36/pizza-3203417_1280.jpg',
      name: 'MarginOtto Pizzeria',
      address: '1010 Paddington Way',
      city: 'Flavortown',
      state: 'NY',
      zipCode: '10101',
      category: 'Italian',
      rating: 4.5,
      reviewCount: 90
    },
  ];

const App = () => {
  return (
    <div className={styles.App}>
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList businesses={business} />
    </div>
  );
};

export default App;
