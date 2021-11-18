import { Container, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import Product from '../main/Product/Product';
import Footer from '../Share/Footer/Footer';

const ExploreProduct = () => {
    const [products, setProducts] = useState([])
    React.useEffect(() => {
        fetch('https://frozen-ocean-83961.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Container style={{ marginBottom: "50px" }}>

                    <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                        All Products
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
            <Footer></Footer>
        </>
    );
};

export default ExploreProduct;