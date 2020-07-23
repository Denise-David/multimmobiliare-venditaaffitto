import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
import useStyles from './style';
import { allFormData } from '../../store/slice/formulariSlice';

const SceltaReparto = () => {
  const classes = useStyles();
  const listForm = useSelector(allFormData);
  const listItems = listForm.map((oneForm) => (

    // eslint-disable-next-line react/jsx-key
    <MenuItem value={oneForm.ID}>
      {oneForm.Reparto}
    </MenuItem>

  ));
  return (

    <div className={classes.margin}>
      <Grid container>
        <Grid item xs={12} sm={1}>
          <IconButton color="primary">
            <AddCircleOutlineIcon fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item xs={12} sm={11}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">
              Reparto

            </InputLabel>
            <Select autoWidth>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {listItems}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

export default SceltaReparto;
