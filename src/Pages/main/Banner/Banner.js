import React from 'react';
import Grid from '@mui/material/Grid';
import banner from '../../../images/banner.jpg';
import { Typography, Button, Container } from '@mui/material';
import Box from '@mui/material/Box';


const bannerBg = {
    background: `url(${banner})`,
}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 600,
}
const Banner = () => {
    return (

        <Grid style={bannerBg} >
            <Grid item style={{ ...verticalCenter, textAlign: 'center' }} xs={12} md={12}>
                <Box>
                    <Container>
                        <Typography variant="h6">
                            Exclusive Ceramics & <br />
                        </Typography>
                        <Typography variant="h3" sx={{ fontSize: 68, fontWeight: 600, color: 'white' }}>
                            Pottery Retailer
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 18, fontWeight: 600, color: 'white' }}>
                            We Make Unique Things With Love And Passion
                        </Typography>
                        <Button variant="outlined" color="error" style={{ marginBottom: "200px", fontSize: 18, color: 'warning.main' }}>Explore Now</Button>
                    </Container>
                </Box>
            </Grid>

        </Grid>

    );
};

export default Banner;