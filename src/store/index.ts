import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';
import { rootReducer } from './ducks/rootReducer';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, compose((applyMiddleware(sagaMiddleware))));

sagaMiddleware.run(rootSaga);


