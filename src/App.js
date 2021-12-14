import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const { isLoggedIn, setIsLoggedIn } = useState(true);
  return (
    <div>
    <div className="App-header">
      <h2>Client Auth Project</h2>
          <Link to='/api/login'>Login</Link>
          <Link to='/api/logout'>Logout</Link>
          <Link to='/api/friends'>Friends</Link>
      </div>
      <Switch>
        <PrivateRoute exact path="/api/friends" component={Friends} />
        <PrivateRoute path="/api/logout" component={Logout} />
        <Route path="/api/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
