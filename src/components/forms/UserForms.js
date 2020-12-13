import React, { useState, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { authContext } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

export const LogoutForm = () => {
  const history = useHistory();

  const { setAuthData } = useContext(authContext);

  const onFormSubmit = (e) => {
    e.preventDefault();
    setAuthData(null);
    history.replace("/");
  };
  return (
    <form
      id="login-form"
      style={{ width: "80%" }}
      noValidate
      autoComplete="off"
      onSubmit={onFormSubmit}
    >
      <Grid
        direction="row"
        container
        justify="center"
        alignContent="center"
        spacing={2}
      >
        <Grid item xs={12}>
          <Typography variant="h4" component="h1">
            Are you sure you want to logout?
          </Typography>
          <br />
          <Divider />
        </Grid>
        <Grid container item justify="flex-end" alignItems="center">
          <Button
            type="submit"
            variant="contained"
            color="default"
            endIcon={<Icon>send</Icon>}
          >
            Logout
          </Button>
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
  const [loginFormErrors, setLoginFormErrors] = useState({
    usernameErr: false,
    passwordErr: false,
  });

  let usernameErrMessage = "Please enter a username.";
  let passwordErrMessage = "Please enter a password.";

  const handleInputChange = (event) => {
    setLoginFormData({
      ...loginFormData,
      [event.target.id]: event.target.value,
    });
    setLoginFormErrors({
      ...loginFormErrors,
      [event.target.id]: false,
    });
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    // TODO: handle login Auth
    console.log(loginFormData);
    setAuthData(loginFormData.username);
    history.replace(`/users/${loginFormData.username}`);
  };

  return (
    <form
      id="login-form"
      style={{ width: "80%" }}
      noValidate
      autoComplete="off"
      onSubmit={onFormSubmit}
    >
      <Grid
        direction="row"
        container
        justify="center"
        alignContent="center"
        spacing={2}
      >
        <Grid item xs={12}>
          <Typography variant="h2" component="h3">
            Login
          </Typography>
          <br />
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <TextField
            margin="dense"
            size="small"
            error={loginFormErrors.usernameErr}
            id="username"
            label="Username"
            placeholder="crazycatguy77"
            helperText={loginFormErrors.usernameErr ? usernameErrMessage : " "}
            fullWidth
            onChange={handleInputChange}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            margin="dense"
            size="small"
            error={loginFormErrors.passwordErr}
            id="password"
            label="Password"
            placeholder="Super!secret12"
            helperText={loginFormErrors.passwordErr ? passwordErrMessage : " "}
            fullWidth
            onChange={handleInputChange}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </Grid>
        <Grid container item justify="flex-end" alignItems="flex-end">
          <Button
            type="submit"
            variant="contained"
            color="default"
            endIcon={<Icon>send</Icon>}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </form>
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

  const [signUpFormErrors, setSignUpFormErrors] = useState({
    usernameErr: false,
    passwordErr: false,
    passCheckErr: false,
  });

  let usernameErrMessage = "Username must be at least 8 characters long.";

  const handleInputChange = (event) => {
    setSignUpFormData({
      ...signUpFormData,
      [event.target.id]: event.target.value,
    });

    setSignUpFormErrors({
      ...signUpFormErrors,
      [event.target.id]: false,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    // IF username is long enough
    // IF username is already taken
    // IF password contains Aa1!
    // IF passcheck is the same as password

    setAuthData(signUpFormData.username);
    history.replace("/users");
  };

  return (
    <form
      id="signup-form"
      style={{ width: "80%" }}
      noValidate
      autoComplete="off"
      onSubmit={onFormSubmit}
    >
      <Grid direction="row" container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2" component="h3">
            Create an account
          </Typography>
          <br />
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <TextField
            margin="dense"
            size="small"
            error={signUpFormErrors.usernameErr}
            id="username"
            label="Username"
            placeholder="crazycatguy77"
            helperText={signUpFormErrors.usernameErr ? usernameErrMessage : " "}
            fullWidth
            onChange={handleInputChange}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            margin="dense"
            size="small"
            error={signUpFormErrors.passwordErr}
            id="password"
            label="Password"
            placeholder="Super!secret12"
            helperText={
              signUpFormErrors.passwordErr
                ? "Password must be at least 8 characters long, and contain lowercase, uppercase, speacial, and numeric characters."
                : " "
            }
            fullWidth
            onChange={handleInputChange}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            margin="dense"
            size="small"
            error={signUpFormErrors.passCheckErr}
            id="passCheck"
            label="Confirm Password"
            placeholder="Super!secret12"
            helperText={
              signUpFormErrors.passCheckErr ? "Passwords do not match." : " "
            }
            fullWidth
            onChange={handleInputChange}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </Grid>
        <Grid container item justify="flex-end" alignItems="flex-end">
          <Button
            type="submit"
            variant="contained"
            color="default"
            endIcon={<Icon>send</Icon>}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
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

  const [editFormErrors, setEditFormErrors] = useState({
    usernameErr: false,
    passwordErr: false,
    passCheckErr: false,
  });

  let usernameErrMessage = "Username must be at least 8 characters long.";

  const handleInputChange = (event) => {
    setEditFormData({
      ...editFormData,
      [event.target.id]: event.target.value,
    });

    setEditFormErrors({
      ...editFormErrors,
      [event.target.id]: false,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    // IF username is long enough
    // IF username is already taken
    // IF password contains Aa1!
    // IF passcheck is the same as password

    setAuthData(editFormData.username);
    history.replace("/users");
  };

  return (
    <form
      id="signup-form"
      style={{ width: "80%" }}
      noValidate
      autoComplete="off"
      onSubmit={onFormSubmit}
    >
      <Grid direction="row" container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2" component="h3">
            Edit your account
          </Typography>
          <br />
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <TextField
            margin="dense"
            size="small"
            error={editFormErrors.usernameErr}
            id="username"
            label="Username"
            placeholder={auth.data}
            helperText={editFormErrors.usernameErr ? usernameErrMessage : " "}
            fullWidth
            onChange={handleInputChange}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            margin="dense"
            size="small"
            error={editFormErrors.passwordErr}
            id="password"
            label="Password"
            placeholder=""
            helperText={
              editFormErrors.passwordErr
                ? "Password must be at least 8 characters long, and contain lowercase, uppercase, speacial, and numeric characters."
                : " "
            }
            fullWidth
            onChange={handleInputChange}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            margin="dense"
            size="small"
            error={editFormErrors.passCheckErr}
            id="passCheck"
            label="Confirm Password"
            placeholder=""
            helperText={
              editFormErrors.passCheckErr ? "Passwords do not match." : " "
            }
            fullWidth
            onChange={handleInputChange}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </Grid>
        <Grid container item justify="flex-end" alignItems="flex-end">
          <Button
            type="submit"
            variant="contained"
            color="default"
            endIcon={<Icon>send</Icon>}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
