import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { Link } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import EditIcon from "@material-ui/icons/Edit";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import SettingsIcon from "@material-ui/icons/Settings";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import Typography from "@material-ui/core/Typography";

const MenuItemLink = (props) => {
  let { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <Link to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  const renderIcon = (icon) => {
    switch (icon) {
      case "close":
        return <CloseIcon />;

      case "logout":
        return <ExitToAppIcon />;

      case "login":
        return <VpnKeyIcon />;

      case "signup":
        return <PermIdentityIcon />;

      case "settings":
        return <SettingsIcon />;

      default:
        return null;
    }
  };

  return (
    <MenuItem button component={renderLink}>
      {icon ? <ListItemIcon>{renderIcon(icon)}</ListItemIcon> : null}
      <Typography>{primary}</Typography>
    </MenuItem>
  );
};

export default MenuItemLink;
