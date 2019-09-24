import React from 'react';

import { Line } from "react-chartjs-2";

const Nasdaq = ({ chartData }) => {
    return (
        <div className="col-lg-8 col-md-8 col-sm-12 pb-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">NASDAQ: AAPL</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Line Chart With Points</h6>
                    <Line
                        data={chartData.data}
                        options={chartData.options}
                        width={400}
                        height={100}
                    />
                </div>
                <div className="card-footer text-muted">
                    <div className="chart-legend">
                        <i className="fa fa-circle text-info" /> Tesla Model S{" "}
                        <i className="fa fa-circle text-warning" /> BMW 5 Series
                    </div>
                    <hr />
                    <div className="card-stats">
                        <i className="fa fa-check" /> Data information certified
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nasdaq;