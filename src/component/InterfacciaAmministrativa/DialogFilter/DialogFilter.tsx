import {

  Dialog, FormControlLabel, Radio,
  RadioGroup,

} from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './style';
import { filtro, setFiltro } from '../../../store/slice/interfacciaAmmSlice';
import { closeAndFilterDialog, closeDialogFiltro, dialogFiltro } from '../../../store/slice/dialogSlice';

// Dialog con i filtri
const DialogFilter = ():ReactElement => {
  const filter = useSelector(filtro);
  const classes = useStyles();
  const dispatch = useDispatch();
  const open = useSelector(dialogFiltro);
  return (

    <Dialog open={open} onClose={() => dispatch(closeDialogFiltro())}>

      <div className={classes.padding}>
        <RadioGroup
          aria-label="gender"
          onChange={(event) => {
            const { value } = event.target;
            dispatch(setFiltro(value));
            dispatch(closeAndFilterDialog());
            dispatch(closeDialogFiltro());
          }}
          value={filter}
          name="gender1"
        >
          <FormControlLabel value="Senza etichetta" control={<Radio />} label="Senza etichetta" />
          <FormControlLabel value="Con etichetta" control={<Radio />} label="Con etichetta" />
          <FormControlLabel value="Tutti" control={<Radio />} label="Tutti" />
        </RadioGroup>
      </div>
    </Dialog>

  );
};

export default DialogFilter;
