import React from 'react';
import { Button } from 'react-bootstrap';

const Myorders = () => {
    return (
        <div style={{ paddingBottom: '100px', marginTop: '20px' }}>
            <h3 className='text-center'>All orders</h3>

            <div class="table-responsive table-responsive-sm text-center">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product Name</th>

                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td><Button variant='outlined'> <i class="fas fa-trash"></i> Cancel</Button></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default Myorders;