import React, { ReactElement } from 'react';
import {
  CardContent, Typography, CircularProgress, Paper, TextField,
  MenuItem, DialogContent,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import ButtonSend from '../../component/AutoanamnesiNoLabel/ButtonSendCode/ButtonSendCode';
import useStyles from './style';
import Navbar from '../../component/Navbar/Navbar';
import PatientFormDialog from '../../component/AutoanamnesiNoLabel/PatientFormDialog';
import ShowDeviceDialog from '../../component/AutoanamnesiNoLabel/ShowDeviceDialog/ShowDeviceDialog';
import SummaryDialog from '../../component/AutoanamnesiNoLabel/SummaryDialog/SummaryDialog';

import { isLoading } from '../../store/slice/loadingSlice';
import {
  formSelectedIndex,
  listRisultati, repartoCercato, setFormCercato,
  setFormSelectedID, setFormSelectedIndex, setRepCercato,
} from '../../store/slice/homepageNoLabelSlice';
import { formularioDBType } from '../../store/slice/addFormSlice';

const HomepageNoLabel = ():ReactElement => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);
  const listResult = useSelector(listRisultati);
  const selectedIndex = useSelector(formSelectedIndex);
  const rep = useSelector(repartoCercato);

  const list = listResult.map((res : formularioDBType, index:number) => {
    if (index === selectedIndex) {
      return (
        <MenuItem
     // eslint-disable-next-line no-underscore-dangle
          key={res._id}
          value={index}
          className={classes.selected}
          onClick={() => {
            dispatch(setFormSelectedIndex(index));
            // eslint-disable-next-line no-underscore-dangle
            dispatch(setFormSelectedID(res._id));
          }}
        >
          {res.reparto}
          ,
          {' '}
          {' '}
          {res.formulario}
        </MenuItem>
      );
    }
    return (
      <MenuItem
// eslint-disable-next-line no-underscore-dangle
        key={res._id}
        value={index}
        onClick={() => {
          dispatch(setFormSelectedIndex(index));
          // eslint-disable-next-line no-underscore-dangle
          dispatch(setFormSelectedID(res._id));
        }}
      >
        {res.reparto}
        ,
        {' '}
        {' '}
        {res.formulario}
      </MenuItem>
    );
  });
  return (
    <div className={classes.Content}>

      <Navbar />
      <div className={classes.Card}>
        <Paper>
          <CardContent className={classes.Center}>
            <Typography variant="h4"> Cerca il reparto o il formulario </Typography>
          </CardContent>

        </Paper>

      </div>
      <div className={classes.Margin}>
        <TextField
          value={rep}
          onChange={(event) => {
            const { value } = event.target;
            dispatch(setRepCercato(value));
            dispatch(setFormCercato(value));
            dispatch({ type: 'INIT_HOME_NO_LABEL' });
          }}
          fullWidth
          variant="outlined"
        />

      </div>
      <div className={classes.Margin}>
        <DialogContent className={classes.listGroup} dividers>

          {list}

        </DialogContent>
      </div>

      <ButtonSend />
      {loading
        ? (
          <div>
            <CircularProgress disableShrink />
            {' '}
          </div>
        ) : <></>}

      <PatientFormDialog />
      <ShowDeviceDialog />
      <SummaryDialog />

    </div>

  );
};
export default HomepageNoLabel;
