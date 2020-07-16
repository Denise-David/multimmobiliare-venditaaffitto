import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { IconButton } from '@material-ui/core';

const SceltaReparto = () => (

  <div>
    <List>
      <ListItem>
        <IconButton color="primary">
          <AddCircleOutlineIcon fontSize="large" />
        </IconButton>
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="demo-simple-select-outlined-label"> Reparto</InputLabel>
          <Select autoWidth>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={4}>Pronto soccorso </MenuItem>
            <MenuItem value={3}>Sonno ed epilettogia</MenuItem>
          </Select>
        </FormControl>
      </ListItem>
    </List>
  </div>
);

export default SceltaReparto;
