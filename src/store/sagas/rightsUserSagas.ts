import {
  select, put, call, all,
} from 'redux-saga/effects';
import { uniqBy } from 'lodash';
import {
  repartoScopeRightType,
  repartoRightType,
  rightType,
  repartiModify,
  haveUserModifyRight,
  repartiCreate,
  haveUserCreateRight, haveUserDeleteRight,
  user, setRightsUserAUTAN, setRepartiCreate, setRepartiDelete,
  setAllReparti, repartiDelete, setRepartiModify, scopeType,
} from '../slice/rightsSlice';

import { getUserRights, getRepartiZAM, getRepartiZAS } from '../api';
import { extractAndMergeArray } from '../../util';

export default function* initUserRightsAUTAN() {
  try {
    const username = yield select(user);
    const userRights = yield call(getUserRights, username);
    const { data } = userRights;
    // estraggo gli scopes
    yield put(setRightsUserAUTAN(data));
    // controllo i diritti dell utente
    const haveRightCreate = yield select(haveUserCreateRight);
    const haveRightDelete = yield select(haveUserDeleteRight);
    const haveRightModify = yield select(haveUserModifyRight);

    if (haveRightCreate === true) {
      // filtro solo il diritto CREATE
      const findCreate = (right : rightType) => right.code === 'AUTAN_CREATE';
      const rightCreate = data.find(findCreate);
      // filtro gli scope del Create
      const scopesCreate = rightCreate.scopes;
      // li mappo controllando se sono ZAM o ZAS
      const allDataRepartiCreate = yield all(scopesCreate.map((scope :scopeType) => {
        if (scope.areaType === 'UP-ZAM') {
          const repartiZAM = call(getRepartiZAM, scope.areaCode);
          return repartiZAM;
        } if (scope.areaType === 'UP-ZAS') {
          const repartiZAS = call(getRepartiZAS, scope.areaCode);
          return repartiZAS;
        }
        return null;
      }));
      // estraggo i reparti
      const listRepartiCreateSeparate = allDataRepartiCreate.map(
        (reparto : repartoScopeRightType) => reparto.data,
      );

      const listRepartiCreate = extractAndMergeArray(listRepartiCreateSeparate);
      // li metto su una variabile di stato
      yield put(setRepartiCreate(listRepartiCreate));
    }
    if (haveRightDelete === true) {
      // filtro solo il diritto DELETE
      const findDelete = (right : rightType) => right.code === 'AUTAN_DELETE';
      const rightDelete = data.find(findDelete);

      // filtro gli scope del delete

      const scopesDelete = rightDelete.scopes;
      // li mappo controllando se sono ZAM o ZAS
      const allDataRepartiDelete = yield all(scopesDelete.map((scope :scopeType) => {
        if (scope.areaType === 'UP-ZAM') {
          const repartiZAM = call(getRepartiZAM, scope.areaCode);
          return repartiZAM;
        } if (scope.areaType === 'UP-ZAS') {
          const repartiZAS = call(getRepartiZAS, scope.areaCode);
          return repartiZAS;
        }
        return null;
      }));
      // estraggo i reparti Delete
      const listRepartiDeleteSeparate = allDataRepartiDelete.map(
        (reparto :repartoScopeRightType) => reparto.data,
      );

      const listRepartiDelete = extractAndMergeArray(listRepartiDeleteSeparate);
      // li metto su una variabile di stato
      yield put(setRepartiDelete(listRepartiDelete));
    }

    if (haveRightModify === true) {
      // filtro solo il diritto MODIFY
      const findModify = (right : rightType) => right.code === 'AUTAN_MODIFY';
      const rightModify = data.find(findModify);

      // filtro gli scope del modify
      const scopesModify = rightModify.scopes;
      // li mappo controllando se sono ZAM o ZAS
      const allDataRepartiModify = yield all(scopesModify.map((scope :scopeType) => {
        if (scope.areaType === 'UP-ZAM') {
          const repartiZAM = call(getRepartiZAM, scope.areaCode);
          return repartiZAM;
        } if (scope.areaType === 'UP-ZAS') {
          const repartiZAS = call(getRepartiZAS, scope.areaCode);
          return repartiZAS;
        }
        return null;
      }));
      // estraggo i reparti Modify
      console.log('xx', allDataRepartiModify);
      const listRepartiModifySeparate = allDataRepartiModify.map(
        (reparto : repartoScopeRightType) => (
          reparto.data),
      );

      const listRepartiModify = extractAndMergeArray(listRepartiModifySeparate);
      // li metto su una variabile di stato
      yield put(setRepartiModify(listRepartiModify));
    }

    // controllo tramite i diritti i reparti da visualizzare

    const listRepartiModify = yield select(repartiModify);
    const listRepartiDelete = yield select(repartiDelete);
    const listRepartiCreate = yield select(repartiCreate);
    // unisco i reparti del delete e create dell'array
    const arrayAllReparti = listRepartiDelete.concat(listRepartiCreate, listRepartiModify);
    // elimino i doppioni
    const arrayNoDuplicate = uniqBy(arrayAllReparti.map((reparto : repartoRightType) => ({
      ...reparto, ID: reparto.unitid || reparto.sermednodeid,
    })), 'ID');

    // li metto su un a variabile
    yield put(setAllReparti(arrayNoDuplicate));
  } catch (error) {
    console.log(error);
  }
}
