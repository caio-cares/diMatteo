import {all, takeLatest} from 'redux-saga/effects';

import { getExperiences } from './Experience/ExperienceSaga';
import { ExperienceTypes } from './Experience/ExperienceTypes';

export default function* rootSagas() {
  return yield all([
    takeLatest(ExperienceTypes.REQUEST, getExperiences)
  ]);
}