import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import DashboardBar from './TournamentBar';
import MenuBar from '../Menu/index';
import TopBar from '../../containers/TopBar/index';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  leftContent: {
    padding: '0px !important',
    backgroundColor: '#FFFFFF',
  },
  rightContent: {
    zIndex: 10,
    backgroundColor: theme.palette.primary.contrastText,
    borderLeft: '1px solid #0a0b0d',
  },
  fill: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
  },
  box: {
    display: 'flex',
    flexFlow: 'column',
    height: '100%',
  },
  header: {
    flex: '0 1 auto',
    zIndex: '1',
  },
  content: {
    display: 'flex',
    flexFlow: 'column',
    flex: '1 1 auto',
    overflowY: 'auto',
  },
  footer: {
    flex: '0 1 auto',
  },
});

const DashboardTournamentPage = class DashboardTournamentPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return(
      <Grid container className={classes.root}>
        <TopBar/>
        <Grid item xs={2} className={classes.leftContent}>
          <MenuBar/>
        </Grid>
        <Grid item xs={10} className={classes.rightContent}>
          <DashboardBar />
        </Grid>
      </Grid>
    );
  }
}

DashboardTournamentPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styled = withStyles(styles, { name: 'DashboardTournamentPage' })(DashboardTournamentPage);
const connected = connect()(styled);
export default connected;
