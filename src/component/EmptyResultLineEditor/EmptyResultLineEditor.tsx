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
  setBAddResultUnclicked, addRisultatoClicked, disableAll, enableAll,
  result, valueMax, valueMin, resetRisultato,
} from '../../store/slice/risultatiAddFormSlice';
import { unsetIcons, setIcons } from '../../store/slice/addFormSlice';

const EmptyResultLineEditor = () => {
  const colorButton = useSelector(colDisable);
  const disableActive = useSelector(isDisable);
  const dispatch = useDispatch();
  const textFieldState = useSelector(textFieldStateAddRisultato);
  const res = useSelector(result);
  const valMin = useSelector(valueMin);
  const valMax = useSelector(valueMax);
  // eslint-disable-next-line no-useless-escape
  const NON_DIGIT = '/[^\d]/g';

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={1} />
        <Grid item xs={12} sm={1}>
          {textFieldState
            ? (
              <IconButton
                onClick={() => {
                  dispatch(unsetIcons());
                  dispatch(disableAll());
                  dispatch(setBAddResultClicked());
                }}
                disabled={disableActive}
              >
                <AddCircleOutlineIcon color={colorButton} />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  dispatch(setBAddResultUnclicked());
                  dispatch(addRisultatoClicked());
                  dispatch(enableAll());
                  dispatch(setIcons());
                  dispatch(resetRisultato());
                }}
              >
                <CheckCircleOutlineIcon color="primary" />
              </IconButton>
            ) }
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={res}
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
            value={valMin}
            disabled={textFieldState}
            onChange={(event) => {
              const { value } = event.target;
              // eslint-disable-next-line radix
              const intVal = parseInt(value.toString().replace(NON_DIGIT, ''));
              dispatch(setValoreMin(intVal));
            }}

            id="standard-basic"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField

            value={valMax}
            disabled={textFieldState}
            onChange={(event) => {
              const { value } = event.target;
              // eslint-disable-next-line radix
              const intVal = parseInt(value.toString().replace(NON_DIGIT, ''));
              dispatch(setValoreMax(intVal));
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
