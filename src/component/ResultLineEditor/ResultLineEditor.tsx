import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import CreateIcon from '@material-ui/icons/Create';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import EmptyResultLineEditor from '../EmptyResultLineEditor/EmptyResultLineEditor';
import {
  colDisable, disableAll, enableAll, dataRisultati, setBModifyClicked,
  setBModifyUnclicked, deleteRisultato, modifyRisultato,
} from '../../store/slice/risultatiAddFormSlice';
import { objectToArray } from '../../util';
import { haveRepModifyRight } from '../../store/slice/rightsSlice';
import { isBConfirmAddFormClicked } from '../../store/slice/addFormSlice';
import { isBCheckDisabled, setBCheckEnabled, setBCheckDisabled } from '../../store/slice/domandeAddFormSlice';

const ResultLineEditor = () => {
  const dispatch = useDispatch();

  const risultatiObject = useSelector(dataRisultati);

  const colorButton = useSelector(colDisable);
  const rightRepModify = useSelector(haveRepModifyRight);
  const confirmAddForm = useSelector(isBConfirmAddFormClicked);
  const bCheckDisabled = useSelector(isBCheckDisabled);

  const risultatiArray = objectToArray(risultatiObject);
  // eslint-disable-next-line no-useless-escape
  const NON_DIGIT = '/[^d]/g';

  const listRisultati = risultatiArray ? risultatiArray.map((oneForm: any) => {
    let {
      valoreMax, valoreMin, risultato,
    } = oneForm;
    const { IDRisultato } = oneForm;
    return (
    // eslint-disable-next-line react/jsx-key
      <Grid container spacing={3}>
        {rightRepModify || confirmAddForm
          ? (
            <>
              {!oneForm.stateModify
                ? (
                  <>
                    <Grid item xs={12} sm={1}>
                      <IconButton

                        onClick={() => {
                          dispatch(disableAll());
                          dispatch(setBModifyClicked(oneForm.IDRisultato));
                        }}
                      >
                        <CreateIcon color={colorButton} />
                      </IconButton>
                    </Grid>
                    <Grid item xs={12} sm={1}>
                      <IconButton onClick={() => dispatch(deleteRisultato(oneForm.IDRisultato))}>
                        <DeleteIcon color={colorButton} />
                      </IconButton>
                    </Grid>
                  </>
                ) : (
                  <>
                    <Grid item xs={12} sm={2}>
                      <IconButton
                        onClick={() => {
                          dispatch(enableAll());
                          dispatch(setBModifyUnclicked(oneForm.IDRisultato));
                        }}
                        color="primary"
                        disabled={bCheckDisabled}
                      >
                        <CheckCircleOutlineIcon />
                      </IconButton>
                    </Grid>
                  </>

                )}

            </>
          ) : <><Grid item xs={12} sm={2} /></>}

        <Grid item xs={12} sm={6}>
          <TextField
            onChange={(event) => {
              risultato = event.target.value;
              if (risultato === '' || valoreMin > valoreMax) {
                dispatch(setBCheckDisabled());
              } else if (bCheckDisabled === true && valoreMin <= valoreMax) {
                dispatch(setBCheckEnabled());
              }
              dispatch(modifyRisultato({
                IDRisultato, risultato, valoreMin, valoreMax,
              }));
              dispatch(setBModifyClicked(oneForm.IDRisultato));
            }}
            disabled={!oneForm.stateModify}
            id="standard-basic"
            value={oneForm.risultato}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            onChange={(event) => {
              const { value } = event.target;
              if (value !== '') {
              // eslint-disable-next-line radix
                valoreMin = parseInt(value.toString().replace(NON_DIGIT, '0'));
                dispatch(modifyRisultato({
                  IDRisultato, valoreMin, valoreMax, risultato,
                }));
                dispatch(setBModifyClicked(oneForm.IDRisultato));
                if (valoreMin > oneForm.valoreMax) {
                  dispatch(setBCheckDisabled());
                } else if (bCheckDisabled === true) {
                  dispatch(setBCheckEnabled());
                }
              } else {
                valoreMin = '0';
                dispatch(modifyRisultato({
                  IDRisultato, valoreMin, valoreMax, risultato,
                }));
                dispatch(setBModifyClicked(oneForm.IDRisultato));
                if (valoreMin > oneForm.valoreMax) {
                  dispatch(setBCheckDisabled());
                } else if (bCheckDisabled === true) {
                  dispatch(setBCheckEnabled());
                }
              }
            }}
            disabled={!oneForm.stateModify}
            id="standard-basic"
            value={oneForm.valoreMin}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            onChange={(event) => {
              const { value } = event.target;
              if (value !== '') {
              // eslint-disable-next-line radix
                valoreMax = parseInt(value.toString().replace(NON_DIGIT, ''));
                dispatch(modifyRisultato({
                  IDRisultato, valoreMax, valoreMin, risultato,
                }));
                dispatch(setBModifyClicked(oneForm.IDRisultato));
                if (valoreMax < oneForm.valoreMin) {
                  dispatch(setBCheckDisabled());
                } else if (bCheckDisabled === true) {
                  dispatch(setBCheckEnabled());
                }
              } else {
                valoreMax = '0';
                dispatch(modifyRisultato({
                  IDRisultato, valoreMax, valoreMin, risultato,
                }));
                dispatch(setBModifyClicked(oneForm.IDRisultato));
                if (valoreMax < oneForm.valoreMin) {
                  dispatch(setBCheckDisabled());
                } else if (bCheckDisabled === true) {
                  dispatch(setBCheckEnabled());
                }
              }
            }}
            disabled={!oneForm.stateModify}
            id="standard-basic"
            value={oneForm.valoreMax}
            fullWidth
          />
        </Grid>
      </Grid>
    );
  }) : <></>;
  return (
    <div>
      {listRisultati}
      <EmptyResultLineEditor />

    </div>
  );
};

export default ResultLineEditor;
