import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import review from '../../../images/review.jpg';
import Reviews from './Reviews';


const reviewBg = {
    background: `url(${review})`
}
const Review = () => {
    const [reviews, setReviews] = useState([])
    React.useEffect(() => {
        fetch('https://frozen-ocean-83961.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Box style={reviewBg} sx={{ py: 8 }} >
            <Container style={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ py: 6 }}>Customers Review</Typography>
                <Slider {...settings}>
                    {
                        reviews.map(review => <Reviews review={review}></Reviews>)
                    }

                </Slider>
            </Container>
        </Box >
    );
};

export default Review;