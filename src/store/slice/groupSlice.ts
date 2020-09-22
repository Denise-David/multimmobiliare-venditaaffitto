import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const groupSlice = createSlice({
  name: 'group',
  initialState: {
    groupName: '' as string,
    groups: [] as any,
    groupSelectedIndex: -1 as number,
  },
  reducers: {
    resetGroups(state) {
      state.groups = [];
    },
    setGroupsArray(state, { payload }) {
      state.groups = payload;
    },
    setNewGroup(state, { payload }) {
      state.groupName = payload;
    },
    setGroupInGroups(state, { payload }) {
      state.groups.push({ id: payload, name: state.groupName });
    },
    resetGroupName(state) {
      state.groupName = '';
    },
    deleteGroup(state) {
      state.groups.splice(state.groupSelectedIndex, 1);
    },
    setGroupSelectedIndex(state, { payload }) {
      state.groupSelectedIndex = payload;
    },
    modifyGroup(state) {
      state.groupName = state.groups[state.groupSelectedIndex].name;
    },
    setModifyGroup(state) {
      state.groups[state.groupSelectedIndex].name = state.groupName;
    },
    resetSelectedIndex(state) {
      state.groupSelectedIndex = -1;
    },
  },
});

export const groupSelectedIndex = (state: State) => state.group.groupSelectedIndex;
export const groups = (state:State) => state.group.groups;
export const groupName = (state:State) => state.group.groupName;
export const {
  setNewGroup, setGroupInGroups, resetGroupName,
  setGroupSelectedIndex, deleteGroup, modifyGroup, setModifyGroup,
  resetSelectedIndex, setGroupsArray, resetGroups,
} = groupSlice.actions;
export default groupSlice.reducer;
