import { applyMiddleware, combineReducers, createStore } from 'redux';
import { countReducer } from './countReducer';
import { userReducer } from './userReducer';
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from '../saga/saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
	count: countReducer,
	users: userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);
