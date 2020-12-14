import React, { useContext, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { EditForm } from "../components/forms/UserForms";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import DeleteConfirm from "../components/DeleteConfirm";
import Icon from "@material-ui/core/Icon";
import { authContext } from "../contexts/AuthContext";
import { Button } from "@material-ui/core";
import API from "../utils/API";
import { useHistory } from "react-router-dom";

const AccountSettings = () => {
  const { auth, setAuthData } = useContext(authContext);
  const history = useHistory();

  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const handleDelete = userName => {
    console.log(userName);
    API.deleteOwner(userName)
      .then(res => {
        setAuthData(null);
        history.replace("/");
      })
      .catch(err => console.log(err));
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className='page-body-content'>
      <Grid
        direction='row'
        container
        justify='center'
        alignContent='center'
        >
        <Grid item xs={12}>
          <Typography variant='h4' component='h1'>
            What would you like to do?
          </Typography>
          <Divider />
          <br />
        </Grid>
        <Grid
          container
          item
          justify='flex-start'
          alignItems='center'
          spacing={2}>
          <Grid item>
            <Button
              onClick={() => setEditMode(true)}
              variant='outlined'
              color='default'
              endIcon={<Icon>edit</Icon>}>
              Change Password
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => setShowModal(true)}
              variant='outlined'
              color='default'
              endIcon={<Icon>close</Icon>}>
              Delete Account
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          {editMode ? <EditForm /> : ""}
        </Grid>
        <DeleteConfirm
          showModal={showModal}
          handleModalClose={handleModalClose}
          deleteMode='account'
          handleDelete={handleDelete}
          deleteWhere={auth.data}
        />
      </Grid>
    </div>
  );
};

export default AccountSettings;
