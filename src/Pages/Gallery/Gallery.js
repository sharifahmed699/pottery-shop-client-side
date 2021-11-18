import { Card, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import gallery1 from '../../images/gallery-1.jpg'
import gallery2 from '../../images/gallery-2.jpg'
import gallery3 from '../../images/gallery-3.jpg'
import gallery4 from '../../images/gallery-4.jpg'


const Gallery = () => {
    return (
        <Container style={{ background: "rgb(208 198 219 / 12%)" }} sx={{ my: 3 }}>
            <Typography variant="h3" sx={{ py: 6 }} style={{ textAlign: "center" }}>
                Trendy Products
            </Typography>
            <Grid container spacing={2} sx={{ pb: 8 }} style={{ textAlign: "center" }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={12} md={3} >
                    <Card sx={{ maxWidth: 345 }} >
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="320"
                            style={{ width: "100%" }}
                            image={gallery1}
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={3} >
                    <Card sx={{ maxWidth: 345 }} >
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="320"
                            style={{ width: "100%" }}
                            image={gallery2}
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={3} >
                    <Card sx={{ maxWidth: 345 }} >
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="320"
                            style={{ width: "100%" }}
                            image={gallery3}
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={3} >
                    <Card sx={{ maxWidth: 345 }} >
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="320"
                            style={{ width: "100%" }}
                            image={gallery4}
                        />
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Gallery;