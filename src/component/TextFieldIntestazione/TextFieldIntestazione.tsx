import React from 'react';
import {
  Grid, Typography, TextField, Switch,
} from '@material-ui/core';
import useStyles from './style';

const TextFieldIntestazione = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={2}>
        <Typography className={classes.spaceTopIntestazione} variant="body1" align="center">Intestazione*</Typography>
      </Grid>
      <Grid item xs={12} sm={9}>
        <TextField fullWidth variant="outlined" />
      </Grid>
      <Grid item xs={12} sm={1}>
        <Switch
          className={classes.spaceTop}
          name="checkedA"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
      </Grid>
    </Grid>
  );
};

export default TextFieldIntestazione;
