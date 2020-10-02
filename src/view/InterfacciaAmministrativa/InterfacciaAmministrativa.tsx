import {
  Card, DialogContent, IconButton, TextField,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import { useDispatch } from 'react-redux';
import Navbar from '../../component/Navbar/Navbar';
import useStyles from './style';
import FormularioLine from '../../component/InterfacciaAmministrativa/FormularioLine/FormularioLine';
import { setFamilynameCercato, setNameCercato } from '../../store/slice/interfacciaAmmSlice';
import DialogLabel from '../../component/InterfacciaAmministrativa/DialogLabel/DialogLabel';

const InterfacciaAmministrativa = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'INIT_INTERFACCIA' });
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <div className={classes.paddingGeneral}>
        <DialogLabel />
        <Card className={classes.padding}>
          <IconButton>
            <i className="fas fa-filter" />
          </IconButton>
          <TextField
            onChange={(event) => {
              const { value } = event.target;
              dispatch(setNameCercato(value));
            }}
            className={classes.margin}
            placeholder="Nome"
            variant="outlined"
          />
          <TextField
            onChange={(event) => {
              const { value } = event.target;
              dispatch(setFamilynameCercato(value));
            }}
            className={classes.margin}
            placeholder="Cognome"
            variant="outlined"
          />
          <IconButton color="primary" ari-label="open photocamera" component="span">
            <PhotoCameraIcon fontSize="large" />
          </IconButton>
        </Card>
        <DialogContent className={classes.listGroup} dividers>
          <FormularioLine />
        </DialogContent>
      </div>
    </div>
  );
};

export default InterfacciaAmministrativa;
