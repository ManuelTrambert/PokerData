// @flow
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.css';

type
Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>PokerData</h2>
        <div>
          <Link to={routes.LOGIN}>to Login</Link>
        </div>
        <div>
          <Link to={routes.REGISTER}>Create a new account</Link>
        </div>
      </div>
    );
  }
}
