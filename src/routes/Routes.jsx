import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Game from '../pages/Game';
import Settings from '../pages/Settings';
import Feedback from '../pages/Feedback';
import Ranking from '../pages/Ranking';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/settings" component={ Settings } />
        <Route exact path="/feedback" component={ Feedback } />
        <Route exact path="/ranking" component={ Ranking } />
        <Route
          exact
          path="/game"
          render={ (props) => (
            <Game
              { ...props }
            />) }
        />
      </Switch>
    );
  }
}

export default Routes;
