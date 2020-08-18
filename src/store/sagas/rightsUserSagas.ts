import {
  select, put, call, all,
} from 'redux-saga/effects';
import {
  user, setRightsUserAUTAN, setRepartiCreate,
} from '../slice/rightsSlice';
import { getUserRights, getRepartiZAM, getRepartiZAS } from '../api';

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
    // li mappo
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
    const listRepartiCreate = allDataRepartiCreate.map((reparto : any) => reparto.data);

    console.log('all', listRepartiCreate);

    yield put(setRepartiCreate(listRepartiCreate));
  } catch (error) {
    console.log(error);
  }
}
