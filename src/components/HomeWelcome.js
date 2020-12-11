import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const HomeWelcome = () => {
  return (
    <Container maxWidth="lg">

    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'>
          <Grid item>
            <Typography variant="h2" component="h1">
                Cat Collector
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Herding cats can be tough, so we decided to do the work for you.
            </Typography>
            <Typography variant="body1" gutterBottom>
            Cat Collector allows any cat enthusiast to easily manage their feline companions.
            </Typography>
          </Grid>
      </Grid>
      </Container>
  );
};

export default HomeWelcome;
