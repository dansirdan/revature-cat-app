import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Users, NotFound } from "./pages/index";
import Cats from "./pages/Cats";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { CssBaseline } from "@material-ui/core";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import { LoginForm, SignUpForm } from "./components/forms/UserForms";
import AccountSettings from "./pages/AccountSettings";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <ThemeProvider theme={theme}>
          <div className="wrapper">
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <PrivateRoute path="/users" component={Users} />
              <PrivateRoute path="/cats" component={Cats} />
              <Route exact path="/login" component={LoginForm} />
              <Route exact path="/signup" component={SignUpForm} />
              <Route exact path="/settings" component={AccountSettings} />
              <Route path="/" component={NotFound} />
            </Switch>
            <Footer />
          </div>
        </ThemeProvider>
      </Router>
    </React.Fragment>
  );
}

export default App;
