/* eslint-disable react/jsx-no-undef */
import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import {
  Button, TextField, Typography, MenuItem, DialogContent, DialogTitle,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './style';
import {
  getNomeMedico, getCognomeMedico,
  mediciTrovati, buttonSearchClicked,
  dialogSearchStatus, closeDialogSearch, nameSearch, resetMedici,
} from '../../store/slice/searchDoctorSlice';
import { changePatientValue } from '../../store/slice/patientDataSlice';

const SearchDoctorDialog = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const listaMedici = useSelector(mediciTrovati);
  const statusDialogSearch = useSelector(dialogSearchStatus);
  const name = useSelector(nameSearch);

  const listaMediciArray = listaMedici ? Object.keys(listaMedici).map((key) => {
    const medico = listaMedici[key];
    return medico;
  }) : [];

  const dispatchOnClose = () => {
    dispatch(closeDialogSearch());
    dispatch(resetMedici());
  };

  const doctorList = listaMediciArray ? listaMediciArray.map((medico : any) => (
    // eslint-disable-next-line react/jsx-key
    <div>
      <MenuItem
        value={medico.firstname}
         // onClick={handleClick}
        onClick={() => {
          dispatch(changePatientValue({ name, value: medico }));
          dispatch(closeDialogSearch());
          dispatch(resetMedici());
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
            <Typography className={classes.button} variant="h5">
              Cerca il tuo medico
            </Typography>
            <TextField
              variant="outlined"
              placeholder="Nome"
              onChange={(event) => {
                const { value } = event.target;
                dispatch(getNomeMedico({ value }));
              }}
            />
            <TextField
              variant="outlined"
              placeholder="Cognome"
              onChange={(event) => {
                const { value } = event.target;
                dispatch(getCognomeMedico({ value }));
              }}
            />
            <br />
            <Button
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
