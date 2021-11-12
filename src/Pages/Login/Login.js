import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLogin = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} sx={{ mt: 8 }} style={{ textAlign: "center" }}>
                    <Typography variant="h5" gutterBottom component="div">
                        Please Login
                    </Typography>
                    <form onSubmit={handleLogin}>
                        <TextField
                            sx={{ width: "50%", m: 1 }}
                            id="filled-basic"
                            label="Your Email"
                            variant="standard"
                            name="email"
                            type="email"
                            onBlur={handleOnChange}
                        />
                        <TextField
                            sx={{ width: "50%", m: 1 }}
                            id="filled-basic"
                            label="Your Password"
                            variant="standard"
                            name="password"
                            type="password"
                            onBlur={handleOnChange}
                        />
                        <Button
                            sx={{ width: "50%", m: 1, bgcolor: 'secondary.main' }}
                            type="submit"
                            variant="contained"
                        >
                            Login
                        </Button>
                        <br />
                        <NavLink style={{ textDecoration: "none" }} to="/register">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                        {isLoading && <CircularProgress color="success" />}
                        {user?.email && <Alert severity="success">Login successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                </Grid>
            </Grid>
        </Container >
    );
};

export default Login;
