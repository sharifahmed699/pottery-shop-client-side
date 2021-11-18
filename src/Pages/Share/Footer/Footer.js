import { Button, Container, Grid, Typography, Box } from '@mui/material';
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (

        <Box style={{ background: "#ebe4e2f2" }}>
            <Container sx={{ p: 6 }}>
                <Grid container spacing={2} style={{ margin: "0 auto" }}>
                    <Grid item xs={12} md={5}>
                        <Typography variant="h4"> Pottery Shop</Typography>
                        <Typography variant="subtitle1" style={{ margin: '0 auto', padding: '2px', color: 'gray' }}>Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form.</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} style={{ textAline: "center" }}>
                        <Typography variant="h6">Get In Touch</Typography>
                        <Button variant="text" style={{ color: 'gray' }}>1212,Dhaka , Bangladesh</Button><br />
                        <Button variant="text" style={{ color: 'gray' }}>pottery@gmail.com</Button><br />
                        <Button variant="text" style={{ color: 'gray' }}>+880-1567-123245</Button><br />
                        <Button variant="text" style={{ color: 'gray' }}>09.00 AM - 06.00 PM</Button>

                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6">Quicklinks</Typography>
                        <Button variant="text" style={{ color: 'gray' }}>About</Button><br />
                        <Button variant="text" style={{ color: 'gray' }}>Product</Button><br />
                        <Button variant="text" style={{ color: 'gray' }}>DashBoard</Button><br />
                        <Button variant="text" style={{ color: 'gray' }}>Contact</Button>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Typography style={{ color: 'gray', textAlign: "center" }}>Copyright ©2021 All rights reserved | sharifahmedewu15@gmail.com</Typography>
                    </Grid>
                </Grid>
            </Container >
        </Box>
    );
};

export default Footer;