import React, { useState, useEffect, useContext } from "react";
import { authContext } from "../contexts/AuthContext";
import API from "../utils/API";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ProfileAction from "../components/ProfileAction";
import { Divider, Paper } from "@material-ui/core";

function Users() {
  const { auth } = useContext(authContext);

  return (
    <div className='page-body-content'>
      <Container maxWidth='lg'>
        <Grid
          container
          direction='row'
          justify='space-between'
          alignItems='center'>
          <Grid
            container
            direction='column'
            justify='center'
            alignItems='center'
            sm={8}
            xs={12}
            item>
            <Grid item>
              <Typography variant='subtitle1' gutterBottom>
                Look what the cat dragged in...
              </Typography>
              <Divider />
            </Grid>
            <Grid item>
              <Typography variant='h2' component='h3' gutterBottom>
                Welcome back, <b>{auth.data}</b>
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            direction='column'
            justify='center'
            alignItems='flex-start'
            sm={4}
            xs={12}
            item>
            <Grid item>
              <Typography variant='h6' component='h4' gutterBottom>
                What would you like to do?
              </Typography>
              <Divider />
            </Grid>
            <Grid item>
              <ProfileAction />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Users;
