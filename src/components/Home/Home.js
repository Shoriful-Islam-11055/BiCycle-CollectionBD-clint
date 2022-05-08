import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Distribution from '../DistributionStructure/Distribution';
import InventoryItems from '../InventoryItems/InventoryItems';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
             <InventoryItems></InventoryItems>
            <Distribution></Distribution>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;