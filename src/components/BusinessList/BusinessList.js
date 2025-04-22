import React from 'react';
import styles from "./BusinessList.module.css";
import Business from '../Business/Business';

const BusinessList = ({ businesses }) => {
  
  return (
      <div className={styles.BusinessList}>          
          {businesses.map((business, index) => {
            return  <Business business={business} key={`${business.name}-${index}`} />  
          })}
      </div>
        );

}

export default BusinessList;