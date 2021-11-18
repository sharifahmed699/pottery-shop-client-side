import { Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const HomeDashboard = () => {
    const { user, admin } = useAuth()
    return (
        <div style={{ textAlign: "center" }}>
            <Typography variant="h4">
                Welcome <span style={{ color: "red" }}>{user.displayName.toUpperCase()}</span>
            </Typography>
            <Typography variant="h6" >
                {user.email}
            </Typography>
            {
                !admin ? <Link to="/" style={{ textDecoration: "none" }}><Button sx={{ mt: 3 }} variant="outlined" color="error" size="large">Order Now</Button></Link>
                    :
                    <Link to="/dashboard/addProduct" style={{ textDecoration: "none" }}><Button sx={{ mt: 3 }} variant="outlined" color="error" size="large">Add New Product</Button></Link>
            }
        </div >
    );
};

export default HomeDashboard;