import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import CropFreeIcon from '@material-ui/icons/CropFree';
import useStyles from './style';

const CardElement = () => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.Card}>
        <CardContent className={classes.Center}>
          <Typography variant="h4"> Scannerizza Barcode </Typography>
          <div>
            <CropFreeIcon color="secondary" style={{ fontSize: 150, margin: 30 }} />
          </div>
          <IconButton color="primary" ari-label="open photocamera" component="span">
            <PhotoCameraIcon fontSize="large" />
          </IconButton>
        </CardContent>
      </Card>
    </div>
  );
};
export default CardElement;
