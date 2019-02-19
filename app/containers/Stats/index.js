import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import MenuBar from '../Menu/index';
import StatsTool from '../../components/Stats/Stats';
import api from '../../api';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  leftContent: {
    padding: '0px !important',
    backgroundColor: theme.palette.primary.main,
  },
  rightContent: {
    zIndex: 10,
    backgroundColor: theme.palette.primary.contrastText,
    borderLeft: '1px solid #0a0b0d',
    marginTop: 10,
  },
});

const StatsPage = class StatsPage extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    userId: 0
  };

  async getData() {
    const rows = await api.get(`Tournaments/${this.state.userId}/user`);
    this.setState({rows: rows.data});
  }

  render() {
    const { classes, userId } = this.props;
    this.state.userId = userId;

    if (this.state.rows) {
      return (
        <Grid container className={classes.root}>
          <Grid item xs={2} className={classes.leftContent}>
            <MenuBar/>
          </Grid>
          <Grid item xs={10} className={classes.rightContent}>
            <StatsTool rows={this.state.rows}/>
          </Grid>
        </Grid>
      );
    } else {
      this.getData(userId);
      return (<span></span>);
    }
  }
}

StatsPage.propTypes = {
  classes: PropTypes.object.isRequired,
  userId: PropTypes.number.isRequired
};

const mapStateToProps = (state) => {
  return ({
    userId: state.auth.id
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({});
};

const styled = withStyles(styles, { name: 'StatsPage' })(StatsPage);
const connected = connect(mapStateToProps, mapDispatchToProps)(styled);
export default connected;
