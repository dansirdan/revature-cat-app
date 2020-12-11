import React, { useContext, useState }  from "react";
import AuthModal from "../components/AuthModal";
import { authContext } from "../contexts/AuthContext";
import Button from "@material-ui/core/Button";

function Home() {
  const { auth } = useContext(authContext);
  const [show, setShow] = useState(false);

  const handleModalClose = () => {
    setShow(false);
  };
  return (
    <>
      {auth.data ? (
        <h1>Welcome Back {auth.data}</h1>
      ) : (
        <Button
          variant='contained'
          color='default'
          onClick={() => setShow(true)}>
          Sign Up
        </Button>
      )}
      <AuthModal
        showModal={show}
        authType={"signup"}
        handleModalClose={handleModalClose}
      />
    </>
  );
}

export default Home;
