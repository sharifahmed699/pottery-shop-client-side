import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Product = (props) => {
    const { _id, productName, description, image } = props.product;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, boxShadow: 3 }}>
                <CardMedia
                    component="img"
                    height="250"
                    style={{ width: '100%' }}
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {productName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Link to={`/purchase/${_id}`} style={{ textDecoration: 'none', paddingTop: '30px' }}><Button variant="contained" size="medium" style={{ marginTop: '10px', fontSize: '15px' }}>
                        Purchase Now
                    </Button></Link>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Product;