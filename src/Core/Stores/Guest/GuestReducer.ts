import { Reducer } from 'redux';
import { GuestTypes, GuestsState } from './GuestTypes';

const INITIAL_STATE: GuestsState = {
  data: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    guests: 0
  }
};

const guestReducer: Reducer<GuestsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GuestTypes.SEND:

      const { firstName, lastName, email, phone, guests} = action.payload;

      return { ...state, data: {firstName, lastName, email, phone, guests}}

    default:
      return state
  }
}

export default guestReducer;
