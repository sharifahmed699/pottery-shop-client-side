import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


const ReviewRating = () => {
    const [value, setValue] = React.useState(3);
    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
        >
            <Rating name="read-only" value={value} readOnly sx={{ py: 2 }} />

        </Box>
    );
};

export default ReviewRating;