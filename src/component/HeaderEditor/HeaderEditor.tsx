import React from 'react';
import {
  Button, Snackbar, Typography, TextField, Paper,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import useStyles from './style';
import { resetIDReparto } from '../../store/slice/repartoDDLSlice';
import {
  delActive, alertConfirmDelete, enableAll,
} from '../../store/slice/risultatiAddFormSlice';
import { resetDomande } from '../../store/slice/domandeModifySlice';
import { setInitialStateAction } from '../../store/slice/initialStateSlice';
import { resetRisultati } from '../../store/slice/risultatiFormularioSlice';
import {
  isButtonAddFormClicked,
  isBConfirmAddFormClicked,
  setNomeFormulario,
  setBSaveEnabled,
  setBSaveDisabled,
} from '../../store/slice/addFormSlice';
import DropDownListFormulari from '../DropDownListFormulari/DropDownListFormulari';
import PrimaryButtons from '../PrimaryButtons/PrimaryButtons';
import RadioButtonTypeForm from '../RadioButtonTypeForm/RadioButtonTypeForm';
import DropDownListReparti from '../DropDownListReparti/DropDownListReparti';

const HeaderEditor = () => {
  const dispatch = useDispatch();

  // recupero stati dagli slice
  const classes = useStyles();
  const addReparto = useSelector(isButtonAddFormClicked);

  const deleteActive = useSelector(delActive);

  const bConfirmAddFormClicked = useSelector(isBConfirmAddFormClicked);

  // Prendo il nome del form immesso dall'utente e controllo se è vuoto
  const getNomeForm = (event : React.ChangeEvent<{ value: unknown }>) => {
    const { value } = event.target;
    dispatch(setNomeFormulario(value));
    if (value) {
      dispatch(setBSaveEnabled());
    } else if (!value) {
      dispatch(setBSaveDisabled());
    }
  };

  const confirmDeleteDispatch = () => {
    dispatch(resetDomande());
    dispatch(resetRisultati());
    dispatch(alertConfirmDelete());
    dispatch(setInitialStateAction());
    dispatch(resetIDReparto());
    dispatch(enableAll());
  };

  // Dispatch pulsante annulla dell'alert
  const cancelDeleteDispatch = () => {
    dispatch(enableAll());
    dispatch(alertConfirmDelete());
  };

  return (

    <div className={classes.margin}>
      <Grid container>
        <PrimaryButtons />
        {/* se è cliccato il tasto add */}
        {addReparto
          ? (
            <>
              <RadioButtonTypeForm />
            </>
          )
          : (
            <>
              {' '}
              {bConfirmAddFormClicked
                ? (
                  <>
                    {/* se è stato cliccato confirmAddForm */}
                    <Grid item xs={12} sm={10}>
                      <TextField
                        onChange={getNomeForm}
                        placeholder="Nome formulario"
                        fullWidth
                        variant="outlined"
                        autoFocus
                      />
                    </Grid>
                  </>
                ) : (
                  <>
                    {/* se non è cliccato nulla */}
                    <Grid item xs={12} sm={4}>
                      <Paper>
                        <Typography variant="h5" className={classes.backRepartoFormulario}>Reparto:</Typography>
                        <DropDownListReparti />
                      </Paper>
                    </Grid>
                    <Grid item xs={12} sm={1} />
                    <Grid item xs={12} sm={4}>
                      <Paper>
                        <Typography variant="h5" className={classes.backRepartoFormulario}>Formulario:</Typography>
                        <DropDownListFormulari />
                      </Paper>
                    </Grid>
                  </>
                )}
            </>
          )}
      </Grid>
      {/* Alert per il delete del reparto */}
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        message="Stai per eliminare un'intero formulario, sei sicuro?"
        open={deleteActive}
        action={(
          <div>
            <Button onClick={confirmDeleteDispatch} variant="contained" color="primary" size="small">
              Conferma eliminazione
            </Button>
            &nbsp;&nbsp;
            <Button onClick={cancelDeleteDispatch} variant="contained" color="primary" size="small">
              Annulla
            </Button>
          </div>
          )}
      />
    </div>
  );
};

export default HeaderEditor;
