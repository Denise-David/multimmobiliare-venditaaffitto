import React from 'react';
import TextField from '@material-ui/core/TextField';
import CreateIcon from '@material-ui/icons/Create';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';

const RigaRisulato = () => (
  <div>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={1}>
        <IconButton>
          <CreateIcon color="primary" />
        </IconButton>
      </Grid>
      <Grid item xs={12} sm={1}>
        <IconButton>
          <DeleteIcon color="primary" />
        </IconButton>
      </Grid>
      <Grid item xs={12} sm={5} />
      <Grid item xs={12} sm={4}>
        <TextField disabled id="standard-basic" value="Molto grave" fullWidth />
      </Grid>
      <Grid item xs={12} sm={1}>
        <TextField disabled id="standard-basic" value="3" fullWidth />
      </Grid>

    </Grid>
  </div>
);

export default RigaRisulato;
