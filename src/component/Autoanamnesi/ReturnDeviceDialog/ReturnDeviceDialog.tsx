import React, { ReactElement } from 'react';
import { Dialog, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import useStyles from './style';
import Nav from '../../Navbar/Navbar';
import ButtonReturnDevice from './ButtonReturnDevice/ButtonReturnDevice';

import ButtonOpenPDFDataPatient from './ButtonOpenPDFDataPatient/ButtonOpenPDFDataPatient';
import ButtonOpenPDFFormPatient from './ButtonOpenPDFFormPatient/ButtonOpenPDFFormPatient';
import { dialogReturnDeviceOpen } from '../../../store/slice/dialogSlice';

// Dialog ritorno dispositivo
const ReturnDeviceDialog = ():ReactElement => {
  const isOpen = useSelector(dialogReturnDeviceOpen);
  const classes = useStyles();

  return (
    <Dialog fullScreen open={isOpen}>
      <Nav />
      <div className={classes.marginDialog}>
        <Typography className={classes.margin} variant="h4" align="center">
          Ritorni cortesemente l&apos;apparecchio al personale amministrativo
        </Typography>
        <Typography variant="h4" align="center" color="primary">
          Grazie!
        </Typography>
        <ButtonReturnDevice />
        <ButtonOpenPDFDataPatient />
        <ButtonOpenPDFFormPatient />
      </div>

    </Dialog>
  );
};

export default ReturnDeviceDialog;
