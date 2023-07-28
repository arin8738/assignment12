/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import ShopByCategory from './ShopByCategory';
import useTitle from '../../Title/Title';
import SingUpForUpdate from './SingUpForUpdate';
import CustomerReview from './CustomerReview';

const Home = () => {
    useTitle("Home");
    return (
        <div className='max-w-7xl mx-auto'>
            <Banner></Banner>
            <Gallery></Gallery>
            <CustomerReview></CustomerReview>
            <SingUpForUpdate></SingUpForUpdate>
            <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default Home;