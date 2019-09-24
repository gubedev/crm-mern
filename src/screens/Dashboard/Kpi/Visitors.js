import React from 'react';

const Visitors = ({ visitors }) => {
    return (
        <div className="col-md-6 col-lg-3 mb-4">
            <div className="card">
                <div className="card-body">
                    <div className="card-innerBody d-flex align-items-center">
                        <div className="card-icon text-default">
                            <i className="fa fa-heartbeat icon-big" aria-hidden="true"></i>
                        </div>
                        <div className="ml-auto">
                            <p className="card-label text-right text-muted">Visitors</p>
                            <h4 className="card-text text-right "> {visitors.quantity}</h4>
                        </div>
                    </div>
                </div>
                <div className="card-footer d-flex ">
                    <small className="text-muted">Since last month</small>
                    <small className="text-success ml-auto">
                        <i className="fa fa-caret-up" aria-hidden="true"></i>
                        {visitors.result}%
                </small>
                </div>
            </div>
        </div>
    )
}

export default Visitors;