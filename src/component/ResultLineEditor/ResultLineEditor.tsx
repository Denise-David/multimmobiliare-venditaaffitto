import React from 'react';
import TextField from '@material-ui/core/TextField';
import CreateIcon from '@material-ui/icons/Create';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import EmptyResultLineEditor from '../EmptyResultLineEditor/EmptyResultLineEditor';
import {
  colDisable, disableAll, enableAll, risultati, setBModifyClicked,
  setBModifyUnclicked, deleteRisultato, modifyRisultato,
} from '../../store/slice/risultatiAddFormSlice';
import { objectToArray } from '../../util';
import { haveRepModifyRight } from '../../store/slice/rightsSlice';

const ResultLineEditor = () => {
  const dispatch = useDispatch();

  const risultatiObject = useSelector(risultati);

  const colorButton = useSelector(colDisable);
  const rightRepModify = useSelector(haveRepModifyRight);

  const risultatiArray = objectToArray(risultatiObject);
  // eslint-disable-next-line no-useless-escape
  const NON_DIGIT = '/[^\d]/g';

  const listRisultati = risultatiArray ? risultatiArray.map((oneForm: any) => {
    const {
      IDRisultato,
    } = oneForm;
    return (
    // eslint-disable-next-line react/jsx-key
      <Grid container spacing={3}>
        {rightRepModify
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
                      <IconButton onClick={() => {
                        dispatch(enableAll());
                        dispatch(setBModifyUnclicked(oneForm.IDRisultato));
                      }}
                      >
                        <CheckCircleOutlineIcon color="primary" />
                      </IconButton>
                    </Grid>
                  </>

                )}

            </>
          ) : <></>}

        <Grid item xs={12} sm={6}>
          <TextField
            onChange={(event) => {
              const risultato = event.target.value;
              dispatch(modifyRisultato({
                IDRisultato, risultato,
              }));
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
              // eslint-disable-next-line radix
              const valoreMin = parseInt(value.toString().replace(NON_DIGIT, ''));
              dispatch(modifyRisultato({
                IDRisultato, valoreMin,
              }));
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
              // eslint-disable-next-line radix
              const valoreMax = parseInt(value.toString().replace(NON_DIGIT, ''));
              dispatch(modifyRisultato({
                IDRisultato, valoreMax,
              }));
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
