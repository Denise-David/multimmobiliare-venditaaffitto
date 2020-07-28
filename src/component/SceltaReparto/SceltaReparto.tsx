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
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import useStyles from './style';
import { allFormData } from '../../store/slice/formulariSlice';
import { valueAction } from '../../store/slice/repartoSlice';
import {
  addRepartoAction, modify, modifyRepartoAction,
} from '../../store/slice/editFormSlice';
import { selectData } from '../../store/slice/formSlice';

const SceltaReparto = () => {
  const dispatch = useDispatch();

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
  const domande = useSelector(selectData);
  const modifyReparto = useSelector(modify);

  const listItems = listForm.map((oneForm) => (

    <MenuItem key={oneForm.ID} value={oneForm.ID}>
      {oneForm.Reparto}
    </MenuItem>
  ));

  if (domande !== null) {
    return (
    // se è selezionato un reparto e modify non è stato cliccato
      <div className={classes.margin}>
        <Grid container>
          <Grid item xs={12} sm={2}>
            {modifyReparto
              ? (
                <div>
                  <IconButton onClick={() => dispatch(modifyRepartoAction())}>
                    <AddCircleOutlineIcon fontSize="large" color="primary" />
                  </IconButton>
                  <IconButton>
                    <CreateIcon fontSize="large" color="primary" />
                  </IconButton>
                  <IconButton>
                    <DeleteIcon fontSize="large" color="primary" />
                  </IconButton>
                </div>
              )
              : (
                <div>
                  <IconButton onClick={() => dispatch(modifyRepartoAction())}>
                    <CheckCircleOutlineIcon fontSize="large" color="primary" />
                  </IconButton>
                  <IconButton>
                    <HighlightOffIcon fontSize="large" color="primary" />
                  </IconButton>
                </div>
              )}
          </Grid>
          <Grid item xs={12} sm={10}>
            {modifyReparto
              ? (
                <FormControl variant="outlined" fullWidth>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Reparto
                  </InputLabel>
                  <Select autoWidth onChange={getValueOnChange}>
                    {listItems}
                  </Select>
                </FormControl>
              ) : <TextField fullWidth />}
          </Grid>
        </Grid>
      </div>
    );
  }
  return (
  // se non è selezionato un reparto e la casella è una dropdownlist
    <div className={classes.margin}>
      <Grid container>
        <Grid item xs={12} sm={2}>
          <IconButton onClick={addReparto}>
            <AddCircleOutlineIcon fontSize="large" color="primary" />
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

  //   return (
  //     // se non è selezionato un reparto e la casella è una dropdownlist
  //     <div className={classes.margin}>
  //       <Grid container>
  //         <Grid item xs={12} sm={2}>
  //           <IconButton onClick={addReparto}>
  //             <AddCircleOutlineIcon fontSize="large" color="primary" />
  //           </IconButton>
  //         </Grid>
  //         <Grid item xs={12} sm={10}>
  //           <FormControl variant="outlined" fullWidth>
  //             <InputLabel id="demo-simple-select-outlined-label">
  //               Reparto
  //             </InputLabel>
  //             <Select autoWidth onChange={getValueOnChange}>
  //               {listItems}
  //             </Select>
  //           </FormControl>
  //         </Grid>
  //       </Grid>
  //     </div>

  //   );
  // } if (modifyActive === false) {
  //   return (
  //   // se la casella è un TextField e non è attiva la modifica
  //     <div className={classes.margin}>
  //       <Grid container>
  //         <Grid item xs={12} sm={2}>
  //           <IconButton onClick={confirmation}>
  //             <CheckCircleOutlineIcon fontSize="large" color="primary" />
  //           </IconButton>
  //           <IconButton>
  //             <HighlightOffIcon fontSize="large" color="primary" />
  //           </IconButton>
  //         </Grid>
  //         <Grid item xs={12} sm={10}>
  //           <TextField fullWidth />
  //         </Grid>
  //       </Grid>
  //     </div>

  //   );
  // }
  // const listItems = listForm.map((oneForm) => (

  //   <TextField key={oneForm.ID} value={oneForm.Reparto} fullWidth />

  // ));

  // );
};

export default SceltaReparto;
