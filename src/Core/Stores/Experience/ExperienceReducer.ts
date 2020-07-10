import { Reducer } from 'redux';
import { ExperienceTypes, ExperiencesState } from './ExperienceTypes';

const INITIAL_STATE: ExperiencesState = {
  data: [],
  error: false,
  loading: false,
  currentExperience: {
    id: 0,
    menu: '',
    picture: '',
    description: ''
  }
};

const experienceReducer: Reducer<ExperiencesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ExperienceTypes.REQUEST:
      return { ...state, loading: true};

    case ExperienceTypes.ADD:
      return { ...state, loading: false, error: false, data: action.payload.data};

    case ExperienceTypes.SET:
      return { ...state, currentExperience: action.payload};

    case ExperienceTypes.FAILURE:
      return { ...state, loading: false, error: true, data: []};

    default:
      return state;
  }
}

export default experienceReducer;