import { Button, CardMedia, Container, Grid, Typography, Box } from '@mui/material';
import React from 'react';
import welcome from '../../../images/welcome-img1.jpg'


const Welcomepage = () => {

    return (

        <Container sx={{ my: 3 }}>
            <Grid container style={{ margin: "0 auto" }}>
                <Grid item xs={12} md={6}>
                    <CardMedia
                        component="img"
                        height="100%"
                        style={{ width: '100%' }}
                        image={welcome}
                        alt="green iguana"
                    />
                </Grid>
                <Grid item xs={12} md={6} style={{ backgroundColor: '#f7f5f5a3' }}>
                    <Box style={{ marginTop: "100px" }}>
                        <Typography variant="h6" sx={{ p: 2 }}>Welcome to</Typography>
                        <Typography variant="h3" sx={{ p: 2, color: 'primary.main' }}>Pottery Shop</Typography>
                        <Typography sx={{ p: 2, color: 'text.secondary' }} variant="body1">Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form. Major types include earthenware, stoneware and porcelain</Typography>
                        <Button variant="outlined" sx={{ m: 2, p: 1 }}>Read More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Welcomepage;