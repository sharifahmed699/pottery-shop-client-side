import React from 'react';
import Footer from '../../Share/Footer/Footer';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Review from '../Review/Review';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Review></Review>
            <Footer></Footer>

        </div>
    );
};

export default Home;