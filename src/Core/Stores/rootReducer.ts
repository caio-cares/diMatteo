import {combineReducers} from 'redux';
import experiences from './Experience/ExperienceReducer';
import guestReducer from './Guest/GuestReducer';
import dateTimeReducer from './DateTime/DateTimeReducer';

export default combineReducers({
  experiences: experiences,
  guest: guestReducer,
  dateTime: dateTimeReducer
});