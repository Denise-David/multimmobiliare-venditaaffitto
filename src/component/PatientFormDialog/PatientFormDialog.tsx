import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { useSelector } from 'react-redux';
import Slide from '@material-ui/core/Slide';
// eslint-disable-next-line import/no-unresolved
import { TransitionProps } from '@material-ui/core/transitions';
import { isOpen } from '../../store/slice/patientFormSlice';
import FormPaziente from '../../view/FormPaziente/FormPaziente';

const PatientFormDialog = () => {
  const open = useSelector(isOpen);

  return (
    <Dialog fullScreen open={open}>
      <AppBar />
      <FormPaziente />
    </Dialog>
  );
};

export default PatientFormDialog;
