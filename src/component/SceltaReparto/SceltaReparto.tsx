import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {
  IconButton, TextField, Button, Snackbar,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import useStyles from './style';
import { allFormData, Formulario } from '../../store/slice/formulariSlice';
import { valueAction, resetReparto, formID } from '../../store/slice/repartoSlice';
import {
  addRepartoAction, modify, modifyRepartoAction, add, confirmRepartoAction, cancelRepartoAction,
  delActive, alertConfirmDelete, isDisable, disableAll, enableAll, colDisable,
  valueAddRepartoAction,
} from '../../store/slice/editFormSlice';
import { resetDomande } from '../../store/slice/formSlice';
import { initialID, setInitialStateAction } from '../../store/slice/initialStateSlice';
import { resetRisultati } from '../../store/slice/risultatiFormularioSlice';

const SceltaReparto = () => {
  const dispatch = useDispatch();

  // recupero stati dagli slice
  const classes = useStyles();
  const listForm = useSelector(allFormData);
  const modifyReparto = useSelector(modify);
  const addReparto = useSelector(add);
  const noRep = useSelector(initialID);
  const deleteActive = useSelector(delActive);
  const disableActive = useSelector(isDisable);
  const IDReparto = useSelector(formID);
  const colorButton = useSelector(colDisable);

  const getValueOnChange = (event : React.ChangeEvent<{ value: unknown }>) => {
    const { value } = event.target;
    dispatch(valueAction(value));
    dispatch({ type: 'INIT' });
    // dispatch(desetInitialStateAction());
    // dispatch(repartoOnChange());
  };

  const getValueTextField = (event : React.ChangeEvent<{ value: unknown }>) => {
    const textFieldValue = event.target.value;
    dispatch(valueAddRepartoAction(textFieldValue));
  };

  /* Dispatch delle action del pulsante add */
  const addDispatch = () => {
    dispatch(addRepartoAction());
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

  // Dispatch del pulsante croce (annulla)
  const cancelDispatch = () => {
    dispatch(cancelRepartoAction());
    dispatch(enableAll());
    if (addReparto === true) {
      dispatch(resetReparto());
    }
  };

  const confirmDispatch = () => {
    dispatch(enableAll());
    dispatch(confirmRepartoAction());
  };

  // Dispatch pulsante annulla dell'alert
  const cancelDeleteDispatch = () => {
    dispatch(enableAll());
    dispatch(alertConfirmDelete());
  };

  const modifyDispatch = () => {
    dispatch(modifyRepartoAction());
    dispatch(disableAll());
  };

  // eslint-disable-next-line no-underscore-dangle
  const getRepartoName = (form : Formulario) => form._id === IDReparto;

  console.log('gne', listForm);

  const listItems = listForm.map((oneForm) => (

    // eslint-disable-next-line no-underscore-dangle
    <MenuItem key={oneForm._id} value={oneForm._id}>
      {oneForm.Reparto}
    </MenuItem>

  ));

  return (

    <div className={classes.margin}>
      <Grid container>
        <Grid item xs={12} sm={2}>
          {/* Pulsanti accanto al dropDownList scelta reparto */}
          {addReparto || modifyReparto
            ? (
              <div>
                {/* se il pulsante add o modify è attivo */}
                <IconButton

                  onClick={confirmDispatch}
                >
                  <CheckCircleOutlineIcon fontSize="large" color="primary" />
                </IconButton>
                <IconButton

                  onClick={cancelDispatch}
                >
                  <HighlightOffIcon fontSize="large" color="primary" />
                </IconButton>
              </div>
            )
            : (
              <div>
                {/* se nè add nè modify sono attivi e non è selezionato nessun reparto */}
                {noRep === 0
                  ? (
                    <IconButton onClick={addDispatch}>
                      <AddCircleOutlineIcon fontSize="large" color="primary" />
                    </IconButton>
                  )
                  : (
                    <div>
                      {/* se nè add nè modify sono attivi ed è selezionato il reparto */}
                      <IconButton onClick={addDispatch}>
                        <AddCircleOutlineIcon fontSize="large" color={colorButton} />
                      </IconButton>
                      <IconButton
                        disabled={disableActive}
                        onClick={modifyDispatch}
                      >
                        <CreateIcon fontSize="large" color={colorButton} />
                      </IconButton>
                      <IconButton disabled={disableActive} onClick={deleteDispatch}>
                        <DeleteIcon fontSize="large" color={colorButton} />
                      </IconButton>
                    </div>
                  )}
              </div>
            )}
        </Grid>
        <Grid item xs={12} sm={10}>
          {/* DropDownList selezione reparto */}
          {/* se è cliccato il tasto add */}
          {addReparto
            ? <TextField label="inserisci nome reparto" variant="filled" onChange={getValueTextField} fullWidth />
            : (
              <div>
                {/* se è cliccato il tasto modify */}
                { modifyReparto
                  ? (
                    <TextField value={listForm.find(getRepartoName)?.Reparto} variant="filled" fullWidth />
                  )
                  : (
                    <div>
                      {/* se non è cliccato nulla */}
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
                          {listItems}
                        </Select>
                      </FormControl>
                    </div>
                  )}
              </div>
            )}
        </Grid>
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

export default SceltaReparto;
