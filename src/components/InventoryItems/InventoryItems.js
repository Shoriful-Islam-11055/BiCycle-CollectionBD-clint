import React from 'react';
import useBicycle from '../hooks/useBicycle';
import Items from '../Items/Items';
import './InventoryItems.css'

const InventoryItems = () => {
    const [items] = useBicycle();
    return (
        <div>
            <section className='review demo mt-5'>
                    <h1 className='home-card-title mb-3 text-center'>Inventory Items</h1>
                    <div className='home-card-container container'>
                    {
                       items.slice(0,3).map(item =><Items
                        key={item.id}
                        items = {item}
                       ></Items>)
                       
                    }
                    </div>
                   {/* <Link  to="/review">See All Review</Link> */}
                </section>
        </div>
    );
};

export default InventoryItems;