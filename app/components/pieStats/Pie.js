import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {Pie} from 'react-chartjs-2';

const styles = theme => ({
  spaceBetween: {
    marginTop: '20px'
  }
});


const PieTool = class PieTool extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      rows,
      classes,
    } = this.props;

    console.log(rows);
    return (
      <div>
        <div className={classes.spaceBetween}>
          <Pie data={rows} width={300}
               height={300}
               options={{
                 maintainAspectRatio: false,
                 legend: {
                   position: 'left',
                   labels: {
                     fontSize: 18
                   }
                 }
               }}
          />
        </div>
      </div>
    )
  }
};

PieTool.propTypes = {
  classes: PropTypes.object.isRequired,
  rows: PropTypes.array.isRequired,
};

export default withStyles(styles)(PieTool);
