import React from 'react';
import { CardContent, Typography, Card } from '@material-ui/core';
import CropFreeIcon from '@material-ui/icons/CropFree';
import ButtonSend from '../../component/ButtonSendCode/ButtonSendCode';
import TextFieldCodice from '../../component/TextCode/TextCode';
import useStyles from './style';
import Nav from '../../component/Navbar/Navbar';
import CameraButton from '../../component/CameraButton/CameraButton';
import PatientFormDialog from '../../component/PatientFormDialog';

const Barcodepage = () => {
  const classes = useStyles();
  return (
    <div className={classes.Content}>
      <Nav />
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
    </div>

  );
};
export default Barcodepage;
