import { GuestTypes } from './GuestTypes';
import { action } from 'typesafe-actions';

export const setGuests = (data: number) => action(GuestTypes.SEND, data);