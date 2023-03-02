import { all } from 'redux-saga/effects';
import teamsSaga from './teamSaga';

const sagas = [
  teamsSaga
];

export default function* rootSaga() {
  yield all(sagas.map(saga => saga()));
}
