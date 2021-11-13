import { Button, TextField, Container, Grid } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    //post request add product  data
    const onSubmit = data => {
        fetch('https://frozen-ocean-83961.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert("Successfully added new offer !!")
                    reset()
                }
            })
    }
    return (
        <Container>
            <Grid container>
                <Grid item xs={12} md={12} style={{ textAlign: "center" }}>
                    <h2 className="text-center mt-3">Add New Offer</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="addoffer">
                        <TextField
                            sx={{ width: "50%", m: 1 }}
                            id="filled-basic"
                            label="Product Name"
                            variant="outlined"
                            type="text"
                            {...register("productName", { required: true })}

                        />
                        {errors.productName?.type === 'required' && <div className="text-danger mx-0">*Product Name  is required</div>}
                        <TextField
                            sx={{ width: "50%", m: 1 }}
                            id="filled-basic"
                            label="Description"
                            variant="outlined"
                            type="textarea"
                            {...register("description", { required: true })}
                        />
                        {errors.description?.type === 'required' && <div className="text-danger mx-0">*Description is required </div>}
                        <TextField
                            sx={{ width: "50%", m: 1 }}
                            id="filled-basic"
                            label="Img Url"
                            variant="outlined"
                            type="text"
                            {...register("image", { required: true })}
                        />
                        {errors.image?.type === 'required' && <div className="text-danger mx-0">*Image Url required </div>}
                        <Button
                            sx={{ width: "50%", m: 1, bgcolor: 'secondary.info' }}
                            type="submit"
                            variant="contained"
                        >
                            Add Product
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AddProduct;