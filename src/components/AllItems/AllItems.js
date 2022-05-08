import React from 'react';
import useBicycle from '../hooks/useBicycle';
import Items from '../Items/Items';

const AllItems = () => {
  const [items] = useBicycle();
  return (
    <div className="reviews-container mb-5">
       <h2 className="home-card-title mb-3 text-center mt-2">ALL ITEMS</h2>
        <div className="card-container container">
          {items.map((item) => (
            <Items key={item._id} item = {item}></Items>
          ))}
      </div>
    </div>
  );
};

export default AllItems;