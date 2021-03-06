import { Button, Card, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';


const Purchase = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { user } = useAuth();
    const { id } = useParams()
    const history = useHistory()
    const [product, setProduct] = useState([])
    const [date, setDate] = useState(new Date())

    //fetch single product  
    useEffect(() => {
        fetch(`https://frozen-ocean-83961.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const onSubmit = data => {
        const obj = {
            productName: product.productName,
            description: product.description,
            image: product.image,
            name: user.displayName,
            email: user.email,
            phone: data.phone,
            orderDate: date.toLocaleDateString(),

        }
        //send data
        fetch('https://frozen-ocean-83961.herokuapp.com/order', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('You Order is Successfully conmplete!!')
                    reset()
                    history.push('/')
                }
            })
    }
    return (
        <Container>
            <Grid container>
                <Grid item xs={12} md={12} sx={{ mt: 3 }} style={{ textAlign: "center" }}>
                    <Card variant="outlined" sx={{ width: "50%", m: "0 auto", boxShadow: 3, p: 3 }}>
                        <Typography variant="h4" gutterBottom component="div">
                            Order Now
                        </Typography>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input style={{ width: "90%", padding: '20px', marginBottom: '12px', color: 'rgba(0, 0, 0, 0.38)', border: '1px solid rgba(0, 0, 0, 0.38)', fontSize: '16px', borderRadius: "2px" }} defaultValue={product.productName} readOnly />
                            <br />

                            <input style={{ width: "90%", padding: '18px', marginBottom: '10px', color: 'rgba(0, 0, 0, 0.38)', border: '1px solid rgba(0, 0, 0, 0.38)', fontSize: '16px', borderRadius: "2px" }} defaultValue={product.description} readOnly />
                            <br />
                            <TextField
                                disabled
                                sx={{ width: "90%", m: 1 }}
                                id="filled-basic"

                                variant="outlined"
                                defaultValue={user.displayName}
                                {...register("displayName")}

                            />
                            <TextField
                                disabled
                                sx={{ width: "90%", m: 1 }}
                                id="filled-basic"

                                variant="outlined"
                                defaultValue={user.email}
                                {...register("email")}

                            />

                            <TextField
                                sx={{ width: "90%", m: 1 }}
                                id="filled-basic"
                                label="Phone Number"
                                variant="outlined"
                                type="text"
                                {...register("phone", { required: true })}
                            />
                            {errors.phone?.type === 'required' && <div className="text-danger mx-0">*Phone number  required </div>}
                            <Button
                                sx={{ width: "90%", m: 1, bgcolor: 'warning.main', p: 1, fontSize: "17px" }}
                                type="submit"
                                variant="contained"
                            >
                                Order Place
                            </Button>
                        </form>
                    </Card>
                </Grid>
            </Grid>
        </Container>

    );
};

export default Purchase;