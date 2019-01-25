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
    const { onSubmit, submitting, authError, version, isCheckingUpdate, isUpdating } = this.props;

    return(
      <LoginBarComp
        onSubmit={onSubmit}
        submitting={submitting}
        authError={authError}
        version={version}
        isCheckingUpdate={isCheckingUpdate}
        isUpdating={isUpdating}
      />
    );
  }
}

LoginBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  authError: PropTypes.bool.isRequired,
  version: PropTypes.string.isRequired,
  isCheckingUpdate: PropTypes.bool.isRequired,
  isUpdating: PropTypes.bool.isRequired,
};

LoginBar.defaultProps = {
  submitting: false,
};

const mapStateToProps = (state) => {
  return ({
    submitting: state.form.loginForm.submitting,
    authError: state.auth.authentication_error,
    version: state.update.version,
    isCheckingUpdate: state.update.isCheckingUpdate,
    isUpdating: state.update.isUpdating,
  });
}

const mapDispatchToProps = (dispatch) => {
  return({
    onSubmit: (cred) => onSubmit(cred)(dispatch),
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginBar);
