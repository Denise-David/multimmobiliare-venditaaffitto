import {
  Card, DialogContent, Grid, IconButton, TextField,
} from '@material-ui/core';
import React, { ReactElement, useEffect } from 'react';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../component/Navbar/Navbar';
import useStyles from './style';
import FormularioLine from '../../component/InterfacciaAmministrativa/FormularioNoLabelLine/FormularioNoLabelLine';
import { filtro, setFamilynameCercato, setNameCercato } from '../../store/slice/interfacciaAmmSlice';
import DialogLabel from '../../component/InterfacciaAmministrativa/DialogLabel/DialogLabel';
import DialogFilter from '../../component/InterfacciaAmministrativa/DialogFilter/DialogFilter';
import { openDialogFiltro } from '../../store/slice/dialogSlice';
import FormularioLabelLine from '../../component/InterfacciaAmministrativa/FormularioLabelLine/FormularioLabelLine';
import DialogLabelManager from '../../component/InterfacciaAmministrativa/DialogLabelManager/DialogLabelManager';

const InterfacciaAmministrativa = ():ReactElement => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const filterForm = useSelector(filtro);
  useEffect(() => {
    dispatch({ type: 'INIT_INTERFACCIA' });
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <div className={classes.paddingGeneral}>
        <DialogLabel />
        <DialogFilter />
        <DialogLabelManager />
        <Card className={classes.padding}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <IconButton onClick={() => dispatch(openDialogFiltro())}>
              <i className={`fas fa-filter ${classes.color}`} />
            </IconButton>
            <div>
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
            </div>
            <IconButton color="primary" ari-label="open photocamera" component="span">
              <PhotoCameraIcon fontSize="large" />
            </IconButton>
          </Grid>
        </Card>

        <DialogContent className={classes.listGroup} dividers>
          {filterForm === 'Senza etichetta'
            ? <FormularioLine /> : (
              <>
                { filterForm === 'Con etichetta' ? <FormularioLabelLine />
                  : (
                    <>
                      <FormularioLine />
                      <FormularioLabelLine />

                    </>
                  )}
              </>
            )}

        </DialogContent>
      </div>
    </div>
  );
};

export default InterfacciaAmministrativa;
