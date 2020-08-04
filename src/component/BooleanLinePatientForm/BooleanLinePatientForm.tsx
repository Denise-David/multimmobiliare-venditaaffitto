import React from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import useStyles from './style';

const BooleanAnswer = () => {
  const classes = useStyles();
  return (
    <form className={classes.risposta}>
      <FormControl component="fieldset">
        <RadioGroup aria-label="quiz" name="quiz">
          <FormControlLabel value="best" control={<Radio />} label="Si" />
          <FormControlLabel value="worst" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
    </form>
  );
};

export default BooleanAnswer;
