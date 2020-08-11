import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography } from '@material-ui/core';

const Nav = () => (
  <AppBar position="static" color="primary">
    <Toolbar><Typography variant="h5">Autoanamnesi</Typography></Toolbar>
  </AppBar>
);
export default Nav;
