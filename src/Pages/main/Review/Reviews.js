import { Grid, Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import ReviewRating from './Rating/ReviewRating';

const Reviews = (props) => {
    const { reviewmeg, name, rating } = props.review
    return (
        <Grid item style={{ textAlign: 'center' }} xs={12} md={12}>
            <Box>
                <Typography variant="h4" sx={{ pb: 2, fontWeight: 500 }}>
                    {name}
                </Typography>
                <Typography variant="body1" sx={{ width: '75%', mx: "auto", pb: 2, fontFamily: 'Monospace', fontSize: 18, color: 'text.secondary' }}>
                    {reviewmeg}
                </Typography>
                <ReviewRating rating={rating}></ReviewRating>
            </Box>
        </Grid>

    );
};

export default Reviews;