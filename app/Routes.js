/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import LoginForm from './containers/Login/Loadable';
import RegisterForm from './containers/Registration/Loadable';
import DashboardFriendPage from './containers/DashboardFriend/Loadable';
import TournamentsUserPage from './containers/TournamentsUser/Loadable';
import DashboardPage from './containers/Dashboard/Loadable';
import AssistantHBHPage from './containers/AssistantHandByHand/Loadable';
import AssistantTournamentPage from './containers/AssistantTournament/Loadable';
import StatsPage from './containers/Stats/Loadable';

export default () => (
  <App>
    <Switch>
      <Route path={routes.LOGIN} component={LoginForm} />
      <Route path={routes.REGISTER} component={RegisterForm} />
      <Route path={routes.DASHBOARD} component={DashboardPage} />
      <Route path={routes.DASHBOARDFRIEND} component={DashboardFriendPage} />
      <Route path={routes.TOURNAMENTSUSER} component={TournamentsUserPage} />
      <Route path={routes.STATS} component={StatsPage} />
      <Route path={routes.ASSISTANTHBH} component={AssistantHBHPage} />
      <Route path={routes.ASSISTANTTOURNAMENT} component={AssistantTournamentPage} />
      <Route path={routes.HOME} component={HomePage} />
    </Switch>
  </App>
);
