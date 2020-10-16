import React, { useEffect } from 'react';
import {
  CardContent, Typography, Snackbar, CircularProgress, Paper,
} from '@material-ui/core';
import CropFreeIcon from '@material-ui/icons/CropFree';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '@material-ui/lab/Alert';
import ButtonSend from '../../component/Autoanamnesi/ButtonSendCode/ButtonSendCode';
import TextFieldCodice from '../../component/Autoanamnesi/TextCode/TextCode';
import useStyles from './style';
import Navbar from '../../component/Navbar/Navbar';
import CameraButton from '../../component/Autoanamnesi/CameraButton/CameraButton';
import PatientFormDialog from '../../component/Autoanamnesi/PatientFormDialog';
import ReturnDeviceDialog from '../../component/Autoanamnesi/ReturnDeviceDialog/ReturnDeviceDialog';
import SummaryDialog from '../../component/Autoanamnesi/SummaryDialog/SummaryDialog';
import {
  getCodeValue, buttonSendCode,
} from '../../store/slice/labelCodeSlice';
import DropDownListFormulariBarcode from '../../component/Autoanamnesi/DropDownListFormulariBarcode/DropDownListFormulariBarcode';
import { formulariList } from '../../store/slice/homePageLabelSlice';
import { closeSnackbarLabelPage, snackbarLabelOpen } from '../../store/slice/snackbarSlice';
import { isLoading } from '../../store/slice/loadingSlice';

const Barcodepage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);

  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    const parsed = queryString.parse(location.search);
    if (parsed.etichetta) {
      dispatch(getCodeValue(parsed.etichetta));
      dispatch(buttonSendCode());
    }
  }, [dispatch]);

  const formList = useSelector(formulariList);
  const statusSnackbarBarcode = useSelector(snackbarLabelOpen);
  return (
    <div className={classes.Content}>

      <Navbar />
      <div className={classes.Card}>
        <Paper>
          <CardContent className={classes.Center}>
            <Typography variant="h4"> Scannerizza Barcode </Typography>
            <div>
              <CropFreeIcon color="secondary" style={{ fontSize: 150, margin: 30 }} />
            </div>
            <CameraButton />
          </CardContent>

        </Paper>
      </div>
      <div className={classes.Margin}>Oppure</div>
      <div className={classes.Margin}><TextFieldCodice /></div>
      {formList.length > 1
        ? <div className={classes.Margin}><DropDownListFormulariBarcode /></div>
        : <></>}

      <ButtonSend />
      {loading
        ? (
          <div>
            <CircularProgress disableShrink />
            {' '}
          </div>
        ) : <></>}
      <Snackbar
        open={statusSnackbarBarcode}
        autoHideDuration={2000}
        onClose={() => dispatch(closeSnackbarLabelPage())}
      >
        <Alert severity="warning">
          <Typography variant="body1">
            Codice immesso errato
          </Typography>
        </Alert>
      </Snackbar>
      <PatientFormDialog />
      <ReturnDeviceDialog />
      <SummaryDialog />

    </div>

  );
};
export default Barcodepage;
