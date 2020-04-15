import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { adminRoutes } from './routes';
import Frame from './components/Frame/Index';

function App() {
  return (
    <Frame>
      <Switch>
        {adminRoutes.map(route=>{
          return <Route key={route.path} path={route.path} exact={route.exact} render={routeProps=>{
            return <route.component {...routeProps} />;
          }} />
        })}
        <Redirect to={adminRoutes[0].path} from="/admin"/>
      </Switch>
    </Frame>
  );
}

export default App;
