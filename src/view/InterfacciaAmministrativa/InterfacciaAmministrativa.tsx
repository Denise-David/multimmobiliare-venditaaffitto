import {
  Card, DialogContent, IconButton, TextField,
} from '@material-ui/core';
import React from 'react';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import Navbar from '../../component/Navbar/Navbar';
import useStyles from './style';

const InterfacciaAmministrativa = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <div className={classes.paddingGeneral}>
        <Card className={classes.padding}>
          <TextField className={classes.margin} placeholder="Nome" variant="outlined" />
          <TextField className={classes.margin} placeholder="Cognome" variant="outlined" />
          <IconButton color="primary" ari-label="open photocamera" component="span">
            <PhotoCameraIcon fontSize="large" />
          </IconButton>
        </Card>
        <DialogContent className={classes.listGroup} dividers />
      </div>
    </div>
  );
};

export default InterfacciaAmministrativa;
