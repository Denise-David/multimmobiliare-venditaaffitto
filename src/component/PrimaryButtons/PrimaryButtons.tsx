import React from 'react';
import {
  Grid, IconButton, Fab,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './style';
import {
  isButtonAddFormClicked, buttonConfirmAddFormClicked,
  isConfirmDisabled, colButton, buttonCancelAddFormClicked,
  isBConfirmAddFormClicked, isBSaveDisabled,
  buttonSaveFormClicked, buttonDeleteOrSaveClicked, buttonAddClicked, saveModifyForm,
} from '../../store/slice/addFormSlice';
import { isDisable, colDisable } from '../../store/slice/risultatiAddFormSlice';
import {
  rightsUserAUTAN, setUserCreateRight, setUserDeleteRight,
  setUserModifyRight, haveUserCreateRight, repartiDelete, haveRepDeleteRight,
  setRepartoDeleteRight, haveRepModifyRight, setRepartoModifyRight, repartiModify,
} from '../../store/slice/rightsSlice';
import { IDRepartoSelected, IDForm } from '../../store/slice/repartoDDLSlice';

const PrimaryButtons = () => {
  const classes = useStyles();
  const addReparto = useSelector(isButtonAddFormClicked);
  const dispatch = useDispatch();
  const confirmDisabled = useSelector(isConfirmDisabled);
  const buttonColor = useSelector(colButton);
  const bConfirmAddFormClicked = useSelector(isBConfirmAddFormClicked);
  const isSaveDisabled = useSelector(isBSaveDisabled);
  const disableActive = useSelector(isDisable);
  const colorButton = useSelector(colDisable);
  const noRep = useSelector(IDForm);
  const rightUser = useSelector(rightsUserAUTAN);
  const rightCreate = useSelector(haveUserCreateRight);
  const rightRepModify = useSelector(haveRepModifyRight);
  const IDRepSelected = useSelector(IDRepartoSelected);
  const repDelete = useSelector(repartiDelete);
  const rightRepDelete = useSelector(haveRepDeleteRight);
  const repModify = useSelector(repartiModify);

  // controllo i diritti che ha l'utente
  // eslint-disable-next-line array-callback-return
  rightUser.map((scope: any) => {
    if (scope.id === 6856) {
      dispatch(setUserCreateRight());
    } // diritto delete
    if (scope.id === 6876) {
      dispatch(setUserDeleteRight());
      // eslint-disable-next-line array-callback-return
      repDelete.map((reparto:any) => {
        if (IDRepSelected === reparto.unitid || IDRepSelected === reparto.sermednodeid) {
          dispatch(setRepartoDeleteRight());
        }
      });
    }
    if (scope.id === 6916) {
      dispatch(setUserModifyRight());
      // eslint-disable-next-line array-callback-return
      repModify.map((reparto:any) => {
        if (IDRepSelected === reparto.unitid || IDRepSelected === reparto.sermednodeid) {
          dispatch(setRepartoModifyRight());
        }
      });
    }
  });

  return (
    <Grid item xs={12} sm={2}>
      {/* Pulsanti accanto al dropDownList scelta reparto */}
      {addReparto
        ? (
          <div>
            {/* se il pulsante add è attivo */}
            <IconButton
              onClick={() => dispatch(buttonConfirmAddFormClicked())}
              disabled={confirmDisabled}
            >
              <CheckCircleOutlineIcon fontSize="large" color={buttonColor} />
            </IconButton>
            <IconButton

              onClick={() => dispatch(buttonCancelAddFormClicked())}
            >
              <KeyboardReturnIcon fontSize="large" color="primary" />
            </IconButton>
          </div>
        )
        : (
          <>
            {' '}
            {bConfirmAddFormClicked
              ? (
                <div>
                  {/* Se add è non è attivo ed è stato cliccato il confirm add Form */}

                  <IconButton
                    disabled={isSaveDisabled}
                    onClick={() => dispatch(buttonSaveFormClicked())}
                    color="primary"
                  >
                    <SaveIcon fontSize="large" />
                  </IconButton>

                  <IconButton
                    disabled={disableActive}
                    onClick={
                        () => dispatch(buttonCancelAddFormClicked())
                        }
                  >
                    <KeyboardReturnIcon fontSize="large" color={colorButton} />
                  </IconButton>
                </div>
              ) : (
                <div>
                  {/* se add non è attivo e non è stato cliccato il
                   confirm add form e non è sel. un reparto */}
                  {noRep === '-1'
                    ? (
                      <>
                        {rightCreate
                          ? (
                            <Fab
                              className={classes.buttonAdd}
                              onClick={() => dispatch(buttonAddClicked())}
                              color="primary"
                              disabled={disableActive}
                            >
                              <AddIcon />

                            </Fab>
                          ) : <></>}

                      </>
                    )
                    : (
                      <div>
                        <div>
                          {/* se add non è attivo ed è selezionato il reparto */}
                          {rightCreate
                            ? (
                              <Fab
                                className={classes.buttonAdd}
                                onClick={() => dispatch(buttonAddClicked())}
                                color="primary"
                                disabled={disableActive}
                              >
                                <AddIcon />
                              </Fab>
                            ) : <></>}
                        </div>
                        <div className={classes.ButtonDelSaveCanc}>
                          {rightRepDelete
                            ? (
                              <IconButton
                                disabled={disableActive}
                                onClick={() => dispatch(buttonDeleteOrSaveClicked())}
                              >
                                <DeleteIcon
                                  fontSize="large"
                                  color={colorButton}
                                />
                              </IconButton>
                            ) : <></>}
                          {rightRepModify

                            ? (
                              <IconButton
                                disabled={disableActive}
                                onClick={() => dispatch(saveModifyForm())}
                                color="primary"
                              >
                                <SaveIcon fontSize="large" />
                              </IconButton>
                            ) : <></>}
                          <IconButton
                            disabled={disableActive}
                            onClick={
                        () => dispatch(buttonCancelAddFormClicked())
                        }
                          >
                            <KeyboardReturnIcon fontSize="large" color={colorButton} />
                          </IconButton>
                        </div>
                      </div>
                    )}
                </div>
              )}
          </>

        )}
    </Grid>

  );
};

export default PrimaryButtons;
