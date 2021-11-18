import { Container, Grid, Box } from '@mui/material';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import delivery from '../../images/feature-icon1.png'
import discount from '../../images/feature-icon2.png'
import moneyReturn from '../../images/feature-icon4.png'

const Service = () => {
    return (

        <Container style={{ background: "rgb(208 198 219 / 12%)" }} sx={{ my: 3 }}>
            <Typography variant="h3" sx={{ py: 4 }} style={{ textAlign: "center" }}>
                Our Service
            </Typography>
            <Grid container spacing={2} sx={{ pb: 8 }} style={{ textAlign: "center" }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={12} md={4} >
                    <Card sx={{ maxWidth: 345, py: 8 }} >
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="50"
                            style={{ width: "80px", margin: '0 auto' }}
                            image={delivery}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                                Fast Delivery
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ my: 2, fontFamily: 'Monospace' }}>
                                Fast Deliver is a fast growing and promising courier and parcel service in Bangladesh. With excellent customer service
                            </Typography>
                        </CardContent>
                        <CardActions >
                            <Button style={{ margin: "0 auto", backgroundColor: "black" }} variant="contained" size="large">Read More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ maxWidth: 345, py: 8 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="50"
                            style={{ width: "80px", margin: '0 auto' }}
                            image={discount}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                                Special Discount
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ my: 2, fontFamily: 'Monospace' }}>
                                A limited-time offer is any kind of discount, deal, special gift, or reward a buyer can get if they make a purchase from you during a certain
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button style={{ margin: "0 auto", backgroundColor: "black" }} variant="contained" size="large">Read More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ maxWidth: 345, py: 8 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="50"
                            style={{ width: "80px", margin: '0 auto' }}
                            image={moneyReturn}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                                Money Returns
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ my: 2, fontFamily: 'Monospace' }}>
                                After you request a refund through the Google Play website or the ... If you're returning the money to a payment method within PayPal
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button style={{ margin: "0 auto", backgroundColor: "black" }} variant="contained" size="large">Read More</Button>
                        </CardActions>
                    </Card>
                </Grid>

            </Grid>
        </Container >

    );
};

export default Service;