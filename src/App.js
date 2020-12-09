import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Cats, Users } from "./pages/index";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { CssBaseline } from "@material-ui/core";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <div className='wrapper'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <PrivateRoute path='/users' component={Users} />
            <PrivateRoute path='/cats' component={Cats} />
            <Route path='/' render={() => <div>404 NOT FOUND :)</div>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
