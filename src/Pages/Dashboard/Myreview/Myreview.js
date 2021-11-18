import { Button, TextField, Container, Grid, InputLabel, Select, MenuItem, FormControl, Card, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';

const Myreview = () => {
    const { handleSubmit, formState: { errors }, reset } = useForm()
    const { user } = useAuth()
    const [review, setReview] = useState([])

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...review };
        newData[field] = value;
        setReview(newData);
    }
    const obj = {
        reviewmeg: review.reviewmeg,
        rating: review.rating,
        name: user.displayName,
        email: user.email
    }
    console.log(obj)
    const onSubmit = e => {
        fetch('https://frozen-ocean-83961.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Successfully added Your Review !!")
                    reset()
                    window.location.reload();
                }
            })

    }
    return (
        <Container>
            <Grid container>
                <Grid item xs={12} md={12}>
                    <Card variant="outlined" sx={{ width: "50%", m: "0 auto", boxShadow: 3, p: 2 }}>
                        <Typography sx={{ mt: 3 }} variant="h4" gutterBottom component="div">
                            Review
                        </Typography>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField
                                sx={{ width: "98%", pb: 2 }}
                                id="filled-basic"
                                label="Your Review"
                                variant="outlined"
                                required="true"
                                name="reviewmeg"
                                onBlur={handleOnChange}
                            // {...register("reviewmeg", { required: true })}

                            />
                            {errors.reviewmeg?.type === 'required' && <div className="text-danger mx-0">*Review  is required</div>}
                            <br />

                            <FormControl sx={{ width: "50%", m: 1 }} style={{ textAline: 'center', margin: '0 auto' }}>
                                <InputLabel id="demo-simple-select-label">Rating</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    sx={{ width: "98%", mb: 2 }}
                                    label="Rating"
                                    variant="outlined"
                                    name="rating"
                                    onBlur={handleOnChange}
                                // {...register("rating", { required: true })}
                                >
                                    <MenuItem value={1}>One</MenuItem>
                                    <MenuItem value={2}>Two</MenuItem>
                                    <MenuItem value={3}>Three</MenuItem>
                                    <MenuItem value={4}>Four</MenuItem>
                                    <MenuItem value={5}>Five</MenuItem>
                                </Select>
                            </FormControl>
                            {errors.rating?.type === 'required' && <div className="text-danger mx-0">*Rating  is required</div>}
                            <br />

                            <Button
                                sx={{ bgcolor: 'warning.main', size: "large", p: 1, fontSize: "16px", mb: 4 }}
                                type="submit"
                                variant="contained"
                            >
                                Review
                            </Button>
                        </form>
                    </Card>

                </Grid>
            </Grid>
        </Container>
    );
};

export default Myreview;
