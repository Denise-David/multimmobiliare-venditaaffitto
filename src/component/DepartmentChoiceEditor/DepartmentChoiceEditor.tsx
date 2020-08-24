import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {
  IconButton, Button, Snackbar, RadioGroup,
  FormControlLabel, Radio, Typography, TextField, Paper, Fab,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import useStyles from './style';
import { setRepartoSelected, idRepartoSelected, resetIDReparto } from '../../store/slice/repartoSlice';
import {
  delActive, alertConfirmDelete, isDisable, disableAll, enableAll, colDisable,
} from '../../store/slice/editFormSlice';
import { resetDomande } from '../../store/slice/domandeModifySlice';
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
import { allReparti } from '../../store/slice/rightsSlice';

const DepartmentChoiceEditor = () => {
  const dispatch = useDispatch();

  // recupero stati dagli slice
  const classes = useStyles();
  const addReparto = useSelector(isButtonAddFormClicked);
  const noRep = useSelector(initialID);
  const deleteActive = useSelector(delActive);
  const disableActive = useSelector(isDisable);
  const IDReparto = useSelector(idRepartoSelected);
  const colorButton = useSelector(colDisable);
  const repartoSelezionato = useSelector(selectedReparto);
  const confirmDisabled = useSelector(isConfirmDisabled);
  const tipoForm = useSelector(formType);
  const buttonColor = useSelector(colButton);
  const bConfirmAddFormClicked = useSelector(isBConfirmAddFormClicked);
  const isSaveDisabled = useSelector(isBSaveDisabled);
  const allRep = useSelector(allReparti);

  // prendo valore DDL Reparto
  const getValueOnChange = (event : React.ChangeEvent<{ value: unknown }>) => {
    const { value } = event.target;
    dispatch(setRepartoSelected(value));
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
    dispatch(resetIDReparto());
    dispatch(enableAll());
  };

  // Dispatch pulsante annulla dell'alert
  const cancelDeleteDispatch = () => {
    dispatch(enableAll());
    dispatch(alertConfirmDelete());
  };

  // mappo tutti i reparti
  const listRep = allRep.map((reparto: any) => (
    <MenuItem
      value={reparto.unitid ? reparto.unitid : reparto.sermednodeid}
      key={reparto.unitid}
    >
      {reparto.longname}

    </MenuItem>
  ));

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
                  <KeyboardReturnIcon fontSize="large" color="primary" />
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
                        <KeyboardReturnIcon fontSize="large" color={colorButton} />
                      </IconButton>
                    </div>
                  ) : (
                    <div>
                      {/* se add non è attivo e non è selezionato nessun reparto */}
                      {noRep === 0
                        ? (
                          <>
                            <Fab className={classes.buttonAdd} onClick={addDispatch} color="primary">
                              <AddIcon />

                            </Fab>

                          </>
                        )
                        : (
                          <div>
                            <div>
                              {/* se add non è attivo ed è selezionato il reparto */}
                              <Fab className={classes.buttonAdd} onClick={addDispatch} color="primary">
                                <AddIcon />
                              </Fab>
                            </div>
                            <div className={classes.ButtonDelSaveCanc}>
                              <IconButton disabled={disableActive} onClick={deleteDispatch}>
                                <DeleteIcon fontSize="large" color={colorButton} />
                              </IconButton>
                              <IconButton disabled={disableActive} onClick={deleteDispatch}>
                                <SaveIcon fontSize="large" color={colorButton} />
                              </IconButton>
                              <IconButton
                                disabled={disableActive}
                                onClick={
                        () => dispatch(buttonCancelAddFormClicked())
                        }
                              >
                                <KeyboardReturnIcon fontSize="large" color={colorButton} />
                              </IconButton>
                            </div>
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
                      <Paper>
                        <Typography variant="h5" className={classes.backRepartoFormulario}>Reparto:</Typography>
                        <FormControl disabled={disableActive} variant="outlined" fullWidth>
                          <Select
                            defaultValue={-1}
                            value={IDReparto}
                            autoWidth
                            onChange={getValueOnChange}
                          >
                            <MenuItem value={-1}>
                              Seleziona Reparto
                            </MenuItem>
                            {listRep}
                          </Select>

                        </FormControl>
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

export default DepartmentChoiceEditor;
