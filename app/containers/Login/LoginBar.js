import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginBarComp from '../../components/login/LoginBar';
import { login as onSubmit } from '../../actions/auth';

const LoginBar = class LoginBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onSubmit, authError } = this.props;

    return(
      <LoginBarComp
        onSubmit={onSubmit}
        //submitting={submitting}
        authError={authError}
      />
    );
  }
}

LoginBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  //submitting: PropTypes.bool.isRequired,
  authError: PropTypes.bool.isRequired,
};

LoginBar.defaultProps = {
  submitting: false,
};

const mapStateToProps = (state) => {
  console.log(state);
  return ({
    authError: state.auth.authentication_error,
    //submitting: state.form.loginForm.submitting,
  });
}

const mapDispatchToProps = (dispatch) => {
  return({
    onSubmit: (cred) => onSubmit(cred)(dispatch),
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginBar);
