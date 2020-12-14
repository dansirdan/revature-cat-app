import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import ListItemLink from "../components/ListItemLink";
import AuthMenu from "../components/AuthMenu";
import { authContext } from "../contexts/AuthContext";

const Nav = () => {
  const { auth } = useContext(authContext);
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      component="nav"
      p={5}
    >
      {auth.data ? (
        <Grid item container direction="row" justify="flex-start" xs={8}>
          <Grid item>
            <ListItemLink to="/users" primary="Profile" />
          </Grid>
          <Grid item>
            <ListItemLink to="/cats" primary="My Cats" />
          </Grid>
        </Grid>
      ) : (
        <Grid item>
          <ListItemLink to="/" primary="Home" />
        </Grid>
      )}
      <Grid item>
        <AuthMenu />
      </Grid>
    </Grid>
  );
};

export default Nav;
