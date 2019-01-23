// @flow
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styles from './Counter.css';
import { withStyles } from '@material-ui/core/styles';
import routes from '../constants/routes.json';

const Counter = class Counter extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {
      increment,
      incrementIfOdd,
      incrementAsync,
      decrement,
      print_string,
      counter,
    } = this.props;
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to={routes.HOME}>
            <i className="fa fa-arrow-left fa-3x"/>
          </Link>
        </div>
        <div className={`counter ${styles.counter}`} data-tid="counter">
          {counter}
        </div>
        <div className={styles.btnGroup}>
          <button
            className={styles.btn}
            onClick={increment}
            data-tclass="btn"
            type="button"
          >
            <i className="fa fa-plus"/>
          </button>
          <button
            className={styles.btn}
            onClick={decrement}
            data-tclass="btn"
            type="button"
          >
            <i className="fa fa-minus"/>
          </button>
          <button
            className={styles.btn}
            onClick={incrementIfOdd}
            data-tclass="btn"
            type="button"
          >
            odd
          </button>
          <button
            className={styles.btn}
            onClick={() => incrementAsync()}
            data-tclass="btn"
            type="button"
          >
            async
          </button>
          <button
            className={styles.btn}
            onClick={() => print_string('test')}
            data-tclass="btn"
            type="button"
          >
            print
          </button>
        </div>
      </div>
    );
  }
};

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  print_string: PropTypes.func.isRequired,
  print_empty: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
};


export default withStyles(styles)(Counter);
