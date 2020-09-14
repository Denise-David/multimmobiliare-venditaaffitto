import React from 'react';
import { Grid, Typography, Divider } from '@material-ui/core';
import { useSelector } from 'react-redux';
import useStyles from './style';
import { risposteTutteUguali } from '../../store/slice/menuDomandeERisposteSlice';

const HeaderDomandaMoreAnswers = () => {
  const risTutteUguali = useSelector(risposteTutteUguali);
  const classes = useStyles();
  if (!risTutteUguali) {
    return (
      <span className={classes.bordi}>
        <Grid container>
          <Grid item xs={12} sm={1} />
          <Grid item xs={12} sm={1} />

          <Grid item xs={12} sm={3}>
            <Typography variant="subtitle1" align="center">
              Domanda
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="subtitle1" align="center">
              Risposte
            </Typography>
          </Grid>
          <Grid item xs={12} sm={1}>
            <Typography variant="subtitle1" align="center">
              Valore
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={2} />
        <Divider />

      </span>
    );
  }
  return (
    <span className={classes.bordi}>
      <Grid container>
        <Grid item xs={12} sm={1} />
        <Grid item xs={12} sm={1} />

        <Grid item xs={12} sm={3}>
          <Typography variant="subtitle1" align="center">
            Domanda
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} />
        <Grid item xs={12} sm={1} />
      </Grid>
      <Grid item xs={12} sm={2} />
      <Divider />

    </span>
  );
};

export default HeaderDomandaMoreAnswers;
