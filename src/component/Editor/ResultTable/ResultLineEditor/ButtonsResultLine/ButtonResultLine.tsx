import { Grid, IconButton } from '@material-ui/core';
import React, { ReactElement } from 'react';
import CreateIcon from '@material-ui/icons/Create';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteRisultato, resultType, setBModifyClicked,
  setBModifyUnclicked,
} from '../../../../../store/slice/risultatiAddFormSlice';
import { disableAll, enableAll } from '../../../../../store/slice/disableEnableSlice';
import { isBCheckDisabled, setBCheckEnabled } from '../../../../../store/slice/domandeAddFormSlice';
import { setUnsavedChanges } from '../../../../../store/slice/addFormSlice';

interface Props{oneForm: resultType}

// Bottoni risultato
const ButtonResultLine = ({ oneForm } : Props):ReactElement => {
  const dispatch = useDispatch();
  const bCheckDisabled = useSelector(isBCheckDisabled);
  if (!oneForm.stateModify) {
    return (
      <>
        <Grid item xs={12} sm={1}>
          <IconButton

            onClick={() => {
              dispatch(disableAll());
              dispatch(setBModifyClicked(oneForm.IDRisultato));
              dispatch(setBCheckEnabled());
              dispatch(setUnsavedChanges());
            }}
            color="primary"
          >
            <CreateIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12} sm={1}>
          <IconButton
            color="primary"
            onClick={() => {
              dispatch(deleteRisultato(oneForm.IDRisultato));
              dispatch(setUnsavedChanges());
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Grid>
      </>
    );
  }
  return (
    <>

      <Grid item xs={12} sm={2}>
        <IconButton
          onClick={() => {
            dispatch(enableAll());
            dispatch(setBModifyUnclicked(oneForm.IDRisultato));
          }}
          color="primary"
          disabled={bCheckDisabled}
        >
          <CheckCircleOutlineIcon />
        </IconButton>
      </Grid>

    </>

  );
};

export default ButtonResultLine;
