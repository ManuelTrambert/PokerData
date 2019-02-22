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
    rows: null,
    userId: 0
  };

  async getData() {
    const rows = await api.get(`Tournaments/${this.state.userId}/user`);
    this.setState({rows: rows.data});
  }

  render() {
    const {userId} = this.props;

    this.state.userId = userId;
    if (this.state.rows) {
      return (
        <DashboardBarComp
          rows={this.state.rows}
          reloadDash={this.getData.bind(this)}
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
  console.log(state);
  return ({
    userId: state.friends.id
  });f
};

const mapDispatchToProps = (dispatch) => {
  return ({});
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardBar);
