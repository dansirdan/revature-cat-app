import React, { useContext } from "react";
import { authContext } from "../contexts/AuthContext";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

function Users() {
  const { auth } = useContext(authContext);

  return (
    <div className="page-body-content">
      <Container maxWidth="lg">
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            item
          >
            <Grid item>
              <Typography variant="subtitle1" gutterBottom>
                Look what the cat dragged in...
              </Typography>
              <Divider />
            </Grid>
            <Grid item>
              <Typography variant="h2" component="h3" gutterBottom>
                Welcome back, <b>{auth.data}</b>
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            item
          >
            <Grid item>
              <NavLink to={"/cats"} style={{ textDecoration: "none" }}>
                <Button variant="outlined" color="default">
                  Access Cats
                </Button>
              </NavLink>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Users;
