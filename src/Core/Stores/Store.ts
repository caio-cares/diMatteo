import {applyMiddleware, Store, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import Reducer from './rootReducer';
import rootSaga from './rootSaga';
import { ExperiencesState } from './Experience/ExperienceTypes';
import { GuestsState } from './Guest/GuestTypes';
import { DateTimeState } from './DateTime/DateTimeTypes';

export interface ApplicationState {
  experiences: ExperiencesState,
  guests: GuestsState,
  dateTime: DateTimeState
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<any> = createStore(Reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;