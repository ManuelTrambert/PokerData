import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DashboardBarComp from '../../components/dashboard/DashboardBar';

const DashboardBar = class DashboardBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {} = this.props;

    return(
      <DashboardBarComp
      />
    );
  }
}

DashboardBar.propTypes = {
};

DashboardBar.defaultProps = {};

const mapStateToProps = (state) => {
  return ({});
};

const mapDispatchToProps = (dispatch) => {
  return({});
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardBar);
