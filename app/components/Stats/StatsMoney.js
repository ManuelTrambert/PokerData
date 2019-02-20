import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {LineChart, Line, CartesianGrid, XAxis, YAxis} from 'recharts';

const styles = theme => ({
  spaceBetween: {
    marginTop: '20px'
  }
});


const StatsMoneyTool = class StatsMoneyTool extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      rows,
      classes,
    } = this.props;

    return (
      <div>
        <div className={classes.spaceBetween}>
          <LineChart width={1300} height={300} data={rows}>
            <Line type="monotone" dataKey="gain" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="date" />
            <YAxis />
          </LineChart>
        </div>
      </div>
    )
  }
};

StatsMoneyTool.propTypes = {
  classes: PropTypes.object.isRequired,
  rows: PropTypes.array.isRequired,
};

export default withStyles(styles)(StatsMoneyTool);
