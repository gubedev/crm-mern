import React from 'react';

import { connect } from 'react-redux';

const Overlay = (props) => {
    return (
        <div id="overlay" className={props.showOverlay === true ? 'visible' : ''}>
        </div>
    )
}

function mapStateToProps({ layout }) {
    return {
        showOverlay: layout.overlay.isVisible
    }
}

export default connect(mapStateToProps, null)(Overlay);