/* eslint-disable no-underscore-dangle */
import React, { ReactElement } from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import useStyles from './style';
import { openDialogLabelManager } from '../../../../store/slice/dialogSlice';
import { getNameFamilynameLabel, setLabel, setSelected } from '../../../../store/slice/interfacciaAmmSlice';

interface Props {IDForm : string, reparto:string | undefined,
  formulario:string, nomeCognome:string, etichetta: string | undefined}

/**
 * Bottone gestione etichetta
 */

const ButtonLabel = ({
  IDForm, reparto, formulario, nomeCognome, etichetta,
}:Props):ReactElement => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div>
      <Button
        className={classes.margin}
        variant="contained"
        color="primary"
        onClick={() => {
          dispatch(setSelected({
            nomeCognome, formulario, reparto, IDForm,
          }));
          dispatch(openDialogLabelManager());
          dispatch(setLabel(etichetta));
          dispatch(getNameFamilynameLabel());
        }}
      >
        Gestisci etichetta
      </Button>
    </div>
  );
};

export default ButtonLabel;
