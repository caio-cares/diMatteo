import { setFailure, saveExperiences } from './ExperienceAction';
import {call, put} from 'redux-saga/effects';
import api from '../../Services/Api';

export function* getExperiences() {
  try {
    const response: any = yield call(api.get, 'experiencies');
    
    yield put(saveExperiences(response.data));
  } catch(error) {
    yield put(setFailure());
  }
}