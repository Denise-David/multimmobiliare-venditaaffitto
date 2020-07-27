import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { IconButton, TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import useStyles from './style';
import { allFormData } from '../../store/slice/formulariSlice';
import { valueAction } from '../../store/slice/repartoSlice';
import {
  addRepartoAction, ddl, confirmAction,
} from '../../store/slice/editFormSlice';

const SceltaReparto = () => {
  const dispatch = useDispatch();
  const ddlState = useSelector(ddl);

  const confirmation = () => {
    dispatch(confirmAction());
  };
  const addReparto = () => {
    dispatch(addRepartoAction());
  };
  const getValueOnChange = (event : React.ChangeEvent<{ value: unknown }>) => {
    const { value } = event.target;
    dispatch(valueAction(value));
    dispatch({ type: 'INIT' });
  };
  const classes = useStyles();
  const listForm = useSelector(allFormData);
  const listItems = listForm.map((oneForm) => (

    // eslint-disable-next-line react/jsx-key
    <MenuItem value={oneForm.ID}>
      {oneForm.Reparto}
    </MenuItem>

  ));
  if (ddlState === 'dropDownList') {
    return (

      <div className={classes.margin}>
        <Grid container>
          <Grid item xs={12} sm={2}>
            <IconButton onClick={addReparto}>
              <AddCircleOutlineIcon fontSize="large" color="primary" />
            </IconButton>
            <IconButton>
              <CreateIcon fontSize="large" color="primary" />
            </IconButton>
            <IconButton>
              <DeleteIcon fontSize="large" color="primary" />
            </IconButton>
          </Grid>
          <Grid item xs={12} sm={10}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="demo-simple-select-outlined-label">
                Reparto
              </InputLabel>
              <Select autoWidth onChange={getValueOnChange}>
                {listItems}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </div>

    );
  }
  return (

    <div className={classes.margin}>
      <Grid container>
        <Grid item xs={12} sm={2}>
          <IconButton onClick={confirmation}>
            <CheckCircleOutlineIcon fontSize="large" color="primary" />
          </IconButton>
          <IconButton>
            <CreateIcon fontSize="large" color="primary" />
          </IconButton>
          <IconButton>
            <DeleteIcon fontSize="large" color="primary" />
          </IconButton>
        </Grid>
        <Grid item xs={12} sm={10}>
          <TextField fullWidth />
        </Grid>
      </Grid>
    </div>

  );
};

export default SceltaReparto;
