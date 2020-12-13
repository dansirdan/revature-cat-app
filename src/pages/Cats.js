import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import CatNav from "../components/CatNav";
import CatTable from "../components/CatTable";
import { CatCreateForm, CatEditForm } from "../components/forms/CatForms";
import DeleteConfirm from "../components/DeleteConfirm";

function Cats() {
  const [searchText, setSearchText] = useState("");
  const [managerMode, setManagerMode] = useState("table");
  const [deleteCat, setDeleteCat] = useState("");
  const [focusCat, setFocusCat] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [catData, setCatData] = useState([
    { name: "Fluffy", breed: "maine coon", color: "grey" },
    { name: "Simon", breed: "tabby", color: "orange" },
    { name: "Freya", breed: "ragdoll", color: "white" },
  ]);

  const [filteredCatData, setFilteredCatData] = useState([
    { name: "Fluffy", breed: "maine coon", color: "grey" },
    { name: "Simon", breed: "tabby", color: "orange" },
    { name: "Freya", breed: "ragdoll", color: "white" },
  ]);

  useEffect(() => {}, []);
  const handleModalClose = () => {
    setShowModal(false);
  };
  const changeManagerMode = (mode, editCat) => {
    if (mode === "table") {
      setFilteredCatData(catData);
      setSearchText("");
    }
    if (mode === "edit") {
      let foundCat;
      for (let i = 0; i < catData.length; i++) {
        const cat = catData[i];
        if (cat.name === editCat) {
          foundCat = cat;
        }
      }
      setFocusCat(foundCat);
    }
    setManagerMode(mode);
  };

  const handleDelete = (catUID) => {
    console.log(catUID);
  };

  const handleChange = (e) => {
    const search = e.target.value.toLowerCase();
    setSearchText(search);
    let filterCat = filteredCatData.filter(
      (cat) =>
        cat.name.toLowerCase().includes(search) ||
        cat.breed.toLowerCase().includes(search) ||
        cat.color.toLowerCase().includes(search)
    );
    setFilteredCatData(filterCat);

    if (search.length === 0) {
      setFilteredCatData(catData);
    }
  };

  const renderView = () => {
    switch (managerMode) {
      case "table":
        return (
          <CatTable
            cats={filteredCatData}
            changeManagerMode={changeManagerMode}
            setShowModal={setShowModal}
            setDeleteCat={setDeleteCat}
          />
        );
      case "add":
        return <CatCreateForm />;
      default:
        return <CatEditForm selectedCat={focusCat} />;
    }
  };

  return (
    <div className="page-body-content">
      <Container
        maxWidth="md"
        style={{
          padding: 20,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          item
        >
          <Grid item>
            <Typography variant="h2" component="h1">
              Cat Manager
            </Typography>
          </Grid>
          <Grid item style={{ width: "100%" }}>
            <CatNav
              handleChange={handleChange}
              changeManagerMode={changeManagerMode}
              searchText={searchText}
            />
          </Grid>
          <Grid item>
            <br />
            {renderView()}
          </Grid>
        </Grid>
        <DeleteConfirm
          showModal={showModal}
          handleModalClose={handleModalClose}
          deleteMode="cat"
          handleDelete={handleDelete}
          deleteWhere={deleteCat}
        />
      </Container>
    </div>
  );
}

export default Cats;
