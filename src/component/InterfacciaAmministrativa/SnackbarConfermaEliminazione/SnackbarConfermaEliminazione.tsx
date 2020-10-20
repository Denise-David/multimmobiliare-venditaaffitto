import { Button, Snackbar, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeAndFilterDialog } from '../../../store/slice/dialogSlice';
import { DeleteAnsForm } from '../../../store/slice/interfacciaAmmSlice';
import { closeSnackbarConfirmDelForm, snackbarConfirmDelForm } from '../../../store/slice/snackbarSlice';
import useStyles from './style';

interface Props {IDForm : string}

const SnackbarConfirmDelForm = ({ IDForm }:Props):ReactElement => {
  const statusSnackbar = useSelector(snackbarConfirmDelForm);
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <Snackbar
      open={statusSnackbar}
      autoHideDuration={10000}
      onClose={() => dispatch(closeSnackbarConfirmDelForm())}
    >
      <Alert severity="warning">
        <div className={classes.button}>
          <Typography variant="body1">
            Sicuro di voler eliminare il formulario?
          </Typography>

          <Button onClick={() => {
            dispatch(DeleteAnsForm(IDForm));
            dispatch(closeAndFilterDialog());
            dispatch({ type: 'INIT_INTERFACCIA' });
            dispatch(closeSnackbarConfirmDelForm());
          }}
          >
            Si
          </Button>
          <Button onClick={() => dispatch(closeSnackbarConfirmDelForm())}>
            No
          </Button>
        </div>
      </Alert>

    </Snackbar>
  );
};

export default SnackbarConfirmDelForm;
