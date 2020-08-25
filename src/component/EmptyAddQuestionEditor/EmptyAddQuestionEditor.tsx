import React from 'react';
import TextField from '@material-ui/core/TextField';
import { IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { useSelector, useDispatch } from 'react-redux';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import useStyles from './style';
import {
  setBAddDomandaClicked, isTextFieldNewDomandaDisabled,
  isBAddDomandaClicked, setBAddDomandaUnclicked, setDomanda,
  addDomandaInArray,
  question,
  resetDomanda,
  colorBCheckAddDomanda,
  isBCheckAddDomandaDisabled,
  setBCheckAddDomandaDisabled,
  setBCheckAddDomandaEnabled,
} from '../../store/slice/domandeAddFormSlice';
import {
  isIconsDisabled, unsetIcons, setIcons, colorIcons,
} from '../../store/slice/addFormSlice';
import { resetRisposteObject } from '../../store/slice/risposteAddFormSlice';

const EmptyAddQuestionEditor = () => {
  const dispatch = useDispatch();
  const valoreTextField = useSelector(question);
  const isIconEnabled = useSelector(isIconsDisabled);
  const colButton = useSelector(colorIcons);
  const classes = useStyles();
  const colBCheck = useSelector(colorBCheckAddDomanda);
  const bCheckDisabled = useSelector(isBCheckAddDomandaDisabled);
  const textFieldDomandaDisabled = useSelector(isTextFieldNewDomandaDisabled);
  const buttonAddClicked = useSelector(isBAddDomandaClicked);

  return (
    <div className={classes.marginGenerico}>
      <Grid container spacing={3}>

        {!buttonAddClicked
          ? (
            <>
              <Grid item xs={12} sm={1}>
                <IconButton
                  color={colButton}
                  disabled={isIconEnabled}
                  onClick={() => {
                    dispatch(setBAddDomandaClicked());
                    dispatch(unsetIcons());
                  }}

                >
                  <AddCircleOutlineIcon />
                </IconButton>
              </Grid>
              <Grid item xs={12} sm={1} />

            </>
          ) : (
            <>
              <Grid item xs={12} sm={2}>
                <IconButton
                  disabled={bCheckDisabled}
                  color={colBCheck}
                  onClick={() => {
                    dispatch(addDomandaInArray());
                    dispatch(setIcons());
                    dispatch(resetRisposteObject());
                  }}

                >
                  <CheckCircleOutlineIcon />
                </IconButton>
                <IconButton
                  color="primary"
                  onClick={() => {
                    dispatch(setBAddDomandaUnclicked());
                    dispatch(resetDomanda());
                    dispatch(setIcons());
                  }}
                >
                  <HighlightOffIcon />
                </IconButton>
              </Grid>
              <Grid item xs={12} sm={10}>
                <TextField
                  autoFocus={!textFieldDomandaDisabled}
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

export default EmptyAddQuestionEditor;
