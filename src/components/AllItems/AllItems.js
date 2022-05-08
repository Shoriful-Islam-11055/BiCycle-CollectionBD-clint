import React from 'react';
import useBicycle from '../hooks/useBicycle';
import Items from '../Items/Items';

const AllItems = () => {
    const [allItems] = useBicycle();
    return (
        <div className="reviews-container mb-5">
      <h2 className="review-page-title text-center">MY ALL ITEMS</h2>
      <div className="review-card container p-3">
        {allItems.map((services) => (
          <Items key={services.id} services={services}></Items>
        ))}
      </div>
    </div>
    );
};

export default AllItems;