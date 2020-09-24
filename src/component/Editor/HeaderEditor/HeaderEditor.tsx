import React from 'react';
import {
  Button, Snackbar, Typography, TextField, Paper,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import useStyles from './style';
import {
  isBConfirmAddFormClicked,
  setNomeFormulario, confirmDeleteForm, nomeFormulario, isButtonAddFormClicked,
} from '../../../store/slice/addFormSlice';
import DropDownListFormulari from './DropDownListFormulari/DropDownListFormulari';
import PrimaryButtons from './PrimaryButtons/PrimaryButtons';
import DropDownListReparti from './DropDownListReparti/DropDownListReparti';
import { haveRepModifyRight } from '../../../store/slice/rightsSlice';
import { IDForm } from '../../../store/slice/ddlEditorFormAndRepartiSlice';
import {
  setBSaveEnabled, isBModifyDelAddReturnDisabled, setBModifyDelAddReturnEnabled, setBSaveDisabled,
} from '../../../store/slice/disableEnableSlice';
import { snackbarConfirmDeleteOpen, openCloseSnackbarConfirmDelete } from '../../../store/slice/snackbarSlice';
import TextFieldRepartoAddForm from '../TextFieldRepartoAddForm/TextFieldRepartoAddForm';
import SnackbarAtLeast2Res from '../SnackbarAtLeast2Res/SnackbarAtLeast2Res';

const HeaderEditor = () => {
  const dispatch = useDispatch();

  // recupero stati dagli slice
  const classes = useStyles();
  const deleteActive = useSelector(snackbarConfirmDeleteOpen);
  const bConfirmAddFormClicked = useSelector(isBConfirmAddFormClicked);
  const modifyRight = useSelector(haveRepModifyRight);
  const IDFormulario = useSelector(IDForm);
  const nomeForm = useSelector(nomeFormulario);
  const iconsDisabled = useSelector(isBModifyDelAddReturnDisabled);
  const bAddFormClicked = useSelector(isButtonAddFormClicked);

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

  // Dispatch pulsante annulla dell'alert
  const cancelDeleteDispatch = () => {
    dispatch(setBModifyDelAddReturnEnabled());
    dispatch(openCloseSnackbarConfirmDelete());
  };

  return (

    <div className={classes.margin}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >

        {/* se è cliccato il tasto add */}
        {bAddFormClicked
          ? <TextFieldRepartoAddForm />
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
                    <Grid item xs={12} sm={1} />

                  </>
                )}
            </>
          )}
        <PrimaryButtons />
        {modifyRight && IDFormulario !== '-1'
          ? (
            <TextField
              className={classes.tfNomeForm}
              fullWidth
              variant="outlined"
              value={nomeForm}
              onChange={(event) => {
                const { value } = event.target;
                dispatch(setNomeFormulario(value));
              }}
              disabled={iconsDisabled}
            />
          ) : <></>}

      </Grid>
      {/* Alert per il delete del reparto */}
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        message="Stai per eliminare un'intero formulario, sei sicuro?"
        open={deleteActive}
        action={(
          <div>
            <Button onClick={() => dispatch(confirmDeleteForm())} variant="contained" color="primary" size="small">
              Conferma eliminazione
            </Button>
            &nbsp;&nbsp;
            <Button onClick={cancelDeleteDispatch} variant="contained" color="primary" size="small">
              Annulla
            </Button>
          </div>
          )}
      />
      <SnackbarAtLeast2Res />
    </div>
  );
};

export default HeaderEditor;
