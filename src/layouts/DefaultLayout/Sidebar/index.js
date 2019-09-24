import React from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as layoutActions from '../../../store/actions/layout';

const Sidebar = (props) => {

    const hideSidebarHandler = () => {
        props.hideSidebar();
        props.hideOverlay();
    }

    return (
        <div id="sidebar" className={props.showSidebar === true ? 'visible' : ''}>
            <div id="sidebar-wrapper">
                <h4 className="nav-title">Options</h4>
                <a id="sidebar-close-button" onClick={() => hideSidebarHandler()}>
                    <i className="fa fa-times"></i>
                </a>
                <ul className="nav flex-column nav-sidebar pt-5">
                    <li className="nav-item-link">
                        <Link to="/dashboard" className="link-text">Dashboard</Link>
                    </li>
                    <li className="nav-item-link">
                        <h5 className="section-text">CUSTOMERS</h5>
                    </li>
                    <li className="nav-item-link">
                        <a className="link-text">
                            Customers
                        </a>
                    </li>
                    <li className="nav-item-link">
                        <a className="link-text">
                            Contacts
                        </a>
                    </li>
                    <li className="nav-item-link">
                        <h5 className="section-text">WORKS</h5>
                    </li>
                    <li className="nav-item-link">
                        <a className="link-text">
                            Leads
                        </a>
                    </li>
                    <li className="nav-item-link">
                        <a className="link-text">
                            Projects
                        </a>
                    </li>
                    <li className="nav-item-link">
                        <h5 className="section-text">SYSTEM</h5>
                    </li>
                    <li className="nav-item-link">
                        <a className="link-text">
                            Users
                        </a>
                    </li>
                    <li className="nav-item-link">
                        <a className="link-text">
                            Config
                        </a>
                    </li>
                    <li className="nav-item-link">
                        <h5 className="section-text">EXAMPLES</h5>
                    </li>
                    <li className="nav-item-link">
                        <a className="link-text">
                            Email
                        </a>
                    </li>
                    <li className="nav-item-link">
                        <a className="link-text">
                            Todo
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

function mapStateToProps({ layout }) {
    return {
        showSidebar: layout.sidebar.isVisible
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        hideSidebar: layoutActions.hideSidebar,
        hideOverlay: layoutActions.hideOverlay
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);