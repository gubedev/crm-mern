import React from 'react';

const Orders = ({ orders }) => {
    return (
        <div className="col-md-6 col-lg-3 mb-4">
            <div className="card">
                <div className="card-body">
                    <div className="card-innerBody d-flex align-items-center">
                        <div className="card-icon text-success">
                            <i className="fa fa-shopping-cart icon-big" aria-hidden="true"></i>
                        </div>
                        <div className="ml-auto">
                            <p className="card-label text-right text-muted">Orders</p>
                            <h4 className="card-text text-right ">{orders.quantity}</h4>
                        </div>
                    </div>
                </div>
                <div className="card-footer d-flex ">
                    <small className="text-muted">Since last month</small>
                    <small className="text-success ml-auto">
                        <i className="fa fa-caret-up" aria-hidden="true"></i>
                        {orders.result}%
                        </small>
                </div>
            </div>
        </div>
    )
}

export default Orders;