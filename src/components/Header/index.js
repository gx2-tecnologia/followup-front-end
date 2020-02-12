import React from 'react';
import {
  AppBar,
  IconButton,
  Toolbar,
  Button,
  Typography,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useStylesAppbar } from './styles';
// import { systemName } from 'params/params';

export default function Header(props) {
  const appBarClasses = useStylesAppbar();

  return (
    <AppBar position="fixed" className={appBarClasses.appBar}>
      <Toolbar className={appBarClasses.toolbar}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={props.handleDrawerToggle}
          className={appBarClasses.menuButton}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6">Follow Up</Typography>
        <Button className={appBarClasses.actions}>
          <AccountCircleIcon fontSize="large" />
        </Button>
      </Toolbar>
    </AppBar>
  );
}
