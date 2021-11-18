import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, CardMedia } from '@mui/material';
import { useHistory } from 'react-router';

const ManageOrder = () => {
    const [manageOrder, setManageOrder] = React.useState([])
    console.log(manageOrder)
    const history = useHistory()

    React.useEffect(() => {
        fetch('https://frozen-ocean-83961.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setManageOrder(data))
    }, [manageOrder])
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
                        const remainingOrder = manageOrder.filter(order => order._id !== id);
                        setManageOrder(remainingOrder);
                    }
                })
        }
    }
    const handleUpdate = id => {
        const data = {
            status: "shipped"
        }
        const proceed = window.confirm('Are you sure, you want to update Status?');
        if (proceed) {
            fetch(`https://frozen-ocean-83961.herokuapp.com/order/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(res);
                    if (data.modifiedCount > 0) {
                        alert('Update Successful');
                        // data.target.reset();
                        history.push('/dashboard/manage-order')
                    }
                })
        }
    }
    return (
        <>
            <h2 style={{ textAlign: "center" }}>Manage All Order</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 500 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product Image</TableCell>
                            <TableCell align="left">ProductName</TableCell>
                            <TableCell align="left">Customer Name</TableCell>
                            <TableCell align="left">Customer Email</TableCell>
                            <TableCell align="left">Phone</TableCell>
                            <TableCell align="left">Order Date</TableCell>
                            <TableCell align="left">Order Status</TableCell>
                            <TableCell align="center">Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {manageOrder.map((order) => (
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
                                    {order.name}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {order.email}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {order.phone}
                                </TableCell>
                                <TableCell align="left">{order.orderDate}</TableCell>
                                <TableCell align="left">{order.status}</TableCell>

                                <TableCell align="left"> {
                                    order.status === "shipped" ? <Button variant="outlined" style={{ marginRight: "3px" }} disabled>Update</Button>
                                        :
                                        <Button variant="outlined" style={{ marginRight: "3px" }} onClick={() => handleUpdate(order._id)}>Update</Button>
                                }
                                    <Button variant="outlined" color="error" onClick={() => handleDelete(order._id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default ManageOrder;