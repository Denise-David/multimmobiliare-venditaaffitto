import React from 'react';
import { IconButton, Grid } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { haveRepModifyRight } from '../../store/slice/rightsSlice';
import { isBModifyDelAddReturnDisabled, disableAll, enableAll } from '../../store/slice/disableEnableSlice';
import { isBConfirmAddFormClicked } from '../../store/slice/addFormSlice';
import {
  deleteDomandaInObjectDomande, setBModifyDomandaClicked,
  setBModifyDomandaUnclicked, isBCheckDisabled,
} from '../../store/slice/domandeAddFormSlice';

interface Props{ domandaAddForm: any}

const ButtonsQuestion = ({ domandaAddForm }: Props) => {
  const rightRepModify = useSelector(haveRepModifyRight);
  const confirmAddReparto = useSelector(isBConfirmAddFormClicked);
  const iconsDisabled = useSelector(isBModifyDelAddReturnDisabled);
  const bCheckDisabled = useSelector(isBCheckDisabled);
  const dispatch = useDispatch();
  return (
    <>
      {rightRepModify || confirmAddReparto
        ? (
          <>
            {' '}
            { domandaAddForm.stateText
              ? (
                < >
                  <Grid item xs={12} sm={1}>
                    <IconButton
                      color="primary"
                      disabled={iconsDisabled}
                      onClick={() => {
                        dispatch(setBModifyDomandaClicked(domandaAddForm.IDDomanda));
                        dispatch(disableAll());
                      }}
                    >
                      <CreateIcon />
                    </IconButton>
                  </Grid>
                  <Grid item xs={12} sm={1}>
                    <IconButton
                      color="primary"
                      disabled={iconsDisabled}
                      onClick={
            () => dispatch(deleteDomandaInObjectDomande(domandaAddForm.IDDomanda))
          }
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                </ >
              ) : (
                <>
                  < >
                    <Grid item xs={12} sm={2}>
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
                    </Grid>

                  </ >

                </>
              )}

          </>
        ) : (
          <>
            {' '}
            <Grid item xs={12} sm={2} />
          </>
        )}
    </>
  );
};

export default ButtonsQuestion;
