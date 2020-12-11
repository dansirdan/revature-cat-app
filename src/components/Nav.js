import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import ListItemLink from "../components/ListItemLink";
import AuthMenu from "../components/AuthMenu";
import { authContext } from "../contexts/AuthContext";

const NavLinksLoggedIn = () => {
  return (
    <Grid
      container
      direction='row'
      justify='center'
      alignItems='center'
      component='nav'>
      <Grid item>
        <Box display='block'>
          <ListItemLink to='/' primary='Home' />
        </Box>
      </Grid>
      <Grid item>
        <Box display='block'>
          <ListItemLink to='/users' primary='Users' />
        </Box>
      </Grid>
      <Grid item>
        <Box display='block'>
          <ListItemLink to='/cats' primary='Cats' />
        </Box>
      </Grid>
      <Grid item>
        <Box display='block'>
          <AuthMenu />
        </Box>
      </Grid>
    </Grid>
  );
};

const NavLinksNoAuth = () => {
  return (
    <Grid container direction='row' justify='space-between' alignItems='center' component="nav" p={5}>
      <Grid item>
        <Box display='block'>
          <ListItemLink to='/' primary='Home' />
        </Box>
      </Grid>
      <Grid item>
        <Box display='block'>
          <AuthMenu />
        </Box>
      </Grid>
    </Grid>
  );
};

const Nav = () => {
  const { auth } = useContext(authContext);
  return (
    <React.Fragment>
      {auth.data ? <NavLinksLoggedIn /> : <NavLinksNoAuth />}
    </React.Fragment>
  );
};

export default Nav;
