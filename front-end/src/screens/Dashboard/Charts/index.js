import React from 'react';

import Emails from './Emails';
import Nasdaq from './Nasdaq';

const Charts = ({ data }) => {
    const { emails, nasdaq } = data;
    
    return (
        <div className="row">
            <Emails chartData={emails} />
            <Nasdaq chartData={nasdaq}/>
        </div>
    )
}

export default Charts;