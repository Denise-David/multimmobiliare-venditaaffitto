import React from 'react';
import { Dialog, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import useStyles from './style';
import { isClicked } from '../../store/slice/patientFormSlice';
import Nav from '../Navbar/Navbar';
import ButtonReturnDevice from '../ButtonReturnDevice/ButtonReturnDevice';

const ReturnDeviceDialog = () => {
  const isOpen = useSelector(isClicked);
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
      </div>

    </Dialog>
  );
};

export default ReturnDeviceDialog;
