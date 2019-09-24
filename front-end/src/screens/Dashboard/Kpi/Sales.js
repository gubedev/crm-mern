import React from 'react';

const Sales = ({ sales }) => {
    return (
        <div className="col-md-6 col-lg-3 mb-4">
            <div className="card">
                <div className="card-body">
                    <div className="card-innerBody d-flex align-items-center">
                        <div className="card-icon text-warning">
                            <i className="fas fa-file-invoice-dollar icon-big" aria-hidden="true"></i>
                        </div>
                        <div className="ml-auto">
                            <p className="card-label text-right text-muted">Sales</p>
                            <h4 className="card-text text-right ">$ {sales.quantity}</h4>
                        </div>
                    </div>
                </div>
                <div className="card-footer d-flex ">
                    <small className="text-muted">Since last month</small>
                    <small className="text-success ml-auto">
                        <i className="fa fa-caret-up" aria-hidden="true"></i>
                        {sales.result}%
                    </small>
                </div>
            </div>
        </div>
    )
}

export default Sales;