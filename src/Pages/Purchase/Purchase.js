import { Button, Container, Grid, TextField } from '@mui/material';
import Input from '@mui/material/Input';
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
    const { productName } = product


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
                <Grid item xs={12} md={12} style={{ textAlign: "center" }}>
                    <h2 className="text-center mt-3">Order Now</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input style={{ width: "50%", padding: '20px', marginBottom: '12px', color: 'rgba(0, 0, 0, 0.38)', border: '1px solid rgba(0, 0, 0, 0.38)', fontSize: '16px', borderRadius: "2px" }} defaultValue={product.productName} readOnly />
                        <br />

                        <input style={{ width: "50%", padding: '18px', marginBottom: '10px', color: 'rgba(0, 0, 0, 0.38)', border: '1px solid rgba(0, 0, 0, 0.38)', fontSize: '16px', borderRadius: "2px" }} defaultValue={product.description} readOnly />
                        <br />
                        <TextField
                            disabled
                            sx={{ width: "50%", m: 1 }}
                            id="filled-basic"

                            variant="outlined"
                            defaultValue={user.displayName}
                            {...register("displayName")}

                        />
                        <TextField
                            disabled
                            sx={{ width: "50%", m: 1 }}
                            id="filled-basic"

                            variant="outlined"
                            defaultValue={user.email}
                            {...register("email")}

                        />

                        <TextField
                            sx={{ width: "50%", m: 1 }}
                            id="filled-basic"
                            label="Phone Number"
                            variant="outlined"
                            type="text"
                            {...register("phone", { required: true })}
                        />
                        {errors.phone?.type === 'required' && <div className="text-danger mx-0">*Phone number  required </div>}
                        <Button
                            sx={{ width: "50%", m: 1, bgcolor: 'secondary.info' }}
                            type="submit"
                            variant="contained"
                        >
                            Order Product
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Container>

    );
};

export default Purchase;