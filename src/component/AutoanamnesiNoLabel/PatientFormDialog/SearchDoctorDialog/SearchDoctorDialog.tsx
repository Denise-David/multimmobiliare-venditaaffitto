/* eslint-disable react/jsx-no-undef */
import React, { ReactElement, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import {
  Button, TextField, Typography, MenuItem, DialogContent, DialogTitle,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './style';
import {
  getNomeMedico, getCognomeMedico,
  mediciTrovati, buttonSearchClicked,
  tipoDottoreScelto, resetMedici, nomeMedico, cognomeMedico,
} from '../../../../store/slice/searchDoctorSlice';
import { changePatientValue, unsetCheckboxDoctor, unsetCheckboxFamilyDoctor } from '../../../../store/slice/patientDataSlice';
import { dialogSearchOpen, closeDialogSearch } from '../../../../store/slice/dialogSlice';
import { Medico, objectToArray } from '../../../../util';

const SearchDoctorDialog = ():ReactElement => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const listaMedici = useSelector(mediciTrovati);
  const statusDialogSearch = useSelector(dialogSearchOpen);
  const name = useSelector(tipoDottoreScelto);
  const doctorName = useSelector(nomeMedico);
  const doctorLastname = useSelector(cognomeMedico);
  const lunghezzaNome = doctorName.value ? doctorName.value.length : 0;
  const lunghezzaCognome = doctorLastname.value ? doctorLastname.value.length : 0;
  const [disabledSearchButton, setDisabled] = useState(true);

  // controllo che vengano immessi almeno 3 caratteri nella ricerca
  if (lunghezzaNome + lunghezzaCognome < 3 && disabledSearchButton === false) {
    setDisabled(!disabledSearchButton);
  } else if (lunghezzaNome + lunghezzaCognome >= 3 && disabledSearchButton === true) {
    setDisabled(!disabledSearchButton);
  }
  const listaMediciArray = objectToArray(listaMedici);

  // azioni da effettuare in chiusura del dialog
  const dispatchOnClose = () => {
    dispatch(closeDialogSearch());
    dispatch(resetMedici());
  };

  const doctorList = listaMediciArray ? listaMediciArray.map((medico : Medico) => (

    <div key={medico.id}>
      <MenuItem
        value={medico.firstname}
        onClick={() => {
          dispatch(changePatientValue({ name, value: medico }));
          dispatch(closeDialogSearch());
          dispatch(resetMedici());
          setDisabled(!disabledSearchButton);
          if (name !== 'doctor') {
            dispatch(unsetCheckboxFamilyDoctor());
          } else if (name === 'doctor') {
            dispatch(unsetCheckboxDoctor());
          }
        }}
      >
        <Typography variant="body1">
          {medico.firstname}
          {' '}
          {medico.lastname}
          {', '}
          {medico.city}
        </Typography>
      </MenuItem>

    </div>
  )) : <></>;

  return (
    <div>
      <Dialog open={statusDialogSearch} onClose={dispatchOnClose} scroll="paper">

        <div className={classes.margin}>
          <DialogTitle>
            <Typography className={classes.button}>
              Cerca il tuo medico
            </Typography>
            <TextField
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  dispatch(buttonSearchClicked());
                }
              }}
              variant="outlined"
              placeholder="Nome"
              onChange={(event) => {
                const { value } = event.target;
                dispatch(getNomeMedico({ value }));
              }}
            />
            <TextField
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  dispatch(buttonSearchClicked());
                }
              }}
              variant="outlined"
              placeholder="Cognome"
              onChange={(event) => {
                const { value } = event.target;
                dispatch(getCognomeMedico({ value }));
              }}
            />
            <br />
            <Button
              disabled={disabledSearchButton}
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={() => { dispatch(buttonSearchClicked()); }}
            >
              Cerca
            </Button>
          </DialogTitle>
          <DialogContent className={classes.dialogContent} dividers>
            {doctorList}
          </DialogContent>

        </div>
      </Dialog>

    </div>
  );
};

export default SearchDoctorDialog;
