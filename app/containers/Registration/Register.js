import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterBarComp from '../../components/register/RegisterBar';
import { register as onSubmit } from '../../actions/auth';
import { goTo } from '../../actions/changePage';

const RegisterBar = class RegisterBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onSubmit, submitting, previousState } = this.props;

    return(
      <RegisterBarComp
        onSubmit={onSubmit}
        submitting={submitting}
        previousState={previousState}
      />
    );
  }
}

RegisterBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  previousState: PropTypes.func.isRequired
};

RegisterBar.defaultProps = {
  submitting: false,
};

const mapStateToProps = (state) => {
  return ({
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    onSubmit: (cred) => onSubmit(cred)(dispatch),
    previousState: () => goTo('/login')(dispatch)
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterBar);
