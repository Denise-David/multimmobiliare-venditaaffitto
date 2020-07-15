import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const DropDownList = () => (
  <FormControl variant="outlined" fullWidth>
    <InputLabel id="demo-simple-select-outlined-label"> Come valuta globalmente il fastidio alle gambe e alle braccia derivante dalla RLS?</InputLabel>
    <Select autoWidth>
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value={4}>molto grave</MenuItem>
      <MenuItem value={3}>grave</MenuItem>
      <MenuItem value={2}>moderato</MenuItem>
    </Select>
  </FormControl>
);

export default DropDownList;
