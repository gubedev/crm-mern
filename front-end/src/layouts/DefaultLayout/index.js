import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Overlay from './Overlay';

import ToastNotification from '../../components/Alerts/ToastNotification';

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <div id="preloader">
      </div>
      <Overlay />
      <Navbar />
      <Sidebar />
      <ToastNotification />
      <div className="page-wrapper">
        <div id="main">
          {children}
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout;
