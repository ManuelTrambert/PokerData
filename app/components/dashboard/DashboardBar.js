import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import DashboardArray from './DashboardArray';
import PopOverForm from './PopOverForm';


const styles = theme => ({
  loginBarBox: {
    paddingLeft: '2%',
    paddingRight: '2%'
  },
  addTournamentButton: {
    textAlign: 'right',
  },
  headerTitle: {
    paddingTop: '10px',
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
      <div>
        <div className={classes.loginBarBox}>
          <div>
            <Typography variant="h6" className={classes.headerTitle}>DASHBOARD</Typography>
          </div>
          <div>
            <PopOverForm userId={userId}
            reloadDash={reloadDash}/>
          </div>
          <div>
            <DashboardArray
              classes={classes}
              rows={rows}
            />
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
