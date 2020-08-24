import React from 'react';
import TextField from '@material-ui/core/TextField';
import CreateIcon from '@material-ui/icons/Create';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { dataRisultati } from '../../store/slice/risultatiFormularioSlice';
import EmptyResultLineEditor from '../EmptyResultLineEditor/EmptyResultLineEditor';
import { domandeView } from '../../store/slice/domandeModifySlice';
import {
  stateRisultato, modifyRisultatiAction, colDisable, isDisable, disableAll, enableAll,
} from '../../store/slice/editFormSlice';

const ResultLineEditor = () => {
  const dispatch = useDispatch();

  const listForm = useSelector(dataRisultati);
  const domande = useSelector(domandeView);
  const risDisabled = useSelector(stateRisultato);
  const colorButton = useSelector(colDisable);
  const disableActive = useSelector(isDisable);
  if (domande !== null) {
    const listItems = listForm ? listForm.Risultati.map((oneForm) => (

      // eslint-disable-next-line react/jsx-key
      <Grid container spacing={3}>

        { risDisabled[oneForm.ID]
          ? (
            <>
              <Grid item xs={12} sm={1}>
                <IconButton
                  disabled={disableActive}
                  onClick={() => {
                    dispatch(modifyRisultatiAction(oneForm.ID));
                    dispatch(disableAll());
                  }}
                >
                  <CreateIcon color={colorButton} />
                </IconButton>
              </Grid>
              <Grid item xs={12} sm={1}>
                <IconButton disabled={disableActive}>
                  <DeleteIcon color={colorButton} />
                </IconButton>
              </Grid>
            </>
          ) : (
            <>
              <Grid item xs={12} sm={1}>
                <IconButton onClick={() => {
                  dispatch(modifyRisultatiAction(oneForm.ID));
                  dispatch(enableAll());
                }}
                >
                  <CheckCircleOutlineIcon color="primary" />
                </IconButton>
              </Grid>
              <Grid item xs={12} sm={1}>
                <IconButton onClick={() => {
                  dispatch(modifyRisultatiAction(oneForm.ID));
                  dispatch(enableAll());
                }}
                >
                  <HighlightOffIcon color="primary" />
                </IconButton>
              </Grid>
            </>

          )}

        <Grid item xs={12} sm={6}>
          <TextField disabled={risDisabled[oneForm.ID]} id="standard-basic" value={oneForm.testoAnamnesi} fullWidth />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField disabled={risDisabled[oneForm.ID]} id="standard-basic" value={oneForm.valoreMin} fullWidth />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField disabled={risDisabled[oneForm.ID]} id="standard-basic" value={oneForm.valoreMax} fullWidth />
        </Grid>
      </Grid>
    )) : <></>;
    return (
      <div>
        {listItems}
        <EmptyResultLineEditor />

      </div>
    );
  }

  return (
    <div />
  );
};

export default ResultLineEditor;
