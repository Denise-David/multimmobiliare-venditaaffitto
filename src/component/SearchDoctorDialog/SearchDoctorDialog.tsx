import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { Button, TextField, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './style';
import {
  getNomeMedico, getCognomeMedico, mediciTrovati, buttonSearchClicked,
} from '../../store/slice/searchDoctorSlice';

const SearchDoctorDialog = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const listaMedici = useSelector(mediciTrovati);

  const listaMediciArray = listaMedici ? Object.keys(listaMedici).map((key) => {
    const medico = listaMedici[key];
    return medico;
  }) : [];

  const doctorList = listaMediciArray ? listaMediciArray.map((medico : any) => (
    // eslint-disable-next-line react/jsx-key
    <div>
      {medico}
    </div>
  )) : <></>;

  return (
    <div>
      <Dialog open>
        <div className={classes.margin}>
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
          {doctorList}
        </div>
      </Dialog>

    </div>
  );
};

export default SearchDoctorDialog;
