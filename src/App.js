import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from "react-router-dom"
import Login from './components/login';
import Dashboard from './components/dashboard';
import Logout from './components/logout';
function App() {
  return (
    <Switch>
      <Route exact path= "/" component={Login} />
      <Route path= "/dashboard" component={Dashboard} />
      <Route path= "/logout" component={Logout} />
    </Switch>
  );
}

export default App;
