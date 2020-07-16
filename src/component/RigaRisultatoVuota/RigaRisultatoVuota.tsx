import React from 'react';
import TextField from '@material-ui/core/TextField';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const RigaRisulato = () => (
  <div>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={1} />
      <Grid item xs={12} sm={1}>
        <IconButton>
          <AddCircleOutlineIcon color="primary" />
        </IconButton>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField disabled id="standard-basic" fullWidth />
      </Grid>
      <Grid item xs={12} sm={2}>
        <TextField disabled id="standard-basic" fullWidth />
      </Grid>
      <Grid item xs={12} sm={2}>
        <TextField disabled id="standard-basic" fullWidth />
      </Grid>
    </Grid>
  </div>
);

export default RigaRisulato;
