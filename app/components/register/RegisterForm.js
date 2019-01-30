import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import validate from '../../helpers/validateLogin';
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
  },
  disabledButton: {
    // backgroundColor: `${theme.palette.primary.main} !important`,
    color: `${theme.palette.primary.textColor} !important`
  }
});

const renderTextField = ({
                           input,
                           label,
                           type,
                           custom,
                           classes
                         }) => {
  return (
    <TextField
      label={label}
      type={type}
      margin="dense"
      fullWidth
      required
      {...input}
      {...custom}
      InputLabelProps={{
        classes: {
          root: classes.input
        }
      }}
      InputProps={{
        classes: {
          root: classes.input,
          underline: classes.inputFocused
        }
      }}
      style={{
        color: 'white'
      }}
    />
  );
};

const renderButton = ({
                        input,
                        label,
                        variant,
                        className,
                        type,
                        color,
                        disabled,
                        custom,
                        classes
                      }) => (
  <Button
    variant={variant}
    className={className}
    type={type}
    color={color}
    disabled={disabled}
    classes={{
      disabled: classes.disabledButton
    }}
    {...input}
    {...custom}
  >
    {label}
  </Button>
);

const renderCheckbox = ({ input, label, classes }) => (
  <FormGroup row>
    <FormControlLabel
      control={<Checkbox onChange={input.onChange} />}
      label={label}
    />
  </FormGroup>
);

class RegisterForm extends Component {
  submit = values => {
    this.props.onSubmit(values);
  };

  render() {
    const classes = this.props.classes;
    return (
      <form onSubmit={this.props.handleSubmit(this.submit)}>
        <div>
          <Field
            name="identifier"
            {...{ classes: classes }}
            component={renderTextField}
            label="Identifiant"
          />
        </div>
        <div>
          <Field
            {...{ classes: classes }}
            name="password"
            props={{ className: classes.input }}
            component={renderTextField}
            label="Mot de passe"
            type="password"
          />
        </div>
        <div>
          <Field
            name="email"
            {...{ classes: classes }}
            component={renderTextField}
            label="email"
            type="email"
          />
        </div>
        <div>
          <Field
            name="firstname"
            {...{ classes: classes }}
            component={renderTextField}
            label="FirstName"
          />
        </div>
        <div>
          <Field
            name="lastname"
            {...{ classes: classes }}
            component={renderTextField}
            label="LastName"
          />
        </div>
        <Field
          {...{ classes: classes }}
          name="submit"
          component={renderButton}
          label="S'inscrire"
          variant="contained"
          color="primary"
          type="submit"
          className={classes.btnConnect}
        />
      </form>
    );
  }
}

RegisterForm.propTypes = {
  classes: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

const styled = withStyles(styles, { name: 'RegisterForm' })(RegisterForm);
const withForm = reduxForm({
  form: 'registerForm',
  validate
})(styled);

export default withForm;
