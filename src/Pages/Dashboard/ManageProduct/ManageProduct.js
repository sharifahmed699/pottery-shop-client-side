import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, CardMedia, Container } from '@mui/material';


const ManageProduct = () => {
    const [products, setProducts] = React.useState([])
    React.useEffect(() => {
        fetch('https://frozen-ocean-83961.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            fetch(`https://frozen-ocean-83961.herokuapp.com/products/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(res => {
                    // console.log(res);
                    if (res.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingBook = products.filter(product => product._id !== id);
                        setProducts(remainingBook);
                    }
                })
        }
    }
    return (


        <>
            <h2 style={{ textAlign: "center" }}>Manage All Product</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 500 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product Image</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow
                                key={product._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="right"><CardMedia
                                    component="img"
                                    style={{ width: '100px', margin: '0 auto' }}
                                    image={product.image}

                                /></TableCell>
                                <TableCell component="th" scope="row">
                                    {product.productName}
                                </TableCell>
                                <TableCell align="right">{product.description}</TableCell>

                                <TableCell align="right"> <Button variant="contained" size="medium" onClick={() => handleDelete(product._id)}>
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

export default ManageProduct;