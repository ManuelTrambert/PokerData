import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import DashboardBarComp from '../../components/dashboard/DashboardBar';
import api from '../../api';

const DashboardBar = class DashboardBar extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    rows: null
  };

  async getData(userId) {
    const rows = await api.get(`Tournaments/${userId}/user`);
    this.setState({rows: rows.data});
  }

  render() {
    const {userId} = this.props;

    const rowsPerPage = 10;
    const page = 0;
    if (this.state.rows) {
      return (
        <DashboardBarComp
          rows={this.state.rows}
          rowsPerPage={rowsPerPage}
          page={page}
          userId={userId}
        />
      );
    }
    else {
      this.getData(userId);
      return (<span></span>);
    }
  }
};

DashboardBar.propTypes = {
  userId: PropTypes.number.isRequired
};

DashboardBar.defaultProps = {};

const mapStateToProps = (state) => {
  return ({
    userId: state.auth.id
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({});
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardBar);
