import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import { useSelector } from 'react-redux';
import useStyles from './style';
import { selectData } from '../../store/slice/formsSlice';

const DropDownList = () => {
  const classes = useStyles();
  const domande = useSelector(selectData);
  // const domande = ['davvero?', 'hai febbre?', 'cosa?', 'nooo?'];
  const listItems = domande.map((domanda : string, key : number) => (

    // eslint-disable-next-line react/no-array-index-key
    <ListItem divider key={key}>
      <Grid container>
        <Grid item xs={12} sm={8}>
          <div className={classes.marginTop}>
            <Typography variant="subtitle1">{domanda}</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl variant="outlined" fullWidth className={classes.margin}>
            <InputLabel id="demo-simple-select-outlined-label"> </InputLabel>
            <Select autoWidth>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={4} />
              <MenuItem value={3} />
              <MenuItem value={2} />
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </ListItem>
  ));

  return (

    <div>{listItems}</div>

  );
};

export default DropDownList;
