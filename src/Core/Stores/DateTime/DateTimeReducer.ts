import { Reducer } from 'redux';
import { DateTimeState, DateTimeTypes } from './DateTimeTypes';

const INITIAL_STATE: DateTimeState = {
  data: {
    date: '',
    hour: ''
  }
};

const dateTimeReducer: Reducer<DateTimeState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DateTimeTypes.SEND:
      return { ...state, data: {date: action.payload.date, hour: action.payload.hour}}

    default:
      return state
  }
}

export default dateTimeReducer;
