import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DashboardBarComp from '../../components/dashboard/DashboardBar';

const DashboardBar = class DashboardBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {rows, rowsPerPage, page} = this.props;

    return(
      <DashboardBarComp
        rows={rows}
        rowsPerPage={rowsPerPage}
        page={page}
      />
    );
  }
}

DashboardBar.propTypes = {
  rows: PropTypes.object.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired
};

DashboardBar.defaultProps = {};

const mapStateToProps = (state) => {
  console.log(state);
  return ({});
};

const mapDispatchToProps = (dispatch) => {
  return({});
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardBar);
