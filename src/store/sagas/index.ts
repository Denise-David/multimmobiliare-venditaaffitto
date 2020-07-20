import {
  all, takeLatest,
} from 'redux-saga/effects';

function* prova(action : any) {
  yield console.log('xxx', action);
}
function* actionWatcher() {
  yield takeLatest('prova', prova);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
