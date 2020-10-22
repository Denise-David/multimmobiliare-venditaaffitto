/* eslint-disable no-underscore-dangle */
import {
  Button, Divider, Grid, IconButton, Typography,
} from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import { openDialogLabel } from '../../../store/slice/dialogSlice';
import {

  familynameCercato, formNoLabel, nameCercato, setSelected,
} from '../../../store/slice/interfacciaAmmSlice';

import useStyles from './style';
import SnackbarEtichettaInesistente from '../SnackbarEtichettaInesistente/SnackbarEtichettaInesistente';
import { formularioDBType } from '../../../store/slice/addFormSlice';
import { openSnackbarConfirmDelForm } from '../../../store/slice/snackbarSlice';
import SnackbarConfirmDelForm from '../SnackbarConfermaEliminazione/SnackbarConfermaEliminazione';

// Riga formulario senza etichetta
const FormularioLine = ():ReactElement => {
  const noLabelForm = useSelector(formNoLabel);
  const classes = useStyles();
  const dispatch = useDispatch();
  const nomeCercato = useSelector(nameCercato);
  const cognomeCercato = useSelector(familynameCercato);
  const listForm = noLabelForm.map((form : formularioDBType) => {
    const nome : string | undefined = form.paziente?.givenname.toLowerCase();
    const cognome :string | undefined = form.paziente?.familyname.toLowerCase();
    const nomeCognome = `${form.paziente?.givenname} ${form.paziente?.familyname}`;
    const { reparto } = form;
    const { formulario } = form;
    const IDForm = form._id;

    // Filtraggio per nome e congome
    if (nome?.includes(nomeCercato.toLowerCase())
     && cognome?.includes(cognomeCercato.toLowerCase())) {
      return (
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          key={form._id}
        >
          {/* Avvisi */}
          <SnackbarConfirmDelForm IDForm={IDForm} />
          <SnackbarEtichettaInesistente />
          {/* Formulario */}
          <Grid item xs={12} sm={10}>
            <Divider />
            <Typography variant="body1">

              {form.reparto}
              {' / '}
              {form.formulario}
              {' / '}
              {form.paziente?.givenname}
              {' '}
              {form.paziente?.familyname}

            </Typography>
          </Grid>
          {/* Bottoni */}
          <Grid item xs={12} sm={10}>
            <div className={classes.button}>
              <Button
                className={classes.width}
                color="primary"
                onClick={() => {
                  dispatch(setSelected({
                    nomeCognome, formulario, reparto, IDForm,
                  }));
                  dispatch(openDialogLabel());
                }}
                variant="contained"
              >
                Aggiungi etichetta

              </Button>

            </div>
            <Divider />
          </Grid>
          <span className={classes.right}>
            <Grid item xs={12} sm={1}>
              <IconButton
                color="primary"
                onClick={() => {
                  dispatch(openSnackbarConfirmDelForm());
                }}
              >

                <DeleteIcon
                  style={{ fontSize: 30 }}
                />
              </IconButton>
            </Grid>
          </span>

        </Grid>

      );
    } return (<div key={form._id} />);
  });
  return (
    <div>{listForm}</div>
  );
};

export default FormularioLine;
