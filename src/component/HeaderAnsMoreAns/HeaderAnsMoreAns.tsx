import React from 'react';
import { Grid, Typography, Divider } from '@material-ui/core';
import { useSelector } from 'react-redux';
import useStyles from './style';
import { risposteTutteUguali } from '../../store/slice/menuDomandeERisposteSlice';

const HeaderAnsMoreAns = () => (
  <span>

    <Typography variant="h6" align="left">
      Risposte
    </Typography>

  </span>
);

export default HeaderAnsMoreAns;
