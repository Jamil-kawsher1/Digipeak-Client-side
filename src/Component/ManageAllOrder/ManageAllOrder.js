import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const ManageAllOrder = () => {
    const [allorder, setAllorder] = useState([]);

    useEffect(() => {
        fetch('https://digipeak.herokuapp.com/allorders')
            .then(res => res.json())
            .then(data => setAllorder(data))
    }, [allorder])


    const handleCancel = id => {
        const del = window.confirm("Are You Sure you Want to Delete?");
        if (del) {
            const url = `https://digipeak.herokuapp.com/deleteorder/${id}`;
            console.log(url);
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
    const handleconfirm = id => {
        const url = `https://digipeak.herokuapp.com/orderstatus/${id}`
        axios.put(url,)
            .then(response => console.log(response));
    }
    const handledelevred = id => {
        const url = `https://digipeak.herokuapp.com/orderstatusdelevred/${id}`
        axios.put(url,)
            .then(response => console.log(response));
    }


    return (
        <div style={{ paddingBottom: '100px', marginTop: '20px', marginBottom: '100px' }}>
            <h3 className='text-center'>All orders</h3>
            {allorder.length < 1 ? <h3 style={{ marginTop: '20px', textAlign: 'center', paddingBottom: '30vh' }}>We have O order To Manage</h3>
                : <div className=" table-responsive-sm text-center">
                    <table className="table ">
                        <thead>
                            <tr>

                                <th scope="col">Product Name</th>
                                <th scope="col">Customer Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allorder.map(row => <tr key={row._id}>
                                <th scope="row">{row.productname}</th>
                                <td>{row.name}</td>
                                <td>{row.price}</td>
                                <td>{row.orderstatus}</td>
                                <td><Button style={{ marginBottom: "10px", width: '115px' }} onClick={() => handleCancel(row._id)}> <i className="fas fa-trash"></i> Delete</Button> <Button style={{ marginBottom: "10px", width: '115px' }} onClick={() => handleconfirm(row._id)}>  <i className="far fa-check-circle"></i> Confirm</Button> <Button style={{ marginBottom: "10px", width: '115px' }} onClick={() => handledelevred(row._id)}><i className="fas fa-clipboard-check"></i> Delivered</Button> </td>
                            </tr>)}


                        </tbody>
                    </table>
                </div>}

        </div >
    );
};

export default ManageAllOrder;