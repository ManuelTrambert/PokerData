import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';
import RegisterForm from './RegisterForm';
import Fab from "@material-ui/core/es/Fab/Fab";
import ArrowBack from '@material-ui/icons/ArrowBack';

const styles = theme => ({
  registerBarBox: {
    marginTop: '10%',
    paddingLeft: '2%',
    paddingRight: '2%'
  },
  links: {
    marginTop: '20%'
  },
  registerForm: {
    marginTop: '10%'
  },
  fadeBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '5%'
  }
});

const RegisterBar = class RegisterBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      classes,
      onSubmit,
      submitting,
      previousState
    } = this.props;
    return (
      <div>
        <Fab color="primary" aria-label="Add" className={classes.fab} onClick={previousState}>
          <ArrowBack />
        </Fab>
        <div className={classes.registerBarBox}>
          <Typography variant="h6">S'INSCRIRE</Typography>
          <div className={classes.registerForm}>
            <RegisterForm
              onSubmit={onSubmit}
              submiting={submitting}
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
        </div>
      </div>
    );
  }
};

RegisterBar.propTypes = {
  classes: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  previousState: PropTypes.func.isRequired
};

export default withStyles(styles)(RegisterBar);
