import React, { useState, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { authContext } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";

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

  const [usernameErrMessage, setUsernameErrMessage] = useState(
    "Please enter a username"
  );
  const [passwordErrMessage, setPasswordErrMessage] = useState(
    "Please enter a password."
  );

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
    
    if (loginFormData.username.length < 8) {
      setUsernameErr(true);
      setUsernameErrMessage("Username must be at least 8 characters long.")
    }

    if (loginFormData.password.length < 8) {
      setPasswordErr(true);
      setPasswordErrMessage("Password must be at least 8 characters long.")
    }

    if (
      loginFormData.username.length >= 8 &&
      loginFormData.password.length >= 8
    ) {
      API.getOwnerByUsername(loginFormData.username)
        .then(owner => {
          if (owner.password === loginFormData.password){
            setAuthData(owner.username);
            history.replace("/users");
          } else {
            setPasswordErr(true);
            setPasswordErrMessage("Password is incorrect.")
          }
        })
        .catch(err => console.log(err));
    }

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

    if (signUpFormData.username.length < 8) {
      setPasswordErr(false);
    }

    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(
        signUpFormData.password
      )
    ) {
      setPasswordErr(true);
    }

    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(
      signUpFormData.password
    ) && signUpFormData.username.length >= 8) {
      API.createOwner({

      }).then(response => {
        console.log(response);

        setAuthData(signUpFormData.username);
        history.replace("/users");
      }).catch(err => console.log(err))
    }

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
                helperText={passCheckErr ? "Passwords do not match." : " "}
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

    if (editFormData.username.length < 8) {
      setPasswordErr(false);
    }

    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(
        editFormData.password
      )
    ) {
      setPasswordErr(true);
    }

    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(
      editFormData.password
    ) && editFormData.username.length >= 8) {
      API.updateOwnerByUsername(editFormData.username, {

      }).then(response => {
        console.log(response);

        setAuthData(editFormData.username);
        history.replace("/users");
      }).catch(err => console.log(err))
    }
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
                placeholder=''
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
                id='password'
                label='Password'
                value={editFormData.password}
                placeholder=''
                helperText={
                  passwordErr
                    ? "Password must be at least 8 characters long, and contain lowercase, uppercase, special, and numeric characters."
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
                helperText={passCheckErr ? "Passwords do not match." : " "}
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
