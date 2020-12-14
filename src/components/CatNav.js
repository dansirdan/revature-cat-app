import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Button, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Refresh from "@material-ui/icons/Refresh";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  mobileText: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

const CatNav = ({ handleChange, changeManagerMode, searchText }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction='row'
      justify='space-between'
      alignItems='center'
      component='nav'
      p={5}>
      <Grid item xs={7}>
        <TextField
          type='search'
          variant='outlined'
          margin='normal'
          label='Find a Cat'
          value={searchText}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item container direction='row' justify='flex-end' xs={5}>
        <Grid item>
          <Tooltip title='Refresh'>
            <IconButton onClick={() => changeManagerMode("table")}>
              <Refresh />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title='New Cat'>
            <Button
              variant='outlined'
              className={classes.button}
              size='small'
              onClick={() => changeManagerMode("add")}>
              Add
            </Button>
          </Tooltip>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CatNav;
