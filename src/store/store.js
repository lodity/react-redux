import { applyMiddleware, combineReducers, createStore } from 'redux';
import { countReducer } from './countReducer';
import { userReducer } from './userReducer';
import createSagaMiddleware from 'redux-saga';
import { countWatcher } from '../saga/countSaga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
	count: countReducer,
	users: userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(countWatcher);
