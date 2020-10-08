import {
  Button,
  Dialog, Grid, TextField, Typography,
} from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeDialogLabel, dialogLabel } from '../../../store/slice/dialogSlice';
import {
  patientSelected, repSelected, formSelected, setLabel, label,
} from '../../../store/slice/interfacciaAmmSlice';
import useStyles from './style';

const DialogLabel = () => {
  const classes = useStyles();
  const open = useSelector(dialogLabel);
  const dispatch = useDispatch();
  const patient = useSelector(patientSelected);
  const rep = useSelector(repSelected);
  const form = useSelector(formSelected);
  const NON_DIGIT = '/[^d]/g';
  const etichetta = useSelector(label);

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
          <TextField
            value={etichetta}
            onChange={(event) => {
              const { value } = event.target;
              if (value !== '') {
              // eslint-disable-next-line radix
                const valore = parseInt(value.toString().replace(NON_DIGIT, ''));
                dispatch(setLabel(valore));
              } else {
                const valore = 0;
                dispatch(setLabel(valore));
              }
            }}
            fullWidth
            variant="outlined"
          />

        </Grid>
        <div className={classes.button}>
          <Button
            onClick={() => dispatch({ type: 'AGGIUNGI_ETICHETTA' })}
            color="primary"
            variant="contained"
          >
            Aggiungi

          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default DialogLabel;
