import {
  select, put, call, all,
} from 'redux-saga/effects';
import {
  user, setRightsUserAUTAN, setRepartiCreate, setRepartiDelete,
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

    // filtro solo il diritto CREATE
    const findCreate = (right : any) => right.id === 6856;
    const rightCreate = data.find(findCreate);
    // filtro gli scope del Create
    const scopesCreate = rightCreate.scopes;
    // li mappo controllando se sono ZAM o ZAS
    const allDataRepartiCreate = yield all(scopesCreate.map((scope :any) => {
      if (scope.areaType === 'UP-ZAM') {
        const repartiZAM = call(getRepartiZAM, scope.areaCode);
        return repartiZAM;
      } if (scope.areaType === 'UP-ZAS') {
        const repartiZAS = call(getRepartiZAS, scope.areaCode);
        console.log('xxReparti', repartiZAS);
        return repartiZAS;
      }
      return null;
    }));
    // estraggo i reparti
    const listRepartiCreate = allDataRepartiCreate.map((reparto : any) => reparto.data);

    // li metto su una variabile di stato
    yield put(setRepartiCreate(listRepartiCreate));

    // filtro solo il diritto DELETE
    const findDelete = (right : any) => right.id === 6876;
    const rightDelete = data.find(findDelete);

    // filtro gli scope del delete
    const scopesDelete = rightDelete.scopes;
    // li mappo controllando se sono ZAM o ZAS
    const allDataRepartiDelete = yield all(scopesDelete.map((scope :any) => {
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
    const listRepartiDelete = allDataRepartiDelete.map((reparto : any) => reparto.data);

    // unisco gli array dell'array
    const arrayRepartiDelete = extractAndMergeArray(listRepartiDelete);
    const arrayRepartiCreate = extractAndMergeArray(listRepartiCreate);
    const arrayAllReparti = arrayRepartiDelete.concat(arrayRepartiCreate);
    // elimino i doppioni
    const ArrayUnique = arrayAllReparti.filter(
      (reparto : any, index : any, self: any) => index === self.findIndex(
        (t:any) => (
          t.unitid === reparto.unitid
        ),
      ),
    );
    // li metto su una variabile di stato
    yield put(setRepartiDelete(listRepartiDelete));
  } catch (error) {
    console.log(error);
  }
}
