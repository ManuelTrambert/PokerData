import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CounterPageComp from '../components/Counter';
import {incrementIfOdd, incrementAsync, increment, decrement} from '../actions/counter';
import {print_string, print_empty} from '../actions/print';


const CounterPage = class CounterPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {increment, incrementAsync, incrementIfOdd, decrement, print_string, print_empty, counter, message} = this.props;

    return (
      <CounterPageComp
         increment={increment}
         incrementAsync={incrementAsync}
         incrementIfOdd={incrementIfOdd}
         decrement={decrement}
         print_string={print_string}
         print_empty={print_empty}
         counter={counter}
         message={message}
      />

    );
  }

  //return bindActionCreators(CounterActions, dispatch);
};

CounterPage.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  print_string: PropTypes.func.isRequired,
  print_empty: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
};

CounterPage.defaultProps = {
  counter: 0,
  message: ''
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    message: state.print
  };
};


const mapDispatchToProps = (dispatch) => {
  return ({
    increment: () => increment()(dispatch),
    decrement: () => (decrement())(dispatch),
    incrementIfOdd: () => (incrementIfOdd())(dispatch),
    incrementAsync: () => (incrementAsync())(dispatch),
    print_string: (message) => (print_string(message))(dispatch),
    print_empty: () => (print_empty())(dispatch),
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterPage);
