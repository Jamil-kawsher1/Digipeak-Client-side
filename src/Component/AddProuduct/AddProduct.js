import React from 'react';
import './Addproduct.css'
const AddProduct = () => {
    return (
        <div style={{ backgroundColor: "#FFEBEE", paddingBottom: '150px', paddingTop: '100px' }}>
            <div className="container mt-5 mb-5 d-flex justify-content-center">
                <div className="card px-1 py-4">
                    <div className="card-body">
                        <h4 className="card-title mb-3 text-center">Add New Product</h4>

                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <input className="form-control" type="text" placeholder="Product Name" /> </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <div className="input-group"> <input className="form-control" type="number" placeholder="Price" /> </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <div className="input-group"> <input className="form-control" type="text" placeholder="Product Imge" /> </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <div className="input-group"> <input className="form-control" type="textarea" placeholder="Decription" /> </div>
                                </div>
                            </div>
                        </div>

                        <button className="btn btn-primary w-100 btn-block confirm-button mt-2">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;