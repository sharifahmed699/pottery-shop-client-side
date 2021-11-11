import {
    Button,
    Container,
    Grid,
    TextField,
    Typography,
    CircularProgress,
    Alert,
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
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} sx={{ mt: 8 }} style={{ textAlign: "center" }}>
                    <Typography variant="h5" gutterBottom component="div">
                        Register
                    </Typography>
                    {!isLoading && (
                        <form onSubmit={handleLogin}>
                            <TextField
                                sx={{ width: "50%", m: 1 }}
                                id="filled-basic"
                                label="Your Name"
                                type="text"
                                variant="standard"
                                name="name"
                                onChange={handleOnChange}
                            />
                            <TextField
                                sx={{ width: "50%", m: 1 }}
                                id="filled-basic"
                                label="Your Email"
                                type="email"
                                variant="standard"
                                name="email"
                                onChange={handleOnChange}
                            />
                            <TextField
                                sx={{ width: "50%", m: 1 }}
                                id="filled-basic"
                                label="Password"
                                variant="standard"
                                name="password"
                                type="password"
                                onChange={handleOnChange}
                            />
                            <TextField
                                sx={{ width: "50%", m: 1 }}
                                id="filled-basic"
                                label="ReType Password"
                                variant="standard"
                                name="password1"
                                type="password"
                                onChange={handleOnChange}
                            />
                            <Button
                                sx={{ width: "50%", m: 1, bgcolor: 'secondary.main' }}
                                type="submit"
                                variant="contained"
                            >
                                Register
                            </Button>
                            <br />
                            <NavLink style={{ textDecoration: "none" }} to="/login">
                                <Button variant="text">Already Register? Please Login</Button>
                            </NavLink>
                        </form>
                    )}
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
