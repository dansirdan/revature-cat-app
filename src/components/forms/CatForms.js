import React, { useState, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { useHistory } from "react-router-dom";

export const CatCreateForm = () => {
  const [createCatData, setCreateCatData] = useState({
    name: "",
    color: "",
    breed: "",
  });

  const [createCatDataErrors, setCreateCatDataErrors] = useState({
    nameErr: false,
    colorErr: false,
    breedErr: false,
  });

  const handleInputChange = (event) => {
    setCreateCatData({
      ...createCatData,
      [event.target.id]: event.target.value,
    });

    setCreateCatDataErrors({
      ...createCatDataErrors,
      [event.target.id]: false,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    console.log(createCatData);
  };

  return (
    <form
      id="create-cat-form"
      style={{ width: "80%", margin: "auto" }}
      noValidate
      autoComplete="off"
      onSubmit={onFormSubmit}
    >
      <Grid
        direction="row"
        justify="center"
        alignContent="center"
        container
        spacing={2}
      >
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Add a new cat to your collection
          </Typography>
          <Divider />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            margin="dense"
            size="small"
            error={createCatDataErrors.nameErr}
            id="name"
            label="name"
            placeholder=""
            helperText={
              createCatDataErrors.nameErr
                ? "Please enter your cat's name."
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
        <Grid item xs={12} md={4}>
          <TextField
            margin="dense"
            size="small"
            error={createCatDataErrors.colorErr}
            id="color"
            label="Cat Color"
            placeholder=""
            helperText={
              createCatDataErrors.colorErr
                ? "Please enter your cat's coat color."
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
        <Grid item xs={12} md={4}>
          <TextField
            margin="dense"
            size="small"
            error={createCatDataErrors.breedErr}
            id="breed"
            label="Cat Breed"
            placeholder=""
            helperText={
              createCatDataErrors.breedErr
                ? "Please enter your cat's breed."
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
        <Grid container item justify="flex-end" alignItems="flex-end">
          <Button
            type="submit"
            variant="outlined"
            color="default"
            endIcon={<Icon>add</Icon>}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export const CatEditForm = ({ selectedCat }) => {
  const [editFormData, setEditFormData] = useState({
    name: "",
    color: "",
    breed: "",
  });

  const [editFormErrors, setEditFormErrors] = useState({
    nameErr: false,
    colorErr: false,
    breedErr: false,
  });

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

    // IF name is long enough
    // IF name is already taken
    // IF color contains Aa1!
    // IF breed is the same as color
  };

  return (
    <form
      id="edit-cat-form"
      style={{ width: "80%", margin: "auto" }}
      noValidate
      autoComplete="off"
      onSubmit={onFormSubmit}
    >
      <Grid direction="row" container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Edit your cat, {selectedCat.name}
          </Typography>
          <Divider />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            margin="dense"
            size="small"
            error={editFormErrors.nameErr}
            id="name"
            label="Cat Name"
            placeholder={selectedCat.name}
            helperText={
              editFormErrors.nameErr ? "Please enter your cat's name." : " "
            }
            fullWidth
            onChange={handleInputChange}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            margin="dense"
            size="small"
            error={editFormErrors.colorErr}
            id="color"
            label="Cat Color"
            placeholder={selectedCat.color}
            helperText={
              editFormErrors.colorErr
                ? "Please enter your cat's coat color."
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
        <Grid item xs={12} md={4}>
          <TextField
            margin="dense"
            size="small"
            error={editFormErrors.breedErr}
            id="breed"
            label="Cat Breed"
            placeholder={selectedCat.breed}
            helperText={
              editFormErrors.breedErr ? "Please enter your cat's breed." : " "
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
            variant="outlined"
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
