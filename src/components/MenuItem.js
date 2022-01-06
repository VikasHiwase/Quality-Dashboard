import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// internal
import { useStyles } from "../Styles";

// @material-ui
import { Icon, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

// external
import clsx from "clsx";

const MenuItem = ({ label, icon, activeIcon, path }) => {
  const [active, setActive] = useState(true);

  const classes = useStyles();

  const location = useLocation();

  useEffect(() => {
    if (path === "/sign-out") {
      setActive(true);
      return;
    }
    setActive(location.pathname === path);
  }, [location]);

  return (
    <ListItem
      component={Link}
      to={path}
      button
      className={clsx(classes.menuItem, active && classes.menuItemActive)}
    >
      <ListItemIcon>
        <Icon>
          <img
            className={classes.menuItemIcon}
            src={active ? activeIcon : icon}
            alt={label}
          />
        </Icon>
      </ListItemIcon>
      <ListItemText
        primary={label}
        primaryTypographyProps={{ variant: "body2" }}
      ></ListItemText>
    </ListItem>
  );
};

export default MenuItem;
