import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { useSelector, useDispatch } from 'react-redux';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import useStyles from './style';
import {
  setBAddDomandaClicked, setBAddDomandaUnclicked, setDomanda,
  question, resetDomanda, isBCheckAddDomandaDisabled, setBCheckAddDomandaDisabled,
  setBCheckAddDomandaEnabled, addDomandaMoreResInArray,
} from '../../store/slice/domandeAddFormSlice';
import {
  isBModifyDelAddReturnDisabled, enableAll, disableAll,
} from '../../store/slice/disableEnableSlice';
import { unsetResAtLeast2 } from '../../store/slice/risposteAddFormSlice';

const EmptyAddQuestionMoreAnswers = () => {
  const dispatch = useDispatch();
  const valoreTextField = useSelector(question);
  const isIconEnabled = useSelector(isBModifyDelAddReturnDisabled);
  const classes = useStyles();
  const bCheckDisabled = useSelector(isBCheckAddDomandaDisabled);
  const [showTextField, setShowTextField] = useState(false);

  return (
    <div className={classes.marginGenerico}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >

        {!showTextField
          ? (
            <>
              <Grid item xs={12} sm={10} />
              <Grid item xs={12} sm={1}>
                <IconButton
                  color="primary"
                  disabled={isIconEnabled}
                  onClick={() => {
                    dispatch(disableAll());
                    dispatch(setBAddDomandaClicked());
                    setShowTextField(!showTextField);
                  }}

                >
                  <AddCircleOutlineIcon />
                </IconButton>
              </Grid>

            </>
          ) : (
            <>
              <Grid item xs={12} sm={10}>
                <TextField
                  autoFocus
                  disabled={!showTextField}
                  value={valoreTextField}
                  onChange={(event) => {
                    const { value } = event.target;
                    dispatch(setDomanda(value));
                    if (value === '') {
                      dispatch(setBCheckAddDomandaDisabled());
                    } else if (bCheckDisabled === true) {
                      dispatch(setBCheckAddDomandaEnabled());
                    }
                  }}
                  id="standard-basic"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={1}>
                <IconButton
                  disabled={bCheckDisabled}
                  color="primary"
                  onClick={() => {
                    dispatch(enableAll());
                    dispatch(addDomandaMoreResInArray());
                    setShowTextField(!showTextField);
                    dispatch(unsetResAtLeast2());
                  }}

                >
                  <CheckCircleOutlineIcon />
                </IconButton>
                <IconButton
                  color="primary"
                  onClick={() => {
                    dispatch(setBAddDomandaUnclicked());
                    dispatch(resetDomanda());
                    dispatch(enableAll());
                    setShowTextField(!showTextField);
                  }}
                >
                  <HighlightOffIcon />
                </IconButton>
              </Grid>

            </>
          )}

      </Grid>
    </div>
  );
};

export default EmptyAddQuestionMoreAnswers;
