import {
  Button, Dialog, Grid, TextField, Typography,
} from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeDialogLabelManager, dialogLabelManager } from '../../../store/slice/dialogSlice';
import {
  patientSelected, repSelected, formSelected, setLabel,
  label, patientLabel, getNameFamilynameLabel, resetPatientLabel, slegaLabel,
} from '../../../store/slice/interfacciaAmmSlice';
import useStyles from './style';

// Dialog per gestire l'etichetta
const DialogLabelManager = ():ReactElement => {
  const classes = useStyles();
  const open = useSelector(dialogLabelManager);
  const dispatch = useDispatch();
  const patient = useSelector(patientSelected);
  const rep = useSelector(repSelected);
  const form = useSelector(formSelected);
  const NON_DIGIT = '/[^d]/g';
  const etichetta = useSelector(label);
  const pazienteEtichetta = useSelector(patientLabel);

  return (
    <Dialog open={open} onClose={() => dispatch(closeDialogLabelManager())}>
      <div className={classes.padding}>
        <Grid
          className={classes.width}
          container
          spacing={1}
          direction="row"
          justify="space-between"
          alignItems="flex-start"
        >
          <Grid item xs={12} sm={6}>
            <div className={classes.margin}>
              <Typography>Reparto:</Typography>
              <TextField value={rep} disabled variant="outlined" />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} />
          <Grid item xs={12} sm={6}>
            <div className={classes.margin}>
              <Typography>Formulario:</Typography>
              <TextField value={form} disabled variant="outlined" />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} />
          <Grid item xs={12} sm={6}>
            <div className={classes.margin}>
              <Typography>
                Paziente:
                {' '}

              </Typography>
              <TextField value={patient} disabled variant="outlined" />

            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.margin}>
              <Typography>
                Paziente etichetta:
                {' '}

              </Typography>
              <div className={classes.etichettaNome}>
                <Typography>

                  {pazienteEtichetta.nome}
                  {' '}
                  {pazienteEtichetta.cognome}

                </Typography>
              </div>

            </div>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Typography variant="h6" color="primary" align="left">Etichetta:</Typography>
            <TextField
              value={etichetta}
              onChange={(event) => {
                const { value } = event.target;
                if (value !== '') {
                  // eslint-disable-next-line radix
                  const valore = parseInt(value.toString().replace(NON_DIGIT, ''));
                  dispatch(setLabel(valore));
                  if (value.length > 6) {
                    dispatch(getNameFamilynameLabel());
                  } else if (value.length < 7) {
                    dispatch(resetPatientLabel());
                  }
                } else {
                  const valore = 0;
                  dispatch(setLabel(valore));
                }
              }}
              fullWidth
              variant="outlined"
            />
          </Grid>
        </Grid>
        <div className={classes.button}>
          <Button
            className={classes.marginB}
            onClick={() => dispatch(closeDialogLabelManager())}
            color="primary"
            variant="contained"
          >
            Annulla modifica

          </Button>
          <Button
            className={classes.marginB}
            onClick={() => dispatch({ type: 'AGGIUNGI_ETICHETTA' })}
            color="primary"
            variant="contained"
          >
            Conferma modifica

          </Button>
          <Button
            className={classes.marginB}
            onClick={() => dispatch(() => dispatch(slegaLabel()))}
            color="primary"
            variant="contained"
          >
            Elimina legame con etichetta

          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default DialogLabelManager;
