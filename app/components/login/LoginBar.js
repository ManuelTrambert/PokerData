import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';
import LoginForm from './LoginForm';

const styles = theme => ({
  loginBarBox: {
    marginTop: '40%',
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
      submitting,
      authError,
    } = this.props;
    return (
      <div>
        <div className={classes.loginBarBox}>
          <Typography variant="h6">SE CONNECTER</Typography>
          <div className={classes.loginForm}>
            <LoginForm
              onSubmit={onSubmit}
              submiting={submitting}
              authError={authError}
            />
          </div>
          <div className={classes.fadeBox}>
            <Fade
              in={submitting}
              style={{
                transitionDelay: submitting ? '500ms' : '0ms'
              }}
              unmountOnExit
            >
              <CircularProgress color="secondary" />
            </Fade>
          </div>
          <Fade
            in={authError && !submitting}
            style={{
              transitionDelay: authError ? '500ms' : '0ms'
            }}
            unmountOnExit
          >
            <Typography variant="subtitle1" color="error">
              Identifiant ou mot de passe incorrect
            </Typography>
          </Fade>
        </div>
      </div>
    );
  }
};

LoginBar.propTypes = {
  classes: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  authError: PropTypes.bool.isRequired,
};

export default withStyles(styles)(LoginBar);
