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
  addDomandaInArray, question, resetDomanda,
  isBCheckAddDomandaDisabled, setBCheckAddDomandaDisabled, setBCheckAddDomandaEnabled,
} from '../../../../store/slice/domandeAddFormSlice';
import {
  isBModifyDelAddReturnDisabled, disableAll, enableAll,
} from '../../../../store/slice/disableEnableSlice';

const EmptyAddQuestion2Answers = () => {
  const dispatch = useDispatch();
  const valoreTextField = useSelector(question);
  const iconsDisabled = useSelector(isBModifyDelAddReturnDisabled);
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
                  disabled={iconsDisabled}
                  onClick={() => {
                    dispatch(setBAddDomandaClicked());
                    dispatch(setBCheckAddDomandaDisabled());
                    dispatch(disableAll());
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
                    dispatch(addDomandaInArray());
                    dispatch(setBCheckAddDomandaEnabled());
                    dispatch(enableAll());
                    setShowTextField(!showTextField);
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

export default EmptyAddQuestion2Answers;
