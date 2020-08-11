import React from 'react';
import TextField from '@material-ui/core/TextField';
import { IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { useSelector, useDispatch } from 'react-redux';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {
  risActive, addRispostaVuotaAction, isDisable, colDisable,
} from '../../store/slice/editFormSlice';

const RigaRisulato = () => {
  const dispatch = useDispatch();

  const colorButton = useSelector(colDisable);
  const disableActive = useSelector(isDisable);
  const risultActive = useSelector(risActive);

  const addRispostaDispatch = () => {
    dispatch(addRispostaVuotaAction());
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={1} />

        {risultActive
          ? (
            <Grid item xs={12} sm={1}>
              <IconButton disabled={disableActive}>
                <AddCircleOutlineIcon onClick={addRispostaDispatch} color={colorButton} />
              </IconButton>
            </Grid>

          )
          : (
            <div>
              <IconButton onClick={addRispostaDispatch} color="primary">
                <HighlightOffIcon />
              </IconButton>
              <IconButton onClick={addRispostaDispatch} color="primary">
                <CheckCircleOutlineIcon />
              </IconButton>
            </div>
          )}

        <Grid item xs={12} sm={1} />
        <Grid item xs={12} sm={4} />
        <Grid item xs={12} sm={4}>
          <TextField disabled={risultActive} id="standard-basic" fullWidth />
        </Grid>
        <Grid item xs={12} sm={1}>
          <TextField disabled={risultActive} id="standard-basic" fullWidth />
        </Grid>
      </Grid>
    </div>
  );
};

export default RigaRisulato;
