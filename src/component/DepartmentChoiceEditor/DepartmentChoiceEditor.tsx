import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {
  IconButton, Button, Snackbar, RadioGroup, FormControlLabel, Radio, Typography, TextField,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import SaveIcon from '@material-ui/icons/Save';
import useStyles from './style';
import { valueAction, resetReparto, formID } from '../../store/slice/repartoSlice';
import {
  delActive, alertConfirmDelete, isDisable, disableAll, enableAll, colDisable,
} from '../../store/slice/editFormSlice';
import { resetDomande } from '../../store/slice/formSlice';
import { initialID, setInitialStateAction } from '../../store/slice/initialStateSlice';
import { resetRisultati } from '../../store/slice/risultatiFormularioSlice';
import {
  getFormType, selectedReparto, isConfirmDisabled, formType,
  setConfirmEnabled, colButton,
  buttonConfirmAddFormClicked,
  buttonCancelAddFormClicked,
  isButtonAddFormClicked,
  setBAddFormClicked,
  isBConfirmAddFormClicked,
  setNomeFormulario,
  setBSaveEnabled,
  isBSaveDisabled,
  setBSaveDisabled,
  buttonSaveFormClicked,
} from '../../store/slice/addFormSlice';
import DropDownListFormulari from '../DropDownListFormulari/DropDownListFormulari';

const DepartmentChoiceEditor = () => {
  const dispatch = useDispatch();

  // recupero stati dagli slice
  const classes = useStyles();
  const addReparto = useSelector(isButtonAddFormClicked);
  const noRep = useSelector(initialID);
  const deleteActive = useSelector(delActive);
  const disableActive = useSelector(isDisable);
  const IDReparto = useSelector(formID);
  const colorButton = useSelector(colDisable);
  const repartoSelezionato = useSelector(selectedReparto);
  const confirmDisabled = useSelector(isConfirmDisabled);
  const tipoForm = useSelector(formType);
  const buttonColor = useSelector(colButton);
  const bConfirmAddFormClicked = useSelector(isBConfirmAddFormClicked);
  const isSaveDisabled = useSelector(isBSaveDisabled);

  // prendo valore DDL Reparto
  const getValueOnChange = (event : React.ChangeEvent<{ value: unknown }>) => {
    const { value } = event.target;
    dispatch(valueAction(value));
    dispatch({ type: 'INIT' });
  };

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

  /* Dispatch delle action del pulsante add */
  const addDispatch = () => {
    dispatch(setBAddFormClicked());
    dispatch(setInitialStateAction());
    dispatch(resetDomande());
    dispatch(resetRisultati());
  };

  /* Dispatch delle action del pulsante Delete e annulla Delete */
  const deleteDispatch = () => {
    dispatch(alertConfirmDelete());
    dispatch(disableAll());
  };

  /* Dispatch delle action del pulsante Conferma eliminazione dell'alert */
  const confirmDeleteDispatch = () => {
    dispatch(resetDomande());
    dispatch(resetRisultati());
    dispatch(alertConfirmDelete());
    dispatch(setInitialStateAction());
    dispatch(resetReparto());
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
        <Grid item xs={12} sm={2}>
          {/* Pulsanti accanto al dropDownList scelta reparto */}
          {addReparto
            ? (
              <div>
                {/* se il pulsante add è attivo */}
                <IconButton
                  onClick={() => dispatch(buttonConfirmAddFormClicked())}
                  disabled={confirmDisabled}
                >
                  <CheckCircleOutlineIcon fontSize="large" color={buttonColor} />
                </IconButton>
                <IconButton

                  onClick={() => dispatch(buttonCancelAddFormClicked())}
                >
                  <HighlightOffIcon fontSize="large" color="primary" />
                </IconButton>
              </div>
            )
            : (
              <>
                {' '}
                {bConfirmAddFormClicked
                  ? (
                    <div>
                      {/* se add non è attivo ed è selezionato il reparto */}

                      <IconButton
                        disabled={isSaveDisabled}
                        onClick={() => dispatch(buttonSaveFormClicked())}
                      >
                        <SaveIcon fontSize="large" color={buttonColor} />
                      </IconButton>
                      <IconButton
                        disabled={disableActive}
                        onClick={
                        () => dispatch(buttonCancelAddFormClicked())
                        }
                      >
                        <HighlightOffIcon fontSize="large" color={colorButton} />
                      </IconButton>
                    </div>
                  ) : (
                    <div>
                      {/* se add non è attivo e non è selezionato nessun reparto */}
                      {noRep === 0
                        ? (
                          <IconButton onClick={addDispatch}>
                            <AddCircleOutlineIcon fontSize="large" color="primary" />
                          </IconButton>
                        )
                        : (
                          <div>
                            {/* se add non è attivo ed è selezionato il reparto */}
                            <IconButton onClick={addDispatch}>
                              <AddCircleOutlineIcon fontSize="large" color={colorButton} />
                            </IconButton>
                            <IconButton disabled={disableActive} onClick={deleteDispatch}>
                              <DeleteIcon fontSize="large" color={colorButton} />
                            </IconButton>
                          </div>
                        )}
                    </div>
                  )}
              </>

            )}
        </Grid>

        {/* Header */}
        {/* se è cliccato il tasto add */}
        {addReparto
          ? (
            <>
              <Grid item xs={12} sm={2}>
                <Typography className={classes.background} variant="h5">Tipo formulario:</Typography>
              </Grid>
              <Grid item xs={12} sm={2}>
                <RadioGroup
                  row
                  onChange={(event) => {
                    const { value } = event.target;
                    dispatch(getFormType(value));
                    if (Object.keys(repartoSelezionato).length !== 0) {
                      dispatch(setConfirmEnabled());
                    }
                  }}
                >
                  {' '}
                  <FormControlLabel value="a più risposte" control={<Radio />} label="A più risposte" />
                  <FormControlLabel value="a due risposte" control={<Radio />} label="A due risposte" />
                </RadioGroup>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography className={classes.background} variant="h5">Reparto:</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  onChange={
                  () => {
                    if (tipoForm !== '') {
                      dispatch(setConfirmEnabled());
                    }
                  }
                }

                  fullWidth
                  variant="outlined"
                  disabled
                  value={repartoSelezionato.nomeReparto}
                />
              </Grid>
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
                      <FormControl disabled={disableActive} variant="outlined" fullWidth>
                        <Select
                          defaultValue={0}
                          value={IDReparto}
                          autoWidth
                          onChange={getValueOnChange}
                        >
                          <MenuItem value={0}>
                            Seleziona Reparto
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={1} />
                    <Grid item xs={12} sm={4}>
                      <DropDownListFormulari />
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

export default DepartmentChoiceEditor;
