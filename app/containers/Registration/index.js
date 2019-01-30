import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import RegisterBar from './Register';

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
    marginTop: 100,
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

const RegisterPage = class RegisterPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return(
      <Grid container className={classes.root}>
        <Grid item xs={4}>
        </Grid>
        <Grid item xs={4} className={classes.rightContent}>
          <RegisterBar />
        </Grid>
      </Grid>
    );
  }
}

RegisterPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styled = withStyles(styles, { name: 'RegisterPage' })(RegisterPage);
const connected = connect()(styled);
export default connected;
