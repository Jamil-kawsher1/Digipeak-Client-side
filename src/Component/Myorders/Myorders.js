import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import './MyOrder.css';
const Myorders = () => {
    const [myorders, setMyorders] = useState([]);
    const { user } = useAuth();
    const [fordisplay, setFordisplay] = useState([]);
    const email = user.email;
    const url = `https://digipeak.herokuapp.com/myorder/${user.email}`;
    // console.log(url);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyorders(data);
                setFordisplay(data);
            });
    }, [email, myorders])
    const handleCancel = (id) => {
        const del = window.confirm("Are You Sure you Want to Cancel?");
        if (del) {
            const url = `https://digipeak.herokuapp.com/deleteorder/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(async res => {
                    if (res.status == 200) {
                        alert("Cancelled  Successfully");

                    }
                });
        }

    }
    //geting ordered Product name and slipt them to display as single element
    let editableProductName = fordisplay;
   
    let productNameAfterSplit = editableProductName.map(d => d.OrderedProductName).toString().split(',')
    // let orderedProductList = productNameAfterSplice.map(d => <p>{d}</p>)
    // for (let i = 0; i < productNameAfterSplice.length - 1; i++) {
    //     finalproductname.push(productNameAfterSplice[i]);
    // }

    //geting Quantity from server and preporcessing them to display in user end
    // let editableQuantity = fordisplay;
    // let finalquantity = [];
    // let productQuantityAfterSplit = editableQuantity.map(d => d.orderedQuanitity).toString().split(' ');

    // for (let i = 0; i < productQuantityAfterSplit.length - 1; i++) {
    //     finalquantity.push(productQuantityAfterSplit[i]);
    // }

    // console.log(finalproductname);

    return (
        <div className='main-box' style={{}}>
            <h3 className='text-center'>All orders</h3>

            {myorders.length < 1 ? <div style={{ marginTop: '20px', textAlign: 'center', paddingBottom: '30vh' }}><h3>You Have No Orders</h3></div>
                : <div style={{ paddingBottom: '20px' }} className="table-responsive-sm text-center">
                    <table className="table">
                        <thead>
                            <tr>

                                <th scope="col">Product Name</th>


                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myorders.map(row => <tr key={row._id}>
                                <th scope="row">{productNameAfterSplit}</th>
                                {/* <td>{finalquantity.map(d => <li>{d}</li>)}</td> */}
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