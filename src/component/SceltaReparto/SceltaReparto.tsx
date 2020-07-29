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
  delActive, alertConfirmDelete, isDisable, disableEnableAll,
} from '../../store/slice/editFormSlice';
import { resetDomande } from '../../store/slice/formSlice';
import { initialID, setInitialStateAction, desetInitialStateAction } from '../../store/slice/initialStateSlice';
import { resetRisultati } from '../../store/slice/risultatiFormularioSlice';

const SceltaReparto = () => {
  const dispatch = useDispatch();

  const getValueOnChange = (event : React.ChangeEvent<{ value: unknown }>) => {
    const { value } = event.target;
    dispatch(valueAction(value));
    dispatch({ type: 'INIT' });
    dispatch(desetInitialStateAction());
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
    dispatch(disableEnableAll());
  };

  const cancelDispatch = () => {
    dispatch(cancelRepartoAction());
  };

  /* Dispatch delle action del pulsante Conferma eliminazione dell'alert */
  const confirmDeleteDispatch = () => {
    dispatch(resetDomande());
    dispatch(resetRisultati());
    dispatch(alertConfirmDelete());
    dispatch(setInitialStateAction());
    dispatch(resetReparto());
    dispatch(disableEnableAll());
  };

  // recupero stati dagli slice
  const classes = useStyles();
  const listForm = useSelector(allFormData);
  const modifyReparto = useSelector(modify);
  const addReparto = useSelector(add);
  const noRep = useSelector(initialID);
  const deleteActive = useSelector(delActive);
  const disableActive = useSelector(isDisable);
  const IDReparto = useSelector(formID);
  console.log('yyy', listForm);

  const getRepartoName = (form : Formulario) => form.ID === IDReparto;

  const listItems = listForm.map((oneForm) => (

    <MenuItem key={oneForm.ID} value={oneForm.ID}>
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
                  disabled={disableActive}
                  onClick={() => dispatch(confirmRepartoAction())}
                >
                  <CheckCircleOutlineIcon fontSize="large" color="primary" />
                </IconButton>
                <IconButton
                  disabled={disableActive}
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
                    <IconButton disabled={disableActive} onClick={addDispatch}>
                      <AddCircleOutlineIcon fontSize="large" color="primary" />
                    </IconButton>
                  )
                  : (
                    <div>
                      {/* se nè add nè modify sono attivi eed è selezionato il reparto */}
                      <IconButton disabled={disableActive} onClick={addDispatch}>
                        <AddCircleOutlineIcon fontSize="large" color="primary" />
                      </IconButton>
                      <IconButton
                        disabled={disableActive}
                        onClick={() => dispatch(modifyRepartoAction())}
                      >
                        <CreateIcon fontSize="large" color="primary" />
                      </IconButton>
                      <IconButton disabled={disableActive} onClick={deleteDispatch}>
                        <DeleteIcon fontSize="large" color="primary" />
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

            ? <TextField label="inserisci nome reparto" variant="filled" fullWidth />
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
            <Button onClick={deleteDispatch} variant="contained" color="primary" size="small">
              Annulla
            </Button>
          </div>
          )}
      />
    </div>

  );
};

export default SceltaReparto;
