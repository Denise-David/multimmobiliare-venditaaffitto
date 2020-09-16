import React from 'react';
import {
  Grid, Typography, TextField, Switch,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import useStyles from './style';
import { setIntestazioneTwoAns } from '../../store/slice/domandeAddFormSlice';

const TextFieldIntestazione = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={2}>
        <Typography className={classes.spaceTopIntestazione} variant="body1" align="center">Intestazione*</Typography>
      </Grid>
      <Grid item xs={12} sm={9}>
        <TextField
          onChange={(event) => {
            const { value } = event.target;
            dispatch(setIntestazioneTwoAns(value));
          }}
          fullWidth
          variant="outlined"
        />
      </Grid>

    </Grid>
  );
};

export default TextFieldIntestazione;
