import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';
import AddFriends from './components/AddFriends';

function App() {
  return (
    <div>
    <div className="App-header">
      <h2>Client Auth Project</h2>
          <Link to='/login'>Login</Link>
          <Link to='/logout'>Logout</Link>
          <Link to='/friends'>Friends</Link>
          <Link to='/friends/add'>Add Friends</Link>
      </div>
      <Switch>
        <PrivateRoute path="/friends/add" component={AddFriends} />
        <PrivateRoute path="/friends" component={Friends} />
        <Route path="/logout" component={Logout} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Login} />

      </Switch>
    </div>
  );
}

export default App;
