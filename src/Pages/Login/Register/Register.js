import {
    Button,
    Container,
    Grid,
    TextField,
    Typography,
    CircularProgress,
    Alert,
    Card,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };

    const handleLogin = (e) => {
        if (loginData.password !== loginData.password1) {
            alert("Your password did not match");
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    };
    return (
        <Container sx={{ mb: 4 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} sx={{ mt: 8 }} style={{ textAlign: "center" }}>
                    <Card variant="outlined" sx={{ width: "50%", m: "0 auto", boxShadow: 3, p: 3 }}>
                        <Typography sx={{ mt: 2 }} variant="h4" gutterBottom component="div">
                            Please Register
                        </Typography>
                        {!isLoading && (
                            <form onSubmit={handleLogin}>
                                <TextField
                                    sx={{ width: "90%", m: 1 }}
                                    id="filled-basic"
                                    label="Your Name"
                                    type="text"
                                    variant="standard"
                                    name="name"
                                    onBlur={handleOnChange}
                                />
                                <TextField
                                    sx={{ width: "90%", m: 1 }}
                                    id="filled-basic"
                                    label="Your Email"
                                    type="email"
                                    variant="standard"
                                    name="email"
                                    onBlur={handleOnChange}
                                />
                                <TextField
                                    sx={{ width: "90%", m: 1 }}
                                    id="filled-basic"
                                    label="Password"
                                    variant="standard"
                                    name="password"
                                    type="password"
                                    onBlur={handleOnChange}
                                />
                                <TextField
                                    sx={{ width: "90%", m: 1 }}
                                    id="filled-basic"
                                    label="ReType Password"
                                    variant="standard"
                                    name="password1"
                                    type="password"
                                    onBlur={handleOnChange}
                                />
                                <Button
                                    sx={{ width: "90%", m: 1, bgcolor: 'warning.main', p: 1, fontSize: "16px" }}
                                    type="submit"
                                    variant="contained"
                                >
                                    Register
                                </Button>
                                <br />
                                <NavLink style={{ textDecoration: "none" }} to="/login">
                                    <Button sx={{ mb: 2 }} variant="text">Already Register? Please Login</Button>
                                </NavLink>
                            </form>
                        )}
                    </Card>
                    {isLoading && <CircularProgress />}
                    {user?.email && (
                        <Alert severity="success">User Created successfully!</Alert>
                    )}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;
