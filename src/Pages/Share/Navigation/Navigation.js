import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/material';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
  const { user, logout } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" enableColorOnDark >
        <Toolbar sx={{ bgcolor: 'text.primary' }}>
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
                <Button color="inherit">Pottery Shop</Button> </NavLink>
            </Typography>
            {user?.email ? (
              <Box>
                <NavLink
                  style={{ textDecoration: "none", color: "white", lineHeight: "2.4" }}
                  to="/dashboard"
                >
                  <Button color="inherit">Dashboard</Button>
                </NavLink>
                <Button onClick={logout} color="inherit" style={{ lineHeight: "2.4" }}>
                  Logout
                </Button>
              </Box>
            ) : (
              <Box>

                <NavLink
                  style={{ textDecoration: "none", color: "white", lineHeight: "2.4" }}
                  to="/login"
                >
                  <Button color="inherit">Login</Button>
                </NavLink>
              </Box>
            )}

          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;