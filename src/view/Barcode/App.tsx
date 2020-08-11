import React, { useEffect } from 'react';
import { CardContent, Typography, Card } from '@material-ui/core';
import CropFreeIcon from '@material-ui/icons/CropFree';
import queryString from 'query-string';
import { useDispatch } from 'react-redux';
import ButtonSend from '../../component/ButtonSendCode/ButtonSendCode';
import TextFieldCodice from '../../component/TextCode/TextCode';
import useStyles from './style';
import Navbar from '../../component/Navbar/Navbar';
import CameraButton from '../../component/CameraButton/CameraButton';
import PatientFormDialog from '../../component/PatientFormDialog';
import ReturnDeviceDialog from '../../component/ReturnDeviceDialog/ReturnDeviceDialog';
import SummaryDialog from '../../component/SummaryDialog/SummaryDialog';
import { getCodeValue, buttonSendCode } from '../../store/slice/CodeSlice';

const Barcodepage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    const parsed = queryString.parse(location.search);
    if (parsed.etichetta) {
      dispatch(getCodeValue(parsed.etichetta));
      dispatch(buttonSendCode());
    }
  }, [dispatch]);

  return (
    <div className={classes.Content}>
      <Navbar />
      <div className={classes.Card}>
        <Card>
          <CardContent className={classes.Center}>
            <Typography variant="h4"> Scannerizza Barcode </Typography>
            <div>
              <CropFreeIcon color="secondary" style={{ fontSize: 150, margin: 30 }} />
            </div>
            <CameraButton />
          </CardContent>
        </Card>
      </div>
      <div className={classes.Margin}>Oppure</div>
      <div className={classes.Margin}><TextFieldCodice /></div>
      <ButtonSend />
      <PatientFormDialog />
      <ReturnDeviceDialog />
      <SummaryDialog />
    </div>

  );
};
export default Barcodepage;
