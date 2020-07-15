import React from 'react';
import useStyles from './style';
import logo from '../../img/eoc.png';

const Logo = () => {
  const classes = useStyles();
  return (
    <img className={classes.Logo} src={logo} alt="Eoc Logo" />
  );
};
export default Logo;
