import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  AppBar, Button, Dialog, DialogContent,
  Grid, MenuItem, TextField, Toolbar,
  Typography,
} from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import { closeDialogGroup, dialogGroupOpen } from '../../store/slice/dialogSlice';
import useStyles from './style';
import {
  deleteGroup,
  groupName, groups, groupSelectedIndex, modifyGroup,
  resetGroupName, resetSelectedIndex, setGroupInGroups,
  setGroupSelectedIndex, setModifyGroup, setNewGroup,
} from '../../store/slice/groupSlice';

const GroupDialog = () => {
  const statusDialog = useSelector(dialogGroupOpen);
  const dispatch = useDispatch();
  const classes = useStyles();
  const idGroup = uuidv4();
  const group = useSelector(groupName);
  const groupsList = useSelector(groups);
  const IDSelected = useSelector(groupSelectedIndex);
  const [modify, setModify] = useState(false);
  const [disabledAdd, setDisabledAdd] = useState(true);
  const [disabledDel, setDisabledDel] = useState(false);
  const [disabledMod, setDisabledMod] = useState(false);
  const [disabledList, setdisabledList] = useState(false);
  if (IDSelected === -1 && disabledDel === false) {
    setDisabledDel(!disabledDel);
    setDisabledMod(!disabledMod);
  } else if (IDSelected !== -1 && disabledDel === true) {
    setDisabledDel(!disabledDel);
    setDisabledMod(!disabledMod);
  }

  // eslint-disable-next-line max-len
  const listGroups = !groupsList ? <></> : groupsList.map((gruppo:any, index:number) => {
    if (index === IDSelected) {
      return (
        <MenuItem
          disabled={disabledList}
          className={classes.selected}
          onClick={() => {
            dispatch(setGroupSelectedIndex(index));
          }}
          key={gruppo.id}
          value={index}
        >
          {gruppo.name}
        </MenuItem>
      );
    }
    return (
      <MenuItem
        disabled={disabledList}
        onClick={() => {
          dispatch(setGroupSelectedIndex(index));
        }}
        key={gruppo.id}
        value={index}
      >
        {gruppo.name}
      </MenuItem>
    );
  });
  return (
    <Dialog className={classes.dialog} maxWidth="xl" open={statusDialog} onClose={() => dispatch(closeDialogGroup())} scroll="paper">

      <AppBar position="static" color="primary">
        <Toolbar><Typography variant="h5">Gruppi</Typography></Toolbar>
      </AppBar>
      <div className={classes.dialog}>
        <Grid
          container
          justify="space-around"
          alignItems="center"
        >
          <Grid item xs={12} sm={4}>
            <TextField
              value={group}
              onChange={(event) => {
                const { value } = event.target;
                dispatch(setNewGroup(value));
                if (value === '' && disabledAdd === false) {
                  setDisabledAdd(!disabledAdd);
                } else if (value !== '' && disabledAdd === true && modify === false) {
                  setDisabledAdd(!disabledAdd);
                }
              }}
              placeholder="Nome gruppo"
              fullWidth
              variant="outlined"
            />
          </Grid>
          {' '}

          <Grid item xs={12} sm={2}>
            <div className={classes.marginButton}>
              <Button
                disabled={disabledDel}
                onClick={() => {
                  dispatch(resetGroupName());
                  dispatch(deleteGroup());
                  dispatch(resetSelectedIndex());
                  if (disabledAdd === false) {
                    setDisabledAdd(!disabledAdd);
                  } if (disabledList === true) {
                    setdisabledList(!disabledList);
                  }
                }}
                variant="contained"
                color="primary"
                className={classes.margin}
              >
                ELIMINA

              </Button>

              <Button
                disabled={disabledMod}
                onClick={() => {
                  if (modify === false) {
                    setModify(!modify);
                    dispatch(modifyGroup());
                    setdisabledList(!disabledList);
                  }
                  if (modify === true) {
                    setModify(!modify);
                    dispatch(setModifyGroup());
                    dispatch(resetGroupName());
                    dispatch(resetSelectedIndex());
                    setdisabledList(!disabledList);
                  }
                }}
                variant="contained"
                color="primary"
                className={classes.margin}
              >
                {modify
                  ? <Typography variant="body1">Conferma modifica</Typography> : <Typography variant="body1"> Modifica</Typography>}

              </Button>

              <Button
                onClick={() => {
                  dispatch(setGroupInGroups(idGroup));
                  dispatch(resetGroupName());
                  setDisabledAdd(!disabledAdd);
                }}
                disabled={disabledAdd}
                variant="contained"
                color="primary"
                className={classes.margin}
              >
                AGGIUNGI

              </Button>
            </div>
          </Grid>
          {' '}

          <Grid item xs={12} sm={5}>
            <div className={classes.group}>
              <Typography variant="h5" align="center">Gruppi</Typography>

              <DialogContent className={classes.listGroup} dividers>

                {listGroups}

              </DialogContent>

            </div>
          </Grid>
        </Grid>
      </div>
    </Dialog>

  );
};

export default GroupDialog;
