import React, { useContext, useEffect, useState } from "react";
import AuthModal from "../components/AuthModal";
import { authContext } from "../contexts/AuthContext";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Divider, Paper } from "@material-ui/core";
import { NavLink } from "react-router-dom";

function Home() {
  const { auth } = useContext(authContext);
  const [show, setShow] = useState(false);

  const handleModalClose = () => {
    setShow(false);
  };

  return (
    <Container
      maxWidth='md'
      style={{
        padding: 20,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
      }}>
      {auth.data ? (
        <Paper style={{ padding: 20 }}>
          <Grid
            container
            direction='column'
            justify='center'
            alignItems='center'>
            <Grid>
              {/* TODO: CAT ICON LIKE GITHUB */}
              CAT ICON HERE
            </Grid>
            <Grid>
              <br />
              <Typography variant='subtitle1' gutterBottom>
                Look what the cat dragged in...welcome back, <b>{auth.data}</b>.
              </Typography>
              <Divider />
              <br />
            </Grid>
            <Grid item>
              <NavLink
                to={`/users/${auth.data}`}
                style={{ textDecoration: "none" }}>
                <Button variant='contained' color='default'>
                  View Profile
                </Button>
              </NavLink>
            </Grid>
          </Grid>
        </Paper>
      ) : (
        <Grid
          container
          direction='column'
          justify='space-between'
          alignItems='center'
          spacing={4}>
          <Grid item>
            <Typography variant='h2' component='h1'>
              Cat Collector
            </Typography>
            <Divider />
            <br />
            <Typography variant='subtitle1' gutterBottom>
              <em>Herding cats can be tough,</em> so we decided to do the work
              for you.
            </Typography>
            <Typography variant='body1' gutterBottom>
              Cat Collector allows any cat enthusiast to easily manage their
              feline companions through our cat-database application. No more
              wasting another one of your nine lives on an application that
              limits the number of cats one can own. No more worrying about the
              privacy of your beloved Mr. Fluffy-tinkle-kins. For the{" "}
              <em>purrrpose</em> of using a pun, we have you covered...in cat
              hair.
            </Typography>
          </Grid>
          <Grid item>
            <Paper style={{ padding: 20 }}>
              <Grid
                container
                direction='column'
                justify='center'
                alignItems='center'>
                <Grid item>
                  <Button
                    variant='contained'
                    color='default'
                    onClick={() => setShow(true)}>
                    Join Today
                  </Button>
                  <Divider />
                </Grid>
                <Grid>
                  <br />
                  <Typography variant='subtitle1' gutterBottom>
                    What are you waiting for, cat got your mouse?
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      )}
      <AuthModal
        showModal={show}
        authType={"signup"}
        handleModalClose={handleModalClose}
      />
    </Container>
  );
}

export default Home;
