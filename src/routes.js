import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from './services/auth';

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Main from './pages/Main';
import Transcription from './pages/Transcription';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <PrivateRoute path="/main" component={Main} />
      <PrivateRoute path="/transcription" component={Transcription} />
      <Route path="*" component={() => <h1>Página não encontrada</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
