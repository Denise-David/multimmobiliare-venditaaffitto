import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import {
  setRisultato, setValoreMin,
  setValoreMax, addRisultatoClicked,
  result, valueMax, valueMin, resetRisultato,
} from '../../store/slice/risultatiAddFormSlice';
import { isBConfirmAddFormClicked } from '../../store/slice/addFormSlice';
import { haveRepModifyRight } from '../../store/slice/rightsSlice';
import { setBCheckDisabled, setBCheckEnabled, isBCheckDisabled } from '../../store/slice/domandeAddFormSlice';
import {
  isBModifyDelAddReturnDisabled, enableAll, disableAll,
} from '../../store/slice/disableEnableSlice';

const EmptyResultLineEditor = () => {
  const iconsDisabled = useSelector(isBModifyDelAddReturnDisabled);
  const dispatch = useDispatch();
  const res = useSelector(result);
  const valMin = useSelector(valueMin);
  const valMax = useSelector(valueMax);
  // eslint-disable-next-line no-useless-escape
  const NON_DIGIT = '/[^\d]/g';
  const rightRepModify = useSelector(haveRepModifyRight);
  const confirmAddForm = useSelector(isBConfirmAddFormClicked);
  const bCheckDisabled = useSelector(isBCheckDisabled);
  const [textFieldDisabled, setTextField] = useState(true);

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={1} />
        <Grid item xs={12} sm={1}>
          {rightRepModify || confirmAddForm
            ? (
              <>
                {' '}
                {textFieldDisabled
                  ? (
                    <IconButton
                      onClick={() => {
                        dispatch(disableAll());
                        dispatch(setBCheckDisabled());
                        setTextField(!textFieldDisabled);
                      }}
                      disabled={iconsDisabled}
                      color="primary"
                    >
                      <AddCircleOutlineIcon />
                    </IconButton>
                  ) : (
                    <IconButton
                      onClick={() => {
                        dispatch(addRisultatoClicked());
                        dispatch(enableAll());
                        dispatch(resetRisultato());
                        setTextField(textFieldDisabled);
                      }}
                      disabled={bCheckDisabled}
                      color="primary"

                    >
                      <CheckCircleOutlineIcon />
                    </IconButton>
                  ) }
                {' '}

              </>
            ) : <></>}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={res}
            disabled={textFieldDisabled}
            onChange={(event) => {
              const { value } = event.target;
              if (value === '' || valMin > valMax) {
                dispatch(setBCheckDisabled());
              } else if (bCheckDisabled === true && valMin <= valMax) {
                dispatch(setBCheckEnabled());
              }
              dispatch(setRisultato(value));
            }}

            id="standard-basic"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            value={valMin}
            disabled={textFieldDisabled}
            onChange={(event) => {
              const { value } = event.target;
              if (value !== '') {
              // eslint-disable-next-line radix
                const intVal = parseInt(value.toString().replace(NON_DIGIT, ''));
                dispatch(setValoreMin(intVal));
                if (intVal > valMax) {
                  dispatch(setBCheckDisabled());
                } else if (bCheckDisabled === true) {
                  dispatch(setBCheckEnabled());
                }
              } else {
                const intVal = 0;
                dispatch(setValoreMin(intVal));
                if (intVal > valMax) {
                  dispatch(setBCheckDisabled());
                } else if (bCheckDisabled === true) {
                  dispatch(setBCheckEnabled());
                }
              }
            }}

            id="standard-basic"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField

            value={valMax}
            disabled={textFieldDisabled}
            onChange={(event) => {
              const { value } = event.target;
              if (value !== '') {
              // eslint-disable-next-line radix
                const intVal = parseInt(value.toString().replace(NON_DIGIT, ''));
                dispatch(setValoreMax(intVal));
                if (intVal < valMin) {
                  dispatch(setBCheckDisabled());
                } else if (bCheckDisabled === true) {
                  dispatch(setBCheckEnabled());
                }
              } else {
                const intVal = 0;
                dispatch(setValoreMax(intVal));
                if (intVal < valMin) {
                  dispatch(setBCheckDisabled());
                } else if (bCheckDisabled === true) {
                  dispatch(setBCheckEnabled());
                }
              }
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
