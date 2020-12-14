import React from "react";
import Table from "@material-ui/core/Table";
import Grid from "@material-ui/core/Grid";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { IconButton, Typography } from "@material-ui/core";
import TrashIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Avatar from "@material-ui/core/Avatar";
import Tooltip from "@material-ui/core/Tooltip";

const CatTable = ({ cats, changeManagerMode, setShowModal, setDeleteCat }) => {
  return (
    <React.Fragment>
      {cats.length > 0 ? (
        <Grid container item direction='row' justify='center'>
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>Icon</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Breed</TableCell>
                    <TableCell>Color</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cats.map(cat => (
                    <TableRow key={cat.uid}>
                      <TableCell component='th' scope='row'>
                        <Avatar
                          alt={cat.name}
                          src={`images/cat-icons/${cat.color}.png`}
                        />
                      </TableCell>
                      <TableCell>{cat.name}</TableCell>
                      <TableCell>{cat.breed}</TableCell>
                      <TableCell>{cat.color}</TableCell>
                      <TableCell>
                        <Tooltip title='Edit Cat'>
                          <IconButton
                            onClick={() => changeManagerMode("edit", cat.name)}>
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title='Remove Cat'>
                          <IconButton
                            onClick={() => {
                              setShowModal(true);
                              setDeleteCat(cat.uid);
                            }}>
                            <TrashIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      ) : (
        <Typography variant='subtitle1'>no cats found</Typography>
      )}
    </React.Fragment>
  );
};

export default CatTable;
