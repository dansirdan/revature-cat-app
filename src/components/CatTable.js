import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { IconButton, Typography } from "@material-ui/core";
import TrashIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles({
  table: {
    width: "auto",
  },
});
const CatTable = ({ cats, changeManagerMode, setShowModal, setDeleteCat }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      {cats.length > 0 ? (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Breed</TableCell>
                <TableCell align="right">Color</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cats.map((cat) => (
                <TableRow key={cat.name}>
                  <TableCell component="th" scope="row">
                    {cat.name}
                  </TableCell>
                  <TableCell align="right">{cat.breed}</TableCell>
                  <TableCell align="right">{cat.color}</TableCell>
                  <TableCell align="right">
                    <IconButton
                      onClick={() => changeManagerMode("edit", cat.name)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => {
                        setShowModal(true);
                        setDeleteCat(cat.uid);
                      }}
                    >
                      <TrashIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography variant="subtitle1">no cats found</Typography>
      )}
    </React.Fragment>
  );
};

export default CatTable;
