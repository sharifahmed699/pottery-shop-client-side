import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import HomeDashboard from './HomeDashboard/HomeDashboard';
import AddProduct from './AddProduct/AddProduct';
import useAuth from '../../Hooks/useAuth';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import Pay from './Pay/Pay';
import MyOrder from './MyOrder/MyOrder';
import Myreview from './Myreview/Myreview';
import ManageProduct from './ManageProduct/ManageProduct';
import ManageOrder from './ManageOrder/ManageOrder';

const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin, logout } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link to='/' style={{ textDecoration: "none", margin: "40px", color: "tomato", paddingTop: "10px" }}><Button style={{ fontSize: "18px" }} color="inherit">Visit Website</Button></Link><br />

            <Link to={`${url}`} style={{ textDecoration: "none", margin: "40px", color: "gray" }}><Button style={{ fontSize: "16px" }} color="inherit">Dashboard</Button></Link>

            {!admin ? <Box >
                <Link to={`${url}/myorder`} style={{ textDecoration: "none", margin: "50px", color: "gray" }}><Button style={{ fontSize: "16px" }} color="inherit">My Order</Button></Link><br />

                <Link to={`${url}/pay`} style={{ textDecoration: "none", margin: "50px", color: "gray" }}><Button style={{ fontSize: "16px" }} color="inherit">Pay Now</Button></Link><br />
                <Link to={`${url}/my-review`} style={{ textDecoration: "none", margin: "50px", color: "gray" }}><Button color="inherit" style={{ fontSize: "16px" }}>My Review</Button></Link>
            </Box>
                :
                <Box>
                    <Link to={`${url}/addProduct`} style={{ textDecoration: "none", margin: "40px", color: "gray" }}><Button color="inherit" style={{ fontSize: "16px" }}>Add Product</Button></Link>

                    <Link to={`${url}/manage-product`} style={{ textDecoration: "none", margin: "40px", color: "gray" }}><Button color="inherit" style={{ fontSize: "16px" }}>Manage Product</Button></Link>

                    <Link to={`${url}/manage-order`} style={{ textDecoration: "none", margin: "40px", color: "gray" }}><Button color="inherit" style={{ fontSize: "16px" }}>Manage Order</Button></Link>

                    <Link to={`${url}/makeAdmin`} style={{ textDecoration: "none", margin: "40px", color: "gray" }}><Button color="inherit" style={{ fontSize: "16px" }}>Make Admin</Button></Link>

                </Box>}
            <Divider />
            <Divider />
            <Divider />
            <Button color="inherit" onClick={logout} style={{ textAlign: "center", paddingLeft: "60px", fontSize: "18px", marginTop: "20px" }}>Logout</Button>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar sx={{ bgcolor: 'warning.main' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />

                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        <HomeDashboard></HomeDashboard>
                    </Route>
                    <Route path={`${path}/myorder`}>
                        <MyOrder></MyOrder>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/my-review`}>
                        <Myreview></Myreview>
                    </Route>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manage-product`}>
                        <ManageProduct></ManageProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manage-order`}>
                        <ManageOrder></ManageOrder>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>

                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;