import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
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
});

const AssistantHBHPage = class AssistantHBHPage extends Component {
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
        </Grid>
      </Grid>
    );
  }
}

AssistantHBHPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styled = withStyles(styles, { name: 'AssistantHBHPage' })(AssistantHBHPage);
const connected = connect()(styled);
export default connected;
