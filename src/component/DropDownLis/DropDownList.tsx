import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './style';

const DropDownList = () => {
  const classes = useStyles();
  return (

    <Grid container>
      <Grid item xs={12} sm={8}>
        <div className={classes.marginTop}>
          <Typography variant="subtitle1">
            Come valuta globalmente il fastidio alle gambe e alle braccia derivante dalla RLS?
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormControl variant="outlined" fullWidth className={classes.margin}>
          <InputLabel id="demo-simple-select-outlined-label"> </InputLabel>
          <Select autoWidth>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={4}>molto grave</MenuItem>
            <MenuItem value={3}>grave</MenuItem>
            <MenuItem value={2}>moderato</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>

  );
};

export default DropDownList;
