import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as alertsActions from '../../store/actions/alerts';
import * as dashboardActions from '../../store/actions/dashboard';

import system from '../../config/system';
import { SUCCESS } from '../../constants/notificationType';

import Kpi from './Kpi';
import Charts from './Charts';
import Purchases from './Purchases';

const Dashboard = (props) => {
  props.showToast({
    message: `Welcome to ${system.appName}`,
    variant: SUCCESS
  });

  return (
    <div>
      <div id="wrapper-breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Dashboard</a>
          </li>
        </ol>
      </div>
      <div className="container-fluid">
        {!props.isLoading ?
          <div>
            <Kpi data={props.kpidData} />
            <Charts data={props.chartsData} />
            <Purchases data={props.purchasesData} />
          </div> :
          <div>
            <h5>Loading.....</h5>
          </div>
        }
      </div>
    </div>
  );
};

function mapStateToProps({ dashboard }) {
  return {
    isLoading: dashboard.general.isLoading,
    kpidData: dashboard.general.data.kpi,
    chartsData: dashboard.general.data.charts,
    purchasesData: dashboard.general.data.purchases
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    showToast: alertsActions.showToast,
    getDashboardData: dashboardActions.getData
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
