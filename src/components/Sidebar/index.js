import React from 'react';
// import { connect } from 'react-redux';
import {
  Drawer,
  CssBaseline,
  Divider,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from '@material-ui/core';

import PanoramaFishEyeIcon from '@material-ui/icons/PanoramaFishEye';
import { Link } from 'react-router-dom';
// import logo from 'assets/logoWhite.png';

import { useStyles } from './styles';
// import { logoWidth } from 'params/params';
import { routes } from 'routes/listRoutes';

export default function Sidebar(props) {
  const verifyPermission = () => {
    let path = '';

    if (props.typeUser) {
      routes.map(item => {
        item.profiles.map(data => {
          if (data === props.typeUser) {
            path = [...path, item.path];
          }
        });
      });
    }
    return path;
  };

  const { container } = props;
  const classes = useStyles();

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        {/* <img width={logoWidth} src={logo} alt="Logo Honda" /> */}
      </div>
      <Divider />
      <List>
        {routes.map((item, index) => {
          console.log(item);

          return (
            <Link
              key={index}
              to={item.path}
              style={{ textDecoration: 'none', color: 'initial' }}
            >
              <ListItem button key={index}>
                <ListItemIcon>
                  <PanoramaFishEyeIcon id={item.description} />
                </ListItemIcon>
                <Typography>{item.description}</Typography>
              </ListItem>
              {/* <Divider style={{ marginLeft: 20, marginRight: 20 }} /> */}
            </Link>
          );
        })}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor="left"
            open={props.mobileOpen}
            onClose={props.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}
