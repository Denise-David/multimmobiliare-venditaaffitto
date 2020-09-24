import { Grid, IconButton } from '@material-ui/core';
import React from 'react';
import CreateIcon from '@material-ui/icons/Create';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRisultato, setBModifyClicked, setBModifyUnclicked } from '../../../../../store/slice/risultatiAddFormSlice';
import { disableAll, enableAll } from '../../../../../store/slice/disableEnableSlice';
import { isBCheckDisabled } from '../../../../../store/slice/domandeAddFormSlice';

interface Props{oneForm: any}

const ButtonResultLine = ({ oneForm } : Props) => {
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
            }}
            color="primary"
          >
            <CreateIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12} sm={1}>
          <IconButton
            color="primary"
            onClick={() => dispatch(deleteRisultato(oneForm.IDRisultato))}
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
      UFFA
    </>

  );
};

export default ButtonResultLine;
