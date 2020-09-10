import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Collapse, Card } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import AnswerLineEditor from '../AnswerLineEditor/AnswerLineEditor';
import EmptyAnswerLineEditor from '../EmptyAnswerLineEditor/EmptyAnswerLineEditor';
import EmptyAddQuestionMoreAnswers from '../EmptyAddQuestionMoreAnswers/EmptyAddQuestionMoreAnswers';
import HeaderDomandaMoreAnswers from '../HeaderDomandaMoreAnswers/HeaderDomandaMoreAnswers';
import useStyles from './style';
import {
  domandeObject, modifyDomandaInObjectDomande, setBCheckDisabled,
  setBCheckEnabled, isBCheckDisabled, expandedTable,
} from '../../store/slice/domandeAddFormSlice';
import { objectToArray } from '../../util';
import { isBConfirmAddFormClicked } from '../../store/slice/addFormSlice';
import { haveRepModifyRight } from '../../store/slice/rightsSlice';
import { risposteTutteUguali } from '../../store/slice/menuDomandeERisposteSlice';
import HeaderRisposteMoreAnswers from '../HeaderRisposteMoreAnswers/HeaderRisposteMoreAnswers';
import ButtonsQuestionsAndAnswers from '../ButtonsQuestionsAndAnswers/ButtonsQuestionsAndAnswers';
import NavQuestionsAndAnswers from '../NavQuestionsAndAnswers/NavQuestionsAnsAnswers';

const QuestionsAndAnswersEditor = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const domandeAddedObject = useSelector(domandeObject);
  const arrayDomandeAdded = objectToArray(domandeAddedObject);
  const rightRepModify = useSelector(haveRepModifyRight);
  const confirmAddFormClicked = useSelector(isBConfirmAddFormClicked);
  const bCheckDisabled = useSelector(isBCheckDisabled);
  const expanded = useSelector(expandedTable);
  const risTutteUguali = useSelector(risposteTutteUguali);

  // vista domande da aggiunta nuovo form
  const listDomandeAdded = arrayDomandeAdded.map((domanda : any, index) => {
    const { IDDomanda } = domanda;

    return (

      <div key={domanda.ID}>
        {domanda.Tipo === 'a più risposte'
          ? (
            <>
              {' '}
              {risTutteUguali
                ? (
                  <>
                    {index === 0
                      ? (
                        <Card className={classes.bordiCardRisposte}>
                          <div className={classes.bordi}>
                            <HeaderRisposteMoreAnswers />
                            <AnswerLineEditor
                              id={domanda.IDDomanda}

                            />
                            {rightRepModify || confirmAddFormClicked
                              ? <EmptyAnswerLineEditor IDDomanda={domanda.IDDomanda} /> : <></>}
                          </div>
                        </Card>
                      ) : <></>}
                  </>
                )
                : <></>}
              <Card className={classes.bordiCard} elevation={3}>
                <div className={classes.bordi}>
                  <HeaderDomandaMoreAnswers />
                  <Grid container spacing={3}>
                    {/* bottoni domanda */}
                    <ButtonsQuestionsAndAnswers domanda={domanda} />
                    {/* Text Field domanda */}
                    <Grid item xs={12} sm={9}>
                      <TextField
                        disabled={domanda.stateText}
                        value={domanda.Domanda}
                        fullWidth
                        onChange={(event) => {
                          const question = event.target.value;
                          if (question === '') {
                            dispatch(setBCheckDisabled());
                          } else if (bCheckDisabled === true) {
                            dispatch(setBCheckEnabled());
                          }
                          dispatch(modifyDomandaInObjectDomande(
                            { IDDomanda, question },
                          ));
                        }}
                      />
                    </Grid>
                  </Grid>
                  {risTutteUguali ? <></>
                    : (
                      <Collapse in={!domanda.openCard}>
                        <AnswerLineEditor
                          id={domanda.IDDomanda}
                        />
                        {rightRepModify || confirmAddFormClicked
                          ? <EmptyAnswerLineEditor IDDomanda={domanda.IDDomanda} /> : <></>}
                      </Collapse>
                    )}
                </div>
              </Card>
              {' '}
            </>
          ) : <></>}
      </div>
    );
  });
  return (
    <div>
      <NavQuestionsAndAnswers />
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
