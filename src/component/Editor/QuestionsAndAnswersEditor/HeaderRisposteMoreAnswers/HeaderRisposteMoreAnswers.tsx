import React from 'react';
import { Grid, Typography, Divider } from '@material-ui/core';
import useStyles from './style';

const HeaderRisposteMoreAnswers = () => {
  const classes = useStyles();

  return (
    <span className={classes.bordi}>
      <Grid container>
        <Grid item xs={12} sm={1} />
        <Grid item xs={12} sm={1} />
        <Grid item xs={12} sm={3} />
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
};

export default HeaderRisposteMoreAnswers;
