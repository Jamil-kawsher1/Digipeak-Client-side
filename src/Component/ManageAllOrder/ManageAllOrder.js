import React from 'react';
import { Button } from 'react-bootstrap';

const ManageAllOrder = () => {
    return (
        <div style={{ paddingBottom: '100px', marginTop: '20px' }}>
            <h3 className='text-center'>All orders</h3>

            <div class="table-responsive table-responsive-sm text-center">
                <table class="table ">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td><Button> <i class="fas fa-trash"></i> Delete</Button> <Button> <i class="far fa-check-circle"></i> Confirm</Button> <Button><i class="fas fa-clipboard-check"></i> Delivered</Button> </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default ManageAllOrder;