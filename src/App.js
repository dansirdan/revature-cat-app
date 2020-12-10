import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Cats, Users, NotFound } from "./pages/index";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { CssBaseline } from "@material-ui/core";
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
      <ThemeProvider theme={theme}>
        <div className='wrapper'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <PrivateRoute path='/users' component={Users} />
            <PrivateRoute path='/cats' component={Cats} />
            <Route path='/' component={NotFound} />
          </Switch>
          <Footer />
        </div>
        </ThemeProvider>
      </Router>
    </React.Fragment>
  );
}

export default App;
