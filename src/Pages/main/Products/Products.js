import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { Container, Typography } from '@mui/material';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])
    React.useEffect(() => {
        fetch('https://frozen-ocean-83961.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])
    return (
        <Box sx={{ flexGrow: 1, mb: 4 }}>
            <Container style={{ textAlign: 'center' }}>
                <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};
export default Products;