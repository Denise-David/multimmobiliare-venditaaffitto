import React from 'react';
import { CardContent, Typography, Card } from '@material-ui/core';
import CropFreeIcon from '@material-ui/icons/CropFree';
import ButtonSend from '../../component/ButtonSend/ButtonSend';
import TextFieldCodice from '../../component/TextFieldCodice/TextFieldCodice';
import useStyles from './style';
import Nav from '../../component/Navbar/Nav';
import logo from '../../img/eoc.png';
import CameraButton from '../../component/CameraButton/CameraButton';

const Barcodepage = () => {
  const classes = useStyles();
  return (
    <div className={classes.Content}>
      <Nav />
      <img className={classes.Logo} src={logo} alt="Eoc Logo" />

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
    </div>

  );
};
export default Barcodepage;
