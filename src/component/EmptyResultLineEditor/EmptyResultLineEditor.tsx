import React from 'react';
import TextField from '@material-ui/core/TextField';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
import { colDisable, isDisable } from '../../store/slice/editFormSlice';

const EmptyResultLineEditor = () => {
  const colorButton = useSelector(colDisable);
  const disableActive = useSelector(isDisable);

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={1} />
        <Grid item xs={12} sm={1}>
          <IconButton disabled={disableActive}>
            <AddCircleOutlineIcon color={colorButton} />
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
};

export default EmptyResultLineEditor;
