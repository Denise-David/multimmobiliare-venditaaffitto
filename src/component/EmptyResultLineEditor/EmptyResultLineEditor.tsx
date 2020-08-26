import React from 'react';
import TextField from '@material-ui/core/TextField';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import {
  colDisable, isDisable, setRisultato, setValoreMin,
  setValoreMax, textFieldStateAddRisultato, setBAddResultClicked,
  setBAddResultUnclicked, addRisultatoClicked,
} from '../../store/slice/risultatiAddFormSlice';

const EmptyResultLineEditor = () => {
  const colorButton = useSelector(colDisable);
  const disableActive = useSelector(isDisable);
  const dispatch = useDispatch();
  const textFieldState = useSelector(textFieldStateAddRisultato);

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={1} />
        <Grid item xs={12} sm={1}>
          {textFieldState
            ? (
              <IconButton onClick={() => dispatch(setBAddResultClicked())} disabled={disableActive}>
                <AddCircleOutlineIcon color={colorButton} />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  dispatch(setBAddResultUnclicked());
                  dispatch(addRisultatoClicked());
                }}
                disabled={disableActive}
              >
                <CheckCircleOutlineIcon color={colorButton} />
              </IconButton>
            ) }
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            disabled={textFieldState}
            onChange={(event) => {
              const { value } = event.target;
              dispatch(setRisultato(value));
            }}

            id="standard-basic"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            disabled={textFieldState}
            onChange={(event) => {
              const { value } = event.target;
              dispatch(setValoreMin(value));
            }}

            id="standard-basic"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            disabled={textFieldState}
            onChange={(event) => {
              const { value } = event.target;
              dispatch(setValoreMax(value));
            }}

            id="standard-basic"
            fullWidth
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default EmptyResultLineEditor;
