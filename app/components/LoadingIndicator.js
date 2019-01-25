import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
});

const LoadingIndicator = class LoadingIndicator extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
}

LoadingIndicator.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(LoadingIndicator);
