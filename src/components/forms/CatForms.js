import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export const CatCreateForm = () => {
  const [createCatData, setCreateCatData] = useState({
    name: "",
    color: "",
    breed: "",
  });

  const [nameErr, setNameErr] = useState(false);
  const [colorErr, setColorErr] = useState(false);
  const [breedErr, setBreedErr] = useState(false);

  const handleInputChange = event => {
    setCreateCatData({
      ...createCatData,
      [event.target.id]: event.target.value,
    });

    switch (event.target.id) {
      case "name":
        setNameErr(false);
        break;
      case "color":
        setColorErr(false);
        break;
      case "breed":
        setBreedErr(false);
        break;

      default:
        break;
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();

    if (createCatData.name.length <= 0) {
      setNameErr(true);
    }

    if (createCatData.color === "") {
      setColorErr(true);
    }

    if (createCatData.breed.length <= 0) {
      setBreedErr(true);
    }

    if (
      createCatData.name.length > 0 &&
      createCatData.color !== "" &&
      createCatData.breed.length > 0
    ) {
      
      console.log("All good");
      resetForm();
    }
  };

  const resetForm = () => {
    document.getElementById("create-cat-form").reset();
  };

  return (
    <form
      id='create-cat-form'
      style={{ width: "80%", margin: "auto" }}
      noValidate
      autoComplete='off'
      onSubmit={onFormSubmit}>
      <Grid
        direction='row'
        justify='center'
        alignContent='center'
        container
        spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h5' gutterBottom>
            Add a new cat to your collection
          </Typography>
          <Divider />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            margin='dense'
            size='small'
            error={nameErr}
            id='name'
            label='Cat Name'
            placeholder=''
            helperText={
              nameErr
                ? "Please enter your cat's name."
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
        <Grid item xs={12} md={4}>
          <FormControl
            variant='outlined'
            error={colorErr}
            fullWidth>
            <InputLabel htmlFor='color'>Cat Color</InputLabel>
            <Select
              native
              label='Cat Color'
              value={createCatData.color}
              onChange={handleInputChange}
              inputProps={{
                name: "color-selector",
                id: "color",
              }}>
              <option aria-label='None' value='' />
              <option value={"Black"}>Black</option>
              <option value={"Brown"}>Brown</option>
              <option value={"Calico"}>Calico</option>
              <option value={"Gray"}>Gray</option>
              <option value={"Orange"}>Orange</option>
              <option value={"White"}>White</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            margin='dense'
            size='small'
            error={breedErr}
            id='breed'
            label='Cat Breed'
            placeholder=''
            helperText={
              breedErr
                ? "Please enter your cat's breed."
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
            endIcon={<Icon>add</Icon>}>
            Create
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export const CatEditForm = ({ selectedCat }) => {
  const [editFormData, setEditFormData] = useState({
    name: selectedCat.name,
    color: selectedCat.color,
    breed: selectedCat.breed,
  });

  const [nameErr, setNameErr] = useState(false);
  const [colorErr, setColorErr] = useState(false);
  const [breedErr, setBreedErr] = useState(false);

  const handleInputChange = event => {
    setEditFormData({
      ...editFormData,
      [event.target.id]: event.target.value,
    });

    switch (event.target.id) {
      case "name":
        setNameErr(false);
        break;
      case "color":
        setColorErr(false);
        break;
      case "breed":
        setBreedErr(false);
        break;

      default:
        break;
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();

    if (editFormData.name.length <= 0) {
      setNameErr(true);
    }

    if (editFormData.color === "") {
      setColorErr(true);
    }

    if (editFormData.breed.length <= 0) {
      setBreedErr(true);
    }

    if (
      editFormData.name.length > 0 &&
      editFormData.color !== "" &&
      editFormData.breed.length > 0
    ) {

      console.log("All good");
      resetForm();
    }
  };

  const resetForm = () => {
    document.getElementById("edit-cat-form").reset();
  };

  return (
    <form
      id='edit-cat-form'
      style={{ width: "80%", margin: "auto" }}
      noValidate
      autoComplete='off'
      onSubmit={onFormSubmit}>
      <Grid direction='row' container spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h5' gutterBottom>
            Edit your cat, {selectedCat.name}
          </Typography>
          <Divider />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            margin='dense'
            size='small'
            error={nameErr}
            id='name'
            label='Cat Name'
            value={editFormData.name}
            placeholder={selectedCat.name}
            helperText={
              nameErr ? "Please enter your cat's name." : " "
            }
            fullWidth
            onChange={handleInputChange}
            InputLabelProps={{
              shrink: true,
            }}
            variant='outlined'
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl
            variant='outlined'
            error={colorErr}
            fullWidth>
            <InputLabel htmlFor='color'>Cat Color</InputLabel>
            <Select
              native
              label='Cat Color'
              value={editFormData.color}
              onChange={handleInputChange}
              inputProps={{
                name: "color-selector",
                id: "color",
              }}>
              <option aria-label='None' value='' />
              <option value={"Black"}>Black</option>
              <option value={"Brown"}>Brown</option>
              <option value={"Calico"}>Calico</option>
              <option value={"Gray"}>Gray</option>
              <option value={"Orange"}>Orange</option>
              <option value={"White"}>White</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            margin='dense'
            size='small'
            error={breedErr}
            id='breed'
            label='Cat Breed'
            value={editFormData.breed}
            placeholder={selectedCat.breed}
            helperText={
              breedErr ? "Please enter your cat's breed." : " "
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
            endIcon={<Icon>save</Icon>}>
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
