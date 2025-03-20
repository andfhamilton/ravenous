import React from 'react';
import styles from "./Business.module.css";

const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

function Business({business}) {
  return (
    <div>
      <img src={business.imageSrc} alt={business.name} />
      <h2>{business.name}</h2>
      <p>{business.address}</p>
      <p>{business.city}, {business.state} {business.zipCode}</p>
      <p>{business.category}</p>
      <p>Rating: {business.rating}</p>
      <p>Reviews: {business.reviewCount}</p>
    </div>
  );
}

export default Business;

