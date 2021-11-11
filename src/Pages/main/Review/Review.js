import React from 'react';
import Slider from "react-slick";
import ReviewRating from './Rating/ReviewRating';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import review from '../../../images/review.jpg';


const reviewBg = {
    background: `url(${review})`
}
const Review = () => {
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
                    <Grid item style={{ textAlign: 'center' }} xs={12} md={12}>
                        <Box>
                            <Typography variant="h4" sx={{ pb: 2 }}>
                                Exclusive Ceramics
                            </Typography>
                            <Typography variant="h6" sx={{ width: '75%', mx: "auto", pb: 2 }}>
                                orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus mi vel ligula pulvinar, ac dignissim dui commodo. Vivamus tortor lectus, tempor at mauris sit amet
                            </Typography>
                            <ReviewRating ></ReviewRating>
                        </Box>
                    </Grid>
                    <Grid item style={{ textAlign: 'center' }} xs={12} md={12}>
                        <Box>
                            <Typography variant="h4">
                                Exclusive Ceramics
                            </Typography>
                            <Typography variant="h6">
                                orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus mi vel ligula pulvinar, ac dignissim dui commodo. Vivamus tortor lectus, tempor at mauris sit amet
                            </Typography>
                            <ReviewRating></ReviewRating>
                        </Box>
                    </Grid>
                    <Grid item style={{ textAlign: 'center' }} xs={12} md={12}>
                        <Box>
                            <Typography variant="h4">
                                Exclusive Ceramics
                            </Typography>
                            <Typography variant="h6">
                                orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus mi vel ligula pulvinar, ac dignissim dui commodo. Vivamus tortor lectus, tempor at mauris sit amet
                            </Typography>
                            <ReviewRating></ReviewRating>
                        </Box>
                    </Grid>
                </Slider>
            </Container>
        </Box >
    );
};

export default Review;