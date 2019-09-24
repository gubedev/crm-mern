import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as layoutActions from '../../../store/actions/layout';

const Navbar = (props) => {

    const showSidebarHandler = () => {
        props.showSidebar();
        props.showOverlay();
    }

    const toogleProfileDropdownHandler = () => {
        props.toogleProfileDropdown();
    }

    return (
        <nav className="navbar navbar-expand bg-dark fixed-top d-flex flex-row justify-content-start">
            <div className="d-none d-lg-block" onClick={() => showSidebarHandler()}>
                <div id="menu-minifier">
                    <i className="fa fa-lg fa-bars"></i>
                </div>
            </div>
            <a className="navbar-brand px-lg-3 px-1 mr-0" href="#">
                <div id="logo">
                    CRM
                </div>
            </a>
            <div className="ml-auto">
                <div className="navbar-nav flex-row navbar-icons">
                    <div id="user-menu" className="nav-item dropdown" onClick={() => toogleProfileDropdownHandler()}>
                        <button className="btn btn-link nav-link dropdown-toggle" title="User"
                            type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-lg fa-user-circle"></i>
                        </button>
                        <div className={props.showProfileDropdown === true ?
                            'dropdown-menu dropdown-menu-right show' :
                            'dropdown-menu dropdown-menu-right'}>
                            <Link to="/profile" className="dropdown-item">Profile</Link>
                            <div className="dropdown-divider"></div>
                            <Link to="/signin" className="dropdown-item">Logout</Link>
                        </div>
                    </div>
                    <div className="nav-item d-lg-none">
                        <button id="sidebar-toggler"
                            type="button"
                            className="btn btn-link nav-link"
                            data-toggle="offcanvas"
                            onClick={() => showSidebarHandler()}>
                            <i className="fa fa-lg fa-bars"></i>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

function mapStateToProps({ layout }) {
    return {
        showProfileDropdown: layout.profileDropdown.isVisible
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        showSidebar: layoutActions.showSidebar,
        showOverlay: layoutActions.showOverlay,
        toogleProfileDropdown: layoutActions.toogleProfileDropdown,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);