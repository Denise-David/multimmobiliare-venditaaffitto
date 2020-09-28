import React, { useState } from 'react';
import {
  IconButton, FormControlLabel, Checkbox,
} from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { haveRepModifyRight } from '../../../../store/slice/rightsSlice';
import { isBModifyDelAddReturnDisabled, disableAll, enableAll } from '../../../../store/slice/disableEnableSlice';
import { isBConfirmAddFormClicked } from '../../../../store/slice/addFormSlice';
import {
  deleteDomandaInObjectDomande, setBModifyDomandaClicked,
  setBModifyDomandaUnclicked, isBCheckDisabled,
  setDomandaFacoltativa, setDomandaLibera, setBCheckEnabled,
} from '../../../../store/slice/domandeAddFormSlice';

interface Props{ domandaAddForm: any}

const ButtonsQuestion = ({ domandaAddForm }: Props) => {
  const rightRepModify = useSelector(haveRepModifyRight);
  const confirmAddReparto = useSelector(isBConfirmAddFormClicked);
  const iconsDisabled = useSelector(isBModifyDelAddReturnDisabled);
  const bCheckDisabled = useSelector(isBCheckDisabled);
  const dispatch = useDispatch();
  const rightMod = useSelector(haveRepModifyRight);
  const confirmClicked = useSelector(isBConfirmAddFormClicked);
  const [disabled, setDisabled] = useState(false);

  if ((rightMod || confirmClicked) && disabled === true) {
    setDisabled(!disabled);
  } else if ((!rightMod && !confirmClicked) && disabled === false) {
    setDisabled(!disabled);
  }
  return (
    <>
      {rightRepModify || confirmAddReparto
        ? (
          <>
            {' '}
            { domandaAddForm.stateText
              ? (
                < >

                  <IconButton
                    color="primary"
                    disabled={iconsDisabled}
                    onClick={() => {
                      dispatch(setBModifyDomandaClicked(domandaAddForm.IDDomanda));
                      dispatch(disableAll());
                      dispatch(setBCheckEnabled());
                    }}
                  >
                    <CreateIcon />
                  </IconButton>

                  <IconButton
                    color="primary"
                    disabled={iconsDisabled}
                    onClick={
            () => dispatch(deleteDomandaInObjectDomande(domandaAddForm.IDDomanda))
          }
                  >
                    <DeleteIcon />
                  </IconButton>

                  <FormControlLabel
                    control={(
                      <Checkbox
                        disabled={disabled}
                        checked={domandaAddForm.facoltativa}
                        onChange={() => dispatch(setDomandaFacoltativa(domandaAddForm.IDDomanda))}
                      />
        )}
                    label="facoltativa"
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        disabled={disabled}
                        checked={domandaAddForm.libera}
                        onChange={() => dispatch(setDomandaLibera(domandaAddForm.IDDomanda))}
                      />
        )}
                    label="libera"
                  />
                </ >
              ) : (
                <>
                  < >

                    <IconButton
                      disabled={bCheckDisabled}
                      color="primary"
                      onClick={
                () => {
                  dispatch(setBModifyDomandaUnclicked(domandaAddForm.IDDomanda));
                  dispatch(enableAll());
                }
              }
                    >
                      <CheckCircleOutlineIcon />
                    </IconButton>

                    <FormControlLabel
                      control={(
                        <Checkbox
                          disabled={disabled}
                          checked={domandaAddForm.facoltativa}
                          onChange={() => dispatch(setDomandaFacoltativa(domandaAddForm.IDDomanda))}
                        />
        )}
                      label="facoltativa"
                    />
                    <FormControlLabel
                      control={(
                        <Checkbox
                          disabled={disabled}
                          checked={domandaAddForm.libera}
                          onChange={() => dispatch(setDomandaLibera(domandaAddForm.IDDomanda))}
                        />
        )}
                      label="libera"
                    />

                  </ >

                </>
              )}

          </>
        ) : (
          <>
            {' '}
            <FormControlLabel
              control={(
                <Checkbox
                  disabled={disabled}
                  checked={domandaAddForm.facoltativa}
                  onChange={() => dispatch(setDomandaFacoltativa(domandaAddForm.IDDomanda))}
                />
        )}
              label="facoltativa"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  disabled={disabled}
                  checked={domandaAddForm.libera}
                  onChange={() => dispatch(setDomandaLibera(domandaAddForm.IDDomanda))}
                />
        )}
              label="libera"
            />
          </>
        )}
    </>
  );
};

export default ButtonsQuestion;
