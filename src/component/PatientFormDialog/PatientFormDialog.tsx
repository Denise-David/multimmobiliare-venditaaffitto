import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { useSelector } from 'react-redux';

import FormPaziente from '../../view/FormPaziente/FormPaziente';
import { dialogFormPatientOpen } from '../../store/slice/dialogSlice';

const PatientFormDialog = () => {
  const open = useSelector(dialogFormPatientOpen);

  return (
    <Dialog fullScreen open={open}>
      <AppBar />
      <FormPaziente />
    </Dialog>
  );
};

export default PatientFormDialog;
