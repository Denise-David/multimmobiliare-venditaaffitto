import {
  Button,
  Dialog, Grid, TextField, Typography,
} from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeDialogLabel, dialogLabel } from '../../../store/slice/dialogSlice';
import { patientSelected, repSelected, formSelected } from '../../../store/slice/interfacciaAmmSlice';
import useStyles from './style';

const DialogLabel = () => {
  const classes = useStyles();
  const open = useSelector(dialogLabel);
  const dispatch = useDispatch();
  const patient = useSelector(patientSelected);
  const rep = useSelector(repSelected);
  const form = useSelector(formSelected);

  return (
    <Dialog open={open} onClose={() => dispatch(closeDialogLabel())}>
      <div className={classes.padding}>
        <Grid
          className={classes.width}
          container
          spacing={1}
          direction="column"
          justify="center"
          alignItems="flex-start"
        >
          <div className={classes.margin}>
            <Typography>Reparto:</Typography>
            <TextField value={rep} disabled variant="outlined" />
          </div>
          <div className={classes.margin}>
            <Typography>Formulario:</Typography>
            <TextField value={form} disabled variant="outlined" />
          </div>
          <div className={classes.margin}>
            <Typography>Paziente:</Typography>
            <TextField value={patient} disabled variant="outlined" />
          </div>

          <Typography variant="h6" color="primary" align="center">Etichetta:</Typography>
          <TextField fullWidth variant="outlined" />

          <div className={classes.margin}>
            <Button variant="contained">Aggiungi</Button>
          </div>
        </Grid>
      </div>
    </Dialog>
  );
};

export default DialogLabel;
