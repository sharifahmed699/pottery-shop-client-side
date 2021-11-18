import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, CardMedia } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';

const MyOrder = () => {
    const { user } = useAuth()
    const [myOrder, setMyOrder] = React.useState([])
    const obj = {
        email: user?.email
    }
    const keys = Object.values(obj);

    React.useEffect(() => {
        fetch('https://frozen-ocean-83961.herokuapp.com/order/userId', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(keys)
        })
            .then(res => res.json())
            .then(data => setMyOrder(data))
    }, [])
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            fetch(`https://frozen-ocean-83961.herokuapp.com/order/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(res => {
                    // console.log(res);
                    if (res.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingOrder = myOrder.filter(order => order._id !== id);
                        setMyOrder(remainingOrder);
                    }
                })
        }
    }
    return (
        <>
            <h2 style={{ textAlign: "center" }}>All My Order</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 500 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product Image</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Phone</TableCell>
                            <TableCell align="left">Order Date</TableCell>
                            <TableCell align="left">Order Status</TableCell>
                            <TableCell align="left">Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {myOrder.map((order) => (
                            <TableRow
                                key={order._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="right"><CardMedia
                                    component="img"
                                    style={{ width: '100px', margin: '0 auto' }}
                                    image={order.image}

                                /></TableCell>
                                <TableCell component="th" scope="row">
                                    {order.productName}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {order.phone}
                                </TableCell>
                                <TableCell align="left">{order.orderDate}</TableCell>
                                <TableCell align="left">{order.status}</TableCell>

                                <TableCell align="left"> <Button variant="contained" size="medium" onClick={() => handleDelete(order._id)}>
                                    Delete
                                </Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>

    );
};

export default MyOrder;