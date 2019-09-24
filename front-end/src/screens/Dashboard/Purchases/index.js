import React from 'react';

const Purchases = ({ data }) => {
    return (
        <div className="row">
            <div className="col-12 col-xl-8 mb-4 align-items-stretch">
                <div className="card h-100">
                    <div className="card-title mb-1 p-3 d-flex">
                        <h6>Purchases</h6>
                        <a className="btn ml-auto p-0 text-lightning">
                            <i className="fas fa-ellipsis-h"></i>
                        </a>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive-md">
                            <div className="table-responsive">
                                <table className="table ">
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th className="number">Price</th>
                                            <th>Date</th>
                                            <th>State</th>
                                        </tr>
                                    </thead>
                                    <tbody className="no-border-x">
                                        {data.map(row => {
                                            return (
                                                <tr key={row.product}>
                                                    <td>{row.product}</td>
                                                    <td className="number">${row.price}</td>
                                                    <td>{row.date}</td>
                                                    <td className="text-success">{row.state}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Purchases;