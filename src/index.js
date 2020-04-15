import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import App from "./App";
import { mainRoutes } from './routes';
import 'antd/dist/antd.css';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/admin" render={routeProps => <App {...routeProps} />}/>
      {
        mainRoutes.map(route => {
          return <Route key={route.path} path={route.path} {...route} />;
        })
      }
      <Redirect to="/admin" from="/"/>
      <Redirect to="/404"/>
    </Switch>
  </Router>
  ,
  document.getElementById('root')
);
