import React from 'react';
import { useSelector } from 'react-redux';
import { newPatientData, oldPatientData } from '../../../../store/slice/patientFormPDFSlice';
import { getStringMedico } from '../../../../util';
import useStyles from './style';

const PatientDoctorData = () => {
  const oldDataPatient = useSelector(oldPatientData);
  const newDataPatient = useSelector(newPatientData);
  const classes = useStyles();
  return (
    <>
      {(oldDataPatient.familyDoctor || newDataPatient.familyDoctor)
            && (
              <>
                { getStringMedico(oldDataPatient.familyDoctor)
                === getStringMedico(newDataPatient.familyDoctor)
                  ? (
                    <>
                      Medico di famiglia :
                      {' '}
                      {getStringMedico(oldDataPatient.familyDoctor)}
                    </>
                  )
                  : (
                    <span className={classes.color}>
                      Medico di famiglia :
                      {' '}
                      {getStringMedico(oldDataPatient.familyDoctor)}
                      <span className={classes.spazio}>
                        NUOVO Medico di famiglia :
                        {' '}
                        { getStringMedico(newDataPatient.familyDoctor)}
                      </span>
                    </span>

                  ) }
              </>
            )}
      <br />
      {(oldDataPatient.doctor || newDataPatient.doctor)
            && (
              <>
                { getStringMedico(oldDataPatient.doctor)
                === getStringMedico(newDataPatient.doctor)
                  ? (
                    <>
                      Medico inviante :
                      {' '}
                      {getStringMedico(oldDataPatient.doctor)}
                    </>
                  )
                  : (
                    <span className={classes.color}>
                      Medico inviante :
                      {' '}
                      {getStringMedico(oldDataPatient.doctor)}
                      <span className={classes.spazio}>
                        NUOVO Medico inviante :
                        {' '}
                        { getStringMedico(newDataPatient.doctor)}
                      </span>
                    </span>

                  ) }
              </>
            )}
    </>
  );
};

export default PatientDoctorData;
