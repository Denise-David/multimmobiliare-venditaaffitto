/* eslint-disable no-underscore-dangle */
import {
  Divider, Grid, IconButton, Typography,
} from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import {

  familynameCercato, formWithLabel, nameCercato,
} from '../../../store/slice/interfacciaAmmSlice';
import SnackbarEtichettaInesistente from '../SnackbarEtichettaInesistente/SnackbarEtichettaInesistente';
import useStyles from './style';
import ButtonOpenPDFDataPatient from './ButtonOpenPDFDataPatient/ButtonOpenPDFDataPatient';
import ButtonOpenPDFFormPatient from './ButtonOpenPDFFormPatient/ButtonOpenPDFFormPatient';
import { formularioDBType } from '../../../store/slice/addFormSlice';
import { openSnackbarConfirmDelForm } from '../../../store/slice/snackbarSlice';
import SnackbarConfirmDelForm from '../SnackbarConfermaEliminazione/SnackbarConfermaEliminazione';
import ButtonLabel from './ButtonLabel/ButtonLabel';

// Riga formulario con etichetta
const FormularioLabelLine = ():ReactElement => {
  const labelForm = useSelector(formWithLabel);
  const dispatch = useDispatch();
  const classes = useStyles();
  const nomeCercato = useSelector(nameCercato);
  const cognomeCercato = useSelector(familynameCercato);
  const listForm = labelForm.map((form : formularioDBType) => {
    const nome : string | undefined = form.paziente?.givenname.toLowerCase();
    const cognome :string | undefined = form.paziente?.familyname.toLowerCase();
    const IDForm = form._id;
    const nomeCognome = `${form.paziente?.givenname} ${form.paziente?.familyname}`;
    const { reparto } = form;
    const { formulario } = form;

    // Filtro per nome e cognome
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

          <Grid item xs={12} sm={10}>
            <span>
              {/* bottoni PDF e gestione etichetta */}
              <div className={classes.button}>
                <ButtonOpenPDFFormPatient etichetta={form.etichetta} IDForm={form._id} />

                <ButtonOpenPDFDataPatient IDForm={form._id} />
                <ButtonLabel
                  IDForm={IDForm}
                  reparto={reparto}
                  formulario={formulario}
                  nomeCognome={nomeCognome}
                  etichetta={form.etichetta}
                />
                <Typography variant="h6" align="right">
                  {form.etichetta}
                </Typography>
              </div>

              <Divider />

            </span>
          </Grid>
          <span>
            {/* bottone elimina */}
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
          </span>

        </Grid>
      );
    } return (<div key={form._id} />);
  });
  return (
    <div>{listForm}</div>
  );
};

export default FormularioLabelLine;
