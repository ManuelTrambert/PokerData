import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';
import LoginForm from './LoginForm';

const styles = theme => ({
  loginBarBox: {
    marginTop: '30%',
    paddingLeft: '2%',
    paddingRight: '2%'
  },
  links: {
    marginTop: '20%'
  },
  loginForm: {
    marginTop: '2%'
  },
  fadeBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '5%'
  }
});

const LoginBar = class LoginBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      classes,
      onSubmit,
      //submitting,
      authError,
    } = this.props;
    return (
      <div>
        <div className={classes.loginBarBox}>
          <Typography variant="h6">SE CONNECTER</Typography>
          <div className={classes.loginForm}>
            <LoginForm
              classes={classes}
              onSubmit={onSubmit}
              authError={authError}
            />
          </div>
        </div>
      </div>
    );
  }
};

LoginBar.propTypes = {
  classes: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  authError: PropTypes.bool.isRequired,
};

export default withStyles(styles)(LoginBar);
