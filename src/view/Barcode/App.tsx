import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import useStyles from './style';
import logo from '../../img/eoc.png';

const Barcodepage = () => {
  const classes = useStyles();
  return (
    <div className={classes.Content}>
      <div className={classes.NavColor} />
      <img className={classes.Logo} src={logo} alt="Eoc Logo" />
      <div>
        <Card className={classes.Card}>
          <CardContent className={classes.Center}>
            <Typography variant="h4"> Scannerizza Barcode </Typography>
            <IconButton color="primary" ari-label="open photocamera" component="span">
              <PhotoCameraIcon />
            </IconButton>
          </CardContent>
        </Card>
      </div>
      <div className={classes.Margin}>Oppure</div>
      <div className={classes.Margin}><TextField id="outlined-basic" label="Immetti codice" variant="outlined" /></div>
      <Button variant="contained" color="primary" href="/about">
        Invia
      </Button>

    </div>
  );
};
export default Barcodepage;
