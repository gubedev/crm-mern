
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { connect } from 'react-redux';

import { SUCCESS, ERROR, INFO, WARN } from '../../../constants/notificationType'

class ToastNotification extends React.Component {

  componentDidUpdate(prevProps) {
    const { options } = this.props;
    if (prevProps.isOpen !== this.props.isOpen) {
      this.showNotification(options);
    }
  }

  showNotification({ message, variant }) {
    if (variant === SUCCESS) {
      toast.success(message, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
    if (variant === ERROR) {
      toast.error(message, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
    if (variant === INFO) {
      toast.info(message, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
    if (variant === WARN) {
      toast.warn(message, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  render() {
    return (
      <div>
        <ToastContainer autoClose={5000} />
      </div>
    );
  }
}

function mapStateToProps({ alerts }) {
  return {
    isOpen: alerts.toast.open,
    options: alerts.toast.options
  }
}

export default connect(mapStateToProps, null)(ToastNotification);
