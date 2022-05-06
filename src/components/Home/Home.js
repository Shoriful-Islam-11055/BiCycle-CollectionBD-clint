import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Distribution from '../DistributionStructure/Distribution';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Distribution></Distribution>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;