import React from 'react';
import Gallery from '../../Gallery/Gallery';
import Service from '../../Service/Service';
import Footer from '../../Share/Footer/Footer';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Review from '../Review/Review';
import Welcomepage from '../WelcomePage/Welcomepage';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Welcomepage></Welcomepage>
            <Service></Service>
            <Review></Review>
            <Gallery></Gallery>
            <Footer></Footer>

        </div>
    );
};

export default Home;