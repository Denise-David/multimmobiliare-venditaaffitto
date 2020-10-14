/* eslint-disable no-underscore-dangle */
import {
  Divider, Grid, IconButton, Typography,
} from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import { closeAndFilterDialog } from '../../../store/slice/dialogSlice';
import {
  DeleteAnsForm,
  familynameCercato, formWithLabel, nameCercato,
} from '../../../store/slice/interfacciaAmmSlice';
import SnackbarEtichettaInesistente from '../SnackbarEtichettaInesistente/SnackbarEtichettaInesistente';
import useStyles from './style';
import ButtonOpenPDFDataPatient from './ButtonOpenPDFDataPatient/ButtonOpenPDFDataPatient';
import ButtonOpenPDFFormPatient from './ButtonOpenPDFFormPatient/ButtonOpenPDFFormPatient';
import { formularioDBType } from '../../../store/slice/addFormSlice';

const FormularioLabelLine = ():ReactElement => {
  const labelForm = useSelector(formWithLabel);
  const classes = useStyles();
  const dispatch = useDispatch();
  const nomeCercato = useSelector(nameCercato);
  const cognomeCercato = useSelector(familynameCercato);
  const listForm = labelForm.map((form : formularioDBType) => {
    const nome : string | undefined = form.paziente?.givenname.toLowerCase();
    const cognome :string | undefined = form.paziente?.familyname.toLowerCase();
    const IDForm = form._id;

    if (nome?.includes(nomeCercato.toLowerCase())
       && cognome?.includes(cognomeCercato.toLowerCase())) {
      return (
        <div key={form._id}>
          <SnackbarEtichettaInesistente />
          <Divider />

          <div className={classes.margin}>
            <Typography variant="body1" key={form._id}>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                {form.reparto}
                {' / '}
                {form.formulario}
                {' / '}
                {form.paziente?.givenname}
                {' '}
                {form.paziente?.familyname}
                <span>
                  <IconButton
                    color="primary"
                    onClick={() => {
                      dispatch(DeleteAnsForm(IDForm));
                      dispatch(closeAndFilterDialog());
                      dispatch({ type: 'INIT_INTERFACCIA' });
                    }}
                  >
                    <DeleteIcon

                      style={{ fontSize: 30 }}
                    />
                  </IconButton>
                </span>
              </Grid>
            </Typography>
          </div>
          <span>
            <div>
              <ButtonOpenPDFFormPatient etichetta={form.etichetta} IDForm={form._id} />

              <ButtonOpenPDFDataPatient IDForm={form._id} />
            </div>
          </span>

          <Divider />
        </div>
      );
    } return (<></>);
  });
  return (
    <div>{listForm}</div>
  );
};

export default FormularioLabelLine;
