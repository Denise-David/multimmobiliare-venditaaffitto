import React from 'react';
import {
  Grid, Typography, TextField,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './style';
import { setIntestazioneMoreAns, intestazioneMoreAnswers } from '../../store/slice/domandeAddFormSlice';
import { haveRepModifyRight } from '../../store/slice/rightsSlice';
import confirmAddForm from '../../store/sagas/departmentChoiceEditorSagas';

const TextFieldIntestazioneQuesMoreAnswers = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const int = useSelector(intestazioneMoreAnswers);
  const rightMod = useSelector(haveRepModifyRight);
  const confirmClicked = useSelector(confirmAddForm);
  return (
    <div className={classes.spaceTopIntestazione}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={2}>
          <Typography variant="body1" align="center">Intestazione*</Typography>
        </Grid>
        <Grid item xs={12} sm={9}>
          <TextField
            disabled={!rightMod || !confirmClicked}
            onChange={(event) => {
              const { value } = event.target;
              dispatch(setIntestazioneMoreAns(value));
            }}
            fullWidth
            variant="outlined"
            value={int}
          />
        </Grid>
        <Grid item xs={12} sm={1} />
      </Grid>
    </div>
  );
};

export default TextFieldIntestazioneQuesMoreAnswers;
