import React, { useContext, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { EditForm } from "../components/forms/UserForms";
import DeleteConfirm from "../components/DeleteConfirm";
import { authContext } from "../contexts/AuthContext";
import { Button } from "@material-ui/core";

const AccountSettings = () => {
  const { auth } = useContext(authContext);

  const [showModal, setShowModal] = useState(false);
  const [deleteUser, setSeleteUser] = useState("");

  const handleDelete = (userName) => {
    console.log(userName);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      What would you like to do?
      <EditForm />
      <Button onClick={() => setShowModal(true)}>DELETE ACCOUNT</Button>
      <DeleteConfirm
        showModal={showModal}
        handleModalClose={handleModalClose}
        deleteMode="account"
        handleDelete={handleDelete}
        deleteWhere={auth.data}
      />
    </div>
  );
};

export default AccountSettings;
