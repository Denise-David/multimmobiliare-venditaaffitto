import { DialogContent, MenuItem, Typography } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './style';
import {
  groups, groupSelectedIndex, isListGroupsDisabled, setGroupSelectedIndex,
} from '../../../../store/slice/groupSlice';

const ListaGruppi = ():ReactElement => {
  const groupsList = useSelector(groups);
  const IDSelected = useSelector(groupSelectedIndex);
  const classes = useStyles();
  const dispatch = useDispatch();
  const listDisabled = useSelector(isListGroupsDisabled);
  const listGroups = !groupsList ? <></> : groupsList.map(
    (gruppo:{id:string, name:string}, index:number) => {
      if (index === IDSelected) {
        return (
          <MenuItem
            disabled={listDisabled}
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
          disabled={listDisabled}
          onClick={() => {
            dispatch(setGroupSelectedIndex(index));
          }}
          key={gruppo.id}
          value={index}
        >
          {gruppo.name}
        </MenuItem>
      );
    },
  );
  return (
    <div className={classes.group}>
      <Typography variant="h5" align="center">Gruppi</Typography>

      <DialogContent className={classes.listGroup} dividers>

        {listGroups}

      </DialogContent>

    </div>
  );
};

export default ListaGruppi;
