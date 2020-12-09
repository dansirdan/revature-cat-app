import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuItem from "@material-ui/core/MenuItem";
import { authContext } from "../contexts/AuthContext";
import AuthModal from "./AuthModal";

export default function AuthMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [show, setShow] = useState(false);
  const [authType, setAuthType] = useState("");
  const { auth } = useContext(authContext);


  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAuthChoice = (type) => {
      setAnchorEl(null);
      setShow(true);
      setAuthType(type);
  }

  const handleModalClose = () => {
      setShow(false);
  }

  return (
    <div>
      <Button
        aria-controls='auth-menu'
        aria-haspopup='true'
        onClick={handleClick}>
        <ExpandMoreIcon/>
        Account 
      </Button>
      <Menu
        id='auth-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <MenuItem onClick={()=> handleAuthChoice("signup")}>Sign Up</MenuItem>
        {auth.data ? (
          <MenuItem onClick={()=> handleAuthChoice("logout")}>Logout</MenuItem>
        ) : (
          <MenuItem onClick={()=> handleAuthChoice("login")}>Login</MenuItem>
        )}
      </Menu>
      <AuthModal
        showModal={show}
        authType={authType}
        handleModalClose={handleModalClose}
      />
    </div>
  );
}
