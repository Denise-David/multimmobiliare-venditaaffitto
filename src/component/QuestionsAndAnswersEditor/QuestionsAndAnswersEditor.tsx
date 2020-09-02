import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import CreateIcon from '@material-ui/icons/Create';
import {
  IconButton, Typography, Divider, AppBar, Collapse, Card,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AnswerLineEditor from '../AnswerLineEditor/AnswerLineEditor';
import EmptyAnswerLineEditor from '../EmptyAnswerLineEditor/EmptyAnswerLineEditor';
import EmptyAddQuestionMoreAnswers from '../EmptyAddQuestionMoreAnswers/EmptyAddQuestionMoreAnswers';
import {
  isDisable, colDisable, disableAll, enableAll,
} from '../../store/slice/risultatiAddFormSlice';

import useStyles from './style';
import {
  domandeObject, deleteDomandaFormPiuRes,
  setBModifyDomandaClicked, setBModifyDomandaUnclicked, modifyDomandaInObjectDomande,
} from '../../store/slice/domandeAddFormSlice';
import { objectToArray } from '../../util';
import { unsetIcons, setIcons, isBConfirmAddFormClicked } from '../../store/slice/addFormSlice';
import { haveRepModifyRight } from '../../store/slice/rightsSlice';

const QuestionsAndAnswersEditor = () => {
  const dispatch = useDispatch();

  const disableActive = useSelector(isDisable);
  const colorButton = useSelector(colDisable);
  const classes = useStyles();
  const domandeAddedObject = useSelector(domandeObject);

  const arrayDomandeAdded = objectToArray(domandeAddedObject);
  const rightRepModify = useSelector(haveRepModifyRight);
  const confirmAddFormClicked = useSelector(isBConfirmAddFormClicked);

  // vista domande da aggiunta nuovo form
  const listDomandeAdded = arrayDomandeAdded.map((domanda : any) => {
    const { IDDomanda } = domanda;
    const question = domanda.Domanda;

    return (

      <div key={domanda.ID}>
        {domanda.Tipo === 'a più risposte'
          ? (
            <Card className={classes.bordiCard} elevation={3}>
              <div className={classes.bordi}>
                <span className={classes.bordi}>
                  <Grid container>
                    <Grid item xs={12} sm={1}>
                      {!domanda.stateText
                        ? (
                          <IconButton
                            onClick={
                            () => dispatch(setBModifyDomandaUnclicked(domanda.IDDomanda))
}
                            className={classes.space}
                          >
                            <ExpandMoreIcon fontSize="large" color="secondary" />
                          </IconButton>
                        ) : (
                          <IconButton
                            onClick={
                            () => dispatch(setBModifyDomandaClicked(domanda.IDDomanda))
}
                            className={classes.space}
                          >
                            <ExpandLessIcon fontSize="large" color="secondary" />
                          </IconButton>
                        ) }
                    </Grid>
                    <Grid item xs={12} sm={1} />

                    <Grid item xs={12} sm={3}>
                      <Typography variant="subtitle1" align="center">
                        Domanda
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Typography variant="subtitle1" align="center">
                        Risposte
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={1}>
                      <Typography variant="subtitle1" align="center">
                        Valore
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={2} />
                  <Divider />

                </span>
                <Collapse in={domanda.stateText}>
                  <Grid container spacing={3}>
                    {rightRepModify || confirmAddFormClicked
                      ? (
                        <>
                          {' '}
                          {domanda.stateText
                            ? (
                              < >
                                {/* <TextFieldIntestazione /> */}
                                <Grid item xs={12} sm={1}>
                                  <IconButton
                                    disabled={disableActive}
                                    onClick={() => {
                                      dispatch(disableAll());
                                      dispatch(setBModifyDomandaClicked(domanda.IDDomanda));
                                      dispatch(unsetIcons());
                                    }}
                                  >
                                    <CreateIcon color={colorButton} />
                                  </IconButton>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                  <IconButton
                                    onClick={
                                    () => dispatch(deleteDomandaFormPiuRes(domanda.IDDomanda))
                                    }
                                    disabled={disableActive}
                                  >
                                    <DeleteIcon color={colorButton} />
                                  </IconButton>
                                </Grid>
                              </ >
                            ) : (
                              < >
                                {/* <TextFieldIntestazione /> */}
                                <Grid item xs={12} sm={1}>
                                  <IconButton onClick={() => {
                                    dispatch(enableAll());
                                    dispatch(setBModifyDomandaUnclicked(domanda.IDDomanda));
                                    dispatch(setIcons());
                                  }}
                                  >
                                    <CheckCircleOutlineIcon color="primary" />
                                  </IconButton>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                  <IconButton onClick={() => {
                                    dispatch(enableAll());
                                    dispatch(setBModifyDomandaUnclicked(domanda.IDDomanda));
                                    dispatch(setIcons());
                                  }}
                                  >
                                    <HighlightOffIcon color="primary" />
                                  </IconButton>
                                </Grid>
                              </ >
                            ) }
                        </>
                      ) : (
                        <>
                          {' '}
                          {' '}
                          {/* <TextFieldIntestazione /> */}
                          <Grid item xs={12} sm={2} />
                        </>
                      )}

                    <Grid item xs={12} sm={10}>
                      <TextField
                        disabled={domanda.stateText}
                        value={domanda.Domanda}
                        fullWidth
                        onChange={() => dispatch(modifyDomandaInObjectDomande(
                          { IDDomanda, question },
                        ))}
                      />
                    </Grid>
                  </Grid>

                  <AnswerLineEditor id={domanda.IDDomanda} />
                  {rightRepModify || confirmAddFormClicked
                    ? <EmptyAnswerLineEditor IDDomanda={domanda.IDDomanda} /> : <></>}
                </Collapse>
              </div>
            </Card>
          ) : <></>}

      </div>

    );
  });
  const [expanded, setExpanded] = useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <AppBar position="static" className={classes.NavColor}>

        <Typography variant="h5" align="left">
          {expanded
            ? (
              <IconButton onClick={handleExpandClick} className={classes.space}>
                <ExpandLessIcon fontSize="large" color="secondary" />
              </IconButton>
            ) : (
              <IconButton onClick={handleExpandClick} className={classes.space}>
                <ExpandMoreIcon fontSize="large" color="secondary" />
              </IconButton>
            ) }
          Domande e risposte
        </Typography>
      </AppBar>
      <Collapse in={expanded}>
        <div className={classes.padding}>
          <div className={classes.marginDivider} />
          {listDomandeAdded}
          {rightRepModify || confirmAddFormClicked
            ? <EmptyAddQuestionMoreAnswers /> : <></>}
        </div>
      </Collapse>
    </div>
  );
};

export default QuestionsAndAnswersEditor;
