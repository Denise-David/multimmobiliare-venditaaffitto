import React from 'react';
import { Grid, Typography, Divider } from '@material-ui/core';
import { useSelector } from 'react-redux';
import useStyles from './style';
import { risposteTutteUguali } from '../../store/slice/menuDomandeERisposteSlice';

const HeaderDomandaMoreAnswers = () => {
  const classes = useStyles();

  return (
    <span className={classes.bordi}>

      <Typography variant="h6" align="left">
        Domanda
      </Typography>

    </span>
  );
};

export default HeaderDomandaMoreAnswers;
