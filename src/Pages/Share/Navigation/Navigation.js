import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
  const { user, logout } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" enableColorOnDark >
        <Toolbar>
          <Container style={{ display: "flex" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" style={{ lineHeight: "2.4" }} sx={{ flexGrow: 1 }}>
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/"
              >
                <Button color="inherit">Craft</Button> </NavLink>
            </Typography>
            <NavLink
              style={{ textDecoration: "none", color: "white", lineHeight: "2.4" }}
              to="/dashboard"
            >
              <Button color="inherit">Dashboard</Button>
            </NavLink>
            {user?.email ? (
              <Box>

                <Button onClick={logout} color="inherit" style={{ lineHeight: "2.4" }}>
                  Logout
                </Button>
              </Box>
            ) : (
              <NavLink
                style={{ textDecoration: "none", color: "white", lineHeight: "2.4" }}
                to="/login"
              >
                <Button color="inherit">Login</Button>
              </NavLink>
            )}

          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;