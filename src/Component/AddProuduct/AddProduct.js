import React from 'react';
import './Addproduct.css'
const AddProduct = () => {
    return (
        <div style={{ backgroundColor: "#FFEBEE", paddingBottom: '150px', paddingTop: '100px' }}>
            <div class="container mt-5 mb-5 d-flex justify-content-center">
                <div class="card px-1 py-4">
                    <div class="card-body">
                        <h4 class="card-title mb-3 text-center">Add New Product</h4>

                        <div class="row">
                            <div class="col-sm-12">
                                <div class="form-group">
                                    <input class="form-control" type="text" placeholder="Product Name" /> </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="form-group">
                                    <div class="input-group"> <input class="form-control" type="number" placeholder="Price" /> </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="form-group">
                                    <div class="input-group"> <input class="form-control" type="text" placeholder="Product Imge" /> </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="form-group">
                                    <div class="input-group"> <input class="form-control" type="textarea" placeholder="Decription" /> </div>
                                </div>
                            </div>
                        </div>

                        <button class="btn btn-primary w-100 btn-block confirm-button mt-2">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;