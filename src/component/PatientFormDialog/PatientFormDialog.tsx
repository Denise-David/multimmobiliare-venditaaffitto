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

  // eslint-disable-next-line react/display-name
  const Transition = React.forwardRef((
    props: TransitionProps & { children?: React.ReactElement },
    ref: React.Ref<unknown>,
  // eslint-disable-next-line react/jsx-props-no-spreading
  ) => <Slide direction="up" ref={ref} {...props} />);

  return (
    <Dialog fullScreen open={open} TransitionComponent={Transition}>
      <AppBar />
      <FormPaziente />
    </Dialog>
  );
};

export default PatientFormDialog;
