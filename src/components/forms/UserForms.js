import React, { useState, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { authContext } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

export const LogoutForm = ({ handleModalClose }) => {
  const history = useHistory();

  const { setAuthData } = useContext(authContext);

  const onFormSubmit = e => {
    e.preventDefault();
    setAuthData(null);
    handleModalClose();
    history.replace("/");
  };

  return (
    <form
      id='login-form'
      style={{ width: "80%" }}
      noValidate
      autoComplete='off'
      onSubmit={onFormSubmit}>
      <Grid
        direction='row'
        container
        justify='center'
        alignContent='center'
        spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h4' component='h1'>
            Are you sure you want to logout?
          </Typography>
          <br />
          <Divider />
        </Grid>
        <Grid container item justify='flex-end' alignItems='center' spacing={2}>
          <Grid item>
            <Button
              type='submit'
              variant='outlined'
              color='default'
              endIcon={<Icon>check</Icon>}>
              Logout
            </Button>
          </Grid>

          <Grid item>
            <Button
              onClick={handleModalClose}
              variant='outlined'
              color='default'
              endIcon={<Icon>close</Icon>}>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export const LoginForm = () => {
  const history = useHistory();

  const { setAuthData } = useContext(authContext);

  const [loginFormData, setLoginFormData] = useState({
    username: "",
    password: "",
  });

  const [usernameErr, setUsernameErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  let usernameErrMessage = "Please enter a username.";
  let passwordErrMessage = "Please enter a password.";

  const handleInputChange = event => {
    setLoginFormData({
      ...loginFormData,
      [event.target.id]: event.target.value,
    });

    if (event.target.id === "username") {
      setUsernameErr(false);
    } else if (event.target.id === "password") {
      setPasswordErr(false);
    }
  };
  const onFormSubmit = e => {
    e.preventDefault();

    if (loginFormData.password.length < 8) {
      setPasswordErr(true);
    }

    if (loginFormData.username.length < 8) {
      setPasswordErr(false);
    }
    setAuthData(loginFormData.username);
    history.replace(`/users/${loginFormData.username}`);
  };

  return (
    <Grid container direction='row' justify='center' alignItems='center' item>
      <Grid item>
        <form
          id='login-form'
          style={{ width: "80%", margin: "auto", marginTop: 30 }}
          noValidate
          autoComplete='off'
          onSubmit={onFormSubmit}>
          <Grid
            direction='row'
            container
            justify='center'
            alignContent='center'
            spacing={2}>
            <Grid item xs={12}>
              <Typography variant='h2' component='h3'>
                Login
              </Typography>
              <br />
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin='dense'
                size='small'
                error={usernameErr}
                id='username'
                label='Username'
                value={loginFormData.username}
                placeholder='crazycatguy77'
                helperText={usernameErr ? usernameErrMessage : " "}
                fullWidth
                onChange={handleInputChange}
                InputLabelProps={{
                  shrink: true,
                }}
                variant='outlined'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin='dense'
                size='small'
                error={passwordErr}
                type='password'
                id='password'
                label='Password'
                value={loginFormData.password}
                placeholder=''
                helperText={passwordErr ? passwordErrMessage : " "}
                fullWidth
                onChange={handleInputChange}
                InputLabelProps={{
                  shrink: true,
                }}
                variant='outlined'
              />
            </Grid>
            <Grid container item justify='flex-end' alignItems='flex-end'>
              <Button
                type='submit'
                variant='outlined'
                color='default'
                endIcon={<Icon>send</Icon>}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export const SignUpForm = () => {
  const history = useHistory();

  const { setAuthData } = useContext(authContext);

  const [signUpFormData, setSignUpFormData] = useState({
    username: "",
    password: "",
    passCheck: "",
  });

  const [usernameErr, setUsernameErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [passCheckErr, setPassCheckErr] = useState(false);

  let usernameErrMessage = "Username must be at least 8 characters long.";

  const handleInputChange = event => {
    setSignUpFormData({
      ...signUpFormData,
      [event.target.id]: event.target.value,
    });

    switch (event.target.id) {
      case "username":
        setUsernameErr(false);
        break;
      case "password":
        setPasswordErr(false);
        break;
      case "passCheck":
        setPassCheckErr(false);
        break;
    
      default:
        break;
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();

    // IF username is long enough
    // IF username is already taken
    // IF password contains Aa1!
    // IF passcheck is the same as password

    setAuthData(signUpFormData.username);
    history.replace("/users");
  };

  return (
    <Grid container direction='row' justify='center' alignItems='center' item>
      <Grid item>
        <form
          id='login-form'
          style={{ width: "80%", margin: "auto", marginTop: 30 }}
          noValidate
          autoComplete='off'
          onSubmit={onFormSubmit}>
          <Grid direction='row' container spacing={2}>
            <Grid item xs={12}>
              <Typography variant='h2' component='h3'>
                Create an account
              </Typography>
              <br />
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin='dense'
                size='small'
                error={usernameErr}
                id='username'
                label='Username'
                value={signUpFormData.username}
                placeholder='crazycatguy77'
                helperText={
                  usernameErr ? usernameErrMessage : " "
                }
                fullWidth
                onChange={handleInputChange}
                InputLabelProps={{
                  shrink: true,
                }}
                variant='outlined'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin='dense'
                size='small'
                error={passwordErr}
                id='password'
                label='Password'
                value={signUpFormData.password}
                placeholder='Super!secret12'
                helperText={
                  passwordErr
                    ? "Password must be at least 8 characters long, and contain lowercase, uppercase, speacial, and numeric characters."
                    : " "
                }
                fullWidth
                onChange={handleInputChange}
                InputLabelProps={{
                  shrink: true,
                }}
                variant='outlined'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin='dense'
                size='small'
                error={passCheckErr}
                id='passCheck'
                label='Confirm Password'
                value={signUpFormData.passCheck}
                placeholder='Super!secret12'
                helperText={
                  passCheckErr
                    ? "Passwords do not match."
                    : " "
                }
                fullWidth
                onChange={handleInputChange}
                InputLabelProps={{
                  shrink: true,
                }}
                variant='outlined'
              />
            </Grid>
            <Grid container item justify='flex-end' alignItems='flex-end'>
              <Button
                type='submit'
                variant='outlined'
                color='default'
                endIcon={<Icon>send</Icon>}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export const EditForm = () => {
  const { auth } = useContext(authContext);
  const history = useHistory();

  const { setAuthData } = useContext(authContext);

  const [editFormData, setEditFormData] = useState({
    username: "",
    password: "",
    passCheck: "",
  });

  const [usernameErr, setUsernameErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [passCheckErr, setPassCheckErr] = useState(false);

  let usernameErrMessage = "Username must be at least 8 characters long.";

  const handleInputChange = event => {
    setEditFormData({
      ...editFormData,
      [event.target.id]: event.target.value,
    });

    switch (event.target.id) {
      case "username":
        setUsernameErr(false);
        break;
      case "password":
        setPasswordErr(false);
        break;
      case "passCheck":
        setPassCheckErr(false);
        break;
    
      default:
        break;
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();

    // IF username is long enough
    // IF username is already taken
    // IF password contains Aa1!
    // IF passcheck is the same as password

    setAuthData(editFormData.username);
    history.replace("/users");
  };

  return (
    <Grid container direction='row' justify='center' alignItems='center' item>
      <Grid item>
        <form
          id='login-form'
          style={{ width: "80%", margin: "auto", marginTop: 30 }}
          noValidate
          autoComplete='off'
          onSubmit={onFormSubmit}>
          <Grid direction='row' container spacing={2}>
            <Grid item xs={12}>
              <Typography variant='h2' component='h3'>
                Edit your account
              </Typography>
              <br />
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin='dense'
                size='small'
                error={usernameErr}
                id='username'
                label='Username'
                value={editFormData.passCheck}
                placeholder=""
                helperText={
                  usernameErr ? usernameErrMessage : " "
                }
                fullWidth
                onChange={handleInputChange}
                InputLabelProps={{
                  shrink: true,
                }}
                variant='outlined'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin='dense'
                size='small'
                error={passwordErr}
                id='password'
                label='Password'
                value={editFormData.password}

                placeholder=''
                helperText={
                  passwordErr
                    ? "Password must be at least 8 characters long, and contain lowercase, uppercase, speacial, and numeric characters."
                    : " "
                }
                fullWidth
                onChange={handleInputChange}
                InputLabelProps={{
                  shrink: true,
                }}
                variant='outlined'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin='dense'
                size='small'
                error={passCheckErr}
                id='passCheck'
                label='Confirm Password'
                value={editFormData.passCheck}
                placeholder=''
                helperText={
                  passCheckErr ? "Passwords do not match." : " "
                }
                fullWidth
                onChange={handleInputChange}
                InputLabelProps={{
                  shrink: true,
                }}
                variant='outlined'
              />
            </Grid>
            <Grid container item justify='flex-end' alignItems='flex-end'>
              <Button
                type='submit'
                variant='outlined'
                color='default'
                endIcon={<Icon>send</Icon>}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};
