import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


const ReviewRating = ({ rating }) => {
    const [value, setValue] = React.useState(rating);
    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
                pb: 4
            }}
        >
            <Rating name="read-only" value={value} readOnly sx={{ py: 2 }} />

        </Box>
    );
};

export default ReviewRating;