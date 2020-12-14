import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MenuItem from "@material-ui/core/MenuItem";
import { authContext } from "../contexts/AuthContext";
import LogoutModal from "./LogoutModal";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { Link } from "react-router-dom";
import {
  ExitToApp,
  VpnKey,
  PermIdentity,
  Settings,
  Close,
} from "@material-ui/icons";

export default function AuthMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [show, setShow] = useState(false);
  const [authType, setAuthType] = useState("");
  const { auth } = useContext(authContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAuthChoice = (type) => {
    setAnchorEl(null);
    setShow(true);
    setAuthType(type);
  };

  const handleModalClose = () => {
    setShow(false);
  };

  return (
    <div>
      <Button
        aria-controls="auth-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <ExpandMoreIcon />
        Account
      </Button>
      {auth.data ? (
        <Menu
          id="auth-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem
            component={Link}
            to="/settings"
            onClick={() => handleClose()}
          >
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={() => handleAuthChoice("logout")}>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            Logout
          </MenuItem>
          <MenuItem onClick={() => handleClose()}>
            <ListItemIcon>
              <Close />
            </ListItemIcon>
            Close
          </MenuItem>
        </Menu>
      ) : (
        <Menu
          id="auth-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem component={Link} to="/login" onClick={() => handleClose()}>
            <ListItemIcon>
              <VpnKey />
            </ListItemIcon>
            Login
          </MenuItem>
          <MenuItem component={Link} to="/signup" onClick={() => handleClose()}>
            <ListItemIcon>
              <PermIdentity />
            </ListItemIcon>
            Sign Up
          </MenuItem>
        </Menu>
      )}
      <LogoutModal
        showModal={show}
        authType={authType}
        handleModalClose={handleModalClose}
      />
    </div>
  );
}
