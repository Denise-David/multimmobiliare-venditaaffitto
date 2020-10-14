import React, { ReactElement, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import useStyles from './style';
import {
  setDomanda,
  question, isBCheckAddDomandaDisabled, setBCheckAddDomandaDisabled,
  setBCheckAddDomandaEnabled, addDomandaMoreResInArray,
} from '../../../../store/slice/domandeAddFormSlice';
import {
  enableAll,
} from '../../../../store/slice/disableEnableSlice';

const EmptyAddQuestionMoreAnswers = ():ReactElement => {
  const dispatch = useDispatch();
  const valoreTextField = useSelector(question);

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

        <>
          <Grid item xs={12} sm={10}>
            <TextField
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !bCheckDisabled) {
                  dispatch(enableAll());
                  dispatch(addDomandaMoreResInArray());
                  setShowTextField(!showTextField);
                }
              }}
              autoFocus
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
          {/* Bottoni */}

          <IconButton

            disabled={bCheckDisabled}
            color="primary"
            onClick={() => {
              dispatch(enableAll());
              dispatch(addDomandaMoreResInArray());
              setShowTextField(!showTextField);
            }}
          >
            <AddCircleOutlineIcon />
          </IconButton>

        </>

      </Grid>
    </div>
  );
};

export default EmptyAddQuestionMoreAnswers;
