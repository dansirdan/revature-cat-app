import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Home, Cats, Users } from "./pages/index";
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <PrivateRoute path="/users" component={Users}/>
        <PrivateRoute path="/cats" component={Cats}/>
        <Route path="/" render={()=> <div>404 NOT FOUND :)</div>}/>       
      </Switch>
    </Router>
  );
}

export default App;
