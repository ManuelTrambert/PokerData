import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import DashboardArray from './DashboardArray';


const styles = theme => ({
  loginBarBox: {
    paddingLeft: '2%',
    paddingRight: '2%'
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
      classes,
      rowsPerPage,
      page,
    } = this.props;

    return (
      <div>
        <div className={classes.loginBarBox}>
          <Typography variant="h6">DASHBOARD</Typography>
          <div>
            <DashboardArray
              classes={classes}
              rows={rows}
              rowsPerPage={rowsPerPage}
              page={page}
            />
          </div>
        </div>
      </div>
    );
  }
};

DashboardBar.propTypes = {
  classes: PropTypes.object.isRequired,
  rows: PropTypes.array.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired
};

export default withStyles(styles)(DashboardBar);
