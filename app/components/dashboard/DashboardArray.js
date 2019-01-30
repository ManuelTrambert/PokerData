import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';

const styles = theme => ({
  input: {
    color: theme.palette.primary.textColor + ' !important'
  },
  btnConnect: {
    width: '100%',
    marginTop: '10%'
  },
  inputFocused: {
    '&:after': {
      borderBottomColor: theme.palette.primary.light
    }
  }
});

class DashboardArray extends Component {
  submit = values => {
    this.props.onSubmit(values);
  };

  render() {
    const classes = this.props.classes;
    return (
      <span>Salut!</span>
    );
  }
}

DashboardArray.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styled = withStyles(styles, { name: 'DashboardArray' })(DashboardArray);

export default styled;
