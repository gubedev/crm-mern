import React from 'react';
import ToastNotification from '../../components/Alerts/ToastNotification';

const SignInLayout = ({ children }) => (
  <div>
    <ToastNotification />
    {children}
  </div>
);

export default SignInLayout;  