import React from 'react';
import styles from "./BusinessList.module.css";
import Business from '../Business/Business';

function BusinessList() {
    const businesses = [ 
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
        ];
    return (
        <div className={styles.BusinessList}>          
            {businesses.map((business, index) => (
                    <Business key={index} business={business} />  ))}
        </div>
        );

}

export default BusinessList;