import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const Myorders = () => {
    const [myorders, setMyorders] = useState([]);
    const { user } = useAuth();
    const email = user.email;
    const url = `https://digipeak.herokuapp.com/myorder/${user.email}`;
    // console.log(url);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyorders(data));
    }, [email, myorders])
    const handleCancel = (id) => {
        const del = window.confirm("Are You Sure you Want to Cancel?");
        if (del) {
            const url = `https://digipeak.herokuapp.com/deleteorder/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(async res => {
                    // if (res.status == 200) {
                    //     alert("Cancelled  Successfully");

                    // }
                });
        }

    }
    return (
        <div style={{}}>
            <h3 className='text-center'>All orders</h3>

            {myorders.length < 1 ? <div style={{ marginTop: '20px', textAlign: 'center', paddingBottom: '30vh' }}><h3>You Have No Orders</h3></div>
                : <div className="table-responsive-sm text-center">
                    <table className="table">
                        <thead>
                            <tr>

                                <th scope="col">Product Name</th>

                                <th scope="col">Price</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myorders.map(row => <tr key={row._id}>
                                <th scope="row">{row.productname}</th>
                                <td>{row.price}</td>
                                <td>{row.orderstatus}</td>
                                <td><Button onClick={() => handleCancel(row._id)} variant='outlined'> <i className="fas fa-trash"></i> Cancel</Button></td>
                            </tr>

                            )}


                        </tbody>
                    </table>
                </div>}
        </div >
    );
};

export default Myorders;