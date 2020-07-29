import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

const CameraButton = () => (
  <IconButton color="primary" ari-label="open photocamera" component="span">
    <PhotoCameraIcon fontSize="large" />
  </IconButton>
);
export default CameraButton;
