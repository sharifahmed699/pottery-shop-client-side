import { Button, TextField, Alert, Container, Grid, Card } from '@mui/material';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useHistory } from 'react-router';


//create a admin user
const MakeAdmin = () => {
    const [email, setEmail] = React.useState('');
    const [success, setSuccess] = React.useState(false);
    const history = useHistory()

    const [user, SetUser] = React.useState([]);
    React.useEffect(() => {
        fetch('https://frozen-ocean-83961.herokuapp.com/users')
            .then(res => res.json())
            .then(data => SetUser(data))
    }, [])

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://frozen-ocean-83961.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setEmail('')
                    setSuccess(true);
                    history.push('/dashboard/makeAdmin')
                }
                else {
                    alert("Already Admin !!")
                    setEmail('')
                    setSuccess(false);
                    history.push('/dashboard/makeAdmin')
                }
            })

        e.preventDefault()
    }
    return (
        <Container>
            <Grid container>
                <Grid item xs={12} md={6} sx={{ mt: 3 }} style={{ textAlign: "center" }}>
                    <Card variant="outlined" sx={{ width: "75%", m: "0 auto", boxShadow: 3, p: 3 }}>
                        <form onSubmit={handleAdminSubmit}>
                            <TextField
                                sx={{ width: '90%', fontSize: "14px" }}
                                label="Email"
                                type="email"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <Button type="submit" sx={{ p: 1.2, mt: 1, fontSize: "16px", bgcolor: 'warning.main' }} variant="contained">Make Admin</Button>
                        </form>
                        {success && <Alert severity="success">Made Admin successfully!</Alert>}
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} sx={{ mt: 3 }} style={{ textAlign: "center" }}>
                    <Card variant="outlined" sx={{ width: "90%", m: "0 auto", boxShadow: 3, p: 3 }}>
                        <h2 style={{ textAlign: "center" }}>All User</h2>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 500 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Email</TableCell>
                                        <TableCell align="left">Status</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {user.map((use) => (
                                        <TableRow
                                            key={use._id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >

                                            <TableCell component="th" scope="row">
                                                {use.email}
                                            </TableCell>


                                            <TableCell align="left"> {
                                                use.role === "admin" ? <Button variant="outlined" style={{ marginRight: "3px" }} >Admin</Button>
                                                    :
                                                    <Button variant="outlined" style={{ marginRight: "3px" }} >Customer</Button>
                                            }

                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default MakeAdmin;