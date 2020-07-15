import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import useStyles from './style';

const Nav = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.NavColor} />
  );
};
export default Nav;
