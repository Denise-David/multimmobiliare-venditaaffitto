import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import {
  valueMin, valueMax, result, setRisultato,
  setValoreMin, setValoreMax, addRisultatoClicked,
  resetRisultato, setButtonDisabled, setButtonEnabled, buttonDisabled,
} from '../../../../../store/slice/risultatiAddFormSlice';

const TextFieldEmptyResultLine = () => {
  const res = useSelector(result);
  const dispatch = useDispatch();
  const valMin = useSelector(valueMin);
  const valMax = useSelector(valueMax);
  const bCheckDisabled = useSelector(buttonDisabled);
  // eslint-disable-next-line no-useless-escape
  const NON_DIGIT = '/[^\d]/g';
  return (
    <>
      <Grid item xs={12} sm={6}>
        <TextField
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !bCheckDisabled) {
              dispatch(addRisultatoClicked());
              dispatch(resetRisultato());
              dispatch(setButtonDisabled());
            }
          }}
          value={res}
          onChange={(event) => {
            const { value } = event.target;
            if (value === '' || valMin > valMax) {
              dispatch(setButtonDisabled());
            } else if (bCheckDisabled === true && valMin <= valMax) {
              dispatch(setButtonEnabled());
            }
            dispatch(setRisultato(value));
          }}

          id="standard-basic"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={2}>
        <TextField
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !bCheckDisabled) {
              dispatch(addRisultatoClicked());
              dispatch(resetRisultato());
            }
          }}
          value={valMin}

          onChange={(event) => {
            const { value } = event.target;
            if (value !== '') {
              // eslint-disable-next-line radix
              const intVal = parseInt(value.toString().replace(NON_DIGIT, ''));
              dispatch(setValoreMin(intVal));
              if (intVal > valMax) {
                dispatch(setButtonDisabled());
              } else if (bCheckDisabled === true) {
                dispatch(setButtonEnabled());
              }
            } else {
              const intVal = 0;
              dispatch(setValoreMin(intVal));
              if (intVal > valMax) {
                dispatch(setButtonDisabled());
              } else if (bCheckDisabled === true) {
                dispatch(setButtonEnabled());
              }
            }
          }}

          id="standard-basic"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={2}>
        <TextField
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !bCheckDisabled) {
              dispatch(addRisultatoClicked());
              dispatch(resetRisultato());
            }
          }}
          value={valMax}

          onChange={(event) => {
            const { value } = event.target;
            if (value !== '') {
              // eslint-disable-next-line radix
              const intVal = parseInt(value.toString().replace(NON_DIGIT, ''));
              dispatch(setValoreMax(intVal));
              if (intVal < valMin) {
                dispatch(setButtonDisabled());
              } else if (bCheckDisabled === true) {
                dispatch(setButtonEnabled());
              }
            } else {
              const intVal = 0;
              dispatch(setValoreMax(intVal));
              if (intVal < valMin) {
                dispatch(setButtonDisabled());
              } else if (bCheckDisabled === true) {
                dispatch(setButtonEnabled());
              }
            }
          }}

          id="standard-basic"
          fullWidth
        />
      </Grid>
    </>
  );
};

export default TextFieldEmptyResultLine;
