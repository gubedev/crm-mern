import React from 'react';

import Sales from './Sales';
import Orders from './Orders';
import Visitors from './Visitors';
import Followers from './Followers';

const Kpi = ({ data }) => {
    const { sales, orders, visitors, followers } = data;

    return (
        <div className="row">
            <Sales sales={sales} />
            <Orders orders={orders} />
            <Visitors visitors={visitors} />
            <Followers followers={followers} />
        </div>
    )
}

export default (Kpi);