import React from 'react';
import PublishIcon from '@material-ui/icons/Publish';
import { IconButton, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const AddPerson = (nome) => (
  <div style={{
    margin: '0.5em',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  }}
  >

    <Typography style={{ margin: '0.5em', color: 'white' }}>{nome.nome}</Typography>
    <IconButton color="secondary">
      <AddIcon />
    </IconButton>
  </div>
);
export default AddPerson;
