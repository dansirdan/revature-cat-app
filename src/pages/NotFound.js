import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  img: {
    maxWidth: "100%",
    width: "auto",
    maxHeight: "calc(100vh - 300px)",
  },
  container: {
    marginTop: 20,
    padding: 10,
  },
  paper: {
    padding: 10,
  },
}));

const NotFound = () => {
  const classes = useStyles();

  return (
    <Container maxWidth='md' className={classes.container}>
      <Paper variant='outlined' className={classes.paper}>
        <Grid container direction='column' justify='center' alignItems='center'>
          <Grid item>
            <Typography variant='h2' component='h1' align='center' gutterBottom>
              404 Not Found
            </Typography>
          </Grid>
          <Grid item>
            <img
              className={classes.img}
              src='images/404.jpg'
              alt='404 cat not found'
            />
          </Grid>
          <Grid item>
            <Typography variant='h6' align='center' gutterBottom>
              We're sorry, the content you were looking for was not found.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default NotFound;
