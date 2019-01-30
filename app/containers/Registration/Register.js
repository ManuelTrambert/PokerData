import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterBarComp from '../../components/register/RegisterBar';
import { register as onSubmit } from '../../actions/auth';

const RegisterBar = class RegisterBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onSubmit, submitting } = this.props;

    return(
      <RegisterBarComp
        onSubmit={onSubmit}
        submitting={submitting}
      />
    );
  }
}

RegisterBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

RegisterBar.defaultProps = {
  submitting: false,
};

const mapStateToProps = (state) => {
  return ({
  });
}

const mapDispatchToProps = (dispatch) => {
  return({
    onSubmit: (cred) => onSubmit(cred)(dispatch),
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterBar);
