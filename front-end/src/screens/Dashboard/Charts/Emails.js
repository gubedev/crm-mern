import React from 'react';

import { Pie } from "react-chartjs-2";

const Emails = ({ chartData }) => {
    return (
        <div className="col-lg-4 col-md-4 col-sm-12 pb-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Email Statistics</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Last Campaign Performance</h6>
                    <Pie
                        data={chartData.data}
                        options={chartData.options} />

                </div>
                <div className="card-footer text-muted">
                    <div className="legend">
                        <i className="fa fa-circle text-primary" /> Opened{" "}
                        <i className="fa fa-circle text-warning" /> Read{" "}
                        <i className="fa fa-circle text-danger" /> Deleted{" "}
                        <i className="fa fa-circle text-gray" /> Unopened
                    </div>
                    <hr />
                    <div className="stats">
                        <i className="fa fa-calendar" /> Number of emails sent
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Emails;