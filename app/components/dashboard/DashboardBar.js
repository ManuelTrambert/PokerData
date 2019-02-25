import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import DashboardArray from './DashboardArray';
import PopOverForm from './PopOverForm';
import StatsTool from '../Stats/Stats';

const styles = theme => ({
  line: {
    borderBottom: '1px solid #000000',
    marginBottom: '10px',
    marginTop: '10px'
  },
  loginBarBox: {
    paddingLeft: '2%',
    paddingRight: '2%'
  },
  addTournamentButton: {
    textAlign: 'right',
  },
  headerTitle: {
    margin: 'auto',
    textAlign: 'center'
  },
  links: {
    marginTop: '20%'
  },
  loginForm: {
    marginTop: '10%'
  },
  fadeBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '5%'
  },
  setFixedHeight: {
    marginBottom: '30%'
  }
});

const DashboardBar = class DashboardBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      rows,
      userId,
      reloadDash,
      classes,
    } = this.props;

    return (
      <div className={classes.setFixedHeight}>
        <div className={classes.loginBarBox}>
          <div className={classes.headerTitle}>
            <Typography variant="h6">DASHBOARD</Typography>
          </div>
          <div className={classes.line}>
          </div>
          <div>
            <DashboardArray
              classes={classes}
              rows={rows}
            />
            <StatsTool rows={rows}/>
          </div>
        </div>
      </div>
    );
  }
};

DashboardBar.propTypes = {
  classes: PropTypes.object.isRequired,
  userId: PropTypes.number.isRequired,
  rows: PropTypes.array.isRequired
};

export default withStyles(styles)(DashboardBar);
