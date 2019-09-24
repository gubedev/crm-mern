import React from 'react';

const Followers = ({ followers }) => {
    return (
        <div className="col-md-6 col-lg-3 mb-4">
            <div className="card">
                <div className="card-body">
                    <div className="card-innerBody d-flex align-items-center">
                        <div className="card-icon text-default">
                            <i className="fa fa-users icon-big" aria-hidden="true"></i>
                        </div>
                        <div className="ml-auto">
                            <p className="card-label text-right text-muted">Followers</p>
                            <h4 className="card-text text-right ">{followers.quantity}</h4>
                        </div>
                    </div>
                </div>
                <div className="card-footer d-flex ">
                    <small className="text-muted">Since last month</small>
                    <small className="text-danger ml-auto">
                        <i className="fa fa-caret-down" aria-hidden="true"></i>
                        {followers.result}%
                        </small>
                </div>
            </div>
        </div>
    )
}

export default Followers;