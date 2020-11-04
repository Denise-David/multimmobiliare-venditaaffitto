import React, { ReactElement, useEffect } from 'react';
import {
  CardContent, Typography, CircularProgress, Paper,
} from '@material-ui/core';
import CropFreeIcon from '@material-ui/icons/CropFree';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
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
import { isLoading } from '../../store/slice/loadingSlice';
import SnackbarLabel from '../../component/Autoanamnesi/SnackbarLabel/SnackbarLabel';
import SnackbarNoForm from '../../component/Autoanamnesi/SnackbarNoForm/SnackbarNoForm';

/**
 * Vista dell'autoanamnesi con etichetta
 */
const Home = ():ReactElement => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);

  useEffect(() => {
    // Per la gestione del QRCOde
    // eslint-disable-next-line no-restricted-globals
    const parsed = queryString.parse(location.search);
    if (parsed.etichetta) {
      dispatch(getCodeValue(parsed.etichetta));
      dispatch(buttonSendCode());
    }
  }, [dispatch]);

  const formList = useSelector(formulariList);

  return (
    <div className={classes.Content}>
      {/* Header */}
      <Navbar />
      <div className={classes.Card}>
        {/* Zona per QRCode */}
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
      {/* Zona immissione manuale */}
      <div className={classes.Margin}>Oppure</div>
      <div className={classes.Margin}><TextFieldCodice /></div>
      {/* Scelta formulario */}
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
      {/* Avviso etichetta errata e formulario non selezionato */}
      <SnackbarLabel />
      <SnackbarNoForm />
      {/* Dialog */}
      <PatientFormDialog />
      <ReturnDeviceDialog />
      <SummaryDialog />

    </div>

  );
};
export default Home;
