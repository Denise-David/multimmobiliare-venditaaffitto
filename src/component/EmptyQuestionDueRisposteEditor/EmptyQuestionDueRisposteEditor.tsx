import React from 'react';
import TextField from '@material-ui/core/TextField';
import { IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { useSelector, useDispatch } from 'react-redux';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import { colDisable, isDisable } from '../../store/slice/editFormSlice';
import {
  setBAddDomandaClicked, isTextFieldNewDomandaDisabled,
  isBAddDomandaClicked, setBAddDomandaUnclicked, setDomanda,
  addDomandaInArray,
  question,
} from '../../store/slice/domandeAddFormSlice';

const EmptyQuestionDueRisposteEditor = () => {
  const dispatch = useDispatch();
  const colorButton = useSelector(colDisable);
  const disableActive = useSelector(isDisable);
  const valoreTextField = useSelector(question);

  const textFieldDomandaDisabled = useSelector(isTextFieldNewDomandaDisabled);
  const buttonAddClicked = useSelector(isBAddDomandaClicked);
  return (
    <div>
      <Grid container spacing={3}>

        {!buttonAddClicked
          ? (
            <>
              <Grid item xs={12} sm={1}>
                <IconButton
                  onClick={() => dispatch(setBAddDomandaClicked())}
                  disabled={disableActive}
                >
                  <AddCircleOutlineIcon color={colorButton} />
                </IconButton>
              </Grid>
              <Grid item xs={12} sm={1} />

            </>
          ) : (
            <>
              <Grid item xs={12} sm={2}>
                <IconButton
                  onClick={() => dispatch(addDomandaInArray())}
                >
                  <CheckCircleOutlineIcon color="primary" />
                </IconButton>
                <IconButton onClick={() => dispatch(setBAddDomandaUnclicked())}>
                  <HighlightOffIcon color="primary" />
                </IconButton>
              </Grid>
              <Grid item xs={12} sm={10}>
                <TextField
                  autoFocus={!textFieldDomandaDisabled}
                  value={valoreTextField}
                  onChange={(event) => {
                    const { value } = event.target;
                    dispatch(setDomanda(value));
                  }}
                  disabled={textFieldDomandaDisabled}
                  id="standard-basic"
                  fullWidth
                />
              </Grid>
            </>
          )}

      </Grid>
    </div>
  );
};

export default EmptyQuestionDueRisposteEditor;
