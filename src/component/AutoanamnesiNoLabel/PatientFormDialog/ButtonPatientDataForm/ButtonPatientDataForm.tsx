import { IconButton } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CreateIcon from '@material-ui/icons/Create';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { openSnackbarDoctor, openSnackbarFamilyDoctor, openSnackbarFieldEmpty } from '../../../../store/slice/snackbarSlice';
import {
  fieldDoctorEmpty, fieldFamilyDoctorEmpty, obligatoryFieldEmpty,
  resetBirthday,
  resetNewPatientInfo, switchStateDisabled, textFieldDisabled,
  unsetCancelClicked, unsetCheckboxDoctor, unsetCheckboxFamilyDoctor,
} from '../../../../store/slice/patientDataSlice';

// Bottoni dei dati del paziente
const ButtonPatientDataForm = ():ReactElement => {
  const obbFieldempty = useSelector(obligatoryFieldEmpty);
  const modifyClicked = useSelector(textFieldDisabled);
  const dispatch = useDispatch();
  const familyDoctorEmpty = useSelector(fieldFamilyDoctorEmpty);
  const doctorEmpty = useSelector(fieldDoctorEmpty);

  if (modifyClicked) {
    return (
      <IconButton onClick={() => {
        dispatch(unsetCancelClicked());
        dispatch(switchStateDisabled());
      }}
      >
        <CreateIcon color="primary" fontSize="large" />
      </IconButton>
    );
  } return (
    <>
      <IconButton onClick={() => {
        if (!obbFieldempty && !familyDoctorEmpty && !doctorEmpty) {
          dispatch(switchStateDisabled());
        } else if (obbFieldempty) {
          dispatch(openSnackbarFieldEmpty());
        } else if (familyDoctorEmpty) {
          dispatch(openSnackbarFamilyDoctor());
        } else if (doctorEmpty) {
          dispatch(openSnackbarDoctor());
        }
      }}
      >
        <CheckCircleOutlineIcon color="primary" fontSize="large" />
      </IconButton>
      <IconButton onClick={() => {
        dispatch(switchStateDisabled());
        dispatch(resetNewPatientInfo());
        dispatch(unsetCheckboxDoctor());
        dispatch(unsetCheckboxFamilyDoctor());
        dispatch(resetBirthday());
      }}
      >
        <HighlightOffIcon color="primary" fontSize="large" />
      </IconButton>
    </>
  );
};

export default ButtonPatientDataForm;
